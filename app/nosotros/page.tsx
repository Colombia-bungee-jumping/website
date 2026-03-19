import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero-nosotros"
import { About } from "@/components/about"
import { MissionVision } from "@/components/mission-vision"
import { Team } from "@/components/team"
import { VolunteerPrograms } from "@/components/volunteer-programs"
import { Footer } from "@/components/footer"
import { DiagonalDivider } from "@/components/diagonal-divider"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function Nosotros() {
  return (
    <main>
      <Navbar />
      <Hero 
        title="NOSOTROS" 
        subtitle="Un equipo apasionado por la adrenalina y la seguridad"
        badge="Conócenos"
      />
      <About />
      <DiagonalDivider
        fromColor="hsl(var(--secondary))"
        toColor="hsl(var(--background))"
        direction="right"
      />
      <MissionVision />
      <DiagonalDivider
        fromColor="hsl(var(--background))"
        toColor="hsl(var(--secondary))"
        direction="left"
      />
      <Team />
      <DiagonalDivider
        fromColor="hsl(var(--secondary))"
        toColor="hsl(var(--background))"
        direction="right"
      />
      <VolunteerPrograms />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
