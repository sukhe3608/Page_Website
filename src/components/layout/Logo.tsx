import { Link } from "react-router";
import { site } from "@/config/site";
import { cn } from "@/utils/cn";

export function Logo({ className, dark = false }: { className?: string; dark?: boolean }) {
  return (
    <Link to="/" className={cn("flex items-center gap-2.5", className)} aria-label={`${site.name} — home`}>
      <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary-light shadow-card">
        <svg width="22" height="22" viewBox="0 0 64 64" aria-hidden="true">
          <path d="M17 45V19l15 17 15-17v26" fill="none" stroke="#fff" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
      <span className={cn("text-lg font-bold tracking-tight", dark ? "text-white" : "text-navy")}>
        {site.shortName}
        <span className="text-primary">.</span>
      </span>
    </Link>
  );
}