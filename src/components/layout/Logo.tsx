import { Link } from "react-router";
import { site } from "@/config/site";
import { cn } from "@/utils/cn";

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      to="/"
      aria-label={`${site.name} — home`}
      className={cn(
        "relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-primary to-primary-light shadow-card",
        className
      )}
    >
      <img
        src={`${import.meta.env.BASE_URL}images/logo.png`}
        alt=""
        aria-hidden="true"
        width={275}
        height={271}
        className="h-10 w-10 object-contain"
      />
    </Link>
  );
}