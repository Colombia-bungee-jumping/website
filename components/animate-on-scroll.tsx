"use client"

import { useRef, useEffect, useState, type ReactNode } from "react"

type AnimationVariant =
  | "fade-up"
  | "fade-down"
  | "fade-left"
  | "fade-right"
  | "zoom-in"
  | "blur-in"
  | "slide-up-rotate"

interface AnimateOnScrollProps {
  children: ReactNode
  variant?: AnimationVariant
  delay?: number
  duration?: number
  className?: string
  threshold?: number
  once?: boolean
}

const variantStyles: Record<AnimationVariant, { hidden: string; visible: string }> = {
  "fade-up": {
    hidden: "opacity-0 translate-y-12",
    visible: "opacity-100 translate-y-0",
  },
  "fade-down": {
    hidden: "opacity-0 -translate-y-12",
    visible: "opacity-100 translate-y-0",
  },
  "fade-left": {
    hidden: "opacity-0 translate-x-16",
    visible: "opacity-100 translate-x-0",
  },
  "fade-right": {
    hidden: "opacity-0 -translate-x-16",
    visible: "opacity-100 translate-x-0",
  },
  "zoom-in": {
    hidden: "opacity-0 scale-90",
    visible: "opacity-100 scale-100",
  },
  "blur-in": {
    hidden: "opacity-0 blur-sm",
    visible: "opacity-100 blur-0",
  },
  "slide-up-rotate": {
    hidden: "opacity-0 translate-y-16 rotate-2",
    visible: "opacity-100 translate-y-0 rotate-0",
  },
}

export function AnimateOnScroll({
  children,
  variant = "fade-up",
  delay = 0,
  duration = 700,
  className = "",
  threshold = 0.15,
  once = true,
}: AnimateOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (once) observer.unobserve(el)
        } else if (!once) {
          setIsVisible(false)
        }
      },
      { threshold }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold, once])

  const { hidden, visible } = variantStyles[variant]

  return (
    <div
      ref={ref}
      className={`transition-all ${isVisible ? visible : hidden} ${className}`}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
        transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
      }}
    >
      {children}
    </div>
  )
}
