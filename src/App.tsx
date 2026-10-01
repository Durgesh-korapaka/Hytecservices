import { useEffect, type ReactNode } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { APPLIANCES } from "@/data/appliances";
import { BRAND_PAGES } from "@/data/brands";
import { GUIDES } from "@/data/guides";
import { OFFERINGS } from "@/data/offerings";
import { AREA_PAGES } from "@/data/areaPages";
import { TE_APPLIANCES } from "@/data/te-pages";
import { TE_GUIDES } from "@/data/te-guides";
import { useHead } from "@/seo/head";
import { useRevealObserver } from "@/hooks/useReveal";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { FloatingWhatsApp, MobileActionBar } from "@/components/layout/ContactBars";
import Home from "@/pages/Home";
import AppliancePage from "@/pages/AppliancePage";
import BrandPage from "@/pages/BrandPage";
import GuidePage from "@/pages/GuidePage";
import OfferingPage from "@/pages/OfferingPage";
import AreaLocalPage from "@/pages/AreaLocalPage";
import { Areas, BrandsHub, GuidesHub, ServicesHub } from "@/pages/Hubs";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/NotFound";
import TeHome from "@/pages/te/TeHome";
import TeAppliancePage from "@/pages/te/TeAppliancePage";
import TeGuidePage from "@/pages/te/TeGuidePage";

/** Every route in the site. The prerender script builds one HTML file per entry. */
export const ROUTES: { path: string; element: ReactNode }[] = [
  { path: "/", element: <Home /> },
  { path: "/services", element: <ServicesHub /> },
  ...APPLIANCES.map((a) => ({ path: `/${a.slug}`, element: <AppliancePage appliance={a} /> })),
  ...OFFERINGS.map((o) => ({ path: `/${o.slug}`, element: <OfferingPage offering={o} /> })),
  { path: "/brands", element: <BrandsHub /> },
  ...BRAND_PAGES.map((p) => ({ path: `/${p.slug}`, element: <BrandPage page={p} /> })),
  { path: "/guides", element: <GuidesHub /> },
  ...GUIDES.map((g) => ({ path: `/guides/${g.slug}`, element: <GuidePage guide={g} /> })),
  { path: "/areas-we-serve", element: <Areas /> },
  ...AREA_PAGES.map((a) => ({ path: `/areas/${a.slug}`, element: <AreaLocalPage area={a} /> })),
  { path: "/about", element: <About /> },
  { path: "/contact", element: <Contact /> },
  // Telugu (te-IN) versions of the most important pages
  { path: "/te", element: <TeHome /> },
  ...TE_APPLIANCES.map((p) => ({
    path: `/te/${APPLIANCES.find((a) => a.key === p.key)!.slug}`,
    element: <TeAppliancePage page={p} />,
  })),
  ...TE_GUIDES.map((g) => ({ path: `/te/guides/${g.slug}`, element: <TeGuidePage guide={g} /> })),
  { path: "/te/contact", element: <Contact /> },
];

export default function App() {
  const { pathname } = useLocation();

  useHead(pathname);
  useRevealObserver(pathname);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname]);

  return (
    <div className="flex min-h-screen flex-col">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-xl focus:bg-brand-600 focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>
      <Header />
      <main id="main" key={pathname} className="flex-1 animate-fade-up [animation-duration:.35s]">
        <Routes>
          {ROUTES.map((r) => (
            <Route key={r.path} path={r.path} element={r.element} />
          ))}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <MobileActionBar />
      <FloatingWhatsApp />
    </div>
  );
}
