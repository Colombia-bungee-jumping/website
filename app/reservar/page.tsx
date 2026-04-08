import { Suspense } from "react";
import { Navbar } from "@/components/navbar";
import { BookingForm } from "@/components/booking-form";
import { WhatsAppButton } from "@/components/whatsapp-button";

export default function ReservarPage() {
  return (
    <main>
      <Navbar showBanner={false} />
      <Suspense fallback={<div>Loading...</div>}>
        <BookingForm />
      </Suspense>
      <WhatsAppButton />
    </main>
  );
}
