import { Link } from "react-router";
import { site } from "@/config/site";
import { cn } from "@/utils/cn";

export function Logo({ className, dark = false }: { className?: string; dark?: boolean }) {
  return (
    <Link to="/" className={cn("flex items-center gap-2.5", className)} aria-label={`${site.name} — home`}>
      <span className="flex h-9 items-center justify-center overflow-hidden rounded-lg bg-white shadow-card">
        <img src={`${import.meta.env.BASE_URL}images/sln-logo.jpg`} alt="" aria-hidden="true" className="h-full w-auto object-contain" />
      </span>
      <span className={cn("text-lg font-bold tracking-tight", dark ? "text-white" : "text-navy")}>
        {site.shortName}
        <span className="text-primary">.</span>
      </span>
    </Link>
  );
}