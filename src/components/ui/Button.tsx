import type { ButtonHTMLAttributes, ReactNode } from "react";
import { Link } from "react-router";
import { Loader2 } from "lucide-react";
import { cn } from "@/utils/cn";

type Variant = "primary" | "outline" | "ghost" | "soft" | "white";
type Size = "sm" | "md" | "lg";

const variants: Record<Variant, string> = {
  primary:
    "bg-primary text-white shadow-card hover:bg-primary-dark hover:shadow-glow hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]",
  outline:
    "border border-line bg-white text-navy shadow-soft hover:border-primary/40 hover:text-primary hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]",
  ghost: "text-navy hover:text-primary hover:bg-soft/70",
  soft: "bg-soft text-primary-dark hover:bg-white hover:shadow-card hover:-translate-y-0.5 active:translate-y-0",
  white:
    "bg-white text-navy shadow-card hover:shadow-lift hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]",
};

const sizes: Record<Size, string> = {
  sm: "h-10 px-4 text-sm gap-1.5 rounded-lg",
  md: "h-12 px-6 text-[15px] gap-2 rounded-xl",
  lg: "h-14 px-8 text-base gap-2 rounded-xl",
};

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  to?: string;
  href?: string;
  loading?: boolean;
  icon?: ReactNode;
  className?: string;
}

export function Button({
  variant = "primary",
  size = "md",
  to,
  href,
  loading = false,
  icon,
  className,
  children,
  disabled,
  ...rest
}: ButtonProps) {
  const classes = cn(
    "group relative inline-flex select-none items-center justify-center font-semibold transition-all duration-300 ease-standard focus-visible:outline-2 focus-visible:outline-primary",
    variants[variant],
    sizes[size],
    className
  );

  const content = (
    <>
      {loading && <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />}
      <span className="relative z-10">{children}</span>
      {icon && !loading && (
        <span className="relative z-10 inline-flex transition-transform duration-300 ease-standard group-hover:translate-x-1">
          {icon}
        </span>
      )}
    </>
  );

  const ariaDisabled = disabled || loading;

  if (to) {
    return (
      <Link to={to} className={cn(classes, ariaDisabled && "pointer-events-none opacity-60")} aria-disabled={ariaDisabled}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={cn(classes, ariaDisabled && "pointer-events-none opacity-60")} aria-disabled={ariaDisabled}>
        {content}
      </a>
    );
  }

  return (
    <button className={cn(classes, ariaDisabled && "opacity-60")} disabled={ariaDisabled} {...rest}>
      {content}
    </button>
  );
}