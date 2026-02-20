"use client";

import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";

const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Experiencias", href: "#experiencias" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Seguridad", href: "#seguridad" },
  { label: "Testimonios", href: "#testimonios" },
  { label: "Ubicacion", href: "#ubicacion" },
  { label: "Reservar", href: "#reservar" },
];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [ctaVisible, setCtaVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroEl = document.getElementById("inicio");
      const bookingEl = document.getElementById("reservar");
      if (!heroEl || !bookingEl) return;

      const heroBottom = heroEl.getBoundingClientRect().bottom;
      const bookingTop = bookingEl.getBoundingClientRect().top;

      const pastHero = heroBottom < 0;
      const reachedBooking = bookingTop <= window.innerHeight;

      setCtaVisible(pastHero && !reachedBooking);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top bar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center gap-4">
            {/* Menu button + Logo - left */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex items-center gap-2 text-foreground hover:text-primary transition-colors shrink-0"
              aria-label={menuOpen ? "Cerrar menu" : "Abrir menu"}
            >
              {menuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>

            <a href="#inicio" className="flex items-center gap-1 shrink-0">
              <span className="font-display text-xl tracking-wider text-foreground">
                Colombia Bungee Jumping
              </span>
            </a>

            {/* CTA - fills all remaining space, appears/disappears based on scroll */}
            <div
              className={`flex-1 flex items-center justify-center transition-all duration-500 ${
                ctaVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-2 pointer-events-none"
              }`}
            >
              <a
                href="#reservar"
                className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors group"
              >
                <span className="font-display text-lg sm:text-2xl lg:text-3xl uppercase tracking-widest animate-pulse">
                  Reserva tu salto ahora
                </span>
                <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Fullscreen overlay menu */}
      <div
        className={`fixed inset-0 z-40 bg-background/95 backdrop-blur-lg transition-all duration-300 ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col items-center justify-center h-full gap-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="font-display text-5xl sm:text-6xl lg:text-7xl uppercase tracking-wider text-muted-foreground hover:text-primary transition-colors py-2"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </>
  );
}
