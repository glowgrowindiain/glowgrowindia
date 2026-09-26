import { createFileRoute } from "@tanstack/react-router";
import { Instagram, Mail, MessageCircle } from "lucide-react";
import { ContactForm } from "@/components/site/contact-form";
import { Eyebrow, Section } from "@/components/site/ui-bits";
import { Reveal } from "@/components/site/motion-primitives";
import { BRAND } from "@/lib/site-content";

const title = "Contact Glow Grow India — Start a Project";
const description =
  "Tell us about your brand and growth goals. Glow Grow India replies to every enquiry within one working day.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "https://glowgrowmarketing.lovable.app/contact" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:image", content: "https://glowgrowmarketing.lovable.app/og-image.jpg" },
      { name: "twitter:image", content: "https://glowgrowmarketing.lovable.app/og-image.jpg" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "https://glowgrowmarketing.lovable.app/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <Section className="pt-36 lg:pt-44">
      <Eyebrow>Contact</Eyebrow>
      <h1 className="mt-6 font-display text-5xl leading-[0.92] font-bold tracking-tight uppercase sm:text-6xl lg:text-7xl">
        Let's talk <span className="text-brand-glow">growth.</span>
      </h1>

      <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_0.55fr]">
        <Reveal>
          <ContactForm />
        </Reveal>

        <Reveal delay={0.1} className="space-y-4">
          <a
            href={BRAND.instagram}
            className="flex items-center gap-4 border border-white/10 bg-brand-surface/40 p-6 transition-colors hover:border-brand-glow/50"
          >
            <Instagram className="h-5 w-5 text-brand-glow" />
            <span>
              <span className="block text-[10px] tracking-[0.24em] text-muted-foreground uppercase">
                Instagram
              </span>
              <span className="text-sm">@glowgrow.india</span>
            </span>
          </a>
          <a
            href={`mailto:${BRAND.email}`}
            className="flex items-center gap-4 border border-white/10 bg-brand-surface/40 p-6 transition-colors hover:border-brand-glow/50"
          >
            <Mail className="h-5 w-5 text-brand-glow" />
            <span>
              <span className="block text-[10px] tracking-[0.24em] text-muted-foreground uppercase">
                Email
              </span>
              <span className="text-sm">{BRAND.email}</span>
            </span>
          </a>
          <a
            href={`https://wa.me/${BRAND.whatsapp}`}
            className="flex items-center gap-4 border border-white/10 bg-brand-surface/40 p-6 transition-colors hover:border-brand-glow/50"
          >
            <MessageCircle className="h-5 w-5 text-brand-glow" />
            <span>
              <span className="block text-[10px] tracking-[0.24em] text-muted-foreground uppercase">
                WhatsApp
              </span>
              <span className="text-sm">{BRAND.phone}</span>
            </span>
          </a>
        </Reveal>
      </div>
    </Section>
  );
}