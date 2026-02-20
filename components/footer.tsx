import { ChevronDown } from "lucide-react";

function IconInstagram({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function IconFacebook({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function IconYoutube({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
      <path d="m10 15 5-3-5-3z" />
    </svg>
  );
}

function IconTiktok({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
    </svg>
  );
}

const socialLinks = [
  { label: "Instagram", href: "#", icon: IconInstagram },
  { label: "Facebook", href: "#", icon: IconFacebook },
  { label: "YouTube", href: "#", icon: IconYoutube },
  { label: "TikTok", href: "#", icon: IconTiktok },
];

export function Footer() {
  return (
    <footer className="bg-secondary border-t border-border py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <a href="#inicio" className="flex items-center gap-1 mb-4">
              <span className="font-display text-xl tracking-wider text-foreground">
                Colombia Bungee Jumping
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
              <li className="text-sm text-muted-foreground">
                info@vertexdrop.com
              </li>
              <li className="text-sm text-muted-foreground">+34 900 123 456</li>
              <li className="text-sm text-muted-foreground">Madrid, Espana</li>
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
            {`© ${new Date().getFullYear()} Colombia Bungee Jumping. Todos los derechos reservados.`}
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
            <a
              href="#"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
