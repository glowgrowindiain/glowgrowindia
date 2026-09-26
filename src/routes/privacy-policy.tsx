import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/legal-page";
import { BRAND } from "@/lib/site-content";

const url = "https://glowgrowmarketing.lovable.app/privacy-policy";
const title = "Privacy Policy | Glow Grow India";
const description =
  "How Glow Grow India collects, uses, stores and protects information submitted through our website and enquiry forms.";

export const Route = createFileRoute("/privacy-policy")({
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
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <LegalPage eyebrow="Legal" title="Privacy Policy" updated="September 2026">
      <section>
        <p>
          This Privacy Policy explains how Glow Grow India ("we", "us", "our"), a digital marketing
          and creative agency based in {BRAND.city}, handles information when you visit this website
          or contact us.
        </p>
      </section>
      <section>
        <h2>1. Information you give us</h2>
        <p>When you submit our enquiry form, we collect:</p>
        <ul>
          <li>Your name, email address and phone number</li>
          <li>Your company or brand name (optional)</li>
          <li>The service you are interested in, your budget range and your message</li>
          <li>The page of our website you submitted the form from</li>
        </ul>
        <p>If you contact us by WhatsApp, email or Instagram, we receive the details you share there.</p>
      </section>
      <section>
        <h2>2. Website usage information</h2>
        <p>
          If you accept analytics cookies, we use Google Analytics to collect anonymous usage
          information such as pages viewed, approximate location (city/country), device and browser
          type, how you arrived at our site, and clicks on contact buttons. This does not identify
          you personally.
        </p>
      </section>
      <section>
        <h2>3. Cookies</h2>
        <p>
          We only set analytics cookies after you click "Accept" on our cookie notice. If you
          decline, no analytics cookies are set. We store your choice in your browser so we don't
          ask again. You can reset it at any time by clearing your browser's site data.
        </p>
      </section>
      <section>
        <h2>4. How we use your information</h2>
        <ul>
          <li>To reply to your enquiry and discuss a potential project</li>
          <li>To prepare proposals and provide services you request</li>
          <li>To understand and improve how our website performs</li>
          <li>To protect our website and forms from spam and misuse</li>
        </ul>
        <p>We do not sell or rent your personal information.</p>
      </section>
      <section>
        <h2>5. Third-party services</h2>
        <p>We use trusted providers to run this website and handle enquiries, including:</p>
        <ul>
          <li>Our website hosting and database provider, where enquiries are stored</li>
          <li>Google Sheets (Google), used by our team to manage enquiries</li>
          <li>Google Analytics (Google), only if you accept cookies</li>
          <li>WhatsApp and Instagram (Meta), if you choose to contact us there</li>
        </ul>
        <p>These providers process information under their own privacy policies.</p>
      </section>
      <section>
        <h2>6. Storage and security</h2>
        <p>
          Enquiries are stored securely with access limited to authorised Glow Grow India team
          members. Our website is served over encrypted HTTPS. No method of transmission or
          storage is completely secure, but we take reasonable steps to protect your information.
        </p>
      </section>
      <section>
        <h2>7. Data retention</h2>
        <p>
          We keep enquiry details for as long as needed to respond to you and manage any working
          relationship, and delete or anonymise them when they are no longer needed, unless we
          must keep them for legal or accounting reasons.
        </p>
      </section>
      <section>
        <h2>8. Your rights</h2>
        <p>
          You can ask us to access, correct or delete the personal information we hold about you,
          or withdraw consent for analytics at any time. Email us and we will respond within a
          reasonable time.
        </p>
      </section>
      <section>
        <h2>9. Contact us</h2>
        <p>
          Email: <a href={`mailto:${BRAND.email}`}>{BRAND.email}</a>
          <br />
          WhatsApp: {BRAND.phone}
          <br />
          Location: {BRAND.city}
        </p>
      </section>
      <section>
        <h2>10. Updates to this policy</h2>
        <p>
          We may update this policy from time to time. The latest version will always be on this
          page with the "Last updated" date above.
        </p>
      </section>
    </LegalPage>
  );
}
