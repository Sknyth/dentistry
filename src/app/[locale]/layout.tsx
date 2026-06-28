import type { Metadata } from "next";
import { Inter, Geist } from "next/font/google";
import "./globals.css";
import Header from './components/Header'
import { cn } from "@/lib/utils";
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'

const geist = Geist({ subsets: ['latin'], variable: '--font-sans' });

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dentistry",
  description: "Dentistry is a modern dental clinic that provides high-quality dental care and services to patients of all ages.",
  keywords: "dentistry, dental clinic, dental care, dental services, oral health",
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const messages = await getMessages()

  return (
    <html lang={locale} className={cn("h-full", "antialiased", inter.variable, "font-sans", geist.variable)} suppressHydrationWarning>
      <body className="min-h-full flex flex-col">
        <NextIntlClientProvider messages={messages}>
          <Header />
          {children}
          <ScrollToTop />
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}