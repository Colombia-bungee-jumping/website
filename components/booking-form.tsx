"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Clock, MapPin, Users, CheckCircle2 } from "lucide-react"
import { AnimateOnScroll } from "@/components/animate-on-scroll"

export function BookingForm() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <section id="reservar" className="py-24 bg-background">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll variant="zoom-in" duration={600}>
            <Card className="bg-card border-border">
              <CardContent className="p-12 text-center">
                <div className="h-20 w-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="h-10 w-10 text-primary" />
                </div>
                <h3 className="font-display text-4xl sm:text-5xl text-foreground tracking-wide mb-4">
                  RESERVA CONFIRMADA
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-md mx-auto">
                  Hemos recibido tu solicitud de reserva. Nuestro equipo se pondra en contacto contigo en las proximas 24 horas para confirmar los detalles.
                </p>
                <Button
                  onClick={() => setSubmitted(false)}
                  className="bg-primary text-primary-foreground hover:bg-primary/90 uppercase tracking-wider font-semibold"
                >
                  Hacer otra reserva
                </Button>
              </CardContent>
            </Card>
          </AnimateOnScroll>
        </div>
      </section>
    )
  }

  return (
    <section id="reservar" className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <AnimateOnScroll variant="fade-down" duration={600}>
              <p className="text-primary uppercase tracking-[0.3em] text-sm font-semibold mb-4">
                Reservas
              </p>
            </AnimateOnScroll>
            <AnimateOnScroll variant="slide-up-rotate" duration={800} delay={100}>
              <h2 className="font-display text-5xl sm:text-7xl text-foreground tracking-wide mb-6">
                RESERVA TU
                <br />
                <span className="text-primary">AVENTURA</span>
              </h2>
            </AnimateOnScroll>
            <AnimateOnScroll variant="blur-in" delay={200}>
              <p className="text-muted-foreground leading-relaxed text-lg mb-10">
                Completa el formulario y nuestro equipo se pondra en contacto contigo para confirmar todos los detalles de tu experiencia.
              </p>
            </AnimateOnScroll>

            <div className="flex flex-col gap-6">
              {[
                { icon: MapPin, title: "Ubicaciones en 5 paises", desc: "Espana, Mexico, Colombia, Chile y Argentina" },
                { icon: Calendar, title: "Disponible todo el ano", desc: "Saltos de lunes a domingo, lluvias o sol" },
                { icon: Clock, title: "Experiencia de 2-3 horas", desc: "Incluye briefing, preparacion y salto" },
                { icon: Users, title: "Grupos de hasta 20 personas", desc: "Perfecto para celebraciones y team building" },
              ].map((item, i) => (
                <AnimateOnScroll key={item.title} variant="fade-right" delay={300 + i * 120} duration={600}>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-foreground font-semibold">{item.title}</p>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>

          <AnimateOnScroll variant="fade-left" duration={900} delay={200}>
            <Card className="bg-card border-border">
              <CardContent className="p-6 sm:p-8">
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-2">
                      <Label htmlFor="nombre" className="text-foreground text-sm uppercase tracking-wide">
                        Nombre completo
                      </Label>
                      <Input
                        id="nombre"
                        required
                        placeholder="Tu nombre"
                        className="bg-background border-border text-foreground placeholder:text-muted-foreground"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <Label htmlFor="email" className="text-foreground text-sm uppercase tracking-wide">
                        Email
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        placeholder="tu@email.com"
                        className="bg-background border-border text-foreground placeholder:text-muted-foreground"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-2">
                      <Label htmlFor="telefono" className="text-foreground text-sm uppercase tracking-wide">
                        Telefono
                      </Label>
                      <Input
                        id="telefono"
                        type="tel"
                        required
                        placeholder="+34 600 000 000"
                        className="bg-background border-border text-foreground placeholder:text-muted-foreground"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <Label htmlFor="personas" className="text-foreground text-sm uppercase tracking-wide">
                        Personas
                      </Label>
                      <Select required>
                        <SelectTrigger className="bg-background border-border text-foreground">
                          <SelectValue placeholder="Seleccionar" />
                        </SelectTrigger>
                        <SelectContent className="bg-card border-border">
                          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
                            <SelectItem key={n} value={String(n)}>
                              {n} {n === 1 ? "persona" : "personas"}
                            </SelectItem>
                          ))}
                          <SelectItem value="10+">{"Mas de 10"}</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <Label htmlFor="experiencia" className="text-foreground text-sm uppercase tracking-wide">
                      Experiencia
                    </Label>
                    <Select required>
                      <SelectTrigger className="bg-background border-border text-foreground">
                        <SelectValue placeholder="Elige tu experiencia" />
                      </SelectTrigger>
                      <SelectContent className="bg-card border-border">
                        <SelectItem value="clasico">Salto Clasico - 50m ($89)</SelectItem>
                        <SelectItem value="extremo">Salto Extremo - 120m ($149)</SelectItem>
                        <SelectItem value="nocturno">Salto Nocturno - 80m ($199)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex flex-col gap-2">
                    <Label htmlFor="fecha" className="text-foreground text-sm uppercase tracking-wide">
                      Fecha preferida
                    </Label>
                    <Input
                      id="fecha"
                      type="date"
                      required
                      className="bg-background border-border text-foreground"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <Label htmlFor="comentarios" className="text-foreground text-sm uppercase tracking-wide">
                      Comentarios
                    </Label>
                    <Textarea
                      id="comentarios"
                      placeholder="Cuentanos si es una ocasion especial, si tienes alguna pregunta..."
                      rows={4}
                      className="bg-background border-border text-foreground placeholder:text-muted-foreground resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="bg-primary text-primary-foreground hover:bg-primary/90 uppercase tracking-wider font-semibold text-lg py-6 mt-2"
                  >
                    Confirmar Reserva
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    Al enviar este formulario, aceptas nuestros terminos y condiciones.
                    No se realizara ningun cobro hasta la confirmacion.
                  </p>
                </form>
              </CardContent>
            </Card>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  )
}
