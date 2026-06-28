import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Stub Archive — Official Ticket Stub Reprints",
  description: "Premium ticket stub reprints for concert goers and sports fans. Your greatest nights, preserved.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">{children}</body>
    </html>
  );
}
