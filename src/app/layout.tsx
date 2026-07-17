import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { site } from "@/data/portfolio";
import {
  personJsonLd,
  siteKeywords,
  websiteJsonLd,
} from "@/lib/seo";
import { getSiteUrl } from "@/lib/site-url";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = getSiteUrl();
const defaultTitle = `${site.name} · ${site.role}`;
const defaultDescription = `${site.tagline} Portfolio of ${site.name}, ${site.role}. Multi-agent systems, RAG, cybersecurity intelligence, and production AI.`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: defaultTitle,
    template: `%s · ${site.name}`,
  },
  description: defaultDescription,
  applicationName: `${site.name} Portfolio`,
  authors: [{ name: site.name, url: siteUrl }],
  creator: site.name,
  publisher: site.name,
  keywords: [...siteKeywords],
  category: "technology",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: defaultTitle,
    title: defaultTitle,
    description: defaultDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#050508" },
    { media: "(prefers-color-scheme: light)", color: "#050508" },
  ],
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = [personJsonLd(), websiteJsonLd()];

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-dvh flex-col overflow-x-hidden bg-terminal text-foreground">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
