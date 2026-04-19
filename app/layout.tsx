import type { Metadata } from "next";
import { Cormorant_Garamond, Karla } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const karla = Karla({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-karla",
  display: "swap",
});

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
      <body className={`${cormorant.variable} ${karla.variable}`}>
        {children}
      </body>
    </html>
  );
}
