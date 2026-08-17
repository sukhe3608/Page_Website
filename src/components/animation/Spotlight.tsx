import { useRef, type ReactNode } from "react";
import { useReducedMotion } from "framer-motion";
import { isBot } from "@/utils/env";
import { cn } from "@/utils/cn";

interface SpotlightProps {
  children: ReactNode;
  className?: string;
  /** Color of the highlight. */
  color?: string;
  /** Radius of the highlight in px. */
  size?: number;
}

/**
 * Soft light that follows the pointer across a surface (CSS-var driven, no re-renders).
 * Renders as a subtle static glow for bots and reduced-motion users.
 */
export function Spotlight({ children, className, color = "rgba(21, 94, 239, 0.14)", size = 340 }: SpotlightProps) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el || isBot || reduce) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--spot-x", `${e.clientX - rect.left}px`);
    el.style.setProperty("--spot-y", `${e.clientY - rect.top}px`);
  };

  return (
    <div
      ref={ref}
      onPointerMove={onPointerMove}
      className={cn("group/spot relative overflow-hidden", className)}
    >
      <div
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute inset-0 z-0",
          reduce || isBot
            ? "opacity-40"
            : "opacity-0 transition-opacity duration-500 group-hover/spot:opacity-100"
        )}
        style={{
          background: `radial-gradient(circle ${size}px at var(--spot-x, 50%) var(--spot-y, 50%), ${color} 0%, transparent 65%)`,
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}