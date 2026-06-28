'use client'

import Image from 'next/image'
import Link from 'next/link'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { useTranslations } from 'next-intl'

const services = [
  { key: 'service1', img: "/service1.png" },
  { key: 'service2', img: "/service2.png" },
  { key: 'service3', img: "/service3.png" },
  { key: 'service4', img: "/service4.png" },
]

export default function ServicesCarousel() {
  const t = useTranslations('services_carousel')

  return (
    <div>
      <h2 className="text-white text-3xl font-bold text-center mb-10">{t('title')}</h2>
      <Carousel className="max-w-5xl mx-auto" opts={{ loop: true }}>
        <CarouselContent>
          {services.map((service) => (
            <CarouselItem key={service.key} className="basis-full sm:basis-1/2 md:basis-1/3">
              <div className="bg-white rounded-2xl p-4 h-full flex flex-col">
                <Image src={service.img} alt={t(`${service.key}.title`)} width={300} height={180} className="rounded-xl w-full h-[180px] object-cover" />
                <h3 className="font-bold mt-3">{t(`${service.key}.title`)}</h3>
                <p className="text-sm text-gray-500 mt-1 flex-1">{t(`${service.key}.desc`)}</p>
                <Link href="/services" className="text-[#8900F2] font-medium mt-2 inline-block">Info →</Link>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex justify-center gap-4 mt-6">
          <CarouselPrevious className="cursor-pointer static translate-y-0 w-10 h-10 md:w-8 md:h-8" />
          <CarouselNext className="cursor-pointer static translate-y-0 w-10 h-10 md:w-8 md:h-8" />
        </div>
      </Carousel>
    </div>
  )
}