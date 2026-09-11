"use client";
import React, { useMemo } from "react";

import { GoogleMap, MarkerF, useJsApiLoader } from "@react-google-maps/api";
import { ArrowUpRight } from "lucide-react";

import { GFEC_GOOGLE_MAPS_URL } from "../_constants/google-maps.constants";
import ContainerNew from "./layouts/container-new";
import { Spinner } from "@/app/_components/ui/spinner";

const MAP_STYLE: google.maps.MapTypeStyle[] = [
  { elementType: "geometry", stylers: [{ color: "#322d24" }] },
  { elementType: "labels.text.stroke", stylers: [{ color: "#171512" }] },
  { elementType: "labels.text.fill", stylers: [{ color: "#d9cfae" }] },
  { featureType: "water", elementType: "geometry", stylers: [{ color: "#171512" }] },
  { featureType: "road", elementType: "geometry", stylers: [{ color: "#423b2e" }] },
  { featureType: "poi", elementType: "labels", stylers: [{ visibility: "off" }] },
  { featureType: "transit", elementType: "labels", stylers: [{ visibility: "off" }] },
];

const containerStyle = {
  width: "100%",
  height: "100%",
};

const MARKER_ICON =
  "data:image/svg+xml;charset=UTF-8," +
  encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
      <circle cx="20" cy="20" r="18" fill="#a63a2e" opacity="0.18" />
      <circle cx="20" cy="20" r="10" fill="#a63a2e" stroke="#fffdf6" stroke-width="2.5" />
    </svg>
  `);

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
    <section className="bg-gazette py-16 lg:py-24">
      <ContainerNew className="px-5 lg:px-12">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
          <div>
            <p className="slip-mono text-exam-navy text-xs uppercase tracking-wider mb-3">Find us</p>
            <h2 className="font-slip-display font-bold text-exam-ink text-2xl lg:text-3xl">
              Visit our Colombo office
            </h2>
          </div>
          <a
            href={GFEC_GOOGLE_MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1.5 font-slip-display font-bold text-exam-navy hover:text-exam-navy-deep text-sm uppercase tracking-wide"
          >
            Get directions
            <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        <div className="w-full h-[420px] rounded-sm overflow-hidden border border-slip-rule flex items-center justify-center bg-slip-surface shadow-[var(--shadow-slip-card)]">
          {isLoaded && (
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={mapCenter}
              zoom={16}
              onLoad={onLoad}
              onUnmount={onUnmount}
              options={{
                styles: MAP_STYLE,
                disableDefaultUI: true,
                zoomControl: true,
              }}
            >
              <MarkerF position={mapCenter} icon={MARKER_ICON} />
            </GoogleMap>
          )}
          {!isLoaded && <Spinner className="size-14" />}
        </div>
      </ContainerNew>
    </section>
  );
}
