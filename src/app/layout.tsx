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
  metadataBase: new URL("https://curiousoffice.com"),
  title: "Curious Office — Seed-Stage Investing in AI-First Companies",
  description:
    "Seed-stage investing in AI-first companies. Building and investing since 2007. Founded and operated by Kelly Smith.",
  openGraph: {
    title: "Curious Office",
    description:
      "Seed-stage investing in AI-first companies. Building and investing since 2007.",
    url: "https://curiousoffice.com",
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
    canonical: "https://curiousoffice.com",
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
    name: "Curious Office",
    url: "https://curiousoffice.com",
    description:
      "Seed-stage investing in AI-first companies. Building and investing since 2007.",
    foundingDate: "2007",
    founder: {
      "@type": "Person",
      name: "Kelly Smith",
      url: "https://www.kellysmith.com",
      sameAs: [
        "https://www.linkedin.com/in/kellysmith",
        "https://www.instagram.com/curiousoffice",
      ],
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Boise",
      addressRegion: "ID",
      addressCountry: "US",
    },
    sameAs: [
      "https://www.linkedin.com/in/kellysmith",
      "https://www.instagram.com/curiousoffice",
    ],
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
