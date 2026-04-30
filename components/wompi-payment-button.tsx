"use client";

import { useEffect, useRef } from "react";

interface Props {
  publicKey: string;
  amountInCents: string;
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
  const appUrl = process.env.NEXT_PUBLIC_APP_URL;
  const shouldUseRedirectUrl =
    appUrl &&
    !appUrl.includes("localhost") &&
    !appUrl.includes("127.0.0.1");

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

    if (shouldUseRedirectUrl) {
      script.setAttribute("data-redirect-url", `${appUrl}/payment/result`);
    }

    ref.current.appendChild(script);
  }, [amountInCents, appUrl, currency, publicKey, reference, shouldUseRedirectUrl, signature]);

  return <div ref={ref} className="flex-1" />;
}
