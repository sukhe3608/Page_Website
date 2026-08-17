import type { ReactNode } from "react";
import { cn } from "@/utils/cn";
import { Reveal } from "@/components/animation/Reveal";

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
  dark?: boolean;
  /** Render the heading visually hidden (kept for structure/SEO, e.g. above card grids). */
  uiOnly?: boolean;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
  dark = false,
  uiOnly = false,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" ? "items-center text-center" : "items-start text-left",
        uiOnly && "sr-only",
        className
      )}
    >
      {eyebrow && (
        <Reveal direction="down" distance={10}>
          <span className={cn("eyebrow", dark && "border-white/20 bg-white/10 text-white")}>{eyebrow}</span>
        </Reveal>
      )}
      <Reveal direction="up" delay={0.05}>
        <h2
          className={cn(
            "max-w-3xl text-balance font-semibold tracking-tight text-navy",
            "text-[clamp(1.75rem,4vw,2.75rem)] leading-[1.15]",
            dark && "text-white"
          )}
        >
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal direction="up" delay={0.1}>
          <p className={cn("max-w-2xl text-pretty text-[17px] leading-relaxed text-muted", dark && "text-slate-300")}>
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}