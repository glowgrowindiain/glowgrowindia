import { ArrowRight } from "lucide-react";
import { ButtonLink, Section } from "./ui-bits";
import { Reveal } from "./motion-primitives";

export function CtaSection() {
  return (
    <Section className="relative overflow-hidden">
      <div className="pointer-events-none absolute top-1/2 left-1/2 -z-10 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-glow/15 blur-[120px] float-slow" />
      <div className="pointer-events-none absolute right-0 bottom-0 -z-10 h-72 w-72 rounded-full bg-white/5 blur-[90px]" />
      <Reveal className="relative border border-white/10 bg-brand-surface/40 px-6 py-16 text-center backdrop-blur-md sm:px-12 lg:py-24">
        <h2 className="mx-auto max-w-3xl font-display text-4xl leading-[0.95] font-bold tracking-tight uppercase sm:text-5xl lg:text-7xl">
          Ready to make your brand glow?
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          Let's build something people remember — and a growth engine that keeps working.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <ButtonLink to="/contact" magnetic>
            Start a Project <ArrowRight className="h-3.5 w-3.5" />
          </ButtonLink>
          <ButtonLink to="/contact" variant="ghost">
            Talk to Us
          </ButtonLink>
        </div>
      </Reveal>
    </Section>
  );
}