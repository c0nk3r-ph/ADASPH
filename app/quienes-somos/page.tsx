import type { Metadata } from "next";
import Link from "next/link";
import { getCompanyInfo, getTeamMembers } from "@/lib/content";

export const metadata: Metadata = {
  title: "Quiénes Somos",
  description:
    "Conozca más sobre AdasPH, nuestra misión, visión y valores. Especialistas en administración de propiedad horizontal.",
  openGraph: {
    title: "Quiénes Somos | AdasPH",
    description: "Conozca más sobre AdasPH y nuestro compromiso con la excelencia.",
  },
};

export const dynamic = "force-static";

/**
 * About Us page component
 * Displays company information, mission, vision, values, and team
 */
export default async function QuienesSomosPage() {
  const companyInfo = await getCompanyInfo();
  const teamMembers = await getTeamMembers();

  return (
    <div className="bg-white">
      {/* Page Header */}
      <div className="bg-gray-50">
        <div className="container-custom py-16">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Quiénes Somos
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            Especialistas en administración de propiedad horizontal
          </p>
        </div>
      </div>

      {/* Company Description */}
      <div className="container-custom py-16">
        <div className="mx-auto max-w-3xl">
          <p className="text-lg leading-8 text-gray-600">
            {companyInfo.description}
          </p>
        </div>
      </div>

      {/* Mission and Vision */}
      <div className="bg-gray-50 py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="rounded-lg bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900">Nuestra Misión</h2>
              <p className="mt-4 text-gray-600">{companyInfo.mission}</p>
            </div>
            <div className="rounded-lg bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900">Nuestra Visión</h2>
              <p className="mt-4 text-gray-600">{companyInfo.vision}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="container-custom py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Nuestros Valores
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {companyInfo.values.map((value, index) => (
              <div
                key={index}
                className="flex items-start rounded-lg bg-gray-50 p-6"
              >
                <div className="flex-shrink-0">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-600">
                    <svg
                      className="h-6 w-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                </div>
                <p className="ml-4 text-gray-700">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      {teamMembers.length > 0 && (
        <div className="bg-gray-50 py-16">
          <div className="container-custom">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Nuestro Equipo
            </h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {teamMembers.map((member) => (
                <div
                  key={member.id}
                  className="rounded-lg bg-white p-6 shadow-sm text-center"
                >
                  <div className="mx-auto h-24 w-24 rounded-full bg-primary-100 flex items-center justify-center mb-4">
                    <svg
                      className="h-12 w-12 text-primary-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {member.name}
                  </h3>
                  <p className="mt-2 text-primary-600">{member.role}</p>
                  <p className="mt-4 text-gray-600">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <div className="container-custom py-16">
        <div className="rounded-lg bg-primary-600 px-6 py-12 text-center">
          <h2 className="text-3xl font-bold text-white">
            ¿Quiere trabajar con nosotros?
          </h2>
          <p className="mt-4 text-lg text-primary-100">
            Contáctenos para conocer cómo podemos ayudar a su comunidad.
          </p>
          <div className="mt-8">
            <Link href="/contacto" className="btn-primary">
              Contactar
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
