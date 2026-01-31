import type { Metadata } from "next";
import Link from "next/link";
import { getServices } from "@/lib/content";

export const metadata: Metadata = {
  title: "Servicios",
  description:
    "Servicios integrales de administración de propiedad horizontal: administración general, contabilidad, asesoría legal y mantenimiento.",
  openGraph: {
    title: "Servicios | AdasPH",
    description: "Servicios profesionales de administración de propiedad horizontal.",
  },
};

export const dynamic = "force-static";

/**
 * Services page component
 * Displays all available services with detailed information
 */
export default async function ServiciosPage() {
  const services = await getServices();

  return (
    <div className="bg-white">
      {/* Page Header */}
      <div className="bg-gray-50">
        <div className="container-custom py-16">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Nuestros Servicios
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            Servicios profesionales para copropiedades y activos inmobiliarios, con alcances definidos y enfoque en cumplimiento, operación y control.
          </p>
        </div>
      </div>

      {/* Services List */}
      <div className="container-custom py-16">
        <div className="space-y-0">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`flex flex-col gap-8 py-16 px-4 ${
                index % 2 === 0 
                  ? "lg:flex-row bg-white" 
                  : "lg:flex-row-reverse bg-gray-50"
              } ${index > 0 ? "border-t border-gray-200" : ""}`}
            >
              <div className="flex-1">
                <h2 className="text-3xl font-bold text-gray-900">
                  {service.title}
                </h2>
                <p className="mt-4 text-lg text-gray-600">
                  {service.description}
                </p>
                <ul className="mt-6 space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
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
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={`flex-1 flex items-center justify-center rounded-lg p-8 ${
                index % 2 === 0 ? "bg-gray-50" : "bg-white border border-gray-200"
              }`}>
                <img
                  src={`/servicio-${index + 1}.png`}
                  alt={service.title}
                  className="w-full h-auto rounded-lg object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
        
        {/* Scope Note */}
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500">
            El alcance específico de cada servicio se define en la propuesta y el contrato correspondiente.
          </p>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-primary-600 py-16">
        <div className="container-custom">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              ¿Necesita más información?
            </h2>
            <p className="mt-4 text-lg leading-8 text-primary-100">
              Contáctenos para una consulta personalizada sobre nuestros
              servicios.
            </p>
            <div className="mt-10">
              <Link href="/contacto" className="btn-primary">
                Solicitar Consulta
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
