import { useRef } from "react";
import { useInViewOnce } from "@/hooks/useReveal";

const fmt = (n: number) => n.toLocaleString("en-IN");

/**
 * Renders the final number in HTML (so crawlers read the real value), then
 * counts up from zero the first time it scrolls into view.
 */
export default function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);

  useInViewOnce(ref, () => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const start = performance.now();
    const dur = 1400;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / dur);
      const eased = 1 - Math.pow(1 - t, 3);
      el.textContent = fmt(Math.round(value * eased)) + suffix;
      if (t < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  });

  return (
    <span ref={ref} className="tabular-nums">
      {fmt(value)}
      {suffix}
    </span>
  );
}
