import { BUSINESS, SERVICE_RADIUS_KM } from "@/config/site";
import type { ApplianceKey } from "@/data/types";

export type Lang = "en" | "te";

/** Interface text shared by layout and sections, in English and simple spoken Telugu. */
const EN = {
    nav: { home: "Home", services: "Services", brands: "Brands", guides: "Problem Guides", areas: "Areas", about: "About", contact: "Contact", allServices: "All Services", viewAll: "View all services →" },
    call: "Call",
    callNow: "Call Now",
    whatsapp: "WhatsApp",
    whatsappUs: "WhatsApp Us",
    whatsappPhoto: "WhatsApp a Photo",
    book: "Book",
    hours: "Open all 7 days · 8:00 AM – 9:00 PM",
    sameDay: "Same-day doorstep visits across Vijayawada",
    langSwitch: "తెలుగు",
    langSwitchLabel: "తెలుగులో చదవండి",
    home: "Home",
    quickAnswer: "Quick answer",
    faq: "FAQ",
    trust: ["Same-day home visit", `${BUSINESS.warrantyDays}-day warranty`, "Quote before work", "All brands"],
    how: {
      eyebrow: "How it works",
      title: "Repair booked in 2 minutes",
      sub: "No apps, no forms needed. Just a call or a WhatsApp message.",
      steps: [
        ["Call or WhatsApp", "Tell us the appliance, brand and problem. A photo or video on WhatsApp helps."],
        ["Pick a time", "We confirm a visit slot — same day in most parts of Vijayawada."],
        ["Check & clear quote", "The technician finds the fault and tells you the cost before starting."],
        ["Fixed at your home", `Repair done with quality parts, tested in front of you, with a ${BUSINESS.warrantyDays}-day warranty.`],
      ],
    },
    why: {
      eyebrow: "Why AV Appliance",
      title: ["Trusted by thousands of ", "Vijayawada homes"],
      sub: "Local technicians who show up on time, explain the problem simply and fix it properly the first time.",
      reasons: [
        ["Same-day visits", "Quick response across Vijayawada — we respect your time."],
        ["Honest, upfront price", "You approve the quote before any work. No hidden charges."],
        [`${BUSINESS.warrantyDays}-day warranty`, "If the same problem comes back, we fix it free."],
        ["Experienced technicians", "10+ years of hands-on repair on every major brand."],
        ["Quality spare parts", "Genuine or high-grade compatible parts — explained clearly."],
        ["Telugu, English & Hindi", "We explain the problem in the language you're comfortable with."],
      ],
      stats: ["Years of experience", "Happy customers", "Repairs done", "Repair warranty"],
    },
    areas: {
      eyebrow: "Service areas",
      title: `Doorstep repair across Vijayawada + ${SERVICE_RADIUS_KM} km`,
      sub: "Our technicians cover the whole city and towns around it. Don't see yours? Call us — we probably cover it.",
      city: "Vijayawada city",
      nearby: `Around Vijayawada (within ${SERVICE_RADIUS_KM} km)`,
    },
    cta: {
      title: "Appliance stopped working? We'll fix it today.",
      text: `Call or WhatsApp ${BUSINESS.phoneDisplay}. A technician can usually reach you the same day.`,
    },
    picker: {
      eyebrow: "Quick booking",
      title: "What's the problem? Just tap it",
      sub: "Pick your problem — WhatsApp opens with the message ready. Just press send.",
      tap: "Tap to book on WhatsApp",
      readGuide: "Read guide",
    },
    footer: {
      tagline: `Doorstep AC, refrigerator and washing machine repair across Vijayawada. Honest quotes, quality parts and a ${BUSINESS.warrantyDays}-day service warranty.`,
    },
};

