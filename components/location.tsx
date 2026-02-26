"use client";

import { MapPin, Clock, Phone, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimateOnScroll } from "@/components/animate-on-scroll";
import { socialLinks } from "@/config/social-links";
import { company } from "@/config/company";

const location = {
  city: company.city,
  googleMapsQuery: `${company.name}, ${company.location}`,
  country: company.country,
  address: company.location,
  hours: "Lun - Dom: 9:00 - 18:00",
  phone: company.phone,
  mapUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.901953020077!2d-73.12847462465767!3d6.534065723039763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e69c0d17865e0df%3A0x16c526d2fe1f63af!2sColombia%20Bungee%20Jumping!5e0!3m2!1ses-419!2sco!4v1771621145602!5m2!1ses-419!2sco",
};

export function Location() {
  return (
    <section id="ubicacion" className="py-24 bg-secondary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <AnimateOnScroll variant="fade-down" duration={600}>
            <p className="text-primary uppercase tracking-[0.3em] text-sm font-semibold mb-4">
              Ubicacion
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll variant="slide-up-rotate" duration={800} delay={100}>
            <h2 className="font-display text-5xl sm:text-7xl text-foreground tracking-wide">
              DONDE NOS ENCONTRAMOS
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll variant="fade-up" delay={250}>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto leading-relaxed">
              Visitanos en nuestra ubicacion exclusiva en Colombia y vive la
              experiencia del bungee jumping en un entorno unico.
            </p>
          </AnimateOnScroll>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-8 items-stretch">
          {/* Map */}
          <AnimateOnScroll variant="fade-right" duration={900}>
            <div className="rounded-lg overflow-hidden border border-border h-[400px] lg:h-full min-h-[400px]">
              <iframe
                src={location.mapUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`Ubicacion de VertexDrop en ${location.city}`}
                className="grayscale brightness-75 contrast-125"
              />
            </div>
          </AnimateOnScroll>

          {/* Location info */}
          <AnimateOnScroll variant="fade-left" duration={700}>
            <div className="bg-card border border-border rounded-lg p-10 flex flex-col justify-center h-full">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="font-display text-4xl text-foreground tracking-wide">
                    {location.city}
                  </h3>
                  <p className="text-primary text-sm font-semibold uppercase tracking-wider">
                    {location.country}
                  </p>
                </div>
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3 text-muted-foreground">
                  <MapPin className="h-5 w-5 shrink-0 text-primary mt-0.5" />
                  <span className="leading-relaxed">{location.address}</span>
                </div>
                <div className="flex items-start gap-3 text-muted-foreground">
                  <Clock className="h-5 w-5 shrink-0 text-primary mt-0.5" />
                  <span className="leading-relaxed">{location.hours}</span>
                </div>
                <div className="flex items-start gap-3 text-muted-foreground">
                  <Phone className="h-5 w-5 shrink-0 text-primary mt-0.5" />
                  <span className="leading-relaxed">{location.phone}</span>
                </div>
              </div>

              <Button className="w-full gap-2" asChild>
                <a
                  href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
                    location.googleMapsQuery,
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Navigation className="h-4 w-4" />
                  Como llegar
                </a>
              </Button>

              <div className="mt-8 pt-6 border-t border-border">
                <p className="text-sm text-muted-foreground mb-4">
                  Siguenos en redes
                </p>
                <div className="flex items-center gap-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      aria-label={social.label}
                      className="h-10 w-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <social.icon className="h-5 w-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
