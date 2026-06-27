'use client'

import { useState, useActionState } from 'react'
import { createAppointment } from '@/app/actions/appointment'
import BookingSelects from './BookingSelects'
import TimePicker from './TimePicker'

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
  const [date, setDate] = useState<string>('')
  const [time, setTime] = useState<string>('')
  const [doctorId, setDoctorId] = useState<number>(defaultDoctorId)
  const [procedure, setProcedure] = useState<string>('')
  const [state, formAction] = useActionState<{ error: string } | null, FormData>(createAppointment, null)

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
          <label className="text-sm font-medium text-gray-700">Nume complet</label>
          <input name="patientName" type="text" placeholder="Ion Popescu"
            className="w-full border border-[#8900F2]/40 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#8900F2]/30 focus:border-[#8900F2]" />
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-medium text-gray-700">Telefon</label>
          <input name="patientPhone" type="tel" placeholder="+373 69 123 456"
            className="w-full border border-[#8900F2]/40 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#8900F2]/30 focus:border-[#8900F2]" />
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-medium text-gray-700">Email</label>
          <input name="patientEmail" type="email" placeholder="ion@example.com"
            className="w-full border border-[#8900F2]/40 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#8900F2]/30 focus:border-[#8900F2]" />
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-medium text-gray-700">Mesaj <span className="text-gray-400 font-normal">(opțional)</span></label>
          <textarea name="message" placeholder="Descrieți pe scurt problema..." rows={3}
            className="w-full border border-[#8900F2]/40 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#8900F2]/30 focus:border-[#8900F2] resize-none" />
        </div>
      </div>

      <hr className="border-gray-100" />

      <div className="flex flex-col gap-3">
        <label className="flex gap-3 items-start cursor-pointer">
          <input type="checkbox" required className="mt-0.5 accent-[#8900F2] w-4 h-4 shrink-0" />
          <span className="text-xs text-gray-600 leading-relaxed">
            Sunt de acord cu <span className="text-[#8900F2] underline">politica de anulare</span> a clinicii.
          </span>
        </label>
        <label className="flex gap-3 items-start cursor-pointer">
          <input type="checkbox" required className="mt-0.5 accent-[#8900F2] w-4 h-4 shrink-0" />
          <span className="text-xs text-gray-600 leading-relaxed">
            Sunt de acord cu <span className="text-[#8900F2] underline">politica de confidențialitate</span>.
          </span>
        </label>
      </div>

      <button type="submit" className="w-full bg-[#8900F2] hover:bg-[#7a00d8] transition-colors text-white font-medium py-2.5 rounded-lg text-sm cursor-pointer">
        Trimite programarea
      </button>

    </form>
  )
}