"use client";

import { CheckCircle2 } from "lucide-react";
import { AnimateOnScroll } from "@/components/animate-on-scroll";

const benefits = [
  "Elongacion del 300% para desaceleracion suave",
  "Fibras de latex + silicona de alta calidad",
  "Sistema de respaldo (linea de vida 18KN)",
  "Disenadas por rangos de peso",
  "Proteccion contra desgaste y condiciones ambientales",
];

export function RopesSection() {
  return (
    <section id="cuerdas" className="py-24 bg-background">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll variant="fade-down" duration={600}>
          <h2 className="font-display text-4xl sm:text-5xl text-foreground tracking-wide mb-6">
            Cuerdas elasticas profesionales (Sistema Neozelandes)
          </h2>
        </AnimateOnScroll>
        <AnimateOnScroll variant="blur-in" delay={200}>
          <p className="text-muted-foreground text-lg sm:text-xl leading-relaxed mb-10">
            Las cuerdas mas utilizadas a nivel mundial para Bungee Jumping,
            disenadas para ofrecer maxima suavidad, control y seguridad en cada
            salto.
          </p>
        </AnimateOnScroll>
        <AnimateOnScroll variant="fade-up" delay={300}>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {benefits.map((benefit, i) => (
              <li key={i} className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-foreground">{benefit}</span>
              </li>
            ))}
          </ul>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
