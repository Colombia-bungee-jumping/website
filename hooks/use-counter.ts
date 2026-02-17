"use client"

import { useEffect, useRef, useState } from "react"

interface UseCounterOptions {
  end: number
  duration?: number
  decimals?: number
  startOnView?: boolean
}

export function useCounter({ end, duration = 2000, decimals = 0, startOnView = true }: UseCounterOptions) {
  const [count, setCount] = useState(0)
  const [hasStarted, setHasStarted] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!startOnView) {
      setHasStarted(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true)
        }
      },
      { threshold: 0.3 }
    )

    const el = ref.current
    if (el) observer.observe(el)

    return () => {
      if (el) observer.unobserve(el)
    }
  }, [hasStarted, startOnView])

  useEffect(() => {
    if (!hasStarted) return

    let startTime: number | null = null
    let animationFrame: number

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)

      // Ease out cubic for a satisfying deceleration
      const eased = 1 - Math.pow(1 - progress, 3)
      const current = eased * end

      setCount(Number(current.toFixed(decimals)))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(animationFrame)
  }, [hasStarted, end, duration, decimals])

  return { count, ref }
}
