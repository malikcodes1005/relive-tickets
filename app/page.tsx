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
  {
    q: "What events can I get a stub for?",
    a: "Concerts, sporting events, festivals, comedy shows — if it had a ticket, we can reprint it. Reach out if you're unsure.",
  },
  {
    q: "How long does it take?",
    a: "Orders typically ship within 5–7 business days. We're a small operation and take our time to get the details right.",
  },
  {
    q: "What size are the stubs?",
    a: "Every stub is printed at the standard ticket size: 3.5\" × 7.25\" — the same dimensions as a real event ticket.",
  },
  {
    q: "Can I order in bulk or get a custom design?",
    a: "Yes — email us for bulk orders, wedding favors, or full custom designs. We'll work something out.",
  },
];

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-gradient-to-b from-amber-50 to-[#faf7f2] py-28 px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <p className="text-sm font-semibold tracking-widest text-amber-600 uppercase mb-4 fade-in-up">
              Premium Ticket Stub Memorabilia
            </p>
            <h1 className="text-5xl md:text-6xl font-bold text-amber-900 leading-tight fade-in-up-2">
              Some nights deserve<br />to be remembered.
            </h1>
            <p className="mt-6 text-lg text-amber-700 max-w-xl mx-auto fade-in-up-3">
              We reprint your favorite event tickets as premium collector stubs — complete with packaging that feels like opening a gift.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center fade-in-up-3">
              <a
                href="#tiers"
                className="px-8 py-4 bg-amber-600 text-white rounded-xl font-semibold hover:bg-amber-700 transition-colors shadow-sm"
              >
                Shop Now
              </a>
              <a
                href="#how-it-works"
                className="px-8 py-4 border border-amber-300 text-amber-800 rounded-xl font-semibold hover:bg-amber-100 transition-colors"
              >
                How It Works
              </a>
            </div>
          </div>

          {/* Decorative ticket stub mockups */}
          <div className="mt-20 flex justify-center gap-4 opacity-60 pointer-events-none select-none">
            {[
              { label: "Springsteen", sub: "1984" },
              { label: "Game 7", sub: "2016" },
              { label: "Beyoncé", sub: "2023" },
            ].map((item) => (
              <div
                key={item.label}
                className="hidden md:flex flex-col w-36 rounded-lg border-2 border-amber-300 bg-white p-3 text-xs text-amber-800 font-mono shadow"
                style={{ transform: `rotate(${item.sub === "2016" ? "2deg" : "-2deg"})` }}
              >
                <div className="text-[10px] font-bold tracking-widest text-amber-500 mb-2">ADMIT ONE</div>
                <div className="text-sm font-bold leading-tight">{item.label}</div>
                <div className="text-amber-500 mt-1">{item.sub}</div>
                <div className="mt-4 border-t border-dashed border-amber-200 pt-2 text-[10px] text-amber-400">RELIVE TICKETS</div>
              </div>
            ))}
          </div>
        </section>

        {/* How It Works */}
        <section id="how-it-works" className="py-24 px-6 bg-[#faf7f2]">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-amber-900 text-center mb-16">How It Works</h2>
            <div className="grid md:grid-cols-3 gap-10">
              {steps.map((s) => (
                <div key={s.n} className="text-center">
                  <div className="text-5xl font-bold text-amber-200 mb-4">{s.n}</div>
                  <h3 className="text-lg font-bold text-amber-900 mb-2">{s.title}</h3>
                  <p className="text-amber-700 text-sm leading-relaxed">{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tiers */}
        <section id="tiers" className="py-24 px-6 bg-amber-50/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-amber-900 text-center mb-4">Choose Your Edition</h2>
            <p className="text-center text-amber-700 mb-16 max-w-xl mx-auto">
              Every tier ships in a kraft mailer with a wax seal. The higher you go, the more it feels like a collector&apos;s item.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {TIERS.map((tier, i) => (
                <TierCard key={tier.id} tier={tier} delay={i * 120} />
              ))}
            </div>
          </div>
        </section>

        {/* Brand statement */}
        <section className="py-20 px-6 bg-amber-900 text-white text-center">
          <div className="max-w-2xl mx-auto">
            <p className="text-2xl md:text-3xl font-bold leading-relaxed">
              &ldquo;The ticket is gone. The memory isn&apos;t.&rdquo;
            </p>
            <p className="mt-4 text-amber-300 text-sm">
              Relive Tickets — handcrafted memorabilia for the nights you&apos;ll never forget.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="py-24 px-6 bg-[#faf7f2]">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-amber-900 text-center mb-16">Frequently Asked</h2>
            <div className="space-y-6">
              {faqs.map((faq) => (
                <div key={faq.q} className="border-b border-amber-200 pb-6">
                  <h3 className="font-bold text-amber-900 mb-2">{faq.q}</h3>
                  <p className="text-amber-700 text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-amber-200 py-10 px-6 text-center text-sm text-amber-600">
        <p className="font-bold text-amber-900 mb-1">RELIVE TICKETS</p>
        <p>Premium ticket stub memorabilia · Made with care</p>
        <div className="mt-4 flex justify-center gap-6">
          <Link href="/cart" className="hover:text-amber-800 transition-colors">Cart</Link>
          <a href="mailto:hello@relivetickets.com" className="hover:text-amber-800 transition-colors">Contact</a>
        </div>
      </footer>
    </>
  );
}
