import React from "react";

function FAQ() {
  return (
    <div className="relative py-3 overflow-hidden bg-gray-100">
      <div className="relative container px-4 mx-auto">
        <div className="max-w-5xl mx-auto">
          <div className="text-center my-10">
            <div className="text-3xl font-semibold text-black p-2">
              <h1>¿Alguna pregunta?</h1>
            </div>
            <div className="text-xl text-black p-2">
              <h1>Estamos para ayudar.</h1>
            </div>
          </div>
          <div className="sm:pt-10 px-8 sm:px-20 pb-18 bg-white rounded-4xl shadow-lg">
            <button className="flex mb-8 pb-8 group w-full items-start justify-between border-b border-gray-100 text-left">
              <div className="max-w-xl pr-5">
                <h3 className="text-xl font-semibold text-black group-hover:text-green-900">
                  ¿Que pruebas son en ayuna?
                </h3>
                <p className="hidden group-hover:block mt-3 text-lg text-gray-500">
                  Glucose, BMP, CMP, Lipid Panel, Tolerancia de azúcar,
                  Electroforesis HDL, y Cholesterol. Las pruebas como TSH, y las
                  de hormonas deben realizarse antes de las 10:00 AM.
                </p>
              </div>
              <div className="pt-1">
                <span className="hidden group-hover:block-all">
                  <svg
                    width="17"
                    height="3"
                    viewBox="0 0 17 3"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.4619 0.045166H1.46194C1.19673 0.045166 0.942374 0.150523 0.754838 0.338059C0.567302 0.525596 0.461945 0.77995 0.461945 1.04517C0.461945 1.31038 0.567302 1.56474 0.754838 1.75227C0.942374 1.93981 1.19673 2.04517 1.46194 2.04517H15.4619C15.7272 2.04517 15.9815 1.93981 16.1691 1.75227C16.3566 1.56474 16.4619 1.31038 16.4619 1.04517C16.4619 0.77995 16.3566 0.525596 16.1691 0.338059C15.9815 0.150523 15.7272 0.045166 15.4619 0.045166Z"
                      fill="#FF460C"
                    ></path>
                  </svg>
                </span>
                <span className="block group-hover:hidden">
                  <svg
                    width="17"
                    height="16"
                    viewBox="0 0 17 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.4619 7H9.46194V1C9.46194 0.734784 9.35659 0.48043 9.16905 0.292893C8.98151 0.105357 8.72716 0 8.46194 0C8.19673 0 7.94237 0.105357 7.75484 0.292893C7.5673 0.48043 7.46194 0.734784 7.46194 1V7H1.46194C1.19673 7 0.942374 7.10536 0.754838 7.29289C0.567302 7.48043 0.461945 7.73478 0.461945 8C0.461945 8.26522 0.567302 8.51957 0.754838 8.70711C0.942374 8.89464 1.19673 9 1.46194 9H7.46194V15C7.46194 15.2652 7.5673 15.5196 7.75484 15.7071C7.94237 15.8946 8.19673 16 8.46194 16C8.72716 16 8.98151 15.8946 9.16905 15.7071C9.35659 15.5196 9.46194 15.2652 9.46194 15V9H15.4619C15.7272 9 15.9815 8.89464 16.1691 8.70711C16.3566 8.51957 16.4619 8.26522 16.4619 8C16.4619 7.73478 16.3566 7.48043 16.1691 7.29289C15.9815 7.10536 15.7272 7 15.4619 7Z"
                      fill="black"
                    ></path>
                  </svg>
                </span>
              </div>
            </button>
            <button className="flex mb-8 pb-8 group w-full items-start justify-between border-b border-gray-100 text-left">
              <div className="max-w-xl pr-5">
                <h3 className="text-xl font-semibold text-black group-hover:text-green-900">
                  ¿Cuáles son los horarios de los diferentes laboratorios?
                </h3>
                <p className="hidden group-hover:block mt-3 text-lg text-gray-500">
                  Puedes encontrar los horarios presionando{" "}
                  <a href="/servicios/sucursales">
                    <u>aqui</u>
                  </a>
                  .
                </p>
              </div>
              <div className="pt-1">
                <span className="hidden group-hover:block">
                  <svg
                    width="17"
                    height="3"
                    viewBox="0 0 17 3"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.4619 0.045166H1.46194C1.19673 0.045166 0.942374 0.150523 0.754838 0.338059C0.567302 0.525596 0.461945 0.77995 0.461945 1.04517C0.461945 1.31038 0.567302 1.56474 0.754838 1.75227C0.942374 1.93981 1.19673 2.04517 1.46194 2.04517H15.4619C15.7272 2.04517 15.9815 1.93981 16.1691 1.75227C16.3566 1.56474 16.4619 1.31038 16.4619 1.04517C16.4619 0.77995 16.3566 0.525596 16.1691 0.338059C15.9815 0.150523 15.7272 0.045166 15.4619 0.045166Z"
                      fill="#FF460C"
                    ></path>
                  </svg>
                </span>
                <span className="block group-hover:hidden">
                  <svg
                    width="17"
                    height="16"
                    viewBox="0 0 17 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.4619 7H9.46194V1C9.46194 0.734784 9.35659 0.48043 9.16905 0.292893C8.98151 0.105357 8.72716 0 8.46194 0C8.19673 0 7.94237 0.105357 7.75484 0.292893C7.5673 0.48043 7.46194 0.734784 7.46194 1V7H1.46194C1.19673 7 0.942374 7.10536 0.754838 7.29289C0.567302 7.48043 0.461945 7.73478 0.461945 8C0.461945 8.26522 0.567302 8.51957 0.754838 8.70711C0.942374 8.89464 1.19673 9 1.46194 9H7.46194V15C7.46194 15.2652 7.5673 15.5196 7.75484 15.7071C7.94237 15.8946 8.19673 16 8.46194 16C8.72716 16 8.98151 15.8946 9.16905 15.7071C9.35659 15.5196 9.46194 15.2652 9.46194 15V9H15.4619C15.7272 9 15.9815 8.89464 16.1691 8.70711C16.3566 8.51957 16.4619 8.26522 16.4619 8C16.4619 7.73478 16.3566 7.48043 16.1691 7.29289C15.9815 7.10536 15.7272 7 15.4619 7Z"
                      fill="black"
                    ></path>
                  </svg>
                </span>
              </div>
            </button>
            <button className="flex mb-8 pb-8 group w-full items-start justify-between border-b border-gray-100 text-left">
              <div className="max-w-xl pr-5">
                <h3 className="text-xl font-semibold text-black group-hover:text-green-900">
                  ¿Que planes medicos aceptan?
                </h3>

                <ol className="hidden group-hover:block mt-3 text-lg text-gray-500">
                  <li>Blue Cross Blue Shield Federal</li>
                  <li>Blue Cross Blue Shield SSS</li>
                  <li>Federal Employee Program –FEP</li>
                  <li>First Medical Vital</li>
                  <li>Humana Gold Choice</li>
                  <li>Humana Gold Plus</li>
                  <li>Humana Health</li>
                  <li>Humana Insurance</li>
                  <li>International Medical Card</li>
                  <li>Mapfre Life</li>
                  <li>MCS Classicare</li>
                  <li>Medical Card System</li>
                  <li>Medicare</li>
                  <li>Medicare y Mucho Más</li>
                  <li>MMM Multihealth Vital</li>
                  <li>Molina Healthcare</li>
                  <li>Palic</li>
                  <li>Plan de Salud Menonita</li>
                  <li>Plan de Salud Menonita Vital</li>
                  <li>Preferred Medicare Choice</li>
                  <li>Triple S</li>
                  <li>Triple S Advantage</li>
                  <li>Triple S Axis</li>
                  <li>Triple S Selective</li>
                  <li>Triple S Vital</li>
                </ol>
              </div>
              <div className="pt-1">
                <span className="hidden group-hover:block">
                  <svg
                    width="17"
                    height="3"
                    viewBox="0 0 17 3"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.4619 0.045166H1.46194C1.19673 0.045166 0.942374 0.150523 0.754838 0.338059C0.567302 0.525596 0.461945 0.77995 0.461945 1.04517C0.461945 1.31038 0.567302 1.56474 0.754838 1.75227C0.942374 1.93981 1.19673 2.04517 1.46194 2.04517H15.4619C15.7272 2.04517 15.9815 1.93981 16.1691 1.75227C16.3566 1.56474 16.4619 1.31038 16.4619 1.04517C16.4619 0.77995 16.3566 0.525596 16.1691 0.338059C15.9815 0.150523 15.7272 0.045166 15.4619 0.045166Z"
                      fill="#FF460C"
                    ></path>
                  </svg>
                </span>
                <span className="block group-hover:hidden">
                  <svg
                    width="17"
                    height="16"
                    viewBox="0 0 17 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.4619 7H9.46194V1C9.46194 0.734784 9.35659 0.48043 9.16905 0.292893C8.98151 0.105357 8.72716 0 8.46194 0C8.19673 0 7.94237 0.105357 7.75484 0.292893C7.5673 0.48043 7.46194 0.734784 7.46194 1V7H1.46194C1.19673 7 0.942374 7.10536 0.754838 7.29289C0.567302 7.48043 0.461945 7.73478 0.461945 8C0.461945 8.26522 0.567302 8.51957 0.754838 8.70711C0.942374 8.89464 1.19673 9 1.46194 9H7.46194V15C7.46194 15.2652 7.5673 15.5196 7.75484 15.7071C7.94237 15.8946 8.19673 16 8.46194 16C8.72716 16 8.98151 15.8946 9.16905 15.7071C9.35659 15.5196 9.46194 15.2652 9.46194 15V9H15.4619C15.7272 9 15.9815 8.89464 16.1691 8.70711C16.3566 8.51957 16.4619 8.26522 16.4619 8C16.4619 7.73478 16.3566 7.48043 16.1691 7.29289C15.9815 7.10536 15.7272 7 15.4619 7Z"
                      fill="black"
                    ></path>
                  </svg>
                </span>
              </div>
            </button>
            <button className="flex mb-8 pb-8 group w-full items-start justify-between border-b border-gray-100 text-left">
              <div className="max-w-xl pr-5">
                <h3 className="text-xl font-semibold text-black group-hover:text-green-900">
                  ¿Que formas de pago aceptan?
                </h3>
                <p className="hidden group-hover:block mt-3 text-lg text-gray-500">
                  Efectivo, Cheque, ATH, Visa, Mastercard y American Express.
                </p>
              </div>
              <div className="pt-1">
                <span className="hidden group-hover:block">
                  <svg
                    width="17"
                    height="3"
                    viewBox="0 0 17 3"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.4619 0.045166H1.46194C1.19673 0.045166 0.942374 0.150523 0.754838 0.338059C0.567302 0.525596 0.461945 0.77995 0.461945 1.04517C0.461945 1.31038 0.567302 1.56474 0.754838 1.75227C0.942374 1.93981 1.19673 2.04517 1.46194 2.04517H15.4619C15.7272 2.04517 15.9815 1.93981 16.1691 1.75227C16.3566 1.56474 16.4619 1.31038 16.4619 1.04517C16.4619 0.77995 16.3566 0.525596 16.1691 0.338059C15.9815 0.150523 15.7272 0.045166 15.4619 0.045166Z"
                      fill="#FF460C"
                    ></path>
                  </svg>
                </span>
                <span className="block group-hover:hidden">
                  <svg
                    width="17"
                    height="16"
                    viewBox="0 0 17 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.4619 7H9.46194V1C9.46194 0.734784 9.35659 0.48043 9.16905 0.292893C8.98151 0.105357 8.72716 0 8.46194 0C8.19673 0 7.94237 0.105357 7.75484 0.292893C7.5673 0.48043 7.46194 0.734784 7.46194 1V7H1.46194C1.19673 7 0.942374 7.10536 0.754838 7.29289C0.567302 7.48043 0.461945 7.73478 0.461945 8C0.461945 8.26522 0.567302 8.51957 0.754838 8.70711C0.942374 8.89464 1.19673 9 1.46194 9H7.46194V15C7.46194 15.2652 7.5673 15.5196 7.75484 15.7071C7.94237 15.8946 8.19673 16 8.46194 16C8.72716 16 8.98151 15.8946 9.16905 15.7071C9.35659 15.5196 9.46194 15.2652 9.46194 15V9H15.4619C15.7272 9 15.9815 8.89464 16.1691 8.70711C16.3566 8.51957 16.4619 8.26522 16.4619 8C16.4619 7.73478 16.3566 7.48043 16.1691 7.29289C15.9815 7.10536 15.7272 7 15.4619 7Z"
                      fill="black"
                    ></path>
                  </svg>
                </span>
              </div>
            </button>
            <button className="flex mb-8 pb-8 group w-full items-start justify-between border-b border-gray-100 text-left">
              <div className="max-w-xl pr-5">
                <h3 className="text-xl font-semibold text-black group-hover:text-green-900">
                  ¿Donde puedo recoger mis resultados?
                </h3>
                <p className="hidden group-hover:block mt-3 text-lg text-gray-500">
                  Los resultados se pueden recoger en cualquiera de nuestras 3
                  sucursales, siempre y cuando lleve el recibo y una
                  identificación con foto.
                </p>
              </div>
              <div className="pt-1">
                <span className="hidden group-hover:block">
                  <svg
                    width="17"
                    height="3"
                    viewBox="0 0 17 3"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.4619 0.045166H1.46194C1.19673 0.045166 0.942374 0.150523 0.754838 0.338059C0.567302 0.525596 0.461945 0.77995 0.461945 1.04517C0.461945 1.31038 0.567302 1.56474 0.754838 1.75227C0.942374 1.93981 1.19673 2.04517 1.46194 2.04517H15.4619C15.7272 2.04517 15.9815 1.93981 16.1691 1.75227C16.3566 1.56474 16.4619 1.31038 16.4619 1.04517C16.4619 0.77995 16.3566 0.525596 16.1691 0.338059C15.9815 0.150523 15.7272 0.045166 15.4619 0.045166Z"
                      fill="#FF460C"
                    ></path>
                  </svg>
                </span>
                <span className="block group-hover:hidden">
                  <svg
                    width="17"
                    height="16"
                    viewBox="0 0 17 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.4619 7H9.46194V1C9.46194 0.734784 9.35659 0.48043 9.16905 0.292893C8.98151 0.105357 8.72716 0 8.46194 0C8.19673 0 7.94237 0.105357 7.75484 0.292893C7.5673 0.48043 7.46194 0.734784 7.46194 1V7H1.46194C1.19673 7 0.942374 7.10536 0.754838 7.29289C0.567302 7.48043 0.461945 7.73478 0.461945 8C0.461945 8.26522 0.567302 8.51957 0.754838 8.70711C0.942374 8.89464 1.19673 9 1.46194 9H7.46194V15C7.46194 15.2652 7.5673 15.5196 7.75484 15.7071C7.94237 15.8946 8.19673 16 8.46194 16C8.72716 16 8.98151 15.8946 9.16905 15.7071C9.35659 15.5196 9.46194 15.2652 9.46194 15V9H15.4619C15.7272 9 15.9815 8.89464 16.1691 8.70711C16.3566 8.51957 16.4619 8.26522 16.4619 8C16.4619 7.73478 16.3566 7.48043 16.1691 7.29289C15.9815 7.10536 15.7272 7 15.4619 7Z"
                      fill="black"
                    ></path>
                  </svg>
                </span>
              </div>
            </button>
            <button className="flex mb-8 pb-8 group w-full items-start justify-between border-b border-gray-100 text-left">
              <div className="max-w-xl pr-5">
                <h3 className="text-xl font-semibold text-black group-hover:text-green-900">
                  ¿Quien puede recibir el servicio al hogar?
                </h3>
                <p className="hidden group-hover:block mt-3 text-lg text-gray-500">
                  Toda persona que por alguna razón de salud no pueda llegar a
                  las facilidades de los Laboratorios Borinquen puede recibir
                  los servicios en el hogar. Puedes encontrar el laboratio mas
                  cercano presionando{" "}
                  <a href="/servicios/sucursales">
                    <u>aqui</u>
                  </a>
                  .
                </p>
              </div>
              <div className="pt-1">
                <span className="hidden group-hover:block">
                  <svg
                    width="17"
                    height="3"
                    viewBox="0 0 17 3"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.4619 0.045166H1.46194C1.19673 0.045166 0.942374 0.150523 0.754838 0.338059C0.567302 0.525596 0.461945 0.77995 0.461945 1.04517C0.461945 1.31038 0.567302 1.56474 0.754838 1.75227C0.942374 1.93981 1.19673 2.04517 1.46194 2.04517H15.4619C15.7272 2.04517 15.9815 1.93981 16.1691 1.75227C16.3566 1.56474 16.4619 1.31038 16.4619 1.04517C16.4619 0.77995 16.3566 0.525596 16.1691 0.338059C15.9815 0.150523 15.7272 0.045166 15.4619 0.045166Z"
                      fill="#FF460C"
                    ></path>
                  </svg>
                </span>
                <span className="block group-hover:hidden">
                  <svg
                    width="17"
                    height="16"
                    viewBox="0 0 17 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.4619 7H9.46194V1C9.46194 0.734784 9.35659 0.48043 9.16905 0.292893C8.98151 0.105357 8.72716 0 8.46194 0C8.19673 0 7.94237 0.105357 7.75484 0.292893C7.5673 0.48043 7.46194 0.734784 7.46194 1V7H1.46194C1.19673 7 0.942374 7.10536 0.754838 7.29289C0.567302 7.48043 0.461945 7.73478 0.461945 8C0.461945 8.26522 0.567302 8.51957 0.754838 8.70711C0.942374 8.89464 1.19673 9 1.46194 9H7.46194V15C7.46194 15.2652 7.5673 15.5196 7.75484 15.7071C7.94237 15.8946 8.19673 16 8.46194 16C8.72716 16 8.98151 15.8946 9.16905 15.7071C9.35659 15.5196 9.46194 15.2652 9.46194 15V9H15.4619C15.7272 9 15.9815 8.89464 16.1691 8.70711C16.3566 8.51957 16.4619 8.26522 16.4619 8C16.4619 7.73478 16.3566 7.48043 16.1691 7.29289C15.9815 7.10536 15.7272 7 15.4619 7Z"
                      fill="black"
                    ></path>
                  </svg>
                </span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQ;
