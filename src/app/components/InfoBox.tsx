'use client'

import { ReactNode, useEffect, useRef, useState } from 'react'

interface InfoBoxProps {
  title: string
  value: number
  suffix?: string
  children: ReactNode
}

function InfoBox({ title, value, suffix = '', children }: InfoBoxProps) {
  const [count, setCount] = useState(0)
  const [started, setStarted] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting && !started) setStarted(true) },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [started])

  useEffect(() => {
    if (!started) return
    let start = 0
    const step = Math.ceil(value / (1500 / 16))
    const timer = setInterval(() => {
      start += step
      if (start >= value) { setCount(value); clearInterval(timer) }
      else setCount(start)
    }, 16)
    return () => clearInterval(timer)
  }, [started, value])

  return (
    <div ref={ref} className="bg-[#8900F2] text-white p-8 md:p-14 rounded-2xl flex flex-col justify-between gap-4 text-center relative min-h-[160px] md:min-h-[200px]">
      <div className="absolute top-4 right-6">
        <div className="w-8 h-8 md:w-12 md:h-12">{children}</div>
      </div>
      <h1 className="font-bold text-2xl md:text-4xl">{title}</h1>
      <p className="font-bold text-2xl md:text-3xl">{count.toLocaleString()}{suffix}</p>
    </div>
  )
}

export default InfoBox