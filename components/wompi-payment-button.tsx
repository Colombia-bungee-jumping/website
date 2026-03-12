"use client";

import { useEffect, useRef } from "react";

interface WompiPaymentButtonProps {
  publicKey: string;
  amountInCents: number;
  reference: string;
  currency: string;
  signature: string;
}

const WompiPaymentButton = ({
  publicKey,
  amountInCents,
  reference,
  currency,
  signature,
}: WompiPaymentButtonProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    if (!containerRef.current) return;

    const script = document.createElement("script");
    script.src = "https://checkout.wompi.co/widget.js";

    script.setAttribute("data-render", "button");
    script.setAttribute("data-public-key", publicKey);
    script.setAttribute("data-currency", currency);
    script.setAttribute("data-amount-in-cents", amountInCents.toString());
    script.setAttribute("data-reference", reference);
    script.setAttribute("data-signature:integrity", signature);
    script.setAttribute("data-button-text", "Pagar ahora");

    containerRef.current.appendChild(script);
  }, []);

  return <div ref={containerRef} className="flex-1" />;
};

export default WompiPaymentButton;
