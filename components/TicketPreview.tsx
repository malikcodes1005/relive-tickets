"use client";
import { useState } from "react";

type Props = {
  eventName: string;
  eventDate: string;
  tierName: string;
  isHolo?: boolean;
  hasBack?: boolean;
  photoDataUrl?: string;
  backNotes?: string;
};

export default function TicketPreview({ eventName, eventDate, tierName, isHolo, hasBack, photoDataUrl, backNotes }: Props) {
  const [showBack, setShowBack] = useState(false);
  const displayName = eventName || "Your Event";
  const displayDate = eventDate || "Date TBD";

  return (
    <div className="flex flex-col items-center gap-3 py-2">
      <div
        className="relative w-64 rounded-lg overflow-hidden shadow-lg select-none"
        style={{
          background: photoDataUrl
            ? "transparent"
            : isHolo
            ? "linear-gradient(135deg, #1a0a00 0%, #2d1200 40%, #1a0800 70%, #2d1500 100%)"
            : "linear-gradient(135deg, #1a0a00 0%, #2d1200 100%)",
          border: "1px solid var(--border)",
          fontFamily: "monospace",
        }}
      >
        {/* User photo as background */}
        {photoDataUrl && !showBack && (
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${photoDataUrl})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        )}

        {/* Dark overlay when photo is present */}
        {photoDataUrl && !showBack && (
          <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.65) 60%)" }} />
        )}

        {isHolo && !showBack && (
          <div
            className="absolute inset-0 opacity-20 pointer-events-none"
            style={{
              background: "linear-gradient(135deg, transparent 20%, rgba(255,200,50,0.4) 40%, transparent 60%, rgba(255,150,50,0.3) 80%, transparent 100%)",
            }}
          />
        )}

        {!showBack ? (
          /* FRONT */
          <div className="relative px-4 pt-4 pb-4">
            <div className="flex justify-between items-start mb-3">
              <div>
                <p className="text-[9px] tracking-widest font-bold" style={{ color: "#f59e0b" }}>STUB ARCHIVE</p>
                <p className="text-[8px] tracking-widest mt-0.5" style={{ color: photoDataUrl ? "#e0c080" : "#a07030" }}>OFFICIAL REPRINT</p>
              </div>
              <div className="text-right">
                <p className="text-[8px]" style={{ color: photoDataUrl ? "#e0c080" : "#a07030" }}>ADMIT ONE</p>
                <p className="text-[9px] font-bold mt-0.5" style={{ color: "#f5c97a" }}>{tierName.toUpperCase()}</p>
              </div>
            </div>

            <div className="mb-3">
              <p className="text-base font-bold leading-tight" style={{ color: "#fff8e8", textShadow: "0 1px 4px rgba(0,0,0,0.8)" }}>
                {displayName}
              </p>
            </div>

            <div className="flex justify-between items-end">
              <div>
                <p className="text-[8px]" style={{ color: photoDataUrl ? "#e0c080" : "#a07030" }}>DATE</p>
                <p className="text-[10px] font-bold" style={{ color: "#f5c97a" }}>{displayDate}</p>
              </div>
              <div className="text-right">
                <p className="text-[8px]" style={{ color: photoDataUrl ? "#e0c080" : "#a07030" }}>SECTION</p>
                <p className="text-[10px] font-bold" style={{ color: "#f5c97a" }}>FLOOR</p>
              </div>
            </div>

            {/* Perforated divider */}
            <div className="flex items-center my-3">
              <div className="flex-1" style={{ borderTop: "1px dashed rgba(255,180,50,0.3)" }} />
              <div className="w-2 h-2 rounded-full mx-2" style={{ backgroundColor: "var(--background)" }} />
              <div className="flex-1" style={{ borderTop: "1px dashed rgba(255,180,50,0.3)" }} />
            </div>

            <div className="flex justify-between items-center">
              <div>
                <p className="text-[8px]" style={{ color: photoDataUrl ? "#e0c080" : "#a07030" }}>STUB ARCHIVE</p>
                <p className="text-[9px] font-bold" style={{ color: "#f5c97a" }}>KEEP THIS STUB</p>
              </div>
              <div className="flex gap-px items-end h-6">
                {[3,2,4,1,3,2,3,4,2,1,3,2,4,3,1,2,3].map((h, i) => (
                  <div key={i} style={{ width: 2, height: `${h * 5}px`, backgroundColor: "#f5c97a", opacity: 0.7 }} />
                ))}
              </div>
            </div>
          </div>
        ) : (
          /* BACK */
          <div className="relative px-5 py-5 min-h-40" style={{ background: "linear-gradient(135deg, #1a0a00, #2d1200)" }}>
            <p className="text-[9px] tracking-widest font-bold mb-3" style={{ color: "#f59e0b" }}>EVENT RECAP</p>
            {backNotes ? (
              <p className="text-xs leading-relaxed whitespace-pre-wrap" style={{ color: "#f5e6cc" }}>{backNotes}</p>
            ) : (
              <p className="text-xs italic" style={{ color: "#a07030" }}>Your event notes will appear here.</p>
            )}
          </div>
        )}
      </div>

      {hasBack && (
        <button
          onClick={() => setShowBack((v) => !v)}
          className="text-xs font-semibold transition-opacity hover:opacity-70"
          style={{ color: "var(--amber-accent)" }}
        >
          {showBack ? "← View Front" : "View Back →"}
        </button>
      )}
    </div>
  );
}
