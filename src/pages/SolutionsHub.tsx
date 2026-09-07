import { ArrowRight } from "lucide-react";
import PageTransition from "@/components/animation/PageTransition";
import Seo from "@/components/seo/Seo";
import { solutions } from "@/data/solutions";
import { breadcrumbSchema } from "@/config/schemas";
import { PageHero } from "@/components/layout/PageHero";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SolutionCard } from "@/components/cards/SolutionCard";
import { FinalCta } from "@/components/sections/FinalCta";
import { RevealGroup, RevealItem } from "@/components/animation/Reveal";

export default function SolutionsHub() {
  return (
    <PageTransition>
      <Seo
        title="Solutions"
        description="Integrated safety solutions — electronic security, fire protection, communication systems, lighting and more."
        path="/solutions"
        schema={[breadcrumbSchema([{ name: "Solutions" }])]}
      />

      <PageHero
        eyebrow="Solutions"
        title="Proven patterns, applied to your site"
        description="Every solution below combines our systems into a packaged outcome — so you get a defined scope, a known timeline and a clear result."
        crumbs={[{ label: "Solutions" }]}
      >
        <div className="flex flex-wrap items-center gap-3 pt-2">
          <Button to="/schedule-consultation" icon={<ArrowRight className="h-4 w-4" aria-hidden="true" />}>
            Get Free Site Inspection
          </Button>
        </div>
      </PageHero>

      <section className="section-pad" aria-labelledby="solutions-grid-heading">
        <div className="container-x flex flex-col gap-10">
          <SectionHeading uiOnly title="Our solutions" />
          <RevealGroup className="grid gap-6 sm:grid-cols-2" stagger={0.06}>
            {solutions.map((solution) => (
              <RevealItem key={solution.slug} className="h-full">
                <SolutionCard solution={solution} className="h-full" />
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <section className="section-pad bg-bg/60" aria-labelledby="solutions-cta-heading">
        <div className="container-x">
          <div className="rounded-3xl border border-line bg-white p-8 shadow-lift sm:p-12">
            <SectionHeading
              align="center"
              eyebrow="Not sure where to start"
              title={<span id="solutions-cta-heading">Combine solutions freely</span>}
              description="Most clients start with one solution and add more as their needs grow. Tell us your priority and we'll sequence the rest."
            />
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button to="/get-a-quote">Get a Free Quote</Button>
              <Button to="/services" variant="outline">
                Explore Services
              </Button>
            </div>
          </div>
        </div>
      </section>

      <FinalCta />
    </PageTransition>
  );
}