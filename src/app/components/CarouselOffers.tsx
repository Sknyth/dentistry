import Image from 'next/image'
import Link from 'next/link'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const offers = [
  {
    title: "Pachet Igienizare Profesională Completă (Profilaxie)",
    desc: "Ce include: Detartraj cu ultrasunete, periaj profesional și sablare (Air-Flow) pentru îndepărtarea petelor.",
    img: "/service1.png",
    price: "40 EUR",
  },
  {
    title: "Pachet Estetic: Albire Dentară Profesională",
    desc: "Ce include: Igienizare completă, ședință de albire cu lampă LED (rezultate vizibile pe loc).",
    img: "/service2.png",
    price: "170 EUR",
  },
  {
    title: "Pachet Urgență & Restaurare: Plombă (Obturaţie) Premium",
    desc: "Ce include: Consultație, anestezie locală și obturaţie fizionomică din compozit de ultimă generație.",
    img: "/service3.png",
    price: "45 EUR",
  },
  {
    title: "Pachet Implant Dentar „Zâmbet Complet",
    desc: "Ce include: Implant dentar de înaltă calitate + bont protetic (faza chirurgicală primară) și plan de tratament digital.",
    img: "/service4.png",
    price: "350 EUR",
  },
  {
    title: "Pachet Estetică Top: Fațetă Dentară E-MAX",
    desc: "Ce include: Consultație estetică, simulare digitală (Digital Smile Design) și aplicarea unei fațete ceramice premium.",
    img: "/service6.png",
    price: "280 EUR / per dinte",
  },
]

const OffersCarousel = () => {
  return (
    <div>
      <Carousel className="max-w-5xl mx-auto" opts={{ loop: true }}>
        <CarouselContent>
          {offers.map((offer) => (
            <CarouselItem key={offer.title} className="basis-full sm:basis-1/2 md:basis-1/3">
              <div className="bg-white rounded-2xl p-4 h-full flex flex-col">
                <Image src={offer.img} alt={offer.title} width={300} height={180} className="rounded-xl w-full h-[180px] object-cover" />
                <h3 className="font-bold mt-3 text-sm">{offer.title}</h3>
                <p className="text-xs text-gray-500 mt-1 flex-1">{offer.desc}</p>
                <p className="text-[#8900F2] font-bold mt-3">{offer.price}</p>
                <Link
                  href="#"
                  className="mt-3 w-full text-center bg-[#8900F2] hover:bg-[#7000cc] transition-colors text-white text-sm font-medium py-2 rounded-xl"
                >
                  Programează-te
                </Link>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="cursor-pointer w-10 h-10" />
        <CarouselNext className="cursor-pointer w-10 h-10" />
      </Carousel>
    </div>
  )
}

export default OffersCarousel