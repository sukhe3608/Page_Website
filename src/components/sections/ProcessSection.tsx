import { processSteps } from "@/data/misc";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { LineDraw } from "@/components/animation/LineDraw";
import { Reveal, RevealGroup, RevealItem } from "@/components/animation/Reveal";
import { cn } from "@/utils/cn";

export function ProcessSection() {
  return (
    <section className="section-pad" aria-labelledby="process-heading">
      <div className="container-x flex flex-col gap-16">
        <SectionHeading
          eyebrow="Our process"
          title={<span id="process-heading">A delivery rhythm you can count on</span>}
          description="Six clear phases — from consultation to AMC support — with certified engineering and honest reporting at every step."
        />

        <div className="relative">
          <div className="absolute bottom-8 left-5 top-2 w-px bg-line lg:left-1/2" aria-hidden="true" />
          <LineDraw
            d="M0 0 V 1200"
            viewBox="0 0 10 1200"
            className="absolute bottom-8 left-5 top-2 h-[calc(100%-2.5rem)] w-px text-primary lg:left-1/2"
            strokeWidth={2}
            duration={2.4}
          />

          <RevealGroup className="flex flex-col gap-10" stagger={0.1}>
            {processSteps.map((step, i) => {
              const left = i % 2 === 0;
              return (
                <RevealItem key={step.title}>
                  <div className="relative grid gap-4 pl-14 lg:grid-cols-2 lg:gap-16 lg:pl-0">
                    <span
                      className={cn(
                        "absolute left-5 top-1 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full border-2 border-primary bg-white text-sm font-bold text-primary shadow-card",
                        "lg:left-1/2"
                      )}
                      aria-hidden="true"
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className={cn(left ? "lg:col-start-1 lg:text-right" : "lg:col-start-2")}>
                      <div className="inline-flex max-w-md flex-col gap-2 rounded-2xl border border-line bg-white p-6 shadow-soft transition-all duration-300 hover:border-primary/25 hover:shadow-card">
                        <h3 className="text-lg font-semibold text-navy">{step.title}</h3>
                        <p className="text-[14.5px] leading-relaxed text-muted">{step.description}</p>
                      </div>
                    </div>
                  </div>
                </RevealItem>
              );
            })}
          </RevealGroup>
        </div>

        <Reveal direction="up" className="text-center">
          <p className="text-[15px] text-muted">
            Every engagement follows this rhythm — adapted to your industry, constraints and goals.
          </p>
        </Reveal>
      </div>
    </section>
  );
}