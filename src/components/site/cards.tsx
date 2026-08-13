import { ArrowUpRight } from "lucide-react";
import type { CaseStudy } from "@/lib/work-data";
import { Reveal } from "./motion-primitives";

export function ServiceCard({
  n,
  title,
  desc,
  delay = 0,
}: {
  n: string;
  title: string;
  desc: string;
  delay?: number;
}) {
  return (
    <Reveal delay={delay}>
      <article className="group relative h-full overflow-hidden border border-white/10 bg-brand-surface/50 p-7 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-brand-glow/50">
        <div className="pointer-events-none absolute inset-x-0 -top-24 h-24 bg-brand-glow/20 blur-3xl transition-all duration-700 group-hover:top-0" />
        <div className="relative flex items-start justify-between">
          <span className="font-display text-xs font-bold tracking-[0.3em] text-brand-glow">{n}</span>
          <ArrowUpRight className="h-4 w-4 text-foreground/30 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-brand-glow" />
        </div>
        <h3 className="relative mt-8 font-display text-xl leading-tight font-bold tracking-tight uppercase">
          {title}
        </h3>
        <p className="relative mt-4 text-sm leading-relaxed text-muted-foreground">{desc}</p>
      </article>
    </Reveal>
  );
}

export function CaseStudyCard({ item, delay = 0 }: { item: CaseStudy; delay?: number }) {
  return (
    <Reveal delay={delay}>
      <article className="group border border-white/10 bg-brand-surface/40">
        <div className="relative overflow-hidden">
          <img
            src={item.image}
            alt={item.alt}
            width={1280}
            height={960}
            loading="lazy"
            className="aspect-[4/3] w-full object-cover opacity-80 transition-all duration-700 group-hover:scale-[1.04] group-hover:opacity-100"
          />
          <span className="absolute top-4 left-4 border border-white/20 bg-brand-ink/70 px-3 py-1.5 text-[10px] font-semibold tracking-[0.2em] uppercase backdrop-blur-md">
            {item.category}
          </span>
        </div>
        <div className="p-7">
          <h3 className="font-display text-2xl leading-tight font-bold tracking-tight uppercase">
            {item.name}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
          <p className="mt-5 border-t border-white/10 pt-5 text-sm font-medium text-brand-glow">
            {item.result}
          </p>
          <a
            href="/contact"
            className="mt-6 inline-flex items-center gap-2 text-[10px] font-semibold tracking-[0.22em] uppercase transition-colors hover:text-brand-glow"
          >
            View Case Study <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </article>
    </Reveal>
  );
}