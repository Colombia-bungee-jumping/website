"use client"

import { Shield, Award, Users, HeartPulse } from "lucide-react"
import { AnimateOnScroll } from "@/components/animate-on-scroll"

const safetyFeatures = [
  {
    icon: Shield,
    title: "Equipos Certificados",
    description: "Utilizamos exclusivamente cuerdas y arneses certificados por organismos internacionales, con revision antes de cada salto.",
  },
  {
    icon: Award,
    title: "Instructores Expertos",
    description: "Nuestro equipo cuenta con mas de 10 anos de experiencia y certificaciones internacionales en deportes extremos.",
  },
  {
    icon: Users,
    title: "Protocolo Riguroso",
    description: "Seguimos un protocolo de 25 puntos de seguridad verificados antes de cada salto. Tu seguridad es nuestra prioridad absoluta.",
  },
  {
    icon: HeartPulse,
    title: "Asistencia Medica",
    description: "Equipo medico de emergencia presente en cada ubicacion con ambulancia equipada y personal de primeros auxilios.",
  },
]

export function Safety() {
  return (
    <section id="seguridad" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <AnimateOnScroll variant="fade-down" duration={600}>
              <p className="text-primary uppercase tracking-[0.3em] text-sm font-semibold mb-4">
                Tu Seguridad
              </p>
            </AnimateOnScroll>
            <AnimateOnScroll variant="slide-up-rotate" duration={800} delay={100}>
              <h2 className="font-display text-5xl sm:text-7xl text-foreground tracking-wide mb-6">
                MAXIMA SEGURIDAD
              </h2>
            </AnimateOnScroll>
            <AnimateOnScroll variant="blur-in" delay={200}>
              <p className="text-muted-foreground leading-relaxed mb-10 text-lg">
                En VertexDrop, la seguridad no es negociable. Cada aspecto de nuestras operaciones esta disenado para que disfrutes la adrenalina con total tranquilidad.
              </p>
            </AnimateOnScroll>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {safetyFeatures.map((feature, i) => (
                <AnimateOnScroll key={feature.title} variant="fade-up" delay={300 + i * 150} duration={700}>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <feature.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
          <AnimateOnScroll variant="fade-left" duration={900} delay={200}>
            <div className="relative">
              <img
                src="/images/safety-team.jpg"
                alt="Equipo de seguridad de VertexDrop preparando equipos de bungee jumping"
                className="rounded-lg w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-background/50 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 bg-card/90 backdrop-blur-sm rounded-lg p-4 border border-border">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-foreground font-semibold">Certificacion Internacional</p>
                    <p className="text-sm text-muted-foreground">Cumplimos con los estandares EN 15567 y ISO 22483</p>
                  </div>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  )
}
