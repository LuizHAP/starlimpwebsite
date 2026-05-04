import type { Metadata, Viewport } from "next";
import { Inter, Bricolage_Grotesque } from "next/font/google";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#0098D8",
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
  title: "Star Limp · Produtos de Limpeza · Várzea Paulista",
  description:
    "Star Limp — Produtos de limpeza profissional com entrega no mesmo dia em Várzea Paulista, Jundiaí, Campo Limpo e região. Detergentes, descartáveis, higiene e equipamentos. Pedido pelo WhatsApp.",
  icons: {
    icon: [
      { url: "/star-limp-logo/favicon.ico", sizes: "any" },
      { url: "/star-limp-logo/favicon.svg", type: "image/svg+xml" },
      { url: "/star-limp-logo/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/star-limp-logo/favicon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/star-limp-logo/favicon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/star-limp-logo/apple-touch-icon.png", sizes: "180x180" },
    ],
  },
  manifest: "/manifest.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" data-theme="light" className={`${inter.variable} ${bricolage.variable}`}>
      <body>{children}</body>
    </html>
  );
}
