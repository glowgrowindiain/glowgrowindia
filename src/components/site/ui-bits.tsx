import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { MagneticWrap, Reveal } from "./motion-primitives";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-xs font-semibold uppercase tracking-[0.18em] transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-glow";

const styles = {
  primary:
    "bg-brand-glow text-brand-ink hover:shadow-[0_0_40px_-8px_var(--color-brand-glow)] hover:-translate-y-0.5",
  ghost:
    "border border-white/20 text-foreground hover:border-brand-glow/70 hover:text-brand-glow hover:-translate-y-0.5",
  glass:
    "border border-white/10 bg-white/5 backdrop-blur-md text-foreground hover:bg-white/10 hover:-translate-y-0.5",
};

type Variant = keyof typeof styles;

export function ButtonLink({
  to,
  href,
  variant = "primary",
  magnetic,
  className,
  children,
}: {
  to?: string;
  href?: string;
  variant?: Variant;
  magnetic?: boolean;
  className?: string;
  children: ReactNode;
}) {
  const cls = cn(base, styles[variant], className);
  const inner = href ? (
    <a href={href} className={cls}>
      {children}
    </a>
  ) : (
    <Link to={to ?? "/"} className={cls}>
      {children}
    </Link>
  );
  return magnetic ? <MagneticWrap>{inner}</MagneticWrap> : inner;
}

export function SubmitButton({
  children,
  disabled,
  className,
}: {
  children: ReactNode;
  disabled?: boolean;
  className?: string;
}) {
  return (
    <button
      type="submit"
      disabled={disabled}
      className={cn(base, styles.primary, "disabled:opacity-60", className)}
    >
      {children}
    </button>
  );
}

export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.32em] text-brand-glow",
        className,
      )}
    >
      <span className="h-1 w-1 rounded-full bg-brand-glow" />
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  sub,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  sub?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <Reveal
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <h2 className="mt-5 font-display text-4xl leading-[0.95] font-bold tracking-tight uppercase sm:text-5xl lg:text-6xl">
        {title}
      </h2>
      {sub ? <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">{sub}</p> : null}
    </Reveal>
  );
}

export function Section({
  id,
  className,
  children,
}: {
  id?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className={cn("px-5 py-20 sm:px-8 lg:py-28", className)}>
      <div className="mx-auto w-full max-w-[1240px]">{children}</div>
    </section>
  );
}

export function Marquee({ items }: { items: string[] }) {
  const row = [...items, ...items];
  return (
    <div className="relative overflow-hidden border-y border-white/10 bg-brand-surface/60 py-5">
      <div className="marquee-track flex w-max gap-10 whitespace-nowrap will-change-transform">
        {row.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex items-center gap-10 font-display text-sm font-medium tracking-[0.22em] text-foreground/70 uppercase sm:text-base"
          >
            {item}
            <span className="text-brand-glow">•</span>
          </span>
        ))}
      </div>
    </div>
  );
}