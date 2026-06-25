import { prisma } from '@/lib/prisma'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

export default async function DoctorPage({ params }: { params: Promise<{ id: string }> }) {
  const { id: rawId } = await params
  const id = parseInt(rawId)

  if (isNaN(id)) return notFound()

  const doctor = await prisma.doctor.findUnique({
    where: { id }
  })

  if (!doctor) return notFound()

  return (
    <main className="min-h-screen px-4 py-8 md:px-24 md:py-16 flex flex-col gap-8 max-w-5xl mx-auto">

      <section className="flex flex-col gap-4">
        <div className="flex flex-col gap-1 md:flex-row md:items-center md:gap-4">
          <h1 className="text-3xl md:text-4xl font-bold italic text-gray-900">{doctor.name}</h1>
          <p className="text-gray-500 text-sm md:text-lg">{doctor.desc}</p>
        </div>

        <div className="bg-gray-100 rounded-2xl sm:rounded-3xl overflow-hidden flex justify-center items-center w-full sm:w-[400px] sm:mx-auto relative aspect-[3/4] sm:aspect-[4/5]">
					<Image
						src={doctor.image}
						alt={doctor.name}
						fill
						className="object-contain object-top"
					/>
				</div>

        {doctor.bio && (
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">{doctor.bio}</p>
        )}
      </section>

      {doctor.procedures.length > 0 && (
        <section className="flex flex-col gap-3">
          <h2 className="text-xl md:text-3xl font-bold text-[#8900F2]">De ce proceduri se ocupă în cadrul clinicii?</h2>
          <div className="bg-[#8900F2] p-6 md:p-16 rounded-2xl w-full">
            <ul className="list-disc list-inside text-white text-sm md:text-lg flex flex-col gap-2">
              {doctor.procedures.map((p, i) => (
                <li key={i}>{p}</li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <section className="flex flex-col gap-4 items-center justify-center border-2 border-[#8900F2] p-8 md:p-28 rounded-2xl w-full">
        <h2 className="text-2xl md:text-4xl text-[#8900F2] font-bold text-center">Vrei o schimbare?</h2>
        <Link href="#" className="bg-[#8900F2] text-white font-semibold text-base md:text-lg px-6 md:px-8 py-3 md:py-4 rounded-2xl hover:bg-[#7000cc] transition-colors w-fit">
          Programează-te
        </Link>
      </section>

    </main>
  )
}