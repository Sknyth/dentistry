import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from 'next/image'
import { useTranslations } from 'next-intl'

const galery = [
  { id: 1, img: "/galery1.png" },
  { id: 2, img: "/galery2.png" },
  { id: 3, img: "/galery3.png" },
  { id: 4, img: "/galery4.png" },
  { id: 5, img: "/galery5.png" },
]

export default function CarouselGalery() {
  const t = useTranslations('gallery')

  return (
    <div>
      <h2 className="text-white text-4xl font-bold text-center mb-10">{t('title')}</h2>
      <Carousel className="max-w-5xl mx-auto" opts={{ loop: true }}>
        <CarouselContent>
          {galery.map((g) => (
            <CarouselItem key={g.id} className="basis-full sm:basis-1/2 md:basis-1/3">
              <Image
                src={g.img}
                alt="image"
                width={500}
                height={350}
                className="rounded-2xl w-full h-[250px] md:h-[300px] object-cover"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="cursor-pointer w-10 h-10" />
        <CarouselNext className="cursor-pointer w-10 h-10" />
      </Carousel>
    </div>
  )
}