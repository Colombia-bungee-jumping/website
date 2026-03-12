"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { PhoneInput } from "@/components/phone-input";
import { CheckCircle2, Minus, Plus, ArrowRight, ArrowLeft } from "lucide-react";
import { services } from "@/config/services";
import { formatCurrency } from "@/lib/utils";
import { format } from "date-fns";
import WompiPaymentButton from "./wompi-payment-button";
import { DateTimePicker } from "./date-time-picker";

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

function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function isValidPhoneNumber(phone: string): boolean {
  const phoneRegex = /^\+\d{7,15}$/;
  return phoneRegex.test(phone);
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
  const [errors, setErrors] = useState<{
    nombre?: string;
    telefono?: string;
    email?: string;
    fecha?: string;
  }>({});
  const [date, setDate] = useState<Date | undefined>(undefined);

  const validateStep2 = () => {
    const newErrors: typeof errors = {};

    if (personalData.nombre.length < 5) {
      newErrors.nombre = "El nombre debe tener al menos 5 caracteres";
    }

    if (!personalData.telefono || !isValidPhoneNumber(personalData.telefono)) {
      newErrors.telefono = "Ingresa un número de teléfono válido";
    }

    if (!personalData.email || !isValidEmail(personalData.email)) {
      newErrors.email = "Ingresa un correo electrónico válido";
    }

    if (!personalData.fecha) {
      newErrors.fecha = "Selecciona una fecha";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

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
    personalData.nombre.length >= 5 &&
    personalData.telefono &&
    isValidPhoneNumber(personalData.telefono) &&
    personalData.email &&
    isValidEmail(personalData.email) &&
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
                setErrors({});
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
      <div className="w-full lg:max-w-2xl flex flex-col h-screen">
        <div className="pt-20 p-8 h-full">
          <div className="flex flex-col h-full">
            <div className="flex-shrink-0 mb-8">
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

            <div className="flex-1 pr-2 -mr-2">
              {step === 1 && (
                <div className="h-full grid grid-rows-[auto_auto_1fr_auto]">
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
                <div className="h-full grid grid-rows-[auto_auto_1fr_auto]">
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
                      {errors.nombre && (
                        <p className="text-sm text-red-500">{errors.nombre}</p>
                      )}
                    </div>

                    <div className="flex flex-col gap-2">
                      <Label
                        htmlFor="telefono"
                        className="text-foreground text-sm uppercase tracking-wide"
                      >
                        Telefono
                      </Label>
                      <PhoneInput
                        id="telefono"
                        value={personalData.telefono}
                        onChange={(value) =>
                          setPersonalData({
                            ...personalData,
                            telefono: value || "",
                          })
                        }
                        defaultCountry="CO"
                        placeholder="300 000 0000"
                        className="bg-background border-border text-foreground placeholder:text-muted-foreground"
                      />
                      {errors.telefono && (
                        <p className="text-sm text-red-500">
                          {errors.telefono}
                        </p>
                      )}
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
                      {errors.email && (
                        <p className="text-sm text-red-500">{errors.email}</p>
                      )}
                    </div>

                    <div className="flex flex-col gap-2">
                      <Label
                        htmlFor="fecha"
                        className="text-foreground text-sm uppercase tracking-wide"
                      >
                        Fecha
                      </Label>
                      <DateTimePicker
                        value={date}
                        onChange={(selectedDate) => {
                          setDate(selectedDate);
                          setPersonalData({
                            ...personalData,
                            fecha: selectedDate
                              ? format(selectedDate, "MM/dd/yyyy hh:mm aa")
                              : "",
                          });
                        }}
                      />
                      {errors.fecha && (
                        <p className="text-sm text-red-500">{errors.fecha}</p>
                      )}
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
                      onClick={() => {
                        if (validateStep2()) {
                          setStep(3);
                        }
                      }}
                      disabled={!canProceedStep2}
                      className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90 uppercase tracking-wider font-semibold py-6"
                    >
                      Continuar <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="h-full grid grid-rows-[auto_auto_1fr_auto]">
                  <h2 className="font-display text-4xl lg:text-5xl text-foreground tracking-wide mb-6">
                    RESUMEN DE
                    <br />
                    <span className="text-primary">TU RESERVA</span>
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    Revisa los detalles antes de confirmar
                  </p>

                  <Card
                    className="bg-card border-border overflow-y-auto"
                    style={{ maxHeight: "calc(100vh - 420px)" }}
                  >
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
                        <p className="text-foreground">
                          {personalData.telefono}
                        </p>
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

                  <div className="grid grid-cols-2 gap-6 mt-6">
                    <Button
                      onClick={() => setStep(2)}
                      variant="outline"
                      className="flex-1 border-border text-foreground hover:bg-muted hover:text-white uppercase tracking-wider font-semibold py-6"
                    >
                      <ArrowLeft className="mr-2 h-5 w-5" /> Volver
                    </Button>
                    <WompiPaymentButton
                      publicKey="pub_test_1234567890abcdef"
                      amountInCents={total}
                      reference="4XMPGKWWPKWQ"
                      currency="COP"
                      signature="37c8407747e595535433ef8f6a811d853cd943046624a0ec04662b17bbf33bf5"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="hidden lg:block w-full relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/jump-extreme.jpg')",
            clipPath: "polygon(15% 0, 100% 0, 100% 100%, 0% 100%)",
          }}
        />
        <div
          style={{ clipPath: "polygon(15% 0, 100% 0, 100% 100%, 0% 100%)" }}
        />
      </div>
    </section>
  );
}
