import { Link } from "react-router-dom";
import { Droplets, Power, RefreshCw, Snowflake, ThermometerSnowflake, Vibrate, Volume2, Waves, Wrench, type LucideIcon } from "lucide-react";
import { whatsappLink } from "@/config/site";
import { APPLIANCES } from "@/data/appliances";
import { QUICK_PROBLEMS, type ProblemIcon } from "@/data/problems";
import type { ApplianceKey } from "@/data/types";
import { ILLUSTRATION } from "@/components/illustrations/Illustrations";
import { WhatsAppIcon } from "@/components/ui/Buttons";
import { SectionHeading } from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import { APPLIANCE_NAME_TE } from "@/i18n/ui";
import { localPath, useLang } from "@/i18n/lang";

const ICONS: Record<ProblemIcon, LucideIcon> = {
  cool: ThermometerSnowflake,
  drop: Droplets,
  power: Power,
  noise: Volume2,
  wrench: Wrench,
  ice: Snowflake,
  spin: RefreshCw,
  drain: Waves,
  shake: Vibrate,
};

/**
 * Picture tiles for the most common problems. Tapping one opens WhatsApp with
 * a ready message (Telugu on Telugu pages), so nobody has to type.
 */
export default function ProblemPicker({ appliance, className = "" }: { appliance?: ApplianceKey; className?: string }) {
  const { lang, t } = useLang();
  const groups = APPLIANCES.filter((a) => !appliance || a.key === appliance);

  return (
    <section className={`py-16 lg:py-20 ${className}`} aria-labelledby="problem-picker">
      <div className="container-page">
        <SectionHeading center eyebrow={t.picker.eyebrow} title={<span id="problem-picker">{t.picker.title}</span>} subtitle={t.picker.sub} />
        <div className="mt-10 space-y-10">
          {groups.map((a) => {
            const Art = ILLUSTRATION[a.key];
            const items = QUICK_PROBLEMS.filter((p) => p.appliance === a.key);
            return (
              <div key={a.key}>
                {!appliance && (
                  <h3 className="mb-4 flex items-center gap-2 text-lg font-extrabold">
                    <Art className="h-8 w-auto" />
                    {lang === "te" ? APPLIANCE_NAME_TE[a.key] : a.name}
                    {lang === "en" && APPLIANCE_NAME_TE[a.key] !== a.name && (
                      <span className="font-telugu text-base font-semibold text-brand-600">· {APPLIANCE_NAME_TE[a.key]}</span>
                    )}
                  </h3>
                )}
                <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
                  {items.map((p, i) => {
                    const Icon = ICONS[p.icon];
                    const primary = lang === "te" ? p.te : p.en;
                    const secondary = lang === "te" ? p.en : p.te;
                    return (
                      <Reveal as="li" key={p.id} delay={i * 60} className="flex flex-col">
                        <a
                          href={whatsappLink(lang === "te" ? p.msgTe : p.msgEn)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group relative flex flex-1 flex-col items-center rounded-3xl bg-white p-4 text-center shadow-soft ring-1 ring-slate-200/80 transition-all duration-300 hover:-translate-y-1 hover:shadow-lift hover:ring-wa/60 active:scale-[.98] sm:p-5"
                        >
                          <span className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-50 to-ice-50 sm:h-20 sm:w-20">
                            <Art className="h-12 w-auto opacity-90 sm:h-14" />
                            <span className="absolute -bottom-2 -right-2 flex h-8 w-8 items-center justify-center rounded-full bg-brand-600 text-white ring-4 ring-white transition-colors group-hover:bg-wa">
                              <Icon className="h-4 w-4" aria-hidden="true" />
                            </span>
                          </span>
                          <span lang={lang === "te" ? "te" : "en"} className={`mt-4 block font-bold leading-snug text-ink ${lang === "te" ? "font-telugu text-[16px]" : "text-[15px]"}`}>
                            {primary}
                          </span>
                          <span lang={lang === "te" ? "en" : "te"} className={`mt-1 block text-[13px] leading-snug text-slate-500 ${lang === "te" ? "" : "font-telugu"}`}>
                            {secondary}
                          </span>
                          <span className="mt-auto flex items-center gap-1.5 pt-3 text-[13px] font-bold text-wa-dark">
                            <WhatsAppIcon className="h-4 w-4" />
                            {t.book}
                          </span>
                        </a>
                        <Link to={localPath(lang, p.link)} className="mt-1.5 text-center text-xs font-semibold text-slate-400 hover:text-brand-700">
                          {t.picker.readGuide} →
                        </Link>
                      </Reveal>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
