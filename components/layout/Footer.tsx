import Link from "next/link";

/**
 * Main site footer component
 * Contains links, contact info, and legal information
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { name: "Servicios", href: "/servicios" },
      { name: "Casos de Éxito", href: "/casos" },
    ],
    company: [
      { name: "Quiénes Somos", href: "/quienes-somos" },
      { name: "Contacto", href: "/contacto" },
    ],
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <div className="mb-4">
              <img
                src="/logo-blanco.png"
                alt="AdasPH"
                className="h-8 w-auto"
                loading="lazy"
              />
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              ADASPH: Gestión integral, soluciones reales y control operativo.
            </p>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Servicios
            </h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Empresa
            </h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 border-t border-gray-800 pt-8">
          <p className="text-center text-sm text-gray-400">
            &copy; {currentYear} AdasPH. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
