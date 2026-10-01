import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, MapPin } from "lucide-react";
import { BUSINESS, CITY_AREAS, HOURS, NEARBY_AREAS, SERVICE_RADIUS_KM, whatsappLink } from "@/config/site";
import { AREA_PAGES } from "@/data/areaPages";
import { APPLIANCES, APPLIANCE_LABEL, lc } from "@/data/appliances";
import { BRANDS, brandPageSlug } from "@/data/brands";
import { GUIDES } from "@/data/guides";
import { OFFERINGS } from "@/data/offerings";
import { ILLUSTRATION, AcIllustration, WasherIllustration } from "@/components/illustrations/Illustrations";
import { QuickAnswer, SectionHeading } from "@/components/ui/Section";
import { TextLink } from "@/components/ui/Buttons";
import Reveal from "@/components/ui/Reveal";
import { BrandMarquee, CtaBand, HowItWorks, PageHero, TrustChips, WhyUs, areaPageFor } from "@/components/sections/Sections";

/* ------------------------------------------------------------------ */

export function ServicesHub() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "Services" }]}
        eyebrow="All services"
        title={
          <>
            Appliance Repair Services in <span className="text-gradient">Vijayawada</span>
          </>
        }
        telugu="AC, ఫ్రిజ్, వాషింగ్ మెషిన్ — అన్ని బ్రాండ్లకు సర్వీస్"
        intro="Repair, servicing, gas filling, installation and maintenance for air conditioners, refrigerators and washing machines — every major brand, at your home."
        art={<AcIllustration className="w-full" />}
      >
        <TrustChips />
      </PageHero>

      <div className="container-page space-y-8 py-16 lg:py-24">
        {APPLIANCES.map((a, i) => {
          const Art = ILLUSTRATION[a.key];
          return (
            <Reveal key={a.key} as="section" className={`card grid overflow-hidden lg:grid-cols-[360px_1fr] ${i % 2 ? "lg:grid-cols-[1fr_360px]" : ""}`}>
              <Link
                to={`/${a.slug}`}
                className={`flex items-center justify-center bg-gradient-to-br from-brand-50 via-ice-50 to-white p-10 ${i % 2 ? "lg:order-2" : ""}`}
              >
                <Art className="h-52 w-auto transition-transform duration-500 hover:scale-105" />
              </Link>
              <div className="p-7 sm:p-10">
                <h2 className="text-3xl font-extrabold">
                  <Link to={`/${a.slug}`} className="hover:text-brand-700">
                    {a.title}
                  </Link>
                </h2>
                <p lang="te" className="mt-1 font-telugu font-semibold text-brand-600">
                  {a.telugu}
                </p>
                <p className="mt-4 text-[17px] leading-relaxed text-slate-600">{a.quickAnswer}</p>
                <ul className="mt-6 grid gap-x-6 gap-y-2.5 sm:grid-cols-2">
                  {a.services.map((s) => (
                    <li key={s.name} className="flex items-start gap-2.5 text-[15px] font-semibold text-slate-700">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-500" aria-hidden="true" />
                      {s.name}
                    </li>
                  ))}
                </ul>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {OFFERINGS.filter((o) => o.appliance === a.key).map((o) => (
                    <li key={o.slug}>
                      <Link
                        to={`/${o.slug}`}
                        className="inline-block rounded-full bg-brand-50 px-3.5 py-1.5 text-sm font-bold text-brand-700 ring-1 ring-brand-100 transition-colors hover:bg-brand-600 hover:text-white"
                      >
                        {o.name}
                      </Link>
                    </li>
                  ))}
                </ul>
                <TextLink to={`/${a.slug}`} className="mt-7">
                  See {lc(a.name)} repair details
                </TextLink>
              </div>
            </Reveal>
          );
        })}
      </div>

      <HowItWorks />
      <CtaBand />
    </>
  );
}

/* ------------------------------------------------------------------ */

