import { Link } from "react-router";
import { ArrowUpRight } from "lucide-react";
import type { Service } from "@/types/content";
import { Icon } from "@/components/ui/Icon";

export function ServiceCard({ service, className }: { service: Service; className?: string }) {
  return (
    <Link
      to={`/services/${service.slug}`}
      className={`group relative flex flex-col gap-5 overflow-hidden rounded-2xl border border-line bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/25 hover:shadow-lift ${className ?? ""}`}
    >
      <span
        className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-primary to-primary-light transition-transform duration-500 ease-standard group-hover:scale-x-100"
        aria-hidden="true"
      />
      <span className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-soft opacity-0 transition-opacity duration-500 group-hover:opacity-100" aria-hidden="true" />
      <div className="flex items-start justify-between">
        <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-soft text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white group-hover:shadow-glow">
          <Icon name={service.icon} className="h-6 w-6" />
        </span>
        <ArrowUpRight className="h-5 w-5 text-muted/50 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary" aria-hidden="true" />
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-lg font-semibold text-navy transition-colors duration-300 group-hover:text-primary">{service.name}</h3>
        <p className="text-[14.5px] leading-relaxed text-muted">{service.tagline}</p>
      </div>
      <p className="mt-auto text-[13px] font-semibold text-primary">
        Learn more
        <span className="ml-1.5 inline-block transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">
          →
        </span>
      </p>
    </Link>
  );
}