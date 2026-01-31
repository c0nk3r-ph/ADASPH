import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "AdasPH - Administración de Propiedad Horizontal",
    template: "%s | AdasPH",
  },
  description:
    "Servicios profesionales de administración de propiedad horizontal. Gestión eficiente y transparente para su comunidad.",
  keywords: [
    "administración propiedad horizontal",
    "administración de condominios",
    "gestión de comunidades",
    "propiedad horizontal",
  ],
  authors: [{ name: "AdasPH" }],
  creator: "AdasPH",
  publisher: "AdasPH",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://adasph.com"),
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://adasph.com",
    siteName: "AdasPH",
    title: "AdasPH - Administración de Propiedad Horizontal",
    description:
      "Servicios profesionales de administración de propiedad horizontal. Gestión eficiente y transparente para su comunidad.",
  },
  twitter: {
    card: "summary_large_image",
    title: "AdasPH - Administración de Propiedad Horizontal",
    description:
      "Servicios profesionales de administración de propiedad horizontal.",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
