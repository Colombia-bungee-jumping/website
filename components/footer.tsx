import { ChevronDown } from "lucide-react";
import { socialLinks } from "@/config/social-links";
import { company } from "@/config/company";
import { formatPhoneNumber } from "@/lib/utils";

export function Footer() {
  return (
    <footer className="bg-secondary border-t border-border py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <a href="#inicio" className="flex items-center gap-1 mb-4">
              <span className="font-display text-xl tracking-wider text-foreground">
                {company.name}
              </span>
            </a>
            <p className="text-sm text-muted-foreground leading-relaxed">
              La empresa lider en experiencias de bungee jumping en Colombia y
              Latinoamerica. Adrenalina pura con seguridad garantizada.
            </p>
          </div>

          <div>
            <h4 className="text-foreground font-semibold uppercase tracking-wider text-sm mb-4">
              Experiencias
            </h4>
            <ul className="flex flex-col gap-2">
              <li>
                <a
                  href="#experiencias"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Salto Clasico
                </a>
              </li>
              <li>
                <a
                  href="#experiencias"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Salto Extremo
                </a>
              </li>
              <li>
                <a
                  href="#experiencias"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Salto Nocturno
                </a>
              </li>
              <li>
                <a
                  href="#experiencias"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Grupos Corporativos
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-foreground font-semibold uppercase tracking-wider text-sm mb-4">
              Empresa
            </h4>
            <ul className="flex flex-col gap-2">
              <li>
                <a
                  href="#nosotros"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Nosotros
                </a>
              </li>
              <li>
                <a
                  href="#seguridad"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Seguridad
                </a>
              </li>
              <li>
                <a
                  href="#testimonios"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Testimonios
                </a>
              </li>
              <li>
                <a
                  href="#ubicacion"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Ubicacion
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-foreground font-semibold uppercase tracking-wider text-sm mb-4">
              Contacto
            </h4>
            <ul className="flex flex-col gap-2 mb-4">
              <li className="text-sm text-muted-foreground">{company.email}</li>
              <li className="text-sm text-muted-foreground">
                {formatPhoneNumber(company.phone)}
              </li>
              <li className="text-sm text-muted-foreground">
                {company.location}, {company.country}
              </li>
            </ul>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="h-9 w-9 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors"
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            {`© ${new Date().getFullYear()} ${company.name}. Todos los derechos reservados.`}
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Politica de privacidad
            </a>
            <a
              href="#"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Terminos y condiciones
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
