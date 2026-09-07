import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router";
import { ArrowRight, Check } from "lucide-react";
import { solutions } from "@/data/solutions";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Artwork } from "@/components/common/Artwork";
import { Icon } from "@/components/ui/Icon";
import { motionTokens } from "@/animations/tokens";
import { cn } from "@/utils/cn";

const tints = ["blue", "navy", "violet", "teal"] as const;

export function SolutionsSection() {
  const [active, setActive] = useState(solutions[0].slug);
  const current = solutions.find((s) => s.slug === active) ?? solutions[0];
  const tint = tints[solutions.findIndex((s) => s.slug === active) % 4];

  return (
    <section className="section-pad bg-white" aria-labelledby="solutions-heading">
      <div className="container-x flex flex-col gap-12">
        <SectionHeading
          eyebrow="Solutions"
          title={<span id="solutions-heading">Purpose-built solutions for real safety challenges</span>}
          description="We combine certified engineering and industry context to solve specific problems — not generic templates."
        />

        <div
          role="tablist"
          aria-label="Solutions"
          className="scrollbar-none -mx-1 flex gap-1.5 overflow-x-auto rounded-full border border-line bg-bg p-1.5 shadow-soft"
        >
          {solutions.map((solution) => {
            const selected = active === solution.slug;
            return (
              <button
                key={solution.slug}
                role="tab"
                aria-selected={selected}
                aria-controls="solutions-panel"
                onClick={() => setActive(solution.slug)}
                className={cn(
                  "relative shrink-0 rounded-full px-4 py-2 text-sm font-semibold transition-colors duration-300",
                  selected ? "text-white" : "text-muted hover:text-navy"
                )}
              >
                {selected && (
                  <motion.span
                    layoutId="solution-pill"
                    className="absolute inset-0 rounded-full bg-primary"
                    transition={{ type: "spring", stiffness: 380, damping: 34 }}
                    aria-hidden="true"
                  />
                )}
                <span className="relative z-10 flex items-center gap-2">
                  <Icon name={solution.icon} className="h-4 w-4" />
                  {solution.name}
                </span>
              </button>
            );
          })}
        </div>

        <div
          id="solutions-panel"
          role="tabpanel"
          aria-labelledby={`tab-${current.slug}`}
          className="grid items-stretch gap-8 lg:grid-cols-2"
        >
          <motion.div
            key={`content-${current.slug}`}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: motionTokens.ease.standard }}
            className="flex flex-col gap-6 rounded-3xl border border-line bg-white p-7 shadow-card sm:p-9"
          >
            <div className="flex items-center gap-4">
              <span className="flex h-13 w-13 shrink-0 items-center justify-center rounded-2xl bg-soft p-3.5 text-primary">
                <Icon name={current.icon} className="h-6 w-6" />
              </span>
              <div className="flex flex-col gap-1">
                <h3 className="text-xl font-semibold text-navy">{current.name}</h3>
                <p className="text-sm text-muted">{current.tagline}</p>
              </div>
            </div>
            <p className="text-[15px] leading-relaxed text-muted">{current.description}</p>
            <ul className="grid gap-3 sm:grid-cols-2">
              {current.features.slice(0, 6).map((feature) => (
                <li key={feature} className="flex items-start gap-2.5 text-[14px] font-medium text-navy/85">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-soft text-primary">
                    <Check className="h-3 w-3" aria-hidden="true" />
                  </span>
                  {feature}
                </li>
              ))}
            </ul>
            <div className="mt-auto flex items-center gap-4 pt-2">
              <Link
                to={`/solutions/${current.slug}`}
                className="group flex items-center gap-2 text-[15px] font-semibold text-primary transition-colors hover:text-primary-dark"
              >
                Explore this solution
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
              </Link>
              <span className="ml-auto flex flex-wrap justify-end gap-1.5">
                {current.industries.slice(0, 3).map((i) => (
                  <span key={i} className="rounded-full bg-bg px-2.5 py-1 text-[11px] font-semibold text-muted">
                    {i}
                  </span>
                ))}
              </span>
            </div>
          </motion.div>

          <motion.div
            key={`visual-${current.slug}`}
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, ease: motionTokens.ease.standard }}
            className="relative"
          >
            <Artwork tint={tint} pattern={solutions.findIndex((s) => s.slug === active) % 3 === 0 ? "bars" : "flow"} className="h-full min-h-72 rounded-3xl shadow-lift">
              <div className="flex h-full flex-col justify-between p-7 sm:p-9">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-white/70">Built for</p>
                <div className="flex flex-wrap gap-2">
                  {current.industries.map((i) => (
                    <span key={i} className="rounded-full border border-white/25 bg-white/15 px-3.5 py-1.5 text-sm font-semibold text-white backdrop-blur-sm">
                      {i}
                    </span>
                  ))}
                </div>
                <p className="max-w-sm text-white/85">{current.longDescription.split("\n")[0]}</p>
              </div>
            </Artwork>
          </motion.div>
        </div>
      </div>
    </section>
  );
}