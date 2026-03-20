"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowDown } from "lucide-react";
import { StatCounter } from "@/components/stat-counter";
import { AnimateOnScroll } from "@/components/animate-on-scroll";

interface Stat {
  prefix?: string;
  end: number;
  suffix?: string;
  label: string;
  duration: number;
  decimals?: number;
}

interface HeroProps {
  subtitle?: string;
  title: string;
  stats?: Stat[];
  imageSrc?: string;
  imageAlt?: string;
  scrollLink?: string;
  scrollLabel?: string;
}

export function Hero({
  subtitle = "San Gil - Santander - Since 2007",
  title = "70 metros de pura adrenalina",
  stats,
  imageSrc = "/images/hero-bungee.jpg",
  imageAlt = "Persona saltando en bungee jumping sobre un canon al atardecer",
  scrollLink = "#experiencias",
  scrollLabel = "Ver mas contenido",
}: HeroProps) {
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

  const defaultStats: Stat[] = [
    { prefix: "+", end: 65, suffix: "K", label: "Saltos realizados", duration: 2000 },
    { prefix: "+", end: 18, label: "Anios de experiencia", duration: 2500 },
    { end: 0, label: "Accidentes", duration: 1800 },
    { end: 4.9, decimals: 1, label: "Valoracion Google", duration: 2200 },
  ];

  const displayStats = stats !== undefined ? stats : defaultStats;

  return (
    <section
      ref={sectionRef}
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="w-full h-full object-cover"
          style={{ transform: `translateY(${scrollY * 0.4}px) scale(1.1)` }}
        />
        <div className="absolute inset-0 bg-background/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center pt-10">
        <AnimateOnScroll variant="fade-down" duration={600}>
          <p className="text-primary uppercase tracking-[0.2em] text-sm font-semibold mb-10">
            {subtitle}
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll variant="zoom-in" duration={900} delay={200}>
          <h1 className="font-display text-6xl sm:text-8xl xl:text-9xl text-foreground leading-none tracking-wide text-balance font-black">
            {title}
          </h1>
        </AnimateOnScroll>

        {displayStats.length > 0 && (
          <AnimateOnScroll variant="fade-up" delay={900} duration={800}>
            <div className={`mt-20 lg:mt-10 xl:mt-20 grid gap-6 max-w-3xl mx-auto ${
              displayStats.length === 4
                ? "grid-cols-2 lg:grid-cols-4"
                : "grid-cols-3"
            }`}>
              {displayStats.map((stat, index) => (
                <StatCounter
                  key={index}
                  prefix={stat.prefix}
                  end={stat.end}
                  suffix={stat.suffix}
                  label={stat.label}
                  duration={stat.duration}
                  decimals={stat.decimals}
                />
              ))}
            </div>
          </AnimateOnScroll>
        )}
      </div>

      <a
        href={scrollLink}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce text-muted-foreground hover:text-foreground transition-colors"
        aria-label={scrollLabel}
      >
        <ArrowDown className="h-6 w-6" />
      </a>
    </section>
  );
}