export function BrandsHub() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "Brands" }]}
        eyebrow="Multi-brand repair"
        title={
          <>
            Brands We Repair in <span className="text-gradient">Vijayawada</span>
          </>
        }
        intro="From LG and Samsung to IFB, Voltas, Daikin and O General — our technicians repair every major AC, refrigerator and washing machine brand sold in India."
        art={<WasherIllustration className="w-full" />}
      />
      <BrandMarquee />
      <section className="py-16 lg:py-24">
        <div className="container-page grid gap-6 lg:grid-cols-3">
          {APPLIANCES.map((a, i) => {
            const Art = ILLUSTRATION[a.key];
            const list = BRANDS.filter((b) => b.appliances.includes(a.key));
            return (
              <Reveal key={a.key} delay={i * 100} className="card p-6 sm:p-7">
                <div className="flex items-center gap-3">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-50">
                    <Art className="h-11 w-auto" />
                  </span>
                  <h2 className="text-xl font-extrabold">{APPLIANCE_LABEL[a.key]} brands</h2>
                </div>
                <ul className="mt-5 grid grid-cols-2 gap-2">
                  {list.map((b) => (
                    <li key={b.slug}>
                      <Link
                        to={`/${brandPageSlug(b.slug, a.key)}`}
                        className="group flex items-center justify-between rounded-xl bg-mist px-3.5 py-3 font-bold text-slate-700 transition-colors hover:bg-brand-600 hover:text-white"
                      >
                        {b.name}
                        <ArrowRight className="h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100" aria-hidden="true" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </Reveal>
            );
          })}
        </div>
        <p className="container-page mt-10 text-sm text-slate-500">
          We are an independent multi-brand service and not an authorised service centre of any manufacturer. Brand names are
          trademarks of their owners.
        </p>
      </section>
      <CtaBand />
    </>
  );
}

/* ------------------------------------------------------------------ */

export function GuidesHub() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "Problem guides" }]}
        eyebrow="Free help"
        title="Appliance Problem Guides"
        intro="Plain-language guides to the most common AC, fridge and washing machine problems: what causes them, what you can safely check at home, and when it's time to call a technician."
        art={<AcIllustration className="w-full" />}
      />
      <div className="container-page space-y-14 py-16 lg:py-24">
        {APPLIANCES.map((a) => {
          const Art = ILLUSTRATION[a.key];
          return (
            <section key={a.key}>
              <div className="flex items-center gap-3">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-50">
                  <Art className="h-11 w-auto" />
                </span>
                <h2 className="text-2xl font-extrabold sm:text-3xl">{a.name} problems</h2>
              </div>
              <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {GUIDES.filter((g) => g.appliance === a.key).map((g, i) => (
                  <Reveal as="li" key={g.slug} delay={i * 70}>
                    <Link
                      to={`/guides/${g.slug}`}
                      className="group card flex h-full flex-col p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
                    >
                      <h3 className="text-lg font-bold leading-snug group-hover:text-brand-700">{g.title}</h3>
                      <p className="mt-2 line-clamp-3 text-[15px] leading-relaxed text-slate-600">{g.quickAnswer}</p>
                      <span className="mt-auto pt-4 text-sm font-bold text-brand-600">Read guide →</span>
                    </Link>
                  </Reveal>
                ))}
              </ul>
            </section>
          );
        })}
      </div>
      <CtaBand />
    </>
  );
}

/* ------------------------------------------------------------------ */

