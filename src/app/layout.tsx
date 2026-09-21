import type { Metadata, Viewport } from "next";
import { Inter, Bricolage_Grotesque } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import {
  DEFAULT_DESCRIPTION,
  DEFAULT_TITLE,
  KEYWORDS,
  SITE_NAME,
  SITE_URL,
  buildJsonLd,
} from "@/lib/seo";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#0098D8",
  colorScheme: "light dark",
};

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: DEFAULT_TITLE,
    template: "%s · Star Limp",
  },
  description: DEFAULT_DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: KEYWORDS,
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: "shopping",
  alternates: {
    canonical: "/",
    languages: { "pt-BR": "/" },
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: [
      {
        url: "/star-limp-logo/header-logo.png",
        width: 1440,
        height: 560,
        alt: "Star Limp - Produtos de Limpeza · Atacado & Varejo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: ["/star-limp-logo/header-logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/star-limp-logo/favicon.ico", sizes: "any" },
      { url: "/star-limp-logo/favicon.svg", type: "image/svg+xml" },
      { url: "/star-limp-logo/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/star-limp-logo/favicon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/star-limp-logo/favicon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/star-limp-logo/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/manifest.webmanifest",
  formatDetection: {
    telephone: true,
    address: true,
    email: true,
  },
  verification: {
    google: "GZNxF2q4D9DHuIF5_7pksepwESxAyKggi0bRYQ-uqfs",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = buildJsonLd();

  return (
    <html lang="pt-BR" data-theme="light" className={`${inter.variable} ${bricolage.variable}`}>
      <head>
        {/* Site-name signal for Google SERP — keep in <head> on the homepage */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
