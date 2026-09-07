import { Navigate, useParams } from "react-router";
import { ArrowRight, CheckCircle2, Layers } from "lucide-react";
import PageTransition from "@/components/animation/PageTransition";
import Seo from "@/components/seo/Seo";
import { solutionsBySlug } from "@/data/solutions";
import { industriesBySlug } from "@/data/industries";
import { caseStudies } from "@/data/projects";
import { breadcrumbSchema } from "@/config/schemas";
import { PageHero } from "@/components/layout/PageHero";
import { Icon } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { DetailSidebar } from "@/components/common/DetailSidebar";
import { TechChips } from "@/components/common/TechChips";
import { CaseStudyCard } from "@/components/cards/CaseStudyCard";
import { FinalCta } from "@/components/sections/FinalCta";
import { Reveal, RevealGroup, RevealItem } from "@/components/animation/Reveal";

const sections = [
  { id: "overview", label: "Overview" },
  { id: "features", label: "What's included" },
  { id: "industries", label: "Industries" },
  { id: "technology", label: "Technology" },
  { id: "case-studies", label: "Case studies" },
];

export default function SolutionDetail() {
  const { slug } = useParams();
  const solution = slug ? solutionsBySlug[slug] : undefined;
  if (!solution) return <Navigate to="/solutions" replace />;

  const relatedIndustries = solution.industries.map((i) => industriesBySlug[i]).filter(Boolean);
  const relatedProjects = solution.caseStudySlugs
    .map((s) => caseStudies.find((c) => c.slug === s))
    .filter((c): c is (typeof caseStudies)[number] => Boolean(c));

  return (
    <PageTransition>
      <Seo
        title={`${solution.name} — Solutions`}
        description={solution.description}
        path={`/solutions/${solution.slug}`}
        schema={[breadcrumbSchema([{ name: "Solutions", path: "/solutions" }, { name: solution.name, path: `/solutions/${solution.slug}` }])]}
      />

      <PageHero
        eyebrow="Solutions"
        title={<span className="text-gradient">{solution.name}</span>}
        description={solution.longDescription.split("\n\n")[0]}
        crumbs={[{ label: "Solutions", to: "/solutions" }, { label: solution.name }]}
      >
        <div className="flex flex-wrap items-center gap-3 pt-2">
          <Button to="/schedule-consultation" icon={<ArrowRight className="h-4 w-4" aria-hidden="true" />}>
            Book a Discovery Call
          </Button>
          <Button to="/contact" variant="outline">
            Ask a Question
          </Button>
        </div>
      </PageHero>

      <div className="container-x grid gap-10 pb-20 lg:grid-cols-[250px_1fr] lg:gap-14">
        <DetailSidebar sections={sections} />

        <div className="flex min-w-0 flex-col gap-20">
          <section id="overview" className="scroll-mt-28" aria-labelledby="sol-overview-heading">
            <Reveal>
              <div className="flex flex-col gap-5">
                <div className="flex items-center gap-3">
                  <span className="flex h-13 w-13 items-center justify-center rounded-2xl bg-soft p-3 text-primary">
                    <Icon name={solution.icon} className="h-6.5 w-6.5" />
                  </span>
                  <h2 id="sol-overview-heading" className="text-2xl font-semibold tracking-tight text-navy">
                    Overview
                  </h2>
                </div>
                <p className="text-pretty text-[17px] leading-relaxed text-muted">{solution.longDescription}</p>
                <div className="grid gap-3 rounded-2xl border border-line bg-soft/50 p-5 sm:grid-cols-3">
                  {solution.features.slice(0, 3).map((feature) => (
                    <div key={feature} className="flex items-start gap-2 text-[14px] font-medium text-navy/85">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </section>

          <section id="features" className="scroll-mt-28" aria-labelledby="sol-features-heading">
            <SectionHeading align="left" eyebrow="Included" title={<span id="sol-features-heading">Everything the solution covers</span>} />
            <RevealGroup className="mt-10 grid gap-4 sm:grid-cols-2" stagger={0.06}>
              {solution.features.map((feature) => (
                <RevealItem key={feature}>
                  <div className="flex items-center gap-3 rounded-xl border border-line bg-white p-4 shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/25 hover:shadow-card">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-soft text-primary">
                      <Layers className="h-4.5 w-4.5" aria-hidden="true" />
                    </span>
                    <span className="text-[15px] font-medium text-navy/85">{feature}</span>
                  </div>
                </RevealItem>
              ))}
            </RevealGroup>
          </section>

          <section id="industries" className="scroll-mt-28" aria-labelledby="sol-industries-heading">
            <SectionHeading align="left" eyebrow="Where it fits" title={<span id="sol-industries-heading">Built for your industry</span>} />
            <RevealGroup className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3" stagger={0.06}>
              {relatedIndustries.map((industry) => (
                <RevealItem key={industry.slug}>
                  <div className="group rounded-xl border border-line bg-white p-5 shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/25 hover:shadow-card">
                    <div className="mb-3 flex items-center gap-2.5">
                      <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-soft text-primary">
                        <Icon name={industry.icon} className="h-4.5 w-4.5" />
                      </span>
                      <span className="font-semibold text-navy">{industry.name}</span>
                    </div>
                    <p className="text-[13.5px] leading-relaxed text-muted">{industry.description}</p>
                  </div>
                </RevealItem>
              ))}
            </RevealGroup>
          </section>

          <section id="technology" className="scroll-mt-28" aria-labelledby="sol-tech-heading">
            <SectionHeading align="left" eyebrow="Our stack" title={<span id="sol-tech-heading">Technology foundation</span>} />
            <Reveal className="mt-10">
              <TechChips items={solution.technologies} />
            </Reveal>
          </section>

          <section id="case-studies" className="scroll-mt-28" aria-labelledby="sol-case-heading">
            <SectionHeading align="left" eyebrow="Proof" title={<span id="sol-case-heading">Related engagements</span>} />
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {relatedProjects.map((project, i) => (
                <CaseStudyCard key={project.slug} project={project} index={i} className="h-full" />
              ))}
            </div>
          </section>
        </div>
      </div>

      <FinalCta
        title={`Ready to deploy ${solution.name}?`}
        description="We'll show you how this solution maps to your site in a free inspection and consultation."
      />
    </PageTransition>
  );
}