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
        <main className="flex-1 flex flex-col items-center justify-center py-32 px-6 text-center">
          <p className="text-5xl mb-6">🎟️</p>
          <h1 className="text-2xl font-bold mb-2" style={{ color: "var(--amber-heading)" }}>Your cart is empty</h1>
          <p className="mb-8" style={{ color: "var(--amber-body)" }}>Add a ticket stub to get started.</p>
          <Link
            href="/#tiers"
            className="px-6 py-3 rounded-xl font-semibold text-white transition-colors"
            style={{ backgroundColor: "var(--amber-btn)" }}
          >
            Browse Editions
          </Link>
        </main>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="flex-1 max-w-4xl mx-auto w-full px-6 py-16">
        <h1 className="text-3xl font-bold mb-10" style={{ color: "var(--amber-heading)" }}>Your Cart</h1>

        <div className="space-y-4 mb-10">
          {items.map((item, i) => {
            const tier = TIERS.find((t) => t.id === item.tierId)!;
            return (
              <div
                key={i}
                className="flex items-start gap-6 rounded-xl p-5"
                style={{ border: "1px solid var(--border)", backgroundColor: "var(--card)" }}
              >
                <div className="flex-1">
                  <p className="font-bold" style={{ color: "var(--amber-heading)" }}>{tier.name}</p>
                  <p className="text-sm mt-0.5" style={{ color: "var(--amber-body)" }}>{item.eventName}</p>
                  {item.eventDate && (
                    <p className="text-xs mt-0.5" style={{ color: "var(--muted)" }}>{item.eventDate}</p>
                  )}
                </div>
                <div className="flex items-center gap-3">
                  <select
                    value={item.quantity}
                    onChange={(e) => updateQty(i, Number(e.target.value))}
                    className="rounded-lg px-2 py-1 text-sm"
                    style={{ border: "1px solid var(--border)", backgroundColor: "var(--background)", color: "var(--foreground)" }}
                  >
                    {[1, 2, 3, 4, 5].map((n) => (
                      <option key={n} value={n}>{n}</option>
                    ))}
                  </select>
                  <p className="font-semibold w-16 text-right" style={{ color: "var(--amber-heading)" }}>
                    ${(tier.price * item.quantity).toFixed(2)}
                  </p>
                  <button
                    onClick={() => removeItem(i)}
                    className="transition-colors hover:opacity-70"
                    style={{ color: "var(--muted)" }}
                  >
                    <Trash2 size={16} />
                  </button>
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
            className="px-10 py-4 rounded-xl font-semibold text-white transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
            style={{ backgroundColor: "var(--amber-btn)" }}
          >
            {loading ? "Redirecting…" : "Checkout with Stripe →"}
          </button>
          <Link href="/" className="text-sm transition-opacity hover:opacity-70" style={{ color: "var(--amber-body)" }}>
            ← Continue Shopping
          </Link>
        </div>
      </main>
    </>
  );
}
