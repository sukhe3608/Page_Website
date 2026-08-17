import { useMemo, useState } from "react";
import { ArrowRight, HeartHandshake } from "lucide-react";
import PageTransition from "@/components/animation/PageTransition";
import Seo from "@/components/seo/Seo";
import { teamMembers, jobs } from "@/data/projects";
import { breadcrumbSchema } from "@/config/schemas";
import { PageHero } from "@/components/layout/PageHero";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TeamCard } from "@/components/cards/TeamCard";
import { FinalCta } from "@/components/sections/FinalCta";
import { RevealGroup, RevealItem } from "@/components/animation/Reveal";

const departments = ["All", ...Array.from(new Set(teamMembers.map((m) => m.department)))];

export default function Team() {
  const [active, setActive] = useState("All");
  const filtered = useMemo(() => (active === "All" ? teamMembers : teamMembers.filter((m) => m.department === active)), [active]);
  const openRoles = jobs.filter((j) => j.type === "Full-time");

  return (
    <PageTransition>
      <Seo
        title="Team"
        description="Meet the people behind NovaCore — engineers, designers and strategists who care about craft."
        path="/team"
        schema={[breadcrumbSchema([{ name: "Team" }])]}
      />

      <PageHero
        eyebrow="Team"
        title="Curious minds, careful hands"
        description="We hire for judgment and kindness, then give people the autonomy to do their best work. Here's who you'll work with."
        crumbs={[{ label: "Team" }]}
      >
        <div className="flex flex-wrap items-center gap-3 pt-2">
          <Button to="/careers" icon={<ArrowRight className="h-4 w-4" aria-hidden="true" />}>
            Join the Team
          </Button>
        </div>
      </PageHero>

      <section className="section-pad" aria-labelledby="team-grid-heading">
        <div className="container-x flex flex-col gap-10">
          <SectionHeading uiOnly title="Our team" />
          <div role="tablist" aria-label="Filter team by department" className="flex flex-wrap gap-2">
            {departments.map((department) => (
              <button
                key={department}
                type="button"
                role="tab"
                aria-selected={active === department}
                onClick={() => setActive(department)}
                className={`rounded-full border px-4 py-2 text-[13px] font-semibold transition-all duration-200 ${
                  active === department
                    ? "border-primary bg-primary text-white shadow-soft"
                    : "border-line bg-white text-navy/70 hover:border-primary/40 hover:text-primary"
                }`}
              >
                {department}
              </button>
            ))}
          </div>

          <RevealGroup key={active} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3" stagger={0.05}>
            {filtered.map((member) => (
              <RevealItem key={member.name} className="h-full">
                <TeamCard member={member} className="h-full" />
              </RevealItem>
            ))}
          </RevealGroup>

          <div className="flex flex-col items-start gap-4 rounded-3xl border border-line bg-soft/50 p-8 sm:flex-row sm:items-center sm:justify-between sm:p-10">
            <div className="flex items-start gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <HeartHandshake className="h-6 w-6" aria-hidden="true" />
              </span>
              <div>
                <h2 className="text-xl font-semibold tracking-tight text-navy">We're always looking for great people</h2>
                <p className="mt-1.5 text-[14.5px] leading-relaxed text-muted">
                  {openRoles.length} open roles right now. Even if nothing matches, we love meeting exceptional people.
                </p>
              </div>
            </div>
            <Button to="/careers" variant="outline" className="shrink-0">
              See open roles
            </Button>
          </div>
        </div>
      </section>

      <FinalCta />
    </PageTransition>
  );
}