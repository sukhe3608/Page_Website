import { stats } from "@/data/misc";
import { Counter } from "@/components/animation/Counter";
import { AnimatedBackground } from "@/components/animation/AnimatedBackground";
import { RevealGroup, RevealItem } from "@/components/animation/Reveal";

export function StatsSection() {
  return (
    <section className="relative overflow-hidden bg-navy" aria-label="Company statistics">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute inset-0 bg-grid opacity-[0.12]" />
        <div className="absolute left-1/2 top-0 h-72 w-[42rem] -translate-x-1/2 rounded-full bg-primary/15 blur-3xl" />
        <AnimatedBackground className="absolute inset-0 h-full w-full opacity-40" density={0.6} />
      </div>

      <RevealGroup className="container-x relative grid grid-cols-2 gap-10 py-16 text-center sm:py-20 lg:grid-cols-4">
        {stats.map((stat) => (
          <RevealItem key={stat.label}>
            <div className="flex flex-col items-center gap-2">
              <span className="text-[clamp(2rem,5vw,3.25rem)] font-bold tracking-tight text-white">
                <Counter value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
              </span>
              <span className="max-w-40 text-sm font-medium text-slate-400">{stat.label}</span>
            </div>
          </RevealItem>
        ))}
      </RevealGroup>
    </section>
  );
}