const TE: typeof EN = {
    nav: { home: "హోమ్", services: "సర్వీసులు", brands: "బ్రాండ్లు", guides: "సమస్యలు & పరిష్కారాలు", areas: "ప్రాంతాలు", about: "మా గురించి", contact: "సంప్రదించండి", allServices: "అన్ని సర్వీసులు", viewAll: "అన్ని సర్వీసులు చూడండి →" },
    call: "కాల్",
    callNow: "కాల్ చేయండి",
    whatsapp: "WhatsApp",
    whatsappUs: "WhatsApp చేయండి",
    whatsappPhoto: "ఫోటో WhatsApp చేయండి",
    book: "బుక్ చేయండి",
    hours: "వారంలో 7 రోజులూ · ఉదయం 8 – రాత్రి 9",
    sameDay: "విజయవాడ అంతటా అదే రోజు ఇంటికి వస్తాం",
    langSwitch: "English",
    langSwitchLabel: "Read in English",
    home: "హోమ్",
    quickAnswer: "సంక్షిప్తంగా",
    faq: "సందేహాలు",
    trust: ["అదే రోజు ఇంటికి", `${BUSINESS.warrantyDays} రోజుల వారంటీ`, "పని ముందే ధర చెబుతాం", "అన్ని బ్రాండ్లు"],
    how: {
      eyebrow: "ఎలా బుక్ చేయాలి",
      title: "2 నిమిషాల్లో రిపేర్ బుక్ చేయండి",
      sub: "యాప్ అవసరం లేదు. ఒక్క కాల్ లేదా WhatsApp మెసేజ్ చాలు.",
      steps: [
        ["కాల్ లేదా WhatsApp", "ఏ మెషిన్, ఏ బ్రాండ్, ఏం సమస్యో చెప్పండి. ఫోటో లేదా వీడియో పంపితే ఇంకా మంచిది."],
        ["సమయం ఎంచుకోండి", "విజయవాడలో చాలా ప్రాంతాలకు అదే రోజు వస్తాం."],
        ["చెక్ చేసి ధర చెబుతాం", "టెక్నీషియన్ సమస్య కనిపెట్టి, పని మొదలుపెట్టే ముందే ఖర్చు చెబుతారు."],
        ["ఇంట్లోనే రిపేర్", `మంచి పార్ట్స్ తో రిపేర్ చేసి, మీ ముందే టెస్ట్ చేస్తాం. ${BUSINESS.warrantyDays} రోజుల వారంటీ.`],
      ],
    },
    why: {
      eyebrow: "మమ్మల్నే ఎందుకు",
      title: ["వేలాది ", "విజయవాడ ఇళ్ల నమ్మకం"],
      sub: "టైమ్ కి వచ్చి, సమస్యను సింపుల్ గా వివరించి, సరిగ్గా రిపేర్ చేసే లోకల్ టెక్నీషియన్లు.",
      reasons: [
        ["అదే రోజు సర్వీస్", "విజయవాడ అంతటా త్వరగా వస్తాం — మీ సమయం మాకు ముఖ్యం."],
        ["నిజాయితీ గల ధర", "మీరు ఒప్పుకున్న తర్వాతే పని మొదలు. దాచిన ఛార్జీలు లేవు."],
        [`${BUSINESS.warrantyDays} రోజుల వారంటీ`, "అదే సమస్య మళ్లీ వస్తే ఉచితంగా సరిచేస్తాం."],
        ["అనుభవం ఉన్న టెక్నీషియన్లు", "అన్ని పెద్ద బ్రాండ్లపై 10+ ఏళ్ల అనుభవం."],
        ["మంచి స్పేర్ పార్ట్స్", "ఒరిజినల్ లేదా మంచి క్వాలిటీ పార్ట్స్ — ఏది వేస్తున్నామో చెబుతాం."],
        ["తెలుగులోనే మాట్లాడుతాం", "సమస్యను మీకు అర్థమయ్యేలా తెలుగులో వివరిస్తాం."],
      ],
      stats: ["ఏళ్ల అనుభవం", "సంతృప్త కస్టమర్లు", "రిపేర్లు పూర్తి", "రోజుల వారంటీ"],
    },
    areas: {
      eyebrow: "సర్వీస్ ప్రాంతాలు",
      title: `విజయవాడ + చుట్టుపక్కల ${SERVICE_RADIUS_KM} కి.మీ. వరకు`,
      sub: "సిటీ అంతటా, చుట్టుపక్కల ఊళ్లకు కూడా వస్తాం. మీ ప్రాంతం లిస్ట్ లో లేకపోయినా కాల్ చేయండి.",
      city: "విజయవాడ సిటీ",
      nearby: `చుట్టుపక్కల (${SERVICE_RADIUS_KM} కి.మీ. లోపు)`,
    },
    cta: {
      title: "మెషిన్ పనిచేయడం లేదా? ఈరోజే రిపేర్ చేస్తాం.",
      text: `${BUSINESS.phoneDisplay} కి కాల్ లేదా WhatsApp చేయండి. చాలా సార్లు అదే రోజు టెక్నీషియన్ వస్తారు.`,
    },
    picker: {
      eyebrow: "త్వరగా బుక్ చేయండి",
      title: "మీ సమస్య ఏమిటి? దాని మీద నొక్కండి",
      sub: "సమస్య ఎంచుకోండి — WhatsApp లో మెసేజ్ రెడీగా వస్తుంది. Send నొక్కితే చాలు.",
      tap: "WhatsApp లో బుక్ చేయండి",
      readGuide: "వివరాలు చదవండి",
    },
    footer: {
      tagline: `విజయవాడ అంతటా ఇంటి వద్దే AC, ఫ్రిజ్, వాషింగ్ మెషిన్ రిపేర్. నిజాయితీ ధర, మంచి పార్ట్స్, ${BUSINESS.warrantyDays} రోజుల వారంటీ.`,
    },
};

export type UIStrings = typeof EN;

export const UI: Record<Lang, UIStrings> = { en: EN, te: TE };

export const APPLIANCE_NAME_TE: Record<ApplianceKey, string> = {
  ac: "AC",
  fridge: "ఫ్రిజ్",
  washer: "వాషింగ్ మెషిన్",
};
