import { Link } from "@tanstack/react-router";
import { Instagram, Linkedin, Mail } from "lucide-react";
import { BRAND, NAV } from "@/lib/site-content";
import logoAsset from "@/assets/glow-grow-logo-light.png.asset.json";

const footerServices = [
  "Social Media",
  "Performance Marketing",
  "Branding",
  "SEO",
  "Content",
  "Events",
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-brand-ink px-5 pt-16 pb-10 sm:px-8">
      <div className="mx-auto grid w-full max-w-[1240px] gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <img
            src={logoAsset.url}
            alt="Glow Grow India"
            width={800}
            height={415}
            loading="lazy"
            className="h-12 w-auto"
          />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
            A modern growth agency helping ambitious brands glow, grow and stand out.
          </p>
          <div className="mt-6 flex gap-3">
            <a
              href={BRAND.instagram}
              aria-label="Glow Grow India on Instagram"
              className="rounded-full border border-white/15 p-2.5 transition-colors hover:border-brand-glow hover:text-brand-glow"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href={BRAND.linkedin}
              aria-label="Glow Grow India on LinkedIn"
              className="rounded-full border border-white/15 p-2.5 transition-colors hover:border-brand-glow hover:text-brand-glow"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href={`mailto:${BRAND.email}`}
              aria-label="Email Glow Grow India"
              className="rounded-full border border-white/15 p-2.5 transition-colors hover:border-brand-glow hover:text-brand-glow"
            >
              <Mail className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-[10px] font-semibold tracking-[0.28em] text-foreground/50 uppercase">
            Navigate
          </h3>
          <ul className="mt-5 space-y-3 text-sm">
            {NAV.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="text-muted-foreground transition-colors hover:text-brand-glow">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-[10px] font-semibold tracking-[0.28em] text-foreground/50 uppercase">
            Services
          </h3>
          <ul className="mt-5 space-y-3 text-sm">
            {footerServices.map((s) => (
              <li key={s}>
                <Link to="/services" className="text-muted-foreground transition-colors hover:text-brand-glow">
                  {s}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-14 flex w-full max-w-[1240px] flex-col gap-3 border-t border-white/10 pt-6 text-[10px] tracking-[0.24em] text-foreground/40 uppercase sm:flex-row sm:items-center sm:justify-between">
        <span>&copy; 2026 Glow Grow India. All Rights Reserved.</span>
        <span>{BRAND.city}</span>
      </div>
    </footer>
  );
}