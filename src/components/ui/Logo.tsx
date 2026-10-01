import { Link } from "react-router-dom";
import { localPath, useLang } from "@/i18n/lang";

/**
 * Logo = the AV app-icon mark + a live-text wordmark. Real text stays crisp,
 * is readable on light and dark backgrounds, and is indexable.
 */
export default function Logo({ tone = "dark", className = "" }: { tone?: "dark" | "light"; className?: string }) {
  const light = tone === "light";
  const { lang } = useLang();
  return (
    <Link to={localPath(lang, "/")} className={`group flex shrink-0 items-center gap-2.5 whitespace-nowrap ${className}`} aria-label="AV Appliance Services — home">
      <picture>
        <source srcSet="/brand/mark-192.webp" type="image/webp" />
        <img
          src="/brand/mark-192.png"
          alt=""
          width={44}
          height={44}
          className="h-10 w-10 rounded-xl shadow-glow transition-transform duration-300 group-hover:-rotate-6 sm:h-11 sm:w-11"
        />
      </picture>
      <span className="leading-none">
        <span className={`block text-[17px] font-extrabold tracking-tight sm:text-lg ${light ? "text-white" : "text-brand-950"}`}>
          AV Appliance
        </span>
        <span className={`mt-1 block text-[10px] font-bold uppercase tracking-[0.2em] sm:text-[10.5px] sm:tracking-[0.28em] ${light ? "text-ice-300" : "text-brand-600"}`}>
          Services<span className="hidden min-[380px]:inline"> · Vijayawada</span>
        </span>
      </span>
    </Link>
  );
}
