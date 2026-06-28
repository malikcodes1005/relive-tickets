"use client";
import { useCart, TIERS } from "@/lib/cart";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import { Trash2 } from "lucide-react";
import { useState } from "react";

export default function CartPage() {
  const { items, removeItem, updateQty, total, clear } = useCart();
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items }),
      });
      const data = await res.json();
      if (data.url) {
        clear();
        window.location.href = data.url;
      } else {
        alert("Checkout error. Please try again.");
      }
    } catch {
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (items.length === 0) {
    return (
      <>
        <Navbar />
        <main className="flex-1 flex flex-col items-center justify-center py-20 px-4 text-center">
          <p className="text-5xl mb-6">🎟️</p>
          <h1 className="text-2xl font-bold mb-2" style={{ color: "var(--amber-heading)" }}>Your cart is empty</h1>
          <p className="mb-8" style={{ color: "var(--amber-body)" }}>Add a ticket stub to get started.</p>
          <Link href="/#tiers" className="px-6 py-3 rounded-xl font-semibold text-white btn-amber transition-colors">
            Browse Editions
          </Link>
        </main>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="flex-1 max-w-4xl mx-auto w-full px-4 sm:px-6 py-10 md:py-16 pb-28 md:pb-16">
        <h1 className="text-3xl font-bold mb-10" style={{ color: "var(--amber-heading)" }}>Your Cart</h1>

        <div className="space-y-4 mb-10">
          {items.map((item, i) => {
            const tier = TIERS.find((t) => t.id === item.tierId)!;
            return (
              <div
                key={i}
                className="rounded-xl p-5"
                style={{ border: "1px solid var(--border)", backgroundColor: "var(--card)" }}
              >
                {/* Top row: photo + info + remove */}
                <div className="flex items-start gap-3">
                  {item.photoDataUrl ? (
                    <img src={item.photoDataUrl} alt="Event photo" className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg object-cover shrink-0" style={{ border: "1px solid var(--border)" }} />
                  ) : (
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg shrink-0 flex items-center justify-center text-lg" style={{ backgroundColor: "color-mix(in srgb, var(--amber-accent) 10%, var(--background))", border: "1px solid var(--border)" }}>
                      🎟️
                    </div>
                  )}
                  <div className="flex-1 min-w-0">
                    <p className="font-bold" style={{ color: "var(--amber-heading)" }}>{tier.name}</p>
                    <p className="text-sm mt-0.5 truncate" style={{ color: "var(--amber-body)" }}>{item.eventName}</p>
                    {item.eventDate && <p className="text-xs mt-0.5" style={{ color: "var(--muted)" }}>{item.eventDate}</p>}
                    {item.backNotes && <p className="text-xs mt-1.5 italic line-clamp-2" style={{ color: "var(--muted)" }}>Back: {item.backNotes}</p>}
                  </div>
                  <button onClick={() => removeItem(i)} className="transition-opacity hover:opacity-60 ml-1 mt-0.5 shrink-0">
                    <Trash2 size={16} style={{ color: "var(--muted)" }} />
                  </button>
                </div>

                {/* Bottom row: qty + price */}
                <div className="flex items-center justify-between mt-3 pt-3" style={{ borderTop: "1px solid var(--border)" }}>
                  <div className="flex items-center gap-2 text-sm" style={{ color: "var(--amber-body)" }}>
                    <label className="text-xs" style={{ color: "var(--muted)" }}>Qty</label>
                    <select
                      value={item.quantity}
                      onChange={(e) => updateQty(i, Number(e.target.value))}
                      className="rounded-lg px-2 py-1 text-sm"
                      style={{ border: "1px solid var(--border)", backgroundColor: "var(--background)", color: "var(--foreground)" }}
                    >
                      {[1, 2, 3, 4, 5].map((n) => <option key={n} value={n}>{n}</option>)}
                    </select>
                  </div>
                  <p className="font-bold text-lg" style={{ color: "var(--amber-heading)" }}>
                    ${(tier.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="pt-6 flex flex-col items-end gap-4" style={{ borderTop: "1px solid var(--border)" }}>
          <div className="text-right">
            <p className="text-sm" style={{ color: "var(--amber-subtle)" }}>Order total</p>
            <p className="text-3xl font-bold" style={{ color: "var(--amber-heading)" }}>${total().toFixed(2)}</p>
            <p className="text-xs mt-1" style={{ color: "var(--muted)" }}>Shipping calculated at checkout</p>
          </div>

          <button
            onClick={handleCheckout}
            disabled={loading}
            className="px-10 py-4 rounded-xl font-semibold text-white btn-amber transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {loading ? "Redirecting…" : "Checkout with Stripe →"}
          </button>

          {/* Privacy disclosure */}
          <p className="text-xs text-center max-w-sm" style={{ color: "var(--muted)" }}>
            By proceeding you agree that your order details — including any photos and notes you&apos;ve provided — will be used solely to produce and fulfill your order. Your payment and personal information is processed securely by Stripe. We do not sell or share your data with third parties.
          </p>

          <Link href="/" className="text-sm transition-opacity hover:opacity-70" style={{ color: "var(--amber-body)" }}>
            ← Continue Shopping
          </Link>
        </div>
      </main>
    </>
  );
}
