import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import { industries } from "@/data/industries";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IndustryCard } from "@/components/cards/IndustryCard";
import { Reveal, RevealGroup, RevealItem } from "@/components/animation/Reveal";

export function IndustriesSection() {
  return (
    <section className="section-pad bg-white" aria-labelledby="industries-heading">
      <div className="container-x flex flex-col gap-14">
        <SectionHeading
          eyebrow="Industries"
          title={<span id="industries-heading">Deep context, not just code</span>}
          description="We build inside the constraints and language of your industry — regulation, scale and operational reality included."
        />
        <RevealGroup className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3" stagger={0.06}>
          {industries.map((industry) => (
            <RevealItem key={industry.slug} className="h-full">
              <IndustryCard industry={industry} className="h-full" />
            </RevealItem>
          ))}
        </RevealGroup>
        <Reveal direction="up" className="flex justify-center">
          <Link
            to="/industries"
            className="group flex items-center gap-2 text-[15px] font-semibold text-primary transition-colors hover:text-primary-dark"
          >
            Explore all industries
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}