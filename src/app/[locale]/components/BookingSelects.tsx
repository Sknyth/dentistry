'use client'

import { useState } from 'react'
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from '@/components/ui/select'
import { useTranslations } from 'next-intl'
import { useLocale } from 'next-intl'
import { translateProcedure } from '@/lib/procedureTranslations'

interface Doctor {
  id: number
  name: string
  procedures: string[]
}

interface Props {
  doctors: Doctor[]
  defaultDoctorId: number
  onDoctorChange?: (id: number) => void
  onProcedureChange?: (procedure: string) => void
  defaultProcedure?: string
}

export default function BookingSelects({ doctors, defaultDoctorId, defaultProcedure, onDoctorChange, onProcedureChange }: Props) {
  const t = useTranslations('booking')
  const locale = useLocale()
  const [selectedDoctorId, setSelectedDoctorId] = useState(String(defaultDoctorId))

  const selectedDoctor = doctors.find(d => d.id === parseInt(selectedDoctorId))

  const handleDoctorChange = (value: string) => {
    setSelectedDoctorId(value)
    onDoctorChange?.(parseInt(value))
    onProcedureChange?.('')
  }

  return (
    <>
      <div className="flex flex-col gap-1.5">
        <label className="text-sm font-medium text-gray-700">{t('doctor')}</label>
        <Select value={selectedDoctorId} onValueChange={handleDoctorChange}>
          <SelectTrigger className="w-full border-[#8900F2]/40 hover:border-[#8900F2]">
            <SelectValue placeholder={t('doctor')} />
          </SelectTrigger>
          <SelectContent>
            {doctors.map(doc => (
              <SelectItem key={doc.id} value={String(doc.id)}>
                {doc.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="text-sm font-medium text-gray-700">{t('procedure')}</label>
        <Select defaultValue={defaultProcedure} onValueChange={(val) => onProcedureChange?.(val)}>
          <SelectTrigger className="w-full border-[#8900F2]/40 hover:border-[#8900F2] overflow-hidden h-10">
            <SelectValue placeholder={t('procedure')} />
          </SelectTrigger>
          <SelectContent>
            {selectedDoctor?.procedures.map((pr, index) => (
              <SelectItem key={index} value={pr}>
                {translateProcedure(pr, locale)}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </>
  )
}