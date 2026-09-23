import { createFileRoute } from "@tanstack/react-router";
import { CtaSection } from "@/components/site/cta-section";
import { StatsSection, WorkSection } from "@/components/site/sections";
import { Testimonials } from "@/components/site/testimonials";
import { Eyebrow, Section } from "@/components/site/ui-bits";

const title = "Work & Case Studies | Glow Grow India";
const description =
  "Case studies from Glow Grow India: community growth, event marketing, performance marketing and branding campaigns built for Indian brands.";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "https://glowgrowmarketing.lovable.app/work" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://glowgrowmarketing.lovable.app/og-image.jpg" },
      { name: "twitter:image", content: "https://glowgrowmarketing.lovable.app/og-image.jpg" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "https://glowgrowmarketing.lovable.app/work" }],
  }),
  component: WorkPage,
});

function WorkPage() {
  return (
    <>
      <Section className="pt-36 pb-4 lg:pt-44">
        <Eyebrow>Selected Work</Eyebrow>
        <h1 className="mt-6 max-w-4xl font-display text-5xl leading-[0.92] font-bold tracking-tight uppercase sm:text-6xl lg:text-7xl">
          We turn ideas into attention — <span className="text-brand-glow">and attention into growth.</span>
        </h1>
      </Section>
      <WorkSection />
      <StatsSection />
      <Testimonials />
      <CtaSection />
    </>
  );
}