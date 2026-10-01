import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { Phone, ArrowRight } from "lucide-react";
import { BUSINESS, TEL_LINK, whatsappLink } from "@/config/site";
import { useLang } from "@/i18n/lang";
import { waDefaultMessage } from "@/i18n/messages";

export function WhatsAppIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.64.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.7.63.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35zM12.04 21.5h-.01a9.42 9.42 0 0 1-4.8-1.31l-.35-.2-3.57.93.95-3.48-.22-.36a9.4 9.4 0 0 1-1.45-5.02c0-5.2 4.24-9.44 9.46-9.44 2.52 0 4.9.99 6.68 2.77a9.37 9.37 0 0 1 2.76 6.68c0 5.21-4.24 9.44-9.45 9.44zm8.04-17.48A11.3 11.3 0 0 0 12.04.7C5.77.7.67 5.8.67 12.07c0 2 .52 3.96 1.52 5.68L.57 23.7l6.08-1.6a11.33 11.33 0 0 0 5.39 1.37h.01c6.26 0 11.36-5.1 11.37-11.37 0-3.04-1.18-5.9-3.34-8.05z" />
    </svg>
  );
}

type Size = "md" | "lg";
const sizes: Record<Size, string> = {
  md: "px-5 py-3 text-[15px]",
  lg: "px-7 py-4 text-base sm:text-lg",
};

const base =
  "group inline-flex items-center justify-center gap-2.5 rounded-2xl font-bold transition-all duration-200 active:scale-[.97] focus-visible:ring-offset-2";

export function CallButton({ size = "md", className = "", label }: { size?: Size; className?: string; label?: ReactNode }) {
  const { t } = useLang();
  return (
    <a
      href={TEL_LINK}
      className={`${base} ${sizes[size]} bg-brand-600 text-white shadow-glow hover:-translate-y-0.5 hover:bg-brand-700 ${className}`}
      aria-label={`Call ${BUSINESS.phoneDisplay}`}
    >
      <Phone className="h-5 w-5 transition-transform group-hover:rotate-12" aria-hidden="true" />
      {label ?? <>{t.call} {BUSINESS.phoneDisplay}</>}
    </a>
  );
}

export function WhatsAppButton({
  size = "md",
  className = "",
  message,
  label,
}: {
  size?: Size;
  className?: string;
  message?: string;
  label?: ReactNode;
}) {
  const { lang, t } = useLang();
  return (
    <a
      href={whatsappLink(message ?? waDefaultMessage(lang))}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${sizes[size]} bg-wa text-white shadow-glow-wa hover:-translate-y-0.5 hover:bg-wa-dark ${className}`}
    >
      <WhatsAppIcon className="h-5 w-5" />
      {label ?? t.whatsappUs}
    </a>
  );
}

export function GhostLink({ to, children, className = "" }: { to: string; children: ReactNode; className?: string }) {
  return (
    <Link
      to={to}
      className={`${base} ${sizes.md} bg-white text-brand-700 ring-1 ring-brand-200 hover:bg-brand-50 hover:ring-brand-300 ${className}`}
    >
      {children}
      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
    </Link>
  );
}

export function TextLink({ to, children, className = "" }: { to: string; children: ReactNode; className?: string }) {
  return (
    <Link to={to} className={`group inline-flex items-center gap-1.5 font-bold text-brand-600 hover:text-brand-800 ${className}`}>
      {children}
      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
    </Link>
  );
}
