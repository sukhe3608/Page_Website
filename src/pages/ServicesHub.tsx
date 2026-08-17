import { ArrowRight } from "lucide-react";
import PageTransition from "@/components/animation/PageTransition";
import Seo from "@/components/seo/Seo";
import { services } from "@/data/services";
import { breadcrumbSchema } from "@/config/schemas";
import { PageHero } from "@/components/layout/PageHero";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard } from "@/components/cards/ServiceCard";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { FinalCta } from "@/components/sections/FinalCta";
import { RevealGroup, RevealItem } from "@/components/animation/Reveal";

export default function ServicesHub() {
  return (
    <PageTransition>
      <Seo
        title="Services"
        description="From web platforms and mobile apps to AI integrations and cloud engineering — discover the full range of services NovaCore offers."
        path="/services"
        schema={[breadcrumbSchema([{ name: "Services" }])]}
      />

      <PageHero
        eyebrow="Services"
        title="Everything you need to ship great software"
        description="Eight practices, one accountable team. Browse what we do — or jump straight to a conversation about your project."
        crumbs={[{ label: "Services" }]}
      >
        <div className="flex flex-wrap items-center gap-3 pt-2">
          <Button to="/get-a-quote" icon={<ArrowRight className="h-4 w-4" aria-hidden="true" />}>
            Get a Free Quote
          </Button>
          <Button to="/contact" variant="outline">
            Contact Us
          </Button>
        </div>
      </PageHero>

      <section className="section-pad" aria-labelledby="services-grid-heading">
        <div className="container-x flex flex-col gap-10">
          <SectionHeading uiOnly title="Our services" />
          <RevealGroup className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3" stagger={0.06}>
            {services.map((service) => (
              <RevealItem key={service.slug} className="h-full">
                <ServiceCard service={service} className="h-full" />
              </RevealItem>
            ))}
            <RevealItem className="h-full">
              <div className="flex h-full min-h-56 flex-col justify-between gap-4 rounded-2xl border-2 border-dashed border-line bg-bg/40 p-6">
                <div>
                  <p className="eyebrow">Something else?</p>
                  <h3 className="mt-2 text-lg font-semibold tracking-tight text-navy">Need a different capability?</h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-muted">If your requirement isn't listed, we still want to hear about it. We'll tell you honestly whether we're a fit.</p>
                </div>
                <Button to="/contact" variant="outline" className="self-start">
                  Talk to us
                </Button>
              </div>
            </RevealItem>
          </RevealGroup>
        </div>
      </section>

      <ProcessSection />
      <FinalCta title="Not sure which service you need?" description="Describe your goal — we'll recommend the right approach and scope." />
    </PageTransition>
  );
}