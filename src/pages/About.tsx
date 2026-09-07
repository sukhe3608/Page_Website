import { ArrowRight, Target, Compass, HeartHandshake, Star } from "lucide-react";
import PageTransition from "@/components/animation/PageTransition";
import Seo from "@/components/seo/Seo";
import { breadcrumbSchema } from "@/config/schemas";
import { site } from "@/config/site";
import { PageHero } from "@/components/layout/PageHero";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Artwork } from "@/components/common/Artwork";
import { StatsSection } from "@/components/sections/StatsSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { FinalCta } from "@/components/sections/FinalCta";
import { Reveal, RevealGroup, RevealItem } from "@/components/animation/Reveal";
import { Counter } from "@/components/animation/Counter";
import { teamMembers } from "@/data/projects";

export default function About() {
  return (
    <PageTransition>
      <Seo
        title="About Us"
        description="Learn about SLN Automation India Pvt. Ltd. — a certified fire safety, security and automation partner trusted by aviation, defence, healthcare and global brands since 2016."
        path="/about"
        schema={[breadcrumbSchema([{ name: "About" }])]}
      />

      <PageHero
        eyebrow="About us"
        title="India's trusted safety & automation partner"
        description="We're a certified team of engineers, designers and safety specialists who believe critical sites deserve systems that are reliable, compliant and effortless — for the people who run them and the people they protect."
        crumbs={[{ label: "About" }]}
      />

      <section className="section-pad" aria-labelledby="about-story-heading">
        <div className="container-x grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="flex flex-col gap-6">
              <SectionHeading align="left" eyebrow="Our story" title={<span id="about-story-heading">Built by engineers, for safety</span>} />
              <p className="text-pretty text-[16.5px] leading-[1.85] text-muted">
                {site.name} started with a simple frustration: too many sites settle for systems that look good on
                paper but fail in practice. We set out to build a different kind of partner — one that treats your
                safety goals and your operations as the specification.
              </p>
              <p className="text-pretty text-[16.5px] leading-[1.85] text-muted">
                Today our certified engineers design, supply, install and maintain fire alarm, CCTV, access control,
                crowd control and automation systems across the country — for Airports, DRDO Labs, Hospitals, Hotels
                and Global Brands.
              </p>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { value: 100, suffix: "+", label: "Top brands served" },
                  { value: 1000, suffix: "+", label: "projects delivered" },
                  { value: 98, suffix: "%", label: "clients returning" },
                ].map((stat) => (
                  <div key={stat.label} className="rounded-xl border border-line bg-white p-4 text-center shadow-soft">
                    <p className="font-display text-2xl font-bold tracking-tight text-primary">
                      <Counter value={stat.value} suffix={stat.suffix} />
                    </p>
                    <p className="mt-0.5 text-[12px] font-medium text-muted">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
          <Reveal direction="left" delay={0.1}>
            <Artwork tint="blue" pattern="flow" className="aspect-[4/3] rounded-3xl shadow-lift" />
          </Reveal>
        </div>
      </section>

      <section className="section-pad bg-bg/60" aria-labelledby="about-values-heading">
        <div className="container-x flex flex-col gap-10">
          <SectionHeading align="center" eyebrow="What we believe" title={<span id="about-values-heading">Principles that guide every installation</span>} />
          <RevealGroup className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4" stagger={0.08}>
            {[
              { icon: Target, title: "Outcomes over output", description: "We measure success in lives protected and uptime — not in boxes shipped or tickets closed." },
              { icon: Compass, title: "Clarity over cleverness", description: "Simple, maintainable systems beat impressive architecture that no one can run in an emergency." },
              { icon: HeartHandshake, title: "Partnership over projects", description: "We stay accountable after commissioning, because safety systems are never really finished." },
              { icon: Star, title: "Craft over shortcuts", description: "Certified installs, genuine parts and code-compliant design are non-negotiables." },
            ].map((value) => (
              <RevealItem key={value.title}>
                <div className="group h-full rounded-2xl border border-line bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card">
                  <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-soft text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                    <value.icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="text-[16px] font-semibold tracking-tight text-navy">{value.title}</h3>
                  <p className="mt-2 text-[13.5px] leading-relaxed text-muted">{value.description}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <StatsSection />

      <section className="section-pad" aria-labelledby="about-team-heading">
        <div className="container-x flex flex-col gap-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading align="left" eyebrow="The people" title={<span id="about-team-heading">Meet the leadership</span>} />
            <Button to="/team" variant="outline">
              View full team
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Button>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {teamMembers.slice(0, 4).map((member) => (
              <div key={member.name} className="rounded-2xl border border-line bg-white p-6 text-center shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card">
                <span className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary-dark text-lg font-bold text-white">
                  {member.initials}
                </span>
                <h3 className="text-[15px] font-semibold text-navy">{member.name}</h3>
                <p className="text-[13px] text-muted">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ProcessSection />
      <TestimonialsSection />
      <FinalCta />
    </PageTransition>
  );
}