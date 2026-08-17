import { Link } from "react-router";
import { ArrowUpRight } from "lucide-react";
import type { CaseStudy } from "@/types/content";
import { Artwork } from "@/components/common/Artwork";
import { Badge } from "@/components/ui/Badge";

export function CaseStudyCard({ project, index, className }: { project: CaseStudy; index: number; className?: string }) {
  const pattern = index % 3 === 0 ? "bars" : index % 3 === 1 ? "flow" : "map";

  return (
    <Link
      to={`/case-studies/${project.slug}`}
      className={`group flex flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift ${className ?? ""}`}
    >
      <Artwork tint={project.tint} pattern={pattern} className="h-48">
        <div className="flex h-full flex-col justify-between p-5">
          <div className="flex items-center justify-between">
            <Badge variant="outline" className="border-white/30 bg-white/15 text-white">
              {project.industry}
            </Badge>
            <span className="text-xs font-medium text-white/70">{project.year}</span>
          </div>
          <div className="flex items-center gap-6">
            {project.results.slice(0, 2).map((r) => (
              <div key={r.label} className="flex flex-col">
                <span className="text-xl font-bold">{r.value}</span>
                <span className="text-[11px] text-white/70">{r.label}</span>
              </div>
            ))}
          </div>
        </div>
      </Artwork>
      <div className="flex flex-col gap-2.5 p-5">
        <h3 className="text-[17px] font-semibold leading-snug text-navy transition-colors duration-300 group-hover:text-primary">
          {project.title}
        </h3>
        <p className="text-sm leading-relaxed text-muted">{project.summary}</p>
        <div className="mt-auto flex items-center justify-between pt-2">
          <span className="flex flex-wrap gap-1.5">
            {project.technologies.slice(0, 3).map((t) => (
              <span key={t} className="rounded-md bg-bg px-2 py-0.5 text-[11px] font-medium text-muted">
                {t}
              </span>
            ))}
          </span>
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-soft text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white">
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </span>
        </div>
      </div>
    </Link>
  );
}