'use client'

import { Sheet, SheetClose, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Menu } from 'lucide-react'

const links = [
  { href: '/#echipa', label: 'Echipa' },
  { href: '/#servicii', label: 'Servicii' },
  { href: '/#avantaje', label: 'Avantaje' },
  { href: '/#map', label: 'Hartă' },
  { href: '/#consultatie', label: 'Consultație' },
  { href: '/#', label: 'Prețuri' },
  { href: '/#', label: 'Contact' },
]

const BurgerMenu = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="cursor-pointer p-2 rounded-md hover:bg-[#2A3ED8] transition-colors">
          <Menu className="w-8 h-8 text-white" />
        </button>
      </SheetTrigger>
      <SheetContent
        side="left"
        className="bg-[#2563EB] text-white border-none"
        onCloseAutoFocus={(e) => e.preventDefault()}
      >
        <p className="text-2xl font-bold px-4 mt-2">Dentistry</p>
        <nav className="flex flex-col mt-8 px-2">
          {links.map(({ href, label }) => (
            <SheetClose asChild key={href}>
              <a
                href={href}
                className="text-lg font-medium px-4 py-3 rounded-xl hover:bg-white/10 transition-colors"
              >
                {label}
              </a>
            </SheetClose>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  )
}

export default BurgerMenu