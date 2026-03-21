import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { Hero } from "@/components/hero";
import { AuthoritySection } from "@/components/authority-section";
import { ValuePropositionSection } from "@/components/value-proposition-section";
import { RopesSection } from "@/components/ropes-section";
import { HarnessesSection } from "@/components/harnesses-section";
import { HardwareSection } from "@/components/hardware-section";
import { ComplementarySection } from "@/components/complementary-section";
import { DiagonalDivider } from "@/components/diagonal-divider";

export const metadata = {
  title: "Equipos para Bungee Jumping | Colombia Bungee",
  description:
    "Venta de equipos profesionales de Bungee Jumping: sogas, arneses y accesorios de alta calidad",
};

export default function EquiposBungeeJumping() {
  return (
    <main>
      <Navbar bannerText="Comprar productos ahora" />
      <Hero
        subtitle="Equipos profesionales para Bungee Jumping"
        title="Opera Bungee Jumping real con equipo certificado y probado en campo"
        stats={[
          {
            prefix: "+",
            end: 100,
            suffix: "K",
            label: "Saltos comerciales",
            duration: 2000,
          },
          {
            prefix: "+",
            end: 18,
            label: "Anios de experiencia",
            duration: 2500,
          },
          { end: 0, label: "Accidentes", duration: 1800 },
          { end: 0, label: "Intermediarios", duration: 2200 },
        ]}
        titleSize="lg"
        scrollLink="#productos"
        scrollLabel="Ver productos"
      />
      <AuthoritySection />
      <DiagonalDivider
        fromColor="hsl(var(--background))"
        toColor="hsl(var(--secondary))"
        direction="right"
      />
      <ValuePropositionSection />
      <DiagonalDivider
        fromColor="hsl(var(--secondary))"
        toColor="hsl(var(--background))"
        direction="left"
      />
      <RopesSection />
      <DiagonalDivider
        fromColor="hsl(var(--background))"
        toColor="hsl(var(--secondary))"
        direction="right"
      />
      <HarnessesSection />
      <DiagonalDivider
        fromColor="hsl(var(--secondary))"
        toColor="hsl(var(--background))"
        direction="left"
      />
      <HardwareSection />
      <ComplementarySection />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
