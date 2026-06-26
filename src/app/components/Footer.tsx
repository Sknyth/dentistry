/* eslint-disable @next/next/no-html-link-for-pages */
import Image from 'next/image'
import Link from 'next/link'

function Footer() {
  return (
    <footer id="footer" className="bg-[#2563EB] text-white">
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto py-12 px-4">
        <div className="flex items-start justify-center md:justify-start">
          <Link href="/"><Image src="/logo3.png" alt="Logo" width={200} height={120} /></Link>
        </div>

        <div className="flex flex-col gap-3 items-center md:items-start">
          <h1 className="text-xl font-bold mb-2">Informații</h1>
          <a href="/#servicii" className="text-lg hover:underline">Servicii</a>
          <a href="#" className="text-lg hover:underline">Oferte</a>
          <a href="#" className="text-lg hover:underline">Prețuri</a>
          <Link href="/doctors" className="text-lg hover:underline">Doctori</Link>
        </div>

        <div className="flex flex-col gap-3 items-center md:items-start">
          <h1 className="text-xl font-bold mb-2">General</h1>
          <a href="#" className="text-lg hover:underline text-center">Politica de confidențialitate</a>
          <a href="#" className="text-lg hover:underline text-center">Termeni și condiții</a>
          <a href="#" className="text-lg hover:underline">Politica cookie</a>
          <a href="#" className="text-lg hover:underline">Politica de securitate</a>
          <a href="#" className="text-lg hover:underline">Certificat de acreditare</a>
        </div>

        <div className="flex flex-col gap-3 items-center md:items-start">
          <h1 className="text-xl font-bold mb-2">Contacte</h1>
          <a href="mailto:dentistry@gmail.com" className="text-lg hover:underline">dentistry@gmail.com</a>
          <a href="tel:+37369123456" className="text-lg hover:underline">+373 69 123 456</a>
          <a href="https://maps.google.com" className="text-lg hover:underline">Chișinău, Moldova</a>
        </div>
      </section>

      <div className="bg-[#2A3ED8] py-4 px-4">
        <p className="text-center text-lg font-semibold">
          © 2026 Dentistry. Toate drepturile rezervate.
        </p>
      </div>
    </footer>
  )
}

export default Footer