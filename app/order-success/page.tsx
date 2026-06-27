import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function OrderSuccess() {
  return (
    <>
      <Navbar />
      <main className="flex-1 flex flex-col items-center justify-center py-32 px-6 text-center">
        <div className="text-6xl mb-6">🎟️</div>
        <h1 className="text-3xl font-bold text-amber-900 mb-3">Order Confirmed!</h1>
        <p className="text-amber-700 max-w-md mb-2">
          Thanks for your order. We&apos;ll start crafting your ticket stub right away.
        </p>
        <p className="text-amber-600 text-sm mb-10">
          Expect a confirmation email shortly, and your package within 5–7 business days.
        </p>
        <Link
          href="/"
          className="px-8 py-3 bg-amber-600 text-white rounded-xl font-semibold hover:bg-amber-700 transition-colors"
        >
          Back to Home
        </Link>
      </main>
    </>
  );
}
