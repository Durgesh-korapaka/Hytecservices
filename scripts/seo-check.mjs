// Audits the prerendered site in dist/: title/description length, duplicates,
// one <h1> per page, valid JSON-LD and no broken internal links.
// Run after `npm run build`:  npm run seo:check
import fs from "node:fs";
import path from "node:path";

const dist = path.resolve("dist");
const files = [];
(function walk(dir) {
  for (const f of fs.readdirSync(dir)) {
    const p = path.join(dir, f);
    if (fs.statSync(p).isDirectory()) walk(p);
    else if (f === "index.html") files.push(p);
  }
})(dist);

// Count visible letters (grapheme clusters) so Telugu isn't over-counted.
const seg = new Intl.Segmenter("te", { granularity: "grapheme" });
const len = (s) => [...seg.segment(s)].length;
const unescape = (s) => s.replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&#x27;/g, "'");
const issues = [];
const titles = new Map();
const descs = new Map();
let jsonLd = 0;

for (const file of files) {
  const html = fs.readFileSync(file, "utf8");
  const route = "/" + path.relative(dist, path.dirname(file)).split(path.sep).join("/");
  const title = unescape(html.match(/<title>([^<]*)<\/title>/)?.[1] ?? "");
  const desc = unescape(html.match(/name="description" content="([^"]*)"/)?.[1] ?? "");

  const te = /lang="te-IN"/.test(html.slice(0, 200));
  const [tMin, tMax, dMin, dMax] = te ? [15, 70, 60, 165] : [25, 70, 110, 165];
  if (len(title) < tMin || len(title) > tMax) issues.push(`${route}: title is ${len(title)} chars`);
  if (len(desc) < dMin || len(desc) > dMax) issues.push(`${route}: description is ${len(desc)} chars`);
  titles.set(title, [...(titles.get(title) ?? []), route]);
  descs.set(desc, [...(descs.get(desc) ?? []), route]);

  const h1 = (html.match(/<h1[\s>]/g) ?? []).length;
  if (h1 !== 1) issues.push(`${route}: ${h1} <h1> tags`);

  for (const m of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
    try {
      JSON.parse(m[1]);
      jsonLd++;
    } catch {
      issues.push(`${route}: invalid JSON-LD`);
    }
  }

  for (const m of html.matchAll(/href="(\/[^"#?]*)"/g)) {
    const url = m[1].replace(/\/$/, "") || "/";
    if (path.extname(url)) continue; // static files
    const target = url === "/" ? path.join(dist, "index.html") : path.join(dist, url, "index.html");
    if (!fs.existsSync(target)) issues.push(`${route}: broken link ${url}`);
  }
}

for (const [t, routes] of titles) if (routes.length > 1) issues.push(`duplicate title "${t}": ${routes.join(", ")}`);
for (const [, routes] of descs) if (routes.length > 1) issues.push(`duplicate description: ${routes.join(", ")}`);

console.log(`${files.length} pages, ${jsonLd} JSON-LD blocks`);
if (issues.length) {
  console.log([...new Set(issues)].join("\n"));
  process.exitCode = 1;
} else console.log("No SEO issues found.");
