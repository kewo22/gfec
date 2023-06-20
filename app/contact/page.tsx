"use client";

import React, { useMemo } from "react";
import { GoogleMap, MarkerF, useJsApiLoader } from "@react-google-maps/api";
import { Spinner } from "flowbite-react";
import GetInTouch from "../components/get-in-touch";

const containerStyle = {
  width: "100%",
  height: "100%",
};

const center = {
  lat: -3.745,
  lng: -38.523,
};

export default function About() {
  const [map, setMap] = React.useState<google.maps.Map | null>(null);

  const mapCenter = useMemo(
    () => ({
      lat: process.env.LAT as unknown as number,
      lng: process.env.LNG as unknown as number,
    }),
    []
  );

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.GL_MAP_KEY as unknown as string,
  });

  const onLoad = React.useCallback(function callback(map: google.maps.Map) {
    map.setZoom(16);
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map: any) {
    setMap(null);
  }, []);

  return (
    <section className="mb-20 sm:mb-32 mt-20 lg:mt-10 mx-7 lg:mx-20 xl:mx-36">
      <div className="mb-10">
        <h1 className="text-2xl sm:text-3xl font-bold leading-normal tracking-tight text-center text-gray-900 mb-5">
          How can we help?
        </h1>
        <p className="font-light text-base leading-8 tracking-tight text-gray-900 text-center lg:px-0">
          If you are planning to study abroad please fill below form or get in
          touch with our office and we will consult you throughout your journey.
        </p>
      </div>

      <div className="w-full h-[450px] flex items-center justify-center">
        {isLoaded && (
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={mapCenter}
            zoom={16}
            onLoad={onLoad}
            onUnmount={onUnmount}
          >
            <MarkerF
              position={mapCenter}
              onLoad={() => console.log("Marker Loaded")}
            />
          </GoogleMap>
        )}
        {!isLoaded && <Spinner size="xl" />}
      </div>
      <GetInTouch />
    </section>
  );
}
