import { StrictMode } from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import App, { ROUTES } from "./App";
import { getMeta, PAGES, NOT_FOUND_META } from "./seo/pages";
import { renderHead } from "./seo/head";
import { CITY_AREAS, NEARBY_AREAS, BUSINESS, HOURS, SITE_URL, LAST_UPDATED, SERVICE_RADIUS_KM } from "./config/site";
import { APPLIANCES } from "./data/appliances";
import { BRANDS } from "./data/brands";

/** Renders one route to { html, head } for the prerender script. */
export function render(url: string) {
  const html = renderToString(
    <StrictMode>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </StrictMode>,
  );
  const meta = url === "/404" ? NOT_FOUND_META : getMeta(url);
  return { html, head: renderHead(meta), lang: meta.lang === "te" ? "te-IN" : "en-IN" };
}

export const routePaths = ROUTES.map((r) => r.path);

export function sitemapXml() {
  const urls = PAGES.filter((p) => !p.noindex)
    .map((p) => {
      const loc = (path: string) => `${SITE_URL}${path === "/" ? "/" : path}`;
      const alts = p.alternates
        ? [["en-IN", p.alternates.en], ["te-IN", p.alternates.te], ["x-default", p.alternates.en]]
            .map(([l, h]) => `\n    <xhtml:link rel="alternate" hreflang="${l}" href="${loc(h)}" />`)
            .join("")
        : "";
      return `  <url>\n    <loc>${loc(p.path)}</loc>${alts}\n    <lastmod>${LAST_UPDATED}</lastmod>\n    <priority>${p.priority.toFixed(2)}</priority>\n  </url>`;
    })
    .join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${urls}\n</urlset>\n`;
}

export function robotsTxt() {
  // Explicitly welcome search and AI answer-engine crawlers.
  const bots = ["Googlebot", "Bingbot", "GPTBot", "OAI-SearchBot", "ChatGPT-User", "ClaudeBot", "Claude-User", "Claude-SearchBot", "PerplexityBot", "Perplexity-User", "Google-Extended", "Applebot", "Applebot-Extended", "DuckDuckBot", "CCBot"];
  return [
    ...bots.flatMap((b) => [`User-agent: ${b}`, "Allow: /", ""]),
    "User-agent: *",
    "Allow: /",
    "",
    `Sitemap: ${SITE_URL}/sitemap.xml`,
    "",
  ].join("\n");
}

/** llms.txt — a plain-Markdown map of the site for LLMs and AI agents (llmstxt.org). */
export function llmsTxt() {
  const sections = new Map<string, string[]>();
  for (const p of PAGES) {
    if (!p.llms) continue;
    const list = sections.get(p.llms.section) ?? [];
    list.push(`- [${p.llms.label}](${SITE_URL}${p.path === "/" ? "/" : p.path}): ${p.description}`);
    sections.set(p.llms.section, list);
  }
  const facts = [
    `- Business: ${BUSINESS.name}`,
    `- What: doorstep repair, servicing, gas filling and installation of ${APPLIANCES.map((a) => a.longName.toLowerCase() + "s").join(", ")}`,
    `- Where: ${BUSINESS.city}, ${BUSINESS.region}, India, plus a ${SERVICE_RADIUS_KM} km radius around the city`,
    `- City localities: ${CITY_AREAS.join(", ")}`,
    `- Nearby towns (within ${SERVICE_RADIUS_KM} km): ${NEARBY_AREAS.join(", ")}`,
    `- Brands: ${BRANDS.map((b) => b.name).join(", ")} (independent multi-brand service, not an authorised brand service centre)`,
    `- Phone / WhatsApp: ${BUSINESS.phoneDisplay} (${BUSINESS.phoneIntl})`,
    `- Email: ${BUSINESS.email}`,
    `- Hours: ${HOURS.display}`,
    `- Warranty: ${BUSINESS.warrantyDays}-day service warranty on repairs`,
    `- Booking: call or WhatsApp; same-day visits in most areas`,
  ];
  const body = [...sections.entries()].map(([name, items]) => `## ${name}\n\n${items.join("\n")}`).join("\n\n");
  return `# ${BUSINESS.name}\n\n> Doorstep AC, refrigerator and washing machine repair in Vijayawada, Andhra Pradesh, India — all major brands, same-day visits, ${BUSINESS.warrantyDays}-day warranty. Call or WhatsApp ${BUSINESS.phoneDisplay}.\n\n## Key facts\n\n${facts.join("\n")}\n\n${body}\n`;
}
