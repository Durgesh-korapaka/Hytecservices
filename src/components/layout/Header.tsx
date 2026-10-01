import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { ChevronDown, Clock, Languages, Menu, Phone, X, Zap } from "lucide-react";
import { BUSINESS, HOURS, TEL_LINK } from "@/config/site";
import { APPLIANCES } from "@/data/appliances";
import { OFFERINGS } from "@/data/offerings";
import Logo from "@/components/ui/Logo";
import { CallButton, WhatsAppButton } from "@/components/ui/Buttons";
import { ILLUSTRATION } from "@/components/illustrations/Illustrations";
import { localPath, switchTarget, useLang } from "@/i18n/lang";
import { APPLIANCE_NAME_TE } from "@/i18n/ui";

const NAV = [
  { key: "brands", to: "/brands" },
  { key: "guides", to: "/guides" },
  { key: "areas", to: "/areas-we-serve" },
  { key: "about", to: "/about" },
  { key: "contact", to: "/contact" },
] as const;

/** EN / తెలుగు switch — jumps to the same page in the other language when it exists. */
function LangSwitch({ className = "" }: { className?: string }) {
  const { t, pathname, lang } = useLang();
  return (
    <Link
      to={switchTarget(pathname)}
      hrefLang={lang === "te" ? "en-IN" : "te-IN"}
      aria-label={t.langSwitchLabel}
      title={t.langSwitchLabel}
      className={`inline-flex items-center gap-1.5 whitespace-nowrap rounded-xl bg-sun-100 px-3 py-2 text-sm font-bold text-brand-900 ring-1 ring-sun-400/50 transition-colors hover:bg-sun-400/30 ${className}`}
    >
      <Languages className="h-4 w-4 text-sun-600" aria-hidden="true" />
      <span className={lang === "en" ? "font-telugu" : ""}>{t.langSwitch}</span>
    </Link>
  );
}

