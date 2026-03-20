"use client";

import { AnimateOnScroll } from "@/components/animate-on-scroll";
import { MapPin } from "lucide-react";

const events = [
  "American Fest Cúcuta 2025",
  "Festival Stereo Picnic 2022 y 2024",
  "Feria de Manizales 2015",
  "Reto Bungee Cali 2015",
  "Festival Recrearte (2012 – 2018)",
  "Santander Xtremo 2012",
  "Festival de Verano (2011 – 2013)",
  "Extreme House Party 2011",
  "Campus Extreme 2014",
];

export function SocialProof() {
  return (
    <section id="eventos" className="py-24 bg-secondary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <AnimateOnScroll variant="fade-down" duration={600}>
            <p className="text-primary uppercase tracking-[0.3em] text-sm font-semibold mb-4">
              Eventos
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll variant="slide-up-rotate" duration={800} delay={100}>
            <h2 className="font-display text-5xl sm:text-7xl text-foreground tracking-wide mb-12">
              Eventos en Colombia que ya vivieron el bungee móvil
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll variant="fade-up" delay={200}>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-left">
              {events.map((event, index) => (
                <li
                  key={index}
                  className="flex items-center gap-3 text-muted-foreground p-4 rounded-lg bg-background hover:bg-background/80 transition-colors shadow-sm"
                >
                  <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-lg">{event}</span>
                </li>
              ))}
            </ul>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
