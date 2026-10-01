import { Plus } from "lucide-react";
import type { FAQ } from "@/data/types";
import Reveal from "./Reveal";

/**
 * Native <details> accordion: works without JS, answers stay in the HTML for
 * crawlers, and the first item starts open.
 */
export default function FaqList({ faqs, className = "" }: { faqs: FAQ[]; className?: string }) {
  return (
    <div className={`space-y-3 ${className}`}>
      {faqs.map((f, i) => (
        <Reveal key={f.q} delay={i * 60}>
          <details open={i === 0} className="group card overflow-hidden transition-shadow open:shadow-lift">
            <summary className="flex cursor-pointer items-start justify-between gap-4 p-5 text-left sm:p-6">
              <h3 className="text-base font-bold leading-snug text-ink sm:text-lg">{f.q}</h3>
              <span className="faq-icon mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-600 transition-transform duration-300 group-open:bg-brand-600 group-open:text-white">
                <Plus className="h-4 w-4" aria-hidden="true" />
              </span>
            </summary>
            <p className="-mt-1 px-5 pb-6 text-[16px] leading-relaxed text-slate-600 sm:px-6">{f.a}</p>
          </details>
        </Reveal>
      ))}
    </div>
  );
}
