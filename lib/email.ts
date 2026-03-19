import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendBookingEmail(booking: any) {
  await resend.emails.send({
    from: "Bungee <noreply@bungee.com>",
    to: booking.email,
    subject: "Reserva confirmada",
    html: `
      <h1>Reserva confirmada</h1>
      <p>Nombre: ${booking.nombre}</p>
      <p>Fecha: ${booking.fecha}</p>
      <p>Total: ${booking.amount} COP</p>
    `,
  });
}
