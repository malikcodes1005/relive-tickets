import Navbar from "@/components/Navbar";
import TierCard from "@/components/TierCard";
import { TIERS } from "@/lib/tiers";
import Link from "next/link";

const steps = [
  { n: "01", title: "Pick Your Tier", body: "Choose Classic, Stat Card, or Display Edition based on how much you want to show off." },
  { n: "02", title: "Tell Us the Event", body: "Enter the event name and date. We handle the rest — researching, designing, and printing your stub." },
  { n: "03", title: "Receive Your Memory", body: "It arrives in a kraft mailer with a wax seal, ready to gift or display. Pure nostalgia." },
];

const faqs = [
  { q: "What events can I get a stub for?", a: "Concerts, sporting events, festivals, comedy shows — if it had a ticket, we can reprint it. Reach out if you're unsure." },
  { q: "How long does it take?", a: "Orders typically ship within 5–7 business days. We're a small operation and take our time to get the details right." },
  { q: "What size are the stubs?", a: "Every stub is printed at the standard ticket size: 3.5\" × 7.25\" — the same dimensions as a real event ticket." },
  { q: "Can I order in bulk or get a custom design?", a: "Yes — email us for bulk orders, wedding favors, or full custom designs. We'll work something out." },
];

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section
          className="relative overflow-hidden py-28 px-6 text-center"
          style={{ background: "linear-gradient(to bottom, color-mix(in srgb, var(--amber-accent) 8%, var(--background)), var(--background))" }}
        >
          <div className="max-w-3xl mx-auto">
            <p className="text-sm font-semibold tracking-widest uppercase mb-4 fade-in-up" style={{ color: "var(--amber-accent)" }}>
              Premium Ticket Stub Memorabilia
            </p>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight fade-in-up-2" style={{ color: "var(--amber-heading)" }}>
              Some nights deserve<br />to be remembered.
            </h1>
            <p className="mt-6 text-lg max-w-xl mx-auto fade-in-up-3" style={{ color: "var(--amber-body)" }}>
              We reprint your favorite event tickets as premium collector stubs — complete with packaging that feels like opening a gift.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center fade-in-up-3">
              <a
                href="#tiers"
                className="px-8 py-4 rounded-xl font-semibold transition-colors shadow-sm text-white btn-amber"
              >
                Shop Now
              </a>
              <a
                href="#how-it-works"
                className="px-8 py-4 rounded-xl font-semibold transition-colors"
                style={{ border: "1px solid var(--border)", color: "var(--amber-body)", backgroundColor: "transparent" }}
              >
                How It Works
              </a>
            </div>
          </div>

          {/* Decorative stubs */}
          <div className="mt-20 flex justify-center gap-4 opacity-40 pointer-events-none select-none">
            {[
              { label: "Springsteen", sub: "1984", rot: "-2deg" },
              { label: "Game 7", sub: "2016", rot: "2deg" },
              { label: "Beyoncé", sub: "2023", rot: "-2deg" },
            ].map((item) => (
              <div
                key={item.label}
                className="hidden md:flex flex-col w-36 rounded-lg p-3 text-xs font-mono shadow"
                style={{ border: "2px solid var(--border)", backgroundColor: "var(--card)", transform: `rotate(${item.rot})`, color: "var(--amber-body)" }}
              >
                <div className="text-[10px] font-bold tracking-widest mb-2" style={{ color: "var(--amber-accent)" }}>ADMIT ONE</div>
                <div className="text-sm font-bold leading-tight">{item.label}</div>
                <div className="mt-1" style={{ color: "var(--amber-subtle)" }}>{item.sub}</div>
                <div className="mt-4 pt-2 text-[10px]" style={{ borderTop: "1px dashed var(--border)", color: "var(--muted)" }}>RELIVE TICKETS</div>
              </div>
            ))}
          </div>
        </section>

        {/* How It Works */}
        <section id="how-it-works" className="py-24 px-6" style={{ backgroundColor: "var(--background)" }}>
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-16" style={{ color: "var(--amber-heading)" }}>How It Works</h2>
            <div className="grid md:grid-cols-3 gap-10">
              {steps.map((s) => (
                <div key={s.n} className="text-center">
                  <div className="text-5xl font-bold mb-4" style={{ color: "var(--border)" }}>{s.n}</div>
                  <h3 className="text-lg font-bold mb-2" style={{ color: "var(--amber-heading)" }}>{s.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--amber-body)" }}>{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tiers */}
        <section
          id="tiers"
          className="py-24 px-6"
          style={{ backgroundColor: "color-mix(in srgb, var(--amber-accent) 4%, var(--background))" }}
        >
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-4" style={{ color: "var(--amber-heading)" }}>Choose Your Edition</h2>
            <p className="text-center mb-16 max-w-xl mx-auto" style={{ color: "var(--amber-body)" }}>
              Every tier ships in a kraft mailer with a wax seal. The higher you go, the more it feels like a collector&apos;s item.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {TIERS.map((tier, i) => (
                <TierCard key={tier.id} tier={tier} delay={i * 120} />
              ))}
            </div>
          </div>
        </section>

        {/* Brand quote */}
        <section className="py-20 px-6 text-center" style={{ backgroundColor: "var(--amber-heading)", color: "var(--foreground)" }}>
          <div className="max-w-2xl mx-auto">
            <p className="text-2xl md:text-3xl font-bold leading-relaxed text-white">
              &ldquo;The ticket is gone. The memory isn&apos;t.&rdquo;
            </p>
            <p className="mt-4 text-sm" style={{ color: "var(--amber-light, #f5c97a)", opacity: 0.8 }}>
              Relive Tickets — handcrafted memorabilia for the nights you&apos;ll never forget.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="py-24 px-6" style={{ backgroundColor: "var(--background)" }}>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-16" style={{ color: "var(--amber-heading)" }}>Frequently Asked</h2>
            <div className="space-y-6">
              {faqs.map((faq) => (
                <div key={faq.q} className="pb-6" style={{ borderBottom: "1px solid var(--border)" }}>
                  <h3 className="font-bold mb-2" style={{ color: "var(--amber-heading)" }}>{faq.q}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--amber-body)" }}>{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="py-10 px-6 text-center text-sm" style={{ borderTop: "1px solid var(--border)", color: "var(--amber-subtle)" }}>
        <p className="font-bold mb-1" style={{ color: "var(--amber-heading)" }}>RELIVE TICKETS</p>
        <p>Premium ticket stub memorabilia · Made with care</p>
        <div className="mt-4 flex justify-center gap-6">
          <Link href="/cart" className="hover:opacity-70 transition-opacity">Cart</Link>
          <a href="mailto:hello@relivetickets.com" className="hover:opacity-70 transition-opacity">Contact</a>
        </div>
      </footer>
    </>
  );
}
