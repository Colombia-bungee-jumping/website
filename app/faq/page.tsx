import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero-nosotros"
import { FAQ } from "@/components/faq"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function FAQPage() {
  return (
    <main>
      <Navbar />
      <Hero 
        title="PREGUNTAS"
        subtitle="Respuestas a las dudas más frecuentes sobre tu experiencia de bungee"
        badge="FAQ"
      />
      <FAQ />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
