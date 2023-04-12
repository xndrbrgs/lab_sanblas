"use client";

import React from "react";
import {
  GoogleMap,
  Marker,
  useJsApiLoader,
  MarkerClusterer,
} from "@react-google-maps/api";

const containerStyle = {
  width: "700px",
  height: "500px",
};

const center = {
  lat: 17.9687409,
  lng: -66.4138803,
};

const labs = [
  { lat: 18.080934, lng: -66.4138803 },
  { lat: 17.961141, lng: -66.405202 },
  { lat: 18.111905, lng: -66.166 },
];

const zoom = 10;

function createKey(labs) {
  return labs.lat + labs.lng;
}

function Maps() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY || "",
  });

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.setZoom(zoom);

    setMap(map);
  }, []);

  const options = {
    imagePath:
      "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m", // so you must have m1.png, m2.png, m3.png, m4.png, m5.png and m6.png in that folder
  };

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={zoom}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      <MarkerClusterer options={options}>
        {(clusterer) =>
          labs.map((lab) => (
            <Marker key={createKey(lab)} position={lab} clusterer={clusterer} />
          ))
        }
      </MarkerClusterer>
      <></>
    </GoogleMap>
  ) : (
    <></>
  );
}

export default React.memo(Maps);
