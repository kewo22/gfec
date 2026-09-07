"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ComposableMap, ZoomableGroup, Marker, useMapContext } from "react-simple-maps";
import { ArrowUpRight, GraduationCap, Minus, Plus, RotateCcw, X } from "lucide-react";

import { COUNTRIES, UNIVERSITIES } from "../_constants/countries.constants";
import mapDots from "../_constants/map-dots.json";
import ContainerNew from "./layouts/container-new";

// Real approximate [lng, lat] per country (representative city/centroid).
const MARKER_COORDS: Record<string, [number, number]> = {
  united_kingdom: [-0.1, 51.5],
  ireland: [-6.3, 53.3],
  germany: [13.4, 52.5],
  france: [2.3, 48.9],
  spain: [-3.7, 40.4],
  malta: [14.5, 35.9],
  uae: [54.3, 24.5],
  singapore: [103.8, 1.35],
  australia: [133.8, -25.3],
};

const EUROPE_IDS = ["united_kingdom", "ireland", "germany", "france", "spain", "malta"];
const EUROPE_CENTROID: [number, number] = [8, 50];
const EUROPE_ZOOM_THRESHOLD = 2.6;

const DEFAULT_POSITION = { coordinates: [16, 18] as [number, number], zoom: 1 };

const MAP_WIDTH = 1400;
const MAP_HEIGHT = 640;

type CountryMarker = {
  id: string;
  country: string;
  route: string;
  coordinates: [number, number];
  universities: { id: number; name: string }[];
};

function buildMarkers(): CountryMarker[] {
  return COUNTRIES.filter((c) => MARKER_COORDS[c.id]).map((c) => ({
    id: c.id,
    country: c.country,
    route: c.route,
    coordinates: MARKER_COORDS[c.id],
    universities: UNIVERSITIES.filter((u) => u.category === c.id).map((u) => ({ id: u.id, name: u.name })),
  }));
}

// Pre-computed once at build time (see generate-map-dots.mjs): every land
// coordinate on a coarse grid, tested against real coastlines with d3-geo's
// geoContains. Dotted-continent map, not a solid fill or hand-drawn shape.
function DotGrid() {
  const { projection } = useMapContext();
  return (
    <g>
      {(mapDots as Array<[number, number] | [number, number, string]>).map(([lng, lat], i) => {
        const point = projection([lng, lat]);
        if (!point) return null;
        return <circle key={i} cx={point[0]} cy={point[1]} r={1.6} fill="var(--color-gazette)" fillOpacity={0.28} />;
      })}
    </g>
  );
}

function PinMarker({
  marker,
  zoom,
  onSelect,
}: {
  marker: CountryMarker;
  zoom: number;
  onSelect: (id: string) => void;
}) {
  const base = 4.2 + Math.min(marker.universities.length, 5) * 0.75;
  const r = base / zoom;
  return (
    <Marker
      coordinates={marker.coordinates}
      onMouseEnter={() => onSelect(marker.id)}
      onClick={() => onSelect(marker.id)}
      style={{ default: { cursor: "pointer" }, hover: { cursor: "pointer" }, pressed: { cursor: "pointer" } }}
    >
      <circle r={r * 2.3} fill="var(--color-stamp-red)" fillOpacity={0.16} />
      <circle r={r} fill="var(--color-stamp-red)" stroke="var(--color-gazette)" strokeWidth={1.1 / zoom} filter="url(#pin-shadow)" />
      <circle r={r * 0.32} fill="var(--color-gazette)" />
    </Marker>
  );
}

