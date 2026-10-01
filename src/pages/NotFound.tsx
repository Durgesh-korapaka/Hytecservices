import { Link } from "react-router-dom";
import { APPLIANCES } from "@/data/appliances";
import { WasherIllustration } from "@/components/illustrations/Illustrations";
import { CallButton, WhatsAppButton } from "@/components/ui/Buttons";

export default function NotFound() {
  return (
    <section className="container-page flex flex-col items-center py-20 text-center">
      <WasherIllustration className="h-56 w-auto" />
      <p className="mt-6 text-sm font-bold uppercase tracking-widest text-brand-600">Error 404</p>
      <h1 className="mt-2 text-4xl font-extrabold sm:text-5xl">This page went for a spin</h1>
      <p className="mt-4 max-w-lg text-lg text-slate-600">We couldn't find that page. Try one of these instead, or just give us a call.</p>
      <div className="mt-8 flex flex-wrap justify-center gap-2">
        {APPLIANCES.map((a) => (
          <Link key={a.key} to={`/${a.slug}`} className="rounded-full bg-brand-50 px-4 py-2 font-semibold text-brand-700 ring-1 ring-brand-100 hover:bg-brand-100">
            {a.name} Repair
          </Link>
        ))}
        <Link to="/" className="rounded-full bg-brand-600 px-4 py-2 font-semibold text-white hover:bg-brand-700">
          Home
        </Link>
      </div>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <CallButton />
        <WhatsAppButton />
      </div>
    </section>
  );
}
