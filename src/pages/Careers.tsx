import { ArrowRight, Coffee, Laptop, HeartPulse, UsersRound } from "lucide-react";
import PageTransition from "@/components/animation/PageTransition";
import Seo from "@/components/seo/Seo";
import { jobs } from "@/data/projects";
import { breadcrumbSchema } from "@/config/schemas";
import { PageHero } from "@/components/layout/PageHero";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { JobCard } from "@/components/cards/JobCard";
import { FinalCta } from "@/components/sections/FinalCta";
import { RevealGroup, RevealItem } from "@/components/animation/Reveal";

const perks = [
  { icon: Laptop, title: "Hands-on training", description: "On-the-job certification and training in fire safety, ELV and automation systems." },
  { icon: HeartPulse, title: "Health & safety", description: "Comprehensive coverage, PPE and safety-first culture on every site, every day." },
  { icon: Coffee, title: "Learning budget", description: "Annual budget for certifications, courses and conferences — no approval theater." },
  { icon: UsersRound, title: "Real ownership", description: "Small teams, clear missions and the autonomy to make decisions on-site." },
];

export default function Careers() {
  return (
    <PageTransition>
      <Seo
        title="Careers"
        description="Join SLN Automation India Pvt. Ltd. — certified roles in fire safety, security, ELV and automation with real ownership."
        path="/careers"
        schema={[breadcrumbSchema([{ name: "Careers" }])]}
      />

      <PageHero
        eyebrow="Careers"
        title="Build a career protecting what matters"
        description="We're building a company where craft matters, deadlines are honest and people are treated like adults. Sound like your kind of place?"
        crumbs={[{ label: "Careers" }]}
      >
        <div className="flex flex-wrap items-center gap-3 pt-2">
          <Button to="#open-roles" icon={<ArrowRight className="h-4 w-4" aria-hidden="true" />}>
            See Open Roles
          </Button>
        </div>
      </PageHero>

      <section className="section-pad" aria-labelledby="careers-perks-heading">
        <div className="container-x flex flex-col gap-10">
          <SectionHeading align="center" eyebrow="Why SLN Automation" title={<span id="careers-perks-heading">What we offer beyond a paycheck</span>} />
          <RevealGroup className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4" stagger={0.07}>
            {perks.map((perk) => (
              <RevealItem key={perk.title}>
                <div className="h-full rounded-2xl border border-line bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card">
                  <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-soft text-primary">
                    <perk.icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="text-[16px] font-semibold text-navy">{perk.title}</h3>
                  <p className="mt-2 text-[13.5px] leading-relaxed text-muted">{perk.description}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <section id="open-roles" className="section-pad scroll-mt-24 bg-bg/60" aria-labelledby="careers-roles-heading">
        <div className="container-x flex flex-col gap-10">
          <SectionHeading align="center" eyebrow="Open positions" title={<span id="careers-roles-heading">{jobs.length} roles waiting for you</span>} description="Don't see a match? We still want to talk — send a note through the contact form." />
          <RevealGroup className="grid gap-5" stagger={0.05}>
            {jobs.map((job) => (
              <RevealItem key={job.slug}>
                <JobCard job={job} className="h-full" />
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <FinalCta title="Have a role in mind we haven't listed?" description="Write to us with a sample of your work — we'd love to see it." />
    </PageTransition>
  );
}