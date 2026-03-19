"use client";

import { useEffect, useState } from "react";

export default function PaymentResult() {
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const reference = params.get("reference");

    fetch(`/api/payment/status?reference=${reference}`)
      .then((r) => r.json())
      .then((data) => setStatus(data.status));
  }, []);

  if (status === "loading") return <p>Verificando pago...</p>;

  if (status === "approved") return <h1>Pago aprobado ✅</h1>;

  return <h1>Pago rechazado ❌</h1>;
}
