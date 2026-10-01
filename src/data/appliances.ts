import type { Appliance, ApplianceKey } from "./types";

export const APPLIANCES: Appliance[] = [
  {
    key: "ac",
    slug: "ac-repair-vijayawada",
    name: "AC",
    longName: "Air Conditioner",
    title: "AC Repair & Service in Vijayawada",
    telugu: "విజయవాడలో AC రిపేర్ & సర్వీస్",
    metaTitle: "AC Repair & Service in Vijayawada | Gas Filling, Installation",
    metaDescription:
      "AC not cooling? Doorstep AC repair, gas filling, installation and servicing in Vijayawada for split, window and inverter ACs of all brands. Call 7702177588.",
    quickAnswer:
      "AV Appliance Services repairs and services split, window and inverter air conditioners at your home anywhere in Vijayawada. We fix cooling problems, water leakage, gas leaks, PCB and compressor faults, and handle installation, uninstallation and deep cleaning for all major brands, usually with a same-day visit.",
    intro:
      "Vijayawada summers regularly cross 45°C, and a weak or broken AC is more than an inconvenience. Our technicians come to your home with the tools and common spare parts, find the actual fault, explain it in simple words and give you a clear quote before starting any work.",
    types: ["Split AC", "Window AC", "Inverter AC", "Cassette AC", "Tower / floor-standing AC"],
    services: [
      { name: "AC repair", detail: "Diagnosis and repair of cooling, electrical, PCB and sensor faults." },
      { name: "AC gas filling", detail: "Leak test, leak repair and refrigerant top-up or full recharge (R32, R410A, R22)." },
      { name: "AC service & deep cleaning", detail: "Filter, coil and blower cleaning with a jet pump for stronger, cleaner airflow." },
      { name: "AC installation", detail: "New split and window AC installation with proper piping, vacuuming and stand fitting." },
      { name: "AC uninstallation & shifting", detail: "Safe removal with gas pump-down, and re-installation at your new home." },
      { name: "Compressor & fan motor repair", detail: "Testing and replacement of compressor, capacitor and indoor/outdoor fan motors." },
      { name: "PCB repair", detail: "Inverter and non-inverter PCB diagnosis and repair when the AC won't start or shows error codes." },
      { name: "Water leakage fix", detail: "Clearing blocked drain pipes and correcting indoor unit slope to stop dripping." },
    ],
    problems: [
      "AC not cooling or cooling very slowly",
      "Water dripping from the indoor unit",
      "AC not turning on or remote not working",
      "Ice forming on the indoor coil or pipes",
      "Loud noise or vibration from indoor or outdoor unit",
      "Bad smell when the AC starts",
      "Outdoor unit fan not running",
      "Blinking lights or error code on display",
    ],
    signs: [
      "Room takes much longer to cool than before",
      "Electricity bill has jumped without more usage",
      "It has been more than 6 months since the last service",
      "You see water, ice or oil marks near the unit",
    ],
    faq: [
      {
        q: "How often should I service my AC in Vijayawada?",
        a: "Because of the heat and dust in Vijayawada, we recommend a full AC service every 4–6 months if you use it daily, and at least once before summer starts.",
      },
      {
        q: "AC cooling raledu — what should I do first?",
        a: "If your AC runs but the room is not cooling (\"AC cooling raledu\"), switch it to Cool mode at 24°C, clean the indoor filters and make sure the outdoor unit fan is running. If it still doesn't cool in 30 minutes, it may be low gas, a dirty coil or a capacitor fault — call or WhatsApp 77021 77588 for a technician.",
      },
      {
        q: "How do I know if my AC needs gas filling?",
        a: "Common signs are weak cooling even on the lowest temperature, ice on the copper pipes, and the outdoor unit running for a long time without the room cooling. A technician should first find and fix the leak — gas does not get used up in a healthy AC.",
      },
      {
        q: "Do you repair inverter ACs?",
        a: "Yes. We repair inverter and non-inverter split ACs, including PCB, sensor, fan motor and compressor faults, for all major brands.",
      },
      {
        q: "Can you come to my home the same day?",
        a: "In most parts of Vijayawada we can visit the same day if you call or WhatsApp us in the morning. In peak summer, slots fill faster, so booking early helps.",
      },
      {
        q: "Is there a warranty on AC repairs?",
        a: `Yes, repairs come with a ${90}-day service warranty on the work done. Spare parts carry the manufacturer's warranty where applicable.`,
      },
    ],
  },
  {
    key: "fridge",
    slug: "refrigerator-repair-vijayawada",
    name: "Fridge",
    longName: "Refrigerator",
    title: "Refrigerator Repair in Vijayawada",
    telugu: "విజయవాడలో ఫ్రిజ్ రిపేర్ & సర్వీస్",
    metaTitle: "Fridge Repair in Vijayawada | Not Cooling, Gas, Compressor",
    metaDescription:
      "Fridge not cooling? Doorstep refrigerator repair in Vijayawada for single door, double door, side-by-side and inverter fridges of all brands. Call 7702177588.",
    quickAnswer:
      "AV Appliance Services repairs single-door, double-door, frost-free, side-by-side and inverter refrigerators at your home in Vijayawada. We fix cooling problems, gas leaks, compressor and thermostat faults, excess ice, water leakage and noise for all major brands, usually on the same day.",
    intro:
      "A fridge that stops cooling can spoil a week of groceries in a day. Our technicians diagnose the fault at your home — thermostat, sensor, defrost system, fan, relay or compressor — explain it simply and repair it with good-quality parts.",
    types: ["Single door (direct cool)", "Double door (frost free)", "Side-by-side", "Triple door / French door", "Inverter refrigerator", "Mini fridge & deep freezer"],
    services: [
      { name: "Refrigerator repair", detail: "Complete fault finding and repair for all fridge types and brands." },
      { name: "Not cooling repair", detail: "Fixing thermostat, sensor, fan, defrost and gas issues that stop cooling." },
      { name: "Gas filling & leak repair", detail: "Locating and brazing the leak, then vacuuming and recharging refrigerant." },
      { name: "Compressor repair & replacement", detail: "Relay, overload and compressor testing; replacement when needed." },
      { name: "Defrost system repair", detail: "Heater, timer and bi-metal repair for frost-free fridges with ice build-up." },
      { name: "Thermostat & PCB repair", detail: "Temperature control, sensor and inverter board diagnosis and repair." },
      { name: "Door gasket replacement", detail: "New rubber seals to stop cold air loss, sweating and frost." },
      { name: "Water leakage fix", detail: "Clearing blocked drain holes and fixing water collecting inside or under the fridge." },
    ],
    problems: [
      "Fridge not cooling but light is on",
      "Freezer working but fridge section warm",
      "Too much ice in the freezer",
      "Water leaking inside or under the fridge",
      "Compressor clicking, humming or not starting",
      "Fridge making loud noise",
      "Fridge not turning on at all",
      "Door not closing or rubber seal damaged",
    ],
    signs: [
      "Milk and vegetables are spoiling faster",
      "The compressor runs non-stop or keeps clicking",
      "Thick ice builds up in a frost-free fridge",
      "The sides of the fridge feel very hot",
    ],
    faq: [
      {
        q: "Why is my fridge not cooling but the light is on?",
        a: "The light only shows that power is reaching the fridge. Cooling can still stop because of a faulty thermostat or sensor, a failed defrost system, a stopped fan, a bad relay or a gas leak. A technician can find the exact cause with a quick test.",
      },
      {
        q: "Fridge cooling avvatledu, freezer lo ice undi — why?",
        a: "When the freezer is icy but the fridge section is warm, cold air is usually blocked by ice on the back panel. In frost-free fridges this points to a defrost heater, sensor or fan fault. Keep the door closed and call us — it's a common repair we do at home in Vijayawada.",
      },
      {
        q: "Is it worth repairing an old fridge?",
        a: "Most fridge faults — thermostat, relay, fan, defrost heater, gasket — are affordable to fix. If the compressor has failed on a very old fridge, we will tell you honestly whether repair or replacement makes more sense.",
      },
      {
        q: "How long does fridge gas filling take?",
        a: "A proper gas job includes finding and fixing the leak, vacuuming and recharging, and usually takes 2–4 hours at your home.",
      },
      {
        q: "Do you repair double door and side-by-side fridges?",
        a: "Yes. We repair single door, double door, frost-free, side-by-side and inverter refrigerators of all major brands in Vijayawada.",
      },
    ],
  },
  {
    key: "washer",
    slug: "washing-machine-repair-vijayawada",
    name: "Washing Machine",
    longName: "Washing Machine",
    title: "Washing Machine Repair in Vijayawada",
    telugu: "విజయవాడలో వాషింగ్ మెషిన్ రిపేర్",
    metaTitle: "Washing Machine Repair in Vijayawada | Top & Front Load",
    metaDescription:
      "Washing machine not spinning or draining? Doorstep repair in Vijayawada for top load, front load and semi-automatic machines of all brands. Call 7702177588.",
    quickAnswer:
      "AV Appliance Services repairs top-load, front-load, semi-automatic and fully automatic washing machines at your home in Vijayawada. We fix machines that won't spin, drain, start or stop leaking, along with drum noise, tub bearing, motor, door lock and PCB faults for all major brands.",
    intro:
      "When the washing machine stops mid-cycle, laundry piles up fast. Our technicians carry common spares like drain pumps, belts, door locks and inlet valves, so many repairs are finished in a single visit at your home.",
    types: ["Front load", "Top load (fully automatic)", "Semi-automatic (twin tub)", "Washer dryer", "Inverter / direct-drive"],
    services: [
      { name: "Washing machine repair", detail: "Complete fault finding and repair for all washer types and brands." },
      { name: "Spin problem repair", detail: "Fixing belts, clutch, motor, lid switch and unbalance issues when the drum won't spin." },
      { name: "Drain pump & drainage repair", detail: "Cleaning the filter and replacing blocked or failed drain pumps and hoses." },
      { name: "Drum & tub bearing repair", detail: "Replacing worn bearings and seals that cause loud grinding or thumping noise." },
      { name: "Motor repair", detail: "Testing and repairing or replacing wash and spin motors, including direct-drive." },
      { name: "PCB & control panel repair", detail: "Repairing boards, buttons and displays when the machine won't start or shows error codes." },
      { name: "Door lock & gasket repair", detail: "Fixing front-load doors that won't lock or open, and torn door rubbers that leak." },
      { name: "Inlet valve & water supply", detail: "Repairing machines that don't fill water or fill very slowly." },
    ],
    problems: [
      "Washing machine not spinning",
      "Water not draining out",
      "Loud noise or shaking during spin",
      "Water leaking from the bottom or door",
      "Machine not starting or stopping mid-cycle",
      "Not taking in water",
      "Door locked and not opening",
      "Error code on display",
    ],
    signs: [
      "Clothes come out dripping wet after spin",
      "The machine walks or bangs during spin",
      "Water stays in the drum after the cycle",
      "You smell burning or see sparks — switch off immediately",
    ],
    faq: [
      {
        q: "Why is my washing machine not spinning?",
        a: "The most common reasons are an unbalanced load, a blocked drain (the machine won't spin until water drains), a worn belt, a faulty lid or door lock switch, or a motor or control board fault. Try re-balancing the clothes first; if it still won't spin, call a technician.",
      },
      {
        q: "Washing machine tiragatledu, neellu potledu — what to do?",
        a: "If the drum won't spin and water stays inside, the machine is usually stuck because it can't drain. Switch off, check the drain hose isn't bent, and clean the drain filter if your model has one (keep a towel ready). If water still won't drain, the drain pump may be blocked or faulty — WhatsApp us a photo on 77021 77588.",
      },
      {
        q: "What causes a washing machine drum to make loud noise?",
        a: "A loud grinding or rumbling sound during spin usually means worn drum (tub) bearings. Thumping can come from an uneven floor, broken suspension springs or a coin stuck in the drum. Bearing problems get worse quickly, so it is best to repair them early.",
      },
      {
        q: "Do you repair front load and top load machines?",
        a: "Yes. We repair front load, top load, semi-automatic and washer-dryer models of all major brands at your home in Vijayawada.",
      },
      {
        q: "How much time does a washing machine repair take?",
        a: "Most repairs such as drain pump, belt, door lock or inlet valve replacement are done in 1–2 hours in a single visit. Bearing or motor jobs may take longer or need a second visit for parts.",
      },
    ],
  },
];

export const APPLIANCE_BY_KEY = Object.fromEntries(APPLIANCES.map((a) => [a.key, a])) as Record<ApplianceKey, Appliance>;

/** Short label used when composing brand page names, e.g. "LG AC Repair". */
export const APPLIANCE_LABEL: Record<ApplianceKey, string> = {
  ac: "AC",
  fridge: "Refrigerator",
  washer: "Washing Machine",
};

export const APPLIANCE_URL_PART: Record<ApplianceKey, string> = {
  ac: "ac",
  fridge: "refrigerator",
  washer: "washing-machine",
};

/** Lower-case for running text, keeping the acronym "AC" intact ("AC gas filling", "LG ACs"). */
export const lc = (s: string) => s.toLowerCase().replace(/\bac(s?)\b/g, "AC$1");
