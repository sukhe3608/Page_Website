import type { IconName } from "@/types/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/Icon";
import { LineDraw } from "@/components/animation/LineDraw";
import { RevealGroup, RevealItem } from "@/components/animation/Reveal";
import { Spotlight } from "@/components/animation/Spotlight";

const reasons: { icon: IconName; title: string; description: string }[] = [
  {
    icon: "users",
    title: "Customer Centric",
    description: "We measure success by your outcomes — and stay accountable to them long after launch.",
  },
  {
    icon: "workflow",
    title: "Agile & Flexible",
    description: "Two-week delivery cycles with weekly demos. Priorities can shift as you learn, without derailing.",
  },
  {
    icon: "shield-check",
    title: "Quality Assured",
    description: "Automated testing, code review and security checks are non-negotiable on every engagement.",
  },
  {
    icon: "compass",
    title: "Transparent",
    description: "Real progress, real budgets, real risks — shared openly every single week.",
  },
  {
    icon: "rocket",
    title: "Future Ready",
    description: "Architecture that anticipates scale, regulation and the next technology cycle.",
  },
  {
    icon: "life-buoy",
    title: "Continuous Support",
    description: "Monitoring, maintenance and iteration partnerships that outlast the initial build.",
  },
];

export function WhyUsSection() {
  return (
    <section className="section-pad bg-white" aria-labelledby="why-us-heading">
      <div className="container-x relative flex flex-col gap-14">
        <div className="pointer-events-none absolute inset-x-0 top-0 hidden justify-between lg:flex" aria-hidden="true">
          <LineDraw d="M0 30 H 420" viewBox="0 0 420 60" className="h-16 w-1/3 text-primary/15" />
          <LineDraw d="M0 30 H 420" viewBox="0 0 420 60" className="h-16 w-1/3 text-primary/15" />
        </div>

        <SectionHeading
          eyebrow="Why NovaCore"
          title={<span id="why-us-heading">Why teams choose to work with us</span>}
          description="The principles that shape every project, team and decision we make."
        />

        <RevealGroup className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3" stagger={0.07}>
          {reasons.map((reason) => (
            <RevealItem key={reason.title} className="h-full">
              <Spotlight className="h-full rounded-2xl">
                <div className="group relative flex h-full flex-col gap-4 rounded-2xl border border-line bg-bg/60 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/25 hover:bg-white hover:shadow-card">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-primary shadow-soft transition-all duration-300 group-hover:bg-primary group-hover:text-white group-hover:shadow-glow">
                    <Icon name={reason.icon} className="h-6 w-6" />
                  </span>
                  <h3 className="text-lg font-semibold text-navy">{reason.title}</h3>
                  <p className="text-[14.5px] leading-relaxed text-muted">{reason.description}</p>
                </div>
              </Spotlight>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}