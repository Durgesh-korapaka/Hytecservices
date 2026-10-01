import { Link } from "react-router-dom";
import { CheckCircle2, Home, MapPin, Navigation } from "lucide-react";
import type { AreaPage } from "@/data/types";
import { SERVICE_RADIUS_KM } from "@/config/site";
import { APPLIANCES, lc } from "@/data/appliances";
import { AREA_PAGES } from "@/data/areaPages";
import { OFFERINGS } from "@/data/offerings";
import { ILLUSTRATION, WasherIllustration } from "@/components/illustrations/Illustrations";
import { QuickAnswer, SectionHeading } from "@/components/ui/Section";
import { TextLink } from "@/components/ui/Buttons";
import Reveal from "@/components/ui/Reveal";
import FaqList from "@/components/ui/FaqList";
import { BrandMarquee, CtaBand, HowItWorks, PageHero, TrustChips, WhyUs } from "@/components/sections/Sections";

export default function AreaLocalPage({ area }: { area: AreaPage }) {
  const others = AREA_PAGES.filter((x) => x.slug !== area.slug);
  const msg = `Hi, I need appliance repair at my home in ${area.name}.`;

  return (
    <>
      <PageHero
        crumbs={[{ name: "Areas we serve", path: "/areas-we-serve" }, { name: area.name }]}
        eyebrow={area.zone === "city" ? "Vijayawada city" : `Within ${SERVICE_RADIUS_KM} km of Vijayawada`}
        title={
          <>
            AC, Fridge & Washing Machine Repair in <span className="text-gradient">{area.name}</span>
          </>
        }
        intro={area.intro}
        art={<WasherIllustration className="w-full" />}
        whatsappMessage={msg}
      >
        <TrustChips />
      </PageHero>

      <section className="py-14 lg:py-20">
        <div className="container-page max-w-5xl">
          <QuickAnswer>{area.quickAnswer}</QuickAnswer>
        </div>
      </section>

      {/* Appliances */}
      <section className="pb-20 lg:pb-24">
        <div className="container-page">
          <SectionHeading eyebrow="Services" title={`What we repair in ${area.name}`} subtitle="Doorstep repair, servicing and installation for every major brand." />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {APPLIANCES.map((a, i) => {
              const Art = ILLUSTRATION[a.key];
              const subs = OFFERINGS.filter((o) => o.appliance === a.key);
              return (
                <Reveal key={a.key} delay={i * 110} className="card flex flex-col p-6 sm:p-7">
                  <div className="flex items-center gap-3">
                    <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-brand-50">
                      <Art className="h-11 w-auto" />
                    </span>
                    <h3 className="text-xl font-extrabold">
                      {a.name} repair in {area.name}
                    </h3>
                  </div>
                  <ul className="mt-5 grid gap-2">
                    {subs.map((o) => (
                      <li key={o.slug}>
                        <Link to={`/${o.slug}`} className="flex items-start gap-2.5 text-[15px] font-semibold text-slate-700 hover:text-brand-700">
                          <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-500" aria-hidden="true" />
                          {o.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <TextLink to={`/${a.slug}`} className="mt-auto pt-6">
                    All {lc(a.name)} services
                  </TextLink>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Local notes + nearby */}
      <section className="bg-mist py-20 lg:py-24">
        <div className="container-page grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <SectionHeading eyebrow="Local know-how" title={`Serving homes in ${area.name}`} />
            <ul className="mt-10 grid gap-4">
              {area.notes.map((n, i) => (
                <Reveal as="li" key={n.title} delay={i * 100} className="card flex gap-4 p-6">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-600 text-white shadow-glow">
                    <Home className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="text-lg font-bold">{n.title}</h3>
                    <p className="mt-1.5 text-[16px] leading-relaxed text-slate-600">{n.text}</p>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
          <Reveal delay={150} className="card self-start p-7">
            <h2 className="flex items-center gap-2 text-xl font-extrabold">
              <Navigation className="h-5 w-5 text-brand-600" aria-hidden="true" />
              Also covering nearby
            </h2>
            <ul className="mt-5 flex flex-wrap gap-2">
              {area.nearby.map((n) => (
                <li key={n} className="inline-flex items-center gap-1.5 rounded-full bg-brand-50 px-3.5 py-2 text-[15px] font-semibold text-brand-800 ring-1 ring-brand-100">
                  <MapPin className="h-4 w-4 text-brand-500" aria-hidden="true" />
                  {n}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm leading-relaxed text-slate-500">
              We cover all of Vijayawada and places up to about {SERVICE_RADIUS_KM} km around it. Not sure about your street? Just call or
              WhatsApp us.
            </p>
          </Reveal>
        </div>
      </section>

      <BrandMarquee />
      <HowItWorks />

      <section className="py-20 lg:py-24">
        <div className="container-page max-w-4xl">
          <SectionHeading center eyebrow="FAQ" title={`Appliance repair in ${area.name} — FAQs`} />
          <FaqList faqs={area.faq} className="mt-10" />
        </div>
      </section>

      <WhyUs />

      <section className="py-16">
        <div className="container-page">
          <h2 className="text-2xl font-extrabold">Other areas we serve</h2>
          <ul className="mt-5 flex flex-wrap gap-2">
            {others.map((x) => (
              <li key={x.slug}>
                <Link
                  to={`/areas/${x.slug}`}
                  className="inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-2 font-semibold text-slate-700 ring-1 ring-slate-200 hover:bg-brand-50 hover:text-brand-700"
                >
                  <MapPin className="h-4 w-4 text-brand-500" aria-hidden="true" />
                  {x.name}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/areas-we-serve" className="inline-block rounded-full bg-brand-600 px-4 py-2 font-semibold text-white hover:bg-brand-700">
                All areas →
              </Link>
            </li>
          </ul>
        </div>
      </section>

      <CtaBand title={`Appliance trouble in ${area.name}? We'll come to you.`} message={msg} />
    </>
  );
}
