import React from "react";
import Maps from "./components/maps";
import Locations from "./components/locations";
import PageTitle from "./components/pagetitle";

export default function Sucursales() {
  return (
    <div className="bg-gray-50">
      <PageTitle/>
      <div className="pt-2">
        <Maps />
      </div>
      <div>
        <Locations />
      </div>
    </div>
  );
}
