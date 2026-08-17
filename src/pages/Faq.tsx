import { Link } from "react-router";
import { ArrowRight, MessageCircleQuestion } from "lucide-react";
import PageTransition from "@/components/animation/PageTransition";
import Seo from "@/components/seo/Seo";
import { generalFaqs } from "@/data/misc";
import { faqSchema, breadcrumbSchema } from "@/config/schemas";
import { PageHero } from "@/components/layout/PageHero";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AccordionItem } from "@/components/ui/Accordion";
import { Reveal, RevealGroup, RevealItem } from "@/components/animation/Reveal";

export default function Faq() {
  return (
    <PageTransition>
      <Seo
        title="FAQ"
        description="Answers to common questions about NovaCore — how we work, pricing, timelines, support and more."
        path="/faq"
        schema={[faqSchema(generalFaqs), breadcrumbSchema([{ name: "FAQ" }])]}
      />

      <PageHero
        eyebrow="FAQ"
        title="Questions, answered"
        description="The things clients ask us most before starting a project. Still curious? Reach out — a human replies within one business day."
        crumbs={[{ label: "FAQ" }]}
      />

      <section className="section-pad" aria-labelledby="faq-list-heading">
        <div className="container-x flex flex-col gap-10 lg:grid lg:grid-cols-[1fr_1.4fr] lg:gap-14">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeading align="left" eyebrow="General" title={<span id="faq-list-heading">Everything in one place</span>} />
            <Reveal className="mt-6 rounded-2xl border border-line bg-white p-6 shadow-soft">
              <div className="flex items-start gap-3">
                <MessageCircleQuestion className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                <p className="text-[14.5px] leading-relaxed text-muted">
                  Can't find your answer? <Link to="/contact" className="font-semibold text-primary hover:text-primary-dark">Contact us</Link> or
                  browse{" "}
                  <Link to="/case-studies" className="font-semibold text-primary hover:text-primary-dark">case studies</Link>.
                </p>
              </div>
            </Reveal>
            <div className="mt-4">
              <Button to="/get-a-quote" icon={<ArrowRight className="h-4 w-4" aria-hidden="true" />}>
                Get a Free Quote
              </Button>
            </div>
          </div>

          <RevealGroup className="flex flex-col gap-3" stagger={0.04}>
            {generalFaqs.map((faq) => (
              <RevealItem key={faq.q}>
                <AccordionItem q={faq.q} a={faq.a} />
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>
    </PageTransition>
  );
}