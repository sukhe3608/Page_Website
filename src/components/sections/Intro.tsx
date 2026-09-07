import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Artwork } from "@/components/common/Artwork";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/animation/Reveal";
import { Parallax } from "@/components/animation/Parallax";
import { Counter } from "@/components/animation/Counter";

const highlights = [
  "Fire alarm, hydrant and sprinkler systems",
  "CCTV, access control and intrusion detection",
  "Authorized distributor for global brands",
  "Design, supply, install and AMC support",
];

export function Intro() {
  return (
    <section className="section-pad overflow-hidden" aria-labelledby="intro-heading">
      <div className="container-x grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <div className="flex flex-col items-start gap-6">
          <Reveal direction="down" distance={10}>
            <span className="eyebrow">Who we are</span>
          </Reveal>
          <Reveal direction="up" delay={0.05}>
            <h2 id="intro-heading" className="text-balance text-[clamp(1.75rem,4vw,2.75rem)] font-semibold leading-[1.15] tracking-tight text-navy">
              Protecting people &amp; assets with <span className="text-gradient">smart safety systems</span>
            </h2>
          </Reveal>
          <Reveal direction="up" delay={0.1}>
            <p className="max-w-xl text-pretty text-[17px] leading-relaxed text-muted">
              SLN Automation is a certified, end-to-end fire safety and security partner. From design
              and supply to installation, commissioning and AMC service, we protect critical
              sites and shared spaces with globally certified technology.
            </p>
          </Reveal>
          <Reveal direction="up" delay={0.15}>
            <ul className="grid gap-3 sm:grid-cols-2">
              {highlights.map((h) => (
                <li key={h} className="flex items-center gap-2.5 text-[14.5px] font-medium text-navy/85">
                  <CheckCircle2 className="h-4.5 w-4.5 shrink-0 text-primary" aria-hidden="true" />
                  {h}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal direction="up" delay={0.2}>
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Button to="/about" icon={<ArrowRight className="h-4.5 w-4.5" aria-hidden="true" />}>
                About SLN Automation
              </Button>
              <Button to="/case-studies" variant="ghost">
                See how we work <span aria-hidden="true">→</span>
              </Button>
            </div>
          </Reveal>
        </div>

        <Reveal direction="left" delay={0.1} className="relative">
          <Parallax speed={0.08}>
            <div className="relative">
              <div className="absolute -left-6 -top-6 h-24 w-24 rounded-2xl border border-primary/15 bg-soft" aria-hidden="true" />
              <div className="absolute -bottom-8 -right-6 h-32 w-32 rounded-full border border-primary/10 bg-white shadow-soft" aria-hidden="true" />
              <Artwork tint="blue" pattern="flow" className="aspect-[4/3] rounded-3xl shadow-lift">
                <div className="flex h-full items-center justify-center">
                  <div className="mx-8 w-full max-w-sm rounded-2xl border border-white/25 bg-white/12 p-5 backdrop-blur-sm">
                    <div className="mb-4 flex items-center justify-between">
                      <span className="text-sm font-semibold text-white">Safety systems</span>
                      <span className="rounded-full bg-white/20 px-2 py-0.5 text-[11px] font-semibold">Live</span>
                    </div>
                    <div className="flex gap-3">
                      <div className="flex-1 rounded-xl bg-white/12 p-3">
                        <p className="text-xl font-bold text-white">1,240</p>
                        <p className="text-[11px] text-white/70">Systems installed</p>
                      </div>
                      <div className="flex-1 rounded-xl bg-white/12 p-3">
                        <p className="text-xl font-bold text-white">96%</p>
                        <p className="text-[11px] text-white/70">On-time delivery</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Artwork>
              <div className="absolute -bottom-6 left-8 rounded-2xl border border-line bg-white px-5 py-4 shadow-lift">
                <div className="flex items-center gap-3">
                  <span className="text-2xl font-bold text-navy">
                    <Counter value={10} suffix="+" />
                  </span>
                  <span className="text-sm font-medium text-muted">
                    Years
                    <br />
                    of experience
                  </span>
                </div>
              </div>
            </div>
          </Parallax>
        </Reveal>
      </div>
    </section>
  );
}