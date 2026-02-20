import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Safety } from "@/components/safety"
import { Testimonials } from "@/components/testimonials"
import { FAQ } from "@/components/faq"
import { Location } from "@/components/location"
import { BookingForm } from "@/components/booking-form"
import { Footer } from "@/components/footer"
import { DiagonalDivider } from "@/components/diagonal-divider"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <DiagonalDivider
        fromColor="hsl(var(--background))"
        toColor="hsl(var(--background))"
        direction="right"
      />
      <Safety />
      <DiagonalDivider
        fromColor="hsl(var(--background))"
        toColor="hsl(var(--secondary))"
        direction="left"
      />
      <Testimonials />
      <DiagonalDivider
        fromColor="hsl(var(--secondary))"
        toColor="hsl(var(--background))"
        direction="right"
      />
      <FAQ />
      <DiagonalDivider
        fromColor="hsl(var(--background))"
        toColor="hsl(var(--secondary))"
        direction="left"
      />
      <Location />
      <DiagonalDivider
        fromColor="hsl(var(--secondary))"
        toColor="hsl(var(--background))"
        direction="right"
      />
      <BookingForm />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
