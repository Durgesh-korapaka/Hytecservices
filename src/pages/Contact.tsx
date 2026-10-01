import { useState } from "react";
import { Clock, Mail, MapPin, Phone, Send } from "lucide-react";
import { BUSINESS, HOURS, TEL_LINK, whatsappLink } from "@/config/site";
import { APPLIANCES } from "@/data/appliances";
import { BRANDS } from "@/data/brands";
import { WhatsAppIcon } from "@/components/ui/Buttons";
import Reveal from "@/components/ui/Reveal";
import { AreasStrip, PageHero } from "@/components/sections/Sections";
import { WasherIllustration } from "@/components/illustrations/Illustrations";
import { useLang } from "@/i18n/lang";
import { APPLIANCE_NAME_TE } from "@/i18n/ui";

const COPY = {
  en: {
    name: "Your name *", namePh: "e.g. Ravi Kumar", nameErr: "Please enter your name",
    phone: "Mobile number *", phonePh: "10-digit number", phoneErr: "Enter a valid 10-digit mobile number",
    appliance: "Appliance *", applianceErr: "Please choose an appliance", choose: "Choose…",
    brand: "Brand", other: "Other / not sure",
    area: "Area in Vijayawada", areaPh: "e.g. Benz Circle, Patamata",
    problem: "What's the problem?", problemPh: "e.g. AC not cooling, water dripping from indoor unit",
    send: "Send request on WhatsApp", sendNote: "Opens WhatsApp with your details filled in — just tap send.",
    msg: ["New repair request", "Name", "Phone", "Appliance", "Area", "Problem"],
    callUs: "Call us", email: "Email", serving: "Serving all of Vijayawada + 20 km around",
    formTitle: "Request a technician", formSub: "Fill in the basics — we'll confirm a visit time on WhatsApp.",
    heroEyebrow: "Book a repair", heroTitle: "Contact & Book a Repair in ", heroTe: "కాల్ చేయండి లేదా WhatsApp చేయండి",
    heroIntro: "The fastest way is a call or WhatsApp. Send a photo or short video of the problem and we'll tell you what to expect.",
  },
  te: {
    name: "మీ పేరు *", namePh: "ఉదా: రవి కుమార్", nameErr: "దయచేసి మీ పేరు రాయండి",
    phone: "మొబైల్ నంబర్ *", phonePh: "10 అంకెల నంబర్", phoneErr: "సరైన 10 అంకెల మొబైల్ నంబర్ రాయండి",
    appliance: "ఏ మెషిన్? *", applianceErr: "దయచేసి మెషిన్ ఎంచుకోండి", choose: "ఎంచుకోండి…",
    brand: "బ్రాండ్", other: "వేరేది / తెలియదు",
    area: "విజయవాడలో మీ ప్రాంతం", areaPh: "ఉదా: బెంజ్ సర్కిల్, పటమట",
    problem: "సమస్య ఏమిటి?", problemPh: "ఉదా: AC కూలింగ్ రావడం లేదు, నీళ్లు కారుతున్నాయి",
    send: "WhatsApp లో పంపండి", sendNote: "మీ వివరాలతో WhatsApp ఓపెన్ అవుతుంది — Send నొక్కితే చాలు.",
    msg: ["కొత్త రిపేర్ రిక్వెస్ట్", "పేరు", "ఫోన్", "మెషిన్", "ప్రాంతం", "సమస్య"],
    callUs: "కాల్ చేయండి", email: "ఈమెయిల్", serving: "విజయవాడ + చుట్టుపక్కల 20 కి.మీ. వరకు సర్వీస్",
    formTitle: "టెక్నీషియన్ కావాలా?", formSub: "కొన్ని వివరాలు ఇవ్వండి — WhatsApp లో టైమ్ కన్ఫర్మ్ చేస్తాం.",
    heroEyebrow: "రిపేర్ బుక్ చేయండి", heroTitle: "మమ్మల్ని సంప్రదించండి — ", heroTe: "",
    heroIntro: "కాల్ లేదా WhatsApp చేయడమే తొందరైన దారి. సమస్య ఫోటో లేదా చిన్న వీడియో పంపండి — ఏం చేయాలో చెబుతాం.",
  },
};

