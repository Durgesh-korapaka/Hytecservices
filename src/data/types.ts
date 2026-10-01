export type ApplianceKey = "ac" | "fridge" | "washer";

export type FAQ = { q: string; a: string };

export type ErrorCode = { code: string; meaning: string };

export type ServiceItem = { name: string; detail: string };

export type Appliance = {
  key: ApplianceKey;
  slug: string; // e.g. "ac-repair-vijayawada"
  name: string; // "AC"
  longName: string; // "Air Conditioner"
  title: string; // H1
  telugu: string; // short Telugu line
  metaTitle: string;
  metaDescription: string;
  quickAnswer: string;
  intro: string;
  types: string[]; // unit types we service
  services: ServiceItem[];
  problems: string[]; // common complaints, plain language
  signs: string[]; // "book a service when..."
  faq: FAQ[];
};

export type Brand = {
  slug: string; // "lg"
  name: string; // "LG"
  appliances: ApplianceKey[];
  /** Brand + appliance specific paragraph (models, tech, typical faults). */
  notes: Partial<Record<ApplianceKey, string>>;
  models: Partial<Record<ApplianceKey, string[]>>;
  errorCodes?: Partial<Record<ApplianceKey, ErrorCode[]>>;
};

/**
 * A focused landing page for one appliance TYPE (e.g. front load washer,
 * window AC) or one SERVICE (e.g. AC gas filling). Targets specific searches.
 */
export type Offering = {
  slug: string; // "front-load-washing-machine-repair-vijayawada"
  appliance: ApplianceKey;
  kind: "type" | "service";
  name: string; // "Front Load Washing Machine Repair" (used in nav/cards)
  title: string; // H1, includes "in Vijayawada"
  telugu: string; // one short, correct Telugu line
  metaTitle: string; // <= 60 chars
  metaDescription: string; // 140-160 chars
  quickAnswer: string; // 2-3 quotable sentences
  intro: string; // 2-3 sentences, plain language
  highlights: ServiceItem[]; // 6-8: what we repair / what's included
  problems: string[]; // 5-8 common complaints specific to this type/service
  process?: string[]; // services only: 4-6 steps of how the job is done
  tips: string[]; // 3-5 care tips to avoid breakdowns
  faq: FAQ[]; // 4-5
  relatedGuides: string[]; // guide slugs from guides.ts
};

/** A locality landing page (Benz Circle, Gannavaram, ...). */
export type AreaPage = {
  slug: string; // "benz-circle" -> /areas/benz-circle
  name: string; // "Benz Circle"
  zone: "city" | "suburb";
  nearby: string[]; // neighbouring localities also covered from here
  metaTitle: string; // <= 60 chars
  metaDescription: string; // 140-160 chars
  quickAnswer: string; // 2-3 quotable sentences
  intro: string; // 2-3 sentences, specific to the locality
  notes: { title: string; text: string }[]; // 3 locality-specific service notes
  faq: FAQ[]; // 3-4, locality-specific
};

/* ---------------- Telugu (te-IN) content ---------------- */

export type TeHome = {
  metaTitle: string;
  metaDescription: string;
  h1: string;
  sub: string; // one-line promise under the H1
  quickAnswer: string;
  applianceBlurbs: Record<ApplianceKey, string>; // 1 sentence per appliance card
  faq: FAQ[]; // spoken-style questions
};

export type TeAppliance = {
  key: ApplianceKey;
  title: string; // H1
  metaTitle: string;
  metaDescription: string;
  quickAnswer: string;
  intro: string;
  services: ServiceItem[];
  problems: string[];
  faq: FAQ[]; // spoken-style / voice-search questions
};

export type TeGuide = {
  slug: string; // same slug as the English guide
  title: string;
  metaTitle: string;
  metaDescription: string;
  quickAnswer: string;
  symptoms: string[];
  causes: { title: string; detail: string; fix: "diy" | "technician" }[];
  diyChecks: string[];
  whenToCall: string[];
  faq: FAQ[];
};

export type GuideCause = {
  title: string;
  detail: string;
  fix: "diy" | "technician";
};

export type Guide = {
  slug: string; // "ac-not-cooling"
  appliance: ApplianceKey;
  title: string; // H1, the problem as people type it
  metaTitle: string; // <= 60 chars
  metaDescription: string; // 140-160 chars
  quickAnswer: string; // 2-3 sentence direct answer
  symptoms: string[];
  causes: GuideCause[];
  diyChecks: string[]; // only safe checks a layperson can do
  whenToCall: string[];
  faq: FAQ[];
  related: string[]; // other guide slugs
};
