import { BadgeCheck, HeartHandshake, Languages, ShieldCheck } from "lucide-react";
import { BUSINESS } from "@/config/site";
import { FridgeIllustration } from "@/components/illustrations/Illustrations";
import { QuickAnswer, SectionHeading } from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import { AreasStrip, CtaBand, PageHero, WhyUs } from "@/components/sections/Sections";

const VALUES = [
  { icon: HeartHandshake, title: "Honest advice", text: "If a repair isn't worth it, we'll tell you — even if it means less work for us." },
  { icon: ShieldCheck, title: "Work we stand behind", text: `Every repair carries a ${BUSINESS.warrantyDays}-day service warranty.` },
  { icon: BadgeCheck, title: "Right parts", text: "We use genuine or high-grade compatible parts and tell you which is which." },
  { icon: Languages, title: "Local & friendly", text: "A Vijayawada team that explains things in Telugu, English or Hindi." },
];

export default function About() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "About" }]}
        eyebrow="About us"
        title={
          <>
            Your Local Appliance <span className="text-gradient">Repair Experts</span>
          </>
        }
        telugu="విజయవాడ ప్రజల నమ్మకమైన రిపేర్ సర్వీస్"
        intro={`${BUSINESS.name} is a Vijayawada-based team with ${BUSINESS.foundingNote}. We fix ACs, refrigerators and washing machines at your home — quickly, honestly and properly.`}
        art={<FridgeIllustration className="mx-auto h-72 w-auto" />}
      />
      <section className="py-14">
        <div className="container-page max-w-5xl">
          <QuickAnswer label="Who we are">
            {BUSINESS.name} is an independent, multi-brand home appliance repair service in Vijayawada, Andhra Pradesh. We repair
            and service air conditioners, refrigerators and washing machines of all major brands at customers' homes, with
            same-day visits in most areas and a {BUSINESS.warrantyDays}-day warranty on repairs.
          </QuickAnswer>
        </div>
      </section>
      <section className="pb-20">
        <div className="container-page">
          <SectionHeading center eyebrow="What we believe" title="How we work" />
          <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((v, i) => (
              <Reveal as="li" key={v.title} delay={i * 100} className="card p-7 text-center">
                <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-600 to-ice-400 text-white shadow-glow">
                  <v.icon className="h-7 w-7" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-lg font-bold">{v.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-slate-600">{v.text}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>
      <WhyUs />
      <AreasStrip />
      <CtaBand />
    </>
  );
}
