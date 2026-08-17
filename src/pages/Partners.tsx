import { ArrowRight, Handshake } from "lucide-react";
import PageTransition from "@/components/animation/PageTransition";
import Seo from "@/components/seo/Seo";
import { partners } from "@/data/misc";
import { breadcrumbSchema } from "@/config/schemas";
import { PageHero } from "@/components/layout/PageHero";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FinalCta } from "@/components/sections/FinalCta";
import { RevealGroup, RevealItem } from "@/components/animation/Reveal";

const categories = Array.from(new Set(partners.map((p) => p.category)));

export default function Partners() {
  return (
    <PageTransition>
      <Seo
        title="Partners"
        description="The technology partners we work with — cloud platforms, SaaS tools and communities we trust."
        path="/partners"
        schema={[breadcrumbSchema([{ name: "Partners" }])]}
      />

      <PageHero
        eyebrow="Partners"
        title="Better together"
        description="We're platform-agnostic but partner-curious. These are the ecosystems we know best and recommend most."
        crumbs={[{ label: "Partners" }]}
      />

      <section className="section-pad" aria-labelledby="partners-grid-heading">
        <div className="container-x flex flex-col gap-12">
          {categories.map((category) => (
            <div key={category} className="flex flex-col gap-6">
              <SectionHeading align="left" eyebrow="Category" title={<span>{category}</span>} />
              <RevealGroup className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4" stagger={0.05}>
                {partners
                  .filter((p) => p.category === category)
                  .map((partner) => (
                    <RevealItem key={partner.name}>
                      <div className="group flex h-full flex-col justify-between gap-3 rounded-2xl border border-line bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-card">
                        <p className="text-xl font-bold tracking-tight text-navy transition-colors duration-300 group-hover:text-primary">
                          {partner.name}
                        </p>
                        <p className="text-[13px] font-medium text-muted">{partner.category}</p>
                      </div>
                    </RevealItem>
                  ))}
              </RevealGroup>
            </div>
          ))}
        </div>
      </section>

      <section className="section-pad bg-bg/60" aria-labelledby="partners-cta-heading">
        <div className="container-x">
          <div className="flex flex-col items-center gap-6 rounded-3xl border border-line bg-white p-10 text-center shadow-lift">
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <Handshake className="h-7 w-7" aria-hidden="true" />
            </span>
            <SectionHeading
              align="center"
              eyebrow="Work with us"
              title={<span id="partners-cta-heading">Become a partner</span>}
              description="If your platform or practice would benefit our mutual clients, we'd love to explore a partnership."
            />
            <div className="flex flex-wrap justify-center gap-3">
              <Button to="/contact" icon={<ArrowRight className="h-4 w-4" aria-hidden="true" />}>
                Talk Partnerships
              </Button>
            </div>
          </div>
        </div>
      </section>

      <FinalCta />
    </PageTransition>
  );
}