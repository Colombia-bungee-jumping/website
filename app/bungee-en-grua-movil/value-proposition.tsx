"use client";

import { useRef, useEffect } from "react";
import { AnimateOnScroll } from "@/components/animate-on-scroll";
import { ArrowDown, MapPin, Clock } from "lucide-react";

const features = [
  { icon: ArrowDown, text: "Caída libre real desde altura" },
  { icon: MapPin, text: "Adaptable a diferentes espacios" },
  { icon: Clock, text: "Instalación rápida y eficiente" },
];

export function ValueProposition() {
  const videoRef = useRef<HTMLIFrameElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && videoRef.current) {
            const videoSrc = videoRef.current.src;
            if (!videoSrc.includes("autoplay=1")) {
              videoRef.current.src = videoSrc + "&autoplay=1";
            }
          }
        });
      },
      { threshold: 0.5 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="propuesta" className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <AnimateOnScroll variant="fade-down" duration={600}>
            <p className="text-primary uppercase tracking-[0.3em] text-sm font-semibold mb-4">
              Propuesta de Valor
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll variant="slide-up-rotate" duration={800} delay={100}>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-foreground tracking-wide">
              Bungee Jumping móvil para eventos en toda Colombia
            </h2>
          </AnimateOnScroll>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <AnimateOnScroll variant="fade-right" duration={900}>
            <div className="relative rounded-2xl overflow-hidden aspect-video shadow-2xl">
              <iframe
                ref={videoRef}
                src="https://www.youtube.com/embed/vweO6G4gWko?start=5&rel=0"
                title="Bungee Jumping Móvil"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full"
              />
            </div>
          </AnimateOnScroll>

          <div>
            <AnimateOnScroll variant="fade-up" delay={200}>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Nuestro sistema de bungee móvil permite instalar una experiencia
                de salto extremo en prácticamente cualquier lugar, utilizando
                una grúa telescópica y equipos profesionales certificados.
              </p>
            </AnimateOnScroll>
            <AnimateOnScroll variant="fade-up" delay={300}>
              <ul className="flex flex-col gap-6">
                {features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-3 text-foreground"
                  >
                    <span className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <feature.icon className="w-5 h-5 text-primary" />
                    </span>
                    <span className="text-lg">{feature.text}</span>
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
