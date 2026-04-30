import { Resend } from "resend";
import { format, parse } from "date-fns";
import { es } from "date-fns/locale";
import { company } from "@/config/company";
import { services } from "@/config/services";
import { formatCurrency } from "@/lib/utils";

const resend = new Resend(process.env.RESEND_API_KEY);
const defaultFromEmail = process.env.RESEND_FROM_EMAIL ?? "onboarding@resend.dev";
const bookingDateFormat = "MM/dd/yyyy hh:mm aa";

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function formatBookingDateParts(fecha: string) {
  const parsedDate = parse(fecha, bookingDateFormat, new Date());

  if (Number.isNaN(parsedDate.getTime())) {
    return {
      fechaReserva: fecha,
      horaReserva: "",
    };
  }

  return {
    fechaReserva: format(parsedDate, "EEEE, d 'de' MMMM 'de' yyyy", { locale: es }),
    horaReserva: format(parsedDate, "hh:mm aa", { locale: es }),
  };
}

function buildBookingItems(cart: Array<{ experienceId: string; quantity: number }> = []) {
  return cart
    .map((item) => {
      const service = services.find((entry) => entry.id === item.experienceId);

      if (!service) {
        return null;
      }

      const unitPrice = Number(service.price);
      const lineTotal = unitPrice * item.quantity;

      return {
        nombre: service.title,
        cantidad: item.quantity,
        precio: formatCurrency(lineTotal),
      };
    })
    .filter((item): item is { nombre: string; cantidad: number; precio: string } => item !== null);
}

function buildBookingEmailHtml(booking: any) {
  const items = buildBookingItems(booking.cart);
  const { fechaReserva, horaReserva } = formatBookingDateParts(String(booking.fecha ?? ""));
  const businessPhone = company.phone.replace(/\D/g, "");
  const logoBaseUrl = process.env.NEXT_PUBLIC_APP_URL?.replace(/\/$/, "");
  const logoUrl = logoBaseUrl ? `${logoBaseUrl}/logo.svg` : null;
  const totalAmount = Number(booking.amount ?? 0) / 100;

  const itemsRows = items
    .map(
      (item) => `
        <tr>
          <td style="padding:10px; border-bottom:1px solid #e5e7eb;">${escapeHtml(item.nombre)}</td>
          <td align="center" style="padding:10px; border-bottom:1px solid #e5e7eb;">${item.cantidad}</td>
          <td align="right" style="padding:10px; border-bottom:1px solid #e5e7eb;">${escapeHtml(item.precio)}</td>
        </tr>
      `,
    )
    .join("");

  return `
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <title>Compra aprobada</title>
    </head>
    <body style="margin:0; padding:0; background-color:#f4f4f4; font-family: Arial, sans-serif;">
      <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f4f4f4; padding:20px 0;">
        <tr>
          <td align="center">
            <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff; border-radius:8px; overflow:hidden;">
              <tr>
                <td style="background:#0f172a; padding:20px; text-align:center; color:#ffffff;">
                  ${
                    logoUrl
                      ? `<img src="${logoUrl}" alt="Colombia Bungee Jumping" style="display:block; margin:0 auto 16px; max-width:140px; height:auto;" />`
                      : ""
                  }
                  <h1 style="margin:0; font-size:22px;">Reserva Confirmada 🎉</h1>
                  <p style="margin:5px 0 0; font-size:14px;">Tu experiencia de bungee está lista</p>
                </td>
              </tr>
              <tr>
                <td style="padding:20px;">
                  <p style="margin:0 0 10px;">Hola <strong>${escapeHtml(String(booking.nombre ?? ""))}</strong>,</p>
                  <p style="margin:0 0 20px;">
                    Tu pago fue aprobado correctamente. Aquí tienes el resumen de tu reserva:
                  </p>

                  <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse; margin-bottom:20px;">
                    <thead>
                      <tr style="background:#f1f5f9;">
                        <th align="left" style="padding:10px; font-size:13px;">Servicio</th>
                        <th align="center" style="padding:10px; font-size:13px;">Cantidad</th>
                        <th align="right" style="padding:10px; font-size:13px;">Precio</th>
                      </tr>
                    </thead>
                    <tbody>
                      ${itemsRows}
                    </tbody>
                  </table>

                  <table width="100%" cellpadding="0" cellspacing="0">
                    <tr>
                      <td align="right" style="padding:10px; font-size:16px;">
                        <strong>Total: ${escapeHtml(formatCurrency(totalAmount))}</strong>
                      </td>
                    </tr>
                  </table>

                  <p style="margin-top:20px; font-size:14px; color:#374151;">
                    📍 Fecha: ${escapeHtml(fechaReserva)}<br/>
                    ⏰ Hora: ${escapeHtml(horaReserva)}<br/>
                    📌 Lugar: ${escapeHtml(company.location)}
                  </p>
                </td>
              </tr>
              <tr>
                <td align="center" style="padding:20px;">
                  <a href="https://wa.me/${businessPhone}?text=Hola,%20tengo%20una%20reserva%20de%20bungee"
                    style="background:#25D366; color:#ffffff; text-decoration:none; padding:12px 20px; border-radius:6px; display:inline-block; font-weight:bold;">
                    Contactar por WhatsApp
                  </a>
                </td>
              </tr>
              <tr>
                <td style="background:#f9fafb; padding:15px; text-align:center; font-size:12px; color:#6b7280;">
                  <p style="margin:0;">
                    Si tienes dudas, responde este correo o contáctanos por WhatsApp.
                  </p>
                  <p style="margin:5px 0 0;">
                    © ${new Date().getFullYear()} ${escapeHtml(company.name)}
                  </p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </body>
    </html>
  `;
}

export async function sendBookingEmail(booking: any) {
  const { error } = await resend.emails.send({
    from: `Colombia Bungee Jumping <${defaultFromEmail}>`,
    to: booking.email,
    subject: "Reserva confirmada",
    html: buildBookingEmailHtml(booking),
  });

  if (error) {
    throw new Error(`No se pudo enviar el correo de confirmación: ${error.message}`);
  }
}
