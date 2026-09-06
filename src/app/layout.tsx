import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const instrument = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://lifesynthesis.com"),
  title: {
    default: "LifeSynthesis — Regenerative Infrastructure",
    template: "%s — LifeSynthesis",
  },
  description:
    "LifeSynthesis redesigns the systems that sustain human life — housing, food, water, energy, technology and ecology as regenerative infrastructure.",
  keywords: [
    "regenerative infrastructure",
    "LifePod",
    "LifeHouse",
    "closed ecological life support",
    "controlled environment agriculture",
    "SolaRoof",
  ],
  icons: {
    icon: "/brand/logo-mark.png",
    apple: "/brand/logo-mark.png",
  },
  openGraph: {
    title: "LifeSynthesis — The future isn’t built. It’s grown.",
    description:
      "Designing a new operating system for human life: regenerative architecture, food, water, energy and ecology.",
    type: "website",
    images: ["/images/hero-community.png"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${instrument.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-navy font-sans text-ice">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:bg-ice focus:px-4 focus:py-2 focus:text-navy"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
