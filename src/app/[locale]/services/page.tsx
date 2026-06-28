import CarouselOffers from '../components/CarouselOffers'
import Service from '../components/Service'
import { useTranslations } from 'next-intl'

export default function Page() {
  const t = useTranslations()
  const from = (amount: string) => `${t('prices.from')} ${amount}`

  const categories = [
    {
      title: t('prices.cat1.title'),
      doctorId: 3,
      services: [
        { key: "Consultație primară + Plan de tratament", name: t('prices.cat1.s1'), price: from("40 €") },
        { key: "Radiografie retroalveolară / digitală", name: t('prices.cat1.s2'), price: from("15 €") },
        { key: "Pachet Igienizare Completă (Detartraj, Periaj, Airflow)", name: t('prices.cat1.s3'), price: from("90 €") },
        { key: "Fluorizare profesională (ambele arcade)", name: t('prices.cat1.s4'), price: from("40 €") },
      ],
    },
    {
      title: t('prices.cat2.title'),
      doctorId: 3,
      services: [
        { key: "Obturație fizionomică (Plombă) - suprafață mică", name: t('prices.cat2.s1'), price: from("40 €") },
        { key: "Obturație fizionomică (Plombă) - cavitate medie/mare", name: t('prices.cat2.s2'), price: from("60 €") },
        { key: "Reconstrucţie dinte cu pivot din fibră de sticlă", name: t('prices.cat2.s3'), price: from("80 €") },
        { key: "Coafaj direct/indirect (protecţia pulpei la carii adânci)", name: t('prices.cat2.s4'), price: from("20 €") },
      ],
    },
    {
      title: t('prices.cat3.title'),
      doctorId: 2,
      services: [
        { key: "Tratament endodontic monoradicular (1 canal)", name: t('prices.cat3.s1'), price: from("70 €") },
        { key: "Tratament endodontic biradicular (2 canale)", name: t('prices.cat3.s2'), price: from("95 €") },
        { key: "Tratament endodontic pluriradicular (3-4 canale)", name: t('prices.cat3.s3'), price: from("120 €") },
        { key: "Retratament endodontic (despobturare și dezinfectare canal)", name: t('prices.cat3.s4'), price: from("110 €") },
      ],
    },
    {
      title: t('prices.cat4.title'),
      doctorId: 4,
      services: [
        { key: "Extracție dinte monoradicular / simplă", name: t('prices.cat4.s1'), price: from("40 €") },
        { key: "Extracție molar de minte (inclus sau semi-inclus)", name: t('prices.cat4.s2'), price: from("100 €") },
        { key: "Implant Dentar (partea chirurgicală, brand standard)", name: t('prices.cat4.s3'), price: from("400 €") },
        { key: "Adiție de os / Sinus Lift (procedură de chirurgie osoasă)", name: t('prices.cat4.s4'), price: from("300 €") },
      ],
    },
    {
      title: t('prices.cat5.title'),
      doctorId: 1,
      services: [
        { key: "Coroană metalo-ceramică", name: t('prices.cat5.s1'), price: from("120 €") },
        { key: "Coroană zirconiu (fizionomie premium)", name: t('prices.cat5.s2'), price: from("240 €") },
        { key: "Fațetă ceramică (E-max)", name: t('prices.cat5.s3'), price: `${t('prices.from')} 350 € ${t('prices.perTooth')}` },
        { key: "Albire profesională în cabinet (cu lampă LED)", name: t('prices.cat5.s4'), price: from("199 €") },
      ],
    },
  ]

  return (
    <main className="min-h-screen flex flex-col px-4 py-6 md:px-8 lg:px-16 md:py-12 lg:py-20">
      <div className="border-[#8900F2] border-2 md:border-3 rounded-2xl">
        <section className="p-4 md:p-8 lg:p-12">
          <h2 className="text-2xl md:text-3xl font-bold text-center italic mb-4">{t('services.offers')}</h2>
          <CarouselOffers />
        </section>

        <section className="p-4 md:p-8 lg:p-12 flex flex-col gap-4 md:gap-6">
          <h2 className="text-2xl md:text-3xl font-bold italic text-center mb-2 md:mb-4">{t('services.prices')}</h2>
          {categories.map((cat) => (
            <Service key={cat.title} title={cat.title} services={cat.services} doctorId={cat.doctorId} />
          ))}
        </section>
      </div>
    </main>
  )
}