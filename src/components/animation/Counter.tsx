import { useEffect, useRef } from "react";
import { useInView, useReducedMotion } from "framer-motion";
import { isBot } from "@/utils/env";

interface CounterProps {
  value: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  decimals?: number;
  className?: string;
}

function format(value: number, prefix: string, suffix: string, decimals: number) {
  const fixed = value.toLocaleString("en-US", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
  return `${prefix}${fixed}${suffix}`;
}

export function Counter({ value, prefix = "", suffix = "", duration = 1.8, decimals = 0, className }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const reduce = useReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el || !inView) return;
    if (reduce || isBot) {
      el.textContent = format(value, prefix, suffix, decimals);
      return;
    }
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const progress = Math.min(1, (now - start) / (duration * 1000));
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = format(value * eased, prefix, suffix, decimals);
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value, prefix, suffix, duration, decimals, reduce]);

  return (
    <span ref={ref} className={className}>
      {format(0, prefix, suffix, decimals)}
    </span>
  );
}