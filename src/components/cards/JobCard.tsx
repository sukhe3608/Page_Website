import { Link } from "react-router";
import { ArrowRight, Clock, MapPin } from "lucide-react";
import type { Job } from "@/types/content";
import { Badge } from "@/components/ui/Badge";

export function JobCard({ job, className }: { job: Job; className?: string }) {
  return (
    <Link
      to={`/careers/${job.slug}`}
      className={`group flex flex-col gap-4 rounded-2xl border border-line bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-lift sm:flex-row sm:items-center sm:justify-between ${className ?? ""}`}
    >
      <div className="flex flex-col gap-2.5">
        <h3 className="text-lg font-semibold text-navy transition-colors duration-300 group-hover:text-primary">{job.title}</h3>
        <div className="flex flex-wrap items-center gap-2 text-[13px] text-muted">
          <Badge variant="soft">{job.department}</Badge>
          <span className="flex items-center gap-1">
            <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
            {job.location}
          </span>
          <span aria-hidden="true">·</span>
          <span>{job.type}</span>
          <span aria-hidden="true">·</span>
          <span className="flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" aria-hidden="true" />
            {job.posted}
          </span>
        </div>
      </div>
      <span className="flex h-10 w-10 shrink-0 items-center justify-center self-start rounded-full bg-soft text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white sm:self-center">
        <ArrowRight className="h-4.5 w-4.5 transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden="true" />
      </span>
    </Link>
  );
}