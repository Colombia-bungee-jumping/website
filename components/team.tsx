"use client"

import { Card, CardContent } from "@/components/ui/card"
import { AnimateOnScroll } from "@/components/animate-on-scroll"
import { Shield, Mountain, Compass } from "lucide-react"

const teamMembers = [
  {
    name: "Carlos Martínez",
    role: "Director General",
    image: "/images/team-1.jpg",
    description: "Más de 15 años de experiencia en turismo de aventura. Certificado en gestión de riesgos y seguridad en deportes extremos.",
    icon: Shield,
  },
  {
    name: "María González",
    role: "Directora de Operaciones",
    image: "/images/team-2.jpg",
    description: "Ex alpinista con expediciones en los Andes y Himalayas. Encargada de supervisar todos los protocolos de seguridad.",
    icon: Mountain,
  },
  {
    name: "Andrés Pérez",
    role: "Jefe de Instructores",
    image: "/images/team-3.jpg",
    description: "Instructor Master con certificación internacional. Ha entrenado a más de 200 instructores en Latinoamérica.",
    icon: Compass,
  },
]

const teamStats = [
  { value: "50+", label: "Instructores Certificados" },
  { value: "100%", label: "Tasa de Seguridad" },
  { value: "15+", label: "Años de Experiencia" },
  { value: "10K+", label: "Saltos Realizados" },
]

export function Team() {
  return (
    <section id="equipo" className="py-24 bg-secondary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <AnimateOnScroll variant="fade-down" duration={600}>
            <p className="text-primary uppercase tracking-[0.3em] text-sm font-semibold mb-4">
              Nuestro Equipo
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll variant="slide-up-rotate" duration={800} delay={100}>
            <h2 className="font-display text-5xl sm:text-7xl text-foreground tracking-wide">
              EXPERTOS EN ADRENALINA
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll variant="fade-up" delay={250}>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto leading-relaxed">
              Un equipo multidisciplinario comprometido con tu seguridad y experiencia. Cada miembro de nuestro equipo pasa por un riguroso proceso de selección y formación continua.
            </p>
          </AnimateOnScroll>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {teamMembers.map((member, i) => (
            <AnimateOnScroll key={member.name} variant="fade-up" delay={i * 200} duration={800}>
              <Card className="bg-card border-border overflow-hidden group hover:border-primary/50 transition-all duration-300 h-full">
                <div className="relative h-72 overflow-hidden bg-muted">
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent z-10" />
                  <div className="h-full w-full bg-muted flex items-center justify-center">
                    <member.icon className="h-24 w-24 text-muted-foreground/30" />
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-display text-2xl text-foreground tracking-wide mb-1">
                    {member.name}
                  </h3>
                  <p className="text-primary font-semibold uppercase text-sm tracking-wider mb-3">
                    {member.role}
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {member.description}
                  </p>
                </CardContent>
              </Card>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll variant="zoom-in" duration={800}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {teamStats.map((stat, i) => (
              <div
                key={stat.label}
                className="text-center p-6 bg-card/50 rounded-lg border border-border"
              >
                <p className="font-display text-5xl text-primary mb-2">{stat.value}</p>
                <p className="text-xs text-muted-foreground uppercase tracking-wider">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  )
}
