import { caseStudies } from "@/data/projects";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CaseStudyCard } from "@/components/cards/CaseStudyCard";
import { RevealGroup, RevealItem } from "@/components/animation/Reveal";

export function RelatedCaseStudies({
  slugs,
  title = "Related case studies",
}: {
  slugs: string[];
  title?: string;
}) {
  const related = slugs
    .map((s) => caseStudies.find((c) => c.slug === s))
    .filter((c): c is (typeof caseStudies)[number] => Boolean(c));
  if (related.length === 0) return null;

  return (
    <section className="section-pad" aria-labelledby="related-case-heading">
      <div className="container-x flex flex-col gap-10">
        <SectionHeading align="left" title={<span id="related-case-heading">{title}</span>} />
        <RevealGroup className="grid gap-6 md:grid-cols-2" stagger={0.1}>
          {related.map((project, i) => (
            <RevealItem key={project.slug} className="h-full">
              <CaseStudyCard project={project} index={i} className="h-full" />
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}