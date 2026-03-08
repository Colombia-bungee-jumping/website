"use client"

import { useRef, useCallback, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"
import { AnimateOnScroll } from "@/components/animate-on-scroll"
import { testimonials } from "@/config/testimonials"

export function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    setIsDragging(true)
    setStartX(e.pageX - (scrollRef.current?.offsetLeft || 0))
    setScrollLeft(scrollRef.current?.scrollLeft || 0)
  }, [])

  const handleMouseLeave = useCallback(() => {
    setIsDragging(false)
  }, [])

  const handleMouseUp = useCallback(() => {
    setIsDragging(false)
  }, [])

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDragging) return
    e.preventDefault()
    const x = e.pageX - (scrollRef.current?.offsetLeft || 0)
    const walk = (x - startX) * 2
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = scrollLeft - walk
    }
  }, [isDragging, startX, scrollLeft])

  return (
    <section id="testimonios" className="py-24 bg-background">
      <div className="mx-auto max-w-full px-0">
        <div className="text-center mb-16 px-4">
          <AnimateOnScroll variant="fade-down" duration={600}>
            <p className="text-primary uppercase tracking-[0.3em] text-sm font-semibold mb-4">
              Testimonios
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll variant="slide-up-rotate" duration={800} delay={100}>
            <h2 className="font-display text-5xl sm:text-7xl text-foreground tracking-wide">
              LO QUE DICEN
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll variant="fade-up" delay={250}>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto leading-relaxed">
              Miles de aventureros ya vivieron la experiencia. Estas son sus historias.
            </p>
          </AnimateOnScroll>
        </div>

        <AnimateOnScroll variant="fade-up" delay={350}>
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto pb-4 cursor-grab active:cursor-grabbing select-none px-4 lg:px-12"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
          >
            {testimonials.map((testimonial) => (
              <Card
                key={testimonial.id}
                className="bg-card border border-border/50 hover:border-primary/50 transition-all duration-300 shrink-0 w-[320px] sm:w-[360px] h-[320px] group flex flex-col"
              >
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex gap-1">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} className="h-6 w-6 fill-accent text-accent" />
                      ))}
                    </div>
                    <Quote className="h-6 w-6 text-primary/30 group-hover:text-primary/60 transition-colors" />
                  </div>
                  <p className="text-muted-foreground text-base leading-relaxed mb-6 flex-grow">
                    {testimonial.text}
                  </p>
                  <div className="flex items-center gap-4 pt-4 border-t border-border/50 mt-auto">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="h-12 w-12 rounded-full object-cover flex-shrink-0 shadow-lg"
                    />
                    <div className="flex items-center gap-2">
                      <p className="text-foreground font-semibold">{testimonial.name}</p>
                      <img
                        src={`https://flagcdn.com/w80/${testimonial.countryCode}.png`}
                        alt="flag"
                        className="w-5 h-5 rounded-full"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  )
}
