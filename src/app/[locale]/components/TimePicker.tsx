'use client'

import * as React from 'react'
import { format } from 'date-fns'
import { ChevronDownIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { useTranslations } from 'next-intl'

const generateTimeSlots = () => {
  const slots = []
  for (let h = 9; h <= 17; h++) {
    slots.push(`${String(h).padStart(2, '0')}:00`)
    if (h < 17) slots.push(`${String(h).padStart(2, '0')}:30`)
  }
  return slots
}

const ALL_SLOTS = generateTimeSlots()

interface Props {
  bookedSlots?: { date: string; time: string }[]
  onDateChange?: (date: string) => void
  onTimeChange?: (time: string) => void
}

export default function TimePicker({ bookedSlots = [], onDateChange, onTimeChange }: Props) {
  const t = useTranslations('booking')
  const [open, setOpen] = React.useState(false)
  const [date, setDate] = React.useState<Date | undefined>(undefined)
  const [time, setTime] = React.useState<string | undefined>(undefined)

  const today = new Date()
  const endOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0)

  const bookedDates = React.useMemo(() => {
    const dateMap: Record<string, number> = {}
    bookedSlots.forEach(({ date }) => {
      dateMap[date] = (dateMap[date] || 0) + 1
    })
    return Object.entries(dateMap)
      .filter(([, count]) => count >= ALL_SLOTS.length)
      .map(([date]) => new Date(date))
  }, [bookedSlots])

  const bookedTimesForDate = React.useMemo(() => {
    if (!date) return []
    const dateStr = format(date, 'yyyy-MM-dd')
    return bookedSlots.filter(s => s.date === dateStr).map(s => s.time)
  }, [date, bookedSlots])

  const availableSlots = ALL_SLOTS.filter(t => !bookedTimesForDate.includes(t))

  const handleDateSelect = (selected: Date | undefined) => {
    setDate(selected)
    setTime(undefined)
    setOpen(false)
    onDateChange?.(selected ? format(selected, 'yyyy-MM-dd') : '')
    onTimeChange?.('')
  }

  const handleTimeChange = (value: string) => {
    setTime(value)
    onTimeChange?.(value)
  }

  return (
    <div className="flex flex-row gap-4 w-full">
      <div className="flex flex-col gap-1.5 flex-1">
        <label htmlFor="date-picker" className="text-sm font-medium text-gray-700">{t('date')}</label>
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button variant="outline" id="date-picker"
              className="w-full justify-between font-normal border-[#8900F2]/40 hover:border-[#8900F2]">
              {date ? format(date, 'dd.MM.yyyy') : t('chooseDate')}
              <ChevronDownIcon />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto overflow-hidden p-0" align="start">
            <Calendar
              mode="single"
              selected={date}
              captionLayout="dropdown"
              defaultMonth={today}
              disabled={[{ before: today }, { after: endOfMonth }, ...bookedDates]}
              onSelect={handleDateSelect}
            />
          </PopoverContent>
        </Popover>
      </div>

      <div className="flex flex-col gap-1.5 flex-1">
        <label htmlFor="time-picker" className="text-sm font-medium text-gray-700">{t('time')}</label>
        <Select disabled={!date} value={time} onValueChange={handleTimeChange}>
          <SelectTrigger id="time-picker" className="w-full border-[#8900F2]/40 hover:border-[#8900F2]">
            <SelectValue placeholder={date ? t('chooseTime') : t('chooseDateFirst')} />
          </SelectTrigger>
          <SelectContent>
            {availableSlots.length === 0 ? (
              <p className="px-4 py-2 text-sm text-muted-foreground">{t('noSlots')}</p>
            ) : (
              availableSlots.map(slot => (
                <SelectItem key={slot} value={slot}>{slot}</SelectItem>
              ))
            )}
          </SelectContent>
        </Select>
      </div>
    </div>
  )
}