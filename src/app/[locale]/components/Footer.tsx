/* eslint-disable @next/next/no-html-link-for-pages */
import Image from 'next/image'
import Link from 'next/link'
import { useTranslations } from 'next-intl'

export default function Footer() {
  const t = useTranslations('footer')

  return (
    <footer id="footer" className="bg-[#2563EB] text-white">
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto py-12 px-4">
        <div className="flex items-start justify-center md:justify-start">
          <Link href="/"><Image src="/logo3.png" alt="Logo" width={200} height={120} /></Link>
        </div>

        <div className="flex flex-col gap-2 md:gap-3 items-center md:items-start">
          <h1 className="text-base md:text-xl font-bold mb-2">{t('info')}</h1>
          <a href="/#servicii" className="text-sm md:text-lg hover:underline">{t('services')}</a>
          <a href="/services" className="text-sm md:text-lg hover:underline">{t('offers')}</a>
          <a href="/services" className="text-sm md:text-lg hover:underline">{t('prices')}</a>
          <Link href="/doctors" className="text-sm md:text-lg hover:underline">{t('doctors')}</Link>
        </div>

        <div className="flex flex-col gap-2 md:gap-3 items-center md:items-start">
          <h1 className="text-base md:text-xl font-bold mb-2">{t('general')}</h1>
          <a href="#" className="text-sm md:text-lg hover:underline text-center">{t('privacy')}</a>
          <a href="#" className="text-sm md:text-lg hover:underline text-center">{t('terms')}</a>
          <a href="#" className="text-sm md:text-lg hover:underline">{t('cookies')}</a>
          <a href="#" className="text-sm md:text-lg hover:underline">{t('security')}</a>
          <a href="#" className="text-sm md:text-lg hover:underline">{t('accreditation')}</a>
        </div>

        <div className="flex flex-col gap-2 md:gap-3 items-center md:items-start">
          <h1 className="text-base md:text-xl font-bold mb-2">{t('contacts')}</h1>
          <a href="mailto:dentistry@gmail.com" className="text-sm md:text-lg hover:underline">dentistry@gmail.com</a>
          <a href="tel:+37369123456" className="text-sm md:text-lg hover:underline">+373 69 123 456</a>
          <a href="https://maps.google.com" className="text-sm md:text-lg hover:underline">Chișinău, Moldova</a>
        </div>
      </section>

      <div className="bg-[#2A3ED8] py-4 px-4">
        <p className="text-center text-sm md:text-lg font-semibold">
          © 2026 Dentistry. {t('rights')}
        </p>
      </div>
    </footer>
  )
}