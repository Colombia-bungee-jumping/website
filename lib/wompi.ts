import crypto from "crypto";

export async function generateSignature(
  reference: string,
  amount: number,
  currency: string,
) {
  const integrity = process.env.WOMPI_INTEGRITY_SECRET!;

  const data = `${reference}${amount}${currency}${integrity}`;

  const encondedText = new TextEncoder().encode(data);
  const hashBuffer = await crypto.subtle.digest("SHA-256", encondedText);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");

  return hashHex;
}
