import Navbar from "@/components/Navbar";
import TierCard from "@/components/TierCard";
import HeroBackground from "@/components/HeroBackground";
import StickyCartBar from "@/components/StickyCartBar";
import { TIERS } from "@/lib/tiers";
import Link from "next/link";

const steps = [
  { n: "01", title: "Pick Your Tier", body: "Classic reprint, stat card, or full display piece — choose how you want to rep the night." },
  { n: "02", title: "Tell Us the Show", body: "Drop the event name and date. We handle all the research, design, and printing. You just wait." },
  { n: "03", title: "It Shows Up at Your Door", body: "Arrives in premium packaging, wrapped in twine. Opening it is half the experience." },
];

const faqs = [
  { q: "What events can I get a stub for?", a: "Concerts, playoff games, championship bouts, festivals, comedy shows — if you were there and it had a ticket, we can reprint it. Doesn't matter how old it is." },
  { q: "How long does it take to ship?", a: "Most orders ship within 5–7 business days. We're a small crew that cares about the details, so we don't rush it." },
  { q: "What size are the stubs?", a: "Every stub is printed at the authentic ticket size: 3.5\" × 7.25\" — the exact same dimensions as a real event ticket." },
  { q: "Can I order multiple stubs or give them as a gift?", a: "Absolutely. The packaging is already gift-ready straight out of the box. Perfect for the fan who has everything." },
];

