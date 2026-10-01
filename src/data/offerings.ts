import type { Offering } from "./types";

export const OFFERINGS: Offering[] = [
  // ───────────────────────────── AC TYPES ─────────────────────────────
  {
    slug: "split-ac-repair-vijayawada",
    appliance: "ac",
    kind: "type",
    name: "Split AC Repair",
    title: "Split AC Repair in Vijayawada",
    telugu: "విజయవాడలో స్ప్లిట్ AC రిపేర్",
    metaTitle: "Split AC Repair in Vijayawada | Indoor & Outdoor Unit Fixes",
    metaDescription:
      "Split AC repair at home in Vijayawada. Cooling, leakage, PCB, fan and compressor faults fixed for all brands with a 90-day service warranty. Call 7702177588.",
    quickAnswer:
      "Yes, AV Appliance Services repairs split ACs at your home in Vijayawada. We check both the indoor and outdoor units and fix cooling problems, water leaks, gas leaks, fan motors, PCBs, capacitors and compressors for all major brands. You get a clear quote before any work starts.",
    intro:
      "A split AC has two parts: the indoor unit on your wall and the outdoor unit outside, joined by copper pipes and a cable. A fault can sit in either part or in the pipe joints between them, so our technician tests the full system instead of guessing. Most split AC problems can be fixed on the spot in a single visit.",
    highlights: [
      { name: "Indoor blower and fan motor", detail: "Cleaning or replacing the blower wheel and indoor fan motor when airflow is weak or noisy." },
      { name: "Outdoor fan and condenser", detail: "Fixing a stopped outdoor fan and cleaning a choked condenser coil so heat can escape." },
      { name: "Capacitor and contactor", detail: "Testing and replacing the start/run capacitor and contactor when the outdoor unit hums but does not start." },
      { name: "Gas leak at flare joints", detail: "Finding leaks at the pipe joints and coils, repairing them, then recharging the correct gas." },
      { name: "Drain line and tray", detail: "Clearing blocked drain pipes and correcting the indoor unit slope to stop water dripping." },
      { name: "PCB and sensors", detail: "Checking the indoor and outdoor control boards and temperature sensors when the AC stops or blinks." },
      { name: "Compressor check", detail: "Testing the compressor and its wiring before recommending any replacement." },
      { name: "Brands we handle", detail: "LG, Samsung, Voltas, Daikin, Blue Star, Lloyd, Panasonic, Haier, Godrej, Whirlpool and more." },
    ],
    problems: [
      "Split AC running but not cooling the room",
      "Water dripping from the split AC indoor unit",
      "Outdoor unit not starting or fan not spinning",
      "Ice on the copper pipes near the outdoor unit",
      "Split AC switching off by itself after a few minutes",
      "Rattling or buzzing noise from the outdoor unit",
      "Indoor unit lights blinking and AC not working",
    ],
    tips: [
      "Wash the indoor air filters every two weeks in summer. Switch off the AC first.",
      "Keep at least one foot of open space around the outdoor unit so hot air can escape.",
      "Do not cover the outdoor unit with sheets or boxes while the AC is running.",
      "Set the temperature around 24–26°C. Very low settings make the system work harder.",
      "Book a full service before summer and again after the monsoon.",
    ],
    faq: [
      {
        q: "Why is my split AC fan running but no cold air is coming?",
        a: "Usually the outdoor unit is not running, the gas is low because of a leak, or the coils are very dirty. A technician needs to check the outdoor unit, capacitor and gas pressure to find which one it is.",
      },
      {
        q: "Can a split AC be repaired at home or do you take it to the shop?",
        a: "Most split AC repairs are done at your home. Only some PCB repairs or major welding jobs may need the part to be taken away for bench repair, and we always tell you before doing that.",
      },
      {
        q: "How long does a split AC repair take?",
        a: "Simple fixes like a capacitor or drain cleaning often take about an hour. Gas leak repair and recharge usually takes 2–4 hours.",
      },
      {
        q: "Do you repair split ACs in all areas of Vijayawada?",
        a: "Yes. We cover the city and nearby suburbs, and same-day visits are usually possible if you call or WhatsApp 77021 77588 early in the day.",
      },
    ],
    relatedGuides: ["ac-not-cooling", "ac-water-leakage", "ac-not-turning-on"],
  },
  {
    slug: "window-ac-repair-vijayawada",
    appliance: "ac",
    kind: "type",
    name: "Window AC Repair",
    title: "Window AC Repair in Vijayawada",
    telugu: "విజయవాడలో విండో AC రిపేర్",
    metaTitle: "Window AC Repair in Vijayawada | Cooling, Noise, Gas Fixes",
    metaDescription:
      "Window AC not cooling or noisy? Home window AC repair in Vijayawada for Voltas, LG, Lloyd, Godrej and more. Quote before work, 90-day warranty. Call 7702177588.",
    quickAnswer:
      "Yes, we repair window ACs at homes across Vijayawada. Our technicians fix weak cooling, loud noise, water leaks, fan motor, capacitor, thermostat and compressor faults, and do gas leak repair and recharge. We give a quote first and all work carries a 90-day service warranty.",
    intro:
      "A window AC packs the compressor, both coils and the fans into one box that sits in the wall. Because the back half faces outside, it takes the full hit of Vijayawada's summer heat and road dust, so its rear coil clogs faster than most split units. Many window AC problems start with dirt and a tired fan motor.",
    highlights: [
      { name: "Fan motor and blade", detail: "Replacing a weak or jammed fan motor and fixing a cracked or loose fan blade." },
      { name: "Condenser coil cleaning", detail: "Removing packed dust from the rear coil so the AC cools properly again." },
      { name: "Capacitor replacement", detail: "Replacing a weak capacitor when the compressor or fan struggles to start." },
      { name: "Thermostat and selector switch", detail: "Fixing knob-type controls and thermostats that stop the AC cutting in or out correctly." },
      { name: "Gas leak repair and recharge", detail: "Locating the leak, brazing it and recharging the right refrigerant." },
      { name: "Water leakage and drain", detail: "Correcting the tilt of the unit and clearing the base tray and drain hole." },
      { name: "Vibration and noise", detail: "Tightening mountings and fixing worn rubber pads that cause rattling." },
    ],
    problems: [
      "Window AC running but not cooling",
      "Loud rattling or vibration from window AC",
      "Water dripping inside the room from window AC",
      "Window AC compressor not starting, only fan running",
      "Window AC tripping the MCB",
      "Bad smell from window AC",
    ],
    tips: [
      "Clean the front filter every two weeks when the AC is in daily use.",
      "Make sure the unit tilts slightly backwards so water drains outside, not into the room.",
      "Keep curtains, plants and furniture away from the front grille so air can flow.",
      "Wait at least 3 minutes before switching the AC back on after turning it off.",
    ],
    faq: [
      {
        q: "Why is my window AC making so much noise?",
        a: "Common causes are a loose fan blade, worn mounting pads, a failing fan motor bearing, or the unit sitting unevenly in the frame. A technician can check and fix these during one visit.",
      },
      {
        q: "Is it worth repairing an old window AC?",
        a: "Often yes, if the compressor is healthy. Fan motor, capacitor and cleaning jobs are small repairs. If the compressor has failed on a very old unit, we explain the cost honestly so you can decide.",
      },
      {
        q: "Why does my window AC drip water inside the room?",
        a: "The unit may be tilted towards the room, or the drain path in the base tray is blocked with dirt. Resetting the slope and cleaning the tray usually solves it.",
      },
      {
        q: "Can someone come to check my window AC today in Vijayawada?",
        a: "In most parts of Vijayawada a same-day visit is usually possible. Call or WhatsApp 77021 77588 with your area and the problem.",
      },
    ],
    relatedGuides: ["ac-not-cooling", "ac-making-noise-or-bad-smell", "ac-water-leakage"],
  },
  {
    slug: "inverter-ac-repair-vijayawada",
    appliance: "ac",
    kind: "type",
    name: "Inverter AC Repair",
    title: "Inverter AC Repair in Vijayawada",
    telugu: "విజయవాడలో ఇన్వర్టర్ AC రిపేర్",
    metaTitle: "Inverter AC Repair in Vijayawada | PCB, Sensor, Compressor",
    metaDescription:
      "Inverter AC repair in Vijayawada for PCB, sensor, fan motor and compressor faults. Doorstep visits for Daikin, LG, Samsung, Voltas and more. Call 7702177588.",
    quickAnswer:
      "Yes, AV Appliance Services repairs inverter ACs at your home in Vijayawada. We diagnose and fix outdoor PCB faults, sensor errors, BLDC fan motors, gas leaks and inverter compressor problems for all major brands. We explain the fault and quote before starting.",
    intro:
      "An inverter AC changes its compressor speed using an electronic control board in the outdoor unit. That saves power, but it also means many faults are electronic, and voltage spikes can damage the board. Our technicians use proper testing to find whether the problem is the board, a sensor, a motor or the gas.",
    highlights: [
      { name: "Outdoor inverter PCB", detail: "Diagnosing and repairing the inverter board, or replacing it when repair is not reliable." },
      { name: "Indoor control PCB", detail: "Fixing display, remote-signal and power issues on the indoor board." },
      { name: "Temperature sensors", detail: "Testing and replacing room, coil and discharge sensors that cause errors or wrong cooling." },
      { name: "BLDC fan motors", detail: "Checking indoor and outdoor DC fan motors that stop or run at the wrong speed." },
      { name: "Gas leak and recharge", detail: "Leak repair, vacuuming and correct recharge, usually R32 or R410A in inverter models." },
      { name: "Inverter compressor check", detail: "Testing the compressor windings and drive before any replacement is suggested." },
      { name: "Voltage-related damage", detail: "Finding parts damaged by power fluctuations and advising on a suitable stabiliser." },
    ],
    problems: [
      "Inverter AC showing an error code and not cooling",
      "Inverter AC cooling slowly even on low temperature",
      "Outdoor unit starts and stops again and again",
      "Inverter AC stopped after a power cut or voltage fluctuation",
      "Indoor unit blinking lights, no cooling",
      "Outdoor fan not running in inverter AC",
    ],
    tips: [
      "Use a stabiliser suitable for inverter ACs if your area has frequent voltage swings.",
      "Switch off the AC at the wall during storms or long power cuts.",
      "Clean the indoor filters regularly. Dirty filters make the system run harder.",
      "Do not keep switching the AC on and off. Inverter ACs work best when left running at a steady temperature.",
    ],
    faq: [
      {
        q: "Is inverter AC repair costlier than normal AC repair?",
        a: "It can be when the fault is in the PCB or the inverter compressor, because those parts cost more. Many inverter AC problems, like dirty coils, sensors or gas leaks, are similar to normal ACs. We quote after checking.",
      },
      {
        q: "Can an inverter AC PCB be repaired, or must it be replaced?",
        a: "Many boards can be repaired if the damage is limited. If the board is badly burnt or repair would not be reliable, we recommend a replacement and explain why.",
      },
      {
        q: "Why does my inverter AC show an error code?",
        a: "Error codes point to a sensor, fan, communication or gas problem, but the same code can have different causes. A technician should test the system before replacing any part.",
      },
      {
        q: "Do you repair inverter ACs across Vijayawada?",
        a: "Yes, we repair inverter ACs across Vijayawada and nearby areas. Same-day visits are usually possible when you book early.",
      },
    ],
    relatedGuides: ["ac-not-turning-on", "ac-not-cooling"],
  },

  // ───────────────────────────── FRIDGE TYPES ─────────────────────────────
  {
    slug: "single-door-fridge-repair-vijayawada",
    appliance: "fridge",
    kind: "type",
    name: "Single Door Fridge Repair",
    title: "Single Door Fridge Repair in Vijayawada",
    telugu: "విజయవాడలో సింగిల్ డోర్ ఫ్రిజ్ రిపేర్",
    metaTitle: "Single Door Fridge Repair in Vijayawada | Direct Cool Fridge",
    metaDescription:
      "Single door fridge not cooling? Home repair of direct cool fridges in Vijayawada: thermostat, relay, gas leak and compressor. 90-day warranty. Call 7702177588.",
    quickAnswer:
      "Yes, we repair single door (direct cool) fridges at your home in Vijayawada. We fix cooling problems, thermostat and relay faults, gas leaks, door gasket issues and compressor problems for Godrej, Whirlpool, LG, Samsung, Haier and other brands. You get a clear quote before work begins.",
    intro:
      "A single door fridge is a direct cool fridge: the freezer box cools by natural air movement, and ice forms on it slowly, so it needs manual defrosting. It has fewer parts than a frost-free model, which makes most repairs quick and affordable. The usual trouble spots are the thermostat, the starting relay, the door seal and gas leaks.",
    highlights: [
      { name: "Thermostat", detail: "Replacing a faulty thermostat when the fridge cools too much, too little or not at all." },
      { name: "Relay and overload", detail: "Replacing the starting relay and overload protector when the compressor clicks but does not run." },
      { name: "Gas leak repair", detail: "Finding the leak, brazing it and recharging with the correct refrigerant." },
      { name: "Door gasket", detail: "Replacing a loose or torn rubber seal that lets warm air in." },
      { name: "Compressor check", detail: "Testing the compressor before advising any replacement." },
      { name: "Water leakage", detail: "Clearing the drain path and fixing the defrost water tray." },
    ],
    problems: [
      "Single door fridge not cooling at all",
      "Freezer has ice but the lower section is warm",
      "Fridge compressor making clicking sound and stopping",
      "Too much ice forming in the freezer box",
      "Water leaking below the fridge",
      "Fridge body or sides getting very hot",
    ],
    tips: [
      "Defrost the freezer when the ice layer gets thicker than about half a centimetre.",
      "Never use a knife or sharp tool to remove ice. It can puncture the gas line.",
      "Leave a small gap between the back of the fridge and the wall for air flow.",
      "Keep the door closed as much as possible and let hot food cool before storing it.",
    ],
    faq: [
      {
        q: "Why is my single door fridge not cooling but the light is on?",
        a: "The light only shows that power is reaching the fridge. The cause is often a faulty thermostat, relay or overload, or a gas leak. A technician can test these at home.",
      },
      {
        q: "How often should I defrost a direct cool fridge?",
        a: "Defrost it whenever the ice layer on the freezer gets thick, usually every few weeks depending on use. Thick ice blocks cooling and wastes power.",
      },
      {
        q: "Is it worth repairing an old single door fridge?",
        a: "In most cases yes, because thermostat, relay and gasket repairs are small jobs. If the compressor has failed on a very old fridge, we tell you honestly so you can compare with buying new.",
      },
      {
        q: "Do you repair single door fridges at home in Vijayawada?",
        a: "Yes. Our technician visits your home anywhere in Vijayawada, and same-day visits are usually possible. Call or WhatsApp 77021 77588.",
      },
    ],
    relatedGuides: ["fridge-not-cooling", "fridge-ice-buildup", "fridge-water-leakage"],
  },
  {
    slug: "double-door-fridge-repair-vijayawada",
    appliance: "fridge",
    kind: "type",
    name: "Double Door Fridge Repair",
    title: "Double Door Fridge Repair in Vijayawada",
    telugu: "విజయవాడలో డబుల్ డోర్ ఫ్రిజ్ రిపేర్",
    metaTitle: "Double Door Fridge Repair Vijayawada | Frost-Free Experts",
    metaDescription:
      "Double door fridge repair in Vijayawada. Frost-free defrost, fan, sensor, PCB and gas faults fixed at home for LG, Samsung, Whirlpool and more. Call 7702177588.",
    quickAnswer:
      "Yes, AV Appliance Services repairs double door frost-free fridges at your home in Vijayawada. We fix defrost heater and timer faults, fan motors, sensors, PCBs, gas leaks and compressor problems. A common case is a freezer that works while the bottom section stays warm, and we repair that regularly.",
    intro:
      "Most double door fridges are frost-free. A fan blows cold air from behind the freezer into the lower section, and an automatic defrost system melts ice from the cooling coil. When the defrost system or fan fails, ice blocks the air path and the fridge section stops cooling even though the freezer still feels cold.",
    highlights: [
      { name: "Defrost heater and thermostat", detail: "Replacing the defrost heater, bimetal thermostat or fuse when ice keeps building up behind the freezer panel." },
      { name: "Defrost timer or control", detail: "Fixing the timer or control board that runs the automatic defrost cycle." },
      { name: "Evaporator fan motor", detail: "Replacing the fan that pushes cold air into the fridge section." },
      { name: "Air damper and sensors", detail: "Checking the damper and temperature sensors that control the fridge-section cooling." },
      { name: "Main PCB", detail: "Repairing or replacing the control board in electronic and inverter models." },
      { name: "Gas leak repair", detail: "Leak detection, brazing and recharge with the correct refrigerant." },
      { name: "Compressor and relay", detail: "Testing and replacing the relay, overload or compressor when needed." },
    ],
    problems: [
      "Double door fridge freezer cold but fridge not cooling",
      "Ice building up on the back wall of the freezer",
      "Water collecting under the vegetable tray",
      "Fridge making a loud fan or buzzing noise",
      "Double door fridge not cooling after a power cut",
      "Display showing a warning and cooling weak",
    ],
    tips: [
      "Do not block the air vents inside the freezer and fridge with food packets.",
      "Keep the fridge about three-quarters full so cold air can move around.",
      "Check that the doors close fully. A slightly open door causes heavy frosting.",
      "Clean the door gaskets with a soft cloth and mild soap water every few weeks.",
    ],
    faq: [
      {
        q: "Why does my double door fridge freezer work but the bottom is warm?",
        a: "In frost-free fridges this is usually a defrost problem or a failed fan motor. Ice blocks the air duct so cold air cannot reach the lower section. A technician needs to open the rear freezer panel to confirm.",
      },
      {
        q: "Can I fix it by switching the fridge off for a day?",
        a: "Switching it off can melt the ice and bring back cooling for a few days, but the fault returns if the defrost heater, sensor or fan is bad. Get it checked if the problem comes back.",
      },
      {
        q: "How long does a frost-free fridge repair take?",
        a: "Defrost part or fan replacement usually takes about 1–2 hours. Gas leak repair and recharge can take 3–4 hours.",
      },
      {
        q: "Who repairs double door fridges near me in Vijayawada?",
        a: "AV Appliance Services repairs double door fridges at homes all over Vijayawada, with same-day visits usually possible. Call 77021 77588.",
      },
    ],
    relatedGuides: ["fridge-not-cooling", "fridge-ice-buildup", "fridge-making-noise"],
  },
  {
    slug: "side-by-side-refrigerator-repair-vijayawada",
    appliance: "fridge",
    kind: "type",
    name: "Side-by-Side Refrigerator Repair",
    title: "Side-by-Side Refrigerator Repair in Vijayawada",
    telugu: "విజయవాడలో సైడ్ బై సైడ్ ఫ్రిజ్ రిపేర్",
    metaTitle: "Side-by-Side Refrigerator Repair in Vijayawada | At Home",
    metaDescription:
      "Side-by-side refrigerator repair in Vijayawada. Cooling, defrost, PCB, dispenser and inverter compressor faults fixed at home. Call 7702177588.",
    quickAnswer:
      "Yes, we repair side-by-side refrigerators at your home in Vijayawada. We handle cooling and defrost faults, fan motors, sensors, main PCBs, water dispenser and ice maker issues, gas leaks and inverter compressors for Samsung, LG, Whirlpool, Haier and other brands. The technician explains the fault and quotes before starting.",
    intro:
      "A side-by-side refrigerator has the freezer and fridge next to each other, each with its own tall door. These are large frost-free units with electronic controls, several fans and sensors, and often a water dispenser or ice maker. Faults are mostly electronic or airflow-related, so careful testing matters more than guesswork.",
    highlights: [
      { name: "Main and display PCB", detail: "Diagnosing control board faults that cause no cooling, beeping or a blank display." },
      { name: "Defrost system", detail: "Repairing defrost heaters, sensors and fuses when ice blocks the cooling coil." },
      { name: "Fan motors", detail: "Replacing evaporator and condenser fan motors that are noisy or stopped." },
      { name: "Sensors", detail: "Testing and replacing freezer, fridge and defrost sensors." },
      { name: "Water dispenser and ice maker", detail: "Fixing inlet valves, frozen lines and ice maker faults where the model has them." },
      { name: "Inverter compressor", detail: "Checking the compressor and its drive board before any replacement." },
      { name: "Gas leak repair", detail: "Leak detection, repair, vacuuming and correct recharge." },
      { name: "Door alignment and gaskets", detail: "Adjusting sagging doors and replacing worn seals so both doors close tight." },
    ],
    problems: [
      "Side-by-side fridge not cooling in the fridge section",
      "Freezer side not freezing properly",
      "Water dispenser not working or leaking",
      "Ice maker not making ice",
      "Fridge beeping continuously or display showing an error",
      "Frost forming inside the freezer",
      "Loud fan noise from the back or inside the freezer",
    ],
    tips: [
      "Leave enough space at the back and sides as the maker suggests so heat can escape.",
      "Do not overload the door bins. Heavy bins can make the doors sag and leak cold air.",
      "Use a suitable stabiliser if your area has frequent voltage swings.",
      "Keep the vents inside both sections clear of food boxes.",
    ],
    faq: [
      {
        q: "Can a side-by-side refrigerator be repaired at home?",
        a: "Yes. Almost all side-by-side fridge repairs, including PCB, fan, sensor and gas work, are done at your home. The unit is too large to move easily, so we bring the tools to you.",
      },
      {
        q: "Why is my side-by-side fridge beeping?",
        a: "Often a door is not fully closed or the inside temperature has risen. If it keeps beeping with the doors closed, a sensor, board or cooling fault needs to be checked.",
      },
      {
        q: "Do you repair water dispensers and ice makers?",
        a: "Yes. We repair water inlet valves, frozen water lines and ice maker faults on models that have these features.",
      },
      {
        q: "Is side-by-side fridge repair available in Vijayawada the same day?",
        a: "Same-day visits are usually possible in most areas of Vijayawada. If a special part is needed, we tell you how long it may take to arrive.",
      },
    ],
    relatedGuides: ["fridge-not-cooling", "fridge-making-noise", "fridge-water-leakage"],
  },

  // ───────────────────────────── WASHER TYPES ─────────────────────────────
  {
    slug: "front-load-washing-machine-repair-vijayawada",
    appliance: "washer",
    kind: "type",
    name: "Front Load Washing Machine Repair",
    title: "Front Load Washing Machine Repair in Vijayawada",
    telugu: "విజయవాడలో ఫ్రంట్ లోడ్ వాషింగ్ మెషిన్ రిపేర్",
    metaTitle: "Front Load Washing Machine Repair in Vijayawada | At Home",
    metaDescription:
      "Front load washing machine repair in Vijayawada for door lock, drain pump, bearing, heater and PCB faults. IFB, LG, Samsung, Bosch and more. Call 7702177588.",
    quickAnswer:
      "Yes, AV Appliance Services repairs front load washing machines at your home in Vijayawada. We fix door locks, door gaskets, drain pumps, drum bearings and seals, heaters, shock absorbers, motors and PCBs for IFB, LG, Samsung, Bosch, Whirlpool and other brands. You get a quote before any work starts.",
    intro:
      "A front load washing machine tumbles clothes in a drum that turns on its side, so it relies on a sealed door, a locking system and strong bearings. Unlike a top loader, the door stays locked until the water is fully drained, and many models heat water with a built-in heater. That is why a blocked drain filter or a bad door lock can stop the whole machine.",
    highlights: [
      { name: "Door lock / interlock", detail: "Replacing a faulty door lock when the machine will not start or the door stays locked." },
      { name: "Door gasket (bellow)", detail: "Replacing a torn or mouldy rubber seal that leaks water at the front." },
      { name: "Drain pump and filter", detail: "Cleaning the drain filter and replacing a jammed or burnt drain pump." },
      { name: "Drum bearings and seal", detail: "Replacing worn bearings and the oil seal when the drum makes a loud rumbling noise." },
      { name: "Heater", detail: "Replacing a failed heater that trips power or stops hot washes." },
      { name: "Shock absorbers and springs", detail: "Replacing worn dampers that let the machine shake or walk during spin." },
      { name: "Motor and belt", detail: "Repairing belt-drive and direct-drive motor faults." },
      { name: "PCB and pressure sensor", detail: "Diagnosing control board and water level sensor faults." },
    ],
    problems: [
      "Front load door not opening after the wash",
      "Front load washing machine not draining water",
      "Water leaking from the front door",
      "Loud noise during spin in front load machine",
      "Machine shaking and moving a lot during spin",
      "Front load machine not heating water",
      "Machine stops mid-cycle and shows an error",
    ],
    tips: [
      "Clean the drain filter every month or two. Coins, hairpins and lint collect there.",
      "Leave the door and detergent drawer slightly open after washing so the gasket dries.",
      "Use only front load (low-foam) detergent, in the amount the maker suggests.",
      "Do not overload the drum. Heavy, uneven loads strain the bearings and shock absorbers.",
      "Empty pockets before washing to protect the drum and drain pump.",
    ],
    faq: [
      {
        q: "Why is my front load washing machine door not opening?",
        a: "The door stays locked while there is water inside or while the machine is cooling down. If the drum is empty and the door still will not open after a few minutes, the door lock or control board may be faulty and needs a technician.",
      },
      {
        q: "How do I know if my front load machine needs new bearings?",
        a: "A loud rumbling or grinding sound during spin, and a drum that feels loose when moved by hand, are common signs. Water or rust marks at the back can also point to a failed seal.",
      },
      {
        q: "How long does a front load bearing replacement take?",
        a: "It usually takes 3–5 hours because the drum has to be taken apart. In some cases the job may need a second visit or the part taken away for repair, and we tell you before that.",
      },
      {
        q: "Do you repair IFB and Bosch front load machines in Vijayawada?",
        a: "Yes. We repair IFB, Bosch, LG, Samsung, Whirlpool and other front load machines at homes in Vijayawada, and same-day visits are usually possible.",
      },
    ],
    relatedGuides: ["washing-machine-not-draining", "washing-machine-drum-noise", "washing-machine-water-leakage"],
  },
  {
    slug: "top-load-washing-machine-repair-vijayawada",
    appliance: "washer",
    kind: "type",
    name: "Top Load Washing Machine Repair",
    title: "Top Load Washing Machine Repair in Vijayawada",
    telugu: "విజయవాడలో టాప్ లోడ్ వాషింగ్ మెషిన్ రిపేర్",
    metaTitle: "Top Load Washing Machine Repair in Vijayawada | All Brands",
    metaDescription:
      "Top load washing machine repair in Vijayawada. Not spinning, not draining, inlet, motor and PCB faults fixed at home for LG, Samsung and more. Call 7702177588.",
    quickAnswer:
      "Yes, we repair fully automatic top load washing machines at your home in Vijayawada. We fix spin and drain problems, water inlet valves, lid switches, clutch and gearbox, motors, belts and PCBs for LG, Samsung, Whirlpool, Godrej, Panasonic, IFB and other brands. The technician explains the fault and quotes first.",
    intro:
      "A fully automatic top load machine fills, washes, rinses and spins in one tub, using a pulsator or agitator at the bottom. It depends on a lid switch, a water inlet valve and a drive system with a clutch or direct-drive motor. Hard water and low tap pressure in many homes can clog the inlet and cause filling errors.",
    highlights: [
      { name: "Water inlet valve", detail: "Cleaning the inlet mesh or replacing the valve when water does not fill or keeps filling." },
      { name: "Lid switch / lock", detail: "Replacing a faulty lid switch that stops the machine from spinning." },
      { name: "Drain valve or pump", detail: "Clearing blockages and replacing the drain valve or pump when water stays in the tub." },
      { name: "Clutch and gearbox", detail: "Repairing the clutch or gearbox when the tub does not spin or the pulsator does not turn." },
      { name: "Motor and belt", detail: "Replacing a worn belt or faulty motor in belt-drive and direct-drive models." },
      { name: "Suspension rods", detail: "Replacing worn rods that let the tub bang against the body during spin." },
      { name: "PCB and pressure sensor", detail: "Diagnosing control board and water level sensor faults." },
    ],
    problems: [
      "Top load washing machine not spinning",
      "Water not draining after the wash",
      "Machine not filling water",
      "Tub banging loudly during spin",
      "Pulsator not rotating, only humming sound",
      "Machine not starting or display blank",
    ],
    tips: [
      "Clean the lint filter inside the tub after every few washes.",
      "Spread clothes evenly around the pulsator before starting the spin.",
      "Check that the water tap is fully open and the inlet hose is not bent.",
      "Keep the machine on a flat, firm floor. Uneven floors cause banging.",
    ],
    faq: [
      {
        q: "Why is my top load washing machine not spinning?",
        a: "Common causes are an uneven load, a faulty lid switch, a worn belt, a drain problem or a clutch fault. First spread the clothes evenly and close the lid properly. If it still does not spin, a technician should check it.",
      },
      {
        q: "Why is my top loader not filling water?",
        a: "Check that the tap is open and water pressure is normal. If it still does not fill, the inlet mesh may be clogged or the inlet valve may be faulty.",
      },
      {
        q: "Can a top load machine be repaired at home?",
        a: "Yes. Most top load repairs, including inlet valve, lid switch, belt, drain and PCB work, are done at your home.",
      },
      {
        q: "Do you service top load machines in all parts of Vijayawada?",
        a: "Yes, we cover Vijayawada city and nearby suburbs. Same-day visits are usually possible. Call or WhatsApp 77021 77588.",
      },
    ],
    relatedGuides: ["washing-machine-not-spinning", "washing-machine-not-draining", "washing-machine-not-starting"],
  },
  {
    slug: "semi-automatic-washing-machine-repair-vijayawada",
    appliance: "washer",
    kind: "type",
    name: "Semi-Automatic Washing Machine Repair",
    title: "Semi-Automatic Washing Machine Repair in Vijayawada",
    telugu: "విజయవాడలో సెమీ ఆటోమేటిక్ వాషింగ్ మెషిన్ రిపేర్",
    metaTitle: "Semi-Automatic Washing Machine Repair in Vijayawada",
    metaDescription:
      "Semi-automatic washing machine repair in Vijayawada. Spin tub, wash motor, timer, belt and drain faults fixed at home for twin tub machines. Call 7702177588.",
    quickAnswer:
      "Yes, AV Appliance Services repairs semi-automatic twin tub washing machines at your home in Vijayawada. We fix wash and spin motors, timers, belts, capacitors, spin brakes, drain valves and water leaks for LG, Samsung, Whirlpool, Godrej, Panasonic and other brands. Most repairs are finished in one visit.",
    intro:
      "A semi-automatic machine has two tubs: one for washing and one for spin drying. You fill the water and move clothes between tubs by hand, and simple timers control each side. With fewer electronics, faults are usually mechanical, like a loose belt, a weak capacitor, a worn spin brake or a leaking drain.",
    highlights: [
      { name: "Wash motor", detail: "Repairing or replacing the wash motor when the pulsator does not turn." },
      { name: "Spin motor", detail: "Replacing a weak or burnt spin motor when the dryer tub does not spin." },
      { name: "Wash and spin timers", detail: "Replacing timers that stop working or do not turn off." },
      { name: "Motor capacitors", detail: "Replacing weak capacitors that cause humming but no movement." },
      { name: "Belt and pulley", detail: "Replacing a loose or broken belt on the wash side." },
      { name: "Spin brake and lid switch", detail: "Fixing the brake and lid safety switch on the spin tub." },
      { name: "Drain valve and hoses", detail: "Clearing blocked drains and fixing leaks from the drain selector and hoses." },
    ],
    problems: [
      "Spin tub not spinning in semi-automatic machine",
      "Wash tub pulsator not rotating",
      "Machine humming but not working",
      "Water leaking from the bottom of the machine",
      "Wash timer not working",
      "Water not draining from the wash tub",
    ],
    tips: [
      "Do not overload the spin tub. Spread clothes evenly and use the safety cap on top.",
      "Clean the lint filter in the wash tub regularly.",
      "Wipe the machine dry after use and keep the control area away from splashing water.",
      "Unplug the machine after washing, especially in homes with frequent voltage swings.",
    ],
    faq: [
      {
        q: "Why is my semi-automatic spin tub not spinning?",
        a: "Common causes are an open or faulty lid switch, a weak capacitor, a jammed spin brake or a failed spin motor. A technician can test these parts at home.",
      },
      {
        q: "Why is my semi-automatic machine making a humming sound but not rotating?",
        a: "Usually the motor capacitor is weak, the belt has slipped, or something is jammed under the pulsator. Switch it off and call a technician rather than forcing it.",
      },
      {
        q: "Is it worth repairing a semi-automatic washing machine?",
        a: "Usually yes. Motors, timers, belts and capacitors are affordable parts, and these machines often run for many years after repair.",
      },
      {
        q: "Can you repair my twin tub machine at home in Vijayawada?",
        a: "Yes, we repair semi-automatic machines at homes across Vijayawada, and same-day visits are usually possible.",
      },
    ],
    relatedGuides: ["washing-machine-not-spinning", "washing-machine-water-leakage", "washing-machine-not-draining"],
  },

  // ───────────────────────────── AC SERVICES ─────────────────────────────
  {
    slug: "ac-gas-filling-vijayawada",
    appliance: "ac",
    kind: "service",
    name: "AC Gas Filling",
    title: "AC Gas Filling in Vijayawada",
    telugu: "విజయవాడలో AC గ్యాస్ ఫిల్లింగ్",
    metaTitle: "AC Gas Filling in Vijayawada | Leak Test, R32, R410A, R22",
    metaDescription:
      "AC gas filling in Vijayawada with a leak test and leak repair first. R32, R410A and R22 recharge for split and window ACs, 90-day warranty. Call 7702177588.",
    quickAnswer:
      "Yes, we do AC gas filling at your home in Vijayawada for split, window and inverter ACs. We first test for leaks and repair them, then vacuum the system and recharge the correct gas (R32, R410A or R22) to the right pressure. Gas does not get used up in a healthy AC, so filling without fixing the leak only helps for a short time.",
    intro:
      "An AC works in a closed loop, so the refrigerant gas should last for the life of the unit. If the gas is low, it has leaked out somewhere, often at a flare joint, a valve or a corroded coil. Proper gas filling means finding and fixing that leak first, not just topping up.",
    highlights: [
      { name: "Leak testing", detail: "Pressure testing and checking joints, valves and coils to find where the gas escaped." },
      { name: "Leak repair", detail: "Re-making flare joints, brazing pipes or repairing the coil where possible." },
      { name: "Vacuuming", detail: "Removing air and moisture with a vacuum pump before charging, so the system runs clean." },
      { name: "R32 recharge", detail: "Correct charging for newer split and inverter ACs that use R32." },
      { name: "R410A recharge", detail: "Charging for ACs that use R410A, as marked on the unit's label." },
      { name: "R22 recharge", detail: "Charging for older ACs that still use R22." },
      { name: "Performance check", detail: "Checking pressure, current and air temperature after charging to confirm cooling." },
    ],
    problems: [
      "AC cooling reduced over weeks or months",
      "Ice forming on the copper pipes or indoor coil",
      "AC needs gas filling every year",
      "Oil stains near the outdoor unit valves",
      "Hissing sound near the pipes",
      "AC not cooling after shifting to a new house",
    ],
    process: [
      "Check cooling, pressure and current to confirm the gas is really low.",
      "Find the leak using pressure testing and checking joints, valves and coils.",
      "Repair the leak and explain what was fixed.",
      "Vacuum the system to remove air and moisture.",
      "Charge the correct gas type to the right pressure for your model.",
      "Test cooling and running current before the technician leaves.",
    ],
    tips: [
      "If your AC needs gas every year, ask for a proper leak test, not just a top-up.",
      "Do not touch or tighten the valves on the outdoor unit yourself.",
      "Keep the outdoor unit where the pipes will not be hit or bent.",
      "Book a service if cooling slowly drops. Catching a leak early can prevent compressor damage.",
    ],
    faq: [
      {
        q: "Does AC gas need to be refilled every year?",
        a: "No. In a healthy AC the gas stays inside a closed system and does not get used up. If it runs low, there is a leak that should be found and repaired before refilling.",
      },
      {
        q: "How do I know if my AC gas is low?",
        a: "Signs include weak cooling, ice on the copper pipes and the AC running for a long time without cooling the room. Only a pressure test by a technician can confirm it.",
      },
      {
        q: "Which gas does my AC use?",
        a: "The gas type is printed on the label of the outdoor unit or on the side of a window AC. Newer ACs usually use R32 or R410A, and older ones often use R22. Different gases must not be mixed.",
      },
      {
        q: "How long does AC gas filling take?",
        a: "With leak testing, repair, vacuuming and charging, it usually takes 2–4 hours. A larger leak or coil repair may take longer.",
      },
      {
        q: "Where can I get AC gas filling with a leak test in Vijayawada?",
        a: "AV Appliance Services does gas filling with a leak test at homes across Vijayawada. Same-day visits are usually possible. Call or WhatsApp 77021 77588.",
      },
    ],
    relatedGuides: ["ac-not-cooling", "ac-water-leakage"],
  },
  {
    slug: "ac-installation-vijayawada",
    appliance: "ac",
    kind: "service",
    name: "AC Installation",
    title: "AC Installation in Vijayawada",
    telugu: "విజయవాడలో AC ఇన్‌స్టలేషన్",
    metaTitle: "AC Installation in Vijayawada | Split & Window AC Fitting",
    metaDescription:
      "Split and window AC installation in Vijayawada with copper piping, stand fitting, vacuuming and proper drain slope. Uninstall and shifting too. Call 7702177588.",
    quickAnswer:
      "Yes, we install split and window ACs at homes in Vijayawada, and also handle uninstallation and shifting to a new house. Installation covers wall mounting, copper piping, outdoor stand, vacuuming, drain slope and a test run. We check the wall, power point and pipe route before starting.",
    intro:
      "Many AC problems like water leaks, weak cooling and early gas leaks come from poor installation. A good job means firm mounting, tight pipe joints, a vacuumed system and a drain pipe that slopes downhill all the way. We take the time to do each step properly.",
    highlights: [
      { name: "Split AC installation", detail: "Mounting the indoor unit level, fixing the outdoor unit and connecting pipes and cable." },
      { name: "Window AC installation", detail: "Fitting the unit in the window or wall opening with the right backward tilt and support." },
      { name: "Copper piping", detail: "Extending or laying copper pipes with proper insulation and neat flare joints." },
      { name: "Outdoor stand", detail: "Fixing a strong wall or floor stand with rubber pads to reduce vibration." },
      { name: "Vacuuming", detail: "Removing air and moisture from the pipes before releasing the gas." },
      { name: "Drain slope", detail: "Routing the drain pipe with a steady downward slope so water does not back up." },
      { name: "Uninstallation", detail: "Pump-down to save the gas in the outdoor unit, then safe removal." },
      { name: "AC shifting", detail: "Uninstalling at your old home and reinstalling at the new one." },
    ],
    problems: [
      "New AC needs to be installed",
      "Shifting house and need AC moved",
      "Water dripping from a newly installed AC",
      "Newly installed AC not cooling well",
      "Outdoor unit vibrating on the wall",
      "Need longer copper pipe for AC",
    ],
    process: [
      "Inspect the site and choose the best spot for the indoor and outdoor units.",
      "Check the power point and confirm the pipe and drain route.",
      "Mount the units, drill the wall hole and fix the outdoor stand.",
      "Connect copper pipes, cable and drain pipe with the right slope.",
      "Vacuum the system and open the gas valves.",
      "Test run the AC and check cooling, drainage and noise.",
    ],
    tips: [
      "Keep a dedicated power point with proper earthing ready near the AC spot.",
      "Choose an outdoor spot with open air, away from direct afternoon sun if possible.",
      "Keep the pipe length between the units as short as practical for better cooling.",
      "Ask for pump-down during uninstallation so the gas is saved for reinstallation.",
    ],
    faq: [
      {
        q: "Is vacuuming necessary during AC installation?",
        a: "Yes. Vacuuming removes air and moisture from the pipes. Skipping it can reduce cooling and harm the compressor over time.",
      },
      {
        q: "How long does split AC installation take?",
        a: "A standard split AC installation usually takes 2–3 hours. Extra piping, high walls or difficult outdoor spots can take longer.",
      },
      {
        q: "Will I need gas filling after shifting my AC?",
        a: "Not always. If the gas is pumped down into the outdoor unit before removal and the joints are made properly at the new place, the gas is usually saved. If a leak is found, it must be repaired and recharged.",
      },
      {
        q: "Do you do AC shifting within Vijayawada?",
        a: "Yes. We uninstall your AC at the old home and reinstall it at the new one anywhere in Vijayawada and nearby areas. Call 77021 77588 to plan the date.",
      },
    ],
    relatedGuides: ["ac-water-leakage", "ac-not-cooling", "ac-making-noise-or-bad-smell"],
  },
  {
    slug: "ac-service-vijayawada",
    appliance: "ac",
    kind: "service",
    name: "AC Service",
    title: "AC Service in Vijayawada",
    telugu: "విజయవాడలో AC సర్వీస్",
    metaTitle: "AC Service in Vijayawada | Jet Pump Deep Cleaning at Home",
    metaDescription:
      "AC service in Vijayawada with jet pump cleaning of filters, coils, blower and drain tray. Better cooling, less smell for split and window ACs. Call 7702177588.",
    quickAnswer:
      "Yes, AV Appliance Services does AC servicing at your home in Vijayawada. A full service includes jet pump cleaning of the indoor coil, filters, blower and drain tray, plus cleaning of the outdoor unit and a basic performance check. It suits split, window and inverter ACs of all brands.",
    intro:
      "Dust, pollen and moisture build up inside every AC, and in Vijayawada's hot, dusty months this happens quickly. A dirty coil and blower cut airflow, reduce cooling, raise power use and cause bad smells. A proper wet service with a jet pump washes out dirt that a simple filter clean cannot reach.",
    highlights: [
      { name: "Filter cleaning", detail: "Washing and drying the air filters." },
      { name: "Indoor coil jet wash", detail: "Cleaning the cooling coil with a low-pressure jet pump and a cover bag to catch dirty water." },
      { name: "Blower wheel cleaning", detail: "Removing sticky dust from the blower to restore airflow and cut smell." },
      { name: "Drain tray and pipe", detail: "Cleaning the tray and flushing the drain pipe to prevent dripping." },
      { name: "Outdoor unit cleaning", detail: "Washing the condenser coil and clearing leaves and dust from the fan area." },
      { name: "Basic checks", detail: "Checking cooling, running current and any unusual noise after the service." },
    ],
    problems: [
      "AC cooling less than before",
      "Bad smell when the AC starts",
      "Weak airflow from the indoor unit",
      "Black dust or spots on the AC louvres",
      "Water dripping because of a dirty drain",
      "AC not serviced for a long time",
    ],
    process: [
      "Check how the AC is running before starting the service.",
      "Cover the wall and fit a service bag under the indoor unit.",
      "Remove and wash the filters, then jet wash the coil and blower.",
      "Clean the drain tray and flush the drain pipe.",
      "Clean the outdoor unit coil and fan area.",
      "Refit everything and test cooling and drainage.",
    ],
    tips: [
      "Wash the filters yourself every two weeks in summer. It takes only a few minutes.",
      "Get a full service before summer and once more after the monsoon if you use the AC daily.",
      "Do not spray water directly on an AC with the power on. Leave wet cleaning to a technician.",
      "Run the AC in fan mode for a few minutes before switching off to reduce smell.",
    ],
    faq: [
      {
        q: "How often should I get my AC serviced in Vijayawada?",
        a: "If you use the AC every day in summer, a full service every 4–6 months is a good rule. At minimum, service it once before the hot season starts.",
      },
      {
        q: "What is the difference between a dry service and a jet pump service?",
        a: "A dry service mostly cleans the filters and wipes the surfaces. A jet pump service washes the coil, blower and drain tray with water, which removes much more dirt.",
      },
      {
        q: "How long does an AC service take?",
        a: "A full jet pump service usually takes about 1–1.5 hours per AC.",
      },
      {
        q: "Does AC servicing include gas filling?",
        a: "No. Gas filling is a separate job and is only needed if there is a leak. During the service, we will tell you if the cooling suggests a gas problem.",
      },
      {
        q: "Can I book AC servicing for multiple ACs at my Vijayawada home?",
        a: "Yes. We can service several ACs in one visit. Tell us the number of units when you call or WhatsApp 77021 77588 so we plan enough time.",
      },
    ],
    relatedGuides: ["ac-making-noise-or-bad-smell", "ac-not-cooling", "ac-water-leakage"],
  },

  // ───────────────────────────── FRIDGE SERVICES ─────────────────────────────
  {
    slug: "refrigerator-gas-filling-vijayawada",
    appliance: "fridge",
    kind: "service",
    name: "Refrigerator Gas Filling",
    title: "Refrigerator Gas Filling in Vijayawada",
    telugu: "విజయవాడలో ఫ్రిజ్ గ్యాస్ ఫిల్లింగ్",
    metaTitle: "Fridge Gas Filling in Vijayawada | Leak Repair & Recharge",
    metaDescription:
      "Refrigerator gas filling in Vijayawada with leak detection, brazing and correct recharge for single door, double door and side-by-side fridges. Call 7702177588.",
    quickAnswer:
      "Yes, we do refrigerator gas filling at your home in Vijayawada. The technician finds and repairs the leak, fits a new filter drier where needed, vacuums the system and recharges the correct gas, such as R600a or R134a. We fill gas only after the leak is fixed, because a fridge does not use up its gas.",
    intro:
      "A fridge is a sealed system, so the gas inside should never run out. When cooling slowly fades and the compressor keeps running, a leak is a common cause. Proper gas filling includes finding that leak, repairing it and charging the exact amount for your model.",
    highlights: [
      { name: "Leak detection", detail: "Pressure testing and checking pipes, joints and coils to locate the leak." },
      { name: "Leak repair and brazing", detail: "Brazing the leaking joint or pipe, or repairing the affected coil section." },
      { name: "Filter drier", detail: "Replacing the filter drier so moisture does not block the system." },
      { name: "Vacuuming", detail: "Removing air and moisture before charging." },
      { name: "Correct gas charging", detail: "Charging R600a, R134a or the gas marked on your fridge's label." },
      { name: "Cooling test", detail: "Checking temperatures and compressor running after the job." },
    ],
    problems: [
      "Fridge not cooling but the compressor runs",
      "Cooling slowly reduced over weeks",
      "No frost at all on the freezer",
      "Oil marks near the pipes at the back",
      "Fridge not cooling after moving house",
    ],
    process: [
      "Check cooling and compressor running to confirm a gas problem.",
      "Find the leak with pressure testing.",
      "Braze and repair the leak, and replace the filter drier.",
      "Vacuum the system to remove air and moisture.",
      "Charge the correct gas for your model.",
      "Run and check cooling before the technician leaves.",
    ],
    tips: [
      "Never scrape ice with a knife or sharp tool. It is a common cause of gas leaks.",
      "When moving a fridge, keep it upright and let it stand for a few hours before switching on.",
      "Leave space behind the fridge so the pipes and coils are not pressed against the wall.",
      "Do not let anyone cut or open the gas pipes without proper tools for leak testing and vacuuming.",
    ],
    faq: [
      {
        q: "Does a fridge need gas filling regularly?",
        a: "No. A fridge's gas stays sealed inside and is not used up. If gas is low, there is a leak, and it must be repaired first.",
      },
      {
        q: "How long does fridge gas filling take?",
        a: "Including leak repair, vacuuming and charging, it usually takes 3–4 hours. Hidden leaks inside the body or freezer can take longer.",
      },
      {
        q: "Which gas is used in my fridge?",
        a: "Most newer fridges use R600a and some older ones use R134a. The gas type is printed on the label inside the fridge or at the back.",
      },
      {
        q: "Can fridge gas filling be done at home in Vijayawada?",
        a: "Yes. Our technicians carry the tools for leak repair, vacuuming and charging, so the job is usually done at your home in Vijayawada.",
      },
    ],
    relatedGuides: ["fridge-not-cooling", "fridge-making-noise"],
  },
  {
    slug: "refrigerator-compressor-repair-vijayawada",
    appliance: "fridge",
    kind: "service",
    name: "Refrigerator Compressor Repair",
    title: "Refrigerator Compressor Repair in Vijayawada",
    telugu: "విజయవాడలో ఫ్రిజ్ కంప్రెసర్ రిపేర్",
    metaTitle: "Fridge Compressor Repair in Vijayawada | Relay & Replacement",
    metaDescription:
      "Fridge compressor repair in Vijayawada. Relay, overload, capacitor and full compressor replacement for all brands, tested before any change. Call 7702177588.",
    quickAnswer:
      "Yes, AV Appliance Services repairs refrigerator compressor problems at your home in Vijayawada. We test the relay, overload protector, capacitor and compressor, and replace only the part that has failed. If the compressor itself needs replacing, we fit a suitable one, braze the pipes, vacuum and recharge the gas.",
    intro:
      "The compressor is the pump that moves gas through the fridge. Many times the compressor is fine and only a small starting part, like the relay or overload, has failed. We test before replacing anything, so you do not pay for a compressor you did not need.",
    highlights: [
      { name: "Starting relay", detail: "Replacing a faulty relay when the compressor clicks but will not start." },
      { name: "Overload protector", detail: "Replacing an overload that trips too often or has burnt out." },
      { name: "Capacitor", detail: "Replacing start or run capacitors on models that use them." },
      { name: "Compressor testing", detail: "Checking the windings and starting current to confirm the compressor's condition." },
      { name: "Compressor replacement", detail: "Fitting a matching compressor, brazing the pipes, fitting a new filter drier and recharging gas." },
      { name: "Inverter compressor drive", detail: "Checking the drive board in inverter fridges before replacing the compressor." },
      { name: "Voltage advice", detail: "Advising on a suitable stabiliser if power fluctuations are damaging parts." },
    ],
    problems: [
      "Fridge compressor clicking on and off",
      "Compressor not starting, fridge warm",
      "Compressor running all the time but no cooling",
      "Loud humming or knocking from the compressor",
      "Compressor very hot and fridge stopping",
      "Fridge tripping power when compressor starts",
    ],
    process: [
      "Check power supply, relay, overload and capacitor.",
      "Test the compressor windings and starting current.",
      "Replace the faulty starting part, or confirm the compressor has failed.",
      "For replacement, fit the new compressor and braze the pipes.",
      "Fit a new filter drier, vacuum and recharge the correct gas.",
      "Run the fridge and check cooling and current draw.",
    ],
    tips: [
      "Use a stabiliser suitable for your fridge if your area has frequent voltage swings.",
      "After a power cut, wait a few minutes before the fridge restarts. Do not keep switching it on and off.",
      "Keep the back and bottom of the fridge free of dust so the compressor stays cool.",
      "Do not open the compressor cover or touch the relay yourself. It carries live power.",
    ],
    faq: [
      {
        q: "Why does my fridge compressor keep clicking?",
        a: "A clicking sound every few minutes often means the compressor is trying to start and the overload is cutting it off. The cause can be a bad relay, low voltage or a weak compressor, and a technician should test it.",
      },
      {
        q: "Is it worth replacing a fridge compressor?",
        a: "It depends on the age and condition of the fridge. For a fridge that is otherwise in good shape, replacement is often worth it. We give an honest quote so you can compare with buying a new one.",
      },
      {
        q: "How long does fridge compressor replacement take?",
        a: "It usually takes 3–5 hours, including brazing, vacuuming and gas charging. Getting the matching compressor may need extra time for some models.",
      },
      {
        q: "Is there a warranty on compressor work?",
        a: "Our repair work carries a 90-day service warranty. A new compressor comes with the part maker's warranty where applicable.",
      },
      {
        q: "Can you check my fridge compressor at home in Vijayawada?",
        a: "Yes. We test fridge compressors at homes across Vijayawada, and same-day visits are usually possible. Call or WhatsApp 77021 77588.",
      },
    ],
    relatedGuides: ["fridge-not-cooling", "fridge-making-noise"],
  },
];
