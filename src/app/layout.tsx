import type { Metadata } from "next";
import { Inter, Source_Serif_4 } from "next/font/google";
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
    card: "summary",
    title: "Curious Office",
    description:
      "Seed-stage investing in AI-first companies. Building and investing since 2007.",
  },
  alternates: {
    canonical: "https://curiousoffice.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${sourceSerif.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
