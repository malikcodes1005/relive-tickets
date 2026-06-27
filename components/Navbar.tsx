"use client";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/lib/cart";

export default function Navbar() {
  const items = useCart((s) => s.items);
  const count = items.reduce((n, i) => n + i.quantity, 0);

  return (
    <header className="sticky top-0 z-50 border-b border-amber-200/60 bg-[#faf7f2]/90 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold tracking-tight text-amber-900">
          RELIVE <span className="text-amber-600">TICKETS</span>
        </Link>
        <nav className="hidden md:flex gap-8 text-sm text-amber-800">
          <Link href="/#how-it-works" className="hover:text-amber-600 transition-colors">How It Works</Link>
          <Link href="/#tiers" className="hover:text-amber-600 transition-colors">Shop</Link>
          <Link href="/#faq" className="hover:text-amber-600 transition-colors">FAQ</Link>
        </nav>
        <Link href="/cart" className="relative p-2 text-amber-800 hover:text-amber-600 transition-colors">
          <ShoppingCart size={22} />
          {count > 0 && (
            <span className="absolute -top-1 -right-1 bg-amber-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
              {count}
            </span>
          )}
        </Link>
      </div>
    </header>
  );
}