type Form = { name: string; phone: string; appliance: string; brand: string; area: string; problem: string };
const EMPTY: Form = { name: "", phone: "", appliance: "", brand: "", area: "", problem: "" };

const field =
  "w-full rounded-2xl border-0 bg-mist px-4 py-3.5 text-[16px] text-ink ring-1 ring-slate-200 placeholder:text-slate-400 transition focus:bg-white focus:ring-2 focus:ring-brand-500";

/** Builds a WhatsApp message from the form — no backend, lands straight in the owner's chat. */
function BookingForm() {
  const { lang } = useLang();
  const c = COPY[lang];
  const [form, setForm] = useState<Form>(EMPTY);
  const [errors, setErrors] = useState<Partial<Record<keyof Form, string>>>({});

  const set = (k: keyof Form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [k]: e.target.value }));
    setErrors((er) => ({ ...er, [k]: undefined }));
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const er: typeof errors = {};
    if (!form.name.trim()) er.name = c.nameErr;
    if (!/^[6-9]\d{9}$/.test(form.phone.replace(/\D/g, "").slice(-10))) er.phone = c.phoneErr;
    if (!form.appliance) er.appliance = c.applianceErr;
    setErrors(er);
    if (Object.keys(er).length) return;

    const lines = [
      c.msg[0],
      `${c.msg[1]}: ${form.name}`,
      `${c.msg[2]}: ${form.phone}`,
      `${c.msg[3]}: ${form.appliance}${form.brand ? ` (${form.brand})` : ""}`,
      form.area && `${c.msg[4]}: ${form.area}`,
      form.problem && `${c.msg[5]}: ${form.problem}`,
    ].filter(Boolean);
    window.open(whatsappLink(lines.join("\n")), "_blank", "noopener,noreferrer");
  };

  const err = (k: keyof Form) =>
    errors[k] && (
      <p className="mt-1.5 text-sm font-medium text-red-600" role="alert">
        {errors[k]}
      </p>
    );

  return (
    <form onSubmit={submit} noValidate className="grid grid-cols-1 gap-4 sm:grid-cols-2 [&>*]:min-w-0">
      <div>
        <label htmlFor="f-name" className="mb-1.5 block text-sm font-bold text-slate-700">
          {c.name}
        </label>
        <input id="f-name" autoComplete="name" value={form.name} onChange={set("name")} className={field} placeholder={c.namePh} />
        {err("name")}
      </div>
      <div>
        <label htmlFor="f-phone" className="mb-1.5 block text-sm font-bold text-slate-700">
          {c.phone}
        </label>
        <input id="f-phone" type="tel" inputMode="numeric" autoComplete="tel" value={form.phone} onChange={set("phone")} className={field} placeholder={c.phonePh} />
        {err("phone")}
      </div>
      <div>
        <label htmlFor="f-appliance" className="mb-1.5 block text-sm font-bold text-slate-700">
          {c.appliance}
        </label>
        <select id="f-appliance" value={form.appliance} onChange={set("appliance")} className={field}>
          <option value="">{c.choose}</option>
          {APPLIANCES.map((a) => (
            <option key={a.key} value={lang === "te" ? APPLIANCE_NAME_TE[a.key] : a.longName}>
              {lang === "te" ? APPLIANCE_NAME_TE[a.key] : a.longName}
            </option>
          ))}
        </select>
        {err("appliance")}
      </div>
      <div>
        <label htmlFor="f-brand" className="mb-1.5 block text-sm font-bold text-slate-700">
          {c.brand}
        </label>
        <select id="f-brand" value={form.brand} onChange={set("brand")} className={field}>
          <option value="">{c.choose}</option>
          {BRANDS.map((b) => (
            <option key={b.slug}>{b.name}</option>
          ))}
          <option>{c.other}</option>
        </select>
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="f-area" className="mb-1.5 block text-sm font-bold text-slate-700">
          {c.area}
        </label>
        <input id="f-area" value={form.area} onChange={set("area")} className={field} placeholder={c.areaPh} />
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="f-problem" className="mb-1.5 block text-sm font-bold text-slate-700">
          {c.problem}
        </label>
        <textarea id="f-problem" rows={4} value={form.problem} onChange={set("problem")} className={`${field} resize-none`} placeholder={c.problemPh} />
      </div>
      <button
        type="submit"
        className="group flex items-center justify-center gap-2.5 rounded-2xl bg-wa px-5 py-4 text-base font-bold sm:px-7 sm:text-lg text-white shadow-glow-wa transition-all hover:-translate-y-0.5 hover:bg-wa-dark active:scale-[.97] sm:col-span-2"
      >
        <Send className="h-5 w-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
        {c.send}
      </button>
      <p className="text-center text-sm text-slate-500 sm:col-span-2">{c.sendNote}</p>
    </form>
  );
}

