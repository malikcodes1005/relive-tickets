"use client";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/lib/cart";

export default function Navbar() {
  const items = useCart((s) => s.items);
  const count = items.reduce((n, i) => n + i.quantity, 0);

  return (
    <header
      className="sticky top-0 z-50 backdrop-blur-sm"
      style={{
        borderBottom: "1px solid var(--border)",
        backgroundColor: "color-mix(in srgb, var(--background) 90%, transparent)",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold tracking-tight" style={{ color: "var(--amber-heading)" }}>
          RELIVE <span style={{ color: "var(--amber-accent)" }}>TICKETS</span>
        </Link>
        <nav className="hidden md:flex gap-8 text-sm" style={{ color: "var(--amber-body)" }}>
          <Link href="/#how-it-works" className="transition-colors hover:opacity-70">How It Works</Link>
          <Link href="/#tiers" className="transition-colors hover:opacity-70">Shop</Link>
          <Link href="/#faq" className="transition-colors hover:opacity-70">FAQ</Link>
        </nav>
        <Link href="/cart" className="relative p-2 transition-colors hover:opacity-70" style={{ color: "var(--amber-body)" }}>
          <ShoppingCart size={22} />
          {count > 0 && (
            <span
              className="absolute -top-1 -right-1 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold"
              style={{ backgroundColor: "var(--amber-accent)" }}
            >
              {count}
            </span>
          )}
        </Link>
      </div>
    </header>
  );
}
