import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import { site } from "@/lib/site";
import { JsonLd } from "@/components/JsonLd";
import "./globals.css";

// High-contrast elegant serif matching the flared, fashion-forward
// letterforms of the Mocha Moments wordmark
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "500", "600"],
  variable: "--font-display",
  display: "swap",
});

// Clean geometric sans for body copy and small labels — quieter and more
// refined against the Cormorant display face
const jost = Jost({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Mocha Moments Events | Bay Area & NorCal Wedding Planner",
    template: `%s | ${site.name}`,
  },
  description:
    "Pouring love into every detail of your special day — Bay Area & NorCal wedding planning and day-of coordination by Anastasiya Moroz.",
  keywords: [
    "Bay Area wedding planner",
    "NorCal wedding planner",
    "wedding coordinator California",
    "day-of wedding coordination Bay Area",
    "event planner Bay Area",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: site.url,
    siteName: site.name,
    title: "Mocha Moments Events | Bay Area & NorCal Wedding Planner",
    description:
      "Pouring love into every detail of your special day — wedding planning, event design, and day-of coordination across the Bay Area, NorCal, and beyond.",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mocha Moments Events | Bay Area & NorCal Wedding Planner",
    description:
      "Pouring love into every detail of your special day — Bay Area & NorCal wedding planning by Anastasiya Moroz.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${jost.variable}`}>
      <body className="font-sans">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-sm focus:bg-ivory focus:px-4 focus:py-2 focus:text-espresso"
        >
          Skip to content
        </a>
        {children}
        <JsonLd />
      </body>
    </html>
  );
}
