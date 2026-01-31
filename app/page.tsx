import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Inicio",
  description:
    "Administración profesional de propiedad horizontal. Servicios de gestión eficiente y transparente para su comunidad.",
  openGraph: {
    title: "AdasPH - Administración de Propiedad Horizontal",
    description:
      "Servicios profesionales de administración de propiedad horizontal.",
  },
};

export const dynamic = "force-static";

/**
 * Home page component
 * Showcases main services, value proposition, and testimonials
 */
export default async function HomePage() {

  return (
    <>
      {/* Hero Section */}
      <section className="relative text-white">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/hero-background.png')",
          }}
        />
        {/* Dark Overlay for text contrast */}
        <div className="absolute inset-0 bg-black/40" />
        {/* Content */}
        <div className="relative container-custom py-24 sm:py-32">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              Administración Profesional de Propiedad Horizontal
            </h1>
            <p className="mt-6 text-lg leading-8 text-white/90">
              Gestión eficiente, transparente y profesional para su comunidad.
              Más de 20 años de experiencia al servicio de su propiedad
              horizontal.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link href="/servicios" className="btn-secondary-light">
                Conocer nuestros servicios
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="bg-white py-24 sm:py-32">
        <div className="container-custom">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Cómo apoyamos la gestión de su copropiedad
            </h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Capacidades clave para operar con orden, cumplimiento y continuidad.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {/* Card 1 - Administración y cumplimiento */}
            <div className="flex flex-col rounded-2xl bg-gray-50 p-8 shadow-sm hover:shadow-lg border border-gray-100 transition-all">
              <h3 className="text-xl font-semibold text-gray-900">
                Administración y cumplimiento
              </h3>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start">
                  <svg
                    className="h-5 w-5 text-primary-600 mt-0.5 mr-2 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-sm text-gray-700">Presupuesto y recaudo</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-5 w-5 text-primary-600 mt-0.5 mr-2 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-sm text-gray-700">Gestión documental y normativa (Ley 675)</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-5 w-5 text-primary-600 mt-0.5 mr-2 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-sm text-gray-700">Soporte a órganos de administración</span>
                </li>
              </ul>
            </div>

            {/* Card 2 - Operación y continuidad */}
            <div className="flex flex-col rounded-2xl bg-gray-50 p-8 shadow-sm hover:shadow-lg border border-gray-100 transition-all">
              <h3 className="text-xl font-semibold text-gray-900">
                Operación y continuidad
              </h3>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start">
                  <svg
                    className="h-5 w-5 text-primary-600 mt-0.5 mr-2 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-sm text-gray-700">Aseo, portería y personal operativo</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-5 w-5 text-primary-600 mt-0.5 mr-2 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-sm text-gray-700">Mantenimiento y proveedores</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-5 w-5 text-primary-600 mt-0.5 mr-2 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-sm text-gray-700">Soporte operativo diario</span>
                </li>
              </ul>
            </div>

            {/* Card 3 - Jurídico y cartera */}
            <div className="flex flex-col rounded-2xl bg-gray-50 p-8 shadow-sm hover:shadow-lg border border-gray-100 transition-all">
              <h3 className="text-xl font-semibold text-gray-900">
                Jurídico y cartera
              </h3>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start">
                  <svg
                    className="h-5 w-5 text-primary-600 mt-0.5 mr-2 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-sm text-gray-700">Gestión prejurídica</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-5 w-5 text-primary-600 mt-0.5 mr-2 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-sm text-gray-700">Acciones jurídicas (según viabilidad)</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-5 w-5 text-primary-600 mt-0.5 mr-2 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-sm text-gray-700">Reglamentos y soporte documental</span>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Single CTA */}
          <div className="mt-12 text-center">
            <Link href="/servicios" className="btn-primary">
              Ver servicios detallados
            </Link>
          </div>
        </div>
      </section>

      {/* What We Deliver Section */}
      <section className="bg-gray-50 py-24 sm:py-32">
        <div className="container-custom">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Qué entregamos
            </h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Resultados operativos y de gestión para su copropiedad
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-3xl">
            <div className="rounded-2xl bg-white p-8 shadow-md border border-gray-200">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg
                    className="h-6 w-6 text-primary-600 mt-0.5 mr-3 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-700">Control financiero y presupuestario con reportes periódicos</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-6 w-6 text-primary-600 mt-0.5 mr-3 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-700">Operación continua de áreas comunes y servicios</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-6 w-6 text-primary-600 mt-0.5 mr-3 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-700">Cumplimiento normativo y gestión documental</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-6 w-6 text-primary-600 mt-0.5 mr-3 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-700">Soporte a órganos de administración y asambleas</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-6 w-6 text-primary-600 mt-0.5 mr-3 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-700">Gestión de proveedores y contratistas</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-6 w-6 text-primary-600 mt-0.5 mr-3 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-700">Recuperación de cartera y gestión jurídica</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-600 py-16">
        <div className="container-custom">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Hablemos sobre su copropiedad
            </h2>
            <p className="mt-4 text-lg leading-8 text-primary-100">
              Cuéntenos el tipo de copropiedad y su necesidad. Le responderemos con el alcance sugerido.
            </p>
            <div className="mt-10">
              <Link href="/contacto" className="btn-cta-highlight">
                Solicitar contacto
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
