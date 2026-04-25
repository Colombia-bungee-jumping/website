import { NextResponse } from "next/server";
import { randomUUID } from "crypto";
import { createBooking } from "@/lib/payment";
import { calculateBookingTotal, parseBookingPayload } from "@/lib/booking";
import { generateSignature } from "@/lib/wompi";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const payload = parseBookingPayload(body);
    const { total, normalizedCart } = calculateBookingTotal(payload.cart);
    const amountInCents = total * 100;
    const reference = randomUUID();

    await createBooking({
      reference,
      amount: amountInCents,
      currency: "COP",
      nombre: payload.nombre,
      telefono: payload.telefono,
      email: payload.email,
      fecha: payload.fecha,
      cart: normalizedCart,
      status: "pending",
    });

    const signature = await generateSignature(reference, amountInCents, "COP");

    return NextResponse.json({
      reference,
      signature,
      amountInCents,
      publicKey: process.env.WOMPI_PUBLIC_KEY,
    });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "No se pudo crear el checkout";

    return NextResponse.json({ error: message }, { status: 400 });
  }
}
