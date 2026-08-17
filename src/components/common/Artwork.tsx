import { useId, type ReactNode } from "react";
import { cn } from "@/utils/cn";

export type Tint = "blue" | "navy" | "violet" | "teal";

export const tintStyles: Record<Tint, { bg: string; text: string; softBg: string; border: string }> = {
  blue: { bg: "from-primary to-primary-light", text: "text-primary", softBg: "bg-soft", border: "border-primary/20" },
  navy: { bg: "from-navy to-navy-soft", text: "text-navy", softBg: "bg-navy/5", border: "border-navy/20" },
  violet: { bg: "from-violet-600 to-violet-500", text: "text-violet-600", softBg: "bg-violet-50", border: "border-violet-200" },
  teal: { bg: "from-teal-600 to-teal-500", text: "text-teal-700", softBg: "bg-teal-50", border: "border-teal-200" },
};

export type ArtworkPattern = "flow" | "bars" | "map";

interface ArtworkProps {
  tint?: Tint;
  pattern?: ArtworkPattern;
  className?: string;
  children?: ReactNode;
}

/**
 * Generated abstract SVG artwork used in place of stock photography —
 * gradient mesh, grid, glow and a decorative line pattern per tint.
 */
export function Artwork({ tint = "blue", pattern = "flow", className, children }: ArtworkProps) {
  const uid = useId().replace(/[^a-zA-Z0-9]/g, "");

  return (
    <div className={cn("relative overflow-hidden bg-gradient-to-br text-white", tintStyles[tint].bg, className)}>
      <svg className="absolute inset-0 h-full w-full" aria-hidden="true">
        <defs>
          <linearGradient id={`glow-${uid}`} x1="0" y1="0" x2="1" y2="1">
            <stop stopColor="rgba(255,255,255,0.22)" />
            <stop offset="1" stopColor="rgba(255,255,255,0)" />
          </linearGradient>
          <pattern id={`grid-${uid}`} width="26" height="26" patternUnits="userSpaceOnUse">
            <path d="M26 0H0V26" fill="none" stroke="rgba(255,255,255,0.13)" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#glow-${uid})`} />
        <rect width="100%" height="100%" fill={`url(#grid-${uid})`} />
        <circle cx="86%" cy="14%" r="26%" fill="rgba(255,255,255,0.1)" />
        <circle cx="10%" cy="90%" r="22%" fill="rgba(255,255,255,0.07)" />
        {pattern === "flow" && (
          <g fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" strokeLinecap="round">
            <path d="M12 72 C 35 42, 55 92, 88 56" />
            <path d="M30 92 C 46 62, 68 100, 96 72" strokeDasharray="4 5" />
            <path d="M20 40 C 42 24, 62 48, 80 34" strokeWidth="1" strokeDasharray="2 4" />
          </g>
        )}
        {pattern === "bars" && (
          <g fill="rgba(255,255,255,0.3)">
            {[34, 50, 42, 64, 55, 78, 68].map((h, i) => (
              <rect key={i} x={14 + i * 11.5} y={92 - h} width="7" height={h} rx="2" />
            ))}
            <g fill="rgba(255,255,255,0.18)">
              <rect x="8" y="80" width="6" height="16" rx="2" />
              <rect x="100" y="62" width="6" height="34" rx="2" />
            </g>
          </g>
        )}
        {pattern === "map" && (
          <g fill="rgba(255,255,255,0.32)">
            {Array.from({ length: 8 * 8 }, (_, i) => {
              const x = (i % 8) * 12.5 + 6;
              const y = Math.floor(i / 8) * 12.5 + 6;
              const jitter = i % 3;
              return <circle key={i} cx={x + jitter} cy={y + (jitter % 2) * 3} r={i % 5 === 0 ? 2.4 : 1.5} />;
            })}
          </g>
        )}
      </svg>
      <div className="relative h-full w-full">{children}</div>
    </div>
  );
}