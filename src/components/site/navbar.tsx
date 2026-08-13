import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { NAV } from "@/lib/site-content";
import { cn } from "@/lib/utils";
import { ButtonLink } from "./ui-bits";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-white/10 bg-brand-ink/80 py-2.5 backdrop-blur-xl"
          : "border-b border-transparent py-5",
      )}
    >
      <nav className="mx-auto flex w-full max-w-[1240px] items-center justify-between px-5 sm:px-8">
        <Link
          to="/"
          className="font-display text-sm font-bold tracking-[0.22em] uppercase sm:text-base"
          onClick={() => setOpen(false)}
        >
          Glow<span className="text-brand-glow">Grow</span> India
        </Link>

        <div className="hidden items-center gap-9 lg:flex">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              activeProps={{ className: "text-brand-glow" }}
              className="group relative text-[11px] font-semibold tracking-[0.2em] text-foreground/70 uppercase transition-colors hover:text-foreground"
            >
              {item.label}
              <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-brand-glow transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </div>

        <div className="hidden lg:block">
          <ButtonLink to="/contact" magnetic className="px-5 py-2.5">
            Start a Project <ArrowRight className="h-3.5 w-3.5" />
          </ButtonLink>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="rounded-full border border-white/15 p-2.5 lg:hidden"
        >
          {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </nav>

      {open ? (
        <div className="border-t border-white/10 bg-brand-ink/95 px-5 pt-4 pb-7 backdrop-blur-xl lg:hidden">
          <div className="flex flex-col gap-1">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="border-b border-white/5 py-3 font-display text-2xl font-bold tracking-tight uppercase"
              >
                {item.label}
              </Link>
            ))}
          </div>
          <ButtonLink to="/contact" className="mt-6 w-full">
            Start a Project <ArrowRight className="h-3.5 w-3.5" />
          </ButtonLink>
        </div>
      ) : null}
    </header>
  );
}