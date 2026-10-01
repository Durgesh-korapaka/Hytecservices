import { Link } from "react-router-dom";
import { CheckCircle2, Wrench } from "lucide-react";
import type { TeAppliance } from "@/data/types";
import { APPLIANCE_BY_KEY } from "@/data/appliances";
import { brandPageSlug, brandsFor } from "@/data/brands";
import { OFFERINGS } from "@/data/offerings";
import { TE_GUIDES } from "@/data/te-guides";
import { GUIDES } from "@/data/guides";
import { ILLUSTRATION } from "@/components/illustrations/Illustrations";
import { QuickAnswer, SectionHeading } from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import FaqList from "@/components/ui/FaqList";
import ProblemPicker from "@/components/sections/ProblemPicker";
import { AreasStrip, CtaBand, HowItWorks, PageHero, TrustChips } from "@/components/sections/Sections";
import { APPLIANCE_NAME_TE, UI } from "@/i18n/ui";

const t = UI.te;

export default function TeAppliancePage({ page }: { page: TeAppliance }) {
  const a = APPLIANCE_BY_KEY[page.key];
  const Art = ILLUSTRATION[page.key];
  const name = APPLIANCE_NAME_TE[page.key];
  const teGuides = TE_GUIDES.filter((g) => GUIDES.find((x) => x.slug === g.slug)?.appliance === page.key);
  const msg = `నమస్తే, మా ${name} రిపేర్ కావాలి. విజయవాడలో మా ఇంటికి టెక్నీషియన్ ని పంపించండి.`;

  return (
    <div lang="te" className="font-telugu">
      <PageHero
        crumbs={[{ name: page.title }]}
        eyebrow={`${name} రిపేర్ · అన్ని బ్రాండ్లు`}
        title={page.title}
        intro={page.intro}
        art={<Art className="w-full" />}
        whatsappMessage={msg}
      >
        <TrustChips />
        <p className="mt-5 text-sm">
          <Link to={`/${a.slug}`} hrefLang="en-IN" className="font-semibold text-brand-600 underline-offset-4 hover:underline">
            Read in English →
          </Link>
        </p>
      </PageHero>

      <section className="py-14 lg:py-16">
        <div className="container-page max-w-5xl">
          <QuickAnswer>{page.quickAnswer}</QuickAnswer>
        </div>
      </section>

      <ProblemPicker appliance={page.key} className="!pt-0" />

      <section className="bg-mist py-20 lg:py-24">
        <div className="container-page">
          <SectionHeading eyebrow="మేము చేసే పనులు" title={`${name} సర్వీసులు`} subtitle="ప్రతి పని మీ ఇంట్లోనే సరైన చెకింగ్ తో మొదలవుతుంది." />
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {page.services.map((s, i) => (
              <Reveal as="li" key={s.name} delay={(i % 4) * 90} className="card group p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-600 group-hover:text-white">
                  <Wrench className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="mt-4 text-lg font-bold leading-snug">{s.name}</h3>
                <p className="mt-1.5 text-[16px] leading-relaxed text-slate-600">{s.detail}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-20 lg:py-24">
        <div className="container-page grid gap-6 lg:grid-cols-2">
          <Reveal className="card p-7 sm:p-9">
            <h2 className="text-2xl font-extrabold">రోజూ రిపేర్ చేసే సమస్యలు</h2>
            <ul className="mt-6 grid gap-3">
              {page.problems.map((p) => (
                <li key={p} className="flex items-start gap-3 text-[16px] text-slate-700">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-brand-500" aria-hidden="true" />
                  {p}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={120} className="card p-7 sm:p-9">
            <h2 className="text-2xl font-extrabold">సమస్యలు — తెలుగులో వివరంగా</h2>
            <ul className="mt-5 grid gap-3">
              {teGuides.map((g) => (
                <li key={g.slug}>
                  <Link to={`/te/guides/${g.slug}`} className="block rounded-2xl bg-mist px-5 py-4 font-bold text-ink transition-colors hover:bg-brand-600 hover:text-white">
                    {g.title} →
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="mt-8 text-lg font-bold">రకాన్ని బట్టి / ప్రత్యేక సర్వీసులు (English)</h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {OFFERINGS.filter((o) => o.appliance === page.key).map((o) => (
                <li key={o.slug}>
                  <Link to={`/${o.slug}`} hrefLang="en-IN" className="inline-block rounded-full bg-brand-50 px-3.5 py-1.5 text-sm font-semibold text-brand-700 ring-1 ring-brand-100 hover:bg-brand-100">
                    {o.name}
                  </Link>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="bg-mist py-16">
        <div className="container-page">
          <h2 className="text-2xl font-extrabold">మేము రిపేర్ చేసే {name} బ్రాండ్లు</h2>
          <ul className="mt-5 flex flex-wrap gap-2">
            {brandsFor(page.key).map((b) => (
              <li key={b.slug}>
                <Link
                  to={`/${brandPageSlug(b.slug, page.key)}`}
                  hrefLang="en-IN"
                  className="inline-block rounded-full bg-white px-4 py-2 font-semibold text-slate-700 ring-1 ring-slate-200 hover:bg-brand-50 hover:text-brand-700"
                >
                  {b.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <HowItWorks />

      <section className="py-20 lg:py-24">
        <div className="container-page max-w-4xl">
          <SectionHeading center eyebrow={t.faq} title={`${name} రిపేర్ — మీ ప్రశ్నలు`} />
          <FaqList faqs={page.faq} className="mt-10" />
        </div>
      </section>

      <AreasStrip compact />
      <CtaBand title={`${name} పనిచేయడం లేదా? ఈరోజే రిపేర్ చేయిద్దాం.`} message={msg} />
    </div>
  );
}
