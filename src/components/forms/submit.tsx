import { useRef } from "react";
import { motionTokens } from "@/animations/tokens";

interface HoneypotProps {
  value: string;
  onChange: (value: string) => void;
}

/** Invisible spam trap. Real users never see or fill this field. */
export function Honeypot({ value, onChange }: HoneypotProps) {
  const ref = useRef<HTMLInputElement>(null);
  return (
    <div className="absolute -left-[9999px] top-auto" aria-hidden="true">
      <label htmlFor="company-website">Company website</label>
      <input
        ref={ref}
        id="company-website"
        name="company_website"
        type="text"
        tabIndex={-1}
        autoComplete="off"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

/** Simulates a backend submission. Replace with a real API call when the backend exists. */
export function simulateSubmit(_values: Record<string, string>, delay = 900): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, delay));
}

export const formTransition = {
  duration: 0.32,
  ease: motionTokens.ease.standard,
} as const;