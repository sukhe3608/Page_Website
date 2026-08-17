import { Counter } from "@/components/animation/Counter";

/**
 * Renders a metric string (e.g. "3.2x", "68%", "<1s") with an animated counter,
 * falling back to the raw string when it isn't safely parseable.
 */
export function Metric({ raw, className }: { raw: string; className?: string }) {
  const match = raw.match(/^([\d.,]+)(.*)$/);
  if (!match) return <span className={className}>{raw}</span>;
  const num = parseFloat(match[1].replace(/,/g, ""));
  if (Number.isNaN(num)) return <span className={className}>{raw}</span>;
  const suffix = match[2] || "";
  const decimals = /\.\d/.test(match[1]) ? 1 : 0;
  return <Counter value={num} suffix={suffix} decimals={decimals} className={className} />;
}