import { Clock, Globe, Phone } from 'lucide-react'
import Image from 'next/image'
import BurgerMenu from './BurgerMenu'
import Link from 'next/link'

const Header = () => {
  return (
    <header id="header" className="@container text-white p-4 justify-between shrink-0 flex items-center gap-5 relative">
      <div className="flex-1 items-center justify-between">
        <Link href="/"><Image src="/logo.png" alt="Logo" width={280} height={200} /></Link>
      </div>

			<div className="clock flex-1 flex gap-3 items-center justify-center">
				<Clock width={40} height={40} />
				<div className="flex flex-col font-semibold text-center">
					<span>MON - FRI</span>
					<hr />
					<span className="opacity-70">9:00 AM - 5:00 PM</span>
				</div>
			</div>

			<div className="location flex-1 flex gap-2 items-center justify-center">
        <div className="flex items-center gap-2">
          <Globe width={20} height={20} />
          <select className="bg-transparent text-white text-lg font-semibold focus:outline-none cursor-pointer">
            <option value="Chisinau">Română</option>
            <option value="Moscow">Русский</option>
            <option value="English">English</option>
          </select>
        </div>

        <hr className="border-white border-l-2 h-6 mx-2" />
        <div className="flex items-center gap-2">
          <BurgerMenu />
        </div>
        <a
        href="tel:+37369123456"
        className="absolute right-30 -bottom-8 flex items-center gap-3 rounded-full bg-[#8900F2] px-8 py-4 text-xl font-medium text-white shadow-lg transition-colors hover:bg-[#8900d8] whitespace-nowrap"
      >
        <Phone width={28} height={28} />
        +373 69 123 456
      </a>
      </div>
    </header>
  )
}

export default Header