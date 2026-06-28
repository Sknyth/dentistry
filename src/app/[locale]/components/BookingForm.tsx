'use client'

import { useState, useActionState } from 'react'
import { createAppointment } from '@/app/[locale]/actions/appointment'
import BookingSelects from './BookingSelects'
import TimePicker from './TimePicker'
import { useSearchParams } from 'next/navigation'
import { useTranslations } from 'next-intl'

interface Doctor {
  id: number
  name: string
  procedures: string[]
}

interface Props {
  doctors: Doctor[]
  defaultDoctorId: number
  bookedSlots: { date: string; time: string }[]
}

export default function BookingForm({ doctors, defaultDoctorId, bookedSlots }: Props) {
  const t = useTranslations('booking')
  const [date, setDate] = useState<string>('')
  const [time, setTime] = useState<string>('')
  const [doctorId, setDoctorId] = useState<number>(defaultDoctorId)
  const [state, formAction] = useActionState<{ error: string } | null, FormData>(createAppointment, null)

  const searchParams = useSearchParams()
  const defaultProcedure = searchParams.get('procedure') || ''

  const [procedure, setProcedure] = useState<string>(defaultProcedure)

  return (
    <form action={formAction} className="flex flex-col gap-5 w-full">

      {state?.error && (
        <p className="text-red-500 text-sm bg-red-50 border border-red-200 rounded-lg px-3 py-2">
          {state.error}
        </p>
      )}

      <input type="hidden" name="doctorId" value={doctorId} />
      <input type="hidden" name="date" value={date} />
      <input type="hidden" name="time" value={time} />
      <input type="hidden" name="procedure" value={procedure} />

      <BookingSelects
        doctors={doctors}
        defaultDoctorId={defaultDoctorId}
        defaultProcedure={defaultProcedure}
        onDoctorChange={setDoctorId}
        onProcedureChange={setProcedure}
      />

      <hr className="border-gray-100" />

      <TimePicker
        bookedSlots={bookedSlots}
        onDateChange={setDate}
        onTimeChange={setTime}
      />

      <hr className="border-gray-100" />

      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-medium text-gray-700">{t('name')}</label>
          <input name="patientName" type="text" placeholder="Ion Popescu"
            className="w-full border border-[#8900F2]/40 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#8900F2]/30 focus:border-[#8900F2]" />
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-medium text-gray-700">{t('phone')}</label>
          <input name="patientPhone" type="tel" placeholder="+373 69 123 456"
            className="w-full border border-[#8900F2]/40 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#8900F2]/30 focus:border-[#8900F2]" />
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-medium text-gray-700">{t('email')}</label>
          <input name="patientEmail" type="email" placeholder="ion@example.com"
            className="w-full border border-[#8900F2]/40 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#8900F2]/30 focus:border-[#8900F2]" />
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-medium text-gray-700">
            {t('message')} <span className="text-gray-400 font-normal">{t('messageOptional')}</span>
          </label>
          <textarea name="message" placeholder={t('messagePlaceholder')} rows={3}
            className="w-full border border-[#8900F2]/40 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#8900F2]/30 focus:border-[#8900F2] resize-none" />
        </div>
      </div>

      <hr className="border-gray-100" />

      <div className="flex flex-col gap-3">
        <label className="flex gap-3 items-start cursor-pointer">
          <input type="checkbox" required className="mt-0.5 accent-[#8900F2] w-4 h-4 shrink-0" />
          <span className="text-xs text-gray-600 leading-relaxed">{t('policy1')}</span>
        </label>
        <label className="flex gap-3 items-start cursor-pointer">
          <input type="checkbox" required className="mt-0.5 accent-[#8900F2] w-4 h-4 shrink-0" />
          <span className="text-xs text-gray-600 leading-relaxed">{t('policy2')}</span>
        </label>
      </div>

      <button type="submit" className="w-full bg-[#8900F2] hover:bg-[#7a00d8] transition-colors text-white font-medium py-2.5 rounded-lg text-sm cursor-pointer">
        {t('btn')}
      </button>

    </form>
  )
}