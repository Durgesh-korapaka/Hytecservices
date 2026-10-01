import { AREAS, BUSINESS, HOURS, LAST_UPDATED, SERVICE_RADIUS_KM, SITE_URL } from "@/config/site";
import { APPLIANCES } from "@/data/appliances";
import type { FAQ } from "@/data/types";

export type JsonLd = Record<string, unknown>;

export const BUSINESS_ID = `${SITE_URL}/#business`;
const WEBSITE_ID = `${SITE_URL}/#website`;

export const abs = (path: string) => `${SITE_URL}${path}`;

const areaServed = [
  {
    // Service-area business: a 20 km radius around the city centre.
    "@type": "GeoCircle",
    geoMidpoint: { "@type": "GeoCoordinates", latitude: BUSINESS.geo.lat, longitude: BUSINESS.geo.lng },
    geoRadius: SERVICE_RADIUS_KM * 1000,
  },
  { "@type": "City", name: "Vijayawada", containedInPlace: { "@type": "State", name: BUSINESS.region } },
  ...AREAS.map((name) => ({ "@type": "Place", name: `${name}, ${BUSINESS.region}` })),
];

/** The business entity — emitted on every page so any URL resolves the entity. */
export function localBusiness(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "HVACBusiness"],
    "@id": BUSINESS_ID,
    name: BUSINESS.name,
    alternateName: "AV Appliance Services Vijayawada",
    description:
      "Doorstep AC, refrigerator and washing machine repair, servicing and installation in Vijayawada, Andhra Pradesh, for all major brands.",
    url: SITE_URL,
    logo: abs("/icon-512.png"),
    image: abs("/og-image.jpg"),
    telephone: BUSINESS.phoneIntl,
    email: BUSINESS.email,
    priceRange: BUSINESS.priceRange,
    currenciesAccepted: "INR",
    paymentAccepted: "Cash, UPI",
    address: {
      "@type": "PostalAddress",
      addressLocality: BUSINESS.city,
      addressRegion: BUSINESS.region,
      addressCountry: BUSINESS.country,
    },
    geo: { "@type": "GeoCoordinates", latitude: BUSINESS.geo.lat, longitude: BUSINESS.geo.lng },
    areaServed,
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: HOURS.open,
        closes: HOURS.close,
      },
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: BUSINESS.phoneIntl,
        contactType: "customer service",
        areaServed: "IN",
        availableLanguage: ["English", "Telugu", "Hindi"],
      },
    ],
    knowsAbout: [
      "Air conditioner repair",
      "AC gas filling",
      "AC installation",
      "Refrigerator repair",
      "Refrigerator gas charging",
      "Compressor repair",
      "Washing machine repair",
      "Front load washing machine repair",
      "Top load washing machine repair",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Appliance repair services",
      itemListElement: APPLIANCES.map((a) => ({
        "@type": "OfferCatalog",
        name: a.title,
        itemListElement: a.services.map((s) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: s.name, description: s.detail },
        })),
      })),
    },
  };
}

export function website(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: SITE_URL,
    name: BUSINESS.name,
    inLanguage: "en-IN",
    publisher: { "@id": BUSINESS_ID },
  };
}

export function breadcrumbs(items: { name: string; path: string }[]): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: abs(item.path),
    })),
  };
}

export function faqPage(faqs: FAQ[], inLanguage = "en-IN"): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    inLanguage,
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function service(opts: {
  name: string;
  serviceType: string;
  description: string;
  path: string;
  brand?: string;
  offers?: string[];
  /** A specific locality; defaults to Vijayawada + the 20 km radius. */
  area?: string;
}): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: opts.name,
    serviceType: opts.serviceType,
    description: opts.description,
    url: abs(opts.path),
    provider: { "@id": BUSINESS_ID },
    areaServed: opts.area
      ? { "@type": "Place", name: `${opts.area}, ${BUSINESS.region}` }
      : [areaServed[0], areaServed[1]],
    ...(opts.brand ? { brand: { "@type": "Brand", name: opts.brand } } : {}),
    ...(opts.offers
      ? {
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: opts.name,
            itemListElement: opts.offers.map((o) => ({
              "@type": "Offer",
              itemOffered: { "@type": "Service", name: o },
            })),
          },
        }
      : {}),
  };
}

export function article(opts: { headline: string; description: string; path: string; lang?: string }): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: opts.headline,
    description: opts.description,
    url: abs(opts.path),
    mainEntityOfPage: abs(opts.path),
    image: abs("/og-image.jpg"),
    datePublished: LAST_UPDATED,
    dateModified: LAST_UPDATED,
    inLanguage: opts.lang ?? "en-IN",
    author: { "@id": BUSINESS_ID },
    publisher: { "@id": BUSINESS_ID },
    about: { "@id": BUSINESS_ID },
  };
}
