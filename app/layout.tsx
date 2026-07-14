import type { Metadata } from "next";
import { Inter } from "next/font/google";
import RevealObserver from "./components/reveal-observer";
import "./globals.css";
import { globalData } from "@/lib/site-data";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${globalData.brandName} | Dr. Surjeet Singh`,
  description: "Advanced brain, spine & diagnostic care by Dr. Surjeet Singh (MS, MCh Neurosurgery) and Dr. Stuti Kumari (MBBS, MD BHU) in Indira Nagar, Lucknow.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full bg-white text-[#102f42]">
        <RevealObserver />
        {children}
      </body>
    </html>
  );
}
