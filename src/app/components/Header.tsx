import { Clock, Globe, Phone } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import BurgerMenu from './BurgerMenu'

const Header = () => {
  return (
    <header id="header" className="text-white px-8 md:px-16 py-4 relative overflow-visible">

      <div className="flex flex-col items-center gap-4 sm:hidden">
        <Link href="/">
          <Image src="/logo3.png" alt="Logo" width={200} height={120} />
        </Link>
        <BurgerMenu />
      </div>

      <div className="hidden sm:flex items-center justify-between">
        <div className="flex items-center shrink-0">
          <Link href="/"><Image src="/logo3.png" alt="Logo" width={200} height={120} /></Link>
        </div>

        <div className="flex gap-3 items-center">
          <Clock width={36} height={36} />
          <div className="flex flex-col font-semibold text-center text-sm">
            <span>MON - FRI</span>
            <hr />
            <span className="opacity-70">9:00 AM - 5:00 PM</span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <Globe width={20} height={20} />
            <select className="bg-transparent text-white font-semibold focus:outline-none cursor-pointer text-sm">
              <option value="ro">Română</option>
              <option value="ru">Русский</option>
              <option value="en">English</option>
            </select>
          </div>
          <hr className="hidden md:block border-white border-l-2 h-6" />
          <BurgerMenu />
        </div>
      </div>

      <a
        href="tel:+37369123456"
        className="hidden sm:flex absolute right-8 -bottom-7 items-center gap-3 rounded-full bg-[#8900F2] px-6 py-3 text-lg font-medium text-white shadow-lg transition-colors hover:bg-[#8900d8] whitespace-nowrap z-10"
      >
        <Phone width={24} height={24} />
        +373 69 123 456
      </a>
    </header>
  )
}

export default Header