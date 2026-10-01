import { useEffect } from "react";
import { BUSINESS } from "@/config/site";
import { abs } from "./schema";
import { getMeta, type PageMeta } from "./pages";

type Tag = { kind: "meta" | "link"; key: "name" | "property" | "rel"; id: string; value: string; hreflang?: string };

function tagsFor(meta: PageMeta): Tag[] {
  const url = abs(meta.path);
  const image = abs("/og-image.jpg");
  const tags: Tag[] = [
    { kind: "meta", key: "name", id: "description", value: meta.description },
    { kind: "meta", key: "name", id: "robots", value: meta.noindex ? "noindex, follow" : "index, follow, max-image-preview:large, max-snippet:-1" },
    { kind: "meta", key: "property", id: "og:type", value: meta.path.includes("/guides/") ? "article" : "website" },
    { kind: "meta", key: "property", id: "og:site_name", value: BUSINESS.name },
    { kind: "meta", key: "property", id: "og:locale", value: meta.lang === "te" ? "te_IN" : "en_IN" },
    { kind: "meta", key: "property", id: "og:title", value: meta.title },
    { kind: "meta", key: "property", id: "og:description", value: meta.description },
    { kind: "meta", key: "property", id: "og:url", value: url },
    { kind: "meta", key: "property", id: "og:image", value: image },
    { kind: "meta", key: "property", id: "og:image:width", value: "1200" },
    { kind: "meta", key: "property", id: "og:image:height", value: "630" },
    { kind: "meta", key: "name", id: "twitter:card", value: "summary_large_image" },
    { kind: "meta", key: "name", id: "twitter:title", value: meta.title },
    { kind: "meta", key: "name", id: "twitter:description", value: meta.description },
    { kind: "meta", key: "name", id: "twitter:image", value: image },
  ];
  if (!meta.noindex) tags.push({ kind: "link", key: "rel", id: "canonical", value: url });
  if (meta.alternates) {
    tags.push({ kind: "link", key: "rel", id: "alternate", hreflang: "en-IN", value: abs(meta.alternates.en) });
    tags.push({ kind: "link", key: "rel", id: "alternate", hreflang: "te-IN", value: abs(meta.alternates.te) });
    tags.push({ kind: "link", key: "rel", id: "alternate", hreflang: "x-default", value: abs(meta.alternates.en) });
  }
  return tags;
}

const esc = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

/** Serialised <head> tags for the prerendered HTML. */
export function renderHead(meta: PageMeta): string {
  const lines = [`<title>${esc(meta.title)}</title>`];
  for (const t of tagsFor(meta)) {
    lines.push(
      t.kind === "meta"
        ? `<meta ${t.key}="${t.id}" content="${esc(t.value)}" />`
        : `<link rel="${t.id}"${t.hreflang ? ` hreflang="${t.hreflang}"` : ""} href="${esc(t.value)}" />`,
    );
  }
  for (const s of meta.schema) {
    // "<" escaped so JSON can never close the script tag.
    lines.push(`<script type="application/ld+json">${JSON.stringify(s).replace(/</g, "\\u003c")}</script>`);
  }
  return lines.join("\n    ");
}

/** Keeps title/meta/canonical in sync during client-side navigation. */
export function useHead(path: string) {
  useEffect(() => {
    const meta = getMeta(path);
    document.title = meta.title;
    document.documentElement.lang = meta.lang === "te" ? "te-IN" : "en-IN";
    document.head.querySelectorAll('link[rel="alternate"][hreflang]').forEach((el) => el.remove());
    for (const t of tagsFor(meta)) {
      if (t.hreflang) {
        const el = document.createElement("link");
        el.rel = "alternate";
        el.hreflang = t.hreflang;
        el.href = t.value;
        document.head.appendChild(el);
        continue;
      }
      const selector = t.kind === "meta" ? `meta[${t.key}="${t.id}"]` : `link[rel="${t.id}"]`;
      let el = document.head.querySelector(selector);
      if (!el) {
        el = document.createElement(t.kind);
        el.setAttribute(t.key, t.id);
        document.head.appendChild(el);
      }
      el.setAttribute(t.kind === "meta" ? "content" : "href", t.value);
    }
    if (meta.noindex) document.head.querySelector('link[rel="canonical"]')?.remove();
  }, [path]);
}