function LocalityGrid({ names }: { names: readonly string[] }) {
  return (
    <ul className="mt-6 grid grid-cols-1 gap-3 min-[480px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {names.map((area, i) => {
        const page = areaPageFor(area);
        const inner = (
          <>
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600 group-hover:bg-brand-600 group-hover:text-white">
              <MapPin className="h-5 w-5" aria-hidden="true" />
            </span>
            <span className="min-w-0">
              <span className="block break-words font-bold text-ink">{area}</span>
              <span className="block text-xs text-slate-500">{page ? "View local page →" : "Book on WhatsApp →"}</span>
            </span>
          </>
        );
        const cls =
          "group flex h-full items-center gap-3 rounded-2xl bg-white p-4 ring-1 ring-slate-200/80 transition-all hover:-translate-y-0.5 hover:shadow-lift hover:ring-brand-200";
        return (
          <Reveal as="li" key={area} delay={(i % 4) * 60}>
            {page ? (
              <Link to={`/areas/${page.slug}`} className={cls}>
                {inner}
              </Link>
            ) : (
              <a
                href={whatsappLink(`Hi, I need appliance repair in ${area}, near Vijayawada.`)}
                target="_blank"
                rel="noopener noreferrer"
                className={cls}
              >
                {inner}
              </a>
            )}
          </Reveal>
        );
      })}
    </ul>
  );
}

export function Areas() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "Areas we serve" }]}
        eyebrow={`Vijayawada + ${SERVICE_RADIUS_KM} km`}
        title={
          <>
            Areas We Serve in &amp; Around <span className="text-gradient">Vijayawada</span>
          </>
        }
        telugu="విజయవాడ మరియు చుట్టుపక్కల 20 కి.మీ. వరకు ఇంటి వద్దే సర్వీస్"
        intro={`Our technicians cover every part of Vijayawada and towns up to about ${SERVICE_RADIUS_KM} km away — Gannavaram, Tadepalli, Mangalagiri, Ibrahimpatnam, Kondapalli, Kankipadu and more. ${HOURS.display}.`}
        art={<AcIllustration className="w-full" />}
      >
        <TrustChips />
      </PageHero>
      <section className="py-14">
        <div className="container-page max-w-5xl">
          <QuickAnswer>
            {BUSINESS.name} provides doorstep AC, refrigerator and washing machine repair across Vijayawada — including{" "}
            {CITY_AREAS.slice(0, 6).join(", ")} — and in surrounding towns within about {SERVICE_RADIUS_KM} km such as{" "}
            {["Gannavaram", "Tadepalli", "Mangalagiri", "Ibrahimpatnam", "Kankipadu"].join(", ")}. Call or WhatsApp {BUSINESS.phoneDisplay}.
          </QuickAnswer>
        </div>
      </section>

      <section className="pb-16">
        <div className="container-page">
          <SectionHeading eyebrow="Local pages" title="Popular service areas" />
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {AREA_PAGES.map((a, i) => (
              <Reveal as="li" key={a.slug} delay={(i % 3) * 90}>
                <Link
                  to={`/areas/${a.slug}`}
                  className="group card flex h-full flex-col p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
                >
                  <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-600">
                    <MapPin className="h-4 w-4" aria-hidden="true" />
                    {a.zone === "city" ? "Vijayawada city" : "Near Vijayawada"}
                  </span>
                  <h3 className="mt-2 text-xl font-extrabold group-hover:text-brand-700">{a.name}</h3>
                  <p className="mt-2 line-clamp-3 text-[15px] leading-relaxed text-slate-600">{a.intro}</p>
                  <span className="mt-auto pt-4 text-sm font-bold text-brand-600">AC · Fridge · Washing machine repair →</span>
                </Link>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-mist py-16 lg:py-20">
        <div className="container-page space-y-12">
          <div>
            <h2 className="text-2xl font-extrabold sm:text-3xl">Vijayawada city localities</h2>
            <LocalityGrid names={CITY_AREAS} />
          </div>
          <div>
            <h2 className="text-2xl font-extrabold sm:text-3xl">Towns & villages within {SERVICE_RADIUS_KM} km</h2>
            <LocalityGrid names={NEARBY_AREAS} />
          </div>
        </div>
      </section>
      <WhyUs />
      <CtaBand />
    </>
  );
}
