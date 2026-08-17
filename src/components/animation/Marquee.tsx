import type { ReactNode } from "react";
import { useReducedMotion } from "framer-motion";
import { isBot } from "@/utils/env";
import { cn } from "@/utils/cn";

interface MarqueeProps {
  children: ReactNode;
  className?: string;
  /** Seconds for one full loop (default matches the CSS fallback). */
  duration?: number;
  /** Reverse direction. */
  reverse?: boolean;
  /** Pause on hover. */
  pauseOnHover?: boolean;
  /** Duplicate the content for a seamless loop. Defaults to auto-duplicate. */
  duplicates?: number;
}

/**
 * Seamless infinite marquee built on the global `.marquee-track` keyframes.
 * Halts for reduced-motion users via the global media query.
 */
export function Marquee({ children, className, duration = 32, reverse = false, pauseOnHover = true, duplicates = 2 }: MarqueeProps) {
  const reduce = useReducedMotion();
  if (isBot) {
    return (
      <div className={cn("overflow-hidden", className)}>
        <div className="flex items-center">{children}</div>
      </div>
    );
  }

  return (
    <div className={cn("overflow-hidden", className)} aria-hidden={reduce ? undefined : true}>
      <div
        className={cn("marquee-track flex w-max items-center", pauseOnHover && "marquee:hover .marquee-track:hover")}
        style={{ animationDuration: `${duration}s`, animationDirection: reverse ? "reverse" : undefined }}
      >
        {Array.from({ length: duplicates }, (_, i) => (
          <div key={i} className="flex w-max shrink-0 items-center" aria-hidden={i > 0 || undefined}>
            {children}
          </div>
        ))}
      </div>
    </div>
  );
}