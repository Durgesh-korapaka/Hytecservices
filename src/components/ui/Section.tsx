import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ChevronRight, Lightbulb } from "lucide-react";
import Reveal from "./Reveal";
import { localPath, useLang } from "@/i18n/lang";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  center = false,
  as: H = "h2",
  className = "",
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  center?: boolean;
  as?: "h1" | "h2";
  className?: string;
}) {
  return (
    <Reveal className={`${center ? "mx-auto text-center" : ""} max-w-3xl ${className}`}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <H className="mt-4 text-3xl font-extrabold leading-[1.15] sm:text-4xl lg:text-[2.75rem]">{title}</H>
      {subtitle && <p className="mt-4 text-lg leading-relaxed text-slate-600">{subtitle}</p>}
    </Reveal>
  );
}

export function Breadcrumbs({ items }: { items: { name: string; path?: string }[] }) {
  const { lang, t } = useLang();
  return (
    <nav aria-label="Breadcrumb" className="text-sm">
      <ol className="flex flex-wrap items-center gap-1 text-slate-500">
        <li>
          <Link to={localPath(lang, "/")} className="hover:text-brand-700">
            {t.home}
          </Link>
        </li>
        {items.map((item) => (
          <li key={item.name} className="flex items-center gap-1">
            <ChevronRight className="h-3.5 w-3.5 text-slate-400" aria-hidden="true" />
            {item.path ? (
              <Link to={item.path} className="hover:text-brand-700">
                {item.name}
              </Link>
            ) : (
              <span aria-current="page" className="font-semibold text-slate-700">
                {item.name}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

/** A direct, quotable answer near the top of the page — built for answer engines. */
export function QuickAnswer({ children, label }: { children: ReactNode; label?: string }) {
  const { t } = useLang();
  return (
    <Reveal className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-50 via-white to-ice-50 p-6 ring-1 ring-brand-100 sm:p-8">
      <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-ice-200/40 blur-2xl" aria-hidden="true" />
      <p className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-brand-700">
        <Lightbulb className="h-4 w-4" aria-hidden="true" />
        {label ?? t.quickAnswer}
      </p>
      <p className="relative mt-3 text-lg leading-relaxed text-slate-800 sm:text-xl">{children}</p>
    </Reveal>
  );
}

export function Pill({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-sm font-semibold text-slate-700 ring-1 ring-slate-200 ${className}`}>
      {children}
    </span>
  );
}
