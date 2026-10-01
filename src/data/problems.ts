import type { ApplianceKey } from "./types";

export type ProblemIcon = "cool" | "drop" | "power" | "noise" | "wrench" | "ice" | "spin" | "drain" | "shake";

/**
 * One-tap problems for the picker. `msgTe` / `msgEn` become the pre-filled
 * WhatsApp message, so the customer only has to press send.
 */
export type QuickProblem = {
  id: string;
  appliance: ApplianceKey;
  icon: ProblemIcon;
  en: string;
  te: string;
  msgEn: string;
  msgTe: string;
  /** English guide or service page with more detail. */
  link: string;
};

const en = (x: string) => `Hi AV Appliance Services, ${x}. Please send a technician to my home in Vijayawada.`;
const te = (x: string) => `నమస్తే, ${x}. విజయవాడలో మా ఇంటికి టెక్నీషియన్ ని పంపించండి.`;

export const QUICK_PROBLEMS: QuickProblem[] = [
  { id: "ac-cooling", appliance: "ac", icon: "cool", en: "AC not cooling", te: "AC కూలింగ్ రావడం లేదు", msgEn: en("my AC is not cooling"), msgTe: te("మా AC కూలింగ్ రావడం లేదు"), link: "/guides/ac-not-cooling" },
  { id: "ac-leak", appliance: "ac", icon: "drop", en: "Water leaking from AC", te: "AC నుంచి నీళ్లు కారుతున్నాయి", msgEn: en("water is leaking from my AC"), msgTe: te("మా AC నుంచి నీళ్లు కారుతున్నాయి"), link: "/guides/ac-water-leakage" },
  { id: "ac-power", appliance: "ac", icon: "power", en: "AC not turning on", te: "AC ఆన్ అవ్వడం లేదు", msgEn: en("my AC is not turning on"), msgTe: te("మా AC ఆన్ అవ్వడం లేదు"), link: "/guides/ac-not-turning-on" },
  { id: "ac-noise", appliance: "ac", icon: "noise", en: "AC noise or bad smell", te: "AC శబ్దం / వాసన వస్తోంది", msgEn: en("my AC is making noise or giving a bad smell"), msgTe: te("మా AC నుంచి శబ్దం / వాసన వస్తోంది"), link: "/guides/ac-making-noise-or-bad-smell" },
  { id: "ac-service", appliance: "ac", icon: "wrench", en: "AC service / gas filling", te: "AC సర్వీస్ / గ్యాస్ ఫిల్లింగ్", msgEn: en("I need AC service or gas filling"), msgTe: te("మాకు AC సర్వీస్ / గ్యాస్ ఫిల్లింగ్ కావాలి"), link: "/ac-service-vijayawada" },

  { id: "fridge-cooling", appliance: "fridge", icon: "cool", en: "Fridge not cooling", te: "ఫ్రిజ్ కూలింగ్ రావడం లేదు", msgEn: en("my fridge is not cooling"), msgTe: te("మా ఫ్రిజ్ కూలింగ్ రావడం లేదు"), link: "/guides/fridge-not-cooling" },
  { id: "fridge-ice", appliance: "fridge", icon: "ice", en: "Too much ice in freezer", te: "ఫ్రీజర్ లో ఐస్ ఎక్కువగా పేరుకుంటోంది", msgEn: en("too much ice is forming in my fridge freezer"), msgTe: te("మా ఫ్రిజ్ ఫ్రీజర్ లో ఐస్ ఎక్కువగా పేరుకుంటోంది"), link: "/guides/fridge-ice-buildup" },
  { id: "fridge-leak", appliance: "fridge", icon: "drop", en: "Fridge leaking water", te: "ఫ్రిజ్ నుంచి నీళ్లు కారుతున్నాయి", msgEn: en("my fridge is leaking water"), msgTe: te("మా ఫ్రిజ్ నుంచి నీళ్లు కారుతున్నాయి"), link: "/guides/fridge-water-leakage" },
  { id: "fridge-noise", appliance: "fridge", icon: "noise", en: "Fridge making noise", te: "ఫ్రిజ్ శబ్దం చేస్తోంది", msgEn: en("my fridge is making noise"), msgTe: te("మా ఫ్రిజ్ శబ్దం చేస్తోంది"), link: "/guides/fridge-making-noise" },

  { id: "wm-spin", appliance: "washer", icon: "spin", en: "Washing machine not spinning", te: "వాషింగ్ మెషిన్ తిరగడం లేదు", msgEn: en("my washing machine is not spinning"), msgTe: te("మా వాషింగ్ మెషిన్ తిరగడం లేదు"), link: "/guides/washing-machine-not-spinning" },
  { id: "wm-drain", appliance: "washer", icon: "drain", en: "Water not draining", te: "నీళ్లు బయటకు పోవడం లేదు", msgEn: en("water is not draining from my washing machine"), msgTe: te("మా వాషింగ్ మెషిన్ లో నీళ్లు బయటకు పోవడం లేదు"), link: "/guides/washing-machine-not-draining" },
  { id: "wm-noise", appliance: "washer", icon: "shake", en: "Drum noise or shaking", te: "డ్రమ్ శబ్దం / మెషిన్ ఊగుతోంది", msgEn: en("my washing machine drum is noisy or shaking"), msgTe: te("మా వాషింగ్ మెషిన్ డ్రమ్ శబ్దం చేస్తోంది / ఊగుతోంది"), link: "/guides/washing-machine-drum-noise" },
  { id: "wm-leak", appliance: "washer", icon: "drop", en: "Washing machine leaking", te: "మెషిన్ నుంచి నీళ్లు కారుతున్నాయి", msgEn: en("my washing machine is leaking water"), msgTe: te("మా వాషింగ్ మెషిన్ నుంచి నీళ్లు కారుతున్నాయి"), link: "/guides/washing-machine-water-leakage" },
  { id: "wm-start", appliance: "washer", icon: "power", en: "Machine not starting", te: "మెషిన్ స్టార్ట్ అవ్వడం లేదు", msgEn: en("my washing machine is not starting"), msgTe: te("మా వాషింగ్ మెషిన్ స్టార్ట్ అవ్వడం లేదు"), link: "/guides/washing-machine-not-starting" },
];
