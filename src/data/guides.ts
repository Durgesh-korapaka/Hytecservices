import type { Guide } from "./types";

export const GUIDES: Guide[] = [
  // ───────────────────────────── AC ─────────────────────────────
  {
    slug: "ac-not-cooling",
    appliance: "ac",
    title: "AC Not Cooling? Causes, Quick Checks & Repair in Vijayawada",
    metaTitle: "AC Not Cooling? Causes & Repair in Vijayawada",
    metaDescription:
      "AC running but not cooling? Learn the common causes, safe checks you can do at home, and when to book an AC technician home visit in Vijayawada.",
    quickAnswer:
      "An AC usually stops cooling because of a dirty air filter, a blocked or dusty outdoor unit, low refrigerant gas from a leak, or a weak compressor or fan. First switch it off, clean the indoor filters, check the remote is on Cool mode, and make sure the outdoor unit has open space around it. If the air is still warm after that, a technician needs to check for a gas leak or electrical fault.",
    symptoms: [
      "AC runs for hours but the room never gets cold",
      "Air from the indoor unit feels normal or only slightly cool",
      "Outdoor unit fan is not spinning, or it hums and stops",
      "Ice or frost forms on the indoor coil or the thin copper pipe",
      "AC cools at night but struggles in the afternoon heat",
      "Electricity bill has gone up but cooling has gone down",
    ],
    causes: [
      {
        title: "Dirty air filters",
        detail:
          "The mesh filters behind the front panel collect dust quickly, especially in dusty summer months. A choked filter blocks airflow, so less cool air reaches the room.",
        fix: "diy",
      },
      {
        title: "Wrong mode or temperature setting",
        detail:
          "If the remote is on Fan, Dry or Auto mode, or the temperature is set high, the AC will not cool properly. Low remote batteries can also stop settings from reaching the AC.",
        fix: "diy",
      },
      {
        title: "Dusty or blocked outdoor unit",
        detail:
          "The outdoor unit throws the room's heat outside. If its coil is covered in dust, or it is boxed in by walls, grills or stored items, it cannot release heat and cooling drops.",
        fix: "technician",
      },
      {
        title: "Low refrigerant gas due to a leak",
        detail:
          "AC gas does not get used up; it only reduces when there is a leak in a pipe or joint. The leak must be found and repaired before the gas is refilled.",
        fix: "technician",
      },
      {
        title: "Faulty capacitor or outdoor fan motor",
        detail:
          "The capacitor helps the compressor and fan start. When it weakens, the outdoor unit may hum, trip, or run without cooling.",
        fix: "technician",
      },
      {
        title: "Voltage fluctuation or low voltage",
        detail:
          "Low or unstable voltage, common during peak summer load, can stop the compressor from starting. A working stabilizer of the right rating protects the AC.",
        fix: "technician",
      },
      {
        title: "AC too small for the room",
        detail:
          "A 1-ton AC in a large, sun-facing room or top-floor flat may not keep up when it is 45°C outside. The unit works, but the tonnage is not enough.",
        fix: "technician",
      },
    ],
    diyChecks: [
      "Switch off the AC and the wall switch, then open the front panel and slide out the air filters. Wash them in plain water, let them dry fully in shade, and refit.",
      "Check the remote: set Cool mode, a temperature around 24–26°C, and replace the batteries if the display is faint.",
      "Look at the outdoor unit from a safe spot. Make sure nothing is blocking it and the fan spins when the AC is on.",
      "Close doors and windows and draw curtains on sun-facing windows while the AC runs.",
      "If you use a stabilizer, check that its display shows normal output and that it is not showing a delay or cut-off light for a long time.",
    ],
    whenToCall: [
      "Air is still warm after cleaning the filters and fixing settings",
      "Ice forms on the indoor unit or on the copper pipes",
      "The outdoor fan or compressor does not start, or keeps stopping",
      "You hear a hissing sound or see oily marks on pipe joints (possible gas leak)",
      "The AC trips the MCB or makes a burning smell",
    ],
    faq: [
      {
        q: "Why is my AC running but not cooling?",
        a: "The most common reasons are dirty filters, a dusty outdoor unit, or low gas due to a leak. Clean the filters first; if cooling does not improve, a technician should check the gas pressure and outdoor unit.",
      },
      {
        q: "How do I know if my AC needs gas filling?",
        a: "Signs include weak cooling even with clean filters, ice on the thin copper pipe, and the outdoor unit running for a long time without the room cooling. Only a technician can confirm it by measuring gas pressure with a gauge.",
      },
      {
        q: "How much time does AC gas filling take?",
        a: "Refilling gas on a split AC usually takes one to two hours, including leak testing. If a leak needs welding or a part change, it can take longer.",
      },
      {
        q: "Should I run my AC if it is not cooling?",
        a: "It is better to switch it off. Running an AC with low gas or a blocked outdoor unit makes the compressor work harder and can damage it.",
      },
      {
        q: "Do you repair ACs at home in Vijayawada?",
        a: "Yes. Our technicians visit homes across Vijayawada to check and repair split, window and inverter ACs, and same-day visits are usually possible.",
      },
    ],
    related: ["ac-water-leakage", "ac-not-turning-on", "ac-making-noise-or-bad-smell"],
  },
  {
    slug: "ac-water-leakage",
    appliance: "ac",
    title: "AC Leaking Water Inside the Room? Causes and What to Do",
    metaTitle: "AC Water Leakage from Indoor Unit? Causes & Fix",
    metaDescription:
      "Water dripping from your split AC indoor unit? See why it happens, simple safe checks, and when to call a technician for AC leak repair in Vijayawada.",
    quickAnswer:
      "Water drips from the indoor unit when the drain pipe is blocked, the unit is tilted the wrong way, or the drain tray is full of dirt or algae. Dirty filters can also cause ice on the coil that melts and overflows. Switch off the AC, clean the filters and check that the outside drain pipe is not bent or blocked; if water still leaks, a technician should flush the drain line and check the unit level.",
    symptoms: [
      "Water drops falling from the bottom or front of the indoor unit",
      "Wet patches or stains on the wall below the AC",
      "Water spraying out with the air flow",
      "No water coming out of the drain pipe outside, even while the AC is cooling",
      "Leak is worse during humid monsoon days",
    ],
    causes: [
      {
        title: "Blocked drain pipe",
        detail:
          "The AC removes moisture from the air and sends it out through a thin drain pipe. Dust, algae or insects can block this pipe, so water backs up and drips inside.",
        fix: "technician",
      },
      {
        title: "Dirty filters causing ice on the coil",
        detail:
          "When filters are choked, the cooling coil gets too cold and forms ice. When the ice melts, more water comes than the tray can handle.",
        fix: "diy",
      },
      {
        title: "Indoor unit not level",
        detail:
          "The indoor unit should slope slightly towards the drain side. If it was fitted tilted the other way, water collects at the wrong end and overflows.",
        fix: "technician",
      },
      {
        title: "Bent, kinked or raised drain pipe outside",
        detail:
          "If the outside end of the drain pipe is lifted, looped upward, or crushed behind furniture, water cannot flow down freely.",
        fix: "diy",
      },
      {
        title: "Dirty or cracked drain tray",
        detail:
          "Slime and dirt build up in the tray under the coil over time. A cracked tray will leak even when the pipe is clear.",
        fix: "technician",
      },
      {
        title: "Low gas causing coil freezing",
        detail:
          "Low refrigerant can also make the coil freeze and then drip. This usually comes with weaker cooling.",
        fix: "technician",
      },
    ],
    diyChecks: [
      "Switch off the AC and put a towel or bucket under the unit to protect the floor and wall.",
      "Remove and wash the air filters, then let them dry before refitting.",
      "Follow the drain pipe outside and make sure it runs downhill, is not squeezed, and its open end is not sitting in water or mud.",
      "Look at the indoor unit from the front. If one side looks clearly lower than the drain side, note it for the technician.",
      "Run the AC for 15–20 minutes and check whether water is coming out of the drain pipe outside.",
    ],
    whenToCall: [
      "Water keeps dripping inside even after cleaning filters and straightening the pipe",
      "No water comes out of the outside drain pipe at all while cooling",
      "Water is running near the plug point or wiring",
      "Ice is visible on the indoor coil or copper pipes",
    ],
    faq: [
      {
        q: "Why is water coming from my split AC indoor unit?",
        a: "Most often the drain pipe is blocked or the filters are dirty. Both stop the collected moisture from draining outside, so it drips from the indoor unit instead.",
      },
      {
        q: "Is it normal for water to drip from the AC outdoor unit?",
        a: "Yes, some water from the drain pipe or outdoor unit is normal, especially in humid weather. It only becomes a problem when water leaks inside the room.",
      },
      {
        q: "Is AC water leakage dangerous?",
        a: "The water itself is not harmful, but it can damage walls, and it becomes unsafe if it reaches the socket or wiring. Switch off the AC and keep the area dry until it is fixed.",
      },
      {
        q: "Can AC service stop water leakage?",
        a: "In many cases, yes. A proper service cleans the coil, drain tray and drain pipe, which removes the blockage causing the leak.",
      },
      {
        q: "Can you fix AC water leakage at home in Vijayawada?",
        a: "Yes, our technicians clear drain lines, clean trays and correct unit levelling at your home in Vijayawada. Same-day visits are usually possible.",
      },
    ],
    related: ["ac-not-cooling", "ac-making-noise-or-bad-smell"],
  },
  {
    slug: "ac-not-turning-on",
    appliance: "ac",
    title: "AC Not Turning On? Simple Checks Before You Call a Technician",
    metaTitle: "AC Not Turning On? Checks & Repair in Vijayawada",
    metaDescription:
      "AC not starting or not responding to the remote? Try these safe checks for power, remote and stabilizer, then book AC repair at home in Vijayawada.",
    quickAnswer:
      "An AC that will not turn on usually has a power problem: a switched-off socket, a tripped MCB, a stabilizer in delay or cut-off mode, or dead remote batteries. Check these first. If the AC gets power but still does not start, or keeps blinking a light, the fault is likely in the PCB, sensors or wiring and needs a technician.",
    symptoms: [
      "No display, light or beep when you press the remote",
      "Indoor unit lights come on but the AC does not start",
      "AC starts for a few seconds and then shuts off",
      "A light on the indoor unit keeps blinking",
      "MCB trips as soon as the AC is switched on",
    ],
    causes: [
      {
        title: "Remote batteries or remote fault",
        detail:
          "Weak batteries are the most common reason the AC does not respond. The remote display may still show but the signal is too weak.",
        fix: "diy",
      },
      {
        title: "Power supply off or MCB tripped",
        detail:
          "The wall switch, plug, or the AC's dedicated MCB in the main board may be off. A power cut in one phase can also affect only the AC line.",
        fix: "diy",
      },
      {
        title: "Stabilizer in delay or cut-off",
        detail:
          "Stabilizers wait a few minutes after power returns before giving supply. They also cut off when voltage is too high or too low.",
        fix: "diy",
      },
      {
        title: "Loose or burnt wiring",
        detail:
          "Heat and voltage spikes can loosen or burn wires at the plug, stabilizer or terminal block. This needs safe inspection by a technician.",
        fix: "technician",
      },
      {
        title: "Faulty PCB (control board)",
        detail:
          "The PCB is the AC's control circuit. Power surges and lightning can damage it, and then the AC will not respond or will show a blinking error light.",
        fix: "technician",
      },
      {
        title: "Sensor or safety protection fault",
        detail:
          "ACs have temperature sensors and safety cut-offs. If a sensor fails, the AC may refuse to start or stop soon after starting.",
        fix: "technician",
      },
    ],
    diyChecks: [
      "Replace the remote batteries and point the remote directly at the indoor unit from a short distance.",
      "Make sure the wall switch is on and the plug is fully pushed in. Do not touch the plug with wet hands.",
      "Check the main board and see whether the AC's MCB has tripped. Switch it back on once; if it trips again, leave it off.",
      "If you use a stabilizer, wait 3–5 minutes after power comes back, and check its display for high or low voltage.",
      "If your AC has a manual or emergency button on the indoor unit, press it once to see if the unit starts.",
    ],
    whenToCall: [
      "The MCB trips again after you switch it back on",
      "You notice a burning smell, melted plug or black marks on the socket",
      "The indoor unit shows a blinking light or error code",
      "The AC starts and stops again within a few minutes",
      "There is power at the socket but the AC shows no response at all",
    ],
    faq: [
      {
        q: "Why is my AC not turning on with the remote?",
        a: "Start with new batteries in the remote. If the AC still does not respond, check the power switch, MCB and stabilizer; if all are fine, the indoor unit's receiver or control board may need checking.",
      },
      {
        q: "Why does my AC turn on and then turn off by itself?",
        a: "This can be caused by low voltage, a stabilizer cutting off, a timer or sleep setting, or a sensor or compressor protection fault. If settings are correct and it keeps happening, get it checked.",
      },
      {
        q: "Do I need a stabilizer for an inverter AC?",
        a: "Many inverter ACs handle a wider voltage range, but areas with frequent fluctuations still benefit from a suitable stabilizer. Check your AC's manual for its supported voltage range.",
      },
      {
        q: "Can a power cut or lightning damage my AC?",
        a: "Yes, sudden surges when power returns or during storms can damage the PCB. Switching off the AC at the wall during storms and using a stabilizer reduces this risk.",
      },
    ],
    related: ["ac-not-cooling", "ac-making-noise-or-bad-smell"],
  },
  {
    slug: "ac-making-noise-or-bad-smell",
    appliance: "ac",
    title: "AC Making Noise or Giving a Bad Smell? What It Means",
    metaTitle: "AC Making Noise or Bad Smell? Causes & Fixes",
    metaDescription:
      "Strange AC noise or a musty, burning smell from your AC? Understand what each sign means, what you can check safely, and when to get an AC technician.",
    quickAnswer:
      "A musty smell from an AC usually comes from dirty filters, a damp coil or a drain tray with mould, and a proper cleaning service fixes it. Rattling, grinding or loud buzzing points to loose parts, a worn fan motor or a failing compressor part. A burning smell is serious: switch off the AC at the wall straight away and call a technician.",
    symptoms: [
      "Musty, damp or \"wet socks\" smell when the AC starts",
      "Burning or plastic smell from the indoor unit",
      "Rattling or vibrating sound from the outdoor unit",
      "Clicking, squealing or grinding noise from the fan",
      "Loud buzzing or humming while the compressor tries to start",
      "Hissing or gurgling sound near the pipes",
    ],
    causes: [
      {
        title: "Dirty filters and damp coil (musty smell)",
        detail:
          "Dust and moisture on the filters and coil allow mould and bacteria to grow. The smell is strongest when the AC is first switched on, especially in the monsoon.",
        fix: "diy",
      },
      {
        title: "Blocked drain tray with standing water",
        detail:
          "Water that does not drain sits in the tray and starts to smell. It needs proper cleaning of the tray and drain pipe.",
        fix: "technician",
      },
      {
        title: "Loose panels, screws or mounting",
        detail:
          "Vibration over time loosens screws, stands and covers, causing rattling. The outdoor unit stand may also need tightening or rubber pads.",
        fix: "technician",
      },
      {
        title: "Worn fan motor or damaged blower",
        detail:
          "A dry fan motor bearing squeals or grinds. A cracked or dirty blower wheel can make a thumping sound as it spins.",
        fix: "technician",
      },
      {
        title: "Electrical fault (burning smell)",
        detail:
          "A burning smell can come from overheated wiring, a failing capacitor, or a damaged motor. It can be a fire risk and should never be ignored.",
        fix: "technician",
      },
      {
        title: "Refrigerant leak (hissing sound)",
        detail:
          "A continuous hissing near the pipes may be gas escaping from a leak. Cooling usually drops at the same time.",
        fix: "technician",
      },
      {
        title: "Debris in the outdoor unit",
        detail:
          "Leaves, plastic covers or bird nests inside the outdoor unit can hit the fan blades and make a loud noise.",
        fix: "technician",
      },
    ],
    diyChecks: [
      "If you smell burning, switch off the AC and the wall switch immediately and do not restart it.",
      "For a musty smell, switch off the AC, wash the filters with water, and dry them fully before refitting.",
      "After using the AC, run it in Fan mode for 10–15 minutes before switching off to help dry the coil (if your model has this mode).",
      "Check around the outdoor unit for loose items, plastic sheets or leaves near the fan, and remove them only from the outside without opening any cover.",
      "Note when the noise happens (at start-up, all the time, only outdoor unit) to tell the technician.",
    ],
    whenToCall: [
      "Any burning, electrical or plastic smell",
      "Grinding, screeching or loud banging noises",
      "Musty smell that stays even after cleaning the filters",
      "Hissing sound together with poor cooling",
      "The outdoor unit shakes or vibrates heavily",
    ],
    faq: [
      {
        q: "Why does my AC smell bad when I turn it on?",
        a: "Usually because of mould or dirt on the filters, coil or drain tray. Cleaning the filters helps, and a full service with coil and tray cleaning removes the smell properly.",
      },
      {
        q: "Is a burning smell from the AC dangerous?",
        a: "It can be. Switch off the AC at the wall and get it inspected, because it may be overheating wiring or a failing electrical part.",
      },
      {
        q: "Why is my AC outdoor unit making a loud noise?",
        a: "Common causes are loose screws or mounting, debris hitting the fan, a worn fan motor, or the compressor struggling to start. A technician can find which part is causing it.",
      },
      {
        q: "Is some noise from an AC normal?",
        a: "A soft hum, air sound and occasional clicks when it starts or stops are normal. Rattling, grinding, screeching or loud banging are not.",
      },
    ],
    related: ["ac-water-leakage", "ac-not-cooling", "ac-not-turning-on"],
  },

  // ─────────────────────────── FRIDGE ───────────────────────────
  {
    slug: "fridge-not-cooling",
    appliance: "fridge",
    title: "Fridge Not Cooling? Causes, Checks & Repair in Vijayawada",
    metaTitle: "Fridge Not Cooling? Causes & Repair in Vijayawada",
    metaDescription:
      "Refrigerator not cooling but the light is on? Find the common causes, safe home checks, and get fridge repair at your doorstep in Vijayawada today.",
    quickAnswer:
      "A fridge that is not cooling usually has a temperature knob set too low, a door that does not seal, a dusty back coil with no space for air, or a problem with the compressor, fan, thermostat or gas. Check the setting, door gasket and space around the fridge first. If the light works but the compressor stays silent or the fridge stays warm for several hours, call a technician.",
    symptoms: [
      "Fridge light is on but food is not cold",
      "Freezer is cold but the lower fridge section is warm",
      "Milk and vegetables spoil faster than usual",
      "Compressor at the back is silent, or runs all the time",
      "Outer sides of the fridge feel unusually hot",
    ],
    causes: [
      {
        title: "Wrong temperature setting",
        detail:
          "The knob or display may have been turned to a low cooling level by mistake. After a change, give it a few hours to settle.",
        fix: "diy",
      },
      {
        title: "Door not closing or worn gasket",
        detail:
          "If the rubber seal around the door is loose, torn or dirty, warm air keeps entering. Overfilled shelves can also stop the door from shutting fully.",
        fix: "diy",
      },
      {
        title: "No space for heat to escape",
        detail:
          "A fridge releases heat from its back and sides. Pushed tight against a wall, or placed near a stove or in direct sun, it struggles to cool.",
        fix: "diy",
      },
      {
        title: "Blocked air vents or too much ice (frost-free)",
        detail:
          "In frost-free fridges, cold air flows from the freezer to the fridge through vents. If vents are blocked by food or ice, the lower section warms up.",
        fix: "technician",
      },
      {
        title: "Faulty thermostat, sensor or fan",
        detail:
          "The thermostat or sensor tells the compressor when to run. The fan moves cold air around in frost-free models. If either fails, cooling stops or becomes uneven.",
        fix: "technician",
      },
      {
        title: "Compressor or relay problem",
        detail:
          "The compressor is the heart of the cooling system. A failing relay or overload protector can stop it from starting, often after voltage fluctuations.",
        fix: "technician",
      },
      {
        title: "Gas leak",
        detail:
          "If refrigerant leaks from a pipe, the compressor runs but nothing cools. The leak must be located and repaired before gas is recharged.",
        fix: "technician",
      },
    ],
    diyChecks: [
      "Check the temperature knob or display and set it to a middle or recommended level. Wait 4–6 hours before judging.",
      "Close the door on a thin paper strip; if the paper slides out easily, the seal may be weak. Wipe the gasket clean with a damp cloth.",
      "Pull the fridge a few inches away from the wall so there is air space at the back and sides.",
      "Do not overpack shelves, and keep food away from the vents at the back of the fridge section.",
      "If a stabilizer is used, check it is switched on and giving output. Unplug for 5 minutes and plug back in once.",
    ],
    whenToCall: [
      "Fridge is still warm 6–8 hours after correcting settings and placement",
      "Compressor makes a click every few minutes but does not run",
      "Freezer is cold but the fridge section stays warm (frost-free models)",
      "Compressor runs non-stop yet nothing cools",
      "You notice a burning smell or the socket gets hot",
    ],
    faq: [
      {
        q: "Why is my fridge light on but not cooling?",
        a: "The light only shows that power is reaching the fridge. The cooling parts — thermostat, relay, compressor, fan or gas — may still have a fault, so a technician should check it if basic checks do not help.",
      },
      {
        q: "How long does a fridge take to cool after switching on?",
        a: "Most fridges take a few hours to reach normal temperature, and the freezer may take longer. Avoid loading a lot of warm food during this time.",
      },
      {
        q: "Why is my freezer cold but the fridge warm?",
        a: "In frost-free fridges this often means the air vent between the freezer and fridge is blocked by ice, or the fan or defrost system has a fault.",
      },
      {
        q: "Is it worth repairing an old fridge that is not cooling?",
        a: "It depends on the fault. Problems like a relay, thermostat or gasket are usually worth fixing, while a compressor change on a very old fridge may not be. A technician can explain the options after checking.",
      },
      {
        q: "Do you repair fridges at home in Vijayawada?",
        a: "Yes, we repair single-door, double-door, frost-free and side-by-side fridges at homes in Vijayawada, and same-day visits are usually possible.",
      },
    ],
    related: ["fridge-ice-buildup", "fridge-making-noise", "fridge-water-leakage"],
  },
  {
    slug: "fridge-ice-buildup",
    appliance: "fridge",
    title: "Too Much Ice in Your Fridge or Freezer? Causes and Fixes",
    metaTitle: "Ice Buildup in Fridge or Freezer? Causes & Fix",
    metaDescription:
      "Thick ice forming in your freezer or frost-free fridge? Learn why it happens, how to defrost safely, and when to get fridge repair in Vijayawada.",
    quickAnswer:
      "Heavy ice in a direct-cool fridge is normal over time and needs manual defrosting, but it builds faster if the door is opened often or the gasket is weak. In a frost-free fridge, ice should not build up at all, so thick ice usually means the automatic defrost heater, sensor or timer has failed. Defrost it by switching it off and letting the ice melt naturally; if ice returns within days in a frost-free model, call a technician.",
    symptoms: [
      "Thick layer of ice on the freezer walls or freezer box",
      "Freezer door does not close properly because of ice",
      "Frost or ice on the back wall of the fridge section",
      "Frost-free fridge showing ice, with the lower section getting warm",
      "Water dripping after ice melts",
    ],
    causes: [
      {
        title: "Normal frosting in a direct-cool fridge",
        detail:
          "Direct-cool (usually single-door) fridges do not defrost themselves. Ice slowly builds up and must be removed by defrosting every few weeks.",
        fix: "diy",
      },
      {
        title: "Door left open or not sealing",
        detail:
          "Each time warm, humid air enters, its moisture freezes inside. A torn or loose gasket lets humid air in all the time, which is worse in monsoon.",
        fix: "diy",
      },
      {
        title: "Temperature set too cold",
        detail:
          "Running a fridge at its coldest setting all the time can increase frosting, especially in direct-cool models.",
        fix: "diy",
      },
      {
        title: "Defrost heater, sensor or timer fault (frost-free)",
        detail:
          "Frost-free fridges melt ice automatically using a heater controlled by a timer or board. If any of these fail, ice keeps building on the coil and blocks airflow.",
        fix: "technician",
      },
      {
        title: "Blocked defrost drain",
        detail:
          "Melted ice should flow out through a small drain. If it is blocked, water refreezes inside the freezer.",
        fix: "technician",
      },
    ],
    diyChecks: [
      "To defrost, switch off and unplug the fridge, move food to a cool box, and leave the doors open with towels below to catch water.",
      "Let the ice melt on its own. Never chip ice with a knife or sharp object — it can puncture the gas lines.",
      "Wipe the door gasket and check for cuts or gaps; close the door on a paper strip to test grip.",
      "Set the temperature to a middle level instead of the coldest.",
      "Avoid keeping the door open for long and cover liquids and hot food before storing.",
    ],
    whenToCall: [
      "A frost-free fridge is forming thick ice",
      "Ice comes back within a few days of defrosting",
      "The fridge section gets warm while the freezer is full of ice",
      "The door gasket is torn or does not grip",
    ],
    faq: [
      {
        q: "Why is ice forming in my frost-free fridge?",
        a: "A frost-free fridge should not collect ice. Ice build-up usually means a fault in the defrost heater, sensor, timer or drain, which a technician can test and replace.",
      },
      {
        q: "How often should I defrost a single-door fridge?",
        a: "Defrost it when the ice layer becomes thick, roughly a few millimetres or more. Many homes do it every few weeks, depending on use and humidity.",
      },
      {
        q: "Can I use a knife to remove ice from the freezer?",
        a: "No. Sharp tools can pierce the thin gas pipes inside the freezer walls and cause a gas leak. Always let the ice melt naturally.",
      },
      {
        q: "Does ice buildup affect cooling?",
        a: "Yes. Thick ice acts like insulation and blocks airflow, so the fridge uses more power and the food section may not cool properly.",
      },
    ],
    related: ["fridge-not-cooling", "fridge-water-leakage"],
  },
  {
    slug: "fridge-water-leakage",
    appliance: "fridge",
    title: "Fridge Leaking Water? Why It Happens and How to Fix It",
    metaTitle: "Fridge Leaking Water Inside or on Floor? Fixes",
    metaDescription:
      "Water inside your fridge or pooling on the floor? See the common causes, easy safe checks, and when to book a fridge repair visit in Vijayawada.",
    quickAnswer:
      "Water inside or under a fridge usually comes from a blocked defrost drain, an overflowing or cracked drip tray at the bottom, a fridge that is not standing level, or ice melting after a power cut. Clean the drain hole inside the fridge section, make sure the fridge stands level, and check the drip tray. If water keeps collecting, a technician should clear the drain line or check the defrost system.",
    symptoms: [
      "Water collecting at the bottom of the fridge section, under the vegetable box",
      "Puddle of water on the floor in front of or under the fridge",
      "Water drops running down the back wall inside",
      "Ice at the bottom of the freezer",
      "Wet floor after a power cut",
    ],
    causes: [
      {
        title: "Blocked defrost drain hole",
        detail:
          "Many fridges have a small drain hole at the back wall of the fridge section. Food bits and dirt can block it, so water pools inside instead of flowing out.",
        fix: "technician",
      },
      {
        title: "Drip tray overflowing or cracked",
        detail:
          "Melted water drains into a tray near the compressor, where it normally evaporates. A cracked or misplaced tray lets water reach the floor.",
        fix: "technician",
      },
      {
        title: "Fridge not level",
        detail:
          "If the fridge leans forward, water may flow to the front instead of the drain. It can also stop the door from closing by itself.",
        fix: "diy",
      },
      {
        title: "Door gasket not sealing",
        detail:
          "Humid air entering through a weak seal turns into extra water and frost, which then melts and leaks.",
        fix: "diy",
      },
      {
        title: "Ice melting after power cut or defrost",
        detail:
          "Long power cuts or manual defrosting release a lot of water at once. This is normal but the water must be wiped up.",
        fix: "diy",
      },
      {
        title: "Water dispenser or inlet line leak",
        detail:
          "Fridges with a water dispenser or ice maker have pipes and valves that can crack or loosen over time.",
        fix: "technician",
      },
    ],
    diyChecks: [
      "Switch off and unplug the fridge before cleaning inside or checking underneath.",
      "Look for the small drain hole at the back of the fridge section and gently clean around it with a cotton bud or soft cloth. Do not push sharp objects into it.",
      "Check that the fridge stands level and is not rocking; adjust the front feet if your model has them.",
      "Wipe the door gasket and make sure the door closes fully on its own.",
      "Keep dishes covered and let hot food cool before storing, to reduce moisture.",
    ],
    whenToCall: [
      "Water keeps pooling inside after cleaning the drain hole",
      "Water spreads on the floor from underneath the fridge",
      "Water is near the plug, socket or compressor area",
      "Ice is building up in the freezer along with the leak",
    ],
    faq: [
      {
        q: "Why is water collecting under the vegetable tray in my fridge?",
        a: "This usually means the defrost drain at the back of the fridge section is blocked. Once it is cleared, the water can flow out to the drip tray again.",
      },
      {
        q: "Is it safe to use a fridge that is leaking water?",
        a: "Short term it is usually fine if the water is away from the plug and wiring. If water reaches the socket or compressor area, unplug the fridge and get it checked.",
      },
      {
        q: "Is it normal to have water at the back of the fridge?",
        a: "A few drops on the inner back wall of a direct-cool fridge can be normal as frost melts. Pools of water or constant dripping are not.",
      },
      {
        q: "Can a fridge leak water after a power cut?",
        a: "Yes, ice in the freezer melts during long power cuts. Wipe it up and check the drip tray; if leaking continues after power returns, look for a drain problem.",
      },
      {
        q: "Can you fix fridge water leakage at home in Vijayawada?",
        a: "Yes, our technicians clear drain lines, fix trays and check the defrost system at your home in Vijayawada. Same-day visits are usually possible.",
      },
    ],
    related: ["fridge-ice-buildup", "fridge-not-cooling"],
  },
  {
    slug: "fridge-making-noise",
    appliance: "fridge",
    title: "Fridge Making Noise? Which Sounds Are Normal and Which Are Not",
    metaTitle: "Fridge Making Loud Noise? Causes & What to Do",
    metaDescription:
      "Is your fridge buzzing, clicking, rattling or grinding? Learn which sounds are normal, safe checks to try, and when to get fridge repair in Vijayawada.",
    quickAnswer:
      "Soft humming, gurgling and occasional cracking sounds are normal in a working fridge. Loud rattling usually means it is not level or something is touching the back, while grinding or squealing points to a worn fan motor. Repeated clicking without cooling, or very loud buzzing from the compressor, needs a technician.",
    symptoms: [
      "Loud buzzing or humming from the back",
      "Rattling or vibrating sound, especially when the compressor starts",
      "Clicking every few minutes while the fridge stays warm",
      "Grinding, squealing or fan-scraping noise from the freezer",
      "Knocking sound when the compressor starts or stops",
    ],
    causes: [
      {
        title: "Fridge not level or touching the wall",
        detail:
          "An uneven floor or a fridge pushed against a wall or cupboard makes vibrations louder. Items kept on top can also rattle.",
        fix: "diy",
      },
      {
        title: "Loose items or drip tray",
        detail:
          "Bottles and shelves inside, or a loose drip tray at the bottom, can rattle each time the compressor runs.",
        fix: "diy",
      },
      {
        title: "Fan hitting ice or wearing out",
        detail:
          "In frost-free fridges, ice build-up can touch the freezer fan blades. A dry or worn fan motor can squeal or grind.",
        fix: "technician",
      },
      {
        title: "Dusty condenser fan (some models)",
        detail:
          "Some fridges have a small fan near the compressor. Dust and dirt on it can cause a whirring or scraping sound.",
        fix: "technician",
      },
      {
        title: "Relay clicking without starting",
        detail:
          "If you hear a click every few minutes but the compressor does not run, the relay, overload or compressor may be faulty.",
        fix: "technician",
      },
      {
        title: "Compressor wear",
        detail:
          "An old or failing compressor can knock, buzz loudly, or vibrate heavily. This usually comes with weak cooling.",
        fix: "technician",
      },
    ],
    diyChecks: [
      "Move the fridge slightly away from the wall and cupboards so it is not touching anything.",
      "Check that it stands level and does not rock; adjust the feet if possible.",
      "Remove items from the top of the fridge and rearrange bottles inside so they are not touching each other.",
      "Unplug the fridge and listen after plugging back in — note whether the noise comes from the back, the freezer, or below.",
      "If ice has built up in the freezer, defrost it by switching off and letting it melt naturally.",
    ],
    whenToCall: [
      "Clicking every few minutes and the fridge is not cooling",
      "Grinding or squealing from the freezer fan",
      "Loud buzzing or knocking from the compressor",
      "Noise started along with a burning smell or hot socket",
    ],
    faq: [
      {
        q: "Is it normal for a fridge to make noise?",
        a: "Yes, a low hum from the compressor, gurgling from the gas flowing and small cracks as parts cool are normal. Loud, harsh or new noises are worth checking.",
      },
      {
        q: "Why is my fridge making a clicking sound?",
        a: "A single click when the compressor starts or stops is normal. Repeated clicks every few minutes with no cooling usually mean a relay, overload or compressor fault.",
      },
      {
        q: "Why is my fridge buzzing loudly?",
        a: "It may be vibrating against a wall or uneven floor, or the compressor may be struggling, sometimes due to low voltage. If moving and levelling it does not help, get it checked.",
      },
      {
        q: "Can low voltage make a fridge noisy?",
        a: "Yes, low voltage can make the compressor struggle to start and hum loudly. A suitable stabilizer helps in areas with frequent voltage drops.",
      },
    ],
    related: ["fridge-not-cooling", "fridge-ice-buildup"],
  },

  // ─────────────────────── WASHING MACHINE ───────────────────────
  {
    slug: "washing-machine-not-spinning",
    appliance: "washer",
    title: "Washing Machine Not Spinning? Causes, Checks & Repair in Vijayawada",
    metaTitle: "Washing Machine Not Spinning? Fix in Vijayawada",
    metaDescription:
      "Clothes still wet because your washing machine will not spin? See the common causes, safe checks for top and front load, and book repair in Vijayawada.",
    quickAnswer:
      "A washing machine usually stops spinning because the load is uneven or too heavy, the water has not drained out, or the lid or door lock is not engaged. Rearrange the clothes, clean the drain filter, check the drain hose, and run a spin-only cycle. If the drum still does not turn, the belt, motor, lid switch or control board needs a technician.",
    symptoms: [
      "Clothes come out dripping wet after the cycle ends",
      "Drum does not turn during the spin stage",
      "Machine tries to spin, stops, and starts again many times",
      "Spin works for a small load but not a full load",
      "Humming sound but the drum stays still",
      "Semi-automatic spin tub does not rotate",
    ],
    causes: [
      {
        title: "Unbalanced or overloaded drum",
        detail:
          "Heavy items like bedsheets, jeans or blankets can bunch on one side. The machine senses this and stops spin to protect itself.",
        fix: "diy",
      },
      {
        title: "Water not draining",
        detail:
          "Most machines will not spin while water is still in the drum. A blocked drain filter or kinked drain hose is often the real cause.",
        fix: "diy",
      },
      {
        title: "Lid or door not locked",
        detail:
          "For safety, the machine only spins when the lid or door is fully closed. A broken latch or lock stops the spin.",
        fix: "diy",
      },
      {
        title: "Worn or broken belt",
        detail:
          "Many top-load and semi-automatic machines use a belt to turn the drum. A loose or broken belt means the motor runs but the drum does not.",
        fix: "technician",
      },
      {
        title: "Motor, capacitor or clutch fault",
        detail:
          "If the motor or the parts that send its power to the drum are weak, the drum may hum but not turn at spin speed.",
        fix: "technician",
      },
      {
        title: "Lid switch or door lock fault",
        detail:
          "Even with the lid closed, a faulty switch or lock can tell the machine it is open, so spin never starts.",
        fix: "technician",
      },
      {
        title: "Control board or sensor fault",
        detail:
          "The PCB controls every stage of the cycle. A fault here, sometimes after voltage fluctuations, can skip or stop the spin stage.",
        fix: "technician",
      },
    ],
    diyChecks: [
      "Pause the machine, open the lid or door once it unlocks, and spread the clothes evenly around the drum. Remove one or two heavy items if the drum is packed.",
      "Switch off and unplug the machine, then clean the drain filter (usually behind a small flap at the bottom front of front-load machines) with a towel and bowl ready for water.",
      "Check the drain hose is not bent, crushed, or pushed too deep into the drain pipe.",
      "Make sure the lid or door is fully closed and you hear it click or lock.",
      "Check that the machine stands level on the floor, then run a rinse-and-spin or spin-only cycle.",
    ],
    whenToCall: [
      "Drum does not turn even with a small, balanced load",
      "Motor hums but the drum does not move",
      "You see a broken belt, smell burning rubber, or hear grinding",
      "An error code keeps showing about the lid, door or drain",
      "Water drains but the spin still does not start",
    ],
    faq: [
      {
        q: "Why is my washing machine not spinning but water is draining?",
        a: "If water drains but the drum will not spin, look at the load balance and lid lock first. If those are fine, a belt, motor, lid switch or board fault is likely.",
      },
      {
        q: "Why are my clothes still wet after washing?",
        a: "The spin stage did not run fully, often because of an uneven load or poor draining. Try a separate spin cycle with the clothes spread out.",
      },
      {
        q: "Can overloading stop a washing machine from spinning?",
        a: "Yes. When the drum is overloaded or clothes are bunched to one side, the machine detects imbalance and reduces or cancels the spin.",
      },
      {
        q: "Why is my semi-automatic washing machine spin tub not working?",
        a: "Check the spin lid is fully closed and clothes are pressed down evenly under the safety cap. If the tub still does not turn, the spin motor, capacitor, brake or lid switch may need repair.",
      },
      {
        q: "Do you repair washing machines at home in Vijayawada?",
        a: "Yes, we repair top-load, front-load and semi-automatic washing machines at homes in Vijayawada, and same-day visits are usually possible.",
      },
    ],
    related: ["washing-machine-not-draining", "washing-machine-drum-noise", "washing-machine-not-starting"],
  },
  {
    slug: "washing-machine-not-draining",
    appliance: "washer",
    title: "Washing Machine Not Draining Water? Causes and Safe Fixes",
    metaTitle: "Washing Machine Not Draining? Causes & Quick Fix",
    metaDescription:
      "Water stuck in your washing machine drum? Learn how to clean the drain filter, check the hose, and when to call for washing machine repair in Vijayawada.",
    quickAnswer:
      "A washing machine that will not drain usually has a blocked drain filter, a kinked or clogged drain hose, or a drain pump blocked by coins, hair clips or lint. Switch off and unplug the machine, clean the drain filter, and check the hose. If the water still stays in the drum, the drain pump or its control needs a technician.",
    symptoms: [
      "Water remains in the drum after the cycle ends",
      "Machine stops in the middle of the wash or rinse",
      "Very slow draining with a gurgling sound",
      "Pump humming but no water going out",
      "Door stays locked on a front-load machine because water is inside",
    ],
    causes: [
      {
        title: "Blocked drain filter",
        detail:
          "The drain filter catches coins, buttons, hair and lint. In hard-water areas, detergent residue also collects here. When it is full, water cannot leave the drum.",
        fix: "diy",
      },
      {
        title: "Kinked or blocked drain hose",
        detail:
          "The hose can get bent behind the machine or blocked by lint. If it is pushed too far into the floor drain, it can also cause problems.",
        fix: "diy",
      },
      {
        title: "Blocked floor drain or outlet",
        detail:
          "Sometimes the machine is fine but the bathroom or balcony drain is clogged, so water backs up.",
        fix: "diy",
      },
      {
        title: "Drain pump fault",
        detail:
          "The pump pushes water out in automatic machines. Small objects can jam it, or its motor can burn out.",
        fix: "technician",
      },
      {
        title: "Drain valve or motor fault (semi-automatic)",
        detail:
          "Semi-automatic and some top-load machines use a drain valve or drain motor. If it sticks or fails, water stays in the tub.",
        fix: "technician",
      },
      {
        title: "Control board or pressure sensor fault",
        detail:
          "The machine uses a sensor to know the water level. If it misreads, the machine may not start draining.",
        fix: "technician",
      },
    ],
    diyChecks: [
      "Switch off and unplug the machine before doing anything else.",
      "Keep towels and a low tray ready, then open the drain filter cover and slowly unscrew the filter to let water out. Remove lint, coins or hair and rinse the filter.",
      "Check the drain hose along its full length for bends, and make sure it is not pushed too deep into the outlet.",
      "Pour a mug of water into the floor drain to see if the drain itself is blocked.",
      "Refit the filter tightly, plug in, and run a drain or spin-only cycle.",
    ],
    whenToCall: [
      "Water still does not drain after cleaning the filter and hose",
      "You hear the pump humming but no water comes out",
      "The filter will not open or is stuck",
      "The machine shows a drain error again and again",
    ],
    faq: [
      {
        q: "How do I drain water from my washing machine manually?",
        a: "Switch off and unplug it, place towels and a low tray near the drain filter, and slowly open the filter to let water out. Some machines have a small emergency drain tube next to the filter for this.",
      },
      {
        q: "Where is the drain filter in a washing machine?",
        a: "In most front-load machines it is behind a small flap at the bottom front. Many top-load machines have a lint filter inside the drum instead; check your user manual for the exact location.",
      },
      {
        q: "How often should I clean the washing machine drain filter?",
        a: "Checking it every month or two is a good habit, and more often if you wash many clothes or have pets or hard water.",
      },
      {
        q: "Why is my front load washing machine door locked with water inside?",
        a: "The door stays locked for safety while water is in the drum. Once the water is drained, the lock releases after a short wait.",
      },
    ],
    related: ["washing-machine-not-spinning", "washing-machine-water-leakage"],
  },
  {
    slug: "washing-machine-drum-noise",
    appliance: "washer",
    title: "Washing Machine Drum Making Noise? Banging, Grinding & Squeaking Explained",
    metaTitle: "Washing Machine Drum Noise? Causes & Repair",
    metaDescription:
      "Loud banging, grinding or rattling from your washing machine drum? Understand the causes, safe checks, and book washing machine repair in Vijayawada.",
    quickAnswer:
      "Loud banging during spin usually means an uneven load or a machine that is not level, while rattling often comes from coins or clips stuck between the drum and tub. A grinding or roaring sound that gets louder with spin speed usually means worn drum bearings, which need a technician. Stop the machine, spread the clothes out, level it, and check pockets before the next wash.",
    symptoms: [
      "Loud banging or thumping during spin",
      "Machine shakes or moves across the floor",
      "Rattling or metal clinking as the drum turns",
      "Grinding or roaring sound that gets louder at high spin",
      "Squeaking or squealing when the drum turns",
      "Drum feels loose or wobbly when moved by hand (with power off)",
    ],
    causes: [
      {
        title: "Uneven load",
        detail:
          "A single heavy item or clothes bunched on one side throws the drum off balance during spin, causing banging and shaking.",
        fix: "diy",
      },
      {
        title: "Machine not level",
        detail:
          "If one foot is higher than the others or the floor is uneven, the machine rocks and vibrates. Wet bathroom floors can also let it slide.",
        fix: "diy",
      },
      {
        title: "Transit bolts not removed (new front-load)",
        detail:
          "New front-load machines come with bolts at the back to lock the drum during transport. If they were not removed at installation, the machine will shake violently.",
        fix: "technician",
      },
      {
        title: "Coins or small objects in the drum",
        detail:
          "Coins, hairpins, bra wires and keys can slip between the drum and outer tub or into the pump, causing rattling and scratching sounds.",
        fix: "technician",
      },
      {
        title: "Worn drum bearings",
        detail:
          "Bearings let the drum spin smoothly. Water or age can wear them, which causes a loud grinding or roaring sound during spin.",
        fix: "technician",
      },
      {
        title: "Weak suspension or shock absorbers",
        detail:
          "Springs and dampers hold the tub steady. When they wear out, the tub knocks against the body of the machine.",
        fix: "technician",
      },
      {
        title: "Loose or worn belt or pulley",
        detail:
          "In belt-driven machines, a worn belt or loose pulley can squeal or thump as the drum turns.",
        fix: "technician",
      },
    ],
    diyChecks: [
      "Stop the machine, wait for the door to unlock, and spread clothes evenly. Wash very heavy items with a few smaller ones to balance the load.",
      "Check the machine stands firm on all four feet; adjust the feet or place it on a flat, dry surface.",
      "Always empty pockets and use a wash bag for small items and innerwear with wires.",
      "Switch off and unplug the machine, then turn the drum slowly by hand and listen for scraping or feel for roughness.",
      "Clean the drain filter (with power off) — coins and clips often end up there.",
    ],
    whenToCall: [
      "Grinding or roaring noise during spin, even with a small load",
      "The drum feels loose or wobbles a lot when turned by hand",
      "You can hear metal scraping between the drum and the tub",
      "Heavy shaking continues after balancing the load and levelling the machine",
      "Water or rust marks appear under a front-load machine along with the noise",
    ],
    faq: [
      {
        q: "Why is my washing machine making a loud noise during spin?",
        a: "The most common reasons are an uneven load or the machine not being level. If the noise is a grinding or roaring sound, worn drum bearings are a likely cause.",
      },
      {
        q: "Is it safe to use a washing machine with a noisy drum?",
        a: "Occasional banging from an uneven load is not harmful once you rebalance it. A constant grinding sound should be checked soon, because worn bearings can damage other parts if ignored.",
      },
      {
        q: "How do I know if my washing machine bearings are bad?",
        a: "Signs include a loud rumble or roar during spin and a drum that feels rough or loose when turned by hand. A technician can confirm it by checking the drum play.",
      },
      {
        q: "Why is my new front load washing machine shaking so much?",
        a: "The transit bolts at the back may not have been removed during installation. They must be taken out before use, and the machine should be levelled.",
      },
      {
        q: "Can you repair washing machine drum noise at home in Vijayawada?",
        a: "Yes, our technicians diagnose drum, bearing, suspension and belt problems at your home in Vijayawada. Same-day visits are usually possible.",
      },
    ],
    related: ["washing-machine-not-spinning", "washing-machine-water-leakage"],
  },
  {
    slug: "washing-machine-water-leakage",
    appliance: "washer",
    title: "Washing Machine Leaking Water? Find the Source and Fix It",
    metaTitle: "Washing Machine Leaking Water? Causes & Fix",
    metaDescription:
      "Water on the floor around your washing machine? Learn where leaks come from, simple safe checks, and when to book washing machine repair in Vijayawada.",
    quickAnswer:
      "Washing machine leaks most often come from a loose inlet or drain hose, a drain filter cap that is not closed tightly, or too much detergent causing foam overflow. In front-load machines, a torn or dirty door rubber (gasket) is another common source. Tighten the hoses and filter cap and use the right detergent; if water still leaks from under the machine, the pump, tub seal or internal hoses need a technician.",
    symptoms: [
      "Water pooling under or around the machine",
      "Leak only during filling, or only during draining",
      "Water dripping from the front door of a front-load machine",
      "Foam coming out of the detergent drawer",
      "Wet floor at the back near the taps and hoses",
    ],
    causes: [
      {
        title: "Loose inlet hose or tap connection",
        detail:
          "The hose from the tap to the machine can loosen with vibration, or its rubber washer can wear out, causing drips during filling.",
        fix: "diy",
      },
      {
        title: "Drain hose loose or slipped out",
        detail:
          "If the drain hose is not firmly fixed in the outlet, it can jump out when water is pumped out quickly.",
        fix: "diy",
      },
      {
        title: "Drain filter cap not closed properly",
        detail:
          "After cleaning, the filter must be screwed back fully. A loose or cross-threaded cap leaks from the bottom front.",
        fix: "diy",
      },
      {
        title: "Too much or wrong detergent",
        detail:
          "Using hand-wash powder or too much detergent creates heavy foam that can overflow from the drawer or door. Front-load machines need front-load detergent.",
        fix: "diy",
      },
      {
        title: "Torn or dirty door gasket (front-load)",
        detail:
          "The rubber ring around the door can trap coins and dirt, or tear over time. Water then leaks from the front during washing.",
        fix: "technician",
      },
      {
        title: "Internal hose, pump or tub seal leak",
        detail:
          "Hoses inside the machine can crack, the pump can leak, and the tub seal can wear out. These leaks show up under the machine.",
        fix: "technician",
      },
    ],
    diyChecks: [
      "Switch off and unplug the machine and close the water tap before checking for leaks.",
      "Hand-tighten the inlet hose at both the tap and the machine, and check that the rubber washer inside is present and not cracked.",
      "Make sure the drain hose is secured firmly in the outlet and cannot slip out.",
      "Check that the drain filter cap is screwed in fully and straight.",
      "Wipe the door gasket and look inside the folds for cuts, coins or dirt (front-load machines).",
      "Use the correct detergent type and the amount shown on the pack, and reduce it if you have soft water.",
    ],
    whenToCall: [
      "Water leaks from under the machine even with hoses and filter tight",
      "The door gasket is torn or cracked",
      "Leaking happens only during draining and the hose is secure",
      "Water is reaching the plug point or extension board",
    ],
    faq: [
      {
        q: "Why is my washing machine leaking from the bottom?",
        a: "Common causes are a loose drain filter cap, a leaking pump, a cracked internal hose or a worn tub seal. If the filter cap is tight, a technician should open and check it.",
      },
      {
        q: "Why is my front load washing machine leaking from the door?",
        a: "The door rubber may be dirty, torn or blocked by clothes caught in it. Too much foam can also push water past the seal.",
      },
      {
        q: "Can too much detergent cause a washing machine to leak?",
        a: "Yes. Extra detergent or the wrong type makes excess foam, which can overflow from the detergent drawer or door.",
      },
      {
        q: "Is it safe to use a washing machine that is leaking?",
        a: "It is better not to, especially if water is near the plug or wiring. Switch it off at the wall, close the tap, and get the leak fixed first.",
      },
    ],
    related: ["washing-machine-not-draining", "washing-machine-drum-noise"],
  },
  {
    slug: "washing-machine-not-starting",
    appliance: "washer",
    title: "Washing Machine Not Starting or Not Turning On? What to Check",
    metaTitle: "Washing Machine Not Starting? Checks & Repair",
    metaDescription:
      "Washing machine not turning on or stuck after pressing Start? Try these safe checks for power, door, water and child lock, then book repair in Vijayawada.",
    quickAnswer:
      "A washing machine that will not start usually has no power at the socket, a door or lid that is not fully closed, the water tap turned off, child lock switched on, or a delay-start timer set. Check these first, then unplug the machine for a few minutes to reset it. If the display stays dead or the machine hums without starting, the fault is likely in the door lock, control board or motor.",
    symptoms: [
      "No lights or display when you press the power button",
      "Display comes on but nothing happens after pressing Start",
      "Machine fills water but the drum does not move",
      "Door lock light blinks and the cycle does not begin",
      "Buttons do not respond at all",
    ],
    causes: [
      {
        title: "No power or loose plug",
        detail:
          "A switched-off socket, loose plug, faulty extension board or tripped MCB can stop the machine from turning on.",
        fix: "diy",
      },
      {
        title: "Door or lid not closed fully",
        detail:
          "The machine will not start until the door or lid is locked. Clothes caught in the door can stop it closing.",
        fix: "diy",
      },
      {
        title: "Water tap closed or low water pressure",
        detail:
          "Automatic machines wait for water before starting the wash. If the tap is off, or the overhead tank is empty, the machine may pause or show an error.",
        fix: "diy",
      },
      {
        title: "Child lock or delay start on",
        detail:
          "Child lock makes buttons unresponsive, and delay start makes the machine wait before beginning. Both are easy to turn on by accident.",
        fix: "diy",
      },
      {
        title: "Door lock or lid switch fault",
        detail:
          "If the lock mechanism or lid switch is broken, the machine does not detect a closed door and will not start.",
        fix: "technician",
      },
      {
        title: "Control board damage",
        detail:
          "Voltage spikes and moisture can damage the control board, leaving the display dead or buttons unresponsive.",
        fix: "technician",
      },
      {
        title: "Motor or inlet valve fault",
        detail:
          "If the machine turns on but water does not enter or the drum does not move, the inlet valve or motor may be faulty.",
        fix: "technician",
      },
    ],
    diyChecks: [
      "Check that the socket switch is on and the plug is firmly in. Try another working socket without using a loose extension board.",
      "Open and close the door or lid firmly, making sure no clothes are caught.",
      "Make sure the water tap is fully open and there is water in the tank.",
      "Look for a lock or key symbol on the display and turn off child lock as shown in your user manual. Cancel any delay-start timer.",
      "Switch off and unplug the machine for about 5 minutes, then plug in and try again.",
    ],
    whenToCall: [
      "No display at all even with power at the socket",
      "The door is closed but the lock light keeps blinking",
      "The machine hums or clicks but does not start",
      "It trips the MCB or you smell burning",
      "The same error code comes back after a reset",
    ],
    faq: [
      {
        q: "Why is my washing machine not turning on at all?",
        a: "First check the socket, plug and MCB. If power is reaching the socket and the display is still blank, the control board or power supply inside the machine may be faulty.",
      },
      {
        q: "Why does my washing machine not start after pressing Start?",
        a: "The door may not be locked, the tap may be closed, or child lock or delay start may be on. Check these before calling for repair.",
      },
      {
        q: "How do I reset my washing machine?",
        a: "Switch it off, unplug it for a few minutes, then plug it back in and start a new cycle. The exact reset steps vary by model, so check your manual too.",
      },
      {
        q: "Can voltage fluctuation damage a washing machine?",
        a: "Yes, sudden spikes and low voltage can harm the control board and motor. Using a proper socket and switching off during storms helps protect it.",
      },
    ],
    related: ["washing-machine-not-spinning", "washing-machine-not-draining"],
  },
];
