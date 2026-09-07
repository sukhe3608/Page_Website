import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import { services } from "@/data/services";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard } from "@/components/cards/ServiceCard";
import { Reveal, RevealGroup, RevealItem } from "@/components/animation/Reveal";

export function ServicesSection() {
  return (
    <section className="section-pad" aria-labelledby="services-heading">
      <div className="container-x flex flex-col gap-14">
        <SectionHeading
          eyebrow="What we do"
          title={<span id="services-heading">Every system under one accountable team</span>}
          description="From fire protection and electronic security to automation and networking — we design, supply, install and maintain it all."
        />
        <RevealGroup className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4" stagger={0.07}>
          {services.map((service) => (
            <RevealItem key={service.slug} className="h-full">
              <ServiceCard service={service} className="h-full" />
            </RevealItem>
          ))}
        </RevealGroup>
        <Reveal direction="up" className="flex justify-center">
          <Link
            to="/services"
            className="group flex items-center gap-2 text-[15px] font-semibold text-primary transition-colors hover:text-primary-dark"
          >
            Explore all services
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}