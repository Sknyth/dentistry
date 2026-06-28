'use client'

import { useRouter, usePathname } from 'next/navigation'
import { Globe } from 'lucide-react'

export default function LangSwitcher() {
  const router = useRouter()
  const pathname = usePathname()

  const changeLocale = (locale: string) => {
    const segments = pathname.split('/')
    segments[1] = locale
    router.push(segments.join('/'))
  }

  return (
    <div className="flex items-center gap-2">
      <Globe width={20} height={20} />
      <select
        onChange={(e) => changeLocale(e.target.value)}
        defaultValue={pathname.split('/')[1]}
        className="bg-transparent text-white font-semibold focus:outline-none cursor-pointer text-sm"
      >
        <option value="ro">Română</option>
        <option value="ru">Русский</option>
        <option value="en">English</option>
      </select>
    </div>
  )
}