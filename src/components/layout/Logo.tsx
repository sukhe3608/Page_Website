import { Link } from "react-router";
import { site } from "@/config/site";
import { cn } from "@/utils/cn";

export function Logo({ className, dark = false }: { className?: string; dark?: boolean }) {
  return (
    <Link to="/" className={cn("flex shrink-0 items-center gap-2.5", className)} aria-label={`${site.name} — home`}>
      <span className="relative flex h-9 items-center justify-center overflow-hidden rounded-lg bg-white shadow-card">
        <img
          src={`${import.meta.env.BASE_URL}images/logo.png`}
          alt=""
          aria-hidden="true"
          width={45}
          height={36}
          className="h-9 w-auto max-w-full object-contain"
        />
      </span>
      <span className={cn("text-lg font-bold leading-none tracking-tight", dark ? "text-white" : "text-navy")}>
        {site.shortName}
        <span className="text-primary">.</span>
      </span>
    </Link>
  );
}