import { NextResponse } from "next/server";
import { completeBooking } from "@/lib/payment";
import { supabase } from "@/lib/supabase";
import { fetchTransactionById } from "@/lib/wompi";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const reference = searchParams.get("reference");
  const transactionId = searchParams.get("transactionId");

  if (transactionId) {
    try {
      const transaction = await fetchTransactionById(transactionId);

      if (["APPROVED", "DECLINED", "VOIDED", "ERROR"].includes(transaction.status)) {
        await completeBooking(transaction.reference, transaction);
      }

      return NextResponse.json({
        status: transaction.status,
        reference: transaction.reference,
        transactionId: transaction.id,
      });
    } catch (error) {
      return NextResponse.json(
        {
          error:
            error instanceof Error
              ? error.message
              : "No se pudo consultar el pago",
        },
        { status: 400 },
      );
    }
  }

  if (!reference) {
    return NextResponse.json(
      { error: "Debes indicar una referencia o transactionId" },
      { status: 400 },
    );
  }

  const { data } = await supabase
    .from("bookings")
    .select("status")
    .eq("reference", reference)
    .single();

  return NextResponse.json({
    status: data?.status || "pending",
  });
}
