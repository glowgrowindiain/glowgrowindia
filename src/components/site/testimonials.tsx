import { Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/site-content";
import { Reveal } from "./motion-primitives";
import { Section, SectionHeading } from "./ui-bits";

export function Testimonials() {
  return (
    <Section id="testimonials">
      <SectionHeading eyebrow="Testimonials" title="What people say" />
      <div className="mt-14 grid gap-5 md:grid-cols-2">
        {TESTIMONIALS.map((t, i) => (
          <Reveal key={t.quote} delay={i * 0.08}>
            <figure className="h-full border border-white/10 bg-brand-surface/50 p-8 backdrop-blur-sm transition-colors duration-500 hover:border-brand-glow/40">
              <Quote className="h-5 w-5 text-brand-glow" />
              <blockquote className="mt-6 font-display text-xl leading-snug font-medium tracking-tight">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-8 border-t border-white/10 pt-5 text-sm">
                <span className="font-semibold">{t.name}</span>
                <span className="mt-1 block text-xs tracking-[0.16em] text-muted-foreground uppercase">
                  {t.role} · {t.company}
                </span>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}