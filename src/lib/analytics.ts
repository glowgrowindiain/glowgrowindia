// Google Analytics 4 — loads ONLY after the visitor accepts cookies and ONLY
// when a Measurement ID is configured (VITE_GA_MEASUREMENT_ID, e.g. "G-XXXXXXX").
// A GA4 Measurement ID is public by design, so it is safe in browser code.

const CONSENT_KEY = "gg-cookie-consent";
export type Consent = "accepted" | "declined";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function getMeasurementId(): string | undefined {
  const id = import.meta.env.VITE_GA_MEASUREMENT_ID as string | undefined;
  return id && /^G-[A-Z0-9]+$/i.test(id.trim()) ? id.trim() : undefined;
}

export function getConsent(): Consent | null {
  try {
    const v = localStorage.getItem(CONSENT_KEY);
    return v === "accepted" || v === "declined" ? v : null;
  } catch {
    return null;
  }
}

export function setConsent(v: Consent) {
  try {
    localStorage.setItem(CONSENT_KEY, v);
  } catch {
    /* ignore */
  }
  if (v === "accepted") loadAnalytics();
}

let loaded = false;
export function loadAnalytics() {
  const id = getMeasurementId();
  if (loaded || !id || typeof window === "undefined") return;
  loaded = true;
  const s = document.createElement("script");
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtag/js?id=${id}`;
  document.head.appendChild(s);
  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer?.push(arguments);
  };
  window.gtag("js", new Date());
  window.gtag("config", id, { anonymize_ip: true });
}

export function trackEvent(name: string, params: Record<string, unknown> = {}) {
  if (typeof window === "undefined" || !window.gtag) return;
  window.gtag("event", name, params);
}

export function trackPageView(path: string) {
  trackEvent("page_view", { page_path: path, page_location: window.location.href });
}

/** One delegated listener for WhatsApp / email / phone links and tagged CTAs. */
export function installClickTracking() {
  const handler = (e: MouseEvent) => {
    const el = (e.target as HTMLElement | null)?.closest("a,button") as HTMLElement | null;
    if (!el) return;
    const href = el.getAttribute("href") || "";
    const page = window.location.pathname;
    if (href.includes("wa.me/")) trackEvent("whatsapp_click", { page });
    else if (href.startsWith("mailto:")) trackEvent("email_click", { page });
    else if (href.startsWith("tel:")) trackEvent("phone_click", { page });
    else if (href.endsWith("/contact")) trackEvent("cta_click", { page, label: el.textContent?.trim().slice(0, 60) });
  };
  document.addEventListener("click", handler, { capture: true });
  return () => document.removeEventListener("click", handler, { capture: true });
}
