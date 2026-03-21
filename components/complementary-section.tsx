"use client";

import { CheckCircle2 } from "lucide-react";
import { AnimateOnScroll } from "@/components/animate-on-scroll";

const features = [
  "Elongacion del 120%",
  "Nucleo de latex + cubierta de nylon",
  "Proteccion UV y anti abrasion",
  "Venta por rollos desde 50 metros",
];

export function ComplementarySection() {
  return (
    <section id="complementario" className="py-24 bg-secondary">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll variant="fade-down" duration={600}>
          <h2 className="font-display text-4xl sm:text-5xl text-foreground tracking-wide mb-6">
            Cuerdas para entrenamiento y bungee trampolin
          </h2>
        </AnimateOnScroll>
        <AnimateOnScroll variant="blur-in" delay={200}>
          <p className="text-muted-foreground text-lg sm:text-xl leading-relaxed mb-10">
            Soluciones disenadas para uso continuo, entrenamiento fisico y
            aplicaciones recreativas con altos estandares de resistencia.
          </p>
        </AnimateOnScroll>
        <AnimateOnScroll variant="fade-up" delay={300}>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((feature, i) => (
              <li key={i} className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-foreground">{feature}</span>
              </li>
            ))}
          </ul>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
