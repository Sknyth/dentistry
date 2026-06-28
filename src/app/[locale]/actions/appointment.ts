'use server'

import { prisma } from '@/lib/prisma'
import { redirect } from 'next/navigation'

export async function createAppointment(
  prevState: { error: string } | null,
  formData: FormData
): Promise<{ error: string } | null> {
  const doctorId = parseInt(formData.get('doctorId') as string)
  const date = formData.get('date') as string
  const time = formData.get('time') as string
  const dateTime = date && time ? new Date(`${date}T${time}:00+03:00`) : null

  if (dateTime) {
    const existing = await prisma.appointment.findFirst({
      where: { doctorId, date: dateTime, status: { not: 'cancelled' } }
    })
    if (existing) return { error: 'Acest slot este deja ocupat. Alegeți altă oră.' }
  }

  const patientName = formData.get('patientName') as string
  const patientPhone = formData.get('patientPhone') as string
  const patientEmail = formData.get('patientEmail') as string
  const procedure = formData.get('procedure') as string
  const message = formData.get('message') as string

  await prisma.appointment.create({
    data: { doctorId, procedure, patientName, patientPhone, patientEmail, message: message || null, date: dateTime }
  })

  redirect(`/doctors/${doctorId}`)
}