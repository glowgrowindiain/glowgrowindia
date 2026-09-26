import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import heroAbstract from "@/assets/hero-abstract.webp";
import { ButtonLink, Eyebrow, Marquee, Section } from "@/components/site/ui-bits";
import { Reveal } from "@/components/site/motion-primitives";
import {
  IndustriesSection,
  ProcessSection,
  ServicesSection,
  StatsSection,
  WhySection,
  WorkSection,
} from "@/components/site/sections";
import { Testimonials } from "@/components/site/testimonials";
import { CtaSection } from "@/components/site/cta-section";
import { MARQUEE } from "@/lib/site-content";

const title = "Digital Marketing Agency in India | Glow Grow India";
const description =
  "Glow Grow India is a growth-focused digital marketing agency for social media, performance marketing, branding, SEO and event marketing. We make brands glow and businesses grow.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "https://glowgrowmarketing.lovable.app/" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:image", content: "https://glowgrowmarketing.lovable.app/og-image.jpg" },
      { name: "twitter:image", content: "https://glowgrowmarketing.lovable.app/og-image.jpg" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "https://glowgrowmarketing.lovable.app/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "Glow Grow India",
          description,
          url: "https://glowgrowmarketing.lovable.app/",
          areaServed: "India",
          address: { "@type": "PostalAddress", addressLocality: "Jaipur", addressCountry: "IN" },
          founder: { "@type": "Person", name: "Kartik Garg" },
          serviceType: [
            "Digital Marketing",
            "Social Media Marketing",
            "Performance Marketing",
            "Branding",
            "SEO",
            "Event Marketing & Sales",
            "Photography & Videography",
          ],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Section className="relative overflow-hidden pt-32 pb-16 lg:pt-44 lg:pb-24">
        <div className="pointer-events-none absolute -top-24 -left-32 -z-10 h-96 w-96 rounded-full bg-brand-glow/10 blur-[130px] float-slow" />
        <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <Reveal>
              <Eyebrow>Digital Growth × Creative × Technology</Eyebrow>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="mt-7 font-display text-[2.75rem] leading-[0.9] font-bold tracking-tight uppercase sm:text-6xl lg:text-7xl xl:text-8xl">
                We make brands glow.
                <br />
                <span className="text-brand-glow">We make businesses grow.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                Glow Grow India is a modern digital growth agency helping brands turn attention into
                audience, audience into leads, and ideas into growth.
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <div className="mt-10 flex flex-wrap gap-3">
                <ButtonLink to="/contact" magnetic>
                  Start a Project <ArrowRight className="h-3.5 w-3.5" />
                </ButtonLink>
                <ButtonLink to="/work" variant="ghost">
                  Explore Our Work
                </ButtonLink>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1} y={40}>
            <div className="relative">
              <div className="absolute inset-0 -z-10 rounded-full bg-brand-glow/15 blur-[100px]" />
              <img
                src={heroAbstract}
                alt="Abstract 3D growth spiral representing digital marketing, content and technology"
                width={1280}
                height={1280}
                className="w-full border border-white/10 object-cover"
              />
              <div className="absolute -bottom-5 -left-4 border border-white/15 bg-brand-ink/80 px-5 py-3 text-[10px] font-semibold tracking-[0.2em] uppercase backdrop-blur-md">
                Attention is easy. <span className="text-brand-glow">Growth is not.</span>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      <Marquee items={MARQUEE} />
      <p className="px-5 py-10 text-center font-display text-xl font-medium tracking-tight uppercase sm:text-2xl">
        Built for brands that want to be <span className="text-brand-glow">noticed.</span>
      </p>

      <StatsSection />
      <ServicesSection compact />
      <WhySection />
      <WorkSection compact />
      <IndustriesSection />
      <ProcessSection />
      <Testimonials />
      <CtaSection />
    </>
  );
}
