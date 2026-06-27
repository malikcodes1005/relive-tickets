"use client";
import { useCart, TIERS } from "@/lib/cart";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import { Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CartPage() {
  const { items, removeItem, updateQty, total, clear } = useCart();
  const router = useRouter();
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
          <h1 className="text-2xl font-bold text-amber-900 mb-2">Your cart is empty</h1>
          <p className="text-amber-600 mb-8">Add a ticket stub to get started.</p>
          <Link
            href="/#tiers"
            className="px-6 py-3 bg-amber-600 text-white rounded-xl font-semibold hover:bg-amber-700 transition-colors"
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
        <h1 className="text-3xl font-bold text-amber-900 mb-10">Your Cart</h1>

        <div className="space-y-4 mb-10">
          {items.map((item, i) => {
            const tier = TIERS.find((t) => t.id === item.tierId)!;
            return (
              <div key={i} className="flex items-start gap-6 border border-amber-200 rounded-xl p-5 bg-white">
                <div className="flex-1">
                  <p className="font-bold text-amber-900">{tier.name}</p>
                  <p className="text-sm text-amber-700 mt-0.5">{item.eventName}</p>
                  {item.eventDate && (
                    <p className="text-xs text-amber-500 mt-0.5">{item.eventDate}</p>
                  )}
                </div>
                <div className="flex items-center gap-3">
                  <select
                    value={item.quantity}
                    onChange={(e) => updateQty(i, Number(e.target.value))}
                    className="border border-amber-200 rounded-lg px-2 py-1 text-sm"
                  >
                    {[1, 2, 3, 4, 5].map((n) => (
                      <option key={n} value={n}>{n}</option>
                    ))}
                  </select>
                  <p className="text-amber-900 font-semibold w-16 text-right">
                    ${(tier.price * item.quantity).toFixed(2)}
                  </p>
                  <button
                    onClick={() => removeItem(i)}
                    className="text-amber-400 hover:text-red-500 transition-colors"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="border-t border-amber-200 pt-6 flex flex-col items-end gap-4">
          <div className="text-right">
            <p className="text-sm text-amber-600">Order total</p>
            <p className="text-3xl font-bold text-amber-900">${total().toFixed(2)}</p>
            <p className="text-xs text-amber-500 mt-1">Shipping calculated at checkout</p>
          </div>
          <button
            onClick={handleCheckout}
            disabled={loading}
            className="px-10 py-4 bg-amber-600 text-white rounded-xl font-semibold hover:bg-amber-700 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {loading ? "Redirecting…" : "Checkout with Stripe →"}
          </button>
          <Link href="/" className="text-sm text-amber-600 hover:text-amber-800 transition-colors">
            ← Continue Shopping
          </Link>
        </div>
      </main>
    </>
  );
}
