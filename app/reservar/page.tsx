import { Navbar } from "@/components/navbar"
import { BookingForm } from "@/components/booking-form"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function ReservarPage() {
  return (
    <main>
      <Navbar />
      <BookingForm />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
