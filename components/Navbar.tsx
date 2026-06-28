"use client";
import Link from "next/link";
import { ShoppingCart, Menu, X } from "lucide-react";
import { useCart } from "@/lib/cart";
import { useState } from "react";

const links = [
  { href: "/#how-it-works", label: "How It Works" },
  { href: "/#tiers", label: "Shop" },
  { href: "/#faq", label: "FAQ" },
];

export default function Navbar() {
  const items = useCart((s) => s.items);
  const count = items.reduce((n, i) => n + i.quantity, 0);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header
        className="sticky top-0 z-50 backdrop-blur-sm"
        style={{
          borderBottom: "1px solid var(--border)",
          backgroundColor: "color-mix(in srgb, var(--background) 92%, transparent)",
        }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold tracking-tight">
            <span className="gold-text">THE STUB </span><span style={{ color: "var(--energy)" }}>ARCHIVE</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex gap-8 text-sm" style={{ color: "var(--amber-body)" }}>
            {links.map((l) => (
              <Link key={l.href} href={l.href} className="transition-opacity hover:opacity-70">{l.label}</Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Link href="/cart" className="relative p-2 transition-opacity hover:opacity-70" style={{ color: "var(--amber-body)" }}>
              <ShoppingCart size={22} />
              {count > 0 && (
                <span
                  className="absolute -top-1 -right-1 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold"
                  style={{ backgroundColor: "var(--energy)" }}
                >
                  {count}
                </span>
              )}
            </Link>

            {/* Mobile hamburger */}
            <button
              className="md:hidden p-2 transition-opacity hover:opacity-70"
              style={{ color: "var(--amber-body)" }}
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 md:hidden"
          onClick={() => setMenuOpen(false)}
        >
          <div className="absolute inset-0" style={{ backgroundColor: "rgba(0,0,0,0.5)" }} />
          <nav
            className="absolute top-16 left-0 right-0 flex flex-col py-4"
            style={{ backgroundColor: "var(--background)", borderBottom: "1px solid var(--border)" }}
            onClick={(e) => e.stopPropagation()}
          >
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="px-6 py-4 text-base font-semibold transition-opacity hover:opacity-70"
                style={{ color: "var(--amber-heading)", borderBottom: "1px solid var(--border)" }}
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}
