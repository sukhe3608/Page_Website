import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import PageTransition from "@/components/animation/PageTransition";
import Seo from "@/components/seo/Seo";
import { clients } from "@/data/misc";
import { breadcrumbSchema } from "@/config/schemas";
import { PageHero } from "@/components/layout/PageHero";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CaseStudyCard } from "@/components/cards/CaseStudyCard";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { FinalCta } from "@/components/sections/FinalCta";
import { RevealGroup, RevealItem } from "@/components/animation/Reveal";
import { caseStudies } from "@/data/projects";

export default function Clients() {
  return (
    <PageTransition>
      <Seo
        title="Clients"
        description="The Airports, DRDO Labs, Hospitals, Hotels and Global Brands that trust SLN Automation for fire safety, security and automation."
        path="/clients"
        schema={[breadcrumbSchema([{ name: "Clients" }])]}
      />

      <PageHero
        eyebrow="Clients"
        title="Trusted where it matters most"
        description="From Airports and defence labs to hospitals, hotels and global manufacturers — the organizations we're proud to protect."
        crumbs={[{ label: "Clients" }]}
      />

      <section className="section-pad" aria-labelledby="clients-wall-heading">
        <div className="container-x flex flex-col gap-10">
          <SectionHeading align="center" eyebrow="Logo wall" title={<span id="clients-wall-heading">Companies we've worked with</span>} />
          <RevealGroup className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4" stagger={0.04}>
            {clients.map((client) => (
              <RevealItem key={client}>
                <div className="flex h-24 items-center justify-center rounded-2xl border border-line bg-white px-4 shadow-soft">
                  <p className="text-center text-[15px] font-bold tracking-tight text-navy/70 transition-colors duration-300 hover:text-primary">
                    {client}
                  </p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <section className="section-pad bg-bg/60" aria-labelledby="clients-notes-heading">
        <div className="container-x flex flex-col gap-10">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading align="left" eyebrow="In their words" title={<span id="clients-notes-heading">What clients say about working with us</span>} />
            <Link to="/case-studies" className="link-underline text-[14px] font-semibold text-primary">
              See all case studies
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {caseStudies.slice(0, 4).map((project, i) => (
              <CaseStudyCard key={project.slug} project={project} index={i} className="h-full" />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-x flex flex-col items-center gap-6 text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-navy sm:text-4xl">Become our next success story</h2>
          <p className="max-w-xl text-[15.5px] leading-relaxed text-muted">
            We'd love to count you among them. It starts with a quick conversation.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button to="/contact" icon={<ArrowRight className="h-4 w-4" aria-hidden="true" />}>
              Start the Conversation
            </Button>
          </div>
        </div>
      </section>

      <TestimonialsSection />
      <FinalCta />
    </PageTransition>
  );
}