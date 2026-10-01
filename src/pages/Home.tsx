import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, ShieldCheck, Sparkles, Star } from "lucide-react";
import { BUSINESS } from "@/config/site";
import { APPLIANCES } from "@/data/appliances";
import { GUIDES } from "@/data/guides";
import { OFFERINGS } from "@/data/offerings";
import { HOME_FAQS } from "@/data/content";
import { AcIllustration, FridgeIllustration, ILLUSTRATION, ToolBadge, WasherIllustration } from "@/components/illustrations/Illustrations";
import { CallButton, TextLink, WhatsAppButton } from "@/components/ui/Buttons";
import { QuickAnswer, SectionHeading } from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import FaqList from "@/components/ui/FaqList";
import ProblemPicker from "@/components/sections/ProblemPicker";
import { useLang } from "@/i18n/lang";
import { AreasStrip, BrandMarquee, CtaBand, HowItWorks, TrustChips, WhyUs, guideLabel } from "@/components/sections/Sections";

export function HeroScene() {
  const { lang } = useLang();
  return (
    <div className="relative mx-auto aspect-[1/0.95] w-full max-w-[560px]">
      <div className="absolute inset-[6%] rounded-full bg-gradient-to-br from-brand-100 via-ice-100 to-white" aria-hidden="true" />
      <div className="absolute inset-[18%] rounded-full border-2 border-dashed border-brand-200/80 animate-spin-slow [animation-duration:60s]" aria-hidden="true" />

      <AcIllustration className="absolute left-[8%] top-[2%] w-[84%] animate-float-slow drop-shadow-xl" />
      <FridgeIllustration className="absolute bottom-[4%] left-[10%] w-[34%] animate-float drop-shadow-xl [animation-delay:600ms]" />
      <WasherIllustration className="absolute bottom-[4%] right-[8%] w-[42%] animate-float-slow drop-shadow-xl [animation-delay:1200ms]" />

      <div className="absolute -left-2 top-[46%] flex items-center gap-2.5 rounded-2xl bg-white/95 px-3.5 py-2.5 shadow-lift ring-1 ring-slate-200/70 backdrop-blur animate-float sm:-left-6">
        <span className="relative flex h-2.5 w-2.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-wa opacity-75" />
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-wa" />
        </span>
        <span className="text-sm font-bold text-ink">{lang === "te" ? "ఈరోజే టెక్నీషియన్లు అందుబాటులో" : "Technicians available today"}</span>
      </div>

      <div className="absolute -right-1 top-[40%] rounded-2xl bg-white/95 px-3.5 py-2.5 shadow-lift ring-1 ring-slate-200/70 backdrop-blur animate-float-slow [animation-delay:900ms] sm:-right-4">
        <p className="flex items-center gap-1.5 text-sm font-bold text-ink">
          <ShieldCheck className="h-4 w-4 text-brand-600" aria-hidden="true" />
          {lang === "te" ? `${BUSINESS.warrantyDays} రోజుల వారంటీ` : `${BUSINESS.warrantyDays}-day warranty`}
        </p>
      </div>

      <ToolBadge className="absolute right-[14%] top-[-2%] h-12 w-12 animate-float drop-shadow-lg [animation-delay:300ms]" />
    </div>
  );
}

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-50 via-white to-white">
        <div className="bg-grid pointer-events-none absolute inset-0 [mask-image:linear-gradient(to_bottom,#000,transparent_80%)]" aria-hidden="true" />
        <div className="pointer-events-none absolute -left-40 top-20 h-[28rem] w-[28rem] rounded-full bg-ice-200/40 blur-3xl" aria-hidden="true" />
        <div className="container-page relative grid items-center gap-10 pb-16 pt-10 lg:grid-cols-[1.1fr_1fr] lg:gap-6 lg:pb-24 lg:pt-16">
          <div className="animate-fade-up">
            <p className="inline-flex items-center gap-2 rounded-full bg-white py-1.5 pl-1.5 pr-4 text-sm font-semibold text-slate-700 shadow-soft ring-1 ring-slate-200/70">
              <span className="flex items-center gap-1 rounded-full bg-sun-100 px-2 py-0.5 text-xs font-bold text-sun-600">
                <Star className="h-3.5 w-3.5 fill-sun-500 text-sun-500" aria-hidden="true" /> 5,000+
              </span>
              happy customers in Vijayawada
            </p>
            <h1 className="mt-6 text-[2.35rem] font-extrabold leading-[1.08] sm:text-5xl lg:text-[3.6rem]">
              AC, Fridge & Washing Machine Repair in <span className="text-gradient animate-shimmer">Vijayawada</span>
            </h1>
            <p lang="te" className="mt-4 font-telugu text-lg font-semibold text-brand-600 sm:text-xl">
              విజయవాడలో AC, ఫ్రిజ్, వాషింగ్ మెషిన్ రిపేర్ — ఇంటి వద్దే
            </p>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-600 sm:text-xl">
              Expert technicians at your doorstep — usually the same day. All brands, honest quotes before work, and a{" "}
              {BUSINESS.warrantyDays}-day warranty.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <CallButton size="lg" />
              <WhatsAppButton size="lg" label="WhatsApp a Photo" />
            </div>
            <TrustChips />
          </div>
          <div className="animate-fade-up [animation-delay:200ms]">
            <HeroScene />
          </div>
        </div>
      </section>

      <BrandMarquee />

      <ProblemPicker className="bg-mist" />

      {/* SERVICES */}
      <section className="py-20 lg:py-28" id="services">
        <div className="container-page">
          <SectionHeading
            center
            eyebrow="Our services"
            title={
              <>
                What do you need <span className="text-gradient">fixed today?</span>
              </>
            }
            subtitle="Tap your appliance to see what we repair, common problems and the brands we service."
          />
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {APPLIANCES.map((a, i) => {
              const Art = ILLUSTRATION[a.key];
              return (
                <Reveal key={a.key} delay={i * 120} className="group card flex flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift">
                  <Link to={`/${a.slug}`} className="relative flex h-56 items-center justify-center overflow-hidden bg-gradient-to-br from-brand-50 via-ice-50 to-white">
                    <div className="absolute h-40 w-40 rounded-full bg-white/80 blur-xl transition-transform duration-500 group-hover:scale-125" aria-hidden="true" />
                    <Art className="relative h-44 w-auto transition-transform duration-500 group-hover:scale-105" />
                  </Link>
                  <div className="flex flex-1 flex-col p-6 sm:p-7">
                    <h3 className="text-2xl font-extrabold">
                      <Link to={`/${a.slug}`} className="hover:text-brand-700">
                        {a.name} Repair & Service
                      </Link>
                    </h3>
                    <p lang="te" className="mt-1 font-telugu text-sm font-semibold text-brand-600">
                      {a.telugu}
                    </p>
                    <ul className="mt-5 space-y-2.5">
                      {a.problems.slice(0, 5).map((p) => (
                        <li key={p} className="flex items-start gap-2.5 text-[15px] text-slate-700">
                          <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-500" aria-hidden="true" />
                          {p}
                        </li>
                      ))}
                    </ul>
                    <ul className="mt-5 flex flex-wrap gap-1.5">
                      {OFFERINGS.filter((o) => o.appliance === a.key).map((o) => (
                        <li key={o.slug}>
                          <Link
                            to={`/${o.slug}`}
                            className="inline-block rounded-full bg-mist px-3 py-1 text-[13px] font-semibold text-slate-600 ring-1 ring-slate-200 transition-colors hover:bg-brand-50 hover:text-brand-700"
                          >
                            {o.name.replace(" Repair", "")}
                          </Link>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-auto flex items-center justify-between gap-3 pt-7">
                      <TextLink to={`/${a.slug}`}>View details</TextLink>
                      <WhatsAppButton
                        className="!rounded-xl !px-4 !py-2.5 !text-sm"
                        label="Book"
                        message={`Hi, I need ${a.name} repair at my home in Vijayawada.`}
                      />
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <HowItWorks />

      {/* PROBLEMS */}
      <section className="py-20 lg:py-28">
        <div className="container-page">
          <SectionHeading
            center
            eyebrow="Problem solver"
            title="What's wrong with your appliance?"
            subtitle="Simple guides on the most common problems — what causes them, what you can safely check, and when to call us."
          />
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {APPLIANCES.map((a, i) => {
              const Art = ILLUSTRATION[a.key];
              return (
                <Reveal key={a.key} delay={i * 120} className="card p-6">
                  <div className="flex items-center gap-3">
                    <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-50">
                      <Art className="h-11 w-auto" />
                    </span>
                    <h3 className="text-xl font-extrabold">{a.name} problems</h3>
                  </div>
                  <ul className="mt-5 divide-y divide-slate-100">
                    {GUIDES.filter((g) => g.appliance === a.key).map((g) => (
                      <li key={g.slug}>
                        <Link to={`/guides/${g.slug}`} className="group flex items-center justify-between gap-3 py-3 font-semibold text-slate-700 hover:text-brand-700">
                          {guideLabel(g.title)}
                          <ArrowRight className="h-4 w-4 shrink-0 text-slate-400 transition-transform group-hover:translate-x-1 group-hover:text-brand-600" aria-hidden="true" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <WhyUs />

      <AreasStrip />

      {/* FAQ */}
      <section className="py-20 lg:py-28">
        <div className="container-page grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <SectionHeading eyebrow="FAQ" title="Questions people ask us" subtitle="Still unsure? Send us a WhatsApp — we reply fast." />
            <div className="mt-8">
              <QuickAnswer label="In short">
                {BUSINESS.name} repairs ACs, refrigerators and washing machines of all major brands at your home in Vijayawada,
                usually on the same day. Call or WhatsApp <strong>{BUSINESS.phoneDisplay}</strong>.
              </QuickAnswer>
            </div>
            <p className="mt-6 flex items-center gap-2 text-sm text-slate-500">
              <Sparkles className="h-4 w-4 text-sun-500" aria-hidden="true" />
              Can't find your question? WhatsApp us a photo of the problem.
            </p>
          </div>
          <FaqList faqs={HOME_FAQS} />
        </div>
      </section>

      <CtaBand />
    </>
  );
}
