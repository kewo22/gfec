"use client";
import React, { useMemo } from "react";

import { GoogleMap, MarkerF, useJsApiLoader } from "@react-google-maps/api";
import { ArrowUpRight } from "lucide-react";
import { useInView } from "react-intersection-observer";
import { motion, useReducedMotion } from "motion/react";

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

function InteractiveMap() {
  const [map, setMap] = React.useState<google.maps.Map | null>(null);

  const mapCenter = useMemo(() => {
    const latLngLiteral: google.maps.LatLngLiteral = {
      lat: +process.env.LAT! as unknown as number,
      lng: +process.env.LNG! as unknown as number,
    };
    return latLngLiteral;
  }, []);

  const { isLoaded, loadError } = useJsApiLoader({
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

  if (loadError) {
    return (
      <div className="flex flex-col items-center gap-3 text-center px-6">
        <p className="font-body text-slip-mist text-sm">
          The map couldn&apos;t load right now.
        </p>
        <a
          href={GFEC_GOOGLE_MAPS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="font-slip-display font-bold text-exam-navy hover:text-exam-navy-deep text-sm uppercase tracking-wide rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-exam-gold focus-visible:ring-offset-2 focus-visible:ring-offset-slip-surface"
        >
          Open in Google Maps
        </a>
      </div>
    );
  }

  if (!isLoaded) return <Spinner className="size-14" />;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="w-full h-full"
    >
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
    </motion.div>
  );
}

export default function GfecMap() {
  const { ref, inView } = useInView({ triggerOnce: true, rootMargin: "200px 0px" });
  const reduceMotion = useReducedMotion() ?? false;

  return (
    <section className="bg-gazette py-16 lg:py-24">
      <ContainerNew className="px-5 lg:px-12">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-end justify-between gap-4 mb-8"
        >
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
            className="group inline-flex items-center gap-1.5 font-slip-display font-bold text-exam-navy hover:text-exam-navy-deep text-sm uppercase tracking-wide rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-exam-gold focus-visible:ring-offset-2 focus-visible:ring-offset-gazette"
          >
            Get directions
            <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </motion.div>

        <div
          ref={ref}
          className="w-full h-[420px] rounded-sm overflow-hidden border border-slip-rule flex items-center justify-center bg-slip-surface shadow-[var(--shadow-slip-card)]"
        >
          {inView ? <InteractiveMap /> : <Spinner className="size-14" />}
        </div>
      </ContainerNew>
    </section>
  );
}
