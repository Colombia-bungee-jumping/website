import { isBefore, isValid, parse, startOfDay } from "date-fns";
import { z } from "zod";
import { services } from "@/config/services";

const phoneRegex = /^\+\d{7,15}$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const bookingDateFormat = "MM/dd/yyyy hh:mm aa";

const cartItemSchema = z.object({
  experienceId: z.string().min(1),
  quantity: z.number().int().min(1).max(20),
});

const bookingPayloadSchema = z.object({
  nombre: z.string().trim().min(5).max(120),
  telefono: z
    .string()
    .trim()
    .regex(phoneRegex, "Ingresa un número de teléfono válido"),
  email: z
    .string()
    .trim()
    .toLowerCase()
    .regex(emailRegex, "Ingresa un correo electrónico válido"),
  fecha: z.string().trim().min(1),
  cart: z.array(cartItemSchema).min(1),
});

export type BookingPayload = z.infer<typeof bookingPayloadSchema>;

function validateBookingDate(fecha: string) {
  const parsedDate = parse(fecha, bookingDateFormat, new Date());

  if (!isValid(parsedDate)) {
    throw new Error("La fecha seleccionada no es válida");
  }

  if (isBefore(parsedDate, startOfDay(new Date()))) {
    throw new Error("La fecha seleccionada no puede estar en el pasado");
  }

  if (parsedDate.getDay() === 3) {
    throw new Error("No hay reservas disponibles para el día seleccionado");
  }
}

export function parseBookingPayload(input: unknown): BookingPayload {
  const payload = bookingPayloadSchema.parse(input);
  validateBookingDate(payload.fecha);
  return payload;
}

export function calculateBookingTotal(
  cart: BookingPayload["cart"],
): { total: number; normalizedCart: BookingPayload["cart"] } {
  const quantities = new Map<string, number>();

  for (const item of cart) {
    const service = services.find((entry) => entry.id === item.experienceId);

    if (!service) {
      throw new Error(`Experiencia inválida: ${item.experienceId}`);
    }

    quantities.set(
      item.experienceId,
      (quantities.get(item.experienceId) ?? 0) + item.quantity,
    );
  }

  const normalizedCart = Array.from(quantities.entries()).map(
    ([experienceId, quantity]) => ({
      experienceId,
      quantity,
    }),
  );

  const total = normalizedCart.reduce((sum, item) => {
    const service = services.find((entry) => entry.id === item.experienceId);
    return sum + Number(service?.price ?? 0) * item.quantity;
  }, 0);

  if (total <= 0) {
    throw new Error("La reserva debe incluir al menos una experiencia válida");
  }

  return { total, normalizedCart };
}
