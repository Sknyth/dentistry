'use client'

import Image from 'next/image'
import Link from 'next/link'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { useTranslations } from 'next-intl'

const offers = [
  {
    key: 'offer1',
    img: '/service1.png',
    price: '40 EUR',
    doctorId: 3,
    procedure: 'Pachet Igienizare Completă (Detartraj, Periaj, Airflow)',
  },
  {
    key: 'offer2',
    img: '/service2.png',
    price: '170 EUR',
    doctorId: 1,
    procedure: 'Albire profesională în cabinet (cu lampă LED)',
  },
  {
    key: 'offer3',
    img: '/service3.png',
    price: '45 EUR',
    doctorId: 3,
    procedure: 'Obturație fizionomică (Plombă) - suprafață mică',
  },
  {
    key: 'offer4',
    img: '/service4.png',
    price: '350 EUR',
    doctorId: 4,
    procedure: 'Implant Dentar (partea chirurgicală, brand standard)',
  },
  {
    key: 'offer5',
    img: '/service6.png',
    price: '280 EUR',
    perTooth: true,
    doctorId: 1,
    procedure: 'Fațetă ceramică (E-max)',
  },
]

export default function OffersCarousel() {
  const t = useTranslations('offers')
  const tPrices = useTranslations('prices')

  return (
    <div className="px-8 md:px-10">
      <Carousel className="max-w-5xl mx-auto" opts={{ loop: true }}>
        <CarouselContent className="-ml-3 md:-ml-4">
          {offers.map((offer) => (
            <CarouselItem key={offer.key} className="pl-3 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
              <div className="bg-white rounded-2xl p-3 md:p-4 h-full flex flex-col shadow-sm">
                <Image
                  src={offer.img}
                  alt={t(`${offer.key}.title`)}
                  width={300}
                  height={180}
                  className="rounded-xl w-full h-[160px] md:h-[180px] object-cover"
                />
                <h3 className="font-bold mt-3 text-sm md:text-base leading-snug">{t(`${offer.key}.title`)}</h3>
                <p className="text-xs text-gray-500 mt-1 flex-1 leading-relaxed">{t(`${offer.key}.desc`)}</p>
                <p className="text-[#8900F2] font-bold mt-3 text-sm md:text-base">
                  {offer.price}{'perTooth' in offer ? ` ${tPrices('perTooth')}` : ''}
                </p>
                <Link
                  href={`/doctors/${offer.doctorId}/book?procedure=${encodeURIComponent(offer.procedure)}`}
                  className="mt-3 w-full text-center bg-[#8900F2] hover:bg-[#7000cc] transition-colors text-white text-sm font-medium py-2 rounded-xl"
                >
                  {t('bookBtn')}
                </Link>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="cursor-pointer w-8 h-8 md:w-10 md:h-10 -left-4 md:-left-5" />
        <CarouselNext className="cursor-pointer w-8 h-8 md:w-10 md:h-10 -right-4 md:-right-5" />
      </Carousel>
    </div>
  )
}