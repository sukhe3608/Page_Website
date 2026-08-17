import { motion, useReducedMotion } from "framer-motion";
import { isBot } from "@/utils/env";
import { cn } from "@/utils/cn";

interface AuroraProps {
  className?: string;
  /** Blob colors. */
  colors?: string[];
  /** Blur applied to the blobs. */
  blur?: string;
  /** Base opacity of the aurora layer. */
  opacity?: number;
}

/**
 * Drifting gradient blobs — a soft animated backdrop.
 * Renders as a static gradient layer for bots and reduced-motion users.
 */
export function Aurora({ className, colors = ["#155EEF", "#7C5CFC", "#14B8A6"], blur = "90px", opacity = 0.5 }: AuroraProps) {
  const reduce = useReducedMotion();

  if (isBot || reduce) {
    return (
      <div aria-hidden="true" className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}>
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(40% 50% at 20% 30%, ${colors[0]} ${opacity * 30}%, transparent 70%), radial-gradient(40% 50% at 80% 20%, ${colors[1]} ${opacity * 30}%, transparent 70%), radial-gradient(45% 55% at 60% 80%, ${colors[2]} ${opacity * 30}%, transparent 70%)`,
            filter: `blur(${blur})`,
          }}
        />
      </div>
    );
  }

  return (
    <div aria-hidden="true" className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}>
      {colors.map((color, i) => (
        <motion.div
          key={color}
          className="absolute rounded-full"
          style={{
            width: "55%",
            aspectRatio: "1",
            background: color,
            opacity,
            filter: `blur(${blur})`,
          }}
          initial={{ x: `${[0, 45, -30][i]}%`, y: `${[0, -20, 40][i]}%` }}
          animate={{
            x: [`${[0, 45, -30][i]}%`, `${[55, -40, 35][i]}%`, `${[0, 45, -30][i]}%`],
            y: [`${[0, -20, 40][i]}%`, `${[30, 45, -35][i]}%`, `${[0, -20, 40][i]}%`],
          }}
          transition={{ duration: 26 + i * 9, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}