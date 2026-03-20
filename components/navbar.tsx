"use client";

import { useState, useEffect } from "react";
import { Menu, X, Globe, ChevronDown } from "lucide-react";
import { company } from "@/config/company";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const navLinks = [
  { label: "Inicio", href: "/" },
  { label: "Experiencias", href: "/#experiencias" },
  { label: "Seguridad", href: "/#seguridad" },
  { label: "Testimonios", href: "/#testimonios" },
  { label: "FAQ", href: "/faq" },
  { label: "Ubicacion", href: "/#ubicacion" },
  {
    label: "Servicios",
    href: "/servicios",
    children: [
      {
        label: "Estructuras y torres para Bungee",
        href: "/estructuras-y-torres-para-bungee",
      },
      {
        label: "Equipos para Bungee Jumping",
        href: "/equipos-para-bungee-jumping",
      },
      { label: "Bungee en grua movil", href: "/bungee-en-grua-movil" },
    ],
  },
  { label: "Nosotros", href: "/nosotros" },
];

const languages = [
  { code: "es", label: "ES", flagPath: "/icons/es.svg" },
  { code: "en", label: "EN", flagPath: "/icons/gb.svg" },
  { code: "fr", label: "FR", flagPath: "/icons/fr.svg" },
];

interface NavbarProps {
  showBanner?: boolean;
  bannerText?: string;
  bannerHref?: string;
  bannerNewTab?: boolean;
}

