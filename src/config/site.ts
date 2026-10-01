/**
 * Single source of truth for business facts.
 * Everything here feeds page copy, meta tags, JSON-LD, sitemap and llms.txt.
 *
 * TODO(owner): confirm SITE_URL, HOURS and AREAS — they are sensible defaults,
 * not verified facts. Change them here and rebuild.
 */

export const SITE_URL = "https://www.avapplianceservices.in"; // TODO(owner): real domain

export const BUSINESS = {
  name: "AV Appliance Services",
  shortName: "AV Appliance",
  tagline: "AC, Fridge & Washing Machine Repair in Vijayawada",
  phone: "7702177588",
  phoneDisplay: "+91 77021 77588",
  phoneIntl: "+917702177588",
  email: "andrayya8@gmail.com",
  whatsappNumber: "917702177588",
  city: "Vijayawada",
  district: "NTR District",
  region: "Andhra Pradesh",
  country: "IN",
  // City-centre coordinates; replace with the shop's exact pin if there is one.
  geo: { lat: 16.5062, lng: 80.648 },
  priceRange: "₹₹",
  foundingNote: "10+ years of hands-on appliance repair experience",
  warrantyDays: 90,
} as const;

// TODO(owner): confirm real working hours.
export const HOURS = {
  days: "Monday – Sunday",
  open: "08:00",
  close: "21:00",
  display: "Open all 7 days · 8:00 AM – 9:00 PM",
} as const;

/** Service radius around the city centre, used in schema (GeoCircle) and copy. */
export const SERVICE_RADIUS_KM = 20;

// TODO(owner): trim/extend to the localities actually covered.
export const CITY_AREAS = [
  "Benz Circle",
  "Patamata",
  "Governorpet",
  "Labbipet",
  "Moghalrajpuram",
  "Gunadala",
  "Auto Nagar",
  "Bhavanipuram",
  "Vidyadharapuram",
  "One Town",
  "Suryaraopet",
  "Krishna Lanka",
  "Ajit Singh Nagar",
  "Payakapuram",
  "Satyanarayanapuram",
  "Machavaram",
  "Ramavarappadu",
  "Currency Nagar",
  "Gollapudi",
  "Jakkampudi",
] as const;

/** Towns and villages around Vijayawada, all within roughly 20 km. */
export const NEARBY_AREAS = [
  "Enikepadu",
  "Kanuru",
  "Tadigadapa",
  "Yanamalakuduru",
  "Poranki",
  "Penamaluru",
  "Kankipadu",
  "Nidamanuru",
  "Prasadampadu",
  "Gannavaram",
  "Kesarapalli",
  "Nunna",
  "Undavalli",
  "Tadepalli",
  "Mangalagiri",
  "Ibrahimpatnam",
  "Kondapalli",
  "Guntupalli",
] as const;

export const AREAS = [...CITY_AREAS, ...NEARBY_AREAS] as const;

// Figures carried over from the previous site (owner-provided).
export const STATS = [
  { value: 10, suffix: "+", label: "Years of experience" },
  { value: 5000, suffix: "+", label: "Happy customers" },
  { value: 12000, suffix: "+", label: "Repairs done" },
  { value: 90, suffix: "-day", label: "Repair warranty" },
] as const;

export const WHATSAPP_DEFAULT_MSG = "Hi AV Appliance Services, I need a repair at my home in Vijayawada.";

export function whatsappLink(message: string = WHATSAPP_DEFAULT_MSG) {
  return `https://wa.me/${BUSINESS.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const TEL_LINK = `tel:${BUSINESS.phoneIntl}`;

/**
 * TODO(owner): paste your Google Analytics 4 measurement ID (e.g. "G-XXXXXXX").
 * Until set, lead events are still pushed to window.dataLayer but nothing is
 * loaded from Google.
 */
export const GA_MEASUREMENT_ID = "";

export const LAST_UPDATED = "2026-09-30";
