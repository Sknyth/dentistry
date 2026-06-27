import CarouselOffers from '../components/CarouselOffers'
import Service from '@/app/components/Service'

const categories = [
  {
    title: "Diagnostic și Prevenție",
    doctorId: 3,
    services: [
      { name: "Consultație primară + Plan de tratament", price: "de la 40 €" },
      { name: "Radiografie retroalveolară / digitală", price: "de la 15 €" },
      { name: "Pachet Igienizare Completă (Detartraj, Periaj, Airflow)", price: "de la 90 €" },
      { name: "Fluorizare profesională (ambele arcade)", price: "de la 40 €" },
    ],
  },
  {
    title: "Odontologie (Tratamentul Cariilor)",
    doctorId: 3,
    services: [
      { name: "Obturație fizionomică (Plombă) - suprafață mică", price: "de la 40 €" },
      { name: "Obturație fizionomică (Plombă) - cavitate medie/mare", price: "de la 60 €" },
      { name: "Reconstrucţie dinte cu pivot din fibră de sticlă", price: "de la 80 €" },
      { name: "Coafaj direct/indirect (protecţia pulpei la carii adânci)", price: "de la 20 €" },
    ],
  },
  {
    title: "Endodonție (Tratamente de Canal)",
    doctorId: 2,
    services: [
      { name: "Tratament endodontic monoradicular (1 canal)", price: "de la 70 €" },
      { name: "Tratament endodontic biradicular (2 canale)", price: "de la 95 €" },
      { name: "Tratament endodontic pluriradicular (3-4 canale)", price: "de la 120 €" },
      { name: "Retratament endodontic (despobturare și dezinfectare canal)", price: "de la 110 €" },
    ],
  },
  {
    title: "Chirurgie și Implantologie",
    doctorId: 4,
    services: [
      { name: "Extracție dinte monoradicular / simplă", price: "de la 40 €" },
      { name: "Extracție molar de minte (inclus sau semi-inclus)", price: "de la 100 €" },
      { name: "Implant Dentar (partea chirurgicală, brand standard)", price: "de la 400 €" },
      { name: "Adiție de os / Sinus Lift (procedură de chirurgie osoasă)", price: "de la 300 €" },
    ],
  },
  {
    title: "Protetică și Estetică Dentară",
    doctorId: 1,
    services: [
      { name: "Coroană metalo-ceramică", price: "de la 120 €" },
      { name: "Coroană zirconiu (fizionomie premium)", price: "de la 240 €" },
      { name: "Fațetă ceramică (E-max)", price: "de la 350 € / dinte" },
      { name: "Albire profesională în cabinet (cu lampă LED)", price: "de la 199 €" },
    ],
  },
]

export default function page() {
  return (
    <main className="min-h-screen flex flex-col px-16 py-12 md:py-20">
      <div className="border-[#8900F2] border-3 rounded-2xl">
        <section className="p-12">
          <h2 className="text-3xl font-bold text-center italic mb-4">Oferte</h2>
          <CarouselOffers />
        </section>

        <section className="p-12 flex flex-col gap-6">
          <h2 className="text-3xl font-bold italic text-center mb-4">Prețuri</h2>
          {categories.map((cat) => (
             <Service key={cat.title} title={cat.title} services={cat.services} doctorId={cat.doctorId} />
          ))}
        </section>
      </div>
    </main>
  )
}