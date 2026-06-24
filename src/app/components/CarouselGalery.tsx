import Image from 'next/image'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const galery = [
  {
		id: 1,
    img: "/galery1.png"
  },
  {
		id: 2,
    img: "/galery2.png"
  },
  {
		id: 3,
    img: "/galery3.png"
  },
  {
		id: 4,
    img: "/galery4.png"
  },
	{
		id: 5,
    img: "/galery5.png"
  },
]

const CarouselGalery = () => {
  return (
    <div>
      <h2 className="text-white text-4xl font-bold text-center mb-10">Galerie</h2>
      <Carousel className="max-w-5xl mx-auto" opts={{ loop: true }}>
        <CarouselContent>
          {galery.map((g) => (
            <CarouselItem key={g.id} className="md:basis-1/3">
              <div className="bg-white rounded-2xl p-4">
                <Image src={g.img} alt="image" width={300} height={200} className="rounded-xl w-full object-cover" />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="cursor-pointer" />
        <CarouselNext className="cursor-pointer" />
      </Carousel>
    </div>
  )
}

export default CarouselGalery