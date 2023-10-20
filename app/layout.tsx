import "./globals.css";
import type { Metadata } from "next";
import { Orbitron, Gemunu_Libre } from "next/font/google";

import TopNavigation from "@/components/navigation/TopNavigation";
import Footer from "@/components/navigation/Footer";

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
});

const gemunuLibre = Gemunu_Libre({
  subsets: ["latin"],
  variable: "--font-gemunu-libre",
});

export const metadata: Metadata = {
  title: "Kyber Corporation",
  description: "Future Solutions to Modern Problems",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${orbitron.variable} ${gemunuLibre.variable} main-bg`}>
        <TopNavigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
