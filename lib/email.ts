import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const defaultFromEmail = process.env.RESEND_FROM_EMAIL ?? "onboarding@resend.dev";

export async function sendBookingEmail(booking: any) {
  const { error } = await resend.emails.send({
    from: `Colombia Bungee Jumping <${defaultFromEmail}>`,
    to: booking.email,
    subject: "Reserva confirmada",
    html: `
      <h1>Reserva confirmada</h1>
      <p>Nombre: ${booking.nombre}</p>
      <p>Fecha: ${booking.fecha}</p>
      <p>Total: ${booking.amount} COP</p>
    `,
  });

  if (error) {
    throw new Error(`No se pudo enviar el correo de confirmación: ${error.message}`);
  }
}
