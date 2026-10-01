import { BUSINESS } from "@/config/site";
import { APPLIANCE_BY_KEY, APPLIANCE_LABEL, lc } from "./appliances";
import type { BrandPage } from "./brands";
import type { FAQ } from "./types";

/** Site-wide FAQs (home page + FAQ schema). Plain, direct answers for AI engines. */
export const HOME_FAQS: FAQ[] = [
  {
    q: "Which appliances do you repair in Vijayawada?",
    a: "We repair and service air conditioners (split, window, inverter), refrigerators (single door, double door, side-by-side, inverter) and washing machines (front load, top load, semi-automatic) at your home anywhere in Vijayawada.",
  },
  {
    q: "Which brands do you service?",
    a: "All major brands including LG, Samsung, Whirlpool, Godrej, Voltas, Daikin, Blue Star, Lloyd, Carrier, Hitachi, Panasonic, Haier, IFB, Bosch and O General. We are an independent repair service and not an authorised service centre of these brands.",
  },
  {
    q: "Do you serve areas outside Vijayawada city?",
    a: "Yes. Besides every part of Vijayawada, we cover towns and villages within about 20 km — including Gannavaram, Kankipadu, Penamaluru, Poranki, Tadepalli, Mangalagiri, Undavalli, Ibrahimpatnam, Kondapalli and Nunna.",
  },
  {
    q: "Do you offer same-day doorstep service?",
    a: "Yes. In most areas of Vijayawada we can send a technician the same day. Call or WhatsApp 77021 77588 with your appliance and problem to book a slot.",
  },
  {
    q: "How much does a repair cost?",
    a: "The cost depends on the fault and any parts needed. The technician inspects the appliance, explains the problem and gives you a clear quote before starting. There are no hidden charges.",
  },
  {
    q: "Is there a warranty on repairs?",
    a: `Yes. Our repairs come with a ${BUSINESS.warrantyDays}-day service warranty. Replaced parts carry the manufacturer's warranty where applicable.`,
  },
  {
    q: "Do your technicians speak Telugu? (Telugu lo matladatara?)",
    a: "Yes. Our technicians are local to Vijayawada and explain the problem in Telugu, English or Hindi — whichever you are comfortable with. This website is also available in Telugu.",
  },
  {
    q: "How do I book a technician?",
    a: "Call or WhatsApp 77021 77588, or fill the short form on our contact page. Tell us the appliance, brand and problem, and we will confirm a visit time.",
  },
];

export function brandPageTitle(p: BrandPage) {
  return `${p.brand.name} ${APPLIANCE_LABEL[p.appliance]} Repair in Vijayawada`;
}

export function brandQuickAnswer(p: BrandPage) {
  const a = APPLIANCE_BY_KEY[p.appliance];
  const label = lc(APPLIANCE_LABEL[p.appliance]);
  const models = (p.brand.models[p.appliance] ?? []).slice(0, 3).join(", ");
  return `AV Appliance Services repairs ${p.brand.name} ${label}s at your home in Vijayawada — including ${models}. Our technicians fix ${a.problems
    .slice(0, 3)
    .map((x) => lc(x))
    .join(", ")} and more, usually with a same-day visit. Call or WhatsApp 77021 77588.`;
}

export function brandFaqs(p: BrandPage): FAQ[] {
  const brand = p.brand.name;
  const label = APPLIANCE_LABEL[p.appliance];
  const lower = lc(label);
  const faqs: FAQ[] = [
    {
      q: `Do you repair ${brand} ${lower}s at home in Vijayawada?`,
      a: `Yes. We visit homes across Vijayawada — including Benz Circle, Patamata, Governorpet, Gunadala, Poranki and Kanuru — to repair ${brand} ${lower}s. Most repairs are completed in one visit.`,
    },
    {
      q: `Are you the official ${brand} service centre?`,
      a: `No. AV Appliance Services is an independent multi-brand repair service. We repair ${brand} ${lower}s with quality spare parts, and for machines still under ${brand}'s manufacturer warranty we recommend contacting ${brand} first.`,
    },
  ];

  const codes = p.brand.errorCodes?.[p.appliance];
  if (codes?.length) {
    faqs.push({
      q: `What does the ${codes[0].code} error mean on a ${brand} ${lower}?`,
      a: `On most ${brand} ${lower}s, ${codes[0].code} means: ${lc(codes[0].meaning)}. Exact meanings can vary by model, so a technician should confirm the fault before replacing parts.`,
    });
  }

  if (p.appliance === "ac") {
    faqs.push({
      q: `Why is my ${brand} AC not cooling?`,
      a: `The usual causes are dirty filters and coils, low refrigerant from a gas leak, a failed capacitor or fan motor, or a sensor or PCB fault. Clean the filters first; if cooling doesn't improve, book a technician.`,
    });
  } else if (p.appliance === "fridge") {
    faqs.push({
      q: `Why is my ${brand} fridge not cooling?`,
      a: `Common causes include a faulty thermostat or sensor, a blocked defrost system, a stopped fan, a relay or compressor problem, or a gas leak. If the fridge stays warm for more than a few hours, call a technician.`,
    });
  } else {
    faqs.push({
      q: `Why is my ${brand} washing machine not spinning?`,
      a: `Usually because of an unbalanced load, water that hasn't drained, a worn belt, a faulty door or lid lock, or a motor or control board fault. Re-arrange the clothes and check the drain first; if it still won't spin, book a repair.`,
    });
  }
  return faqs;
}
