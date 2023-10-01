"use client";
import React, { useMemo } from "react";

import { GoogleMap, MarkerF, useJsApiLoader } from "@react-google-maps/api";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import Container from "./layouts/container";
import SectionTitle from "./section-title";

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
    <Container className="relative mx-5 xl:mx-auto py-20">
      <SectionTitle title="Locate Us" />

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
        {!isLoaded && (
          <FontAwesomeIcon
            icon={faSpinner}
            spin
            size="6x"
            className="text-secondary"
          />
        )}
      </div>
    </Container>
  );
}
