import type { Brand, ApplianceKey } from "./types";
import { APPLIANCE_URL_PART } from "./appliances";

/**
 * Brands we service. Notes are written per brand+appliance so every brand page
 * carries distinct, useful content (not a template with the name swapped).
 * Error codes listed are the widely documented ones; meanings can vary by model.
 */
export const BRANDS: Brand[] = [
  {
    slug: "lg",
    name: "LG",
    appliances: ["ac", "fridge", "washer"],
    notes: {
      ac: "LG Dual Inverter split ACs are among the most common ACs in Vijayawada homes. Typical faults we see are CH-series error codes from sensors or indoor–outdoor communication, weak cooling from a slow gas leak at the flare joints, and PCB damage after voltage fluctuations. We test the sensors, fan motors and inverter board before replacing anything.",
      fridge: "LG frost-free and side-by-side refrigerators use a Smart Inverter compressor and an electronic defrost system. When an LG fridge stops cooling, the cause is often a frozen evaporator from a failed defrost heater or sensor, or a stopped freezer fan — all repairable at home.",
      washer: "LG front-load (AI Direct Drive) and top-load (TurboDrum / Smart Inverter) machines show clear error codes that point us to the fault quickly — most often a blocked drain filter (OE), low water inlet (IE), unbalanced load (UE) or door lock trouble (dE).",
    },
    models: {
      ac: ["Dual Inverter split AC", "AI Convertible split AC", "Window AC"],
      fridge: ["Single door direct cool", "Double door frost free", "Side-by-side", "Convertible"],
      washer: ["Front load AI Direct Drive", "Top load Smart Inverter", "Semi-automatic"],
    },
    errorCodes: {
      ac: [
        { code: "CH01", meaning: "Indoor room temperature sensor fault" },
        { code: "CH02", meaning: "Indoor pipe (coil) temperature sensor fault" },
        { code: "CH05", meaning: "Communication error between indoor and outdoor units" },
        { code: "CH10", meaning: "Indoor fan (BLDC) motor fault" },
        { code: "CH38", meaning: "Low refrigerant detected — possible gas leak" },
      ],
      fridge: [
        { code: "Er FF", meaning: "Freezer fan not running" },
        { code: "Er dH", meaning: "Defrost heater or defrost circuit fault" },
        { code: "Er rS", meaning: "Fridge compartment sensor fault" },
        { code: "Er CO", meaning: "Communication error between boards" },
      ],
      washer: [
        { code: "OE", meaning: "Water not draining — blocked filter, hose or drain pump" },
        { code: "IE", meaning: "Water not filling — tap, inlet hose or inlet valve" },
        { code: "UE", meaning: "Unbalanced load — cannot spin safely" },
        { code: "dE", meaning: "Door not closed or door lock fault" },
        { code: "LE", meaning: "Motor locked or motor/hall sensor fault" },
        { code: "tE", meaning: "Heater temperature sensor fault" },
      ],
    },
  },
  {
    slug: "samsung",
    name: "Samsung",
    appliances: ["ac", "fridge", "washer"],
    notes: {
      ac: "Samsung WindFree and Digital Inverter split ACs rely on sensitive inverter PCBs and BLDC fan motors. We regularly repair Samsung ACs that stop cooling after a power surge, show blinking indicator lights, or leak water from a clogged drain line.",
      fridge: "Samsung Digital Inverter and Convertible fridges have separate fans and sensors for each compartment. A warm fridge section with a cold freezer usually points to a blocked air duct or a failed defrost — a common Samsung repair we fix at home.",
      washer: "Samsung EcoBubble front-load and Digital Inverter top-load machines display codes like 4C, 5C and UE. Most are caused by water supply, drainage or load-balance problems and can be fixed in one visit.",
    },
    models: {
      ac: ["WindFree split AC", "Digital Inverter split AC", "Convertible inverter AC"],
      fridge: ["Single door Digital Inverter", "Double door Convertible", "Side-by-side", "French door"],
      washer: ["EcoBubble front load", "Digital Inverter top load", "Semi-automatic"],
    },
    errorCodes: {
      washer: [
        { code: "4C / 4E", meaning: "Water supply problem — tap closed, low pressure or inlet valve" },
        { code: "5C / 5E", meaning: "Drain problem — blocked filter, hose or drain pump" },
        { code: "UE / UB", meaning: "Unbalanced load during spin" },
        { code: "dC / dE", meaning: "Door not locked or door switch fault" },
        { code: "HC / HE", meaning: "Heating or temperature problem" },
        { code: "LC / LE", meaning: "Water leak detected or drain level issue" },
      ],
    },
  },
  {
    slug: "whirlpool",
    name: "Whirlpool",
    appliances: ["ac", "fridge", "washer"],
    notes: {
      ac: "Whirlpool 3D Cool inverter and window ACs are widely used in apartments across Vijayawada. We handle cooling loss, compressor trips during high voltage, noisy outdoor units and full servicing for Whirlpool ACs.",
      fridge: "Whirlpool direct-cool and IntelliFresh frost-free refrigerators are known for long life, but thermostats, relays and door gaskets wear out with age. We also repair Whirlpool 3-door models with separate cooling zones.",
      washer: "Whirlpool top-load machines such as the Whitemagic and Stainwash series often come to us with spin, drain and pulsator problems. Worn clutch assemblies, belts and drain valves are common, and we carry these spares.",
    },
    models: {
      ac: ["3D Cool inverter split AC", "Window AC"],
      fridge: ["Direct cool single door", "IntelliFresh frost free", "3-door refrigerator"],
      washer: ["Whitemagic top load", "Stainwash top load", "Semi-automatic", "Front load"],
    },
  },
  {
    slug: "godrej",
    name: "Godrej",
    appliances: ["ac", "fridge", "washer"],
    notes: {
      ac: "Godrej inverter and window ACs are popular for their low running cost. The faults we see most are gas leaks at the outdoor unit, capacitor failure that stops the compressor, and blocked filters in dusty areas.",
      fridge: "Godrej Edge direct-cool and Eon frost-free refrigerators are a Vijayawada household staple. Typical repairs are thermostat replacement, relay and overload changes, ice build-up in direct-cool models, and gas charging.",
      washer: "Godrej top-load and semi-automatic washing machines mostly need spin motor, timer, drain valve and belt repairs. We service both fully automatic and twin-tub Godrej models at home.",
    },
    models: {
      ac: ["Inverter split AC", "Window AC"],
      fridge: ["Edge direct cool", "Eon frost free double door"],
      washer: ["Top load fully automatic", "Semi-automatic"],
    },
  },
  {
    slug: "voltas",
    name: "Voltas",
    appliances: ["ac"],
    notes: {
      ac: "Voltas is one of India's best-selling AC brands, with many adjustable inverter split ACs and window ACs installed in Vijayawada homes and shops. We repair Voltas ACs for weak cooling, water leakage, noisy fans, PCB failures and display error codes, and provide gas charging and full servicing.",
    },
    models: { ac: ["Adjustable inverter split AC", "Fixed-speed split AC", "Window AC"] },
  },
  {
    slug: "daikin",
    name: "Daikin",
    appliances: ["ac"],
    notes: {
      ac: "Daikin inverter split ACs are efficient but sensitive to low gas and dirty coils. The indoor unit shows a two-character code (on the remote or display) that helps us diagnose quickly — for example U0 for low refrigerant or U4 for a communication problem.",
    },
    models: { ac: ["Inverter split AC", "Non-inverter split AC", "Cassette AC"] },
    errorCodes: {
      ac: [
        { code: "U0", meaning: "Refrigerant shortage — possible gas leak" },
        { code: "U4", meaning: "Communication error between indoor and outdoor units" },
        { code: "A5", meaning: "Freeze-up protection or high pressure control" },
        { code: "A6", meaning: "Indoor fan motor fault" },
        { code: "E6", meaning: "Compressor start-up failure or overcurrent" },
        { code: "E7", meaning: "Outdoor fan motor fault" },
      ],
    },
  },
  {
    slug: "blue-star",
    name: "Blue Star",
    appliances: ["ac"],
    notes: {
      ac: "Blue Star inverter and window ACs are common in homes and small offices. We repair cooling loss, frozen coils, drain leaks, fan motor and PCB faults, and handle installation and shifting of Blue Star split ACs.",
    },
    models: { ac: ["Inverter split AC", "Window AC", "Cassette AC"] },
  },
  {
    slug: "lloyd",
    name: "Lloyd",
    appliances: ["ac"],
    notes: {
      ac: "Lloyd inverter split ACs are a popular budget choice. We frequently fix Lloyd ACs that trip or stop after voltage fluctuations, units with weak cooling from a gas leak, and indoor units that drip water.",
    },
    models: { ac: ["Inverter split AC", "Window AC"] },
  },
  {
    slug: "carrier",
    name: "Carrier",
    appliances: ["ac"],
    notes: {
      ac: "Carrier split and window ACs are known for strong cooling. Common repairs include compressor capacitor replacement, fan motor faults, sensor errors and gas leak repair with recharging.",
    },
    models: { ac: ["Inverter split AC", "Window AC"] },
  },
  {
    slug: "hitachi",
    name: "Hitachi",
    appliances: ["ac", "fridge"],
    notes: {
      ac: "Hitachi inverter split ACs are premium units with sophisticated controls. We diagnose sensor, PCB and fan motor faults, repair gas leaks and do deep coil cleaning to restore Hitachi's rated cooling.",
      fridge: "Hitachi frost-free and multi-door refrigerators use inverter compressors and electronic controls. We repair not-cooling, defrost, fan and sensor faults on Hitachi fridges at your home.",
    },
    models: {
      ac: ["Inverter split AC", "Window AC"],
      fridge: ["Frost free double door", "Multi-door / French door"],
    },
  },
  {
    slug: "panasonic",
    name: "Panasonic",
    appliances: ["ac", "fridge", "washer"],
    notes: {
      ac: "Panasonic inverter ACs, including MirAIe smart models, need correct gas pressure and clean coils to perform well. We repair Panasonic ACs for cooling, drainage, noise and PCB issues.",
      fridge: "Panasonic frost-free refrigerators with inverter compressors are reliable but can develop defrost and fan faults. We restore cooling and fix water leakage on Panasonic fridges.",
      washer: "Panasonic top-load and front-load washers usually come to us with drain, spin and inlet valve problems. We carry common parts to finish most repairs in one visit.",
    },
    models: {
      ac: ["Inverter split AC (incl. MirAIe)", "Window AC"],
      fridge: ["Frost free double door", "Single door direct cool"],
      washer: ["Top load fully automatic", "Front load", "Semi-automatic"],
    },
  },
  {
    slug: "haier",
    name: "Haier",
    appliances: ["ac", "fridge", "washer"],
    notes: {
      ac: "Haier inverter split ACs are increasingly common in new apartments. We repair Haier ACs for low cooling, gas leaks, indoor water leakage and control board faults.",
      fridge: "Haier makes many bottom-mounted and convertible refrigerators. Not-cooling and ice build-up problems on Haier fridges are usually caused by defrost or fan faults, which we repair at home.",
      washer: "Haier top-load and front-load washing machines often need drain pump, door lock and spin repairs. We diagnose error codes and fix Haier washers at your doorstep.",
    },
    models: {
      ac: ["Inverter split AC"],
      fridge: ["Bottom-mounted freezer", "Double door frost free", "Side-by-side"],
      washer: ["Top load fully automatic", "Front load", "Semi-automatic"],
    },
  },
  {
    slug: "ifb",
    name: "IFB",
    appliances: ["washer"],
    notes: {
      washer: "IFB is one of India's most popular front-load washing machine brands. Front-load machines need regular care: we often replace door locks, drain pumps, heaters and drum bearings on IFB machines, and clean clogged filters that cause draining and smell problems.",
    },
    models: { washer: ["Front load", "Top load", "Washer dryer"] },
  },
  {
    slug: "bosch",
    name: "Bosch",
    appliances: ["fridge", "washer"],
    notes: {
      fridge: "Bosch frost-free and bottom-freezer refrigerators use precise electronic controls. We repair Bosch fridges for not cooling, frost build-up, fan and sensor faults.",
      washer: "Bosch front-load washing machines show codes such as E17/F17 for slow water filling and E18/F18 for drainage problems. We clear drain filters, replace pumps and inlet valves, and fix bearing noise on Bosch machines.",
    },
    models: {
      fridge: ["Frost free double door", "Bottom freezer"],
      washer: ["Front load", "Top load"],
    },
    errorCodes: {
      washer: [
        { code: "E17 / F17", meaning: "Water takes too long to fill — tap, pressure or inlet valve" },
        { code: "E18 / F18", meaning: "Water not draining — blocked filter or drain pump" },
      ],
    },
  },
  {
    slug: "o-general",
    name: "O General",
    appliances: ["ac"],
    notes: {
      ac: "O General split ACs are very popular in Andhra Pradesh for their strong cooling in extreme heat. We service O General ACs, repair gas leaks, fan motors, sensors and PCBs, and handle installation and shifting.",
    },
    models: { ac: ["Inverter split AC", "Non-inverter split AC", "Window AC"] },
  },
];

export type BrandPage = { brand: Brand; appliance: ApplianceKey; slug: string };

export function brandPageSlug(brandSlug: string, appliance: ApplianceKey) {
  return `${brandSlug}-${APPLIANCE_URL_PART[appliance]}-repair-vijayawada`;
}

export const BRAND_PAGES: BrandPage[] = BRANDS.flatMap((brand) =>
  brand.appliances.map((appliance) => ({ brand, appliance, slug: brandPageSlug(brand.slug, appliance) })),
);

export function brandsFor(appliance: ApplianceKey) {
  return BRANDS.filter((b) => b.appliances.includes(appliance));
}
