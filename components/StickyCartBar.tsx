"use client";
import { useCart } from "@/lib/cart";
import Link from "next/link";

export default function StickyCartBar() {
  const items = useCart((s) => s.items);
  const total = useCart((s) => s.total);
  const count = items.reduce((n, i) => n + i.quantity, 0);

  if (count === 0) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 md:hidden px-4 pb-4 pt-2"
      style={{ background: "linear-gradient(to top, rgba(2,1,1,0.98) 70%, transparent)" }}
    >
      <Link
        href="/cart"
        className="flex items-center justify-between w-full px-5 py-4 rounded-2xl font-bold text-white shadow-2xl btn-energy"
      >
        <span className="flex items-center gap-2">
          <span
            className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold"
            style={{ backgroundColor: "rgba(255,255,255,0.25)" }}
          >
            {count}
          </span>
          View Cart
        </span>
        <span>${total().toFixed(2)}</span>
      </Link>
    </div>
  );
}
