import type { Metadata } from "next";
import { Inter, Source_Serif_4 } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
  display: "swap",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.curiousoffice.com"),
  title: "Curious Office — Seed-Stage Investing in AI-First Companies",
  description:
    "Seed-stage investing in AI-first companies. Building and investing since 2007. Founded and operated by Kelly Smith.",
  openGraph: {
    title: "Curious Office",
    description:
      "Seed-stage investing in AI-first companies. Building and investing since 2007.",
    url: "https://www.curiousoffice.com",
    siteName: "Curious Office",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Curious Office",
    description:
      "Seed-stage investing in AI-first companies. Building and investing since 2007.",
  },
  alternates: {
    canonical: "https://www.curiousoffice.com",
  },
  other: {
    "theme-color": "#111111",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://www.curiousoffice.com/#organization",
    name: "Curious Office",
    url: "https://www.curiousoffice.com",
    description:
      "Seed-stage investing in AI-first companies. Building and investing since 2007.",
    foundingDate: "2007",
    founder: {
      "@id": "https://www.kellysmith.com/#person",
    },
    subOrganization: {
      "@id": "https://www.axacraft.com/#organization",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Meridian",
      addressRegion: "ID",
      addressCountry: "US",
    },
    sameAs: ["https://www.linkedin.com/company/curious-office"],
  };


  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${sourceSerif.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
