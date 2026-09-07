import { Navigate, useParams } from "react-router";
import { ArrowRight, AlertTriangle, CheckCircle2, TrendingUp } from "lucide-react";
import PageTransition from "@/components/animation/PageTransition";
import Seo from "@/components/seo/Seo";
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
  { id: "challenges", label: "Challenges" },
  { id: "solutions", label: "Our approach" },
  { id: "benefits", label: "Outcomes" },
  { id: "technology", label: "Technology" },
  { id: "case-studies", label: "Case studies" },
];

export default function IndustryDetail() {
  const { slug } = useParams();
  const industry = slug ? industriesBySlug[slug] : undefined;
  if (!industry) return <Navigate to="/industries" replace />;

  const relatedProjects = industry.caseStudySlugs
    .map((s) => caseStudies.find((c) => c.slug === s))
    .filter((c): c is (typeof caseStudies)[number] => Boolean(c));

  return (
    <PageTransition>
      <Seo
        title={`${industry.name} Technology Solutions`}
        description={industry.description}
        path={`/industries/${industry.slug}`}
        schema={[breadcrumbSchema([{ name: "Industries", path: "/industries" }, { name: industry.name, path: `/industries/${industry.slug}` }])]}
      />

      <PageHero
        eyebrow="Industries"
        title={<span className="text-gradient">{industry.name}</span>}
        description={industry.longDescription.split("\n\n")[0]}
        crumbs={[{ label: "Industries", to: "/industries" }, { label: industry.name }]}
      >
        <div className="flex flex-wrap items-center gap-3 pt-2">
          <Button to="/get-a-quote" icon={<ArrowRight className="h-4 w-4" aria-hidden="true" />}>
            Start a Project
          </Button>
          <Button to="/contact" variant="outline">
            Ask a Question
          </Button>
        </div>
      </PageHero>

      <div className="container-x grid gap-10 pb-20 lg:grid-cols-[250px_1fr] lg:gap-14">
        <DetailSidebar sections={sections} />

        <div className="flex min-w-0 flex-col gap-20">
          <section id="overview" className="scroll-mt-28" aria-labelledby="ind-overview-heading">
            <div className="grid items-start gap-8 lg:grid-cols-[1fr_auto]">
              <Reveal>
                <div className="flex flex-col gap-5">
                  <div className="flex items-center gap-3">
                    <span className="flex h-13 w-13 items-center justify-center rounded-2xl bg-soft p-3 text-primary">
                      <Icon name={industry.icon} className="h-6.5 w-6.5" />
                    </span>
                    <h2 id="ind-overview-heading" className="text-2xl font-semibold tracking-tight text-navy">
                      Overview
                    </h2>
                  </div>
                  <p className="text-pretty text-[17px] leading-relaxed text-muted">{industry.longDescription}</p>
                </div>
              </Reveal>
            </div>
          </section>

          <section id="challenges" className="scroll-mt-28" aria-labelledby="ind-challenges-heading">
            <SectionHeading align="left" eyebrow="The landscape" title={<span id="ind-challenges-heading">Common challenges</span>} />
            <RevealGroup className="mt-10 grid gap-4 sm:grid-cols-2" stagger={0.06}>
              {industry.challenges.map((challenge) => (
                <RevealItem key={challenge}>
                  <div className="flex items-start gap-3 rounded-xl border border-line bg-white p-5 shadow-soft">
                    <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-warning" aria-hidden="true" />
                    <span className="text-[15px] font-medium text-navy/85">{challenge}</span>
                  </div>
                </RevealItem>
              ))}
            </RevealGroup>
          </section>

          <section id="solutions" className="scroll-mt-28" aria-labelledby="ind-solutions-heading">
            <SectionHeading align="left" eyebrow="Our approach" title={<span id="ind-solutions-heading">How we respond</span>} />
            <RevealGroup className="mt-10 grid gap-4 sm:grid-cols-2" stagger={0.06}>
              {industry.solutions.map((solution) => (
                <RevealItem key={solution}>
                  <div className="flex items-start gap-3 rounded-xl border border-line bg-white p-5 shadow-soft">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                    <span className="text-[15px] font-medium text-navy/85">{solution}</span>
                  </div>
                </RevealItem>
              ))}
            </RevealGroup>
          </section>

          <section id="benefits" className="scroll-mt-28" aria-labelledby="ind-benefits-heading">
            <SectionHeading align="left" eyebrow="Results" title={<span id="ind-benefits-heading">What changes for you</span>} />
            <RevealGroup className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3" stagger={0.06}>
              {industry.benefits.map((benefit) => (
                <RevealItem key={benefit}>
                  <div className="flex items-start gap-3 rounded-xl border border-line bg-bg/60 p-5">
                    <TrendingUp className="mt-0.5 h-5 w-5 shrink-0 text-success" aria-hidden="true" />
                    <span className="text-[15px] font-medium text-navy/85">{benefit}</span>
                  </div>
                </RevealItem>
              ))}
            </RevealGroup>
          </section>

          <section id="technology" className="scroll-mt-28" aria-labelledby="ind-tech-heading">
            <SectionHeading align="left" eyebrow="Our stack" title={<span id="ind-tech-heading">Technology we bring</span>} />
            <Reveal className="mt-10">
              <TechChips items={industry.technologies} />
            </Reveal>
          </section>

          <section id="case-studies" className="scroll-mt-28" aria-labelledby="ind-case-heading">
            <SectionHeading align="left" eyebrow="Proof" title={<span id="ind-case-heading">Related case studies</span>} />
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {relatedProjects.map((project, i) => (
                <CaseStudyCard key={project.slug} project={project} index={i} className="h-full" />
              ))}
            </div>
          </section>
        </div>
      </div>

      <FinalCta
        title={`Let's talk about your ${industry.name.toLowerCase()} safety goals`}
        description="Share your site and objectives and we'll outline a practical solution — with a free site inspection, no obligation."
      />
    </PageTransition>
  );
}