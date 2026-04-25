"use client"

import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Experiences } from "@/components/experiences"
import { Safety } from "@/components/safety"
import { Testimonials } from "@/components/testimonials"
import { Location } from "@/components/location"
import { Footer } from "@/components/footer"
import { DiagonalDivider } from "@/components/diagonal-divider"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { useLanguage } from "@/components/language-provider"

export default function Home() {
  const { translations } = useLanguage()

  return (
    <main>
      <Navbar />
      <Hero
        subtitle={translations.home.hero.subtitle}
        title={translations.home.hero.title}
        scrollLabel={translations.home.hero.scrollLabel}
      />
      <Experiences />
      <DiagonalDivider
        fromColor="hsl(var(--background))"
        toColor="hsl(var(--secondary))"
        direction="right"
      />
      <Safety />
      <DiagonalDivider
        fromColor="hsl(var(--secondary))"
        toColor="hsl(var(--background))"
        direction="left"
      />
      <Testimonials />
      <DiagonalDivider
        fromColor="hsl(var(--background))"
        toColor="hsl(var(--secondary))"
        direction="right"
      />
      <Location />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
