"use client";

import { AnimateOnScroll } from "@/components/animate-on-scroll";
import { ShieldCheck, Ruler, Award, Eye } from "lucide-react";

const cards = [
  {
    icon: ShieldCheck,
    title: "Seguridad real, no improvisada",
    text: "Sistema redundante con arnés, cuerda profesional y colchón de aire.",
  },
  {
    icon: Ruler,
    title: "Cuerdas por talla",
    text: "Mayor precisión, mejor experiencia y rebotes controlados.",
  },
  {
    icon: Award,
    title: "Experiencia comprobada",
    text: "Más de 100 mil saltos realizados sin fallos.",
  },
  {
    icon: Eye,
    title: "Impacto visual garantizado",
    text: "Una atracción que detiene miradas y genera contenido viral.",
  },
];

export function Differentiators() {
  return (
    <section id="diferenciadores" className="py-24 bg-secondary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <AnimateOnScroll variant="fade-down" duration={600}>
            <p className="text-primary uppercase tracking-[0.3em] text-sm font-semibold mb-4">
              Diferenciadores
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll variant="slide-up-rotate" duration={800} delay={100}>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-foreground tracking-wide">
              El bungee más seguro y profesional para eventos
            </h2>
          </AnimateOnScroll>
        </div>
        <AnimateOnScroll variant="fade-up" delay={200}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cards.map((card, index) => (
              <div
                key={index}
                className="group relative bg-background p-8 rounded-2xl text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-primary/20"
              >
                <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <card.icon className="w-10 h-10 text-primary" />
                </div>
                <h3 className="font-display text-xl text-foreground mb-3 group-hover:text-primary transition-colors">
                  {card.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {card.text}
                </p>
              </div>
            ))}
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