export function Navbar({ showBanner = true, bannerText = "Reserva tu salto ahora", bannerHref = "/reservar", bannerNewTab = false }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [animateMenu, setAnimateMenu] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [currentLang, setCurrentLang] = useState("es");
  const [serviciosOpen, setServiciosOpen] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const heroEl = document.getElementById("inicio");
      if (!heroEl) return;

      const heroBottom = heroEl.getBoundingClientRect().bottom;
      const scrolled =
        heroBottom < 0 ? 1 : Math.min(1 - heroBottom / window.innerHeight, 1);
      setScrollProgress(scrolled);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const showBottomBanner = scrollProgress > 0.1 && showBanner;
  const showTopBanner = !showBottomBanner && showBanner;

  useEffect(() => {
    if (!menuOpen) {
      setAnimateMenu(false);
      setServiciosOpen(false);
    }
  }, [menuOpen]);

  return (
    <>
      {/* Top CTA banner - visible above hero */}
      <div
        className={`fixed top-0 left-0 right-0 z-[60] bg-primary text-primary-foreground transition-transform duration-500 ${
          showTopBanner ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3">
          <a
            href={bannerHref}
            target={bannerNewTab ? "_blank" : undefined}
            rel={bannerNewTab ? "noopener noreferrer" : undefined}
            className="flex items-center justify-center gap-2 hover:text-primary-foreground/80 transition-colors group"
          >
            <span className="font-display text-lg sm:text-xl uppercase tracking-widest">
              {bannerText}
            </span>
          </a>
        </div>
      </div>

      {/* Top bar */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 border-b transition-all duration-500 ${
          showTopBanner
            ? "pt-16 border-transparent bg-transparent"
            : "border-border bg-background/80 backdrop-blur-md"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center gap-4">
            {/* Menu button + Logo - left */}
            <button
              onClick={() => {
                setMenuOpen(!menuOpen);
                if (!menuOpen) {
                  setAnimateMenu(true);
                }
              }}
              className="flex items-center gap-2 text-foreground hover:text-primary transition-colors shrink-0"
              aria-label="Abrir menu de navegacion"
            >
              <Menu className="h-6 w-6" />
            </button>

            <a href="/" className="flex items-center gap-1 shrink-0">
              <img
                src="/logo.svg"
                alt={`${company.name} logo`}
                className="h-12 w-auto"
              />
            </a>

            {/* Language selector - right */}
            <div className="ml-auto">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button
                    className="flex items-center gap-2 text-foreground hover:text-primary transition-colors focus:outline-none"
                    aria-label="Seleccionar idioma"
                  >
                    {languages.map((lang) =>
                      lang.code === currentLang ? (
                        <img
                          key={lang.code}
                          src={lang.flagPath}
                          alt={`${lang.label} flag`}
                          className="w-5 h-5 rounded-full"
                        />
                      ) : null,
                    )}
                    <span className="font-display text-sm uppercase tracking-wider">
                      {currentLang}
                    </span>
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-28">
                  {languages.map((lang) => (
                    <DropdownMenuItem
                      key={lang.code}
                      onClick={() => setCurrentLang(lang.code)}
                      className={`flex items-center gap-3 ${
                        currentLang === lang.code ? "text-primary" : ""
                      }`}
                    >
                      <img
                        src={lang.flagPath}
                        alt={`${lang.label} flag`}
                        className="w-5 h-5 rounded-full"
                      />
                      <span>{lang.label}</span>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
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
            href={bannerHref}
            target={bannerNewTab ? "_blank" : undefined}
            rel={bannerNewTab ? "noopener noreferrer" : undefined}
            className="flex items-center justify-center gap-2 text-primary-foreground hover:text-primary-foreground/80 transition-colors group"
          >
            <span className="font-display text-lg sm:text-xl uppercase tracking-widest">
              {bannerText}
            </span>
          </a>
        </div>
      </div>

      {/* Fullscreen overlay menu */}
      <div
        className={`md:max-w-[600px] xl:max-w-[600px] fixed inset-0 z-[65] bg-background/95 backdrop-blur-lg transition-transform duration-500 ease-out ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{
          width: "100%",
          clipPath:
            menuOpen && isLargeScreen
              ? "polygon(0% 0%, 100% 0%, 85% 100%, 0% 100%)"
              : "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        }}
        onTransitionEnd={() => {}}
      >
        {/* Header with logo and X */}
        <div className="flex items-center justify-between p-8 lg:px-16">
          <a
            href="#inicio"
            onClick={() => setMenuOpen(false)}
            className="flex items-center gap-1 shrink-0"
          >
            <img
              src="/logo.svg"
              alt={`${company.name} logo`}
              className="h-16 lg:h-14 xl:h-16 w-auto"
            />
          </a>
          <button
            onClick={() => {
              setMenuOpen(false);
            }}
            className="p-2 text-foreground hover:text-primary transition-colors"
            aria-label="Cerrar menu"
          >
            <X className="h-8 w-8" />
          </button>
        </div>

        <nav className="relative flex flex-col items-center justify-start h-full gap-4 lg:items-start lg:gap-2 lg:pl-16 xl:gap-4 lg:pr-32 pt-4 lg:pt-0 xl:pt-8">
          {navLinks.map((link, index) =>
            link.children ? (
              <div key={link.href} className="flex flex-col items-center lg:items-start">
                <a
                  href="#"
                  className={`font-display text-4xl uppercase tracking-wider text-muted-foreground hover:text-primary transition-colors duration-150 ${
                    animateMenu
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 -translate-x-8"
                  }`}
                  style={
                    animateMenu
                      ? {
                          transitionProperty: "opacity, transform",
                          transitionDuration: "400ms",
                          transitionDelay: `${150 + index * 120}ms`,
                        }
                      : undefined
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    setServiciosOpen(!serviciosOpen);
                  }}
                >
                  {link.label}
                  <ChevronDown
                    className={`inline-block ml-2 w-6 h-6 transition-transform duration-300 ${serviciosOpen ? "rotate-180" : ""}`}
                  />
                </a>
                <div
                  className={`flex flex-col items-center lg:items-start gap-1 overflow-hidden transition-all duration-300 ${
                    serviciosOpen ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  {link.children.map((child) => (
                    <a
                      key={child.href}
                      href={child.href}
                      className="font-display text-2xl uppercase tracking-wider text-muted-foreground/70 hover:text-primary transition-colors duration-150"
                      onClick={() => setMenuOpen(false)}
                    >
                      {child.label}
                    </a>
                  ))}
                </div>
              </div>
            ) : (
              <a
                key={link.href}
                href={link.href}
                className={`font-display text-4xl uppercase tracking-wider text-muted-foreground hover:text-primary transition-colors duration-150 ${
                  animateMenu
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-8"
                }`}
                style={
                  animateMenu
                    ? {
                        transitionProperty: "opacity, transform",
                        transitionDuration: "400ms",
                        transitionDelay: `${150 + index * 120}ms`,
                      }
                    : undefined
                }
                onClick={() => {
                  setMenuOpen(false);
                }}
              >
                {link.label}
              </a>
            ),
          )}
          <a
            href="/reservar"
            onClick={() => {
              setMenuOpen(false);
            }}
            className={`mt-4 xl:mt-8 px-8 py-3 bg-primary text-primary-foreground font-display text-2xl uppercase tracking-widest hover:bg-primary/90 transition-colors duration-150 rounded-full max-w-fit lg:max-w-full w-full text-center ${
              animateMenu
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-8"
            }`}
            style={
              animateMenu
                ? {
                    transitionProperty: "opacity, transform",
                    transitionDuration: "400ms",
                    transitionDelay: `${150 + navLinks.length * 120 + 150}ms`,
                  }
                : undefined
            }
          >
            Reservar ahora
          </a>
        </nav>
      </div>

      {/* Overlay backdrop */}
      <div
        className={`fixed inset-0 z-[55] bg-black/50 transition-opacity duration-500 ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMenuOpen(false)}
      />
    </>
  );
}
