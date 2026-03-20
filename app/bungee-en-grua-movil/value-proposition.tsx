"use client"

import Image from "next/image"
import { AnimateOnScroll } from "@/components/animate-on-scroll"
import { ArrowDown, MapPin, Zap, Clock } from "lucide-react"

const features = [
  { icon: ArrowDown, text: "Caída libre real desde altura" },
  { icon: MapPin, text: "Adaptable a diferentes espacios" },
  { icon: Clock, text: "Instalación rápida y eficiente" },
]

export function ValueProposition() {
  return (
    <section id="propuesta" className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <AnimateOnScroll variant="fade-right" duration={900}>
            <div className="relative rounded-lg overflow-hidden aspect-[4/3]">
              <Image
                src="/images/jump-grua.jpg"
                alt="Bungee jumping móvil en evento"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
            </div>
          </AnimateOnScroll>

          <div>
            <AnimateOnScroll variant="fade-down" duration={600}>
              <p className="text-primary uppercase tracking-[0.3em] text-sm font-semibold mb-4">
                Propuesta de Valor
              </p>
            </AnimateOnScroll>
            <AnimateOnScroll variant="slide-up-rotate" duration={800} delay={100}>
              <h2 className="font-display text-5xl sm:text-7xl text-foreground tracking-wide mb-6">
                Bungee Jumping móvil para eventos en toda Colombia
              </h2>
            </AnimateOnScroll>
            <AnimateOnScroll variant="fade-up" delay={200}>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Nuestro sistema de bungee móvil permite instalar una experiencia de salto extremo en prácticamente cualquier lugar, utilizando una grúa telescópica y equipos profesionales certificados.
              </p>
            </AnimateOnScroll>
            <AnimateOnScroll variant="fade-up" delay={300}>
              <ul className="flex flex-col gap-4">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3 text-foreground">
                    <span className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <feature.icon className="w-5 h-5 text-primary" />
                    </span>
                    <span className="text-lg">{feature.text}</span>
                  </li>
                ))}
              </ul>
            </AnimateOnScroll>
          </div>
        </div>
      </div>
    </section>
  )
}
