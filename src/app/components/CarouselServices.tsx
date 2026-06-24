import Image from 'next/image'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const services = [
  {
    title: "Estetică Dentară & Albire",
    desc: "Albire profesională și fațete premium pentru un zâmbet strălucitor și natural.",
    img: "/service1.png",
  },
  {
    title: "Implantologie & Chirurgie",
    desc: "Înlocuirea sigură și permanentă a dinților lipsă cu implanturi de top.",
    img: "/service2.png",
  },
  {
    title: "Stomatologie pentru Copii",
    desc: "Vizite fără frică într-un cadru ludic, adaptat special pentru zâmbetul lor.",
    img: "/service3.png",
  },
  {
    title: "Prevenție & Igienizare",
    desc: "Detartraj profesional și consultații preventive pentru o sănătate orală de durată.",
    img: "/service4.png",
  },
]

const ServicesCarousel = () => {
  return (
    <div>
      <h2 className="text-white text-3xl font-bold text-center mb-10">Serviciile noastre:</h2>
      <Carousel className="max-w-5xl mx-auto" opts={{ loop: true }}>
        <CarouselContent>
          {services.map((service) => (
            <CarouselItem key={service.title} className="basis-full sm:basis-1/2 md:basis-1/3">
              <div className="bg-white rounded-2xl p-4 h-full flex flex-col">
                <Image src={service.img} alt={service.title} width={300} height={180} className="rounded-xl w-full h-[180px] object-cover" />
                <h3 className="font-bold mt-3">{service.title}</h3>
                <p className="text-sm text-gray-500 mt-1 flex-1">{service.desc}</p>
                <a href="#" className="text-[#8900F2] font-medium mt-2 inline-block">Info →</a>
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

export default ServicesCarousel