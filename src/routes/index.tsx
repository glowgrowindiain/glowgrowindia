import { createFileRoute } from "@tanstack/react-router";
import heroLifestyle from "@/assets/hero-lifestyle.jpg";
import caseAmber from "@/assets/case-amber.jpg";
import caseNila from "@/assets/case-nila.jpg";
import logoAsset from "@/assets/glow-grow-logo.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Glow Grow India — Boutique Marketing & Social Media Collective" },
      { name: "description", content: "A boutique social collective elevating Indian brands through high-fidelity storytelling and data-led strategy." },
      { property: "og:title", content: "Glow Grow India — Boutique Marketing & Social Media Collective" },
      { property: "og:description", content: "Elevating Indian brands through high-fidelity storytelling and data-led social strategy." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-brand-cream font-sans text-brand-dark">
      <nav className="flex items-center justify-between px-8 py-5 border-b border-brand-dark/10">
        <img
          src={logoAsset.url}
          alt="Glow Grow India logo"
          width={180}
          height={60}
          className="h-10 w-auto object-contain"
        />
        <div className="hidden md:flex gap-10 text-xs uppercase tracking-widest font-medium">
          <a href="#collective" className="hover:text-brand-gold transition-colors">Collective</a>
          <a href="#expertise" className="hover:text-brand-gold transition-colors">Expertise</a>
          <a href="#work" className="hover:text-brand-gold transition-colors">Case Studies</a>
          <a href="#connect" className="hover:text-brand-gold transition-colors">Connect</a>
        </div>
        <a href="#connect" className="px-6 py-2 bg-brand-dark text-brand-cream text-[10px] uppercase tracking-[0.2em] hover:bg-brand-gold transition-all">
          Inquire
        </a>
      </nav>

      <header className="relative px-8 pt-20 pb-32" id="collective">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-end justify-between gap-12">
            <div className="w-full md:w-2/3">
              <h1 className="font-display text-7xl md:text-9xl leading-[0.9] tracking-tighter">
                Illuminating <br />
                <span className="italic text-brand-gold">Digital Reach.</span>
              </h1>
              <p className="mt-12 text-xl max-w-md leading-relaxed text-brand-dark/70 font-light italic">
                A boutique social collective elevating Indian brands through high-fidelity storytelling and data-led strategy.
              </p>
            </div>
            <div className="w-full md:w-1/3">
              <img
                src={heroLifestyle}
                alt="Soft morning light over a ceramic vessel"
                width={800}
                height={1000}
                className="w-full aspect-[4/5] object-cover grayscale outline-1 -outline-offset-1 outline-black/10"
              />
            </div>
          </div>
        </div>
      </header>

      <section id="expertise" className="px-8 py-24 bg-brand-dark text-brand-cream">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-brand-cream/10">
            {[
              { n: "01", t: "Social Identity", d: "Defining your visual pulse and voice across the modern social landscape. We curate aesthetics that stick." },
              { n: "02", t: "Growth Loops", d: "Performance marketing built on organic foundations. We scale conversion without losing your brand soul." },
              { n: "03", t: "Creator Sync", d: "Direct access to India's top creative tier. Seamless partnerships that drive genuine cultural conversation." },
            ].map((s) => (
              <div key={s.n} className="p-12 bg-brand-dark">
                <span className="text-brand-cream/50 font-display italic text-2xl">{s.n}</span>
                <h3 className="mt-6 text-2xl font-light uppercase tracking-wide">{s.t}</h3>
                <p className="mt-4 text-sm leading-relaxed text-brand-cream/60 font-light">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="work" className="px-8 py-32 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-end mb-16">
            <h2 className="font-display text-5xl">Selected Works.</h2>
            <a href="#connect" className="text-[10px] uppercase tracking-widest border-b border-brand-dark/20 pb-1">View Archive</a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="group cursor-pointer">
              <div className="overflow-hidden">
                <img
                  src={caseAmber}
                  alt="The Amber Collective campaign"
                  width={1200}
                  height={800}
                  loading="lazy"
                  className="w-full aspect-[3/2] object-cover grayscale transition-transform duration-700 group-hover:scale-[1.02]"
                />
              </div>
              <div className="mt-6">
                <span className="text-[10px] uppercase tracking-widest text-brand-gold font-semibold">E-Commerce</span>
                <h4 className="text-2xl mt-2 font-display italic">The Amber Collective</h4>
              </div>
            </div>

            <div className="group cursor-pointer md:translate-y-20">
              <div className="overflow-hidden">
                <img
                  src={caseNila}
                  alt="Nila Residency interior"
                  width={1200}
                  height={800}
                  loading="lazy"
                  className="w-full aspect-[3/2] object-cover grayscale transition-transform duration-700 group-hover:scale-[1.02]"
                />
              </div>
              <div className="mt-6">
                <span className="text-[10px] uppercase tracking-widest text-brand-gold font-semibold">Lifestyle</span>
                <h4 className="text-2xl mt-2 font-display italic">Nila Residency</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer id="connect" className="px-8 py-16 border-t border-brand-dark/10 text-center">
        <img
          src={logoAsset.url}
          alt="Glow Grow India logo"
          width={180}
          height={60}
          loading="lazy"
          className="mx-auto h-12 w-auto object-contain"
        />
        <div className="text-4xl font-display italic mt-6 mb-8">Ready to Glow?</div>
        <a href="mailto:hello@glowgrow.in" className="text-[10px] uppercase tracking-[0.3em] text-brand-dark/60 hover:text-brand-gold transition-colors">
          hello@glowgrow.in
        </a>
        <div className="mt-8 text-[10px] uppercase tracking-[0.3em] text-brand-dark/40">
          &copy; 2026 Glow Grow India &bull; Mumbai &bull; Bengaluru
        </div>
      </footer>
    </div>
  );
}
