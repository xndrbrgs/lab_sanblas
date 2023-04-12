import {
  BuildingOfficeIcon,
  LockClosedIcon,
  CalendarIcon,
} from "@heroicons/react/20/solid";

const features = [
  {
    name: "Laboratorios",
    description:
      "Tenemos oficinas alrededor del area sur de la isla en los pueblos de Coamo, Santa Isabel, y Cayey.",
    icon: BuildingOfficeIcon,
  },
  {
    name: "Pruebas rapidas y seguras",
    description:
      "Con nuestro equipo de profesionales, tendra su informacion medica en buenas manos.",
    icon: LockClosedIcon,
  },
  {
    name: "No tiene cita? No hay problema.",
    description:
      "Estaremos a su servicio a su dispocision.",
    icon: CalendarIcon,
  },
];

export default function Hero() {
  return (
    <div className="overflow-hidden bg-[url('https://i.ibb.co/hV0ZyZK/pexels-chokniti-khongchum-3938022.jpg')] py-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Laboratorio San Blas
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Lo que comenzó como una aventura empresarial de varios médicos,
                se ha convertido en una empresa con 39 sucursales alrededor de
                la Isla y más de 500 empleados.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon
                        className="absolute left-1 top-1 h-5 w-5 text-indigo-600"
                        aria-hidden="true"
                      />
                      {feature.name}
                    </dt>{" "}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <img
            src="https://i.ibb.co/HTprW1T/pexels-pixabay-256262.jpg"
            alt="Product screenshot"
            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
            width={2432}
            height={1442}
          />
        </div>
      </div>
    </div>
  );
}
