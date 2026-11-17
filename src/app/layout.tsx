import type { Metadata, Viewport } from "next";
import { Inter_Tight, Caveat, Instrument_Serif } from "next/font/google";
import { site, projects, faqs } from "@/content/site";
import { Preloader } from "@/components/Preloader";
import "./globals.css";

const sans = Inter_Tight({ variable: "--font-sans", subsets: ["latin"], display: "swap" });
const serif = Instrument_Serif({ variable: "--font-serif", subsets: ["latin"], weight: "400", style: ["normal", "italic"], display: "swap" });
const hand = Caveat({ variable: "--font-hand", subsets: ["latin"], weight: ["500", "600"], display: "swap" });

const title = "oj.dzn — Premium websites for brands that want to be taken seriously";
const description =
  "oj.dzn is a web design and development studio in Lagos. We design and build fast, editorial websites for brands, artists and businesses, built to turn visitors into enquiries, orders and bookings.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: title, template: "%s — oj.dzn" },
  description,
  keywords: ["web designer Lagos", "web developer Nigeria", "Next.js developer", "premium website design", "portfolio", "oj.dzn", "Ohjay"],
  authors: [{ name: site.person }],
  openGraph: { title, description, url: site.url, siteName: "oj.dzn", type: "website", locale: "en_NG" },
  twitter: { card: "summary_large_image", title, description, creator: "@themanJayyy" },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = { themeColor: "#191919" };

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      name: "oj.dzn",
      url: site.url,
      email: site.email,
      areaServed: "Worldwide",
      address: { "@type": "PostalAddress", addressLocality: "Lagos", addressCountry: "NG" },
      founder: { "@type": "Person", name: site.person, alternateName: site.nickname, jobTitle: site.role, sameAs: site.socials.map((s) => s.href) },
      makesOffer: ["Website design", "Web development", "E-commerce websites", "Brand & graphic design"].map((n) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: n } })),
      subjectOf: projects.map((p) => ({ "@type": "CreativeWork", name: p.name, url: p.url })),
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
    },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${sans.variable} ${serif.variable} ${hand.variable}`} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `try{if(!sessionStorage.getItem("ojdzn-intro")&&!matchMedia("(prefers-reduced-motion: reduce)").matches)document.documentElement.classList.add("preloading")}catch(e){}`,
          }}
        />
      </head>
      <body>
        <Preloader />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        {children}
      </body>
    </html>
  );
}
