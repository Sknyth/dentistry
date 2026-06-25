import DoctorS1 from '../components/DoctorS1'
import DoctorS2 from '../components/DoctorS2'
import { prisma } from '@/lib/prisma'
import { Doctor } from '@/generated/prisma/client'

export const dynamic = 'force-dynamic'

export default async function page() {
  const doctors = await prisma.doctor.findMany()

  return (
    <main className="min-h-screen px-4 py-12 md:p-20 flex flex-col gap-8">
      <div className="max-w-6xl mx-auto w-full">
        <h1 className="text-2xl md:text-3xl text-[#8900F2] font-bold">Echipa</h1>
      </div>

      <section className="gap-8 flex flex-col max-w-6xl mx-auto bg-[#8900F2] p-6 md:p-20 rounded-2xl shadow-lg w-full">
        {doctors.map((doctor: Doctor, index: number) =>
          index % 2 === 0
            ? <DoctorS1 key={doctor.id} id={doctor.id} name={doctor.name} desc={doctor.desc} image={doctor.image} />
            : <DoctorS2 key={doctor.id} id={doctor.id} name={doctor.name} desc={doctor.desc} image={doctor.image} />
        )}
      </section>
    </main>
  )
}