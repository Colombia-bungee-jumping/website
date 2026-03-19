"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { AnimateOnScroll } from "@/components/animate-on-scroll"
import { Heart, Users, Leaf, GraduationCap } from "lucide-react"

const volunteerPrograms = [
  {
    icon: GraduationCap,
    title: "Programa de Mentoría",
    description:
      "Conviértete en mentor de jóvenes locales interesados en pursuing careers en turismo y deportes de aventura. Comparte tu experiencia y conocimientos.",
    duration: "3-6 meses",
    requirements: ["Experiencia en turismo", "Español intermedio", "Mayoría de edad"],
  },
  {
    icon: Heart,
    title: "Apoyo Comunitario",
    description:
      "Trabaja directamente con las comunidades locales en proyectos de infraestructura, educación y desarrollo social. Impacto directo y tangible.",
    duration: "2-4 semanas",
    requirements: ["Sin experiencia necesaria", "Español básico", "18+ años"],
  },
  {
    icon: Leaf,
    title: "Conservación Ambiental",
    description:
      "Participa en proyectos de reforestación, limpieza de áreas naturales y educación ambiental. Ayúdanos a preservar la belleza natural de Colombia.",
    duration: "1-2 semanas",
    requirements: ["Amor por la naturaleza", "Condición física básica", "Español básico"],
  },
  {
    icon: Users,
    title: "Inmersión Cultural",
    description:
      "Vive con una familia local y aprende sobre las tradiciones, gastronomía y forma de vida colombiana. Una experiencia transformadora.",
    duration: "2-8 semanas",
    ["requirements"]: ["Mentalidad abierta", "Respeto por las tradiciones", "Español básico"],
  },
]

export function VolunteerPrograms() {
  return (
    <section id="voluntariado" className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <AnimateOnScroll variant="fade-down" duration={600}>
            <p className="text-primary uppercase tracking-[0.3em] text-sm font-semibold mb-4">
              Impacto Social
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll variant="slide-up-rotate" duration={800} delay={100}>
            <h2 className="font-display text-5xl sm:text-7xl text-foreground tracking-wide">
              VOLUNTARIADO
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll variant="fade-up" delay={250}>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto leading-relaxed">
              Únete a nuestros programas de voluntariado y vive una experiencia única mientras contribuyes al desarrollo sostenible de las comunidades locales.
            </p>
          </AnimateOnScroll>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {volunteerPrograms.map((program, i) => (
            <AnimateOnScroll key={program.title} variant="fade-up" delay={i * 200} duration={800}>
              <Card className="bg-secondary border-border overflow-hidden group hover:border-primary/50 transition-all duration-300 h-full">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="flex-shrink-0 h-14 w-14 rounded-lg bg-primary/20 flex items-center justify-center">
                      <program.icon className="h-7 w-7 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-display text-2xl text-foreground tracking-wide mb-1">
                        {program.title}
                      </h3>
                      <p className="text-primary text-sm font-semibold uppercase tracking-wider">
                        Duración: {program.duration}
                      </p>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {program.description}
                  </p>
                  <div className="mb-6">
                    <p className="text-xs text-muted-foreground uppercase tracking-wider mb-3">
                      Requisitos:
                    </p>
                    <ul className="flex flex-wrap gap-2">
                      {program.requirements.map((req) => (
                        <li
                          key={req}
                          className="px-3 py-1 bg-card rounded-full text-xs text-muted-foreground border border-border"
                        >
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 uppercase tracking-wider font-semibold">
                    Aplicar Ahora
                  </Button>
                </CardContent>
              </Card>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll variant="fade-up" delay={400}>
          <div className="mt-16 text-center">
            <p className="text-muted-foreground mb-6">
              ¿Tienes alguna pregunta sobre nuestros programas de voluntariado?
            </p>
            <Button
              asChild
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground uppercase tracking-wider font-semibold"
            >
              <a href="mailto:voluntariado@vertexdrop.com">Contactar Equipo de Voluntariado</a>
            </Button>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  )
}
