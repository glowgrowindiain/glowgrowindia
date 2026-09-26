import { ArrowUpRight } from "lucide-react";
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