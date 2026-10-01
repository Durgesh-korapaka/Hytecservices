import { lc } from "@/data/appliances";
import { Link } from "react-router-dom";
import { AlertTriangle, CheckCircle2, Wrench } from "lucide-react";
import type { Appliance } from "@/data/types";
import { brandPageSlug, brandsFor } from "@/data/brands";
import { OFFERINGS } from "@/data/offerings";
import { ILLUSTRATION } from "@/components/illustrations/Illustrations";
import { QuickAnswer, SectionHeading } from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import FaqList from "@/components/ui/FaqList";
import ProblemPicker from "@/components/sections/ProblemPicker";
import { AreasStrip, CtaBand, GuideLinks, HowItWorks, PageHero, TrustChips } from "@/components/sections/Sections";

export default function AppliancePage({ appliance: a }: { appliance: Appliance }) {
  const Art = ILLUSTRATION[a.key];
  const brands = brandsFor(a.key);
  const types = OFFERINGS.filter((o) => o.appliance === a.key && o.kind === "type");
  const services = OFFERINGS.filter((o) => o.appliance === a.key && o.kind === "service");
  const msg = `Hi, I need ${a.name} repair at my home in Vijayawada.`;

  return (
    <>
      <PageHero
        crumbs={[{ name: "Services", path: "/services" }, { name: a.title }]}
        eyebrow={`${a.longName} repair · All brands`}
        title={a.title}
        telugu={a.telugu}
        intro={a.intro}
        art={<Art className="w-full" />}
        whatsappMessage={msg}
      >
        <TrustChips />
      </PageHero>

      <section className="py-14 lg:py-20">
        <div className="container-page max-w-5xl">
          <QuickAnswer>{a.quickAnswer}</QuickAnswer>
        </div>
      </section>

      <ProblemPicker appliance={a.key} className="!pt-0" />

      {/* Services grid */}
      <section className="pb-20 lg:pb-28">
        <div className="container-page">
          <SectionHeading eyebrow="What we do" title={`${a.name} services we offer`} subtitle={`Every ${lc(a.longName)} job starts with a proper diagnosis at your home.`} />
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {a.services.map((s, i) => (
              <Reveal as="li" key={s.name} delay={(i % 4) * 90} className="card group p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-600 group-hover:text-white">
                  <Wrench className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="mt-4 text-lg font-bold">{s.name}</h3>
                <p className="mt-1.5 text-[15px] leading-relaxed text-slate-600">{s.detail}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Type & service landing pages */}
      <section className="pb-20 lg:pb-24">
        <div className="container-page grid gap-6 lg:grid-cols-2">
          {[
            { label: `Repair by ${lc(a.name)} type`, list: types },
            { label: `Popular ${lc(a.name)} services`, list: services },
          ]
            .filter((g) => g.list.length > 0)
            .map((g, gi) => (
              <Reveal key={g.label} delay={gi * 120} className="card p-7 sm:p-9">
                <h2 className="text-2xl font-extrabold">{g.label}</h2>
                <ul className="mt-5 grid gap-3">
                  {g.list.map((o) => (
                    <li key={o.slug}>
                      <Link
                        to={`/${o.slug}`}
                        className="group flex items-center justify-between gap-3 rounded-2xl bg-mist px-5 py-4 transition-colors hover:bg-brand-600"
                      >
                        <span>
                          <span className="block font-bold text-ink group-hover:text-white">{o.name}</span>
                          <span className="mt-0.5 block text-sm text-slate-500 group-hover:text-brand-100">{o.problems.slice(0, 2).join(" · ")}</span>
                        </span>
                        <span className="text-brand-500 group-hover:text-white" aria-hidden="true">→</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
        </div>
      </section>

      {/* Problems + types */}
      <section className="bg-mist py-20 lg:py-28">
        <div className="container-page grid gap-10 lg:grid-cols-2">
          <Reveal className="card p-7 sm:p-9">
            <h2 className="text-2xl font-extrabold sm:text-3xl">Problems we fix every day</h2>
            <ul className="mt-6 grid gap-3">
              {a.problems.map((p) => (
                <li key={p} className="flex items-start gap-3 text-[16px] text-slate-700">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-500" aria-hidden="true" />
                  {p}
                </li>
              ))}
            </ul>
          </Reveal>
          <div className="grid gap-6">
            <Reveal delay={100} className="card p-7 sm:p-9">
              <h2 className="text-2xl font-extrabold">Types we repair</h2>
              <ul className="mt-5 flex flex-wrap gap-2">
                {a.types.map((t) => (
                  <li key={t} className="rounded-full bg-brand-50 px-4 py-2 text-[15px] font-semibold text-brand-800 ring-1 ring-brand-100">
                    {t}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={200} className="rounded-3xl bg-sun-100/70 p-7 ring-1 ring-sun-400/40 sm:p-9">
              <h2 className="flex items-center gap-2 text-xl font-extrabold">
                <AlertTriangle className="h-5 w-5 text-sun-600" aria-hidden="true" />
                Book a check-up if…
              </h2>
              <ul className="mt-4 space-y-2.5">
                {a.signs.map((s) => (
                  <li key={s} className="flex items-start gap-2.5 text-[15px] text-slate-800">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sun-600" aria-hidden="true" />
                    {s}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Brands */}
      <section className="py-20 lg:py-28">
        <div className="container-page">
          <SectionHeading eyebrow="Brands" title={`${a.name} brands we repair in Vijayawada`} subtitle="Pick your brand to see common faults and error codes." />
          <ul className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
            {brands.map((b, i) => (
              <Reveal as="li" key={b.slug} delay={(i % 5) * 60}>
                <Link
                  to={`/${brandPageSlug(b.slug, a.key)}`}
                  className="group flex h-full flex-col rounded-2xl bg-white p-4 ring-1 ring-slate-200/80 transition-all hover:-translate-y-0.5 hover:shadow-lift hover:ring-brand-200"
                >
                  <span className="text-lg font-extrabold text-ink group-hover:text-brand-700">{b.name}</span>
                  <span className="mt-0.5 text-sm text-slate-500">{a.name} repair →</span>
                </Link>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-mist py-20 lg:py-24">
        <div className="container-page">
          <GuideLinks appliance={a.key} title={`Common ${lc(a.name)} problems explained`} />
        </div>
      </section>

      <HowItWorks />

      <section className="py-20 lg:py-28">
        <div className="container-page max-w-4xl">
          <SectionHeading center eyebrow="FAQ" title={`${a.name} repair questions`} />
          <FaqList faqs={a.faq} className="mt-10" />
        </div>
      </section>

      <AreasStrip compact />
      <CtaBand title={`${a.name} giving trouble? Get it fixed today.`} message={msg} />
    </>
  );
}
