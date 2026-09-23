import type { ReactNode } from "react";
import { Eyebrow, Section } from "./ui-bits";

export function LegalPage({
  eyebrow,
  title,
  updated,
  children,
}: {
  eyebrow: string;
  title: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <Section className="pt-36 lg:pt-44">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h1 className="mt-6 font-display text-4xl leading-[0.95] font-bold tracking-tight uppercase sm:text-5xl lg:text-6xl">
        {title}
      </h1>
      <p className="mt-4 text-xs tracking-[0.2em] text-foreground/60 uppercase">Last updated: {updated}</p>
      <div className="mt-12 max-w-3xl space-y-8 text-sm leading-relaxed text-foreground/75 [&_a]:text-brand-glow [&_a]:underline [&_a]:underline-offset-2 [&_h2]:font-display [&_h2]:text-xl [&_h2]:font-bold [&_h2]:tracking-tight [&_h2]:text-foreground [&_h2]:uppercase [&_li]:ml-5 [&_li]:list-disc [&_p]:mt-3 [&_ul]:mt-3 [&_ul]:space-y-1.5">
        {children}
      </div>
    </Section>
  );
}
