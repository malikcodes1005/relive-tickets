"use client";
import { useState } from "react";
import { Check } from "lucide-react";
import { Tier, useCart } from "@/lib/cart";

export default function TierCard({ tier, delay = 0 }: { tier: Tier; delay?: number }) {
  const addItem = useCart((s) => s.addItem);
  const [eventName, setEventName] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    if (!eventName.trim()) return;
    addItem({ tierId: tier.id, eventName, eventDate, quantity: 1 });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
    setEventName("");
    setEventDate("");
  };

  const isPremium = tier.id === "tier-3";
  const isPopular = tier.id === "tier-2";

  return (
    <div
      className={`relative flex flex-col rounded-2xl border p-8 shadow-sm transition-shadow hover:shadow-md fade-in-up ${
        isPopular
          ? "border-amber-400 bg-amber-50"
          : isPremium
          ? "border-amber-700 bg-amber-900/5"
          : "border-amber-200 bg-white"
      }`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {tier.badge && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
          {tier.badge}
        </span>
      )}

      <div className="mb-4">
        <h3 className="text-lg font-bold text-amber-900">{tier.name}</h3>
        <p className="text-sm text-amber-700 mt-1">{tier.description}</p>
      </div>

      <div className="mb-6">
        <span className="text-4xl font-bold text-amber-900">${tier.price.toFixed(2)}</span>
        <span className="text-sm text-amber-600 ml-1">/ stub</span>
      </div>

      <ul className="space-y-2 mb-8 flex-1">
        {tier.features.map((f) => (
          <li key={f} className="flex items-start gap-2 text-sm text-amber-800">
            <Check size={16} className="text-amber-600 mt-0.5 shrink-0" />
            {f}
          </li>
        ))}
      </ul>

      <div className="space-y-3">
        <input
          type="text"
          placeholder="Event name (e.g. Taylor Swift — MSG)"
          value={eventName}
          onChange={(e) => setEventName(e.target.value)}
          className="w-full border border-amber-200 rounded-lg px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-amber-400"
        />
        <input
          type="text"
          placeholder="Event date (e.g. Aug 5, 2019)"
          value={eventDate}
          onChange={(e) => setEventDate(e.target.value)}
          className="w-full border border-amber-200 rounded-lg px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-amber-400"
        />
        <button
          onClick={handleAdd}
          disabled={!eventName.trim()}
          className={`w-full py-3 rounded-xl font-semibold text-sm transition-all ${
            added
              ? "bg-green-600 text-white"
              : !eventName.trim()
              ? "bg-amber-200 text-amber-400 cursor-not-allowed"
              : isPremium
              ? "bg-amber-800 text-white hover:bg-amber-900"
              : "bg-amber-600 text-white hover:bg-amber-700"
          }`}
        >
          {added ? "✓ Added to Cart" : "Add to Cart"}
        </button>
      </div>
    </div>
  );
}
