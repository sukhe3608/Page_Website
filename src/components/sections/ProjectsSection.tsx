import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import { caseStudies } from "@/data/projects";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CaseStudyCard } from "@/components/cards/CaseStudyCard";
import { Reveal, RevealGroup, RevealItem } from "@/components/animation/Reveal";

export function ProjectsSection() {
  const featured = caseStudies.slice(0, 4);

  return (
    <section className="section-pad" aria-labelledby="projects-heading">
      <div className="container-x flex flex-col gap-14">
        <SectionHeading
          eyebrow="Selected work"
          title={<span id="projects-heading">Outcomes we deliver, measured in numbers</span>}
          description="A look at recent installations — the challenges, the approach, and the results sites can verify."
        />
        <RevealGroup className="grid gap-6 md:grid-cols-2" stagger={0.1}>
          {featured.map((project, i) => (
            <RevealItem key={project.slug} className="h-full">
              <CaseStudyCard project={project} index={i} className="h-full" />
            </RevealItem>
          ))}
        </RevealGroup>
        <Reveal direction="up" className="flex justify-center">
          <Link
            to="/case-studies"
            className="group flex items-center gap-2 text-[15px] font-semibold text-primary transition-colors hover:text-primary-dark"
          >
            View all case studies
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}