import { Hospital, Hourglass, Mail, MapPin, Phone, ShieldCheck, Users } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import Carousel from './components/CarouselServices'
import InfoBox from './components/InfoBox'
import { useTranslations } from 'next-intl'

export default function Home() {
  const t = useTranslations()

  return (
    <main>
      <section
        className="w-full min-h-[500px] md:h-[700px] bg-cover bg-center bg-no-repeat flex items-center"
        style={{ backgroundImage: "url('/bg.png')" }}
      >
        <div className="relative z-10 max-w-2xl px-8 md:px-16 py-16 md:py-32">
          <h1 className="text-3xl md:text-4xl font-bold text-[#8900F2] mb-4">
            {t('hero.title')}
          </h1>
          <p className="text-gray-800 text-base md:text-lg mb-8">
            {t('hero.desc')}
          </p>
          <Link href="/about" className="bg-[#8900F2] hover:bg-[#7000cc] text-white text-lg md:text-xl font-semibold px-8 md:px-12 py-4 md:py-5 rounded-2xl transition-colors cursor-pointer">
            {t('hero.btn')}
          </Link>
        </div>
      </section>

      <section id="echipa" className="py-16 flex flex-col md:flex-row gap-8 mx-auto max-w-6xl px-4">
        <div className="text-white bg-[#8900F2] p-8 md:p-16 rounded-2xl w-full md:w-1/2 flex flex-col justify-center gap-5">
          <h1 className="text-3xl md:text-4xl font-bold">{t('team.title')}</h1>
          <p className="text-base md:text-lg mt-4">{t('team.desc')}</p>
          <Link href="/doctors" className="mt-4 md:mt-8 bg-white text-[#8900F2] font-semibold text-base md:text-lg px-6 md:px-8 py-3 md:py-4 rounded-2xl hover:bg-gray-100 transition-colors cursor-pointer text-center">
            {t('team.btn')}
          </Link>
        </div>
        <div className="w-full md:w-1/2 relative min-h-[400px] md:min-h-[700px]">
          <Image src="/person1.png" alt="Team" fill className="rounded-2xl object-cover" />
        </div>
      </section>

      <section id="servicii" className="bg-[#8900F2] py-16 px-4">
        <Carousel />
      </section>

      <section id="avantaje" className="py-16 px-4 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8">
        <InfoBox title={t('stats.patients')} value={10000} suffix="+"><Users className="w-12 h-12" strokeWidth={1.5} /></InfoBox>
        <InfoBox title={t('stats.doctors')} value={10} suffix="+"><Hospital className="w-12 h-12" strokeWidth={1.5} /></InfoBox>
        <InfoBox title={t('stats.years')} value={14}><Hourglass className="w-12 h-12" strokeWidth={1.5} /></InfoBox>
        <InfoBox title={t('stats.success')} value={100} suffix="%"><ShieldCheck className="w-12 h-12" strokeWidth={1.5} /></InfoBox>
      </section>

      <section id="map" className="py-16 px-4 bg-[#8900F2]">
        <div className="p-8 md:p-16 rounded-2xl bg-white max-w-6xl mx-auto flex flex-col md:flex-row gap-8">
          <div className="flex flex-col gap-6 justify-center">
            <div className="text-[#8900F2] items-center gap-2 flex">
              <MapPin width={20} height={20} />
              <a className="text-lg md:text-xl font-semibold" href="https://maps.google.com">Chișinău, Moldova</a>
            </div>
            <hr className="border-[#8900F2] border-t-2" />
            <div className="text-[#8900F2] items-center gap-2 flex">
              <Phone width={20} height={20} />
              <a href="tel:+37369123456" className="text-lg md:text-xl font-semibold">+373 69 123 456</a>
            </div>
            <hr className="border-[#8900F2] border-t-2" />
            <div className="text-[#8900F2] items-center gap-2 flex">
              <Mail width={20} height={20} />
              <a href="" className="text-lg md:text-xl font-semibold">dentistry@gmail.com</a>
            </div>
          </div>
          <div className="w-full h-[300px] md:h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2720.187091168775!2d28.86381021560313!3d47.01045287917586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c97c3628b769a1%3A0x37d1d6305749dd3c!2sChi%C8%99in%C4%83u%2C%20Moldova!5e0!3m2!1sen!2sus!4v1700000000000"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-2xl"
            />
          </div>
        </div>
      </section>

      <section id="consultatie" className="bg-[#8900F2] py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-white text-2xl md:text-3xl font-bold mb-4">{t('contact.title')}</h2>
          <p className="text-white text-base md:text-lg mb-8">{t('contact.desc')}</p>
          <form className="flex flex-col gap-4">
            <input type="text" placeholder={t('contact.name')} className="p-4 rounded-lg bg-white" />
            <input type="email" placeholder={t('contact.email')} className="p-4 rounded-lg bg-white" />
            <input type="tel" placeholder={t('contact.phone')} className="p-4 rounded-lg bg-white" />
            <textarea placeholder={t('contact.message')} className="p-4 rounded-lg bg-white" rows={4} />
            <button type="submit" className="bg-white text-[#8900F2] font-semibold text-lg px-8 py-4 rounded-2xl hover:bg-gray-100 transition-colors cursor-pointer">
              {t('contact.btn')}
            </button>
          </form>
        </div>
      </section>
    </main>
  )
}