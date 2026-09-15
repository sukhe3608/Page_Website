import { ArrowRight, Handshake } from "lucide-react";
import PageTransition from "@/components/animation/PageTransition";
import Seo from "@/components/seo/Seo";
import { partners, partnerLogos } from "@/data/misc";
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
        description="The global brands Shiva Engineers supplies and supports — from fire-safety leaders to 120+ authorized technology partners for security, automation and IT infrastructure."
        path="/partners"
        schema={[breadcrumbSchema([{ name: "Partners" }])]}
      />

      <PageHero
        eyebrow="Partners"
        title="The brands we trust"
        description="We're authorized distributors for world-leading safety and security brands — so your systems are built on globally certified, genuine equipment."
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

      <section className="section-pad" aria-labelledby="brands-heading">
        <div className="container-x flex flex-col gap-10">
          <SectionHeading
            align="center"
            eyebrow="Brands"
            title={<span id="brands-heading">Authorized brands we work with</span>}
            description="Over 120 global brands supplying and supporting our fire safety, security, automation and IT infrastructure solutions across India."
          />
          <RevealGroup className="grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8" stagger={0.02}>
            {partnerLogos.map((logo) => (
              <RevealItem key={logo}>
                <div className="flex h-20 items-center justify-center rounded-xl border border-line bg-white px-3 py-2 shadow-soft transition-all duration-300 hover:border-primary/25 hover:shadow-card">
                  <img
                    src={`${import.meta.env.BASE_URL}${logo}`}
                    alt=""
                    aria-hidden="true"
                    loading="lazy"
                    width={120}
                    height={80}
                    className="max-h-full w-full object-contain"
                  />
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
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
              eyebrow="Distributor network"
              title={<span id="partners-cta-heading">Want to know more?</span>}
              description="Ask us about any brand in our portfolio — we'll advise on the right system for your site and requirements."
            />
            <div className="flex flex-wrap justify-center gap-3">
              <Button to="/contact" icon={<ArrowRight className="h-4 w-4" aria-hidden="true" />}>
                Talk to Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      <FinalCta />
    </PageTransition>
  );
}