import { Link } from "react-router";
import { ArrowUpRight } from "lucide-react";
import type { Industry } from "@/types/content";
import { Icon } from "@/components/ui/Icon";

export function IndustryCard({ industry, className }: { industry: Industry; className?: string }) {
  return (
    <Link
      to={`/industries/${industry.slug}`}
      className={`group relative flex flex-col gap-4 overflow-hidden rounded-2xl border border-line bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-lift ${className ?? ""}`}
    >
      <span className="pointer-events-none absolute inset-x-0 bottom-0 h-1 origin-right scale-x-0 bg-gradient-to-l from-primary to-primary-light transition-transform duration-500 ease-standard group-hover:origin-left group-hover:scale-x-100" aria-hidden="true" />
      <div className="flex items-center justify-between">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-soft text-primary transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-white">
          <Icon name={industry.icon} className="h-6 w-6" />
        </span>
        <ArrowUpRight className="h-4.5 w-4.5 text-muted/50 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary" aria-hidden="true" />
      </div>
      <div className="flex flex-col gap-1.5">
        <h3 className="text-base font-semibold text-navy transition-colors duration-300 group-hover:text-primary">{industry.name}</h3>
        <p className="text-[13.5px] leading-relaxed text-muted">{industry.tagline}</p>
      </div>
    </Link>
  );
}