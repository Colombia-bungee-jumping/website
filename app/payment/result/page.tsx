"use client";

import { Suspense, useEffect, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { CheckCircle2, CircleAlert, LoaderCircle, TimerReset } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type PaymentStatus = "APPROVED" | "DECLINED" | "VOIDED" | "ERROR" | "PENDING";

const statusConfig: Record<
  PaymentStatus,
  {
    title: string;
    description: string;
    icon: typeof CheckCircle2;
    className: string;
  }
> = {
  APPROVED: {
    title: "Pago aprobado",
    description: "La reserva quedó registrada correctamente y ya estamos procesando tu solicitud.",
    icon: CheckCircle2,
    className: "text-primary",
  },
  DECLINED: {
    title: "Pago rechazado",
    description: "Wompi rechazó la transacción. Puedes volver a intentar con otro medio de pago.",
    icon: CircleAlert,
    className: "text-red-500",
  },
  VOIDED: {
    title: "Pago anulado",
    description: "La transacción fue anulada. Si necesitas ayuda, contacta al equipo de soporte.",
    icon: CircleAlert,
    className: "text-amber-500",
  },
  ERROR: {
    title: "Error en el pago",
    description: "Hubo un problema procesando la transacción. Intenta nuevamente en unos minutos.",
    icon: CircleAlert,
    className: "text-red-500",
  },
  PENDING: {
    title: "Pago en proceso",
    description: "Todavía estamos esperando la confirmación final de Wompi. Esta página se actualiza sola.",
    icon: TimerReset,
    className: "text-foreground",
  },
};

function PaymentResultFallback() {
  return (
    <section className="min-h-screen bg-background px-4 py-24">
      <div className="mx-auto max-w-2xl">
        <Card className="bg-card border-border">
          <CardContent className="p-10 text-center">
            <div className="flex flex-col items-center gap-4">
              <LoaderCircle className="h-10 w-10 animate-spin text-primary" />
              <p className="text-muted-foreground">Consultando el estado del pago...</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

function PaymentResultContent() {
  const searchParams = useSearchParams();
  const transactionId = searchParams.get("id");
  const [status, setStatus] = useState<PaymentStatus>("PENDING");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!transactionId) {
      setError("No encontramos el identificador de la transacción.");
      setLoading(false);
      return;
    }

    let active = true;
    let intervalId: ReturnType<typeof setInterval> | undefined;

    const loadStatus = async () => {
      try {
        const response = await fetch(
          `/api/payment/status?transactionId=${encodeURIComponent(transactionId)}`,
          { cache: "no-store" },
        );
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.error || "No se pudo consultar el estado del pago");
        }

        if (!active) return;

        setStatus(data.status ?? "PENDING");
        setError(null);

        if (["APPROVED", "DECLINED", "VOIDED", "ERROR"].includes(data.status)) {
          if (intervalId) clearInterval(intervalId);
        }
      } catch (fetchError) {
        if (!active) return;
        setError(
          fetchError instanceof Error
            ? fetchError.message
            : "No se pudo consultar el estado del pago",
        );
      } finally {
        if (active) {
          setLoading(false);
        }
      }
    };

    void loadStatus();
    intervalId = setInterval(() => {
      void loadStatus();
    }, 5000);

    return () => {
      active = false;
      if (intervalId) clearInterval(intervalId);
    };
  }, [transactionId]);

  const config = statusConfig[status];
  const Icon = config.icon;

  return (
    <section className="min-h-screen bg-background px-4 py-24">
      <div className="mx-auto max-w-2xl">
        <Card className="bg-card border-border">
          <CardContent className="p-10 text-center">
            {loading ? (
              <div className="flex flex-col items-center gap-4">
                <LoaderCircle className="h-10 w-10 animate-spin text-primary" />
                <p className="text-muted-foreground">Consultando el estado del pago...</p>
              </div>
            ) : error ? (
              <div className="space-y-4">
                <CircleAlert className="mx-auto h-10 w-10 text-red-500" />
                <h1 className="font-display text-4xl text-foreground">No pudimos validar el pago</h1>
                <p className="text-muted-foreground">{error}</p>
              </div>
            ) : (
              <div className="space-y-4">
                <Icon className={`mx-auto h-12 w-12 ${config.className}`} />
                <h1 className="font-display text-4xl text-foreground">{config.title}</h1>
                <p className="text-muted-foreground">{config.description}</p>
                {transactionId && (
                  <p className="text-sm text-muted-foreground">
                    ID de transacción: {transactionId}
                  </p>
                )}
              </div>
            )}

            <div className="mt-8">
              <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Link href="/reservar">Volver a reservas</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

export default function PaymentResultPage() {
  return (
    <Suspense fallback={<PaymentResultFallback />}>
      <PaymentResultContent />
    </Suspense>
  );
}
