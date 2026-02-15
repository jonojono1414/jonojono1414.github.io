"use client";

import { useEffect, useRef, useState } from "react";
import type { DangerDetail } from "../data/pests";

type Props = {
  data: DangerDetail;
  size?: number;
};

const LABELS = ["衛生", "皮膚", "物損", "精神", "繁殖"] as const;
const KEYS: (keyof DangerDetail)[] = ["hygiene", "skin", "damage", "mental", "breeding"];
const LEVELS = [1, 2, 3, 4, 5];

function polarToXY(cx: number, cy: number, r: number, index: number, total: number) {
  const angle = (Math.PI * 2 * index) / total - Math.PI / 2;
  return { x: cx + r * Math.cos(angle), y: cy + r * Math.sin(angle) };
}

function pentagonPoints(cx: number, cy: number, r: number) {
  return Array.from({ length: 5 }, (_, i) => {
    const p = polarToXY(cx, cy, r, i, 5);
    return `${p.x},${p.y}`;
  }).join(" ");
}

function interpolatePoints(
  cx: number,
  cy: number,
  targets: { x: number; y: number }[],
  progress: number
) {
  return targets
    .map((p) => {
      const x = cx + (p.x - cx) * progress;
      const y = cy + (p.y - cy) * progress;
      return `${x},${y}`;
    })
    .join(" ");
}

export default function RadarChart({ data, size = 260 }: Props) {
  const cx = size / 2;
  const cy = size / 2;
  const maxR = size * 0.38;
  const stepR = maxR / 5;

  const ref = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          observer.disconnect();

          const duration = 600;
          const start = performance.now();
          function tick(now: number) {
            const elapsed = now - start;
            const t = Math.min(elapsed / duration, 1);
            // easeOutCubic
            const eased = 1 - Math.pow(1 - t, 3);
            setProgress(eased);
            if (t < 1) requestAnimationFrame(tick);
          }
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const dataPoints = KEYS.map((key, i) => {
    const val = data[key];
    const r = (val / 5) * maxR;
    return polarToXY(cx, cy, r, i, 5);
  });

  const animatedPolygon = interpolatePoints(cx, cy, dataPoints, progress);
  const animatedPoints = dataPoints.map((p) => ({
    x: cx + (p.x - cx) * progress,
    y: cy + (p.y - cy) * progress,
  }));

  return (
    <div ref={ref} className="flex flex-col items-center gap-3">
      <svg
        viewBox={`0 0 ${size} ${size}`}
        width={size}
        height={size}
        className="max-w-full"
        role="img"
        aria-label="危険度詳細レーダーチャート"
      >
        {/* Background pentagon grids */}
        {LEVELS.map((level) => (
          <polygon
            key={level}
            points={pentagonPoints(cx, cy, stepR * level)}
            fill="none"
            stroke="#d1d5db"
            strokeWidth={level === 5 ? 1.5 : 0.8}
            opacity={0.6}
          />
        ))}

        {/* Axis lines */}
        {Array.from({ length: 5 }, (_, i) => {
          const p = polarToXY(cx, cy, maxR, i, 5);
          return <line key={i} x1={cx} y1={cy} x2={p.x} y2={p.y} stroke="#d1d5db" strokeWidth={0.8} opacity={0.6} />;
        })}

        {/* Data polygon (animated) */}
        <polygon points={animatedPolygon} fill="rgba(16, 185, 129, 0.25)" stroke="#10b981" strokeWidth={2} />

        {/* Data points (animated) */}
        {animatedPoints.map((p, i) => (
          <circle key={i} cx={p.x} cy={p.y} r={4} fill="#10b981" stroke="#fff" strokeWidth={1.5} opacity={progress} />
        ))}

        {/* Labels */}
        {LABELS.map((label, i) => {
          const labelR = maxR + 22;
          const p = polarToXY(cx, cy, labelR, i, 5);
          return (
            <text
              key={i}
              x={p.x}
              y={p.y}
              textAnchor="middle"
              dominantBaseline="central"
              className="fill-gray-600 text-xs font-bold"
              fontSize={12}
            >
              {label}
            </text>
          );
        })}

        {/* Value labels (fade in) */}
        {KEYS.map((key, i) => {
          const val = data[key];
          const r = (val / 5) * maxR + 12;
          const p = polarToXY(cx, cy, r, i, 5);
          return (
            <text
              key={i}
              x={p.x}
              y={p.y}
              textAnchor="middle"
              dominantBaseline="central"
              className="fill-emerald-600 font-bold"
              fontSize={10}
              opacity={progress}
            >
              {val}
            </text>
          );
        })}
      </svg>

      {/* Legend */}
      <div
        className="flex flex-wrap justify-center gap-x-4 gap-y-1 text-xs text-gray-500 transition-opacity duration-500"
        style={{ opacity: progress }}
      >
        {LABELS.map((label, i) => (
          <span key={i}>
            <span className="font-bold text-emerald-600">{label}</span>
            <span className="ml-1">{data[KEYS[i]]}/5</span>
          </span>
        ))}
      </div>
    </div>
  );
}
