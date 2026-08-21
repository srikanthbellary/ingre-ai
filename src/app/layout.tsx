import type { Metadata } from "next";
import { Fraunces, Source_Sans_3 } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { site } from "@/lib/site";
import "./globals.css";

const display = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const sans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Ingre — It reads the label. Not the barcode.",
    template: "%s · Ingre",
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: "Ingre" }],
  openGraph: {
    title: "Ingre — It reads the label. Not the barcode.",
    description: site.description,
    url: site.url,
    siteName: site.name,
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/images/label-still.jpg",
        width: 1280,
        height: 853,
        alt: "A printed ingredient label on grocery paper",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ingre — It reads the label. Not the barcode.",
    description: site.description,
    images: ["/images/label-still.jpg"],
  },
  icons: {
    icon: "/favicon.svg",
  },
  alternates: {
    canonical: site.url,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body className="paper-grain font-sans text-ink antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-card focus:px-4 focus:py-2"
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
