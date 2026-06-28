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
      className="relative flex flex-col rounded-2xl p-8 shadow-sm transition-shadow hover:shadow-md fade-in-up"
      style={{
        border: `1px solid ${isPopular ? "var(--amber-accent)" : isPremium ? "var(--amber-body)" : "var(--border)"}`,
        backgroundColor: "var(--card)",
        animationDelay: `${delay}ms`,
      }}
    >
      {tier.badge && (
        <span
          className="absolute -top-3 left-1/2 -translate-x-1/2 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide"
          style={{ backgroundColor: "var(--amber-badge)" }}
        >
          {tier.badge}
        </span>
      )}

      <div className="mb-4">
        <h3 className="text-lg font-bold" style={{ color: "var(--amber-heading)" }}>{tier.name}</h3>
        <p className="text-sm mt-1" style={{ color: "var(--amber-body)" }}>{tier.description}</p>
      </div>

      <div className="mb-6">
        <span className="text-4xl font-bold" style={{ color: "var(--amber-heading)" }}>${tier.price.toFixed(2)}</span>
        <span className="text-sm ml-1" style={{ color: "var(--amber-subtle)" }}>/ stub</span>
      </div>

      <ul className="space-y-2 mb-8 flex-1">
        {tier.features.map((f) => (
          <li key={f} className="flex items-start gap-2 text-sm" style={{ color: "var(--amber-body)" }}>
            <Check size={16} className="mt-0.5 shrink-0" style={{ color: "var(--amber-accent)" }} />
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
          className="w-full rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2"
          style={{
            border: "1px solid var(--border)",
            backgroundColor: "var(--background)",
            color: "var(--foreground)",
          }}
        />
        <input
          type="text"
          placeholder="Event date (e.g. Aug 5, 2019)"
          value={eventDate}
          onChange={(e) => setEventDate(e.target.value)}
          className="w-full rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2"
          style={{
            border: "1px solid var(--border)",
            backgroundColor: "var(--background)",
            color: "var(--foreground)",
          }}
        />
        <button
          onClick={handleAdd}
          disabled={!eventName.trim()}
          className="w-full py-3 rounded-xl font-semibold text-sm transition-all text-white"
          style={{
            backgroundColor: added
              ? "#16a34a"
              : !eventName.trim()
              ? "var(--border)"
              : "var(--amber-btn)",
            color: !eventName.trim() ? "var(--muted)" : "white",
            cursor: !eventName.trim() ? "not-allowed" : "pointer",
          }}
        >
          {added ? "✓ Added to Cart" : "Add to Cart"}
        </button>
      </div>
    </div>
  );
}
