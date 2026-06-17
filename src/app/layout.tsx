import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Shina Salako — Books, Programmes & Diagnostics for Operators",
    template: "%s | Shina Salako",
  },
  description:
    "Three books, three operating systems: for founders, for fleet leaders, and for the season you are building through. By Shina Salako, MD-CEO SALCOMMS KWIK XTRA LIMITED.",
  metadataBase: new URL("https://shinasalako.com"),
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://shinasalako.com",
    siteName: "Shina Salako",
    title: "Shina Salako — Operator, author, builder",
    description:
      "Three books, three operating systems: for founders, for fleet leaders, and for the season you are building through.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shina Salako — Operator, author, builder",
    description:
      "Three books, three operating systems: for founders, for fleet leaders, and for the season you are building through.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body>{children}</body>
    </html>
  );
}
