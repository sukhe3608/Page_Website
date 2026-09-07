import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import PageTransition from "@/components/animation/PageTransition";
import Seo from "@/components/seo/Seo";
import { industries } from "@/data/industries";
import { breadcrumbSchema } from "@/config/schemas";
import { PageHero } from "@/components/layout/PageHero";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IndustryCard } from "@/components/cards/IndustryCard";
import { FinalCta } from "@/components/sections/FinalCta";
import { RevealGroup, RevealItem } from "@/components/animation/Reveal";

export default function IndustriesHub() {
  return (
    <PageTransition>
      <Seo
        title="Industries"
        description="Industry-specific technology expertise for healthcare, fintech, education, manufacturing, retail and more."
        path="/industries"
        schema={[breadcrumbSchema([{ name: "Industries" }])]}
      />

      <PageHero
        eyebrow="Industries"
        title="Deep expertise, in your world"
        description="We don't just understand technology — we understand the regulations, constraints and rhythms of your sector."
        crumbs={[{ label: "Industries" }]}
      >
        <div className="flex flex-wrap items-center gap-3 pt-2">
          <Button to="/get-a-quote" icon={<ArrowRight className="h-4 w-4" aria-hidden="true" />}>
            Discuss Your Industry
          </Button>
        </div>
      </PageHero>

      <section className="section-pad" aria-labelledby="industries-grid-heading">
        <div className="container-x flex flex-col gap-10">
          <SectionHeading uiOnly title="Industries we serve" />
          <RevealGroup className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3" stagger={0.06}>
            {industries.map((industry) => (
              <RevealItem key={industry.slug} className="h-full">
                <IndustryCard industry={industry} className="h-full" />
              </RevealItem>
            ))}
          </RevealGroup>
          <SectionHeading
            align="center"
            eyebrow="Don't see your sector?"
            title="We work across industries"
            description={<span>Our approach transfers well. If your sector isn't listed, <Link to="/contact" className="font-semibold text-primary hover:text-primary-dark">get in touch</Link> and we'll tell you honestly if we're the right partner.</span>}
          />
        </div>
      </section>

      <FinalCta title="Why sectors choose safety specialists" description="Certified designs, fewer compliance surprises and systems that make sense to your operations and auditors." />
    </PageTransition>
  );
}