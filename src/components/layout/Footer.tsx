import { Link } from "react-router-dom";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { AREAS, BUSINESS, HOURS, TEL_LINK, whatsappLink } from "@/config/site";
import { APPLIANCES } from "@/data/appliances";
import { BRAND_PAGES } from "@/data/brands";
import { GUIDES } from "@/data/guides";
import { OFFERINGS } from "@/data/offerings";
import { AREA_PAGES } from "@/data/areaPages";
import { brandPageTitle } from "@/data/content";
import Logo from "@/components/ui/Logo";
import { useLang } from "@/i18n/lang";
import { WhatsAppIcon } from "@/components/ui/Buttons";

const POPULAR_BRAND_SLUGS = [
  "lg-washing-machine-repair-vijayawada",
  "samsung-refrigerator-repair-vijayawada",
  "lg-ac-repair-vijayawada",
  "ifb-washing-machine-repair-vijayawada",
  "voltas-ac-repair-vijayawada",
  "whirlpool-refrigerator-repair-vijayawada",
  "daikin-ac-repair-vijayawada",
  "samsung-washing-machine-repair-vijayawada",
];

function Col({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="text-sm font-bold uppercase tracking-[0.16em] text-ice-300">{title}</h2>
      <ul className="mt-4 space-y-2.5 text-[15px]">{children}</ul>
    </div>
  );
}

const linkCls = "text-brand-100/80 transition-colors hover:text-white";

export default function Footer() {
  const { t } = useLang();
  const popular = POPULAR_BRAND_SLUGS.map((s) => BRAND_PAGES.find((p) => p.slug === s)).filter(Boolean) as typeof BRAND_PAGES;

  return (
    <footer className="relative overflow-hidden bg-brand-950 pb-28 text-brand-100 md:pb-0">
      <div className="pointer-events-none absolute -top-40 left-1/2 h-80 w-[48rem] -translate-x-1/2 rounded-full bg-brand-600/25 blur-3xl" aria-hidden="true" />

      <div className="container-page relative grid grid-cols-2 gap-x-6 gap-y-12 py-16 lg:grid-cols-[1.3fr_1fr_1fr_1fr] lg:py-20">
        <div className="col-span-2 lg:col-span-1">
          <Logo tone="light" />
          <p className="mt-5 max-w-sm leading-relaxed text-brand-100/80">
            {t.footer.tagline}
          </p>
          <ul className="mt-6 space-y-3 text-[15px]">
            <li>
              <a href={TEL_LINK} className="flex items-center gap-3 font-bold text-white hover:text-ice-300">
                <Phone className="h-4 w-4 text-ice-300" aria-hidden="true" />
                {BUSINESS.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-white">
                <WhatsAppIcon className="h-4 w-4 text-wa" />
                WhatsApp {BUSINESS.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${BUSINESS.email}`} className="flex items-center gap-3 hover:text-white">
                <Mail className="h-4 w-4 text-ice-300" aria-hidden="true" />
                {BUSINESS.email}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Clock className="h-4 w-4 text-ice-300" aria-hidden="true" />
              {HOURS.display}
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-ice-300" aria-hidden="true" />
              <address className="not-italic">
                {BUSINESS.city}, {BUSINESS.region}, India
              </address>
            </li>
          </ul>
        </div>

        <Col title="Services">
          {APPLIANCES.map((a) => (
            <li key={a.key}>
              <Link to={`/${a.slug}`} className={linkCls}>
                {a.title.replace(" in Vijayawada", "")}
              </Link>
            </li>
          ))}
          <li>
            <Link to="/services" className={linkCls}>
              All services
            </Link>
          </li>
          <li>
            <Link to="/brands" className={linkCls}>
              All brands
            </Link>
          </li>
          <li>
            <Link to="/areas-we-serve" className={linkCls}>
              Areas we serve
            </Link>
          </li>
        </Col>

        <Col title="Popular repairs">
          {popular.map((p) => (
            <li key={p.slug}>
              <Link to={`/${p.slug}`} className={linkCls}>
                {brandPageTitle(p).replace(" in Vijayawada", "")}
              </Link>
            </li>
          ))}
        </Col>

        <Col title="Problem guides">
          {GUIDES.slice(0, 8).map((g) => (
            <li key={g.slug}>
              <Link to={`/guides/${g.slug}`} className={linkCls}>
                {g.title.split("?")[0].split(":")[0]}
              </Link>
            </li>
          ))}
          <li>
            <Link to="/guides" className={linkCls}>
              All guides →
            </Link>
          </li>
        </Col>
      </div>

      <div className="container-page relative grid gap-8 border-t border-white/10 py-10 lg:grid-cols-2">
        <div>
          <h2 className="text-sm font-bold uppercase tracking-[0.16em] text-ice-300">Repair by type & service</h2>
          <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-[15px]">
            {OFFERINGS.map((o) => (
              <li key={o.slug}>
                <Link to={`/${o.slug}`} className={linkCls}>
                  {o.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-sm font-bold uppercase tracking-[0.16em] text-ice-300">Local service areas</h2>
          <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-[15px]">
            {AREA_PAGES.map((a) => (
              <li key={a.slug}>
                <Link to={`/areas/${a.slug}`} className={linkCls}>
                  Repair in {a.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="container-page relative border-t border-white/10 py-8">
        <p className="text-sm text-brand-100/70">
          <span className="font-semibold text-brand-100">Areas served (Vijayawada + 20 km): </span>
          {AREAS.join(" · ")}
        </p>
        <p className="mt-4 text-xs leading-relaxed text-brand-100/50">
          AV Appliance Services is an independent multi-brand repair service and is not affiliated with, or an authorised
          service centre of, any appliance manufacturer. Brand names are used only to describe the appliances we repair.
        </p>
        <div className="mt-6 flex flex-col gap-2 text-sm text-brand-100/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {BUSINESS.name}, Vijayawada.</p>
          <p className="flex gap-4">
            <Link to="/about" className="hover:text-white">
              About
            </Link>
            <Link to="/contact" className="hover:text-white">
              Contact
            </Link>
            <a href="/sitemap.xml" className="hover:text-white">
              Sitemap
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
