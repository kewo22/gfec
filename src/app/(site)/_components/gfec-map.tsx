"use client";
import React, { useMemo } from "react";

import { GoogleMap, MarkerF, useJsApiLoader } from "@react-google-maps/api";

import ContainerNew from "./layouts/container-new";
import { Spinner } from "@/app/_components/ui/spinner";

const containerStyle = {
  width: "100%",
  height: "100%",
};

export default function GfecMap() {
  const [map, setMap] = React.useState<google.maps.Map | null>(null);

  const mapCenter = useMemo(() => {
    const latLngLiteral: google.maps.LatLngLiteral = {
      lat: +process.env.LAT! as unknown as number,
      lng: +process.env.LNG! as unknown as number,
    };
    return latLngLiteral;
  }, []);

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
    <section className="bg-paper py-16 lg:py-20">
      <ContainerNew className="px-5 lg:px-12">
        <p className="ledger-ref text-gold text-xs uppercase mb-3">Find us</p>
        <h2 className="font-display font-bold text-navy text-2xl lg:text-3xl mb-8">Visit our Colombo office</h2>

        <div className="w-full h-[420px] rounded-sm overflow-hidden border border-hairline flex items-center justify-center">
          {isLoaded && (
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={mapCenter}
              zoom={16}
              onLoad={onLoad}
              onUnmount={onUnmount}
            >
              <MarkerF position={mapCenter} />
            </GoogleMap>
          )}
          {!isLoaded && <Spinner className="size-14" />}
        </div>
      </ContainerNew>
    </section>
  );
}
