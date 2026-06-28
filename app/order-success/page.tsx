import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function OrderSuccess() {
  return (
    <>
      <Navbar />
      <main className="flex-1 flex flex-col items-center justify-center py-32 px-6 text-center">
        <div className="text-6xl mb-6">🎟️</div>
        <h1 className="text-3xl font-bold mb-3" style={{ color: "var(--amber-heading)" }}>Order Confirmed!</h1>
        <p className="max-w-md mb-2" style={{ color: "var(--amber-body)" }}>
          Thanks for your order. We&apos;ll start crafting your ticket stub right away.
        </p>
        <p className="text-sm mb-10" style={{ color: "var(--amber-subtle)" }}>
          Expect a confirmation email shortly, and your package within 5–7 business days.
        </p>
        <Link
          href="/"
          className="px-8 py-3 rounded-xl font-semibold text-white transition-colors"
          style={{ backgroundColor: "var(--amber-btn)" }}
        >
          Back to Home
        </Link>
      </main>
    </>
  );
}
