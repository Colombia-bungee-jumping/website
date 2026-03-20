"use client"

import { AnimateOnScroll } from "@/components/animate-on-scroll"
import { ArrowUp, Maximize2, Clock } from "lucide-react"

const specs = [
  { icon: ArrowUp, label: "Altura", value: "hasta 50 metros" },
  { icon: Maximize2, label: "Espacio", value: "30 x 30 metros" },
  { icon: Clock, label: "Instalación", value: "2 horas" },
]

export function TechnicalSpecs() {
  return (
    <section id="especificaciones" className="py-24 bg-secondary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <AnimateOnScroll variant="fade-down" duration={600}>
            <p className="text-primary uppercase tracking-[0.3em] text-sm font-semibold mb-4">
              Ficha Técnica
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll variant="slide-up-rotate" duration={800} delay={100}>
            <h2 className="font-display text-5xl sm:text-7xl text-foreground tracking-wide">
              Especificaciones del bungee móvil
            </h2>
          </AnimateOnScroll>
        </div>
        <AnimateOnScroll variant="fade-up" delay={200}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {specs.map((spec, index) => (
              <div
                key={index}
                className="bg-background p-8 rounded-xl text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <spec.icon className="w-8 h-8 text-primary" />
                </div>
                <p className="text-primary uppercase tracking-wider text-sm font-semibold mb-2">
                  {spec.label}
                </p>
                <p className="font-display text-3xl text-foreground">
                  {spec.value}
                </p>
              </div>
            ))}
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  )
}