export default function Contact() {
  const { lang } = useLang();
  const c = COPY[lang];
  const cards = [
    { icon: Phone, title: c.callUs, value: BUSINESS.phoneDisplay, href: TEL_LINK, tone: "bg-brand-600" },
    { icon: WhatsAppIcon, title: "WhatsApp", value: BUSINESS.phoneDisplay, href: whatsappLink(), tone: "bg-wa", external: true },
    { icon: Mail, title: c.email, value: BUSINESS.email, href: `mailto:${BUSINESS.email}`, tone: "bg-brand-800" },
  ];

  return (
    <div lang={lang === "te" ? "te" : undefined} className={lang === "te" ? "font-telugu" : undefined}>
      <PageHero
        crumbs={[{ name: lang === "te" ? "సంప్రదించండి" : "Contact" }]}
        eyebrow={c.heroEyebrow}
        title={
          <>
            {c.heroTitle}
            <span className="text-gradient">{lang === "te" ? "విజయవాడ" : "Vijayawada"}</span>
          </>
        }
        telugu={c.heroTe || undefined}
        intro={c.heroIntro}
        art={<WasherIllustration className="w-full" />}
      />

      <section className="py-14 lg:py-20">
        <div className="container-page grid gap-8 lg:grid-cols-[1fr_1.35fr] [&>*]:min-w-0">
          <div className="space-y-4">
            {cards.map((c, i) => (
              <Reveal key={c.title} delay={i * 90}>
                <a
                  href={c.href}
                  {...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="group card flex items-center gap-4 p-5 transition-all hover:-translate-y-0.5 hover:shadow-lift"
                >
                  <span className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl text-white ${c.tone}`}>
                    <c.icon className="h-6 w-6" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-sm font-semibold text-slate-500">{c.title}</span>
                    <span className="block truncate text-xl font-extrabold text-ink group-hover:text-brand-700">{c.value}</span>
                  </span>
                </a>
              </Reveal>
            ))}
            <Reveal delay={300} className="card space-y-4 p-6">
              <p className="flex items-center gap-3 text-[16px] text-slate-700">
                <Clock className="h-5 w-5 text-brand-600" aria-hidden="true" />
                {HOURS.display}
              </p>
              <p className="flex items-start gap-3 text-[16px] text-slate-700">
                <MapPin className="mt-0.5 h-5 w-5 text-brand-600" aria-hidden="true" />
                {c.serving}
              </p>
            </Reveal>
          </div>

          <Reveal delay={150} className="card p-5 sm:p-9">
            <h2 className="text-2xl font-extrabold sm:text-3xl">{c.formTitle}</h2>
            <p className="mt-2 text-slate-600">{c.formSub}</p>
            <div className="mt-7">
              <BookingForm />
            </div>
          </Reveal>
        </div>
      </section>

      <AreasStrip />
    </div>
  );
}
