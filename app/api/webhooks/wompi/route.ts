import { NextResponse } from "next/server";
import { completeBooking } from "@/lib/payment";

export async function POST(req: Request) {
  const body = await req.json();

  const event = body.event;

  if (event !== "transaction.updated") {
    return NextResponse.json({ received: true });
  }

  const transaction = body.data.transaction;

  const reference = transaction.reference;

  await completeBooking(reference, transaction);

  return NextResponse.json({ received: true });
}
