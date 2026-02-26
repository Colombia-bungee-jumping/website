"use client"

import { useRef, useCallback } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import { AnimateOnScroll } from "@/components/animate-on-scroll"

const testimonials = [
  {
    name: "Carlos Martinez",
    role: "Salto Extremo - 120m",
    text: "La experiencia mas increible de mi vida. El equipo de VertexDrop hizo que me sintiera seguro en todo momento. Sin duda volvere a saltar.",
    rating: 5,
  },
  {
    name: "Ana Lopez",
    role: "Salto Nocturno - 80m",
    text: "Saltar de noche fue absolutamente magico. Las luces, la adrenalina, la vista de la ciudad. Es algo que todos deberian experimentar al menos una vez.",
    rating: 5,
  },
  {
    name: "Miguel Torres",
    role: "Salto Clasico - 50m",
    text: "Era mi primer salto de bungee y los instructores fueron increibles. Me explicaron todo paso a paso y me dieron la confianza que necesitaba para lanzarme.",
    rating: 5,
  },
  {
    name: "Laura Fernandez",
    role: "Salto Extremo - 120m",
    text: "La calidad del video y las fotos es impresionante. Tengo recuerdos para toda la vida. El equipo es super profesional y amable.",
    rating: 5,
  },
  {
    name: "Diego Ramirez",
    role: "Salto Clasico - 50m",
    text: "Vine con miedo y me fui con ganas de repetir. La atencion desde el momento que llegas es de primera. Te transmiten calma y seguridad.",
    rating: 5,
  },
  {
    name: "Sofia Herrera",
    role: "Salto Nocturno - 80m",
    text: "Lo regale a mi novio por su cumpleanos y terminamos saltando los dos. Fue una noche que jamas olvidaremos. Totalmente recomendable.",
    rating: 5,
  },
  {
    name: "Javier Mendoza",
    role: "Salto Extremo - 120m",
    text: "He saltado en 5 paises distintos y VertexDrop tiene el mejor equipo y las mejores ubicaciones. El salto de 120m es pura adrenalina.",
    rating: 5,
  },
  {
    name: "Valentina Cruz",
    role: "Salto Clasico - 50m",
    text: "Tenia panico a las alturas y queria superarlo. Los instructores fueron tan pacientes y motivadores que al final salte sin pensarlo. Experiencia transformadora.",
    rating: 5,
  },
  {
    name: "Roberto Silva",
    role: "Salto Nocturno - 80m",
    text: "Organizamos un evento corporativo con VertexDrop para nuestro equipo de 20 personas. La logistica fue impecable y todos quedaron encantados.",
    rating: 5,
  },
  {
    name: "Camila Ortega",
    role: "Salto Extremo - 120m",
    text: "Las vistas desde la plataforma son de otro mundo. Y cuando te lanzas, sientes que vuelas. VertexDrop sabe como hacer de esto algo magico.",
    rating: 5,
  },
]

export function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = useCallback((direction: "left" | "right") => {
    if (!scrollRef.current) return
    const cardWidth = 340
    scrollRef.current.scrollBy({
      left: direction === "left" ? -cardWidth : cardWidth,
      behavior: "smooth",
    })
  }, [])

  return (
    <section id="testimonios" className="py-24 bg-secondary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <AnimateOnScroll variant="fade-down" duration={600}>
            <p className="text-primary uppercase tracking-[0.3em] text-sm font-semibold mb-4">
              Testimonios
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll variant="slide-up-rotate" duration={800} delay={100}>
            <h2 className="font-display text-5xl sm:text-7xl text-foreground tracking-wide">
              LO QUE DICEN
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll variant="fade-up" delay={250}>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto leading-relaxed">
              Miles de aventureros ya vivieron la experiencia. Estas son sus historias.
            </p>
          </AnimateOnScroll>
        </div>

        <AnimateOnScroll variant="fade-up" delay={350}>
          <div className="relative">
            {/* Left arrow */}
            <button
              onClick={() => scroll("left")}
              className="hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-10 h-10 w-10 rounded-full bg-secondary/80 backdrop-blur items-center justify-center text-foreground hover:text-primary border border-border hover:border-primary/40 transition-colors"
              aria-label="Anterior testimonio"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            {/* Scrollable container */}
            <div
              ref={scrollRef}
              className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {testimonials.map((testimonial) => (
                <Card
                  key={testimonial.name}
                  className="bg-card border-border hover:border-primary/30 transition-colors shrink-0 w-[300px] sm:w-[340px] snap-start"
                >
                  <CardContent className="p-6">
                    <div className="flex gap-1 mb-4">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                      ))}
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                      {`"${testimonial.text}"`}
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                        <span className="text-primary font-semibold text-sm">
                          {testimonial.name.split(" ").map((n) => n[0]).join("")}
                        </span>
                      </div>
                      <div>
                        <p className="text-foreground font-semibold text-sm">{testimonial.name}</p>
                        <p className="text-muted-foreground text-xs">{testimonial.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Right arrow */}
            <button
              onClick={() => scroll("right")}
              className="hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10 h-10 w-10 rounded-full bg-secondary/80 backdrop-blur items-center justify-center text-foreground hover:text-primary border border-border hover:border-primary/40 transition-colors"
              aria-label="Siguiente testimonio"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  )
}
