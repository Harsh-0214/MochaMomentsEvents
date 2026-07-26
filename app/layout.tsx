import type { Metadata } from "next";
import { Cormorant_Garamond, Instrument_Sans } from "next/font/google";
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

const instrument = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument",
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
    <html lang="en" className={`${cormorant.variable} ${instrument.variable}`}>
      <body className="font-sans">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-sm focus:bg-espresso focus:px-4 focus:py-2 focus:text-ivory"
        >
          Skip to content
        </a>
        {children}
        <JsonLd />
      </body>
    </html>
  );
}