const navClass = ({ isActive }: { isActive: boolean }) =>
  `relative whitespace-nowrap rounded-xl px-3 py-2 text-[15px] font-semibold transition-colors ${
    isActive ? "text-brand-700 bg-brand-50" : "text-slate-700 hover:text-brand-700 hover:bg-brand-50/60"
  }`;

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
  const { lang, t } = useLang();
  const home = localPath(lang, "/");

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  const servicesActive = pathname === "/services" || APPLIANCES.some((a) => pathname === `/${a.slug}`);

  return (
    <header className="sticky top-0 z-50">
      {/* Utility bar */}
      <div className="hidden bg-brand-950 text-[13px] text-brand-100 md:block">
        <div className="container-page flex h-9 items-center justify-between gap-6">
          <div className="flex items-center gap-5">
            <span className="flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5 text-ice-300" aria-hidden="true" />
              {lang === "te" ? t.hours : HOURS.display}
            </span>
            <span className="flex items-center gap-1.5">
              <Zap className="h-3.5 w-3.5 text-sun-400" aria-hidden="true" />
              {t.sameDay}
            </span>
          </div>
          <div className="flex items-center gap-5">
            <a href={TEL_LINK} className="flex items-center gap-1.5 font-bold text-white hover:text-ice-300">
              <Phone className="h-3.5 w-3.5" aria-hidden="true" />
              {BUSINESS.phoneDisplay}
            </a>
          </div>
        </div>
      </div>

      {/* Main bar */}
      <div
        className={`border-b transition-all duration-300 ${
          scrolled ? "border-slate-200/80 bg-white/90 shadow-soft backdrop-blur-xl" : "border-transparent bg-white"
        }`}
      >
        <nav className="container-page flex h-[68px] items-center justify-between gap-2 sm:gap-4 lg:h-20" aria-label="Main">
          <Logo />

          <div className="hidden items-center gap-0.5 lg:flex">
            <NavLink to={home} end className={navClass}>
              {t.nav.home}
            </NavLink>

            {/* Services dropdown — CSS only (hover / keyboard focus) */}
            <div className="group relative">
              <Link
                to="/services"
                className={`flex items-center gap-1 ${navClass({ isActive: servicesActive })}`}
                aria-haspopup="true"
              >
                {t.nav.services}
                <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180 group-focus-within:rotate-180" aria-hidden="true" />
              </Link>
              <div className="invisible absolute left-1/2 top-full w-[640px] -translate-x-1/2 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                <div className="card grid grid-cols-3 gap-2 p-3 shadow-lift">
                  {APPLIANCES.map((a) => {
                    const Art = ILLUSTRATION[a.key];
                    return (
                      <div key={a.key} className="rounded-2xl p-2">
                        <Link to={localPath(lang, `/${a.slug}`)} className="group/item block rounded-2xl p-2 text-center transition-colors hover:bg-brand-50">
                          <div className="mx-auto flex h-20 items-center justify-center">
                            <Art className="h-full w-auto transition-transform duration-300 group-hover/item:scale-105" />
                          </div>
                          <p className="mt-2 text-sm font-bold text-ink">{lang === "te" ? `${APPLIANCE_NAME_TE[a.key]} రిపేర్` : `${a.name} Repair`}</p>
                        </Link>
                        <ul className="mt-2 space-y-0.5 border-t border-slate-100 pt-2">
                          {OFFERINGS.filter((o) => o.appliance === a.key).map((o) => (
                            <li key={o.slug}>
                              <Link to={`/${o.slug}`} className="block rounded-lg px-2 py-1.5 text-[13px] font-medium text-slate-600 hover:bg-brand-50 hover:text-brand-700">
                                {o.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    );
                  })}
                  <Link
                    to="/services"
                    className="col-span-3 rounded-xl bg-brand-50 px-4 py-2.5 text-center text-sm font-bold text-brand-700 hover:bg-brand-100"
                  >
                    {t.nav.viewAll}
                  </Link>
                </div>
              </div>
            </div>

            {NAV.map((l) => (
              <NavLink key={l.to} to={localPath(lang, l.to)} className={(s) => `${navClass(s)} ${l.to === "/about" ? "hidden xl:block" : ""}`}>
                {t.nav[l.key]}
              </NavLink>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <LangSwitch className="hidden sm:inline-flex" />
            <CallButton className="hidden whitespace-nowrap !px-4 !py-2.5 !text-sm 2xl:inline-flex" label={BUSINESS.phoneDisplay} />
            <WhatsAppButton className="hidden whitespace-nowrap !px-4 !py-2.5 !text-sm lg:inline-flex" label={t.whatsapp} />
            <a
              href={TEL_LINK}
              className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-600 text-white shadow-glow lg:hidden"
              aria-label={`Call ${BUSINESS.phoneDisplay}`}
            >
              <Phone className="h-5 w-5" aria-hidden="true" />
            </a>
            <button
              type="button"
              onClick={() => setOpen((o) => !o)}
              className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-800 ring-1 ring-brand-100 lg:hidden"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile language strip — Telugu readers find their version without opening the menu */}
      <Link
        to={switchTarget(pathname)}
        hrefLang={lang === "te" ? "en-IN" : "te-IN"}
        className="flex h-9 items-center justify-center gap-2 border-b border-sun-400/40 bg-sun-100 text-[14px] font-bold text-brand-900 md:hidden"
      >
        <Languages className="h-4 w-4 text-sun-600" aria-hidden="true" />
        {lang === "te" ? "Read in English" : <span className="font-telugu">తెలుగులో చదవండి →</span>}
      </Link>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`fixed inset-x-0 bottom-0 top-[104px] z-40 overflow-y-auto bg-white transition-all duration-300 lg:hidden ${
          open ? "visible translate-y-0 opacity-100" : "invisible -translate-y-3 opacity-0"
        }`}
      >
        <div className="container-page space-y-6 py-6 pb-28">
          <div className="grid grid-cols-3 gap-2">
            {APPLIANCES.map((a) => {
              const Art = ILLUSTRATION[a.key];
              return (
                <Link key={a.key} to={localPath(lang, `/${a.slug}`)} className="rounded-2xl bg-mist p-3 text-center ring-1 ring-slate-200/70">
                  <Art className="mx-auto h-16 w-auto" />
                  <span className="mt-2 block text-[13px] font-bold leading-tight text-ink">{lang === "te" ? `${APPLIANCE_NAME_TE[a.key]} రిపేర్` : `${a.name} Repair`}</span>
                </Link>
              );
            })}
          </div>
          <ul className="divide-y divide-slate-100 rounded-2xl ring-1 ring-slate-200/70">
            {[
              { label: t.nav.home, to: localPath(lang, "/") },
              { label: t.nav.allServices, to: "/services" },
              ...NAV.map((n) => ({ label: t.nav[n.key], to: localPath(lang, n.to) })),
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="flex items-center justify-between px-5 py-4 text-lg font-semibold text-ink">
                  {l.label}
                  <span className="text-brand-500">→</span>
                </Link>
              </li>
            ))}
          </ul>
          <LangSwitch className="w-full justify-center !py-3.5 !text-base" />
          <div className="grid gap-3">
            <CallButton size="lg" />
            <WhatsAppButton size="lg" />
          </div>
          <p className="text-center text-sm text-slate-500">{lang === "te" ? t.hours : HOURS.display}</p>
        </div>
      </div>
    </header>
  );
}
