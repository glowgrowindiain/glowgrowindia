import { createFileRoute } from "@tanstack/react-router";
import { CtaSection } from "@/components/site/cta-section";
import { ProcessSection, ServicesSection } from "@/components/site/sections";
import { Eyebrow, Marquee, Section } from "@/components/site/ui-bits";
import { MARQUEE } from "@/lib/site-content";

const title = "Services — Digital Marketing, Social Media & Performance | Glow Grow India";
const description =
  "Social media management, performance marketing, branding, influencer marketing, SEO & AEO, content production and event marketing from Glow Grow India.";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "https://glowgrowindia.lovable.app/services" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "https://glowgrowindia.lovable.app/services" }],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <Section className="pt-36 pb-10 lg:pt-44">
        <Eyebrow>Services</Eyebrow>
        <h1 className="mt-6 max-w-4xl font-display text-5xl leading-[0.92] font-bold tracking-tight uppercase sm:text-6xl lg:text-7xl">
          Creative that gets noticed.
          <br />
          <span className="text-brand-glow">Strategy that gets results.</span>
        </h1>
        <p className="mt-7 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          A full growth stack for brands, startups, creators and events — built end to end, from
          strategy to reporting.
        </p>
      </Section>
      <Marquee items={MARQUEE} />
      <ServicesSection />
      <ProcessSection />
      <CtaSection />
    </>
  );
}