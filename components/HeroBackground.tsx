"use client";

export default function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Deep stage black base */}
      <div className="absolute inset-0" style={{ backgroundColor: "#020101" }} />

      {/* Crowd silhouette at the bottom */}
      <div
        className="concert-light absolute bottom-0 left-0 right-0 h-40"
        style={{
          background: "linear-gradient(to top, rgba(0,0,0,0.9) 0%, transparent 100%)",
          animation: "crowd-pulse 3s ease-in-out infinite",
        }}
      />

      {/* ── STROBE LIGHTS ── */}

      {/* Main white center strobe — top-center, fast */}
      <div
        className="concert-light absolute"
        style={{
          top: "-10%",
          left: "45%",
          width: 320,
          height: 600,
          background: "radial-gradient(ellipse 60% 100% at 50% 0%, rgba(255,252,240,0.95) 0%, rgba(255,252,240,0.4) 30%, transparent 70%)",
          filter: "blur(18px)",
          transformOrigin: "50% 0%",
          animation: "strobe-white 2.1s steps(1, end) infinite",
        }}
      />

      {/* Secondary white strobe — offset, slightly different timing */}
      <div
        className="concert-light absolute"
        style={{
          top: "-5%",
          left: "52%",
          width: 200,
          height: 500,
          background: "radial-gradient(ellipse 50% 100% at 50% 0%, rgba(220,240,255,0.9) 0%, transparent 65%)",
          filter: "blur(24px)",
          transformOrigin: "50% 0%",
          animation: "strobe-white 1.7s steps(1, end) 0.3s infinite",
        }}
      />

      {/* RED — left side, medium burst */}
      <div
        className="concert-light absolute"
        style={{
          top: "-8%",
          left: "10%",
          width: 360,
          height: 560,
          background: "radial-gradient(ellipse 55% 100% at 50% 0%, rgba(224,50,50,0.9) 0%, rgba(200,30,30,0.35) 40%, transparent 70%)",
          filter: "blur(22px)",
          transformOrigin: "50% 0%",
          animation: "strobe-red 3.3s steps(1, end) 0.6s infinite",
        }}
      />

      {/* RED — right side, offset */}
      <div
        className="concert-light absolute"
        style={{
          top: "-8%",
          right: "8%",
          width: 300,
          height: 500,
          background: "radial-gradient(ellipse 50% 100% at 50% 0%, rgba(210,40,40,0.85) 0%, transparent 70%)",
          filter: "blur(20px)",
          transformOrigin: "50% 0%",
          animation: "strobe-red 2.8s steps(1, end) 1.1s infinite",
        }}
      />

      {/* AMBER — center-right warm wash */}
      <div
        className="concert-light absolute"
        style={{
          top: "-5%",
          left: "55%",
          width: 400,
          height: 480,
          background: "radial-gradient(ellipse 60% 100% at 50% 0%, rgba(245,158,11,0.8) 0%, rgba(200,120,0,0.3) 45%, transparent 70%)",
          filter: "blur(30px)",
          transformOrigin: "50% 0%",
          animation: "strobe-amber 4s ease-in-out 0.4s infinite",
        }}
      />

      {/* COLD BLUE — back left */}
      <div
        className="concert-light absolute"
        style={{
          top: "-10%",
          left: "25%",
          width: 280,
          height: 520,
          background: "radial-gradient(ellipse 45% 100% at 50% 0%, rgba(80,160,255,0.85) 0%, rgba(40,100,220,0.3) 40%, transparent 70%)",
          filter: "blur(24px)",
          transformOrigin: "50% 0%",
          animation: "strobe-blue 2.5s steps(1, end) 0.8s infinite",
        }}
      />

      {/* PURPLE — far right */}
      <div
        className="concert-light absolute"
        style={{
          top: "-6%",
          right: "20%",
          width: 260,
          height: 480,
          background: "radial-gradient(ellipse 45% 100% at 50% 0%, rgba(160,80,240,0.8) 0%, rgba(120,40,200,0.3) 40%, transparent 70%)",
          filter: "blur(22px)",
          transformOrigin: "50% 0%",
          animation: "strobe-purple 3.7s steps(1, end) 1.4s infinite",
        }}
      />

      {/* ── SWEEPING BEAMS ── */}

      {/* Beam left-to-center sweep */}
      <div
        className="concert-beam absolute"
        style={{
          top: 0,
          left: "20%",
          width: 6,
          height: "75%",
          background: "linear-gradient(to bottom, rgba(255,255,220,0.9) 0%, rgba(255,200,100,0.4) 50%, transparent 100%)",
          filter: "blur(6px)",
          transformOrigin: "50% 0%",
          animation: "beam-sweep-left 7s ease-in-out infinite",
        }}
      />

      {/* Beam right-to-center sweep */}
      <div
        className="concert-beam absolute"
        style={{
          top: 0,
          right: "22%",
          width: 6,
          height: "70%",
          background: "linear-gradient(to bottom, rgba(255,120,120,0.9) 0%, rgba(220,60,60,0.4) 50%, transparent 100%)",
          filter: "blur(6px)",
          transformOrigin: "50% 0%",
          animation: "beam-sweep-right 9s ease-in-out 2s infinite",
        }}
      />

      {/* Wide stage floor glow — warm amber pool at the bottom */}
      <div
        className="concert-light absolute bottom-0 left-0 right-0"
        style={{
          height: "35%",
          background: "radial-gradient(ellipse 80% 100% at 50% 100%, rgba(180,80,0,0.25) 0%, transparent 70%)",
          filter: "blur(30px)",
          animation: "strobe-amber 5s ease-in-out 1s infinite",
        }}
      />

      {/* Subtle haze across middle */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 100% 50% at 50% 50%, rgba(255,200,100,0.04) 0%, transparent 70%)",
        }}
      />

      {/* Bottom fade to black so content below hero has a clean edge */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent, #020101)" }}
      />
    </div>
  );
}
