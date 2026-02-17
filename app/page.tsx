import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Experiences } from "@/components/experiences"
import { About } from "@/components/about"
import { Safety } from "@/components/safety"
import { Testimonials } from "@/components/testimonials"
import { Location } from "@/components/location"
import { BookingForm } from "@/components/booking-form"
import { Footer } from "@/components/footer"
import { DiagonalDivider } from "@/components/diagonal-divider"

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <DiagonalDivider
        fromColor="hsl(var(--background))"
        toColor="hsl(var(--secondary))"
        direction="right"
      />
      <Experiences />
      <DiagonalDivider
        fromColor="hsl(var(--secondary))"
        toColor="hsl(var(--background))"
        direction="left"
      />
      <About />
      <DiagonalDivider
        fromColor="hsl(var(--secondary))"
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
      <Location />
      <DiagonalDivider
        fromColor="hsl(var(--background))"
        toColor="hsl(var(--background))"
        direction="left"
      />
      <BookingForm />
      <Footer />
    </main>
  )
}
