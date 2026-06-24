import Image from 'next/image'

interface DoctorProps {
  name: string
  desc: string
  image: string
}

export default function DoctorS1({ name, desc, image }: DoctorProps) {
  return (
    <div className="bg-white rounded-3xl p-10 flex items-center justify-between gap-8 relative overflow-hidden">
      <div className="flex flex-col gap-4 z-10">
        <h1 className="text-3xl font-bold italic text-gray-900">{name}</h1>
        <p className="text-gray-500 text-lg">{desc}</p>
        <button className="mt-4 bg-[#8900F2] text-white font-semibold text-lg px-8 py-4 rounded-2xl hover:bg-[#7000cc] transition-colors cursor-pointer w-fit">
          Informează-te
        </button>
      </div>
      <div className="shrink-0">
        <Image
          src={image}
          alt={name}
          width={300}
          height={400}
          className="rounded-2xl object-cover h-[400px] w-[300px]"
        />
      </div>
    </div>
  )
}