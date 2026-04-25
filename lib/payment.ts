import { supabase } from "./supabase";
import { sendBookingEmail } from "./email";
import type { WompiTransaction } from "./wompi";

export async function createBooking(data: any) {
  const { error } = await supabase.from("bookings").insert(data);

  if (error) {
    console.error("SUPABASE INSERT ERROR:", error);
    throw new Error(error.message);
  }
}

export async function updateBookingStatus(
  reference: string,
  status: string,
  transactionId?: string,
) {
  const { error } = await supabase
    .from("bookings")
    .update({
      status,
      wompi_transaction_id: transactionId,
    })
    .eq("reference", reference);

  if (error) {
    throw new Error("Error updating booking");
  }
}

export async function getBooking(reference: string) {
  const { data } = await supabase
    .from("bookings")
    .select("*")
    .eq("reference", reference)
    .single();

  return data;
}

export async function completeBooking(
  reference: string,
  transaction: WompiTransaction,
) {
  const booking = await getBooking(reference);

  if (!booking) return;

  if (
    booking.amount !== transaction.amount_in_cents ||
    booking.currency !== transaction.currency ||
    reference !== transaction.reference
  ) {
    throw new Error("La transacción no coincide con la reserva registrada");
  }

  await updateBookingStatus(reference, transaction.status, transaction.id);

  if (transaction.status === "APPROVED" && booking.status !== "APPROVED") {
    await sendBookingEmail(booking);
  }
}
