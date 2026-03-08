"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Minus, Plus, ArrowRight, ArrowLeft } from "lucide-react";
import { services, Service } from "@/config/services";
import { formatCurrency } from "@/lib/utils";

interface CartItem {
  experienceId: string;
  quantity: number;
}

interface PersonalData {
  nombre: string;
  telefono: string;
  email: string;
  fecha: string;
}

export function BookingForm() {
  const [step, setStep] = useState(1);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [personalData, setPersonalData] = useState<PersonalData>({
    nombre: "",
    telefono: "",
    email: "",
    fecha: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const updateQuantity = (experienceId: string, quantity: number) => {
    if (quantity < 1) {
      setCart(cart.filter((item) => item.experienceId !== experienceId));
      return;
    }
    setCart(
      cart
        .map((item) =>
          item.experienceId === experienceId ? { ...item, quantity } : item,
        )
        .concat(
          cart.find((item) => item.experienceId === experienceId)
            ? []
            : [{ experienceId, quantity }],
        ),
    );
  };

  const getQuantity = (experienceId: string) => {
    return (
      cart.find((item) => item.experienceId === experienceId)?.quantity || 0
    );
  };

  const total = cart.reduce((sum, item) => {
    const exp = services.find((e) => e.id === item.experienceId);
    return sum + (parseInt(exp?.price || "0") || 0) * item.quantity;
  }, 0);

  const canProceedStep1 =
    cart.length > 0 && cart.some((item) => item.quantity > 0);
  const canProceedStep2 =
    personalData.nombre &&
    personalData.telefono &&
    personalData.email &&
    personalData.fecha;

  if (submitted) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-background px-4">
        <Card className="bg-card border-border max-w-lg w-full">
          <CardContent className="p-12 text-center">
            <div className="h-20 w-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="h-10 w-10 text-primary" />
            </div>
            <h3 className="font-display text-4xl text-foreground tracking-wide mb-4">
              RESERVA CONFIRMADA
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Hemos recibido tu solicitud. Nuestro equipo se pondra en contacto
              contigo en las proximas 24 horas.
            </p>
            <Button
              onClick={() => {
                setSubmitted(false);
                setStep(1);
                setCart([]);
                setPersonalData({
                  nombre: "",
                  telefono: "",
                  email: "",
                  fecha: "",
                });
              }}
              className="bg-primary text-primary-foreground hover:bg-primary/90 uppercase tracking-wider font-semibold"
            >
              Hacer otra reserva
            </Button>
          </CardContent>
        </Card>
      </section>
    );
  }

  return (
    <section className="h-screen bg-background flex overflow-hidden">
      <div className="w-full lg:w-1/2 flex flex-col">
        <div className="flex-1 flex flex-col justify-center px-6 py-8 lg:px-16 lg:py-12">
          <div className="mb-8">
            <p className="text-primary uppercase tracking-[0.3em] text-sm font-semibold mb-4">
              Paso {step} de 3
            </p>
            <div className="flex gap-2">
              {[1, 2, 3].map((s) => (
                <div
                  key={s}
                  className={`h-1 flex-1 rounded-full transition-colors ${
                    s <= step ? "bg-primary" : "bg-muted"
                  }`}
                />
              ))}
            </div>
          </div>

          {step === 1 && (
            <div>
              <h2 className="font-display text-4xl lg:text-5xl text-foreground tracking-wide mb-6">
                SELECCIONA TUS
                <br />
                <span className="text-primary">EXPERIENCIAS</span>
              </h2>
              <p className="text-muted-foreground mb-8">
                Elige al menos una experiencia para continuar
              </p>

              <div className="space-y-4">
                {services.map((exp) => (
                  <div
                    key={exp.id}
                    className="flex items-center justify-between p-4 rounded-lg border border-border bg-card"
                  >
                    <div>
                      <p className="font-semibold text-foreground">
                        {exp.title}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {exp.priceFormatted}
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() =>
                          updateQuantity(exp.id, getQuantity(exp.id) - 1)
                        }
                        className="h-8 w-8 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors"
                      >
                        <Minus className="h-4 w-4" />
                      </button>
                      <span className="w-8 text-center font-semibold text-foreground">
                        {getQuantity(exp.id)}
                      </span>
                      <button
                        onClick={() =>
                          updateQuantity(exp.id, getQuantity(exp.id) + 1)
                        }
                        className="h-8 w-8 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors"
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {cart.length > 0 && (
                <div className="flex justify-between text-xl font-semibold text-foreground mt-6">
                  <span>Total</span>
                  <span className="text-primary font-bold">
                    {formatCurrency(total)} COP
                  </span>
                </div>
              )}

              <Button
                onClick={() => setStep(2)}
                disabled={!canProceedStep1}
                className="mt-8 bg-primary text-primary-foreground hover:bg-primary/90 uppercase tracking-wider font-semibold w-full py-6"
              >
                Continuar <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          )}

          {step === 2 && (
            <div>
              <h2 className="font-display text-4xl lg:text-5xl text-foreground tracking-wide mb-6">
                TUS DATOS
                <br />
                <span className="text-primary">PERSONALES</span>
              </h2>
              <p className="text-muted-foreground mb-8">
                Completa tus datos para finalizar la reserva
              </p>

              <div className="space-y-5">
                <div className="flex flex-col gap-2">
                  <Label
                    htmlFor="nombre"
                    className="text-foreground text-sm uppercase tracking-wide"
                  >
                    Nombre completo
                  </Label>
                  <Input
                    id="nombre"
                    value={personalData.nombre}
                    onChange={(e) =>
                      setPersonalData({
                        ...personalData,
                        nombre: e.target.value,
                      })
                    }
                    required
                    placeholder="Tu nombre completo"
                    className="bg-background border-border text-foreground placeholder:text-muted-foreground"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <Label
                    htmlFor="telefono"
                    className="text-foreground text-sm uppercase tracking-wide"
                  >
                    Telefono
                  </Label>
                  <Input
                    id="telefono"
                    type="tel"
                    value={personalData.telefono}
                    onChange={(e) =>
                      setPersonalData({
                        ...personalData,
                        telefono: e.target.value,
                      })
                    }
                    required
                    placeholder="+34 600 000 000"
                    className="bg-background border-border text-foreground placeholder:text-muted-foreground"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <Label
                    htmlFor="email"
                    className="text-foreground text-sm uppercase tracking-wide"
                  >
                    Correo electronico
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={personalData.email}
                    onChange={(e) =>
                      setPersonalData({
                        ...personalData,
                        email: e.target.value,
                      })
                    }
                    required
                    placeholder="tu@email.com"
                    className="bg-background border-border text-foreground placeholder:text-muted-foreground"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <Label
                    htmlFor="fecha"
                    className="text-foreground text-sm uppercase tracking-wide"
                  >
                    Fecha preferida
                  </Label>
                  <Input
                    id="fecha"
                    type="date"
                    value={personalData.fecha}
                    onChange={(e) =>
                      setPersonalData({
                        ...personalData,
                        fecha: e.target.value,
                      })
                    }
                    required
                    className="bg-background border-border text-foreground"
                  />
                </div>
              </div>

              <div className="flex gap-4 mt-8">
                <Button
                  onClick={() => setStep(1)}
                  variant="outline"
                  className="flex-1 border-border text-foreground hover:bg-muted hover:text-white uppercase tracking-wider font-semibold py-6"
                >
                  <ArrowLeft className="mr-2 h-5 w-5" /> Volver
                </Button>
                <Button
                  onClick={() => setStep(3)}
                  disabled={!canProceedStep2}
                  className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90 uppercase tracking-wider font-semibold py-6"
                >
                  Continuar <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="flex flex-col h-full">
              <div className="flex-shrink-0">
                <h2 className="font-display text-4xl lg:text-5xl text-foreground tracking-wide mb-6">
                  RESUMEN DE
                  <br />
                  <span className="text-primary">TU RESERVA</span>
                </h2>
                <p className="text-muted-foreground mb-6">
                  Revisa los detalles antes de confirmar
                </p>
              </div>

              <Card className="bg-card border-border flex-1 overflow-y-auto" style={{ maxHeight: 'calc(100vh - 380px)' }}>
                <CardContent className="p-6 space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground uppercase tracking-wide mb-2">
                      Experiencias
                    </p>
                    {cart.map((item) => {
                      const exp = services.find(
                        (e) => e.id === item.experienceId,
                      );
                      const price = parseInt(exp?.price || "0") || 0;
                      return (
                        <div
                          key={item.experienceId}
                          className="flex justify-between text-foreground"
                        >
                          <span>
                            {exp?.title} x{item.quantity}
                          </span>
                          <span className="font-semibold">
                            {formatCurrency(price * item.quantity)} COP
                          </span>
                        </div>
                      );
                    })}
                  </div>

                  <div className="border-t border-border pt-4">
                    <p className="text-sm text-muted-foreground uppercase tracking-wide mb-2">
                      Datos de contacto
                    </p>
                    <p className="text-foreground">{personalData.nombre}</p>
                    <p className="text-foreground">{personalData.telefono}</p>
                    <p className="text-foreground">{personalData.email}</p>
                  </div>

                  <div className="border-t border-border pt-4">
                    <p className="text-sm text-muted-foreground uppercase tracking-wide mb-2">
                      Fecha
                    </p>
                    <p className="text-foreground">{personalData.fecha}</p>
                  </div>

                  <div className="border-t border-border pt-4">
                    <div className="flex justify-between text-xl font-semibold text-foreground">
                      <span>Total</span>
                      <span className="text-primary font-bold">
                        {formatCurrency(total)} COP
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="flex gap-4 mt-6">
                <Button
                  onClick={() => setStep(2)}
                  variant="outline"
                  className="flex-1 border-border text-foreground hover:bg-muted hover:text-white uppercase tracking-wider font-semibold py-6"
                >
                  <ArrowLeft className="mr-2 h-5 w-5" /> Volver
                </Button>
                <Button
                  onClick={() => setSubmitted(true)}
                  className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90 uppercase tracking-wider font-semibold py-6"
                >
                  Confirmar Reserva
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="hidden lg:block w-1/2 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: "url('/images/jump-extreme.jpg')",
            clipPath: "polygon(15% 0, 100% 0, 100% 100%, 0% 100%)"
          }}
        />
        <div
          style={{ clipPath: "polygon(15% 0, 100% 0, 100% 100%, 0% 100%)" }}
        />
      </div>
    </section>
  );
}
