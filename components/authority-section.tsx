"use client";

import { CheckCircle2 } from "lucide-react";
import { AnimateOnScroll } from "@/components/animate-on-scroll";

const bullets = [
  "Equipos usados en operacion diaria real",
  "Protocolos probados en campo",
  "Configuraciones tecnicas exactas",
  "Sistemas redundantes de seguridad",
];

export function AuthoritySection() {
  return (
    <section id="autoridad" className="py-24 bg-background">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <AnimateOnScroll variant="blur-in" delay={200}>
            <p className="text-primary uppercase tracking-[0.2em] text-sm font-semibold mb-4">
              Esto no es aventura recreativa. Es operacion extrema.
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll variant="fade-down" duration={600}>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-foreground tracking-wide">
              ¿Quieres operar Bungee Jumping de verdad? Empieza con el equipo
              correcto
            </h2>
          </AnimateOnScroll>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <AnimateOnScroll
            variant="fade-right"
            duration={800}
            className="h-full"
          >
            <img
              src="/images/safety-team.jpg"
              alt="Equipo profesional de Bungee Jumping certificado"
              className="rounded-lg w-full h-full object-cover"
            />
          </AnimateOnScroll>
          <div className="text-center lg:text-left">
            <AnimateOnScroll variant="blur-in" delay={300}>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Hemos ejecutado más de 100 mil saltos comerciales en 18 años sin
                un solo incidente grave. ¿Por qué? Porque usamos el equipo
                adecuado, calibrado y probado para soportar la única verdad del
                Bungee: un solo error y estás fuera del negocio. Esto no es
                escalada.
              </p>
            </AnimateOnScroll>
            <AnimateOnScroll variant="fade-up" delay={400}>
              <ul className="grid grid-cols-1 gap-4">
                {bullets.map((bullet, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-2 bg-secondary/50 rounded-lg p-3 text-left"
                  >
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0" />
                    <span className="text-foreground text-sm">{bullet}</span>
                  </li>
                ))}
              </ul>
            </AnimateOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
