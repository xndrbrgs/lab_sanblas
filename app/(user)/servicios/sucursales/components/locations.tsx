const stats = [
  {
    id: 1,
    name: "Coamo",
    address: "21 Baldorioty, Coamo, 00769",
    weekdays: "Lunes a Viernes: 6:30am - 3:30pm",
    saturdays: "Sabado: 7am - 12pm",
    sundays: "Domingo: Cerrado",
  },
  {
    id: 2,
    name: "Santa Isabel",
    address: "Calle Celis Aguilera, Eq. Munoz Rivera, Santa Isabel, 00757",
    weekdays: "Lunes a Viernes: 6:30am - 3:30pm",
    saturdays: "Sabado: 7am - 12pm",
    sundays: "Domingo: Cerrado",
  },
  {
    id: 3,
    name: "Cayey",
    address: "Carr #1 Km 56.7, B* Montellanos, Cayey 00776",
    weekdays: "Lunes a Viernes: 6:30am - 3:30pm",
    saturdays: "Sabado: 7am - 12pm",
    sundays: "Domingo: Cerrado",
  },
];

export default function Locations() {
  return (
    <div className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
          <div className="mx-auto flex max-w-xs flex-col gap-y-4">
            <dd className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
              <h1>Cayey</h1>
            </dd>
            <dt className="text-base leading-7 text-gray-600">
              <p>
                Carr #1 Km 56.7 Bo. Montellanos, <br />
                Cayey 00726
              </p>
            </dt>
            <dt className="text-base leading-7 text-gray-600">
              <p>Lunes a Viernes: 6:30am - 3:30pm</p>
            </dt>
            <dt className="text-base leading-7 text-gray-600">
              <p>Sabado: 7am - 12pm</p>
            </dt>
            <dt className="text-base leading-7 text-gray-600">
              <p>Domingo: Cerrado</p>
            </dt>
          </div>
          <div className="mx-auto flex max-w-xs flex-col gap-y-4">
            <dd className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
              <h1>Coamo</h1>
            </dd>
            <dt className="text-base leading-7 text-gray-600">
              <p>Baldorioty 21, Coamo, 00769</p>
            </dt>
            <dt className="text-base leading-7 text-gray-600">
              <p>Lunes a Viernes: 6:30am - 3:30pm</p>
            </dt>
            <dt className="text-base leading-7 text-gray-600">
              <p>Sabado: 7am - 12pm</p>
            </dt>
            <dt className="text-base leading-7 text-gray-600">
              <p>Domingo: Cerrado</p>
            </dt>
          </div>
          <div className="mx-auto flex max-w-xs flex-col gap-y-4">
            <dd className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
              <h1>Santa Isabel</h1>
            </dd>
            <dt className="text-base leading-7 text-gray-600">
              <p>
                Calle Celis Aguilera, Eq. Munoz Rivera, <br />
                Santa Isabel, 00757
              </p>
            </dt>
            <dt className="text-base leading-7 text-gray-600">
              <p>Lunes a Viernes: 6:30am - 3:30pm</p>
            </dt>
            <dt className="text-base leading-7 text-gray-600">
              <p>Sabado: 7am - 12pm</p>
            </dt>
            <dt className="text-base leading-7 text-gray-600">
              <p>Domingo: Cerrado</p>
            </dt>
          </div>
        </dl>
      </div>
    </div>
  );
}
