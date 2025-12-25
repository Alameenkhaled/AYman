import type { Metadata } from "next";
import { Cinzel, Inter, Playfair_Display, Montserrat, Lora, Noto_Kufi_Arabic } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: '--font-cinzel',
  weight: ["400", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-inter',
  weight: ["300", "400", "600"],
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: '--font-playfair-display',
  style: ["italic", "normal"],
  weight: ["400", "700"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: '--font-montserrat',
  weight: ["300", "400", "500", "600"],
});

const lora = Lora({
  subsets: ["latin"],
  variable: '--font-lora',
  style: ["italic", "normal"],
  weight: ["400", "500", "600"],
});

const notoKufiArabic = Noto_Kufi_Arabic({
  subsets: ["arabic"],
  variable: '--font-noto-kufi-arabic',
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Aneef Visual Sovereignty",
  description: "High-performance scrollytelling engine",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${cinzel.variable} ${inter.variable} ${playfairDisplay.variable} ${montserrat.variable} ${lora.variable} ${notoKufiArabic.variable} font-sans bg-background-dark text-text-dark`}>
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
