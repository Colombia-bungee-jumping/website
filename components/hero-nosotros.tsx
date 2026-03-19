"use client"

import { useEffect, useRef, useState } from "react"
import { AnimateOnScroll } from "@/components/animate-on-scroll"

interface HeroProps {
  title: string
  subtitle: string
  badge?: string
}

export function Hero({ title, subtitle, badge }: HeroProps) {
  const [scrollY, setScrollY] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect()
        if (rect.bottom > 0 && rect.top < window.innerHeight) {
          setScrollY(window.scrollY)
        }
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section
      ref={sectionRef}
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0">
        <img
          src="/images/safety-team.jpg"
          alt="Equipo VertexDrop"
          className="w-full h-full object-cover"
          style={{ transform: `translateY(${scrollY * 0.2}px) scale(1.1)` }}
        />
        <div className="absolute inset-0 bg-background/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center pt-10">
        {badge && (
          <AnimateOnScroll variant="fade-down" duration={600}>
            <p className="text-primary uppercase tracking-[0.2em] text-sm font-semibold mb-6">
              {badge}
            </p>
          </AnimateOnScroll>
        )}
        <AnimateOnScroll variant="slide-up-rotate" duration={800} delay={100}>
          <h1 className="font-display text-6xl sm:text-8xl md:text-9xl text-foreground tracking-wide mb-6">
            {title}
          </h1>
        </AnimateOnScroll>
        <AnimateOnScroll variant="fade-up" delay={250}>
          <p className="text-xl sm:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </AnimateOnScroll>
      </div>
    </section>
  )
}
