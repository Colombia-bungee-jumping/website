"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { AnimateOnScroll } from "@/components/animate-on-scroll"
import { services } from "@/config/services"

export function Experiences() {
  return (
    <section id="experiencias" className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <AnimateOnScroll variant="fade-down" duration={600}>
            <p className="text-primary uppercase tracking-[0.3em] text-sm font-semibold mb-4">
              Nuestras Experiencias
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll variant="slide-up-rotate" duration={800} delay={100}>
            <h2 className="font-display text-5xl sm:text-7xl text-foreground tracking-wide">
              ELIGE TU EXPERIENCIA
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll variant="fade-up" delay={250}>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto leading-relaxed">
              Desde tu primer salto hasta las experiencias mas extremas. Cada paquete esta disenado para ofrecerte una aventura inolvidable.
            </p>
          </AnimateOnScroll>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <AnimateOnScroll key={service.id} variant="fade-up" delay={i * 200} duration={800}>
              <Card className="bg-card border-border overflow-hidden group hover:border-primary/50 transition-all duration-300 h-full">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-end justify-between mb-4">
                    <div>
                      <h3 className="font-display text-3xl text-foreground tracking-wide">{service.title}</h3>
                    </div>
                    <div className="text-right">
                      <p className="font-display text-4xl text-primary">{service.priceFormatted}</p>
                    </div>
                  </div>
                  <ul className="flex flex-col gap-2 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  {service.showButton && (
                    <Button asChild className="w-full bg-primary text-primary-foreground hover:bg-primary/90 uppercase tracking-wider font-semibold">
                      <a href="/reservar">Reservar</a>
                    </Button>
                  )}
                </CardContent>
              </Card>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
