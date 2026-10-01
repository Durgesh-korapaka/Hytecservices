import { GA_MEASUREMENT_ID } from "@/config/site";

type DataLayerWindow = Window & { dataLayer?: unknown[]; gtag?: (...args: unknown[]) => void };

/**
 * Counts leads: every tap on a phone link, WhatsApp link or the booking form
 * becomes a `generate_lead` event (GA4's recommended lead event), tagged with
 * the method and the page it came from — so you can see which pages bring calls.
 */
export function installLeadTracking() {
  const w = window as DataLayerWindow;
  w.dataLayer = w.dataLayer || [];
  w.gtag = function gtag() {
    // eslint-disable-next-line prefer-rest-params
    w.dataLayer!.push(arguments);
  };

  if (GA_MEASUREMENT_ID) {
    const s = document.createElement("script");
    s.async = true;
    s.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    document.head.appendChild(s);
    w.gtag("js", new Date());
    w.gtag("config", GA_MEASUREMENT_ID);
  }

  const track = (method: "call" | "whatsapp" | "form", label: string) =>
    w.gtag!("event", "generate_lead", { method, page_path: window.location.pathname, link_text: label.slice(0, 80) });

  document.addEventListener(
    "click",
    (e) => {
      const a = (e.target as Element | null)?.closest?.("a");
      if (!a) return;
      const href = a.getAttribute("href") ?? "";
      if (href.startsWith("tel:")) track("call", a.textContent?.trim() || "call");
      else if (href.includes("wa.me/")) track("whatsapp", a.textContent?.trim() || "whatsapp");
    },
    { capture: true },
  );

  document.addEventListener("submit", () => track("form", "booking form"), { capture: true });
}