const testimonials = [
  { quote: "I've been to 200+ shows. This is the first time I've been able to hold one in my hands again.", name: "Jordan M.", sub: "Concert fan, Chicago" },
  { quote: "Got one for my dad's first Bulls game in 1991. He didn't say anything for a full minute.", name: "Tanya R.", sub: "Gift order, Atlanta" },
  { quote: "The Display Edition is literally framed in my living room. People ask about it every single time.", name: "Marcus T.", sub: "Season ticket holder, LA" },
];

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        {/* ── HERO ── live concert strobe backdrop */}
        <section className="relative overflow-hidden py-20 md:py-32 px-4 sm:px-6 text-center" style={{ backgroundColor: "#0a0a0a", minHeight: "100svh" }}>
          <HeroBackground />

          {/* Photosensitivity notice */}
          <div className="absolute top-3 right-4 z-20">
            <span className="text-[10px] px-2 py-1 rounded" style={{ backgroundColor: "rgba(0,0,0,0.6)", color: "rgba(255,255,255,0.4)", border: "1px solid rgba(255,255,255,0.1)" }}>
              ⚠ Flashing lights
            </span>
          </div>

          <div className="relative z-10 max-w-3xl mx-auto" style={{ paddingTop: "2rem" }}>
            <p className="text-sm font-semibold tracking-widest uppercase mb-5 fade-in-up" style={{ color: "var(--energy)" }}>
              ● LIVE NOW — Official Ticket Stub Reprints
            </p>
            <h1 className="text-5xl md:text-7xl font-bold leading-[1.05] fade-in-up-2" style={{ color: "#ffffff", textShadow: "0 2px 40px rgba(0,0,0,0.9), 0 0 80px rgba(0,0,0,0.6)" }}>
              You were there.<br />
              <span className="gold-text">Now you can prove it.</span>
            </h1>
            <p className="mt-6 text-lg max-w-xl mx-auto fade-in-up-3" style={{ color: "#c4a06a", textShadow: "0 1px 20px rgba(0,0,0,0.8)" }}>
              We turn your greatest nights — the sold-out shows, the overtime wins, the concerts you still talk about — into premium collector stubs that actually feel like something.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center fade-in-up-3">
              <a href="#tiers" className="px-8 py-4 rounded-xl font-bold text-white transition-colors shadow-lg btn-energy" style={{ fontSize: "1rem" }}>
                Build Your Stub →
              </a>
              <a
                href="#how-it-works"
                className="px-8 py-4 rounded-xl font-semibold transition-colors"
                style={{ border: "1px solid rgba(217,169,43,0.4)", color: "#d9a92b", backgroundColor: "rgba(217,169,43,0.06)" }}
              >
                See How It Works
              </a>
            </div>
          </div>

          {/* Stub cards — full contrast, visible */}
          <div className="relative z-10 mt-20 flex justify-center gap-5">
            {[
              { label: "Bruce Springsteen", sub: "Born in the USA Tour · 1984", rot: "-3deg", scale: "1" },
              { label: "NBA Finals — Game 7", sub: "Cleveland vs Golden State · 2016", rot: "0deg", scale: "1.08" },
              { label: "Beyoncé — Renaissance", sub: "SoFi Stadium · Aug 2023", rot: "3deg", scale: "1" },
            ].map((item) => (
              <div
                key={item.label}
                className="hidden md:flex flex-col w-44 rounded-xl p-4 font-mono stub-card-glow"
                style={{
                  background: "linear-gradient(160deg, #141414 0%, #1e1a10 100%)",
                  border: `1px solid rgba(217,169,43,0.35)`,
                  transform: `rotate(${item.rot}) scale(${item.scale})`,
                  transition: "transform 0.2s",
                }}
              >
                <div className="flex justify-between items-start mb-3">
                  <span className="text-[9px] tracking-widest font-bold" style={{ color: "#d62828" }}>THE STUB ARCHIVE</span>
                  <span className="text-[9px]" style={{ color: "#d9a92b" }}>ADMIT ONE</span>
                </div>
                <p className="text-sm font-bold leading-snug mb-2" style={{ color: "#ffffff" }}>{item.label}</p>
                <p className="text-[10px] leading-snug" style={{ color: "#d9a92b" }}>{item.sub}</p>
                <div className="mt-4 flex gap-px items-end h-5" style={{ opacity: 0.6 }}>
                  {[3,1,4,1,2,3,1,4,2,3,1,2,4,1,3].map((h, i) => (
                    <div key={i} style={{ width: 2, height: `${h * 4}px`, backgroundColor: "#d9a92b" }} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── EVENT TYPE BAR ── */}
        <div
          className="py-4 px-6 text-center text-xs font-bold tracking-widest overflow-hidden"
          style={{ backgroundColor: "var(--energy)", color: "white" }}
        >
          🎸 CONCERTS &nbsp;·&nbsp; 🏀 PLAYOFF GAMES &nbsp;·&nbsp; 🎤 FESTIVAL SETS &nbsp;·&nbsp; 🏆 CHAMPIONSHIPS &nbsp;·&nbsp; ⚾ WORLD SERIES &nbsp;·&nbsp; 🎸 CONCERTS &nbsp;·&nbsp; 🏒 STANLEY CUP &nbsp;·&nbsp; 🎤 SOLD-OUT SHOWS
        </div>

        {/* ── HOW IT WORKS ── */}
        <section id="how-it-works" className="py-16 md:py-24 px-4 sm:px-6" style={{ backgroundColor: "var(--background)" }}>
          <div className="max-w-5xl mx-auto">
            <p className="text-center text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "var(--energy)" }}>Simple process</p>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16" style={{ color: "var(--amber-heading)" }}>From memory to your hands in days</h2>
            <div className="grid md:grid-cols-3 gap-10">
              {steps.map((s) => (
                <div key={s.n} className="text-center">
                  <div className="text-6xl font-bold mb-4" style={{ color: "var(--border)", fontVariantNumeric: "tabular-nums" }}>{s.n}</div>
                  <h3 className="text-lg font-bold mb-2" style={{ color: "var(--amber-heading)" }}>{s.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--amber-body)" }}>{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── TIERS ── */}
        <section
          id="tiers"
          className="py-16 md:py-24 px-4 sm:px-6"
          style={{ background: "linear-gradient(to bottom, color-mix(in srgb, var(--amber-accent) 5%, var(--background)), var(--background))" }}
        >
          <div className="max-w-6xl mx-auto">
            <p className="text-center text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "var(--energy)" }}>Three editions</p>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4" style={{ color: "var(--amber-heading)" }}>
              How do you want to rep the night?
            </h2>
            <p className="text-center mb-16 max-w-xl mx-auto" style={{ color: "var(--amber-body)" }}>
              Every order ships in premium packaging. Pick your edition, preview your stub live, and let us handle the rest.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {TIERS.map((tier, i) => (
                <TierCard key={tier.id} tier={tier} delay={i * 120} />
              ))}
            </div>
          </div>
        </section>

        {/* ── TESTIMONIALS ── */}
        <section className="py-16 md:py-24 px-4 sm:px-6" style={{ backgroundColor: "var(--background)" }}>
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-16" style={{ color: "var(--amber-heading)" }}>Real fans. Real nights.</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((t) => (
                <div
                  key={t.name}
                  className="rounded-2xl p-6"
                  style={{ backgroundColor: "var(--card)", border: "1px solid var(--border)" }}
                >
                  <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--amber-body)" }}>&ldquo;{t.quote}&rdquo;</p>
                  <p className="text-sm font-bold" style={{ color: "var(--amber-heading)" }}>{t.name}</p>
                  <p className="text-xs mt-0.5" style={{ color: "var(--muted)" }}>{t.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PULL QUOTE — marquee treatment ── */}
        <section
          className="py-16 md:py-24 px-4 sm:px-6 text-center relative overflow-hidden"
          style={{ backgroundColor: "#0a0a0a" }}
        >
          {/* Stage-light glow behind text */}
          <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(224,56,61,0.12) 0%, transparent 70%)" }} />
          <div className="relative max-w-3xl mx-auto">
            <p className="text-xs font-bold tracking-widest uppercase mb-6" style={{ color: "var(--energy)" }}>● The Stub Archive Promise</p>
            <p className="text-3xl md:text-5xl font-bold leading-tight" style={{ color: "#ffffff" }}>
              &ldquo;The ticket is gone.<br />
              <span className="gold-text">The feeling isn&apos;t.</span><br />
              Now neither is the stub.&rdquo;
            </p>
            <div className="mt-10">
              <a href="#tiers" className="inline-block px-10 py-4 rounded-xl font-bold text-white btn-energy shadow-lg">
                Build Your Stub Now
              </a>
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section id="faq" className="py-16 md:py-24 px-4 sm:px-6" style={{ backgroundColor: "var(--background)" }}>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-16" style={{ color: "var(--amber-heading)" }}>Got questions?</h2>
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

        {/* ── FINAL CTA ── */}
        <section
          className="py-14 md:py-20 px-4 sm:px-6 text-center"
          style={{ background: "linear-gradient(to bottom, var(--background), color-mix(in srgb, var(--energy) 6%, var(--background)))" }}
        >
          <div className="max-w-xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "var(--amber-heading)" }}>Still thinking about it?</h2>
            <p className="mb-8" style={{ color: "var(--amber-body)" }}>
              That show meant something. Don&apos;t let it live only in your phone&apos;s camera roll.
            </p>
            <a href="#tiers" className="inline-block px-10 py-4 rounded-xl font-bold text-white btn-energy transition-colors shadow-lg">
              Build Your Stub Now →
            </a>
          </div>
        </section>
      </main>

      <StickyCartBar />
      <footer
        className="py-10 px-6 text-center text-sm"
        style={{ borderTop: "1px solid var(--border)", backgroundColor: "#0a0a0a", color: "var(--muted)" }}
      >
        <p className="font-bold mb-1 gold-text">THE STUB ARCHIVE</p>
        <p style={{ color: "#6b5030" }}>Premium ticket stub reprints · Made for real fans</p>
        <div className="mt-4 flex justify-center gap-6">
          <Link href="/cart" className="hover:opacity-70 transition-opacity">Cart</Link>
          <a href="mailto:hello@thestubarchive.com" className="hover:opacity-70 transition-opacity">Contact</a>
        </div>
      </footer>
    </>
  );
}
