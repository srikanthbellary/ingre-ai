import type { Metadata, Viewport } from "next";
import { Fraunces, IBM_Plex_Mono, Inter } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { site } from "@/lib/site";
import "./globals.css";

const display = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
  display: "swap",
});

const ogImage = {
  url: "/brand/og-monograph.png",
  width: 1200,
  height: 630,
  alt: "Ingre. It reads the label, not the barcode",
};

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Ingre. It reads the label. Not the barcode.",
    template: "%s · Ingre",
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: "Ingre" }],
  openGraph: {
    title: "Ingre. It reads the label. Not the barcode.",
    description: site.description,
    url: site.url,
    siteName: site.name,
    type: "website",
    locale: "en_US",
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ingre. It reads the label. Not the barcode.",
    description: site.description,
    images: [ogImage.url],
  },
  icons: {
    icon: "/favicon.svg",
    apple: "/apple-touch-icon.png",
  },
  alternates: {
    canonical: site.url,
  },
};

export const viewport: Viewport = {
  themeColor: "#0B0D0F",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable} ${mono.variable}`}>
      <body className="grain bg-graphite font-sans text-bone antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-xl focus:bg-bone focus:px-4 focus:py-2 focus:text-graphite"
        >
          Skip to content
        </a>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
