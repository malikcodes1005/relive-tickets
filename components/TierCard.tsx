"use client";
import { useState, useRef } from "react";
import { Check, ChevronDown, ImagePlus, X } from "lucide-react";
import { Tier, useCart } from "@/lib/cart";
import TicketPreview from "./TicketPreview";
import { compressImage } from "@/lib/compressImage";

export default function TierCard({ tier, delay = 0 }: { tier: Tier; delay?: number }) {
  const addItem = useCart((s) => s.addItem);
  const [open, setOpen] = useState(false);
  const [eventName, setEventName] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [backNotes, setBackNotes] = useState("");
  const [photoDataUrl, setPhotoDataUrl] = useState<string | undefined>();
  const [added, setAdded] = useState(false);
  const [compressing, setCompressing] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);

  const hasBack = tier.id === "tier-2" || tier.id === "tier-3";
  const isPremium = tier.id === "tier-3";
  const isPopular = tier.id === "tier-2";

  const handlePhoto = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setCompressing(true);
    try {
      const compressed = await compressImage(file);
      setPhotoDataUrl(compressed);
    } finally {
      setCompressing(false);
    }
  };

  const handleAdd = () => {
    if (!eventName.trim()) return;
    addItem({ tierId: tier.id, eventName, eventDate, quantity: 1, photoDataUrl, backNotes: hasBack ? backNotes : undefined });
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
      setOpen(false);
      setEventName("");
      setEventDate("");
      setBackNotes("");
      setPhotoDataUrl(undefined);
    }, 1800);
  };

  return (
    <div
      className="flex flex-col rounded-2xl overflow-hidden shadow-sm transition-shadow hover:shadow-md fade-in-up"
      style={{
        border: `1px solid ${isPopular ? "var(--energy)" : isPremium ? "var(--amber-accent)" : "var(--border)"}`,
      boxShadow: isPopular ? "0 0 0 1px var(--energy), 0 0 24px var(--energy-glow)" : isPremium ? "0 0 16px rgba(245,158,11,0.15)" : "none",
        backgroundColor: "var(--card)",
        animationDelay: `${delay}ms`,
      }}
    >
      {/* Card header */}
      <div className="relative p-8 flex-1">
        {tier.badge && (
          <span
            className="absolute top-4 right-4 text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wide"
            style={{ backgroundColor: isPopular ? "var(--energy)" : "var(--amber-badge)" }}
          >
            {tier.badge}
          </span>
        )}
        <h3 className="text-lg font-bold gold-text">{tier.name}</h3>
        <p className="text-sm mt-1" style={{ color: "var(--amber-body)" }}>{tier.description}</p>
        <div className="my-5">
          <span className="text-4xl font-bold gold-text">${tier.price.toFixed(2)}</span>
          <span className="text-sm ml-1" style={{ color: "var(--muted)" }}>/ stub</span>
        </div>
        <ul className="space-y-2">
          {tier.features.map((f) => (
            <li key={f} className="flex items-start gap-2 text-sm" style={{ color: "var(--amber-body)" }}>
              <Check size={15} className="mt-0.5 shrink-0" style={{ color: "var(--amber-accent)" }} />
              {f}
            </li>
          ))}
        </ul>
      </div>

      {/* Select button */}
      <div className="px-8 pb-6">
        <button
          onClick={() => setOpen((v) => !v)}
          className="w-full py-3 rounded-xl font-semibold text-sm transition-all flex items-center justify-center gap-2 text-white btn-energy"
        >
          Select Edition
          <ChevronDown
            size={16}
            style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.2s" }}
          />
        </button>
      </div>

      {/* Expandable panel */}
      {open && (
        <div className="px-8 pb-8 space-y-5" style={{ borderTop: "1px solid var(--border)", paddingTop: "1.5rem" }}>
          <p className="text-xs font-semibold tracking-widest uppercase" style={{ color: "var(--amber-subtle)" }}>
            Customize your stub
          </p>

          {/* Live ticket preview */}
          <TicketPreview
            eventName={eventName}
            eventDate={eventDate}
            tierName={tier.name}
            isHolo={isPremium}
            hasBack={hasBack}
            photoDataUrl={photoDataUrl}
            backNotes={backNotes}
          />

          {/* Photo upload */}
          <div>
            <p className="text-xs font-semibold mb-2" style={{ color: "var(--amber-body)" }}>
              Front photo <span style={{ color: "var(--muted)", fontWeight: 400 }}>(optional)</span>
            </p>
            {photoDataUrl ? (
              <div className="flex items-center gap-3">
                <img src={photoDataUrl} alt="Preview" className="w-12 h-12 rounded object-cover" style={{ border: "1px solid var(--border)" }} />
                <span className="text-xs flex-1" style={{ color: "var(--amber-body)" }}>Photo added</span>
                <button onClick={() => { setPhotoDataUrl(undefined); if (fileRef.current) fileRef.current.value = ""; }}>
                  <X size={16} style={{ color: "var(--muted)" }} />
                </button>
              </div>
            ) : (
              <button
                onClick={() => fileRef.current?.click()}
                disabled={compressing}
                className="flex items-center gap-2 w-full rounded-lg px-3 py-2.5 text-sm transition-opacity hover:opacity-80"
                style={{ border: "1px dashed var(--border)", color: "var(--amber-body)", backgroundColor: "var(--background)" }}
              >
                <ImagePlus size={16} style={{ color: "var(--amber-accent)" }} />
                {compressing ? "Compressing…" : "Upload a photo for the front"}
              </button>
            )}
            <input ref={fileRef} type="file" accept="image/*" onChange={handlePhoto} className="hidden" />
          </div>

          {/* Event details */}
          <div className="space-y-3">
            <input
              type="text"
              placeholder="Event name (e.g. Taylor Swift — MSG)"
              value={eventName}
              onChange={(e) => setEventName(e.target.value)}
              className="w-full rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2"
              style={{ border: "1px solid var(--border)", backgroundColor: "var(--background)", color: "var(--foreground)" }}
            />
            <input
              type="text"
              placeholder="Event date (e.g. Aug 5, 2019)"
              value={eventDate}
              onChange={(e) => setEventDate(e.target.value)}
              className="w-full rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2"
              style={{ border: "1px solid var(--border)", backgroundColor: "var(--background)", color: "var(--foreground)" }}
            />

            {/* Back-of-card notes — tier 2 & 3 only */}
            {hasBack && (
              <div>
                <p className="text-xs font-semibold mb-1.5" style={{ color: "var(--amber-body)" }}>
                  Back of card — notes & details
                </p>
                <textarea
                  placeholder={"Add a setlist, game stats, or a personal note that'll be printed on the back…"}
                  value={backNotes}
                  onChange={(e) => setBackNotes(e.target.value)}
                  rows={4}
                  className="w-full rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 resize-none"
                  style={{ border: "1px solid var(--border)", backgroundColor: "var(--background)", color: "var(--foreground)" }}
                />
                <p className="text-[11px] mt-1" style={{ color: "var(--muted)" }}>
                  {backNotes.length}/500 characters
                </p>
              </div>
            )}

            <button
              onClick={handleAdd}
              disabled={!eventName.trim()}
              className="w-full py-3 rounded-xl font-semibold text-sm transition-all"
              style={{
                backgroundColor: added ? "#16a34a" : !eventName.trim() ? "var(--border)" : "var(--amber-btn)",
                color: !eventName.trim() ? "var(--muted)" : "white",
                cursor: !eventName.trim() ? "not-allowed" : "pointer",
              }}
            >
              {added ? "✓ Added to Cart!" : "Add to Cart"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
