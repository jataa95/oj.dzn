import type { Metadata, Viewport } from "next";
import { Bellefair, Kumbh_Sans, Zalando_Sans_Expanded, Playfair_Display } from "next/font/google";
import { site } from "@/content/site";
import { SmoothScroll } from "@/components/SmoothScroll";
import "lenis/dist/lenis.css";
import "./globals.css";

const serif = Bellefair({ variable: "--font-serif", subsets: ["latin"], weight: "400", display: "swap" });
const sans = Kumbh_Sans({ variable: "--font-sans", subsets: ["latin"], display: "swap" });
const wide = Zalando_Sans_Expanded({ variable: "--font-wide", subsets: ["latin"], weight: ["400", "600"], display: "swap" });
const script = Playfair_Display({ variable: "--font-script", subsets: ["latin"], style: "italic", weight: "400", display: "swap" });

const title = "CHRIST Manufacturing — Premium clothing manufacturer in Abuja";
const description =
  "CHRIST Manufacturing is a premium clothing manufacturer for brands in Abuja, Nigeria. Samples, bulk production, print, embroidery and quality finishing — from first sketch to finished drop.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: title, template: "%s — CHRIST Manufacturing" },
  description,
  keywords: ["clothing manufacturer Abuja", "clothing manufacturer Nigeria", "garment factory Nigeria", "streetwear manufacturer", "sample maker", "bulk clothing production", "CHRIST Manufacturing"],
  openGraph: { title, description, url: "/", siteName: site.name, type: "website", locale: "en_NG", images: ["/media/studio-racks.webp"] },
  twitter: { card: "summary_large_image", title, description },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = { themeColor: "#070103" };

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: site.name,
  description,
  url: site.url,
  telephone: `+${site.whatsapp}`,
  address: { "@type": "PostalAddress", addressLocality: site.city, addressCountry: "NG" },
  founder: { "@type": "Person", name: site.founder },
  sameAs: [site.tiktok],
  makesOffer: ["Sampling", "Pattern & tech packs", "Bulk production", "Print & embroidery", "Quality finishing"].map((n) => ({
    "@type": "Offer",
    itemOffered: { "@type": "Service", name: n },
  })),
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable} ${wide.variable} ${script.variable}`}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
