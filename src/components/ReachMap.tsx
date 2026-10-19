import { useEffect, useMemo, useRef, useState } from "react";
import { geoMercator, geoPath } from "d3-geo";
import { feature } from "topojson-client";

export type ReachCountry = {
  id: string; // ISO numeric id used in world-atlas topojson
  code: string;
  name: string;
  count: number;
};

export const REACH_COUNTRIES: ReachCountry[] = [
  { id: "703", code: "SK", name: "Slovensko", count: 346 },
  { id: "203", code: "CZ", name: "Česká republika", count: 38 },
  { id: "040", code: "AT", name: "Rakúsko", count: 8 },
  { id: "348", code: "HU", name: "Maďarsko", count: 6 },
  { id: "616", code: "PL", name: "Poľsko", count: 4 },
  { id: "276", code: "DE", name: "Nemecko", count: 3 },
];

const TOPO_URL = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const WIDTH = 520;
const HEIGHT = 420;

type Geo = {
  type: string;
  id?: string | number;
  properties: { name?: string };
  geometry: unknown;
};

export default function ReachMap() {
  const [geos, setGeos] = useState<Geo[] | null>(null);
  const [active, setActive] = useState<string | null>(null);
  const [pinned, setPinned] = useState<string | null>(null);
  const [tip, setTip] = useState<{ x: number; y: number } | null>(null);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let cancelled = false;
    fetch(TOPO_URL)
      .then((r) => r.json())
      .then((topo) => {
        if (cancelled) return;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const fc = feature(topo as any, (topo as any).objects.countries) as any;
        setGeos(fc.features as Geo[]);
      })
      .catch(() => setGeos([]));
    return () => {
      cancelled = true;
    };
  }, []);

  const { path, centroids } = useMemo(() => {
    const projection = geoMercator()
      .center([15.5, 50.2])
      .scale(1050)
      .translate([WIDTH / 2, HEIGHT / 2]);
    const p = geoPath(projection);
    return { path: p, centroids: projection };
  }, []);

  const byId = useMemo(
    () => new Map(REACH_COUNTRIES.map((c) => [c.id.replace(/^0+/, ""), c])),
    [],
  );

  const shown = pinned ?? active;
  const shownCountry = REACH_COUNTRIES.find((c) => c.id.replace(/^0+/, "") === shown);

  return (
    <div ref={wrapRef} className="relative">
      <svg
        viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
        className="w-full"
        role="img"
        aria-label="Mapa krajín s realizáciami"
        onMouseLeave={() => {
          setActive(null);
          setTip(null);
        }}
      >
        <defs>
          <radialGradient id="mapGlow" cx="50%" cy="45%" r="60%">
            <stop offset="0%" stopColor="oklch(0.72 0.19 55)" stopOpacity="0.18" />
            <stop offset="100%" stopColor="oklch(0.72 0.19 55)" stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width={WIDTH} height={HEIGHT} fill="url(#mapGlow)" />

        {geos?.map((g, i) => {
          const gid = String(g.id ?? "").replace(/^0+/, "");
          const match = byId.get(gid);
          const isActive = shown === gid;
          return (
            <path
              key={`${gid}-${i}`}
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              d={path(g as any) ?? undefined}
              className={match ? "cursor-pointer transition-all" : "transition-colors"}
              fill={
                match
                  ? isActive
                    ? "oklch(0.72 0.19 55)"
                    : "oklch(0.72 0.19 55 / 0.42)"
                  : "oklch(0.28 0.01 60 / 0.55)"
              }
              stroke={match ? "oklch(0.82 0.17 60)" : "oklch(0.45 0.01 60 / 0.6)"}
              strokeWidth={match ? 1 : 0.5}
              onMouseEnter={(e) => {
                if (!match) return;
                setActive(gid);
                const r = wrapRef.current?.getBoundingClientRect();
                if (r) setTip({ x: e.clientX - r.left, y: e.clientY - r.top });
              }}
              onMouseMove={(e) => {
                if (!match) return;
                const r = wrapRef.current?.getBoundingClientRect();
                if (r) setTip({ x: e.clientX - r.left, y: e.clientY - r.top });
              }}
              onClick={() => match && setPinned(pinned === gid ? null : gid)}
            />
          );
        })}

        {geos &&
          REACH_COUNTRIES.map((c) => {
            const g = geos.find((x) => String(x.id ?? "").replace(/^0+/, "") === c.id.replace(/^0+/, ""));
            if (!g) return null;
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const [cx, cy] = path.centroid(g as any);
            if (!Number.isFinite(cx)) return null;
            return (
              <g key={c.code} pointerEvents="none">
                <circle cx={cx} cy={cy} r={11} fill="oklch(0.16 0.01 60 / 0.85)" />
                <text
                  x={cx}
                  y={cy + 3.5}
                  textAnchor="middle"
                  fontSize="9"
                  className="fill-current font-semibold text-foreground"
                >
                  {c.code}
                </text>
              </g>
            );
          })}

        {!geos && (
          <text
            x={WIDTH / 2}
            y={HEIGHT / 2}
            textAnchor="middle"
            fontSize="12"
            className="fill-current text-muted-foreground"
          >
            Načítavam mapu…
          </text>
        )}
      </svg>

      {shownCountry && (
        <div
          className="pointer-events-none absolute z-10 -translate-x-1/2 -translate-y-full rounded-md border border-primary/50 bg-card px-3 py-2 shadow-glow"
          style={{
            left: tip ? tip.x : "50%",
            top: tip ? tip.y - 10 : 20,
          }}
        >
          <div className="font-display text-sm font-semibold text-foreground">
            {shownCountry.name}
          </div>
          <div className="text-xs text-primary">{shownCountry.count} realizácií</div>
        </div>
      )}

      <div className="mt-4 flex flex-wrap gap-2">
        {REACH_COUNTRIES.map((c) => {
          const gid = c.id.replace(/^0+/, "");
          const isActive = shown === gid;
          return (
            <button
              key={c.code}
              onMouseEnter={() => setActive(gid)}
              onMouseLeave={() => setActive(null)}
              onClick={() => setPinned(pinned === gid ? null : gid)}
              className={`rounded-md border px-3 py-1.5 text-xs font-semibold transition-colors ${
                isActive
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-card text-muted-foreground hover:border-primary/50 hover:text-foreground"
              }`}
            >
              {c.name} · {c.count}
            </button>
          );
        })}
      </div>
    </div>
  );
}
