"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { StatCounter } from "@/components/stat-counter";
import { AnimateOnScroll } from "@/components/animate-on-scroll";

export function Hero() {
  const [scrollY, setScrollY] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        if (rect.bottom > 0 && rect.top < window.innerHeight) {
          setScrollY(window.scrollY);
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0">
        <img
          src="/images/hero-bungee.jpg"
          alt="Persona saltando en bungee jumping sobre un canon al atardecer"
          className="w-full h-full object-cover"
          style={{ transform: `translateY(${scrollY * 0.4}px) scale(1.1)` }}
        />
        <div className="absolute inset-0 bg-background/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center pt-10">
        <AnimateOnScroll variant="fade-down" duration={600}>
          <p className="text-primary uppercase tracking-[0.2em] text-sm font-semibold mb-10">
          San Gil - Santander - Since 2007
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll variant="zoom-in" duration={900} delay={200}>
          <h1 className="font-display text-6xl sm:text-8xl lg:text-9xl text-foreground leading-none tracking-wide text-balance font-black">
            70 metros de pura adrenalina
          </h1>
        </AnimateOnScroll>

        <AnimateOnScroll variant="fade-up" delay={700} duration={700}>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-10 py-6 font-semibold uppercase tracking-wider"
            >
              <a href="#reservar">Reserva Tu Salto</a>
            </Button>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll variant="fade-up" delay={900} duration={800}>
          <div className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-3xl mx-auto">
            <StatCounter
              prefix="+"
              end={65}
              suffix="K"
              label="Saltos realizados"
              duration={2000}
            />
            <StatCounter
              prefix="+"
              end={18}
              label="Anios de experiencia"
              duration={2500}
            />
            <StatCounter end={0} label="Accidentes" duration={1800} />
            <StatCounter
              end={4.9}
              decimals={1}
              label="Valoracion Google"
              duration={2200}
            />
          </div>
        </AnimateOnScroll>
      </div>

      <a
        href="#experiencias"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce text-muted-foreground hover:text-foreground transition-colors"
        aria-label="Ver mas contenido"
      >
        <ArrowDown className="h-6 w-6" />
      </a>
    </section>
  );
}
