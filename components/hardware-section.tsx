"use client";

import { Link2 } from "lucide-react";
import { AnimateOnScroll } from "@/components/animate-on-scroll";

const elements = [
  {
    title: "Mosquetones de acero (60KN)",
    description: "Con cierre automatico",
  },
  {
    title: "Anillas de anclaje certificadas (22KN)",
    description: "",
  },
  {
    title: "Cintas tubulares de alta resistencia (18KN)",
    description: "",
  },
  {
    title: "Materiales para sistemas de altura",
    description: "Disenados especificamente para operacion",
  },
];

export function HardwareSection() {
  return (
    <section id="hardware" className="py-24 bg-background">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll variant="fade-down" duration={600}>
          <h2 className="font-display text-4xl sm:text-5xl text-foreground tracking-wide mb-10 text-center">
            Sistemas de conexion y anclaje de alto rendimiento
          </h2>
        </AnimateOnScroll>
        <AnimateOnScroll variant="fade-up" delay={200}>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {elements.map((element, i) => (
              <li
                key={i}
                className="flex items-start gap-4 bg-secondary/50 rounded-lg p-5"
              >
                <div className="flex-shrink-0 h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Link2 className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-foreground font-semibold">{element.title}</p>
                  {element.description && (
                    <p className="text-muted-foreground text-sm">
                      {element.description}
                    </p>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
