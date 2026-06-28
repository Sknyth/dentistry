import Link from 'next/link'
import Image from 'next/image'
import { useTranslations } from 'next-intl'

interface DoctorProps {
  id: number
  name: string
  desc: string
  image: string
}

export default function DoctorS1({ id, name, desc, image }: DoctorProps) {
  const t = useTranslations('doctors')

  return (
    <div className="bg-white rounded-3xl p-6 md:p-10 flex flex-col md:flex-row items-center gap-6 md:gap-8">
      <div className="flex flex-col gap-4 flex-1 order-2 md:order-1">
        <h1 className="text-2xl md:text-3xl font-bold italic text-gray-900">{name}</h1>
        <p className="text-gray-500 text-base md:text-lg">{desc}</p>
        <Link href={`/doctors/${id}`} className="mt-2 md:mt-4 bg-[#8900F2] text-white font-semibold text-base md:text-lg px-6 md:px-8 py-3 md:py-4 rounded-2xl hover:bg-[#7000cc] transition-colors cursor-pointer w-fit">
          {t('infoBtn')}
        </Link>
      </div>
      <div className="shrink-0 order-1 md:order-2">
        <Image src={image} alt={name} width={300} height={400} className="rounded-2xl object-cover h-[280px] w-[220px] md:h-[400px] md:w-[300px]" />
      </div>
    </div>
  )
}