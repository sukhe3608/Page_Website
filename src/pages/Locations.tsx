import { Link } from "react-router";
import { ArrowRight, Clock3, Mail, Phone } from "lucide-react";
import PageTransition from "@/components/animation/PageTransition";
import Seo from "@/components/seo/Seo";
import { locations } from "@/data/misc";
import { breadcrumbSchema } from "@/config/schemas";
import { PageHero } from "@/components/layout/PageHero";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { LocationsSection } from "@/components/sections/LocationsSection";
import { Reveal, RevealGroup, RevealItem } from "@/components/animation/Reveal";

export default function Locations() {
  return (
    <PageTransition>
      <Seo
        title="Locations"
        description="Where to find SLN Automation India Pvt. Ltd. — offices across India and how to reach us."
        path="/locations"
        schema={[breadcrumbSchema([{ name: "Locations" }])]}
      />

      <PageHero
        eyebrow="Locations"
        title="Six offices, one team across India"
        description="Visit us, call us, or just start a conversation online — whatever works best for you."
        crumbs={[{ label: "Locations" }]}
      />

      <LocationsSection />

      <section className="section-pad" aria-labelledby="locations-details-heading">
        <div className="container-x flex flex-col gap-10">
          <SectionHeading align="center" eyebrow="Office details" title={<span id="locations-details-heading">Addresses &amp; hours</span>} />
          <RevealGroup className="grid gap-6 md:grid-cols-3" stagger={0.07}>
            {locations.map((loc) => (
              <RevealItem key={loc.city}>
                <div className="flex h-full flex-col gap-4 rounded-2xl border border-line bg-white p-6 shadow-soft">
                  <div>
                    <h3 className="text-lg font-semibold tracking-tight text-navy">{loc.city}</h3>
                    <p className="text-[13px] font-medium text-primary">{loc.country}</p>
                  </div>
                  <address className="text-[14px] not-italic leading-relaxed text-muted">{loc.address}</address>
                  <div className="flex flex-col gap-2 border-t border-line pt-4 text-[13.5px] text-navy/80">
                    <p className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-primary" aria-hidden="true" />
                      <a href={`tel:${loc.phone.replace(/\s/g, "")}`} className="transition-colors hover:text-primary">
                        {loc.phone}
                      </a>
                    </p>
                    <p className="flex items-center gap-2">
                      <Mail className="h-4 w-4 text-primary" aria-hidden="true" />
                      <a href={`mailto:${loc.email}`} className="transition-colors hover:text-primary">
                        {loc.email}
                      </a>
                    </p>
                    <p className="flex items-center gap-2">
                      <Clock3 className="h-4 w-4 text-primary" aria-hidden="true" />
                      {loc.hours}
                    </p>
                  </div>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
          <Reveal className="rounded-2xl border border-line bg-soft/50 p-6 text-center">
            <p className="text-[14.5px] leading-relaxed text-navy/80">
              Coming to see us?{" "}
              <Link to="/contact" className="font-semibold text-primary hover:text-primary-dark">
                Let us know
              </Link>{" "}
              and we'll book a meeting room and coffee.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-20">
        <div className="container-x">
          <div className="flex flex-col items-center gap-6 text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-navy sm:text-4xl">Prefer to start online?</h2>
            <p className="max-w-xl text-[15.5px] leading-relaxed text-muted">
              Most of our projects start with one simple conversation — a free site inspection — no travel required.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Button to="/contact" icon={<ArrowRight className="h-4 w-4" aria-hidden="true" />}>
                Contact Us
              </Button>
              <Button to="/get-a-quote" variant="outline">
                Get a Quote
              </Button>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}