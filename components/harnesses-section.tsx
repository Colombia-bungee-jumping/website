"use client";

import { ShieldCheck, Footprints } from "lucide-react";
import { AnimateOnScroll } from "@/components/animate-on-scroll";

const fullBodyFeatures = [
  "Maxima seguridad y distribucion de carga",
  "Ajuste rapido con hebillas automaticas",
  "Diseno ergonomico y acolchado",
  "Certificaciones internacionales (ANSI, CE, NFPA)",
];

const ankleFeatures = [
  "Doble sistema de ajuste",
  "Alta resistencia (25KN)",
  "Comodidad en suspension",
  "Materiales de uso industrial",
];

export function HarnessesSection() {
  return (
    <section id="arneses" className="py-24 bg-secondary">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll variant="fade-down" duration={600}>
          <h2 className="font-display text-4xl sm:text-5xl text-foreground tracking-wide mb-12 text-center">
            Arneses certificados para operacion profesional
          </h2>
        </AnimateOnScroll>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimateOnScroll variant="fade-right" delay={200}>
            <div className="bg-background/50 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <ShieldCheck className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-display text-2xl text-foreground">
                  Arnés Full Body
                </h3>
              </div>
              <ul className="space-y-3">
                {fullBodyFeatures.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <ShieldCheck className="h-4 w-4 text-primary flex-shrink-0 mt-1" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll variant="fade-left" delay={300}>
            <div className="bg-background/50 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Footprints className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-display text-2xl text-foreground">
                  Arnés de Tobillos
                </h3>
              </div>
              <ul className="space-y-3">
                {ankleFeatures.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Footprints className="h-4 w-4 text-primary flex-shrink-0 mt-1" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
