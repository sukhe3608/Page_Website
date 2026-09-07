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
    description: "Every project starts with a free site inspection and your safety goals in mind — not a one-size-fits-all quote.",
  },
  {
    icon: "shield-check",
    title: "Authorized & Certified",
    description: "Authorized distributor for global brands with certified, background-checked installation and service engineers.",
  },
  {
    icon: "building",
    title: "End-to-End Delivery",
    description: "Design, supply, installation, commissioning, training and AMC — one accountable partner across the full lifecycle.",
  },
  {
    icon: "heart-pulse",
    title: "Compliance First",
    description: "Systems built to applicable safety and security standards — protecting people, assets and your reputation.",
  },
  {
    icon: "clock",
    title: "On-Time, Every Time",
    description: "Structured project management and clear milestones keep critical schedules — airports, labs and hospitals — on track.",
  },
  {
    icon: "life-buoy",
    title: "Continuous Support",
    description: "AMC services, priority response and genuine spares keep your systems reliable long after commissioning.",
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
          eyebrow="Why SLN Automation"
          title={<span id="why-us-heading">Why clients choose to work with us</span>}
          description="The principles that shape every installation, team and decision we make."
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