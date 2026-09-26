import { createFileRoute, Link } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/legal-page";
import { BRAND } from "@/lib/site-content";

const url = "https://glowgrowmarketing.lovable.app/terms";
const title = "Terms & Conditions | Glow Grow India";
const description =
  "Terms and conditions for using the Glow Grow India website and engaging our digital marketing and creative services.";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: url },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: url }],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <LegalPage eyebrow="Legal" title="Terms & Conditions" updated="September 2026">
      <section>
        <p>
          By using this website you agree to these terms. If you do not agree, please do not use
          the website.
        </p>
      </section>
      <section>
        <h2>1. Website use</h2>
        <p>
          You may browse this website for personal and business information purposes. You must not
          misuse it, attempt to disrupt it, submit spam or false information, or copy its content
          for commercial use without our permission.
        </p>
      </section>
      <section>
        <h2>2. Our services</h2>
        <p>
          Information about our services on this website is general and does not form an offer.
          The scope, deliverables, timelines and fees for any project are agreed separately in a
          written proposal, quotation or agreement between you and Glow Grow India.
        </p>
      </section>
      <section>
        <h2>3. Payments</h2>
        <p>
          Payment terms, including advance payments, milestones and invoicing, are set out in the
          proposal or agreement for each project. Results from marketing activities (such as reach,
          followers, leads or sales) depend on many factors and are not guaranteed unless expressly
          agreed in writing.
        </p>
      </section>
      <section>
        <h2>4. Intellectual property</h2>
        <p>
          The Glow Grow India name, logo, website design, text and graphics belong to Glow Grow
          India unless stated otherwise. Ownership of work created for clients is governed by the
          relevant client agreement.
        </p>
      </section>
      <section>
        <h2>5. Portfolio and case studies</h2>
        <p>
          Work shown on this website is presented to illustrate our capabilities. Brand names,
          images and results belong to their respective owners and are shown for portfolio
          purposes. Some images may be representative.
        </p>
      </section>
      <section>
        <h2>6. Information you submit</h2>
        <p>
          When you submit an enquiry you confirm the information is accurate and that you are
          allowed to share it. We handle it as described in our{" "}
          <Link to="/privacy-policy">Privacy Policy</Link>.
        </p>
      </section>
      <section>
        <h2>7. Third-party services and links</h2>
        <p>
          This website links to third-party services such as WhatsApp, Instagram and LinkedIn. We
          are not responsible for their content, availability or privacy practices.
        </p>
      </section>
      <section>
        <h2>8. Limitation of liability</h2>
        <p>
          This website is provided "as is". To the extent permitted by law, Glow Grow India is not
          liable for any indirect or consequential loss arising from use of this website or
          reliance on its content.
        </p>
      </section>
      <section>
        <h2>9. Changes</h2>
        <p>
          We may update this website, our services or these terms at any time. Continued use of the
          website means you accept the updated terms.
        </p>
      </section>
      <section>
        <h2>10. Governing law</h2>
        <p>These terms are governed by the laws of India.</p>
      </section>
      <section>
        <h2>11. Contact</h2>
        <p>
          Email: <a href={`mailto:${BRAND.email}`}>{BRAND.email}</a>
          <br />
          WhatsApp: {BRAND.phone}
        </p>
      </section>
    </LegalPage>
  );
}