export default function WorldPartnersMap() {
  const markers = useMemo(() => buildMarkers(), []);
  const [position, setPosition] = useState(DEFAULT_POSITION);
  const [activeId, setActiveId] = useState<string | null>(null);

  const europeExpanded = position.zoom >= EUROPE_ZOOM_THRESHOLD;
  const europeMarkers = markers.filter((m) => EUROPE_IDS.includes(m.id));
  const soloMarkers = markers.filter((m) => !EUROPE_IDS.includes(m.id));
  const europeCount = europeMarkers.reduce((sum, m) => sum + m.universities.length, 0);

  const active = markers.find((m) => m.id === activeId) ?? null;

  const selectMarker = (id: string) => setActiveId((cur) => (cur === id ? null : id));

  const zoomBy = (factor: number) =>
    setPosition((pos) => ({ ...pos, zoom: Math.max(1, Math.min(8, pos.zoom * factor)) }));

  const resetView = () => {
    setPosition(DEFAULT_POSITION);
    setActiveId(null);
  };

  const focusEurope = () => {
    setPosition({ coordinates: EUROPE_CENTROID, zoom: 4 });
    setActiveId(null);
  };

  return (
    <div className="relative">
      <div className="relative w-full aspect-[21/9] sm:aspect-[2.4/1] overflow-hidden bg-exam-ink">
        <ComposableMap
          projection="geoEqualEarth"
          projectionConfig={{ scale: MAP_WIDTH / 4.9 }}
          width={MAP_WIDTH}
          height={MAP_HEIGHT}
          className="w-full h-full"
        >
          <defs>
            <filter id="pin-shadow" x="-60%" y="-60%" width="220%" height="220%">
              <feDropShadow dx="0" dy="0.4" stdDeviation="0.6" floodColor="#000000" floodOpacity="0.45" />
            </filter>
          </defs>

          <ZoomableGroup
            center={position.coordinates}
            zoom={position.zoom}
            minZoom={1}
            maxZoom={8}
            onMoveEnd={(pos) => setPosition({ coordinates: pos.coordinates, zoom: pos.zoom })}
          >
            <DotGrid />

            {soloMarkers.map((marker) => (
              <PinMarker key={marker.id} marker={marker} zoom={position.zoom} onSelect={selectMarker} />
            ))}

            {europeExpanded ? (
              europeMarkers.map((marker) => (
                <PinMarker key={marker.id} marker={marker} zoom={position.zoom} onSelect={selectMarker} />
              ))
            ) : (
              <Marker
                key="europe-cluster"
                coordinates={EUROPE_CENTROID}
                onClick={focusEurope}
                style={{ default: { cursor: "pointer" }, hover: { cursor: "pointer" }, pressed: { cursor: "pointer" } }}
              >
                <circle r={11 / position.zoom} fill="var(--color-stamp-red)" fillOpacity={0.18} />
                <circle
                  r={6.8 / position.zoom}
                  fill="var(--color-stamp-red)"
                  stroke="var(--color-gazette)"
                  strokeWidth={1 / position.zoom}
                  filter="url(#pin-shadow)"
                />
                <text
                  textAnchor="middle"
                  dominantBaseline="central"
                  style={{
                    fontFamily: "var(--font-slip-display)",
                    fontWeight: 700,
                    fill: "var(--color-gazette)",
                    fontSize: `${7 / position.zoom}px`,
                  }}
                >
                  {europeCount}
                </text>
              </Marker>
            )}
          </ZoomableGroup>
        </ComposableMap>

        <div className="absolute top-4 left-5 lg:left-8 slip-mono text-[10px] uppercase tracking-wider text-gazette/50 pointer-events-none">
          Partner register — coordinates
        </div>

        <div className="absolute top-4 right-5 lg:right-8 flex flex-col rounded-sm border border-gazette/15 bg-exam-ink/85 shadow-[0_10px_24px_-12px_rgba(0,0,0,0.6)] overflow-hidden">
          <button
            type="button"
            onClick={() => zoomBy(1.5)}
            aria-label="Zoom in"
            className="w-9 h-9 flex items-center justify-center text-gazette/80 hover:text-gazette hover:bg-gazette/10 transition-colors border-b border-gazette/15"
          >
            <Plus size={14} />
          </button>
          <button
            type="button"
            onClick={() => zoomBy(1 / 1.5)}
            aria-label="Zoom out"
            className="w-9 h-9 flex items-center justify-center text-gazette/80 hover:text-gazette hover:bg-gazette/10 transition-colors border-b border-gazette/15"
          >
            <Minus size={14} />
          </button>
          <button
            type="button"
            onClick={resetView}
            aria-label="Reset view"
            className="w-9 h-9 flex items-center justify-center text-gazette/80 hover:text-gazette hover:bg-gazette/10 transition-colors"
          >
            <RotateCcw size={12} />
          </button>
        </div>

        {active && (
          <div className="absolute bottom-4 left-5 right-5 sm:right-auto sm:left-8 sm:w-80 z-20 bg-gazette border border-exam-ink/15 rounded-sm shadow-[var(--shadow-slip-card)] p-5">
            <button
              type="button"
              onClick={() => setActiveId(null)}
              className="absolute top-3 right-3 text-exam-ink/40 hover:text-exam-ink transition-colors"
              aria-label="Close"
            >
              <X size={14} />
            </button>

            <div className="flex items-center gap-2 mb-1">
              <GraduationCap size={16} className="text-exam-green shrink-0" />
              <h3 className="font-slip-display font-bold text-exam-ink text-lg">{active.country}</h3>
            </div>
            <p className="slip-mono text-exam-green text-[11px] uppercase tracking-wide mb-3">
              {active.universities.length} partner {active.universities.length === 1 ? "university" : "universities"}
            </p>

            <ul className="mb-4 space-y-1">
              {active.universities.slice(0, 4).map((u) => (
                <li key={u.id} className="font-body text-slip-mist text-sm leading-snug line-clamp-1">
                  {u.name}
                </li>
              ))}
              {active.universities.length > 4 && (
                <li className="font-body text-slip-mist/70 text-xs">+{active.universities.length - 4} more</li>
              )}
            </ul>

            <Link
              href={`/study-abroad/${active.route}`}
              className="group flex items-center justify-center gap-1.5 w-full bg-exam-ink text-gazette rounded-sm py-2.5 font-slip-display font-bold text-xs uppercase tracking-wide transition-colors hover:bg-exam-green-deep"
            >
              View Destination
              <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        )}
      </div>

      <ContainerNew className="px-5 lg:px-12">
        <p className="font-body text-slip-mist text-sm mt-6 leading-relaxed">
          {markers.length} countries on file — scroll or pinch to zoom, drag to pan, and use the{" "}
          <span className="slip-mono text-exam-green">{europeCount}</span> badge to open the Europe cluster.
        </p>
      </ContainerNew>
    </div>
  );
}
