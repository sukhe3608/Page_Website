import { ArrowRight, CalendarClock } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Magnetic } from "@/components/ui/Magnetic";
import { AnimatedBackground } from "@/components/animation/AnimatedBackground";
import { Aurora } from "@/components/animation/Aurora";
import { Shine } from "@/components/animation/Shine";
import { Reveal } from "@/components/animation/Reveal";
import { isBot } from "@/utils/env";

interface FinalCtaProps {
  title?: string;
  description?: string;
  primary?: { label: string; to: string };
  secondary?: { label: string; to: string };
}

export function FinalCta({
  title = "Let's protect what matters most",
  description = "Get a free site inspection and a transparent proposal from India's trusted fire safety and security partner. We'll protect your people, assets and operations.",
  primary = { label: "Get Free Site Inspection", to: "/schedule-consultation" },
  secondary = { label: "Call Us Now", to: "/contact" },
}: FinalCtaProps) {
  return (
    <section className="section-pad" aria-labelledby="final-cta-heading">
      <div className="container-x">
        <Shine className="rounded-[2rem] shadow-lift" color="rgba(21, 94, 239, 0.09)" duration={4}>
          <div className="relative overflow-hidden rounded-[2rem] border border-primary/15 bg-white px-6 py-16 text-center sm:px-12 sm:py-20">
          <div className="pointer-events-none absolute inset-0" aria-hidden="true">
            <div className="absolute inset-0 bg-gradient-to-b from-soft/70 via-white to-soft/40" />
            <Aurora opacity={0.4} blur="70px" colors={["#155EEF", "#7C5CFC", "#14B8A6"]} />
            <AnimatedBackground className="absolute inset-0 h-full w-full opacity-60" density={0.7} />
            {!isBot && (
              <svg className="absolute inset-x-0 top-8 h-24 w-full text-primary/15" viewBox="0 0 1200 100" fill="none" preserveAspectRatio="none" aria-hidden="true">
                <path d="M0 60 C 200 20, 400 90, 600 50 S 1000 20, 1200 55" stroke="currentColor" strokeWidth="1.5" />
                <path d="M0 80 C 250 40, 450 100, 700 65 S 1000 45, 1200 75" stroke="currentColor" strokeWidth="1" strokeDasharray="4 6" />
              </svg>
            )}
          </div>

          <div className="relative flex flex-col items-center gap-6">
            <Reveal direction="down" distance={10}>
              <span className="eyebrow">Start a conversation</span>
            </Reveal>
            <Reveal direction="up" delay={0.05}>
              <h2 id="final-cta-heading" className="mx-auto max-w-2xl text-balance text-[clamp(1.75rem,4.5vw,3rem)] font-semibold leading-[1.12] tracking-tight text-navy">
                {title}
              </h2>
            </Reveal>
            <Reveal direction="up" delay={0.1}>
              <p className="mx-auto max-w-xl text-pretty text-[16px] leading-relaxed text-muted">{description}</p>
            </Reveal>
            <Reveal direction="up" delay={0.15}>
              <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                <Magnetic strength={0.25}>
                  <Button to={primary.to} size="lg" icon={<ArrowRight className="h-4.5 w-4.5" aria-hidden="true" />}>
                    {primary.label}
                  </Button>
                </Magnetic>
                <Button to={secondary.to} size="lg" variant="outline" icon={<CalendarClock className="h-4.5 w-4.5" aria-hidden="true" />}>
                  {secondary.label}
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
        </Shine>
      </div>
    </section>
  );
}