"use client"

import { useCounter } from "@/hooks/use-counter"

interface StatCounterProps {
  end: number
  suffix?: string
  prefix?: string
  decimals?: number
  label: string
  duration?: number
}

export function StatCounter({ end, suffix = "", prefix = "", decimals = 0, label, duration = 2000 }: StatCounterProps) {
  const { count, ref } = useCounter({ end, duration, decimals })

  return (
    <div ref={ref} className="text-center">
      <p className="font-display text-4xl sm:text-5xl text-primary tabular-nums">
        {prefix}
        {decimals > 0 ? count.toFixed(decimals) : count.toLocaleString()}
        {suffix}
      </p>
      <p className="text-xs sm:text-sm text-muted-foreground mt-1 uppercase tracking-wide">
        {label}
      </p>
    </div>
  )
}
