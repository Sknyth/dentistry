'use client'

import { ChevronUp } from 'lucide-react'
import { useEffect, useState } from 'react'

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
		<a
      href="#header"
      className={`fixed bottom-8 right-8 z-50 bg-[#8900F2] text-white p-3 rounded-full shadow-lg hover:bg-[#7000cc] transition-all duration-300 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      <ChevronUp className="w-6 h-6" />
    </a>
  )
}

export default ScrollToTop