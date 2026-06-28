import { prisma } from '@/lib/prisma'
import { notFound } from 'next/navigation'
import BookingForm from '@/app/[locale]/components/BookingForm'
import { getTranslations } from 'next-intl/server'

export default async function page({ params }: { params: Promise<{ id: string }> }) {
  const { id: rawId } = await params
  const id = parseInt(rawId)

  if (isNaN(id)) return notFound()

  const doctor = await prisma.doctor.findUnique({ where: { id } })
  if (!doctor) return notFound()

  const doctors = await prisma.doctor.findMany({
    select: { id: true, name: true, procedures: true }
  })

  const appointments = await prisma.appointment.findMany({
    where: { doctorId: id, status: { not: 'cancelled' } },
    select: { date: true }
  })

  const bookedSlots = appointments
    .filter(a => a.date)
    .map(a => ({
      date: a.date!.toISOString().slice(0, 10),
      time: new Date(a.date!.getTime() + 3 * 60 * 60 * 1000).toISOString().slice(11, 16)
    }))

  const t = await getTranslations('booking')

  return (
    <main className="min-h-screen px-4 py-8 md:px-16 md:py-12 flex flex-col gap-6 max-w-2xl mx-auto w-full">

      <div>
        <h1 className="text-2xl font-semibold text-gray-900">{t('title')}</h1>
        <p className="text-sm text-gray-500 mt-1">{t('desc')}</p>
      </div>

      <div className="flex flex-col gap-5 bg-white border border-[#8900F2]/20 rounded-2xl p-6 shadow-sm">
        <BookingForm doctors={doctors} defaultDoctorId={id} bookedSlots={bookedSlots} />
      </div>

    </main>
  )
}