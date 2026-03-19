"use client";

import { useEffect, useRef } from "react";

interface Props {
  publicKey: string;
  amountInCents: number;
  reference: string;
  currency: string;
  signature: string;
}

export default function WompiPaymentButton({
  publicKey,
  amountInCents,
  reference,
  currency,
  signature,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    ref.current.innerHTML = "";

    const script = document.createElement("script");

    script.src = "https://checkout.wompi.co/widget.js";

    script.setAttribute("data-render", "button");
    script.setAttribute("data-public-key", publicKey);
    script.setAttribute("data-currency", currency);
    script.setAttribute("data-amount-in-cents", amountInCents.toString());
    script.setAttribute("data-reference", reference);
    script.setAttribute("data-signature:integrity", signature);

    script.setAttribute(
      "data-redirect-url",
      `${process.env.NEXT_PUBLIC_APP_URL}/payment/result`,
    );

    ref.current.appendChild(script);
  }, []);

  return <div ref={ref} className="flex-1" />;
}
