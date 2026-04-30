import { createHash, timingSafeEqual } from "node:crypto";

function sha256Hex(input: string) {
  return createHash("sha256").update(input).digest("hex");
}

export async function generateSignature(
  reference: string,
  amount: number,
  currency: string,
) {
  const integrity = process.env.WOMPI_INTEGRITY_SECRET!;

  const data = `${reference}${amount}${currency}${integrity}`;
  return sha256Hex(data);
}

function getValueByPath(data: unknown, path: string) {
  return path.split(".").reduce<unknown>((current, key) => {
    if (!current || typeof current !== "object") {
      return undefined;
    }

    return (current as Record<string, unknown>)[key];
  }, data);
}

export function verifyEventSignature(
  eventBody: Record<string, unknown>,
  checksum: string | null,
) {
  const eventsSecret =
    process.env.WOMPI_EVENTS_SECRET ?? process.env.WOMPI_EVENTS_KEY;
  const signature = eventBody.signature as
    | { properties?: string[]; checksum?: string }
    | undefined;
  const timestamp = eventBody.timestamp;
  const checksumToValidate = checksum ?? signature?.checksum ?? null;

  if (!eventsSecret || !checksumToValidate || !signature?.properties || !timestamp) {
    return false;
  }

  const concatenated = signature.properties
    .map((property) => getValueByPath(eventBody.data, property))
    .map((value) => (value == null ? "" : String(value)))
    .join("");

  const expected = sha256Hex(
    `${concatenated}${String(timestamp)}${eventsSecret}`,
  ).toUpperCase();
  const received = checksumToValidate.toUpperCase();

  if (expected.length !== received.length) {
    return false;
  }

  return timingSafeEqual(Buffer.from(expected), Buffer.from(received));
}

export interface WompiTransaction {
  id: string;
  reference: string;
  status: string;
  amount_in_cents: number;
  currency: string;
  payment_method_type?: string;
  status_message?: string;
}

export async function fetchTransactionById(transactionId: string) {
  const publicKey = process.env.WOMPI_PUBLIC_KEY;
  const baseUrl = publicKey?.startsWith("pub_test_")
    ? "https://sandbox.wompi.co/v1"
    : "https://production.wompi.co/v1";

  if (!publicKey) {
    throw new Error("WOMPI_PUBLIC_KEY no está configurada");
  }

  const response = await fetch(
    `${baseUrl}/transactions/${transactionId}`,
    {
      headers: {
        Authorization: `Bearer ${publicKey}`,
      },
      cache: "no-store",
    },
  );

  if (!response.ok) {
    throw new Error("No se pudo consultar la transacción en Wompi");
  }

  const result = await response.json();
  return result.data as WompiTransaction;
}
