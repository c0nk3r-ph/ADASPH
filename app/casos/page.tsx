import type { Metadata } from "next";
import Link from "next/link";
import { getTestimonials } from "@/lib/content";

export const metadata: Metadata = {
  title: "Casos de Éxito",
  description:
    "Testimonios y casos de éxito de comunidades que confían en AdasPH para la administración de su propiedad horizontal.",
  openGraph: {
    title: "Casos de Éxito | AdasPH",
    description: "Testimonios de nuestros clientes y casos de éxito.",
  },
};

export const dynamic = "force-static";

/**
 * Success Cases / Testimonials page component
 * Displays client testimonials and success stories
 */
export default async function CasosPage() {
  const testimonials = await getTestimonials();

  return (
    <div className="bg-white">
      {/* Page Header */}
      <div className="bg-gray-50">
        <div className="container-custom py-16">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Casos de Éxito
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            Testimonios de comunidades que confían en nosotros
          </p>
        </div>
      </div>

      {/* Testimonials Grid */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="rounded-lg bg-white p-8 shadow-sm border border-gray-200"
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="h-6 w-6 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <blockquote className="text-lg text-gray-700 mb-6">
                &quot;{testimonial.content}&quot;
              </blockquote>
              <div className="border-t border-gray-200 pt-6">
                <p className="font-semibold text-gray-900">
                  {testimonial.name}
                </p>
                <p className="text-sm text-gray-600">
                  {testimonial.role}
                </p>
                <p className="text-sm text-primary-600 font-medium">
                  {testimonial.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gray-50 py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600">10+</div>
              <div className="mt-2 text-lg text-gray-600">Años de Experiencia</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600">50+</div>
              <div className="mt-2 text-lg text-gray-600">Comunidades Administradas</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600">98%</div>
              <div className="mt-2 text-lg text-gray-600">Satisfacción del Cliente</div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container-custom py-16">
        <div className="rounded-lg bg-primary-600 px-6 py-12 text-center">
          <h2 className="text-3xl font-bold text-white">
            Únase a nuestras comunidades satisfechas
          </h2>
          <p className="mt-4 text-lg text-primary-100">
            Contáctenos hoy y descubra cómo podemos ayudar a su propiedad
            horizontal.
          </p>
          <div className="mt-8">
            <Link href="/contacto" className="btn-primary">
              Solicitar Consulta
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
