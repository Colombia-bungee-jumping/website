"use client";

import Image from "next/image";
import { AnimateOnScroll } from "@/components/animate-on-scroll";

export function Experience() {
  return (
    <section
      id="experiencia"
      className="py-24 bg-background relative overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <AnimateOnScroll variant="fade-down" duration={600}>
              <p className="text-primary uppercase tracking-[0.3em] text-sm font-semibold mb-4">
                Experiencia
              </p>
            </AnimateOnScroll>
            <AnimateOnScroll
              variant="slide-up-rotate"
              duration={800}
              delay={100}
            >
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-foreground tracking-wide mb-8">
                Así se vive el bungee jumping
              </h2>
            </AnimateOnScroll>
            <AnimateOnScroll variant="fade-up" delay={200}>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <span className="flex-shrink-0 w-12 h-12 rounded-full bg-primary flex items-center justify-center text-2xl">
                    1
                  </span>
                  <div>
                    <p className="text-foreground text-lg font-medium">
                      Subes. Miras abajo. El silencio pesa.
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="flex-shrink-0 w-12 h-12 rounded-full bg-primary flex items-center justify-center text-2xl">
                    2
                  </span>
                  <div>
                    <p className="text-foreground text-lg font-medium">
                      Das el paso… y en segundos estás en caída libre total.
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="flex-shrink-0 w-12 h-12 rounded-full bg-primary flex items-center justify-center text-2xl">
                    3
                  </span>
                  <div>
                    <p className="text-foreground text-lg font-medium">
                      Adrenalina pura, gritos, euforia y una experiencia que se
                      queda para siempre.
                    </p>
                  </div>
                </div>
              </div>
              <p className="text-muted-foreground text-base mt-8 pt-8 border-t border-border italic">
                Una de las experiencias extremas más impactantes en Colombia.
              </p>
            </AnimateOnScroll>
          </div>

          <AnimateOnScroll variant="fade-left" duration={900}>
            <div className="relative">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-6">
                  <div className="relative rounded-2xl overflow-hidden aspect-[3/4] shadow-xl">
                    <Image
                      src="/images/jump-grua.jpg"
                      alt="Persona saltando en bungee"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
                  </div>
                </div>
                <div className="space-y-6 pt-12">
                  <div className="relative rounded-2xl overflow-hidden aspect-[3/4] shadow-xl">
                    <Image
                      src="/images/jump-grua.jpg"
                      alt="Bungee jumping en evento"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
