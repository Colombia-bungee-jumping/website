"use client";

import Image from "next/image";

export function WhatsAppButton() {
  const whatsappUrl = process.env.NEXT_PUBLIC_WHATSAPP_URL;

  if (!whatsappUrl) return null;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] rounded-full shadow-lg hover:bg-[#128C7E] transition-all duration-300 focus:outline-none focus:ring-0 focus:ring-offset-0"
      aria-label="Contactar por WhatsApp"
    >
      <Image
        src="/icons/logo-whatsapp.svg"
        alt="WhatsApp"
        width={28}
        height={28}
        className="w-7 h-7 invert brightness-0"
      />
    </a>
  );
}
