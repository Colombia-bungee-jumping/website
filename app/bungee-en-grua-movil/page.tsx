import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export const metadata = {
  title: "Bungee en Grúa Móvil | Colombia Bungee",
  description: "Experiencia única de Bungee Jumping en grúa móvil. ¡Vive la adrenalina desde las alturas!",
}

export default function BungeeGruaMovil() {
  return (
    <main>
      <Navbar />
      <section id="inicio" className="min-h-screen pt-24 flex items-center justify-center bg-gradient-to-b from-primary/10 to-background">
        <div className="text-center px-4">
          <h1 className="font-display text-4xl md:text-6xl uppercase tracking-widest mb-4">
            Bungee en Grúa Móvil
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Vive la adrenalina del Bungee Jumping desde las alturas con nuestra grúa móvil
          </p>
        </div>
      </section>
      <Footer />
      <WhatsAppButton />
    </main>
  )
}