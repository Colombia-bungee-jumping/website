import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export const metadata = {
  title: "Estructuras y Torres para Bungee | Colombia Bungee",
  description: "Diseño e instalación de estructuras y torres profesionales para saltos de Bungee Jumping",
}

export default function EstructurasTorresBungee() {
  return (
    <main>
      <Navbar />
      <section id="inicio" className="min-h-screen pt-24 flex items-center justify-center bg-gradient-to-b from-primary/10 to-background">
        <div className="text-center px-4">
          <h1 className="font-display text-4xl md:text-6xl uppercase tracking-widest mb-4">
            Estructuras y Torres para Bungee
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Diseño e instalación de estructuras profesionales para saltos de Bungee Jumping
          </p>
        </div>
      </section>
      <Footer />
      <WhatsAppButton />
    </main>
  )
}