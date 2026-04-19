import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tom & Jane — 12 September 2026",
  description: "Wedding celebration in the Cotswolds, Oxfordshire",
  robots: "noindex, nofollow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
