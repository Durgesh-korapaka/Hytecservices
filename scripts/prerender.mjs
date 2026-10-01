// Turns the client build into static HTML: one file per route, plus 404,
// sitemap.xml, robots.txt and llms.txt. Runs after `vite build` + the SSR build.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dist = path.join(root, "dist");
const ssrEntry = path.join(root, "dist-ssr", "entry-server.js");

const template = fs.readFileSync(path.join(dist, "index.html"), "utf8");
const { render, routePaths, sitemapXml, robotsTxt, llmsTxt } = await import(pathToFileURL(ssrEntry).href);

function write(file, content) {
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, content);
}

function page(url) {
  const { html, head, lang } = render(url);
  // data-route lets the client hydrate only when the host served the matching file.
  return template
    .replace('<html lang="en-IN">', `<html lang="${lang}">`)
    .replace("<!--app-head-->", head)
    .replace('<div id="root"><!--app-html--></div>', `<div id="root" data-route="${url}">${html}</div>`);
}

for (const url of routePaths) {
  const out = url === "/" ? path.join(dist, "index.html") : path.join(dist, url, "index.html");
  write(out, page(url));
}
write(path.join(dist, "404.html"), page("/404"));
write(path.join(dist, "sitemap.xml"), sitemapXml());
write(path.join(dist, "robots.txt"), robotsTxt());
write(path.join(dist, "llms.txt"), llmsTxt());

fs.rmSync(path.join(root, "dist-ssr"), { recursive: true, force: true });
console.log(`Prerendered ${routePaths.length} pages + 404, sitemap.xml, robots.txt, llms.txt`);
