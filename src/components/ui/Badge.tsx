import type { ReactNode } from "react";
import { cn } from "@/utils/cn";

type BadgeVariant = "soft" | "outline" | "success" | "warning";

const variants: Record<BadgeVariant, string> = {
  soft: "bg-soft text-primary-dark border-primary/15",
  outline: "bg-white text-navy border-line",
  success: "bg-success/10 text-success border-success/20",
  warning: "bg-warning/10 text-warning border-warning/20",
};

export function Badge({
  children,
  variant = "soft",
  className,
  dot = false,
}: {
  children: ReactNode;
  variant?: BadgeVariant;
  className?: string;
  dot?: boolean;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold",
        variants[variant],
        className
      )}
    >
      {dot && <span className="h-1.5 w-1.5 rounded-full bg-current" aria-hidden="true" />}
      {children}
    </span>
  );
}