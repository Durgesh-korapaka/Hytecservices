import { Link } from "react-router-dom";
import { AlertOctagon, CheckCircle2, Eye, Hand, PhoneCall, ShieldAlert, UserCog } from "lucide-react";
import type { Guide } from "@/data/types";
import { APPLIANCE_BY_KEY, lc } from "@/data/appliances";
import { brandPageSlug, brandsFor } from "@/data/brands";
import { GUIDES } from "@/data/guides";
import { LAST_UPDATED } from "@/config/site";
import { ILLUSTRATION } from "@/components/illustrations/Illustrations";
import { QuickAnswer, SectionHeading } from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import FaqList from "@/components/ui/FaqList";
import { CallButton, WhatsAppButton } from "@/components/ui/Buttons";
import { CtaBand, PageHero, guideLabel } from "@/components/sections/Sections";

export default function GuidePage({ guide: g }: { guide: Guide }) {
  const a = APPLIANCE_BY_KEY[g.appliance];
  const Art = ILLUSTRATION[g.appliance];
  const related = g.related.map((s) => GUIDES.find((x) => x.slug === s)).filter(Boolean) as Guide[];
  const msg = `Hi, my ${lc(a.name)} has a problem: ${guideLabel(g.title)}. Can you send a technician in Vijayawada?`;

  return (
    <>
      <PageHero
        crumbs={[{ name: "Problem guides", path: "/guides" }, { name: guideLabel(g.title) }]}
        eyebrow={`${a.name} problem guide`}
        title={g.title}
        art={<Art className="w-full" />}
        whatsappMessage={msg}
      >
        <p className="mt-5 text-sm text-slate-500">
          Updated <time dateTime={LAST_UPDATED}>{new Date(LAST_UPDATED).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}</time> ·
          By AV Appliance Services, Vijayawada
        </p>
      </PageHero>

      <article className="container-page grid gap-12 py-14 lg:grid-cols-[1fr_320px] lg:py-20">
        <div className="min-w-0 space-y-14">
          <QuickAnswer>{g.quickAnswer}</QuickAnswer>

          <section>
            <h2 className="flex items-center gap-2 text-2xl font-extrabold sm:text-3xl">
              <Eye className="h-6 w-6 text-brand-600" aria-hidden="true" />
              Signs you may notice
            </h2>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {g.symptoms.map((s, i) => (
                <Reveal as="li" key={s} delay={i * 60} className="flex items-start gap-3 rounded-2xl bg-mist p-4 text-[16px] text-slate-700">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-500" aria-hidden="true" />
                  {s}
                </Reveal>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold sm:text-3xl">Common causes (most likely first)</h2>
            <ol className="mt-6 space-y-4">
              {g.causes.map((c, i) => (
                <Reveal as="li" key={c.title} delay={i * 60} className="card flex gap-4 p-5 sm:p-6">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-brand-600 text-lg font-extrabold text-white">
                    {i + 1}
                  </span>
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-lg font-bold">{c.title}</h3>
                      {c.fix === "diy" ? (
                        <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-bold text-emerald-700 ring-1 ring-emerald-200">
                          <Hand className="h-3 w-3" aria-hidden="true" /> You can check
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 rounded-full bg-brand-50 px-2.5 py-0.5 text-xs font-bold text-brand-700 ring-1 ring-brand-200">
                          <UserCog className="h-3 w-3" aria-hidden="true" /> Needs technician
                        </span>
                      )}
                    </div>
                    <p className="mt-1.5 text-[16px] leading-relaxed text-slate-600">{c.detail}</p>
                  </div>
                </Reveal>
              ))}
            </ol>
          </section>

          <section className="rounded-3xl bg-emerald-50/70 p-6 ring-1 ring-emerald-200 sm:p-8">
            <h2 className="flex items-center gap-2 text-2xl font-extrabold">
              <Hand className="h-6 w-6 text-emerald-600" aria-hidden="true" />
              Safe checks you can do yourself
            </h2>
            <ol className="mt-5 space-y-3">
              {g.diyChecks.map((d, i) => (
                <li key={d} className="flex items-start gap-3 text-[16px] text-slate-800">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-600 text-sm font-bold text-white">{i + 1}</span>
                  {d}
                </li>
              ))}
            </ol>
            <p className="mt-5 flex items-start gap-2 rounded-2xl bg-white/80 p-4 text-sm text-slate-600">
              <ShieldAlert className="mt-0.5 h-4 w-4 shrink-0 text-sun-600" aria-hidden="true" />
              Always switch off and unplug the appliance before checking. Never open panels, touch wiring or try to refill gas
              yourself.
            </p>
          </section>

          <section className="rounded-3xl bg-brand-950 p-6 text-white sm:p-8">
            <h2 className="flex items-center gap-2 text-2xl font-extrabold text-white">
              <AlertOctagon className="h-6 w-6 text-sun-400" aria-hidden="true" />
              When to call a technician
            </h2>
            <ul className="mt-5 space-y-3">
              {g.whenToCall.map((w) => (
                <li key={w} className="flex items-start gap-3 text-[16px] text-brand-50">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-sun-400" aria-hidden="true" />
                  {w}
                </li>
              ))}
            </ul>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <CallButton className="!bg-white !text-brand-700 hover:!bg-brand-50" />
              <WhatsAppButton message={msg} />
            </div>
          </section>

          <section>
            <SectionHeading eyebrow="FAQ" title="Frequently asked questions" />
            <FaqList faqs={g.faq} className="mt-8" />
          </section>
        </div>

        {/* Sidebar */}
        <aside className="space-y-6 lg:sticky lg:top-32 lg:self-start">
          <div className="card overflow-hidden">
            <div className="flex items-center justify-center bg-gradient-to-br from-brand-50 to-ice-50 p-6">
              <Art className="h-28 w-auto" />
            </div>
            <div className="p-6">
              <p className="text-lg font-extrabold">Need it fixed today?</p>
              <p className="mt-1 text-[15px] text-slate-600">Doorstep {lc(a.name)} repair across Vijayawada.</p>
              <div className="mt-5 grid gap-2.5">
                <CallButton className="w-full" label="Call Now" />
                <WhatsAppButton className="w-full" message={msg} />
              </div>
              <Link to={`/${a.slug}`} className="mt-4 flex items-center justify-center gap-1.5 text-sm font-bold text-brand-600 hover:text-brand-800">
                <PhoneCall className="h-4 w-4" aria-hidden="true" /> {a.title}
              </Link>
            </div>
          </div>

          {related.length > 0 && (
            <div className="card p-6">
              <p className="text-sm font-bold uppercase tracking-wider text-slate-500">Related problems</p>
              <ul className="mt-3 divide-y divide-slate-100">
                {related.map((r) => (
                  <li key={r.slug}>
                    <Link to={`/guides/${r.slug}`} className="block py-3 font-semibold text-slate-700 hover:text-brand-700">
                      {guideLabel(r.title)} →
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="card p-6">
            <p className="text-sm font-bold uppercase tracking-wider text-slate-500">By brand</p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {brandsFor(g.appliance).map((b) => (
                <li key={b.slug}>
                  <Link to={`/${brandPageSlug(b.slug, g.appliance)}`} className="inline-block rounded-full bg-mist px-3 py-1.5 text-sm font-semibold text-slate-700 hover:bg-brand-50 hover:text-brand-700">
                    {b.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </article>

      <CtaBand message={msg} />
    </>
  );
}
