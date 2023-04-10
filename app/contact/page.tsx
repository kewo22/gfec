"use client";

import React, { useCallback, useEffect, useMemo, useState } from "react";
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

  const mapCenter = useMemo(() => ({ lat: 6.8939848, lng: 79.866222 }), []);

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyB4WP_EMYOUSDuSzGOjNurg2TLNOj-R_gU",
  });

  const onLoad = React.useCallback(function callback(map: google.maps.Map) {
    map.setZoom(16);
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map: any) {
    setMap(null);
  }, []);

  return (
    <section className="mb-20 lg:mt-10">
      <div className="w-full h-96 flex items-center justify-center mb-10">
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
