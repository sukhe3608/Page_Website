import { Navigate, useParams } from "react-router";
import { CalendarDays, Clock, Award } from "lucide-react";
import PageTransition from "@/components/animation/PageTransition";
import Seo from "@/components/seo/Seo";
import { caseStudiesBySlug } from "@/data/projects";
import { breadcrumbSchema } from "@/config/schemas";
import { PageHero } from "@/components/layout/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { DetailSidebar } from "@/components/common/DetailSidebar";
import { TechChips } from "@/components/common/TechChips";
import { RelatedCaseStudies } from "@/components/common/RelatedCaseStudies";
import { Metric } from "@/components/common/Metric";
import { Artwork } from "@/components/common/Artwork";
import { FinalCta } from "@/components/sections/FinalCta";
import { Reveal } from "@/components/animation/Reveal";

const sections = [
  { id: "challenge", label: "The challenge" },
  { id: "solution", label: "The solution" },
  { id: "results", label: "The results" },
  { id: "technology", label: "Technology" },
  { id: "services", label: "Services used" },
];

export default function CaseStudyDetail() {
  const { slug } = useParams();
  const project = slug ? caseStudiesBySlug[slug] : undefined;
  if (!project) return <Navigate to="/case-studies" replace />;

  const relatedProjects: string[] = [];

  return (
    <PageTransition>
      <Seo
        title={`${project.title} — Case Study`}
        description={project.summary}
        path={`/case-studies/${project.slug}`}
        schema={[
          breadcrumbSchema([{ name: "Case Studies", path: "/case-studies" }, { name: project.title, path: `/case-studies/${project.slug}` }]),
        ]}
      />

      <PageHero
        eyebrow="Case study"
        title={<span className="text-gradient">{project.title}</span>}
        description={project.summary}
        crumbs={[{ label: "Case Studies", to: "/case-studies" }, { label: project.title }]}
      >
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-1 text-[13.5px] font-medium text-muted">
          <span className="flex items-center gap-1.5">
            <Award className="h-4 w-4 text-primary" aria-hidden="true" />
            {project.client} · {project.industry}
          </span>
          <span className="flex items-center gap-1.5">
            <CalendarDays className="h-4 w-4 text-primary" aria-hidden="true" />
            {project.year}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="h-4 w-4 text-primary" aria-hidden="true" />
            {project.duration}
          </span>
        </div>
      </PageHero>

      <div className="container-x -mt-6 mb-16">
        <Reveal>
          <div className="grid gap-4 rounded-2xl border border-line bg-white p-6 shadow-lift sm:grid-cols-2 lg:grid-cols-4">
            {project.results.map((result) => (
              <div key={result.label} className="flex flex-col items-center gap-1 text-center">
                <p className="font-display text-3xl font-bold tracking-tight text-primary">
                  <Metric raw={result.value} />
                </p>
                <p className="text-[13px] font-medium text-muted">{result.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      <div className="container-x grid gap-10 pb-20 lg:grid-cols-[250px_1fr] lg:gap-14">
        <DetailSidebar sections={sections} />

        <div className="flex min-w-0 flex-col gap-20">
          <section id="challenge" className="scroll-mt-28" aria-labelledby="cs-challenge-heading">
            <SectionHeading align="left" eyebrow="The challenge" title={<span id="cs-challenge-heading">Where it started</span>} />
            <Reveal className="mt-8">
              <div className="rounded-2xl border-l-4 border-warning bg-soft/50 p-6 sm:p-8">
                <p className="text-pretty text-[16.5px] leading-[1.85] text-navy/85">{project.challenge}</p>
              </div>
            </Reveal>
          </section>

          <section id="solution" className="scroll-mt-28" aria-labelledby="cs-solution-heading">
            <SectionHeading align="left" eyebrow="The solution" title={<span id="cs-solution-heading">How we approached it</span>} />
            <Reveal className="mt-8">
              <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
                <p className="text-pretty text-[16.5px] leading-[1.85] text-navy/85">{project.solution}</p>
                <Artwork tint={project.tint} pattern="flow" className="aspect-[4/3] rounded-2xl shadow-card">
                  <div className="flex h-full items-center px-6">
                    <p className="text-sm font-medium leading-relaxed text-white/90">
                      {project.client} chose {project.services.join(", ").toLowerCase()} to modernize their platform.
                    </p>
                  </div>
                </Artwork>
              </div>
            </Reveal>
          </section>

          <section id="results" className="scroll-mt-28" aria-labelledby="cs-results-heading">
            <SectionHeading align="left" eyebrow="The results" title={<span id="cs-results-heading">Measurable outcomes</span>} />
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {project.results.map((result) => (
                <div key={result.label} className="rounded-2xl border border-line bg-bg/50 p-6 text-center shadow-soft">
                  <p className="font-display text-3xl font-bold tracking-tight text-primary">
                    <Metric raw={result.value} />
                  </p>
                  <p className="mt-1 text-[13.5px] font-medium text-muted">{result.label}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="technology" className="scroll-mt-28" aria-labelledby="cs-tech-heading">
            <SectionHeading align="left" eyebrow="Our stack" title={<span id="cs-tech-heading">Technology used</span>} />
            <Reveal className="mt-8">
              <TechChips items={project.technologies} />
            </Reveal>
          </section>

          <section id="services" className="scroll-mt-28" aria-labelledby="cs-services-heading">
            <SectionHeading align="left" eyebrow="Scope" title={<span id="cs-services-heading">Services involved</span>} />
            <Reveal className="mt-8 flex flex-wrap gap-2">
              {project.services.map((service) => (
                <Badge key={service} variant="soft">
                  {service}
                </Badge>
              ))}
            </Reveal>
          </section>
        </div>
      </div>

      <RelatedCaseStudies slugs={relatedProjects} title="More case studies" />
      <FinalCta
        title="Want results like this?"
        description="Let's explore what a similar engagement could do for your business."
      />
    </PageTransition>
  );
}