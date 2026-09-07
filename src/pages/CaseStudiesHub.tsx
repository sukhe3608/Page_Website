import { useMemo, useState } from "react";
import { ArrowRight } from "lucide-react";
import PageTransition from "@/components/animation/PageTransition";
import Seo from "@/components/seo/Seo";
import { caseStudies } from "@/data/projects";
import { breadcrumbSchema } from "@/config/schemas";
import { PageHero } from "@/components/layout/PageHero";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CaseStudyCard } from "@/components/cards/CaseStudyCard";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { FinalCta } from "@/components/sections/FinalCta";
import { RevealGroup, RevealItem } from "@/components/animation/Reveal";

const industries = ["All", ...Array.from(new Set(caseStudies.map((c) => c.industry)))];

export default function CaseStudiesHub() {
  const [active, setActive] = useState("All");
  const filtered = useMemo(() => (active === "All" ? caseStudies : caseStudies.filter((c) => c.industry === active)), [active]);

  return (
    <PageTransition>
      <Seo
        title="Case Studies"
        description="Real results from real installations — see how we've helped Airports, defence labs, hospitals and hotels improve safety and security."
        path="/case-studies"
        schema={[breadcrumbSchema([{ name: "Case Studies" }])]}
      />

      <PageHero
        eyebrow="Case studies"
        title="Proof, not promises"
        description="A selection of installations with measurable outcomes. Every story follows the same arc: the challenge, our approach, and the results."
        crumbs={[{ label: "Case Studies" }]}
      >
        <div className="flex flex-wrap items-center gap-3 pt-2">
          <Button to="/get-a-quote" icon={<ArrowRight className="h-4 w-4" aria-hidden="true" />}>
            Get Free Site Inspection
          </Button>
        </div>
      </PageHero>

      <section className="section-pad" aria-labelledby="case-grid-heading">
        <div className="container-x flex flex-col gap-10">
          <SectionHeading uiOnly title="Our case studies" />
          <div role="tablist" aria-label="Filter case studies by industry" className="flex flex-wrap gap-2">
            {industries.map((industry) => (
              <button
                key={industry}
                type="button"
                role="tab"
                aria-selected={active === industry}
                onClick={() => setActive(industry)}
                className={`rounded-full border px-4 py-2 text-[13px] font-semibold transition-all duration-200 ${
                  active === industry
                    ? "border-primary bg-primary text-white shadow-soft"
                    : "border-line bg-white text-navy/70 hover:border-primary/40 hover:text-primary"
                }`}
              >
                {industry}
              </button>
            ))}
          </div>

          <RevealGroup key={active} className="grid gap-6 md:grid-cols-2" stagger={0.06}>
            {filtered.map((project, i) => (
              <RevealItem key={project.slug} className="h-full">
                <CaseStudyCard project={project} index={i} className="h-full" />
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <TestimonialsSection />
      <FinalCta />
    </PageTransition>
  );
}