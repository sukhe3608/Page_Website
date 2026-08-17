import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import type { Solution } from "@/types/content";
import { Icon } from "@/components/ui/Icon";

export function SolutionCard({ solution, className }: { solution: Solution; className?: string }) {
  return (
    <Link
      to={`/solutions/${solution.slug}`}
      className={`group flex flex-col gap-4 rounded-2xl border border-line bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/25 hover:shadow-lift ${className ?? ""}`}
    >
      <div className="flex items-center gap-4">
        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-soft text-primary transition-all duration-300 group-hover:rotate-6 group-hover:bg-primary group-hover:text-white">
          <Icon name={solution.icon} className="h-6 w-6" />
        </span>
        <h3 className="text-lg font-semibold text-navy transition-colors duration-300 group-hover:text-primary">{solution.name}</h3>
      </div>
      <p className="text-[14.5px] leading-relaxed text-muted">{solution.tagline}</p>
      <div className="mt-auto flex items-center justify-between border-t border-line pt-4">
        <span className="text-[13px] font-semibold text-primary">
          Explore solution
          <ArrowRight className="ml-1.5 inline h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
        </span>
      </div>
    </Link>
  );
}