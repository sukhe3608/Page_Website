import type { TeamMember } from "@/types/content";
import { Badge } from "@/components/ui/Badge";

export function TeamCard({ member, className }: { member: TeamMember; className?: string }) {
  return (
    <div
      className={`group flex flex-col gap-4 rounded-2xl border border-line bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/25 hover:shadow-lift ${className ?? ""}`}
    >
      <div className="relative w-fit">
        <span
          className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-soft to-soft text-lg font-bold text-primary transition-all duration-500 group-hover:from-primary group-hover:to-primary-light group-hover:text-white group-hover:shadow-glow"
          aria-hidden="true"
        >
          {member.initials}
        </span>
        <span className="absolute -bottom-1.5 -right-1.5 h-5 w-5 rounded-full border-2 border-white bg-success" aria-hidden="true" />
      </div>
      <div className="flex flex-col gap-1">
        <h3 className="text-base font-semibold text-navy">{member.name}</h3>
        <p className="text-sm text-primary">{member.role}</p>
      </div>
      <p className="text-[13.5px] leading-relaxed text-muted">{member.bio}</p>
      <div className="mt-auto">
        <Badge variant="outline">{member.department}</Badge>
      </div>
    </div>
  );
}