import CarouselGalery from '../components/CarouselGalery'
import { getTranslations } from 'next-intl/server'

export default async function page() {
  const t = await getTranslations('about')

  return (
    <main className="min-h-screen">
      <section className="px-4 py-12 md:p-16 flex flex-col gap-8 max-w-6xl mx-auto">
        <h1 className="text-2xl md:text-3xl text-[#8900F2] font-bold">
          {t('title')}
        </h1>
        <div className="p-6 md:p-8 bg-[#8900F2] rounded-2xl shadow-lg">
          <p className="text-base md:text-lg text-white leading-relaxed">
            {t('p')}
          </p>
        </div>
      </section>
      <section className="p-16 flex flex-col gap-8 bg-[#8900F2] shadow-lg">
        <CarouselGalery />
      </section>
    </main>
  )
}