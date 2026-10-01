import { Link } from "react-router-dom";
import { CheckCircle2, Cpu, Info, Wrench } from "lucide-react";
import { APPLIANCE_BY_KEY, APPLIANCE_LABEL, lc } from "@/data/appliances";
import { BRAND_PAGES, brandPageSlug, type BrandPage as BrandPageData } from "@/data/brands";
import { brandFaqs, brandPageTitle, brandQuickAnswer } from "@/data/content";
import { ILLUSTRATION } from "@/components/illustrations/Illustrations";
import { QuickAnswer, SectionHeading } from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import FaqList from "@/components/ui/FaqList";
import { CtaBand, GuideLinks, PageHero, TrustChips } from "@/components/sections/Sections";

export default function BrandPage({ page }: { page: BrandPageData }) {
  const { brand, appliance } = page;
  const a = APPLIANCE_BY_KEY[appliance];
  const label = APPLIANCE_LABEL[appliance];
  const Art = ILLUSTRATION[appliance];
  const title = brandPageTitle(page);
  const codes = brand.errorCodes?.[appliance] ?? [];
  const models = brand.models[appliance] ?? [];
  const otherAppliances = brand.appliances.filter((k) => k !== appliance);
  const otherBrands = BRAND_PAGES.filter((p) => p.appliance === appliance && p.brand.slug !== brand.slug);
  const msg = `Hi, I need ${brand.name} ${label} repair at my home in Vijayawada.`;

  return (
    <>
      <PageHero
        crumbs={[{ name: "Brands", path: "/brands" }, { name: title }]}
        eyebrow={`${brand.name} · ${a.longName} specialists`}
        title={
          <>
            {brand.name} {label} Repair in <span className="text-gradient">Vijayawada</span>
          </>
        }
        intro={brand.notes[appliance]}
        art={<Art className="w-full" />}
        whatsappMessage={msg}
      >
        <TrustChips />
      </PageHero>

      <section className="py-14 lg:py-20">
        <div className="container-page max-w-5xl">
          <QuickAnswer>{brandQuickAnswer(page)}</QuickAnswer>
        </div>
      </section>

      <section className="pb-20 lg:pb-24">
        <div className="container-page grid gap-6 lg:grid-cols-2">
          <Reveal className="card p-7 sm:p-9">
            <h2 className="text-2xl font-extrabold">
              {brand.name} {lc(label)} models we service
            </h2>
            <ul className="mt-5 flex flex-wrap gap-2">
              {models.map((m) => (
                <li key={m} className="rounded-full bg-brand-50 px-4 py-2 text-[15px] font-semibold text-brand-800 ring-1 ring-brand-100">
                  {brand.name} {m}
                </li>
              ))}
            </ul>
            <h3 className="mt-8 text-lg font-bold">Common {brand.name} {lc(label)} problems</h3>
            <ul className="mt-4 grid gap-2.5">
              {a.problems.map((p) => (
                <li key={p} className="flex items-start gap-2.5 text-[15px] text-slate-700">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-500" aria-hidden="true" />
                  {p}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={120} className="card p-7 sm:p-9">
            <h2 className="text-2xl font-extrabold">
              {brand.name} {lc(label)} repairs we do
            </h2>
            <ul className="mt-5 grid gap-4">
              {a.services.map((s) => (
                <li key={s.name} className="flex items-start gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                    <Wrench className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block font-bold text-ink">
                      {brand.name} {s.name}
                    </span>
                    <span className="block text-[15px] text-slate-600">{s.detail}</span>
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {codes.length > 0 && (
        <section className="bg-mist py-20 lg:py-24">
          <div className="container-page max-w-5xl">
            <SectionHeading
              eyebrow="Error codes"
              title={`${brand.name} ${lc(label)} error codes & meanings`}
              subtitle="Seeing a code on the display? Here's what the common ones usually mean. Exact meanings vary by model — share the code with us on WhatsApp and we'll advise."
            />
            <Reveal className="mt-10 overflow-hidden rounded-3xl bg-white shadow-soft ring-1 ring-slate-200/70">
              <table className="w-full text-left">
                <caption className="sr-only">
                  {brand.name} {label} error codes
                </caption>
                <thead className="bg-brand-950 text-sm uppercase tracking-wider text-brand-100">
                  <tr>
                    <th scope="col" className="px-5 py-4 sm:px-7">
                      Code
                    </th>
                    <th scope="col" className="px-5 py-4 sm:px-7">
                      Usual meaning
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {codes.map((c) => (
                    <tr key={c.code} className="transition-colors hover:bg-brand-50/50">
                      <th scope="row" className="whitespace-nowrap px-5 py-4 font-mono text-lg font-bold text-brand-700 sm:px-7">
                        <span className="inline-flex items-center gap-2">
                          <Cpu className="h-4 w-4 text-brand-400" aria-hidden="true" />
                          {c.code}
                        </span>
                      </th>
                      <td className="px-5 py-4 text-[16px] text-slate-700 sm:px-7">{c.meaning}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Reveal>
          </div>
        </section>
      )}

      <section className="py-20 lg:py-24">
        <div className="container-page">
          <GuideLinks appliance={appliance} title={`Troubleshooting your ${brand.name} ${lc(label)}`} />
        </div>
      </section>

      <section className="bg-mist py-20 lg:py-24">
        <div className="container-page max-w-4xl">
          <SectionHeading center eyebrow="FAQ" title={`${brand.name} ${label} repair — FAQs`} />
          <FaqList faqs={brandFaqs(page)} className="mt-10" />
        </div>
      </section>

      <section className="py-16">
        <div className="container-page grid gap-10 lg:grid-cols-2">
          {otherAppliances.length > 0 && (
            <div>
              <h2 className="text-xl font-extrabold">Other {brand.name} appliances we repair</h2>
              <ul className="mt-4 flex flex-wrap gap-2">
                {otherAppliances.map((k) => (
                  <li key={k}>
                    <Link to={`/${brandPageSlug(brand.slug, k)}`} className="inline-block rounded-full bg-white px-4 py-2 font-semibold text-brand-700 ring-1 ring-brand-200 hover:bg-brand-50">
                      {brand.name} {APPLIANCE_LABEL[k]} Repair
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
          <div>
            <h2 className="text-xl font-extrabold">Other {lc(label)} brands</h2>
            <ul className="mt-4 flex flex-wrap gap-2">
              {otherBrands.map((p) => (
                <li key={p.slug}>
                  <Link to={`/${p.slug}`} className="inline-block rounded-full bg-white px-4 py-2 font-semibold text-slate-700 ring-1 ring-slate-200 hover:bg-brand-50 hover:text-brand-700">
                    {p.brand.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link to={`/${a.slug}`} className="inline-block rounded-full bg-brand-600 px-4 py-2 font-semibold text-white hover:bg-brand-700">
                  All {label} repair →
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <p className="container-page mt-10 flex items-start gap-2 text-sm text-slate-500">
          <Info className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
          AV Appliance Services is an independent repair service, not an authorised {brand.name} service centre. {brand.name} is a
          trademark of its respective owner and is used here only to describe the appliances we repair.
        </p>
      </section>

      <CtaBand title={`${brand.name} ${lc(label)} not working? We'll fix it.`} message={msg} />
    </>
  );
}
