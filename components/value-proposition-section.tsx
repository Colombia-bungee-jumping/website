"use client";

import { Circle, ShieldCheck, Link2, BookOpen } from "lucide-react";
import { AnimateOnScroll } from "@/components/animate-on-scroll";

const items = [
  {
    icon: Circle,
    text: "Cuerdas elasticas profesionales ultra suaves",
  },
  {
    icon: ShieldCheck,
    text: "arneses certificados (cuerpo completo y tobillos)",
  },
  {
    icon: Link2,
    text: "Sistemas de anclaje y redundancia",
  },
  {
    icon: BookOpen,
    text: "Manuales y asesoria basada en experiencia real",
  },
];

export function ValuePropositionSection() {
  return (
    <section id="propuesta" className="py-24 bg-secondary">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll variant="fade-down" duration={600}>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-foreground tracking-wide mb-12 text-center">
            Todo lo que necesitas para operar un Bungee seguro
          </h2>
        </AnimateOnScroll>
        <AnimateOnScroll variant="fade-up" delay={200}>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
            {items.map((item, i) => (
              <li
                key={i}
                className="flex items-center gap-4 bg-background/50 rounded-lg p-5"
              >
                <div className="flex-shrink-0 h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <span className="text-foreground text-lg">{item.text}</span>
              </li>
            ))}
          </ul>
        </AnimateOnScroll>
        <AnimateOnScroll variant="blur-in" delay={400}>
          <p className="text-center text-xl sm:text-2xl text-foreground font-semibold tracking-wide">
            Importamos directo. Sin intermediarios. Sin incertidumbre.
          </p>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
