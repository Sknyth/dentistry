"use client"

import Link from 'next/link'
import { useState } from 'react'
import { useTranslations } from 'next-intl'

interface Service {
  name: string
  key: string
  price: string
}

interface Props {
  title: string
  services: Service[]
  doctorId: number
}

export default function Service({ title, services, doctorId }: Props) {
  const t = useTranslations('services')
  const [selectedKey, setSelectedKey] = useState(services[0]?.key ?? '')

  return (
    <div className="border-2 border-[#8900F2] rounded-2xl p-4 md:p-6 lg:p-8 flex flex-col gap-2 md:gap-3">
      <h3 className="text-lg md:text-xl lg:text-2xl font-bold italic text-[#8900F2]">{title}</h3>

      <div className="flex justify-between text-gray-400 text-xs md:text-sm italic border-b border-gray-200 pb-2">
        <span>{t('colService')}</span>
        <span>{t('colPrice')}</span>
      </div>

      {services.map((item, i) => (
        <div
          key={i}
          onClick={() => setSelectedKey(item.key)}
          className={`flex flex-row justify-between items-start gap-2 border-b border-gray-100 pb-2 last:border-0 cursor-pointer transition-all ${
            selectedKey === item.key ? 'opacity-100 font-semibold' : 'opacity-70 hover:opacity-100'
          }`}
        >
          <span className="text-xs md:text-sm lg:text-base text-gray-700 leading-snug">{item.name}</span>
          <span className="text-xs md:text-sm lg:text-base text-[#8900F2] font-medium italic whitespace-nowrap shrink-0 ml-2">{item.price}</span>
        </div>
      ))}

      <Link
        href={`/doctors/${doctorId}/book?procedure=${encodeURIComponent(selectedKey)}`}
        className="mt-2 w-full text-center bg-[#8900F2] hover:bg-[#7000cc] transition-colors text-white font-bold italic py-2 md:py-2.5 lg:py-3 rounded-xl text-sm md:text-base"
      >
        {t('bookBtn')}
      </Link>
    </div>
  )
}