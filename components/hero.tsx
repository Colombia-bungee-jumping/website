"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"
import { StatCounter } from "@/components/stat-counter"
import { AnimateOnScroll } from "@/components/animate-on-scroll"

export function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/images/hero-bungee.jpg"
          alt="Persona saltando en bungee jumping sobre un canon al atardecer"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center pt-20">
        <AnimateOnScroll variant="fade-down" duration={600}>
          <p className="text-primary uppercase tracking-[0.3em] text-sm font-semibold mb-4">
            Deportes Extremos
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll variant="zoom-in" duration={900} delay={200}>
          <h1 className="font-display text-6xl sm:text-8xl lg:text-9xl text-foreground leading-none tracking-wide text-balance">
            SALTA AL
            <br />
            <span className="text-primary">VACIO</span>
          </h1>
        </AnimateOnScroll>

        <AnimateOnScroll variant="fade-up" delay={500} duration={700}>
          <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Experimenta la descarga de adrenalina mas pura. Saltos desde las ubicaciones mas espectaculares del mundo con la maxima seguridad.
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll variant="fade-up" delay={700} duration={700}>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-10 py-6 font-semibold uppercase tracking-wider">
              <a href="#reservar">Reserva Tu Salto</a>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-foreground/20 text-foreground hover:bg-foreground/5 text-lg px-10 py-6 uppercase tracking-wider">
              <a href="#experiencias">Ver Experiencias</a>
            </Button>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll variant="fade-up" delay={900} duration={800}>
          <div className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-3xl mx-auto">
            <StatCounter end={15} suffix="K+" label="Saltos realizados" duration={2000} />
            <StatCounter end={100} suffix="%" label="Seguridad" duration={2500} />
            <StatCounter end={12} label="Ubicaciones" duration={1800} />
            <StatCounter end={4.9} decimals={1} label="Valoracion" duration={2200} />
          </div>
        </AnimateOnScroll>
      </div>

      <a
        href="#experiencias"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce text-muted-foreground hover:text-foreground transition-colors"
        aria-label="Ver mas contenido"
      >
        <ArrowDown className="h-6 w-6" />
      </a>
    </section>
  )
}
