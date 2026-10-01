import { useLocation } from "react-router-dom";
import { APPLIANCES } from "@/data/appliances";
import { UI, type Lang } from "./ui";

/** Guides that have a Telugu version (the most-searched problems). */
export const TE_GUIDE_SLUGS = [
  "ac-not-cooling",
  "ac-water-leakage",
  "fridge-not-cooling",
  "washing-machine-not-spinning",
  "washing-machine-not-draining",
] as const;

/** English path -> Telugu path, for every page that exists in both languages. */
export const TE_PAIRS: Record<string, string> = {
  "/": "/te",
  "/contact": "/te/contact",
  ...Object.fromEntries(APPLIANCES.map((a) => [`/${a.slug}`, `/te/${a.slug}`])),
  ...Object.fromEntries(TE_GUIDE_SLUGS.map((s) => [`/guides/${s}`, `/te/guides/${s}`])),
};

const EN_OF = Object.fromEntries(Object.entries(TE_PAIRS).map(([en, te]) => [te, en]));

export const langFromPath = (path: string): Lang => (path === "/te" || path.startsWith("/te/") ? "te" : "en");

/** The en/te versions of a page, or null when it exists in one language only. */
export function alternatesFor(path: string): { en: string; te: string } | null {
  if (TE_PAIRS[path]) return { en: path, te: TE_PAIRS[path] };
  if (EN_OF[path]) return { en: EN_OF[path], te: path };
  return null;
}

/** Where the language switch should go from this page. */
export function switchTarget(path: string): string {
  const alt = alternatesFor(path);
  if (langFromPath(path) === "te") return alt?.en ?? "/";
  return alt?.te ?? "/te";
}

export function useLang() {
  const { pathname } = useLocation();
  const lang = langFromPath(pathname);
  return { lang, t: UI[lang], pathname };
}

/** Prefix an internal link with /te when a Telugu version exists and we're on a Telugu page. */
export function localPath(lang: Lang, enPath: string) {
  return lang === "te" && TE_PAIRS[enPath] ? TE_PAIRS[enPath] : enPath;
}
