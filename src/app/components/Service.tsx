interface Service {
  name: string
  price: string
}

interface Props {
  title: string
  services: Service[]
}

export default function ServicePrices({ title, services }: Props) {
  return (
    <div className="border-2 border-[#8900F2] rounded-2xl p-4 md:p-8 flex flex-col gap-3">
      <h3 className="text-xl md:text-2xl font-bold italic text-[#8900F2]">{title}</h3>
      <div className="flex justify-between text-gray-400 text-sm italic border-b border-gray-200 pb-2">
        <span>Serviciu</span>
        <span>Preț</span>
      </div>
      {services.map((item, i) => (
        <div key={i} className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 sm:gap-4 border-b border-gray-100 pb-3 last:border-0">
          <span className="text-sm md:text-base text-gray-700">{item.name}</span>
          <span className="text-sm md:text-base text-[#8900F2] font-medium italic sm:whitespace-nowrap">{item.price}</span>
        </div>
      ))}
      <button className="mt-2 w-full bg-[#8900F2] hover:bg-[#7000cc] transition-colors text-white font-bold italic py-2.5 md:py-3 rounded-xl text-sm md:text-base cursor-pointer">
        Programează-te
      </button>
    </div>
  )
}