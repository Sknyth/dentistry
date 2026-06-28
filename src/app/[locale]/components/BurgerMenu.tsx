'use client'

import { Sheet, SheetClose, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Menu } from 'lucide-react'
import { useTranslations } from 'next-intl'
import LangSwitcher from './LangSwitcher'

interface Props {
  showLang?: boolean
}

export default function BurgerMenu({ showLang = false }: Props) {
  const t = useTranslations('burger')

  const links = [
    { href: '/#echipa', label: t('echipa') },
    { href: '/#servicii', label: t('servicii') },
    { href: '/#avantaje', label: t('avantaje') },
    { href: '/#map', label: t('harta') },
    { href: '/#consultatie', label: t('consultatie') },
    { href: '/services', label: t('preturi') },
    { href: '/#footer', label: t('contact') },
  ]

  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="cursor-pointer rounded-md hover:bg-[#2A3ED8] transition-colors">
          <Menu className="w-8 h-8 text-white" />
        </button>
      </SheetTrigger>
      <SheetContent
        side="left"
        className="bg-[#2563EB] text-white border-none"
        onCloseAutoFocus={(e) => e.preventDefault()}
      >
        <div className="flex items-center justify-between px-4 mt-10">
          <p className="text-2xl font-bold">Dentistry</p>
          {showLang && <LangSwitcher />}
        </div>
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