import { NextResponse } from "next/server";
import { completeBooking } from "@/lib/payment";
import { fetchTransactionById, verifyEventSignature } from "@/lib/wompi";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const checksum = req.headers.get("x-event-checksum");

    if (!verifyEventSignature(body, checksum)) {
      return NextResponse.json({ received: false }, { status: 401 });
    }

    const event = body.event;

    if (event !== "transaction.updated") {
      return NextResponse.json({ received: true });
    }

    const incomingTransaction = body.data?.transaction;

    if (!incomingTransaction?.id || !incomingTransaction?.reference) {
      return NextResponse.json({ received: false }, { status: 400 });
    }

    const transaction = await fetchTransactionById(incomingTransaction.id);
    await completeBooking(transaction.reference, transaction);

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error("WOMPI WEBHOOK ERROR:", error);
    return NextResponse.json({ received: false }, { status: 400 });
  }
}
