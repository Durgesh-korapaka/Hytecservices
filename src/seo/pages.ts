import { BUSINESS } from "@/config/site";
import { APPLIANCES, APPLIANCE_BY_KEY, APPLIANCE_LABEL, lc } from "@/data/appliances";
import { BRAND_PAGES } from "@/data/brands";
import { GUIDES } from "@/data/guides";
import { OFFERINGS } from "@/data/offerings";
import { AREA_PAGES } from "@/data/areaPages";
import { TE_APPLIANCES, TE_HOME } from "@/data/te-pages";
import { TE_GUIDES } from "@/data/te-guides";
import { alternatesFor } from "@/i18n/lang";
import { HOME_FAQS, brandFaqs, brandPageTitle, brandQuickAnswer } from "@/data/content";
import { article, breadcrumbs, faqPage, localBusiness, service, website, type JsonLd } from "./schema";

export type PageMeta = {
  path: string;
  title: string; // full <title>
  description: string;
  schema: JsonLd[];
  noindex?: boolean;
  lang?: "en" | "te";
  /** en/te versions of the same page, for hreflang. */
  alternates?: { en: string; te: string };
  priority: number; // sitemap priority
  /** Grouping for llms.txt */
  llms?: { section: string; label: string };
};

const SUFFIX = " | AV Appliance Services";
const withSuffix = (t: string) => (t.length + SUFFIX.length <= 70 ? t + SUFFIX : t);

const crumbs = (...items: { name: string; path: string }[]) => breadcrumbs([{ name: "Home", path: "/" }, ...items]);

