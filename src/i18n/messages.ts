import { WHATSAPP_DEFAULT_MSG } from "@/config/site";
import type { Lang } from "./ui";

export const WHATSAPP_DEFAULT_MSG_TE = "నమస్తే AV Appliance Services, విజయవాడలో మా ఇంటికి రిపేర్ కోసం టెక్నీషియన్ కావాలి.";

export const waDefaultMessage = (lang: Lang) => (lang === "te" ? WHATSAPP_DEFAULT_MSG_TE : WHATSAPP_DEFAULT_MSG);
