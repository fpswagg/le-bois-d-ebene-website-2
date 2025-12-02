import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { Suspense } from "react";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bois d'Ébène - Cabaret-Restaurant de Prestige",
  description:
    "Un cabaret incontournable de Yaoundé. Plats savoureux, musique live et ambiance festive où la gastronomie rencontre le spectacle.",
  keywords:
    "cabaret Yaoundé, restaurant Yaoundé, gastronomie, gibier, varan, musique live, spectacle",
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
  openGraph: {
    title: "Bois d'Ébène - Cabaret-Restaurant de Prestige",
    description:
      "Un cabaret incontournable de Yaoundé. Plats savoureux, musique live et ambiance festive où la gastronomie rencontre le spectacle.",
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: "Bois d'Ébène",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Bois d'Ébène - Cabaret-Restaurant de Prestige",
    description:
      "Un cabaret incontournable de Yaoundé. Plats savoureux, musique live et ambiance festive où la gastronomie rencontre le spectacle.",
    images: ['/logo.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${playfair.variable} ${inter.variable}`}>
      <body className="antialiased">
        <Suspense fallback={<div>Loading...</div>}>
          <LanguageProvider>
            <Header />
            <main className="min-h-screen">{children}</main>
            <Footer />
            <Toaster />
          </LanguageProvider>
        </Suspense>
      </body>
    </html>
  );
}

