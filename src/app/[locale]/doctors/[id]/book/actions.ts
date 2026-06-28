'use server'

import { prisma } from '@/lib/prisma'
import { redirect } from 'next/navigation'

export async function createAppointment(formData: FormData) {
  const doctorId = parseInt(formData.get('doctorId') as string)
  const procedure = formData.get('procedure') as string
  const date = formData.get('date') as string
  const time = formData.get('time') as string
  const patientName = formData.get('patientName') as string
  const patientPhone = formData.get('patientPhone') as string
  const patientEmail = formData.get('patientEmail') as string
  const message = formData.get('message') as string

  const dateTime = date && time ? new Date(`${date}T${time}:00`) : null

  await prisma.appointment.create({
    data: {
      doctorId,
      procedure,
      patientName,
      patientPhone,
      patientEmail,
      message: message || null,
      date: dateTime,
    }
  })

  redirect(`/doctors/${doctorId}`)
}