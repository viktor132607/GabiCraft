import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import StructuredData from "@/components/StructuredData";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://gabicraft.onrender.com";

const globalStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "GabiCraft",
      inLanguage: "bg-BG",
      image: {
        "@type": "ImageObject",
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        caption: "GabiCraft — арт портфолио и дизайн услуги",
      },
    },
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      url: siteUrl,
      name: "GabiCraft",
      description:
        "Арт портфолио за авторски картини и услуги за бранд идентичност, уеб визия и визуална концепция.",
      image: {
        "@type": "ImageObject",
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        caption: "GabiCraft — арт портфолио и дизайн услуги",
      },
    },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: "GabiCraft",
  title: {
    default: "GabiCraft | Арт портфолио и дизайн услуги",
    template: "%s | GabiCraft",
  },
  description:
    "GabiCraft представя авторски картини, арт проекти и услуги за бранд идентичност, уеб визия и цялостна визуална концепция.",
  keywords: [
    "GabiCraft",
    "картини",
    "авторски картини",
    "арт портфолио",
    "изкуство",
    "бранд идентичност",
    "уеб дизайн",
    "визуална концепция",
    "дизайн услуги",
  ],
  authors: [{ name: "GabiCraft" }],
  creator: "GabiCraft",
  publisher: "GabiCraft",
  category: "art",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "bg_BG",
    url: "/",
    siteName: "GabiCraft",
    title: "GabiCraft | Арт портфолио и дизайн услуги",
    description:
      "Авторски картини, арт проекти и услуги за бранд идентичност, уеб визия и цялостна визуална концепция.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "GabiCraft — арт портфолио и дизайн услуги",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GabiCraft | Арт портфолио и дизайн услуги",
    description:
      "Авторски картини, арт проекти и услуги за бранд идентичност, уеб визия и цялостна визуална концепция.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="bg">
      <body className="m-0 min-h-screen overflow-x-hidden bg-[#fffdf7] font-sans text-[#28231d] antialiased">
        <StructuredData data={globalStructuredData} />
        <Navbar />
        <main className="min-h-[calc(100vh-320px)]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
