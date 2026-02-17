"use client"

import { MapPin, Clock, Phone } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { AnimateOnScroll } from "@/components/animate-on-scroll"

const locations = [
  {
    city: "Madrid",
    country: "Espana",
    address: "Puente de la Sierra, Carretera M-604 km 28",
    hours: "Lun - Dom: 9:00 - 19:00",
    phone: "+34 900 123 456",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d194347.38440752847!2d-3.8196196!3d40.4378698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd422997800a3c81%3A0xc436dec1618c2269!2sMadrid%2C%20Spain!5e0!3m2!1sen!2sus!4v1707800000000",
  },
  {
    city: "Ciudad de Mexico",
    country: "Mexico",
    address: "Barranca de Metztitlan, Hidalgo",
    hours: "Mar - Dom: 8:00 - 18:00",
    phone: "+52 55 1234 5678",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d240927.98195602948!2d-99.2236878!3d19.3909832!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f92b1cfe45e7%3A0x70a08f36e42e2b08!2sMexico%20City%2C%20CDMX%2C%20Mexico!5e0!3m2!1sen!2sus!4v1707800000000",
  },
  {
    city: "Bogota",
    country: "Colombia",
    address: "Puente de Bungee, Via a Suesca km 12",
    hours: "Mie - Dom: 9:00 - 17:00",
    phone: "+57 601 234 5678",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d254508.39280777866!2d-74.2478938!3d4.6482837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9bfd2da6cb29%3A0x239d635520a33914!2sBogot%C3%A1%2C%20Bogota%2C%20Colombia!5e0!3m2!1sen!2sus!4v1707800000000",
  },
]

export function Location() {
  return (
    <section id="ubicacion" className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <AnimateOnScroll variant="fade-down" duration={600}>
            <p className="text-primary uppercase tracking-[0.3em] text-sm font-semibold mb-4">
              Ubicaciones
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll variant="slide-up-rotate" duration={800} delay={100}>
            <h2 className="font-display text-5xl sm:text-7xl text-foreground tracking-wide">
              DONDE SALTAR
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll variant="fade-up" delay={250}>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto leading-relaxed">
              Contamos con sedes en las ubicaciones mas espectaculares. Encuentra la mas cercana y vive la experiencia.
            </p>
          </AnimateOnScroll>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Map */}
          <AnimateOnScroll variant="fade-right" duration={900}>
            <div className="rounded-lg overflow-hidden border border-border h-[400px] lg:h-[520px]">
              <iframe
                src={locations[0].mapUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicacion de VertexDrop en Madrid"
                className="grayscale brightness-75 contrast-125"
              />
            </div>
          </AnimateOnScroll>

          {/* Location cards */}
          <div className="flex flex-col gap-5">
            {locations.map((loc, i) => (
              <AnimateOnScroll key={loc.city} variant="fade-left" delay={i * 150} duration={700}>
                <Card className="bg-card border-border hover:border-primary/30 transition-colors">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="font-display text-3xl text-foreground tracking-wide">{loc.city}</h3>
                        <p className="text-primary text-sm font-semibold uppercase tracking-wider">{loc.country}</p>
                      </div>
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <MapPin className="h-5 w-5 text-primary" />
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4 shrink-0 text-muted-foreground/60" />
                        <span>{loc.address}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="h-4 w-4 shrink-0 text-muted-foreground/60" />
                        <span>{loc.hours}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Phone className="h-4 w-4 shrink-0 text-muted-foreground/60" />
                        <span>{loc.phone}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
