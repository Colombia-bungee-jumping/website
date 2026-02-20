"use client";

import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { AnimateOnScroll } from "@/components/animate-on-scroll";
import { MessageCircle } from "lucide-react";

const faqs = [
  {
    question: "¿Que edad minima se requiere para saltar?",
    answer:
      "La edad minima es de 18 anos. Menores de edad pueden saltar con autorizacion firmada de un tutor legal presente en el lugar.",
  },
  {
    question: "¿Es seguro el bungee jumping?",
    answer:
      "Absolutamente. Contamos con certificaciones internacionales, equipos de ultima generacion revisados antes de cada salto, y nuestro equipo tiene mas de 15 anos de experiencia sin incidentes.",
  },
  {
    question: "¿Puedo saltar si tengo vertigo o miedo a las alturas?",
    answer:
      "Muchas personas con miedo a las alturas completan su salto exitosamente. Nuestros instructores estan capacitados para ayudarte a superar el miedo y te acompanaran durante todo el proceso.",
  },
  {
    question: "¿Que incluye la experiencia?",
    answer:
      "Incluye equipo completo, briefing de seguridad, salto desde la plataforma, certificado de salto, video HD de tu experiencia y fotografias profesionales.",
  },
  {
    question: "¿Que pasa si llueve?",
    answer:
      "Saltamos con lluvia ligera. En caso de tormenta electrica o condiciones extremas, reprogramamos tu salto sin costo adicional.",
  },
  {
    question: "¿Cuanto dura toda la experiencia?",
    answer:
      "La experiencia completa dura aproximadamente 2-3 horas, incluyendo registro, briefing de seguridad, preparacion y el salto.",
  },
  {
    question: "¿Puedo cancelar o reprogramar mi reserva?",
    answer:
      "Puedes reprogramar hasta 48 horas antes sin costo. Cancelaciones con mas de 72 horas de anticipacion tienen reembolso del 100%.",
  },
];

export function FAQ() {
  const whatsappUrl = process.env.NEXT_PUBLIC_WHATSAPP_URL;

  if (!whatsappUrl) return null;
  return (
    <section id="faq" className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 items-center">
          {/* Left side - Text and contact */}
          <AnimateOnScroll variant="fade-right" duration={800}>
            <div className="lg:top-24">
              <p className="text-primary uppercase tracking-[0.3em] text-sm font-semibold mb-4">
                FAQ
              </p>
              <h2 className="font-display text-5xl sm:text-6xl text-foreground tracking-wide mb-6">
                PREGUNTAS
                <br />
                <span className="text-primary">FRECUENTES</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg mb-8 max-w-md">
                ¿Tienes alguna pregunta que no este aqui? No dudes en
                contactarnos. Estamos aqui para ayudarte.
              </p>
              <Button asChild size="lg" className="gap-2">
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-5 w-5" />
                  Contactanos
                </a>
              </Button>
            </div>
          </AnimateOnScroll>

          {/* Right side - Accordion with scroll */}
          <AnimateOnScroll variant="fade-left" duration={800} delay={200}>
            <div className="bg-card border border-border rounded-lg overflow-hidden">
              <div className="max-h-[450px] overflow-y-auto custom-scrollbar">
                <Accordion
                  type="single"
                  collapsible
                  defaultValue="item-0"
                  className="w-full"
                >
                  {faqs.map((faq, index) => (
                    <AccordionItem
                      key={index}
                      value={`item-${index}`}
                      className="border-b border-border last:border-b-0"
                    >
                      <AccordionTrigger className="px-6 py-5 hover:no-underline hover:bg-accent/50 text-left">
                        <span className="font-semibold text-foreground pr-4">
                          {faq.question}
                        </span>
                      </AccordionTrigger>
                      <AccordionContent className="px-6 py-5">
                        <p className="text-muted-foreground leading-relaxed">
                          {faq.answer}
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
