import { Link } from "react-router-dom";
import { CheckCircle2, Star } from "lucide-react";
import { APPLIANCES } from "@/data/appliances";
import { TE_APPLIANCES, TE_HOME } from "@/data/te-pages";
import { TE_GUIDES } from "@/data/te-guides";
import { ILLUSTRATION } from "@/components/illustrations/Illustrations";
import { CallButton, TextLink, WhatsAppButton } from "@/components/ui/Buttons";
import { QuickAnswer, SectionHeading } from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import FaqList from "@/components/ui/FaqList";
import ProblemPicker from "@/components/sections/ProblemPicker";
import { AreasStrip, BrandMarquee, CtaBand, HowItWorks, TrustChips, WhyUs } from "@/components/sections/Sections";
import { HeroScene } from "@/pages/Home";
import { APPLIANCE_NAME_TE, UI } from "@/i18n/ui";

const t = UI.te;

export default function TeHome() {
  return (
    <div lang="te" className="font-telugu">
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-50 via-white to-white">
        <div className="bg-grid pointer-events-none absolute inset-0 [mask-image:linear-gradient(to_bottom,#000,transparent_80%)]" aria-hidden="true" />
        <div className="container-page relative grid items-center gap-10 pb-16 pt-10 lg:grid-cols-[1.1fr_1fr] lg:gap-6 lg:pb-24 lg:pt-16">
          <div className="animate-fade-up">
            <p className="inline-flex items-center gap-2 rounded-full bg-white py-1.5 pl-1.5 pr-4 text-sm font-semibold text-slate-700 shadow-soft ring-1 ring-slate-200/70">
              <span className="flex items-center gap-1 rounded-full bg-sun-100 px-2 py-0.5 text-xs font-bold text-sun-600">
                <Star className="h-3.5 w-3.5 fill-sun-500 text-sun-500" aria-hidden="true" /> 5,000+
              </span>
              విజయవాడలో సంతృప్త కస్టమర్లు
            </p>
            <h1 className="mt-6 text-[2rem] font-extrabold leading-[1.3] sm:text-[2.6rem] lg:text-[3.1rem]">{TE_HOME.h1}</h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-600 sm:text-xl">{TE_HOME.sub}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <CallButton size="lg" />
              <WhatsAppButton size="lg" label={t.whatsappPhoto} />
            </div>
            <TrustChips />
            <p className="mt-6 text-sm text-slate-500">
              <Link to="/" hrefLang="en-IN" className="font-semibold text-brand-600 underline-offset-4 hover:underline">
                Read this page in English →
              </Link>
            </p>
          </div>
          <div className="animate-fade-up [animation-delay:200ms]">
            <HeroScene />
          </div>
        </div>
      </section>

      <ProblemPicker className="bg-mist" />
      <BrandMarquee />

      <section className="py-20 lg:py-24">
        <div className="container-page">
          <SectionHeading center eyebrow="మా సర్వీసులు" title="ఏ మెషిన్ రిపేర్ కావాలి?" subtitle="మీ మెషిన్ మీద నొక్కండి — ఏం రిపేర్ చేస్తామో, ఏ బ్రాండ్లు చేస్తామో చూడండి." />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {APPLIANCES.map((a, i) => {
              const Art = ILLUSTRATION[a.key];
              const te = TE_APPLIANCES.find((x) => x.key === a.key)!;
              return (
                <Reveal key={a.key} delay={i * 120} className="group card flex flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift">
                  <Link to={`/te/${a.slug}`} className="relative flex h-52 items-center justify-center bg-gradient-to-br from-brand-50 via-ice-50 to-white">
                    <Art className="relative h-40 w-auto transition-transform duration-500 group-hover:scale-105" />
                  </Link>
                  <div className="flex flex-1 flex-col p-6 sm:p-7">
                    <h3 className="text-2xl font-extrabold">
                      <Link to={`/te/${a.slug}`} className="hover:text-brand-700">
                        {APPLIANCE_NAME_TE[a.key]} రిపేర్ & సర్వీస్
                      </Link>
                    </h3>
                    <p className="mt-2 text-[16px] leading-relaxed text-slate-600">{TE_HOME.applianceBlurbs[a.key]}</p>
                    <ul className="mt-5 space-y-2.5">
                      {te.problems.slice(0, 4).map((p) => (
                        <li key={p} className="flex items-start gap-2.5 text-[16px] text-slate-700">
                          <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-brand-500" aria-hidden="true" />
                          {p}
                        </li>
                      ))}
                    </ul>
                    <TextLink to={`/te/${a.slug}`} className="mt-auto pt-6">
                      పూర్తి వివరాలు చూడండి
                    </TextLink>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="pb-16">
        <div className="container-page max-w-5xl">
          <QuickAnswer>{TE_HOME.quickAnswer}</QuickAnswer>
        </div>
      </section>

      <HowItWorks />

      <section className="py-20 lg:py-24">
        <div className="container-page">
          <SectionHeading center eyebrow="సమస్యలు & పరిష్కారాలు" title="ఎక్కువమంది అడిగే సమస్యలు" subtitle="కారణాలు ఏంటి, మీరే ఏం చెక్ చేయవచ్చు, టెక్నీషియన్ ని ఎప్పుడు పిలవాలి — తెలుగులో." />
          <ul className="mx-auto mt-10 grid max-w-5xl gap-3 sm:grid-cols-2">
            {TE_GUIDES.map((g, i) => (
              <Reveal as="li" key={g.slug} delay={i * 60}>
                <Link
                  to={`/te/guides/${g.slug}`}
                  className="group flex h-full items-start gap-3 rounded-2xl bg-white p-5 ring-1 ring-slate-200/80 transition-all hover:-translate-y-0.5 hover:shadow-lift hover:ring-brand-200"
                >
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-brand-500" aria-hidden="true" />
                  <span className="font-bold leading-snug text-ink group-hover:text-brand-700">{g.title}</span>
                </Link>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <WhyUs />
      <AreasStrip />

      <section className="py-20 lg:py-24">
        <div className="container-page max-w-4xl">
          <SectionHeading center eyebrow={t.faq} title="మీరు ఎక్కువగా అడిగే ప్రశ్నలు" />
          <FaqList faqs={TE_HOME.faq} className="mt-10" />
        </div>
      </section>

      <CtaBand />
    </div>
  );
}
