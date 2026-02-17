"use client"

import Image from "next/image"
import { AnimateOnScroll } from "@/components/animate-on-scroll"

export function About() {
  return (
    <section id="nosotros" className="py-24 bg-secondary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <AnimateOnScroll variant="fade-right" duration={900}>
            <div className="relative rounded-lg overflow-hidden aspect-[4/3]">
              <Image
                src="/images/safety-team.jpg"
                alt="Equipo profesional de VertexDrop preparando equipo de seguridad"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
            </div>
          </AnimateOnScroll>

          {/* Content */}
          <div>
            <AnimateOnScroll variant="fade-down" duration={600}>
              <p className="text-primary uppercase tracking-[0.3em] text-sm font-semibold mb-4">
                Nosotros
              </p>
            </AnimateOnScroll>
            <AnimateOnScroll variant="slide-up-rotate" duration={800} delay={100}>
              <h2 className="font-display text-5xl sm:text-7xl text-foreground tracking-wide mb-6">
                QUIENES SOMOS
              </h2>
            </AnimateOnScroll>
            <AnimateOnScroll variant="fade-up" delay={200}>
              <div className="flex flex-col gap-4 text-muted-foreground leading-relaxed">
                <p>
                  VertexDrop nacio en 2015 con una mision clara: ofrecer la experiencia de bungee jumping mas segura e intensa del mundo. Desde entonces, hemos acompanado a mas de 15,000 aventureros en su salto al vacio.
                </p>
                <p>
                  Nuestro equipo esta formado por instructores certificados internacionalmente, con mas de 10 anos de experiencia en deportes extremos. Cada salto se realiza con equipos de ultima generacion y protocolos de seguridad que superan los estandares europeos.
                </p>
                <p>
                  Operamos en 3 paises con 12 ubicaciones estrategicamente seleccionadas por su belleza paisajistica y condiciones optimas para el salto. Porque en VertexDrop creemos que la adrenalina y la seguridad no estan renidas.
                </p>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll variant="fade-up" delay={400}>
              <div className="mt-8 grid grid-cols-3 gap-6">
                <div className="text-center">
                  <p className="font-display text-4xl text-primary">10+</p>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mt-1">Anos de experiencia</p>
                </div>
                <div className="text-center">
                  <p className="font-display text-4xl text-primary">50+</p>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mt-1">Instructores</p>
                </div>
                <div className="text-center">
                  <p className="font-display text-4xl text-primary">3</p>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mt-1">Paises</p>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </div>
    </section>
  )
}
