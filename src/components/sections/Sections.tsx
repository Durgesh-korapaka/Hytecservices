import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import {
  BadgeCheck,
  CalendarCheck,
  CheckCircle2,
  ClipboardCheck,
  Clock,
  IndianRupee,
  MapPin,
  MessageCircle,
  ShieldCheck,
  Truck,
  Wrench,
} from "lucide-react";
import { CITY_AREAS, NEARBY_AREAS, STATS } from "@/config/site";
import { AREA_PAGES } from "@/data/areaPages";
import { BRANDS } from "@/data/brands";
import { GUIDES } from "@/data/guides";
import type { ApplianceKey } from "@/data/types";
import Reveal from "@/components/ui/Reveal";
import Counter from "@/components/ui/Counter";
import { Breadcrumbs, SectionHeading } from "@/components/ui/Section";
import { CallButton, WhatsAppButton } from "@/components/ui/Buttons";
import { ToolBadge } from "@/components/illustrations/Illustrations";
import { useLang } from "@/i18n/lang";

export const guideLabel = (title: string) => title.split("?")[0].split(":")[0];

/* ------------------------------------------------------------------ */
/* Inner-page hero                                                     */
/* ------------------------------------------------------------------ */

export function PageHero({
  crumbs,
  eyebrow,
  title,
  telugu,
  intro,
  art,
  children,
  whatsappMessage,
}: {
  crumbs: { name: string; path?: string }[];
  eyebrow?: string;
  title: ReactNode;
  telugu?: string;
  intro?: ReactNode;
  art?: ReactNode;
  children?: ReactNode;
  whatsappMessage?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-50/80 via-white to-white">
      <div className="bg-grid pointer-events-none absolute inset-0 [mask-image:linear-gradient(to_bottom,#000,transparent_85%)]" aria-hidden="true" />
      <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-ice-200/40 blur-3xl" aria-hidden="true" />
      <div className="container-page relative grid items-center gap-10 py-10 lg:grid-cols-[1.25fr_1fr] lg:py-16">
        <div className="animate-fade-up">
          <Breadcrumbs items={crumbs} />
          {eyebrow && <p className="eyebrow mt-6">{eyebrow}</p>}
          <h1 className="mt-4 text-[2.1rem] font-extrabold leading-[1.1] sm:text-5xl lg:text-[3.4rem]">{title}</h1>
          {telugu && (
            <p lang="te" className="mt-3 font-telugu text-lg font-semibold text-brand-600">
              {telugu}
            </p>
          )}
          {intro && <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-600">{intro}</p>}
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <CallButton size="lg" />
            <WhatsAppButton size="lg" message={whatsappMessage} />
          </div>
          {children}
        </div>
        {art && (
          <div className="relative mx-auto w-full max-w-md animate-fade-up [animation-delay:150ms]">
            <div className="absolute inset-6 rounded-[3rem] bg-gradient-to-br from-brand-100 to-ice-100" aria-hidden="true" />
            <div className="relative p-8 animate-float-slow">{art}</div>
            <ToolBadge className="absolute -left-2 top-10 h-12 w-12 animate-float drop-shadow-lg" />
          </div>
        )}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Trust chips                                                         */
/* ------------------------------------------------------------------ */

const CHIP_ICONS = [Truck, ShieldCheck, IndianRupee, BadgeCheck];

export function TrustChips({ className = "" }: { className?: string }) {
  const { t } = useLang();
  const chips = t.trust.map((text, i) => ({ icon: CHIP_ICONS[i], text }));
  return (
    <ul className={`mt-6 flex flex-wrap gap-2 ${className}`}>
      {chips.map(({ icon: Icon, text }) => (
        <li key={text} className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-sm font-semibold text-slate-700 shadow-soft ring-1 ring-slate-200/70">
          <Icon className="h-4 w-4 text-brand-600" aria-hidden="true" />
          {text}
        </li>
      ))}
    </ul>
  );
}

/* ------------------------------------------------------------------ */
/* Brand marquee                                                       */
/* ------------------------------------------------------------------ */

export function BrandMarquee() {
  const { lang } = useLang();
  const names = BRANDS.map((b) => b.name);
  const row = [...names, ...names];
  return (
    <section aria-label="Brands we repair" className="border-y border-slate-200/70 bg-white py-8">
      <p className="text-center text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
        {lang === "te" ? "అన్ని పెద్ద బ్రాండ్లు రిపేర్ చేస్తాం" : "We repair all major brands"}
      </p>
      <div className="mask-fade-x mt-5 overflow-hidden">
        <ul className="flex w-max animate-marquee gap-4 hover:[animation-play-state:paused]">
          {row.map((name, i) => (
            <li key={`${name}-${i}`} aria-hidden={i >= names.length}>
              <Link
                to="/brands"
                tabIndex={i >= names.length ? -1 : undefined}
                className="block whitespace-nowrap rounded-2xl bg-mist px-6 py-3 text-lg font-extrabold tracking-tight text-slate-500 ring-1 ring-slate-200/60 transition-colors hover:bg-brand-50 hover:text-brand-700"
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* How it works                                                        */
/* ------------------------------------------------------------------ */

const STEP_ICONS = [MessageCircle, CalendarCheck, ClipboardCheck, Wrench];

export function HowItWorks() {
  const { t } = useLang();
  const steps = t.how.steps.map(([title, text], i) => ({ icon: STEP_ICONS[i], title, text }));
  return (
    <section className="bg-mist py-20 lg:py-28">
      <div className="container-page">
        <SectionHeading center eyebrow={t.how.eyebrow} title={t.how.title} subtitle={t.how.sub} />
        <ol className="relative mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="absolute left-[12%] right-[12%] top-10 hidden h-0.5 bg-gradient-to-r from-brand-200 via-ice-300 to-brand-200 lg:block" aria-hidden="true" />
          {steps.map((s, i) => (
            <Reveal as="li" key={s.title} delay={i * 120} className="card relative flex items-start gap-4 p-5 transition-transform duration-300 hover:-translate-y-1 hover:shadow-lift md:block md:p-6 md:text-center">
              <div className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-600 to-ice-400 text-white shadow-glow md:mx-auto md:h-20 md:w-20 md:rounded-3xl">
                <s.icon className="h-7 w-7 md:h-9 md:w-9" aria-hidden="true" />
                <span className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full bg-sun-500 text-xs font-extrabold text-white ring-4 ring-white md:h-8 md:w-8 md:text-sm">
                  {i + 1}
                </span>
              </div>
              <div>
                <h3 className="text-lg font-bold md:mt-5">{s.title}</h3>
                <p className="mt-1 leading-relaxed text-slate-600 md:mt-2">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Why choose us + stats                                               */
/* ------------------------------------------------------------------ */

const REASON_ICONS = [Clock, IndianRupee, ShieldCheck, BadgeCheck, Wrench, MessageCircle];

export function WhyUs() {
  const { t } = useLang();
  const reasons = t.why.reasons.map(([title, text], i) => ({ icon: REASON_ICONS[i], title, text }));
  return (
    <section className="relative overflow-hidden bg-white py-20 lg:py-28">
      <div className="container-page grid gap-14 lg:grid-cols-[1fr_1.2fr] lg:items-center">
        <div>
          <SectionHeading
            eyebrow={t.why.eyebrow}
            title={
              <>
                {t.why.title[0]}
                <span className="text-gradient">{t.why.title[1]}</span>
              </>
            }
            subtitle={t.why.sub}
          />
          <dl className="mt-10 grid grid-cols-2 gap-4">
            {STATS.map((s, i) => (
              <Reveal key={s.label} delay={i * 100} className="rounded-3xl bg-gradient-to-br from-brand-600 to-brand-800 p-5 text-white shadow-glow">
                <dt className="text-sm font-medium text-brand-100">{t.why.stats[i]}</dt>
                <dd className="mt-1 text-3xl font-extrabold sm:text-4xl">
                  <Counter value={s.value} suffix={s.suffix} />
                </dd>
              </Reveal>
            ))}
          </dl>
        </div>
        <ul className="grid gap-4 sm:grid-cols-2">
          {reasons.map((r, i) => (
            <Reveal as="li" key={r.title} delay={i * 80} className="card group flex gap-4 p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lift sm:block sm:p-6">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-600 group-hover:text-white">
                <r.icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <div>
                <h3 className="text-lg font-bold sm:mt-4">{r.title}</h3>
                <p className="mt-1 leading-relaxed text-slate-600 sm:mt-1.5">{r.text}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Areas                                                               */
/* ------------------------------------------------------------------ */

/** The area landing page that covers a locality name, if there is one. */
export function areaPageFor(name: string) {
  return AREA_PAGES.find((p) => p.name.split(" & ").includes(name));
}

function AreaChips({ names }: { names: readonly string[] }) {
  return (
    <ul className="flex flex-wrap justify-center gap-2.5">
      {names.map((a) => {
        const page = areaPageFor(a);
        const cls = "inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-[15px] font-semibold shadow-soft ring-1 transition-colors";
        return (
          <li key={a}>
            {page ? (
              <Link to={`/areas/${page.slug}`} className={`${cls} bg-brand-600 text-white ring-brand-600 hover:bg-brand-700`}>
                <MapPin className="h-4 w-4 text-ice-300" aria-hidden="true" />
                {a}
              </Link>
            ) : (
              <span className={`${cls} bg-white text-slate-700 ring-slate-200/70`}>
                <MapPin className="h-4 w-4 text-brand-500" aria-hidden="true" />
                {a}
              </span>
            )}
          </li>
        );
      })}
    </ul>
  );
}

export function AreasStrip({ compact = false }: { compact?: boolean }) {
  const { t } = useLang();
  return (
    <section className={compact ? "py-14" : "bg-mist py-20 lg:py-24"}>
      <div className="container-page">
        <SectionHeading
          center
          eyebrow={t.areas.eyebrow}
          title={t.areas.title}
          subtitle={t.areas.sub}
        />
        <Reveal className="mx-auto mt-10 max-w-5xl space-y-8">
          <div>
            <h3 className="mb-4 text-center text-sm font-bold uppercase tracking-[0.18em] text-slate-500">{t.areas.city}</h3>
            <AreaChips names={CITY_AREAS} />
          </div>
          <div>
            <h3 className="mb-4 text-center text-sm font-bold uppercase tracking-[0.18em] text-slate-500">
              {t.areas.nearby}
            </h3>
            <AreaChips names={NEARBY_AREAS} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Problem guide links                                                 */
/* ------------------------------------------------------------------ */

export function GuideLinks({ appliance, exclude, title = "Common problems explained" }: { appliance?: ApplianceKey; exclude?: string; title?: string }) {
  const list = GUIDES.filter((g) => (!appliance || g.appliance === appliance) && g.slug !== exclude);
  return (
    <div>
      <h2 className="text-2xl font-extrabold sm:text-3xl">{title}</h2>
      <ul className="mt-6 grid gap-3 sm:grid-cols-2">
        {list.map((g, i) => (
          <Reveal as="li" key={g.slug} delay={i * 50}>
            <Link
              to={`/guides/${g.slug}`}
              className="group flex h-full items-start gap-3 rounded-2xl bg-white p-4 ring-1 ring-slate-200/80 transition-all hover:-translate-y-0.5 hover:shadow-lift hover:ring-brand-200"
            >
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-500" aria-hidden="true" />
              <span>
                <span className="block font-bold leading-snug text-ink group-hover:text-brand-700">{guideLabel(g.title)}</span>
                <span className="mt-1 block text-sm text-slate-500">Causes, safe checks & when to call →</span>
              </span>
            </Link>
          </Reveal>
        ))}
      </ul>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* CTA band                                                            */
/* ------------------------------------------------------------------ */

export function CtaBand({ title, message }: { title?: string; message?: string }) {
  const { lang, t } = useLang();
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <Reveal className="relative mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-brand-700 via-brand-600 to-ice-500 px-6 py-12 text-center text-white shadow-glow sm:px-12 lg:py-16">
        <div className="bg-grid pointer-events-none absolute inset-0 opacity-30 [mask-image:radial-gradient(circle,#000,transparent_70%)]" aria-hidden="true" />
        <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-2xl" aria-hidden="true" />
        <div className="pointer-events-none absolute -bottom-24 -right-10 h-72 w-72 rounded-full bg-sun-400/20 blur-3xl" aria-hidden="true" />
        <h2 className="relative text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">{title ?? t.cta.title}</h2>
        {lang === "en" && (
          <p lang="te" className="relative mt-3 font-telugu text-lg text-brand-100">
            ఈరోజే కాల్ చేయండి — మీ ఇంటికే వస్తాం
          </p>
        )}
        <p className="relative mx-auto mt-4 max-w-2xl text-lg text-brand-50/90">{t.cta.text}</p>
        <div className="relative mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <CallButton size="lg" className="!bg-white !text-brand-700 hover:!bg-brand-50" />
          <WhatsAppButton size="lg" message={message} />
        </div>
      </Reveal>
    </section>
  );
}
