"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { AnimateOnScroll } from "@/components/animate-on-scroll"

const experiences = [
  {
    title: "SALTO CLASICO",
    subtitle: "50 metros",
    price: "$89",
    image: "/images/jump-classic.jpg",
    alt: "Persona realizando un salto clasico de bungee jumping",
    badge: "Popular",
    features: ["Video HD incluido", "Certificado de salto", "Fotos profesionales"],
  },
  {
    title: "SALTO EXTREMO",
    subtitle: "120 metros",
    price: "$149",
    image: "/images/jump-extreme.jpg",
    alt: "Salto extremo de bungee jumping desde un puente al atardecer",
    badge: "Mas Vendido",
    features: ["Video 4K + Drone", "Certificado premium", "Sesion de fotos completa"],
  },
  {
    title: "SALTO NOCTURNO",
    subtitle: "80 metros",
    price: "$199",
    image: "/images/jump-night.jpg",
    alt: "Salto nocturno de bungee jumping con luces neon",
    badge: "Exclusivo",
    features: ["Experiencia nocturna", "Video con luces LED", "Cena incluida"],
  },
]

export function Experiences() {
  return (
    <section id="experiencias" className="py-24 bg-secondary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <AnimateOnScroll variant="fade-down" duration={600}>
            <p className="text-primary uppercase tracking-[0.3em] text-sm font-semibold mb-4">
              Nuestras Experiencias
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll variant="slide-up-rotate" duration={800} delay={100}>
            <h2 className="font-display text-5xl sm:text-7xl text-foreground tracking-wide">
              ELIGE TU SALTO
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll variant="fade-up" delay={250}>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto leading-relaxed">
              Desde tu primer salto hasta las experiencias mas extremas. Cada paquete esta disenado para ofrecerte una aventura inolvidable.
            </p>
          </AnimateOnScroll>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {experiences.map((exp, i) => (
            <AnimateOnScroll key={exp.title} variant="fade-up" delay={i * 200} duration={800}>
              <Card className="bg-card border-border overflow-hidden group hover:border-primary/50 transition-all duration-300 h-full">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={exp.image}
                    alt={exp.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                  <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground font-semibold uppercase tracking-wider text-xs">
                    {exp.badge}
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-end justify-between mb-4">
                    <div>
                      <h3 className="font-display text-3xl text-foreground tracking-wide">{exp.title}</h3>
                      <p className="text-muted-foreground text-sm">{exp.subtitle}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-display text-4xl text-primary">{exp.price}</p>
                      <p className="text-xs text-muted-foreground">por persona</p>
                    </div>
                  </div>
                  <ul className="flex flex-col gap-2 mb-6">
                    {exp.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="w-full bg-primary text-primary-foreground hover:bg-primary/90 uppercase tracking-wider font-semibold">
                    <a href="#reservar">Reservar</a>
                  </Button>
                </CardContent>
              </Card>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
