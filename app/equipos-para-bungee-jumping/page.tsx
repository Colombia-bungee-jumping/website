import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export const metadata = {
  title: "Equipos para Bungee Jumping | Colombia Bungee",
  description: "Venta de equipos profesionales de Bungee Jumping: sogas, arneses y accesorios de alta calidad",
}

export default function EquiposBungeeJumping() {
  return (
    <main>
      <Navbar />
      <section id="inicio" className="min-h-screen pt-24 flex items-center justify-center bg-gradient-to-b from-primary/10 to-background">
        <div className="text-center px-4">
          <h1 className="font-display text-4xl md:text-6xl uppercase tracking-widest mb-4">
            Equipos para Bungee Jumping
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Venta de equipos profesionales: sogas, arneses y accesorios de alta calidad
          </p>
        </div>
      </section>
      <Footer />
      <WhatsAppButton />
    </main>
  )
}