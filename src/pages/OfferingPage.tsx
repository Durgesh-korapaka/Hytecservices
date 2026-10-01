import { Link } from "react-router-dom";
import { AlertTriangle, CheckCircle2, Leaf, Wrench } from "lucide-react";
import type { Offering } from "@/data/types";
import { APPLIANCE_BY_KEY, APPLIANCE_LABEL, lc } from "@/data/appliances";
import { brandPageSlug, brandsFor } from "@/data/brands";
import { OFFERINGS } from "@/data/offerings";
import { ILLUSTRATION } from "@/components/illustrations/Illustrations";
import { QuickAnswer, SectionHeading } from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import FaqList from "@/components/ui/FaqList";
import { AreasStrip, CtaBand, GuideLinks, HowItWorks, PageHero, TrustChips } from "@/components/sections/Sections";

export default function OfferingPage({ offering: o }: { offering: Offering }) {
  const a = APPLIANCE_BY_KEY[o.appliance];
  const Art = ILLUSTRATION[o.appliance];
  const siblings = OFFERINGS.filter((x) => x.appliance === o.appliance && x.slug !== o.slug);
  const msg = `Hi, I need ${lc(o.name)} at my home in Vijayawada.`;

  return (
    <>
      <PageHero
        crumbs={[{ name: "Services", path: "/services" }, { name: a.title.replace(" in Vijayawada", ""), path: `/${a.slug}` }, { name: o.name }]}
        eyebrow={o.kind === "service" ? `${APPLIANCE_LABEL[o.appliance]} service` : `${APPLIANCE_LABEL[o.appliance]} type`}
        title={o.title}
        telugu={o.telugu}
        intro={o.intro}
        art={<Art className="w-full" />}
        whatsappMessage={msg}
      >
        <TrustChips />
      </PageHero>

      <section className="py-14 lg:py-20">
        <div className="container-page max-w-5xl">
          <QuickAnswer>{o.quickAnswer}</QuickAnswer>
        </div>
      </section>

      <section className="pb-20 lg:pb-24">
        <div className="container-page">
          <SectionHeading
            eyebrow={o.kind === "service" ? "What's included" : "What we repair"}
            title={o.kind === "service" ? `${o.name} — what's included` : `${o.name}: parts & faults we fix`}
          />
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {o.highlights.map((h, i) => (
              <Reveal as="li" key={h.name} delay={(i % 4) * 90} className="card group p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-600 group-hover:text-white">
                  <Wrench className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="mt-4 text-lg font-bold">{h.name}</h3>
                <p className="mt-1.5 text-[15px] leading-relaxed text-slate-600">{h.detail}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {o.process && o.process.length > 0 && (
        <section className="bg-brand-950 py-20 text-white lg:py-24">
          <div className="container-page">
            <Reveal>
              <p className="eyebrow !bg-white/10 !text-ice-300 !ring-white/20">How we do it</p>
              <h2 className="mt-4 max-w-3xl text-3xl font-extrabold text-white sm:text-4xl">How our technician does {lc(o.name)}</h2>
            </Reveal>
            <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {o.process.map((step, i) => (
                <Reveal as="li" key={step} delay={i * 90} className="flex gap-4 rounded-3xl bg-white/5 p-6 ring-1 ring-white/10">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 to-ice-400 text-lg font-extrabold">
                    {i + 1}
                  </span>
                  <p className="text-[16px] leading-relaxed text-brand-50">{step}</p>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>
      )}

      <section className="bg-mist py-20 lg:py-24">
        <div className="container-page grid gap-6 lg:grid-cols-2">
          <Reveal className="card p-7 sm:p-9">
            <h2 className="text-2xl font-extrabold sm:text-3xl">Common problems we fix</h2>
            <ul className="mt-6 grid gap-3">
              {o.problems.map((p) => (
                <li key={p} className="flex items-start gap-3 text-[16px] text-slate-700">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-500" aria-hidden="true" />
                  {p}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={120} className="rounded-3xl bg-emerald-50/80 p-7 ring-1 ring-emerald-200 sm:p-9">
            <h2 className="flex items-center gap-2 text-2xl font-extrabold">
              <Leaf className="h-6 w-6 text-emerald-600" aria-hidden="true" />
              Care tips to avoid breakdowns
            </h2>
            <ul className="mt-6 space-y-3">
              {o.tips.map((t) => (
                <li key={t} className="flex items-start gap-3 text-[16px] text-slate-800">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-emerald-500" aria-hidden="true" />
                  {t}
                </li>
              ))}
            </ul>
            <p className="mt-6 flex items-start gap-2 rounded-2xl bg-white/80 p-4 text-sm text-slate-600">
              <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-sun-600" aria-hidden="true" />
              Switch off power before any cleaning. Leave gas, wiring and internal parts to a technician.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-20 lg:py-24">
        <div className="container-page">
          <h2 className="text-2xl font-extrabold sm:text-3xl">{APPLIANCE_LABEL[o.appliance]} brands we repair</h2>
          <ul className="mt-6 flex flex-wrap gap-2">
            {brandsFor(o.appliance).map((b) => (
              <li key={b.slug}>
                <Link
                  to={`/${brandPageSlug(b.slug, o.appliance)}`}
                  className="inline-block rounded-full bg-white px-4 py-2 font-semibold text-slate-700 ring-1 ring-slate-200 transition-colors hover:bg-brand-50 hover:text-brand-700 hover:ring-brand-200"
                >
                  {b.name} {APPLIANCE_LABEL[o.appliance]}
                </Link>
              </li>
            ))}
          </ul>

          {siblings.length > 0 && (
            <>
              <h2 className="mt-14 text-2xl font-extrabold sm:text-3xl">More {lc(a.name)} services</h2>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {siblings.map((s, i) => (
                  <Reveal as="li" key={s.slug} delay={i * 50}>
                    <Link
                      to={`/${s.slug}`}
                      className="group flex h-full flex-col rounded-2xl bg-white p-4 ring-1 ring-slate-200/80 transition-all hover:-translate-y-0.5 hover:shadow-lift hover:ring-brand-200"
                    >
                      <span className="font-bold text-ink group-hover:text-brand-700">{s.name}</span>
                      <span className="mt-1 text-sm text-slate-500">{s.kind === "service" ? "Service" : "Repair"} in Vijayawada →</span>
                    </Link>
                  </Reveal>
                ))}
              </ul>
            </>
          )}
        </div>
      </section>

      {o.relatedGuides.length > 0 && (
        <section className="bg-mist py-20 lg:py-24">
          <div className="container-page">
            <GuideLinks appliance={o.appliance} title="Troubleshooting guides" />
          </div>
        </section>
      )}

      <HowItWorks />

      <section className="py-20 lg:py-24">
        <div className="container-page max-w-4xl">
          <SectionHeading center eyebrow="FAQ" title={`${o.name} — FAQs`} />
          <FaqList faqs={o.faq} className="mt-10" />
        </div>
      </section>

      <AreasStrip compact />
      <CtaBand title={`Need ${lc(o.name)}? Book a technician today.`} message={msg} />
    </>
  );
}
