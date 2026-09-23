import { createFileRoute } from "@tanstack/react-router";
import { CtaSection } from "@/components/site/cta-section";
import { ProcessSection, WhySection } from "@/components/site/sections";
import { Eyebrow, Section } from "@/components/site/ui-bits";
import { Reveal } from "@/components/site/motion-primitives";
import founderAsset from "@/assets/kartik-garg.jpg.asset.json";

const title = "About Glow Grow India — Digital Marketing Agency in India";
const description =
  "Glow Grow India is a growth-focused digital marketing and creative agency working at the intersection of marketing, creativity and technology.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "https://glowgrowmarketing.lovable.app/about" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://glowgrowmarketing.lovable.app/og-image.jpg" },
      { name: "twitter:image", content: "https://glowgrowmarketing.lovable.app/og-image.jpg" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "https://glowgrowmarketing.lovable.app/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <Section className="pt-36 pb-10 lg:pt-44">
        <Eyebrow>About</Eyebrow>
        <h1 className="mt-6 max-w-4xl font-display text-5xl leading-[0.92] font-bold tracking-tight uppercase sm:text-6xl lg:text-7xl">
          Built with an <span className="text-brand-glow">entrepreneurial mindset.</span>
        </h1>
        <div className="mt-10 grid gap-10 lg:grid-cols-2">
          <p className="text-lg leading-relaxed text-muted-foreground">
            Glow Grow India was built with one simple idea — businesses don't need more noise. They
            need the right strategy, creative execution and consistent growth.
          </p>
          <Reveal>
            <p className="border border-white/10 bg-brand-surface/50 p-8 font-display text-2xl leading-tight font-bold tracking-tight uppercase backdrop-blur-sm">
              Marketing <span className="text-brand-glow">×</span> Creativity{" "}
              <span className="text-brand-glow">×</span> Technology
            </p>
          </Reveal>
        </div>
      </Section>

      <WhySection />

      <Section>
        <Reveal className="flex flex-col gap-8 border border-white/10 bg-brand-surface/40 p-8 backdrop-blur-sm sm:flex-row sm:items-center sm:p-12">
          <img
            src={founderAsset.url}
            alt="Kartik Garg, founder of Glow Grow India"
            width={640}
            height={800}
            loading="lazy"
            className="h-40 w-40 shrink-0 rounded-full border border-brand-glow/40 object-cover object-top sm:h-48 sm:w-48"
          />
          <div>
            <h2 className="font-display text-3xl font-bold tracking-tight uppercase">Kartik Garg</h2>
            <p className="mt-2 text-xs tracking-[0.24em] text-muted-foreground uppercase">
              Founder, Glow Grow India
            </p>
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground">
              Building Glow Grow India as a growth partner for brands that want to be noticed — and
              want the numbers to back it up.
            </p>
          </div>
        </Reveal>
      </Section>

      <ProcessSection />
      <CtaSection />
    </>
  );
}