import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Relive Tickets — Memorabilia That Feels Real",
  description: "Premium ticket stub reprints with real packaging. Relive your favorite concerts, games, and events.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">{children}</body>
    </html>
  );
}
