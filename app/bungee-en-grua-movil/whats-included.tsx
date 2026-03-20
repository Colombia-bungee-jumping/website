"use client";

import { AnimateOnScroll } from "@/components/animate-on-scroll";
import { Check, Users, Award, Shield, Grid3X3, FileCheck, Truck } from "lucide-react";

const includes = [
  { icon: Users, text: "Instructores profesionales" },
  { icon: Award, text: "Equipos certificados" },
  { icon: Shield, text: "Sistema de seguridad completo" },
  { icon: Grid3X3, text: "Canastilla de salto" },
  { icon: FileCheck, text: "Seguro por participante" },
  { icon: Truck, text: "Grúa (opcional)" },
];

export function WhatsIncluded() {
  return (
    <section id="incluye" className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <AnimateOnScroll variant="fade-down" duration={600}>
            <p className="text-primary uppercase tracking-[0.3em] text-sm font-semibold mb-4">
              Servicios
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll variant="slide-up-rotate" duration={800} delay={100}>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-foreground tracking-wide">
              Servicio completo para eventos
            </h2>
          </AnimateOnScroll>
        </div>
        <AnimateOnScroll variant="fade-up" delay={200}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {includes.map((item, index) => (
              <div
                key={index}
                className="group flex items-center gap-5 p-6 rounded-2xl bg-secondary/30 border border-border hover:bg-secondary hover:border-primary/30 hover:shadow-lg transition-all duration-300"
              >
                <span className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <item.icon className="w-7 h-7 text-primary" />
                </span>
                <span className="text-lg font-medium text-foreground group-hover:text-primary transition-colors">
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
