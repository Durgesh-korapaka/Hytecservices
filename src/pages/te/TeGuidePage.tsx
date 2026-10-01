import { Link } from "react-router-dom";
import { AlertOctagon, CheckCircle2, Eye, Hand, ShieldAlert, UserCog } from "lucide-react";
import type { TeGuide } from "@/data/types";
import { APPLIANCE_BY_KEY } from "@/data/appliances";
import { GUIDES } from "@/data/guides";
import { TE_GUIDES } from "@/data/te-guides";
import { ILLUSTRATION } from "@/components/illustrations/Illustrations";
import { QuickAnswer, SectionHeading } from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import FaqList from "@/components/ui/FaqList";
import { CallButton, WhatsAppButton } from "@/components/ui/Buttons";
import { CtaBand, PageHero } from "@/components/sections/Sections";
import { APPLIANCE_NAME_TE, UI } from "@/i18n/ui";

const t = UI.te;

export default function TeGuidePage({ guide: g }: { guide: TeGuide }) {
  const en = GUIDES.find((x) => x.slug === g.slug)!;
  const a = APPLIANCE_BY_KEY[en.appliance];
  const Art = ILLUSTRATION[en.appliance];
  const name = APPLIANCE_NAME_TE[en.appliance];
  const others = TE_GUIDES.filter((x) => x.slug !== g.slug);
  const shortTitle = g.title.split("?")[0];
  const msg = `నమస్తే, ${shortTitle}. విజయవాడలో మా ఇంటికి టెక్నీషియన్ ని పంపించండి.`;

  return (
    <div lang="te" className="font-telugu">
      <PageHero
        crumbs={[{ name: `${name} సమస్యలు`, path: `/te/${a.slug}` }, { name: shortTitle }]}
        eyebrow={`${name} సమస్య — తెలుగులో`}
        title={g.title}
        art={<Art className="w-full" />}
        whatsappMessage={msg}
      >
        <p className="mt-5 text-sm">
          <Link to={`/guides/${g.slug}`} hrefLang="en-IN" className="font-semibold text-brand-600 underline-offset-4 hover:underline">
            Read in English →
          </Link>
        </p>
      </PageHero>

      <article className="container-page grid gap-12 py-14 lg:grid-cols-[1fr_320px] lg:py-20">
        <div className="min-w-0 space-y-14">
          <QuickAnswer>{g.quickAnswer}</QuickAnswer>

          <section>
            <h2 className="flex items-center gap-2 text-2xl font-extrabold sm:text-3xl">
              <Eye className="h-6 w-6 text-brand-600" aria-hidden="true" />
              మీరు గమనించే లక్షణాలు
            </h2>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {g.symptoms.map((s, i) => (
                <Reveal as="li" key={s} delay={i * 60} className="flex items-start gap-3 rounded-2xl bg-mist p-4 text-[16px] text-slate-700">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-brand-500" aria-hidden="true" />
                  {s}
                </Reveal>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold sm:text-3xl">ఎక్కువగా కనిపించే కారణాలు</h2>
            <ol className="mt-6 space-y-4">
              {g.causes.map((c, i) => (
                <Reveal as="li" key={c.title} delay={i * 60} className="card flex gap-4 p-5 sm:p-6">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-brand-600 font-sans text-lg font-extrabold text-white">{i + 1}</span>
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-lg font-bold leading-snug">{c.title}</h3>
                      {c.fix === "diy" ? (
                        <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-bold text-emerald-700 ring-1 ring-emerald-200">
                          <Hand className="h-3 w-3" aria-hidden="true" /> మీరే చెక్ చేయవచ్చు
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 rounded-full bg-brand-50 px-2.5 py-0.5 text-xs font-bold text-brand-700 ring-1 ring-brand-200">
                          <UserCog className="h-3 w-3" aria-hidden="true" /> టెక్నీషియన్ అవసరం
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
              మీరే సేఫ్ గా చేయగల చెక్స్
            </h2>
            <ol className="mt-5 space-y-3">
              {g.diyChecks.map((d, i) => (
                <li key={d} className="flex items-start gap-3 text-[16px] text-slate-800">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-600 font-sans text-sm font-bold text-white">{i + 1}</span>
                  {d}
                </li>
              ))}
            </ol>
            <p className="mt-5 flex items-start gap-2 rounded-2xl bg-white/80 p-4 text-sm text-slate-600">
              <ShieldAlert className="mt-0.5 h-4 w-4 shrink-0 text-sun-600" aria-hidden="true" />
              చెక్ చేసే ముందు స్విచ్ ఆఫ్ చేసి ప్లగ్ తీసేయండి. ప్యానెల్స్ తెరవడం, వైరింగ్ ముట్టుకోవడం, గ్యాస్ నింపడం మీరే చేయకండి.
            </p>
          </section>

          <section className="rounded-3xl bg-brand-950 p-6 text-white sm:p-8">
            <h2 className="flex items-center gap-2 text-2xl font-extrabold text-white">
              <AlertOctagon className="h-6 w-6 text-sun-400" aria-hidden="true" />
              టెక్నీషియన్ ని ఎప్పుడు పిలవాలి
            </h2>
            <ul className="mt-5 space-y-3">
              {g.whenToCall.map((w) => (
                <li key={w} className="flex items-start gap-3 text-[16px] text-brand-50">
                  <span className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-sun-400" aria-hidden="true" />
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
            <SectionHeading eyebrow={t.faq} title="తరచుగా అడిగే ప్రశ్నలు" />
            <FaqList faqs={g.faq} className="mt-8" />
          </section>
        </div>

        <aside className="space-y-6 lg:sticky lg:top-32 lg:self-start">
          <div className="card overflow-hidden">
            <div className="flex items-center justify-center bg-gradient-to-br from-brand-50 to-ice-50 p-6">
              <Art className="h-28 w-auto" />
            </div>
            <div className="p-6">
              <p className="text-lg font-extrabold">ఈరోజే రిపేర్ కావాలా?</p>
              <p className="mt-1 text-[15px] text-slate-600">విజయవాడ అంతటా ఇంటి వద్దే {name} రిపేర్.</p>
              <div className="mt-5 grid gap-2.5">
                <CallButton className="w-full" label={t.callNow} />
                <WhatsAppButton className="w-full" message={msg} />
              </div>
              <Link to={`/te/${a.slug}`} className="mt-4 block text-center text-sm font-bold text-brand-600 hover:text-brand-800">
                {name} రిపేర్ వివరాలు →
              </Link>
            </div>
          </div>
          <div className="card p-6">
            <p className="text-sm font-bold text-slate-500">మరిన్ని సమస్యలు</p>
            <ul className="mt-3 divide-y divide-slate-100">
              {others.map((r) => (
                <li key={r.slug}>
                  <Link to={`/te/guides/${r.slug}`} className="block py-3 font-semibold text-slate-700 hover:text-brand-700">
                    {r.title.split("?")[0]} →
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </article>

      <CtaBand message={msg} />
    </div>
  );
}
