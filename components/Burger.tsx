import React from "react";
import Link from "next/link";

function Burger() {
  return (
    <div
      className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
      role="menu"
      aria-orientation="vertical"
      aria-labelledby="menu-button"
    >
      <div className="py-1" role="none">
        <div className="text-gray-700 block px-4 py-2 text-sm shadow-sm">
          <Link href="/">Inicio</Link>
        </div>
        <div className="text-gray-700 block px-4 py-2 text-sm shadow-sm">
          <Link href="/nosotros">Nosotros</Link>
        </div>
        <div className="text-gray-700 block px-4 py-2 text-sm shadow-sm">
          <Link href="/servicios">Servicios</Link>
        </div>
        <div className="text-gray-700 block px-4 py-2 text-sm shadow-sm">
          <Link href="/pruebas">Pruebas</Link>
        </div>
        <div className="text-gray-700 block px-4 py-2 text-sm shadow-sm">
          <Link href="/preguntas">Preguntas Frecuentes</Link>
        </div>
        <div className="text-gray-700 block px-4 py-2 text-sm">
          <Link href="/contacto">Contacto</Link>
        </div>
      </div>
    </div>
  );
}

export default Burger;
