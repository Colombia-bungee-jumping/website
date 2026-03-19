"use client"

import { Target, Eye } from "lucide-react"
import { AnimateOnScroll } from "@/components/animate-on-scroll"

const mission = {
  title: "MISIÓN",
  description:
    "Proporcionar experiencias de bungee jumping memorables y seguras que desafíen los límites de nuestros clientes, mientras promovemos el turismo de aventura sostenible en Colombia. Nos comprometemos a mantener los más altos estándares de seguridad, formar instructores de clase mundial y contribuir positivamente a las comunidades locales donde operamos.",
}

const vision = {
  title: "VISIÓN",
  description:
    "Ser la empresa líder en turismo de aventura en Colombia y Latinoamérica, reconocida internacionalmente por la excelencia en seguridad, la innovación en experiencias de adrenalina y el impacto positivo en el desarrollo turístico del país. Aspiramos a convertir cada salto en una transformación personal para nuestros aventureiros.",
}

export function MissionVision() {
  return (
    <section id="mision-vision" className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <AnimateOnScroll variant="fade-down" duration={600}>
            <p className="text-primary uppercase tracking-[0.3em] text-sm font-semibold mb-4">
              Nuestra Esencia
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll variant="slide-up-rotate" duration={800} delay={100}>
            <h2 className="font-display text-5xl sm:text-7xl text-foreground tracking-wide">
              MISIÓN Y VISIÓN
            </h2>
          </AnimateOnScroll>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimateOnScroll variant="fade-right" duration={900}>
            <div className="bg-secondary rounded-lg p-8 h-full">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-display text-4xl text-foreground tracking-wide">
                  {mission.title}
                </h3>
              </div>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {mission.description}
              </p>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll variant="fade-left" duration={900} delay={200}>
            <div className="bg-secondary rounded-lg p-8 h-full">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center">
                  <Eye className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-display text-4xl text-foreground tracking-wide">
                  {vision.title}
                </h3>
              </div>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {vision.description}
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  )
}
