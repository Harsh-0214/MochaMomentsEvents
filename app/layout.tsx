import type { Metadata } from "next";
import { Bodoni_Moda, Cormorant_Garamond, Jost, Italiana, Parisienne } from "next/font/google";
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

// Didone display face matching the logo wordmark's vertical stress, heavy
// stems, and unbracketed hairline serifs — used for the hero masthead
const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-logo",
  display: "swap",
});

// Elegant script for the one-word accents ("Detail", the signature)
const parisienne = Parisienne({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-script",
  display: "swap",
});

// Airy high-contrast display for the wordmark lockup
const italiana = Italiana({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-lockup",
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
    <html lang="en" className={`${cormorant.variable} ${bodoni.variable} ${jost.variable} ${parisienne.variable} ${italiana.variable}`}>
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
