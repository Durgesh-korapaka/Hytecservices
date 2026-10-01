import { Phone } from "lucide-react";
import { BUSINESS, TEL_LINK, whatsappLink } from "@/config/site";
import { WhatsAppIcon } from "@/components/ui/Buttons";
import { useLang } from "@/i18n/lang";
import { waDefaultMessage } from "@/i18n/messages";

/** Always-visible Call + WhatsApp bar on phones (thumb reach, safe-area aware). */
export function MobileActionBar() {
  const { lang, t } = useLang();
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 border-t border-slate-200 bg-white/95 px-3 pt-2.5 backdrop-blur-xl md:hidden"
      style={{ paddingBottom: "max(0.625rem, env(safe-area-inset-bottom))" }}
    >
      <div className="grid grid-cols-2 gap-2.5">
        <a
          href={TEL_LINK}
          className="flex items-center justify-center gap-2 rounded-2xl bg-brand-600 py-3.5 text-[15px] font-bold text-white shadow-glow active:scale-[.97]"
        >
          <Phone className="h-5 w-5" aria-hidden="true" />
          {t.callNow}
        </a>
        <a
          href={whatsappLink(waDefaultMessage(lang))}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 rounded-2xl bg-wa py-3.5 text-[15px] font-bold text-white shadow-glow-wa active:scale-[.97]"
        >
          <WhatsAppIcon className="h-5 w-5" />
          {t.whatsapp}
        </a>
      </div>
    </div>
  );
}

/** Floating WhatsApp bubble for tablet/desktop. */
export function FloatingWhatsApp() {
  const { lang } = useLang();
  return (
    <a
      href={whatsappLink(waDefaultMessage(lang))}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Chat on WhatsApp ${BUSINESS.phoneDisplay}`}
      className="group fixed bottom-6 right-6 z-40 hidden items-center gap-3 md:flex"
    >
      <span className="pointer-events-none translate-x-2 rounded-2xl bg-white px-4 py-2.5 text-sm font-semibold text-ink opacity-0 shadow-lift ring-1 ring-slate-200 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
        {lang === "te" ? "రిపేర్ కావాలా? WhatsApp చేయండి" : "Need a repair? Chat with us"}
      </span>
      <span className="relative flex h-16 w-16 items-center justify-center rounded-full bg-wa text-white shadow-glow-wa transition-transform duration-300 group-hover:scale-110">
        <span className="absolute inset-0 animate-pulse-ring rounded-full bg-wa" aria-hidden="true" />
        <WhatsAppIcon className="relative h-8 w-8" />
      </span>
    </a>
  );
}
