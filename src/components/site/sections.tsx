import { ArrowRight } from "lucide-react";
import {
  INDUSTRIES,
  PRINCIPLES,
  PROCESS,
  SERVICES,
  STATS,
} from "@/lib/site-content";
import { CASE_STUDIES } from "@/lib/work-data";
import { AnimatedNumber, Reveal } from "./motion-primitives";
import { ButtonLink, Section, SectionHeading } from "./ui-bits";
import { CaseStudyCard, ServiceCard } from "./cards";

export function StatsSection() {
  return (
    <Section id="results" className="border-b border-white/10">
      <SectionHeading eyebrow="Results" title="Numbers that speak." />
      <div className="mt-14 grid grid-cols-2 gap-px bg-white/10 md:grid-cols-5">
        {STATS.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.06}>
            <div className="h-full bg-brand-ink p-6 sm:p-8">
              <p className="font-display text-4xl font-bold tracking-tight sm:text-5xl">
                <AnimatedNumber value={s.value} />
                <span className="text-brand-glow">{s.suffix}</span>
              </p>
              <p className="mt-3 text-[10px] font-semibold tracking-[0.22em] text-muted-foreground uppercase">
                {s.label}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function ServicesSection({ compact = false }: { compact?: boolean }) {
  const list = compact ? SERVICES.slice(0, 6) : SERVICES;
  return (
    <Section id="services">
      <SectionHeading
        eyebrow="Capabilities"
        title="What we do"
        sub="From strategy to execution, we build the digital presence your brand needs to grow."
      />
      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {list.map((s, i) => (
          <ServiceCard key={s.n} {...s} delay={(i % 4) * 0.06} />
        ))}
      </div>
      {compact ? (
        <div className="mt-12">
          <ButtonLink to="/services" variant="ghost">
            Explore All Services <ArrowRight className="h-3.5 w-3.5" />
          </ButtonLink>
        </div>
      ) : null}
    </Section>
  );
}

export function WhySection() {
  return (
    <Section className="border-y border-white/10 bg-brand-surface/30">
      <div className="grid gap-14 lg:grid-cols-[1.1fr_1fr]">
        <SectionHeading
          eyebrow="Why Glow Grow India"
          title={
            <>
              We don't just create content.
              <br />
              <span className="text-brand-glow">We create momentum.</span>
            </>
          }
          sub="Attention is easy. Growth is not. We build the systems that turn one into the other."
        />
        <div className="grid gap-px self-start bg-white/10 sm:grid-cols-2">
          {PRINCIPLES.map((p, i) => (
            <Reveal key={p.n} delay={i * 0.06}>
              <div className="h-full bg-brand-ink p-7">
                <span className="font-display text-xs font-bold tracking-[0.3em] text-brand-glow">{p.n}</span>
                <h3 className="mt-6 font-display text-lg font-bold tracking-tight uppercase">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}

export function WorkSection({ compact = false }: { compact?: boolean }) {
  const list = compact ? CASE_STUDIES.slice(0, 2) : CASE_STUDIES;
  return (
    <Section id="work">
      <SectionHeading
        eyebrow="Selected Work"
        title="Selected work"
        sub="Ideas we've turned into attention, engagement and growth."
      />
      <div className="mt-14 grid gap-6 lg:grid-cols-2">
        {list.map((item, i) => (
          <CaseStudyCard key={item.slug} item={item} delay={(i % 2) * 0.08} />
        ))}
      </div>
      {compact ? (
        <div className="mt-12">
          <ButtonLink to="/work" variant="ghost">
            See All Work <ArrowRight className="h-3.5 w-3.5" />
          </ButtonLink>
        </div>
      ) : null}
    </Section>
  );
}

export function IndustriesSection() {
  return (
    <Section className="border-y border-white/10">
      <SectionHeading eyebrow="Industries" title="Built for different kinds of growth." />
      <ul className="mt-12 divide-y divide-white/10 border-y border-white/10">
        {INDUSTRIES.map((industry, i) => (
          <li key={industry}>
            <div className="group flex cursor-default items-center justify-between gap-4 py-5 transition-all duration-300 hover:pl-4">
              <span className="font-display text-2xl font-bold tracking-tight text-foreground/70 uppercase transition-colors duration-300 group-hover:text-brand-glow sm:text-4xl">
                {industry}
              </span>
              <span className="text-[10px] tracking-[0.24em] text-foreground/30 tabular-nums">
                {String(i + 1).padStart(2, "0")}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}

export function ProcessSection() {
  return (
    <Section className="bg-brand-surface/30">
      <SectionHeading eyebrow="Process" title="How we work" />
      <div className="relative mt-14">
        <div className="absolute top-6 right-0 left-0 hidden h-px bg-white/10 lg:block" />
        <div className="grid gap-10 lg:grid-cols-4 lg:gap-6">
          {PROCESS.map((step, i) => (
            <Reveal key={step.n} delay={i * 0.1}>
              <div className="relative">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full border border-brand-glow/40 bg-brand-ink font-display text-xs font-bold text-brand-glow">
                  {step.n}
                </div>
                <h3 className="font-display text-xl font-bold tracking-tight uppercase">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{step.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}