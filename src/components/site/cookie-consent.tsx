import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import {
  getConsent,
  installClickTracking,
  loadAnalytics,
  setConsent,
  trackPageView,
} from "@/lib/analytics";

export function CookieConsent() {
  const [show, setShow] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const c = getConsent();
    if (c === "accepted") loadAnalytics();
    else if (c === null) setShow(true);
    return installClickTracking();
  }, []);

  useEffect(() => {
    trackPageView(pathname);
  }, [pathname]);

  if (!show) return null;

  const choose = (v: "accepted" | "declined") => {
    setConsent(v);
    setShow(false);
  };

  return (
    <div
      role="region"
      aria-label="Cookie notice"
      className="fixed inset-x-3 bottom-20 z-40 border border-white/15 bg-brand-surface/95 p-5 backdrop-blur-xl sm:inset-x-auto sm:bottom-6 sm:left-6 sm:max-w-sm"
    >
      <p className="text-xs leading-relaxed text-foreground/80">
        We use cookies for analytics to understand how visitors use our site and improve it. No
        ads, no selling your data. See our{" "}
        <Link to="/privacy-policy" className="text-brand-glow underline underline-offset-2">
          Privacy Policy
        </Link>
        .
      </p>
      <div className="mt-4 flex gap-2">
        <button
          type="button"
          onClick={() => choose("accepted")}
          className="min-h-11 rounded-full bg-brand-glow px-5 text-[10px] font-semibold tracking-[0.2em] text-brand-ink uppercase focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-glow"
        >
          Accept
        </button>
        <button
          type="button"
          onClick={() => choose("declined")}
          className="min-h-11 rounded-full border border-white/20 px-5 text-[10px] font-semibold tracking-[0.2em] text-foreground uppercase focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-glow"
        >
          Decline
        </button>
      </div>
    </div>
  );
}
