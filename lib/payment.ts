import { supabase } from "./supabase";
import { sendBookingEmail } from "./email";

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

export async function completeBooking(reference: string, transaction: any) {
  const booking = await getBooking(reference);

  if (!booking) return;

  await updateBookingStatus(reference, transaction.status, transaction.id);

  if (transaction.status === "APPROVED") {
    await sendBookingEmail(booking);
  }
}
