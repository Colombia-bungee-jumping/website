"use client";

import { useState, useEffect } from "react";
import { Menu, X, Globe } from "lucide-react";
import { company } from "@/config/company";

const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Experiencias", href: "#experiencias" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Seguridad", href: "#seguridad" },
  { label: "Testimonios", href: "#testimonios" },
  { label: "Ubicacion", href: "#ubicacion" },
];

const languages = [
  { code: "es", label: "ES" },
  { code: "en", label: "EN" },
  { code: "fr", label: "FR" },
];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [currentLang, setCurrentLang] = useState("es");
  const [langMenuOpen, setLangMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroEl = document.getElementById("inicio");
      if (!heroEl) return;

      const heroBottom = heroEl.getBoundingClientRect().bottom;
      const scrolled = heroBottom < 0 ? 1 : Math.min(1 - (heroBottom / window.innerHeight), 1);
      setScrollProgress(scrolled);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const showBottomBanner = scrollProgress > 0.1;
  const showTopBanner = !showBottomBanner;

  return (
    <>
      {/* Top CTA banner - visible above hero */}
      <div
        className={`fixed top-0 left-0 right-0 z-50 bg-primary text-primary-foreground transition-transform duration-500 ${
          showTopBanner ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3">
          <a
            href="#reservar"
            className="flex items-center justify-center gap-2 hover:text-primary-foreground/80 transition-colors group"
          >
            <span className="font-display text-lg sm:text-xl uppercase tracking-widest">
              Reserva tu salto ahora
            </span>
          </a>
        </div>
      </div>

      {/* Top bar */}
      <header className={`fixed top-0 left-0 right-0 z-50 border-b transition-all duration-500 ${
        showTopBanner ? "pt-16 border-transparent bg-transparent" : "border-border bg-background/80 backdrop-blur-md"
      }`}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center gap-4">
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
              <img
                src="/logo.svg"
                alt={`${company.name} logo`}
                className="h-12 w-auto"
              />
            </a>

            {/* Language selector - right */}
            <div className="ml-auto relative">
              <button
                onClick={() => setLangMenuOpen(!langMenuOpen)}
                className="flex items-center gap-1 text-foreground hover:text-primary transition-colors"
                aria-label="Seleccionar idioma"
              >
                <Globe className="h-5 w-5" />
                <span className="font-display text-sm uppercase tracking-wider">{currentLang}</span>
              </button>
              {langMenuOpen && (
                <div className="absolute right-0 mt-2 w-20 bg-background border border-border rounded-md shadow-lg overflow-hidden">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setCurrentLang(lang.code);
                        setLangMenuOpen(false);
                      }}
                      className={`block w-full px-4 py-2 text-left text-sm hover:bg-accent transition-colors ${
                        currentLang === lang.code ? "bg-accent text-primary" : "text-foreground"
                      }`}
                    >
                      {lang.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Fixed bottom CTA - appears on scroll */}
      <div
        className={`fixed bottom-0 left-0 right-0 z-40 bg-primary text-primary-foreground transition-transform duration-500 ${
          showBottomBanner ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3">
          <a
            href="#reservar"
            className="flex items-center justify-center gap-2 text-primary-foreground hover:text-primary-foreground/80 transition-colors group"
          >
            <span className="font-display text-lg sm:text-xl uppercase tracking-widest">
              Reserva tu salto ahora
            </span>
          </a>
        </div>
      </div>

      {/* Fullscreen overlay menu */}
      <div
        className={`fixed inset-0 z-[60] bg-background/95 backdrop-blur-lg transition-transform duration-500 ease-out ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{
          width: "100%",
          maxWidth: "500px",
          clipPath: "polygon(0% 0%, 100% 0%, 85% 100%, 0% 100%)",
        }}
      >
        {/* Header with logo and X */}
        <div className="flex items-center justify-between p-8 lg:px-16">
          <a href="#inicio" onClick={() => setMenuOpen(false)} className="flex items-center gap-1 shrink-0">
            <img
              src="/logo.svg"
              alt={`${company.name} logo`}
              className="h-12 w-auto"
            />
          </a>
          <button
            onClick={() => setMenuOpen(false)}
            className="p-2 text-foreground hover:text-primary transition-colors"
            aria-label="Cerrar menu"
          >
            <X className="h-8 w-8" />
          </button>
        </div>

        <nav className="relative flex flex-col items-center justify-start h-full gap-2 lg:items-start lg:pl-16 lg:gap-4 lg:pr-32 pt-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="font-display text-5xl sm:text-6xl lg:text-3xl uppercase tracking-wider text-muted-foreground hover:text-primary transition-colors py-2"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#reservar"
            onClick={() => setMenuOpen(false)}
            className="mt-8 px-8 py-3 bg-primary text-primary-foreground font-display text-2xl uppercase tracking-widest hover:bg-primary/90 transition-colors rounded-full w-full text-center"
          >
            Reservar ahora
          </a>
        </nav>
      </div>

      {/* Overlay backdrop */}
      <div
        className={`fixed inset-0 z-[55] bg-black/50 transition-opacity duration-500 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMenuOpen(false)}
      />
    </>
  );
}
