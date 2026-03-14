import { NextResponse } from "next/server";
import { randomUUID } from "crypto";
import { createBooking } from "@/lib/payment";
import { generateSignature } from "@/lib/wompi";

export async function POST(req: Request) {
  const body = await req.json();

  const reference = randomUUID();

  await createBooking({
    reference,
    amount: body.amount,
    currency: "COP",
    nombre: body.nombre,
    telefono: body.telefono,
    email: body.email,
    fecha: body.fecha,
    cart: body.cart,
    status: "pending",
  });

  const signature = generateSignature(reference, body.amount, "COP");

  return NextResponse.json({
    reference,
    signature,
    publicKey: process.env.WOMPI_PUBLIC_KEY,
  });
}
