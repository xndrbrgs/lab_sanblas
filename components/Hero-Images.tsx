const callouts = [
  {
    name: "Servicio a Empresas",
    description: "Laboratorio San Blas, mediante previo acuerdo con la empresa, provee el servicio de acudir a las compañías para tomar las muestras y entregar resultados.",
    imageSrc:
      "https://i.ibb.co/ZYvM0Ds/pexels-martin-lopez-954584.jpg",
    href: "/servicios",
  },
  {
    name: "Servicios en el Hogar",
    description: "Conscientes de que hay personas a quienes se les dificulta salir de su residencia, Laboratorio San Blas le ofrece el servicio a domicilio.",
    imageSrc:
      "https://i.ibb.co/hV0ZyZK/pexels-chokniti-khongchum-3938022.jpg",
    href: "/servicios",
  },
  {
    name: "Pruebas Especializadas",
    description: "Laboratorio San Blas cuenta con una red de comunicación altamente sofisticada que agiliza el proceso de atender a sus clientes de forma confiable y confidencial.",
    imageSrc:
      "https://i.ibb.co/h7HmXHc/pexels-polina-tankilevitch-3735782.jpg",
    href: "/servicios",
  },
];

export default function Images() {
  return (
    <div className="bg-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-8 sm:py-16 lg:max-w-none lg:py-6">
          <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
            {callouts.map((callout) => (
              <div key={callout.name} className="group relative">
                <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                  <img
                    src={callout.imageSrc}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <h3 className="mt-6 text-sm text-gray-500">
                  <a href={callout.href}>
                    <span className="absolute inset-0" />
                    {callout.name}
                  </a>
                </h3>
                <p className="text-base font-semibold text-gray-900">
                  {callout.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
