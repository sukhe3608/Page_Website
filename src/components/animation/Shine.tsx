import type { ReactNode } from "react";
import { cn } from "@/utils/cn";

interface ShineProps {
  children: ReactNode;
  className?: string;
  /** Duration of one sweep in seconds. */
  duration?: number;
  /** Sweep angle in degrees. */
  angle?: number;
  color?: string;
}

/**
 * Periodic diagonal shine sweep across a surface (pure CSS).
 * Globally disabled under prefers-reduced-motion via the marquee rules.
 */
export function Shine({ children, className, duration = 3.2, angle = -20, color = "rgba(255,255,255,0.55)" }: ShineProps) {
  return (
    <div className={cn("group/shine relative overflow-hidden", className)}>
      {children}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 w-1/3 opacity-0 transition-opacity duration-500 group-hover/shine:opacity-100"
        style={{
          left: "-40%",
          transform: `skewX(${angle}deg)`,
          background: `linear-gradient(90deg, transparent, ${color}, transparent)`,
          animation: `shine-sweep ${duration}s ease-in-out infinite`,
        }}
      />
    </div>
  );
}