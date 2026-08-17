import { motion, useReducedMotion } from "framer-motion";
import { motionTokens } from "@/animations/tokens";
import { isBot } from "@/utils/env";

interface LineDrawProps {
  d: string;
  className?: string;
  viewBox?: string;
  strokeWidth?: number;
  duration?: number;
}

/** Draws an SVG path when it scrolls into view. */
export function LineDraw({ d, className, viewBox = "0 0 200 60", strokeWidth = 1.5, duration = 1.6 }: LineDrawProps) {
  const reduce = useReducedMotion();
  if (isBot || reduce) {
    return (
      <svg className={className} viewBox={viewBox} fill="none" aria-hidden="true">
        <path d={d} stroke="currentColor" strokeWidth={strokeWidth} />
      </svg>
    );
  }

  return (
    <svg className={className} viewBox={viewBox} fill="none" aria-hidden="true">
      <motion.path
        d={d}
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration, ease: motionTokens.ease.standard }}
      />
    </svg>
  );
}