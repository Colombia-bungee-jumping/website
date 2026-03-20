"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { ValueProposition } from "@/app/bungee-en-grua-movil/value-proposition";
import { Differentiators } from "@/app/bungee-en-grua-movil/differentiators";
import { Experience } from "@/app/bungee-en-grua-movil/experience";
import { TechnicalSpecs } from "@/app/bungee-en-grua-movil/technical-specs";
import { WhatsIncluded } from "@/app/bungee-en-grua-movil/whats-included";
import { SocialProof } from "@/app/bungee-en-grua-movil/social-proof";
import { DiagonalDivider } from "@/components/diagonal-divider";
import { Hero } from "@/components/hero";

export default function BungeeGruaMovil() {
  return (
    <main>
      <Navbar showBanner={true} bannerText="Cotizar para tu evento" bannerHref="https://wa.me/573007709700" bannerNewTab={true} />
      <Hero
        subtitle="Bungee Móvil en Colombia"
        title="SALTA DONDE NADIE MÁS PUEDE"
        imageSrc="/images/jump-grua.jpg"
        imageAlt="Bungee jumping desde grúa móvil"
        scrollLink="#propuesta"
        scrollLabel="Ver más contenido"
        stats={[
          { end: 50, suffix: "m", label: "Altura maxima", duration: 2000 },
          { end: 30, suffix: "x30m", label: "Espacio requerido", duration: 2500 },
          { end: 2, suffix: "hrs", label: "Instalacion", duration: 1800 },
        ]}
      />
      <ValueProposition />
      <DiagonalDivider
        fromColor="hsl(var(--background))"
        toColor="hsl(var(--secondary))"
        direction="right"
      />
      <Differentiators />
      <DiagonalDivider
        fromColor="hsl(var(--secondary))"
        toColor="hsl(var(--background))"
        direction="left"
      />
      <Experience />
      <DiagonalDivider
        fromColor="hsl(var(--background))"
        toColor="hsl(var(--secondary))"
        direction="right"
      />
      <TechnicalSpecs />
      <DiagonalDivider
        fromColor="hsl(var(--secondary))"
        toColor="hsl(var(--background))"
        direction="left"
      />
      <WhatsIncluded />
      <DiagonalDivider
        fromColor="hsl(var(--background))"
        toColor="hsl(var(--secondary))"
        direction="right"
      />
      <SocialProof />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