function build(): PageMeta[] {
  const pages: PageMeta[] = [];

  pages.push({
    path: "/",
    title: "AC, Fridge & Washing Machine Repair in Vijayawada | AV Appliance",
    description:
      "Doorstep AC, fridge and washing machine repair in Vijayawada. Same-day visits, all brands (LG, Samsung, Whirlpool, IFB, Voltas), 90-day warranty. Call 7702177588.",
    schema: [localBusiness(), website(), faqPage(HOME_FAQS)],
    priority: 1,
    llms: { section: "Main pages", label: "Home — overview of all services" },
  });

  pages.push({
    path: "/services",
    title: withSuffix("Appliance Repair Services in Vijayawada"),
    description:
      "All our AC, refrigerator and washing machine repair, servicing, gas filling and installation services in Vijayawada — for every major brand, at your doorstep.",
    schema: [localBusiness(), crumbs({ name: "Services", path: "/services" })],
    priority: 0.9,
    llms: { section: "Main pages", label: "All services" },
  });

  for (const a of APPLIANCES) {
    const path = `/${a.slug}`;
    pages.push({
      path,
      title: withSuffix(a.metaTitle),
      description: a.metaDescription,
      schema: [
        localBusiness(),
        service({
          name: a.title,
          serviceType: `${a.longName} repair`,
          description: a.quickAnswer,
          path,
          offers: a.services.map((s) => s.name),
        }),
        faqPage(a.faq),
        crumbs({ name: "Services", path: "/services" }, { name: a.title, path }),
      ],
      priority: 0.95,
      llms: { section: "Services", label: a.title },
    });
  }

  for (const o of OFFERINGS) {
    const path = `/${o.slug}`;
    const a = APPLIANCE_BY_KEY[o.appliance];
    pages.push({
      path,
      title: withSuffix(o.metaTitle),
      description: o.metaDescription,
      schema: [
        localBusiness(),
        service({
          name: o.title,
          serviceType: o.name,
          description: o.quickAnswer,
          path,
          offers: o.highlights.map((h) => h.name),
        }),
        faqPage(o.faq),
        crumbs({ name: "Services", path: "/services" }, { name: a.title, path: `/${a.slug}` }, { name: o.title, path }),
      ],
      priority: 0.85,
      llms: { section: o.kind === "service" ? "Specific services" : "Appliance types", label: o.title },
    });
  }

  pages.push({
    path: "/brands",
    title: withSuffix("Brands We Repair in Vijayawada"),
    description:
      "Multi-brand AC, fridge and washing machine repair in Vijayawada: LG, Samsung, Whirlpool, Godrej, Voltas, Daikin, Blue Star, IFB, Bosch, Haier, Panasonic and more.",
    schema: [localBusiness(), crumbs({ name: "Brands", path: "/brands" })],
    priority: 0.8,
    llms: { section: "Main pages", label: "Brands we repair" },
  });

  for (const p of BRAND_PAGES) {
    const path = `/${p.slug}`;
    const a = APPLIANCE_BY_KEY[p.appliance];
    const title = brandPageTitle(p);
    const quick = brandQuickAnswer(p);
    pages.push({
      path,
      title: withSuffix(title),
      description: `${p.brand.name} ${lc(APPLIANCE_LABEL[p.appliance])} repair at home in Vijayawada: ${lc(a.problems[0])}, ${lc(a.problems[1])} & more. Same-day visit. Call 7702177588.`.slice(0, 160),
      schema: [
        localBusiness(),
        service({
          name: title,
          serviceType: `${a.longName} repair`,
          description: quick,
          path,
          brand: p.brand.name,
          offers: a.services.map((s) => `${p.brand.name} ${s.name}`),
        }),
        faqPage(brandFaqs(p)),
        crumbs({ name: "Brands", path: "/brands" }, { name: title, path }),
      ],
      priority: 0.75,
      llms: { section: "Brand repair pages", label: title },
    });
  }

  pages.push({
    path: "/guides",
    title: withSuffix("Appliance Problem Guides: Causes & Fixes"),
    description:
      "Simple guides for common AC, fridge and washing machine problems — not cooling, leaking, not spinning, noise — with safe checks and when to call a technician.",
    schema: [localBusiness(), crumbs({ name: "Problem guides", path: "/guides" })],
    priority: 0.8,
    llms: { section: "Main pages", label: "Problem guides index" },
  });

  for (const g of GUIDES) {
    const path = `/guides/${g.slug}`;
    pages.push({
      path,
      title: g.metaTitle.length + SUFFIX.length <= 70 ? g.metaTitle + SUFFIX : g.metaTitle,
      description: g.metaDescription,
      schema: [
        localBusiness(),
        article({ headline: g.title, description: g.metaDescription, path }),
        faqPage(g.faq),
        crumbs({ name: "Problem guides", path: "/guides" }, { name: g.title, path }),
      ],
      priority: 0.7,
      llms: { section: "Problem guides", label: g.title },
    });
  }

  pages.push({
    path: "/areas-we-serve",
    title: withSuffix("Areas We Serve in Vijayawada"),
    description:
      "Doorstep appliance repair across Vijayawada — Benz Circle, Patamata, Governorpet, Gunadala, Bhavanipuram, Poranki, Kanuru, Gollapudi, Tadepalli and nearby areas.",
    schema: [localBusiness(), crumbs({ name: "Areas we serve", path: "/areas-we-serve" })],
    priority: 0.7,
    llms: { section: "Main pages", label: "Areas served in Vijayawada" },
  });

  for (const ar of AREA_PAGES) {
    const path = `/areas/${ar.slug}`;
    const title = `AC, Fridge & Washing Machine Repair in ${ar.name}`;
    pages.push({
      path,
      title: withSuffix(ar.metaTitle),
      description: ar.metaDescription,
      schema: [
        localBusiness(),
        service({
          name: title,
          serviceType: "Home appliance repair",
          description: ar.quickAnswer,
          path,
          area: ar.name,
          offers: APPLIANCES.map((a) => a.title.replace(" in Vijayawada", "")),
        }),
        faqPage(ar.faq),
        crumbs({ name: "Areas we serve", path: "/areas-we-serve" }, { name: ar.name, path }),
      ],
      priority: 0.8,
      llms: { section: "Local area pages", label: title },
    });
  }

  pages.push({
    path: "/about",
    title: withSuffix("About Us — Local Appliance Repair Experts"),
    description: `${BUSINESS.name} is a Vijayawada appliance repair team with 10+ years of experience. Honest quotes, genuine parts and a ${BUSINESS.warrantyDays}-day warranty.`,
    schema: [localBusiness(), crumbs({ name: "About", path: "/about" })],
    priority: 0.6,
    llms: { section: "Main pages", label: "About the business" },
  });

  pages.push({
    path: "/contact",
    title: withSuffix("Contact & Book a Repair in Vijayawada"),
    description:
      "Book AC, fridge or washing machine repair in Vijayawada. Call or WhatsApp 77021 77588 or send a quick request — same-day visits in most areas.",
    schema: [localBusiness(), crumbs({ name: "Contact", path: "/contact" })],
    priority: 0.8,
    llms: { section: "Main pages", label: "Contact & booking" },
  });

  // ---------------- Telugu pages ----------------
  const TE_SUFFIX = " | AV Appliance Services";
  pages.push({
    path: "/te",
    lang: "te",
    title: TE_HOME.metaTitle + TE_SUFFIX,
    description: TE_HOME.metaDescription,
    schema: [localBusiness(), faqPage(TE_HOME.faq, "te-IN")],
    priority: 0.9,
    llms: { section: "తెలుగు (Telugu pages)", label: TE_HOME.h1 },
  });
  for (const p of TE_APPLIANCES) {
    const a = APPLIANCE_BY_KEY[p.key];
    const path = `/te/${a.slug}`;
    pages.push({
      path,
      lang: "te",
      title: p.metaTitle + TE_SUFFIX,
      description: p.metaDescription,
      schema: [
        localBusiness(),
        service({ name: p.title, serviceType: `${a.longName} repair`, description: p.quickAnswer, path, offers: p.services.map((x) => x.name) }),
        faqPage(p.faq, "te-IN"),
        breadcrumbs([
          { name: "హోమ్", path: "/te" },
          { name: p.title, path },
        ]),
      ],
      priority: 0.85,
      llms: { section: "తెలుగు (Telugu pages)", label: p.title },
    });
  }
  for (const g of TE_GUIDES) {
    const path = `/te/guides/${g.slug}`;
    pages.push({
      path,
      lang: "te",
      title: g.metaTitle,
      description: g.metaDescription,
      schema: [
        localBusiness(),
        article({ headline: g.title, description: g.metaDescription, path, lang: "te-IN" }),
        faqPage(g.faq, "te-IN"),
      ],
      priority: 0.75,
      llms: { section: "తెలుగు (Telugu pages)", label: g.title },
    });
  }
  pages.push({
    path: "/te/contact",
    lang: "te",
    title: "సంప్రదించండి & రిపేర్ బుక్ చేయండి — విజయవాడ" + TE_SUFFIX,
    description: "విజయవాడలో AC, ఫ్రిజ్, వాషింగ్ మెషిన్ రిపేర్ బుక్ చేయండి. 77021 77588 కి కాల్ లేదా WhatsApp చేయండి — చాలా ప్రాంతాలకు అదే రోజు వస్తాం.",
    schema: [localBusiness()],
    priority: 0.7,
    llms: { section: "తెలుగు (Telugu pages)", label: "సంప్రదించండి / Contact (Telugu)" },
  });

  for (const p of pages) {
    const alt = alternatesFor(p.path);
    if (alt) p.alternates = alt;
    p.lang ??= "en";
  }

  return pages;
}

export const PAGES: PageMeta[] = build();

const BY_PATH = new Map(PAGES.map((p) => [p.path, p]));

export const NOT_FOUND_META: PageMeta = {
  path: "/404",
  title: "Page not found | AV Appliance Services",
  description: "This page doesn't exist. Find AC, fridge and washing machine repair services in Vijayawada.",
  schema: [],
  noindex: true,
  priority: 0,
};

export function normalizePath(path: string) {
  const clean = path.split(/[?#]/)[0].replace(/\/+$/, "");
  return clean === "" ? "/" : clean;
}

export function getMeta(path: string): PageMeta {
  return BY_PATH.get(normalizePath(path)) ?? NOT_FOUND_META;
}
