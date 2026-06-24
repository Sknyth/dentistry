import type { Metadata } from "next";
import { Inter, Geist } from "next/font/google";
import "./globals.css";
import Header from './components/Header'
import { cn } from "@/lib/utils";
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dentistry",
  description: "Dentistry is a modern dental clinic that provides high-quality dental care and services to patients of all ages. Our team of experienced dentists and staff are dedicated to ensuring that every patient receives personalized care in a comfortable and welcoming environment.",
  keywords: "dentistry, dental clinic, dental care, dental services, oral health, teeth whitening, dental implants, orthodontics, cosmetic dentistry",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("h-full", "antialiased", inter.variable, "font-sans", geist.variable)} suppressHydrationWarning>
      <body className="min-h-full flex flex-col">
        <Header />
        {children}
        <ScrollToTop />
        <Footer />
      </body>
    </html>
  );
}