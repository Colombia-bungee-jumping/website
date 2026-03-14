import crypto from "crypto";

export function generateSignature(
  reference: string,
  amount: number,
  currency: string,
) {
  const integrity = process.env.WOMPI_INTEGRITY_SECRET!;

  const data = `${reference}${amount}${currency}${integrity}`;

  return crypto.createHash("sha256").update(data).digest("hex");
}
