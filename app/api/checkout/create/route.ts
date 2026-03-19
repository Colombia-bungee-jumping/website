import { NextResponse } from "next/server";
import { randomUUID } from "crypto";
import { createBooking } from "@/lib/payment";
import { generateSignature } from "@/lib/wompi";

export async function POST(req: Request) {
  const body = await req.json();
  const amountInCents = body.amount * 100;
  const reference = randomUUID();

  await createBooking({
    reference,
    amount: amountInCents,
    currency: "COP",
    nombre: body.nombre,
    telefono: body.telefono,
    email: body.email,
    fecha: body.fecha,
    cart: body.cart,
    status: "pending",
  });

  const signature = await generateSignature(reference, amountInCents, "COP");

  return NextResponse.json({
    reference,
    signature,
    amountInCents,
    publicKey: process.env.WOMPI_PUBLIC_KEY,
  });
}
