import { Link, Navigate, useParams } from "react-router";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import PageTransition from "@/components/animation/PageTransition";
import Seo from "@/components/seo/Seo";
import { servicesBySlug } from "@/data/services";
import { caseStudies } from "@/data/projects";
import { breadcrumbSchema } from "@/config/schemas";
import { PageHero } from "@/components/layout/PageHero";
import { Icon } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { AccordionItem } from "@/components/ui/Accordion";
import { DetailSidebar } from "@/components/common/DetailSidebar";
import { TechChips } from "@/components/common/TechChips";
import { CaseStudyCard } from "@/components/cards/CaseStudyCard";
import { Artwork } from "@/components/common/Artwork";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { FinalCta } from "@/components/sections/FinalCta";
import { Reveal, RevealGroup, RevealItem } from "@/components/animation/Reveal";

const sections = [
  { id: "overview", label: "Overview" },
  { id: "capabilities", label: "Capabilities" },
  { id: "features", label: "Features" },
  { id: "technology", label: "Technology" },
  { id: "process", label: "Process" },
  { id: "benefits", label: "Benefits" },
  { id: "case-studies", label: "Case studies" },
  { id: "faq", label: "FAQ" },
];

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = slug ? servicesBySlug[slug] : undefined;
  if (!service) return <Navigate to="/services" replace />;

  const relatedCaseStudies = caseStudies.filter((c) => service.caseStudySlugs.includes(c.slug));
  const tint = (service.order % 4 === 1 ? "blue" : service.order % 4 === 2 ? "violet" : service.order % 4 === 3 ? "teal" : "navy") as "blue" | "navy" | "violet" | "teal";

  return (
    <PageTransition>
      <Seo
        title={`${service.name} — Services`}
        description={service.description}
        path={`/services/${service.slug}`}
        schema={[breadcrumbSchema([{ name: "Services", path: "/services" }, { name: service.name, path: `/services/${service.slug}` }])]}
      />

      <PageHero
        eyebrow="Services"
        title={<span className="text-gradient">{service.name}</span>}
        description={service.longDescription.split("\n\n")[0]}
        crumbs={[{ label: "Services", to: "/services" }, { label: service.name }]}
      >
        <div className="flex flex-wrap items-center gap-3 pt-2">
          <Button to="/get-a-quote" icon={<ArrowRight className="h-4 w-4" aria-hidden="true" />}>
            Request a Quote
          </Button>
          <Button to="/contact" variant="outline">
            Talk to Us
          </Button>
        </div>
      </PageHero>

      <div className="container-x grid gap-10 pb-20 lg:grid-cols-[250px_1fr] lg:gap-14">
        <DetailSidebar sections={sections} />

        <div className="flex min-w-0 flex-col gap-20">
          <section id="overview" className="scroll-mt-28" aria-labelledby="svc-overview-heading">
            <div className="grid items-center gap-8 lg:grid-cols-[1.4fr_1fr]">
              <Reveal>
                <div className="flex flex-col gap-5">
                  <div className="flex items-center gap-3">
                    <span className="flex h-13 w-13 items-center justify-center rounded-2xl bg-soft p-3 text-primary">
                      <Icon name={service.icon} className="h-6.5 w-6.5" />
                    </span>
                    <h2 id="svc-overview-heading" className="text-2xl font-semibold tracking-tight text-navy">
                      Overview
                    </h2>
                  </div>
                  <p className="text-pretty text-[17px] leading-relaxed text-muted">{service.longDescription}</p>
                  <div className="flex flex-wrap gap-2">
                    {service.benefits.slice(0, 3).map((b) => (
                      <Badge key={b} variant="outline">
                        {b}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Reveal>
              <Reveal direction="left" delay={0.1}>
                <Artwork tint={tint} pattern="flow" className="aspect-[5/4] rounded-2xl shadow-lift">
                  <div className="flex h-full items-center justify-center">
                    <span className="flex h-20 w-20 items-center justify-center rounded-3xl bg-white/15 backdrop-blur-sm">
                      <Icon name={service.icon} className="h-10 w-10 text-white" />
                    </span>
                  </div>
                </Artwork>
              </Reveal>
            </div>
          </section>

          <section id="capabilities" className="scroll-mt-28" aria-labelledby="svc-caps-heading">
            <SectionHeading align="left" eyebrow="What we cover" title={<span id="svc-caps-heading">Key capabilities</span>} />
            <RevealGroup className="mt-10 grid gap-4 sm:grid-cols-2" stagger={0.06}>
              {service.capabilities.map((cap) => (
                <RevealItem key={cap}>
                  <div className="flex items-start gap-3 rounded-xl border border-line bg-white p-4 shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/25 hover:shadow-card">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                    <span className="text-[15px] font-medium text-navy/85">{cap}</span>
                  </div>
                </RevealItem>
              ))}
            </RevealGroup>
          </section>

          <section id="features" className="scroll-mt-28" aria-labelledby="svc-features-heading">
            <SectionHeading align="left" eyebrow="Delivered value" title={<span id="svc-features-heading">What you get</span>} />
            <RevealGroup className="mt-10 grid gap-4 sm:grid-cols-2" stagger={0.06}>
              {service.features.map((feature) => (
                <RevealItem key={feature}>
                  <div className="flex items-center gap-3 rounded-xl border border-line bg-white p-4 shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/25 hover:shadow-card">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-soft text-primary">
                      <CheckCircle2 className="h-4.5 w-4.5" aria-hidden="true" />
                    </span>
                    <span className="text-[15px] font-medium text-navy/85">{feature}</span>
                  </div>
                </RevealItem>
              ))}
            </RevealGroup>
          </section>

          <section id="technology" className="scroll-mt-28" aria-labelledby="svc-tech-heading">
            <SectionHeading align="left" eyebrow="Our stack" title={<span id="svc-tech-heading">Technology we work with</span>} />
            <Reveal className="mt-10">
              <TechChips items={service.technologies} />
            </Reveal>
          </section>

          <section id="process" className="scroll-mt-28" aria-labelledby="svc-process-heading">
            <div id="svc-process-heading">
              <ProcessSection />
            </div>
          </section>

          <section id="benefits" className="scroll-mt-28 bg-white" aria-labelledby="svc-benefits-heading">
            <div className="rounded-3xl border border-line bg-bg/50 p-7 sm:p-10">
              <SectionHeading align="left" eyebrow="Why it matters" title={<span id="svc-benefits-heading">Business benefits</span>} />
              <RevealGroup className="mt-8 grid gap-4 sm:grid-cols-2" stagger={0.06}>
                {service.benefits.map((benefit) => (
                  <RevealItem key={benefit}>
                    <div className="flex items-start gap-3 rounded-xl border border-line bg-white p-4 shadow-soft">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-success" aria-hidden="true" />
                      <span className="text-[15px] font-medium text-navy/85">{benefit}</span>
                    </div>
                  </RevealItem>
                ))}
              </RevealGroup>
            </div>
          </section>

          <section id="case-studies" className="scroll-mt-28" aria-labelledby="svc-case-heading">
            {relatedCaseStudies.length > 0 && (
              <>
                <SectionHeading align="left" eyebrow="Proof" title={<span id="svc-case-heading">Selected engagements</span>} />
                <div className="mt-10 grid gap-6 md:grid-cols-2">
                  {relatedCaseStudies.map((project, i) => (
                    <CaseStudyCard key={project.slug} project={project} index={i} className="h-full" />
                  ))}
                </div>
              </>
            )}
          </section>

          <section id="faq" className="scroll-mt-28" aria-labelledby="svc-faq-heading">
            <SectionHeading align="left" eyebrow="Questions" title={<span id="svc-faq-heading">Frequently asked questions</span>} />
            <div className="mt-10 flex flex-col gap-3">
              {service.faqs.map((faq) => (
                <AccordionItem key={faq.q} q={faq.q} a={faq.a} />
              ))}
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-3 rounded-2xl border border-line bg-white p-6 shadow-soft">
              <p className="text-[15px] text-muted">
                Have a different question?{" "}
                <Link to="/faq" className="font-semibold text-primary transition-colors hover:text-primary-dark">
                  Browse all FAQs
                </Link>{" "}
                or{" "}
                <Link to="/contact" className="font-semibold text-primary transition-colors hover:text-primary-dark">
                  contact us
                </Link>
                .
              </p>
            </div>
          </section>
        </div>
      </div>

      <FinalCta
        title={`Let's plan your ${service.name.toLowerCase()} installation`}
        description="Tell us about your site — we'll scope the design, supply, installation and AMC together."
      />
    </PageTransition>
  );
}