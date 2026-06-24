import Image from 'next/image'

function Footer() {
  return (
    <footer id="footer" className="bg-[#2563EB] text-white">
      <section className="flex flex-col md:flex-row items-start justify-between gap-8 max-w-6xl mx-auto py-12 px-4">
        <div className="flex-1 flex items-start justify-start">
          <a href=""><Image src="/logo.png" alt="Logo" width={280} height={200} /></a>
        </div>

        <div className="flex-1 flex flex-col gap-3">
          <h1 className="text-xl font-bold mb-2">Informații</h1>
          <a href="" className="text-lg hover:underline">Servicii</a>
          <a href="" className="text-lg hover:underline">Oferte</a>
          <a href="" className="text-lg hover:underline">Prețuri</a>
          <a href="" className="text-lg hover:underline">Doctori</a>
        </div>

        <div className="flex-1 flex flex-col gap-3">
          <h1 className="text-xl font-bold mb-2">General</h1>
          <a href="" className="text-lg hover:underline">Politica de confidențialitate</a>
          <a href="" className="text-lg hover:underline">Termeni și condiții</a>
          <a href="" className="text-lg hover:underline">Politica cookie</a>
          <a href="" className="text-lg hover:underline">Politica de securitate</a>
          <a href="" className="text-lg hover:underline">Certificat de acreditare</a>
        </div>

        <div className="flex-1 flex flex-col gap-3">
          <h1 className="text-xl font-bold mb-2">Contacte</h1>
          <a href="mailto:Dentistry@gmail.com" className="text-lg hover:underline">dentistry@gmail.com</a>
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