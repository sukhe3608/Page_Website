import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { motionTokens } from "@/animations/tokens";
import { isBot } from "@/utils/env";
import { AnimatedBackground } from "@/components/animation/AnimatedBackground";
import { Breadcrumbs, type Crumb } from "@/components/layout/Breadcrumbs";
import { cn } from "@/utils/cn";

interface PageHeroProps {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  crumbs?: Crumb[];
  align?: "left" | "center";
  children?: ReactNode;
  className?: string;
}

export function PageHero({ eyebrow, title, description, crumbs, align = "left", children, className }: PageHeroProps) {
  const centered = align === "center";

  if (isBot) {
    return (
      <section className={cn("relative overflow-hidden bg-white", className)}>
        <div className="container-x pb-14 pt-32">
          <div className={cn("flex flex-col gap-5", centered && "items-center text-center")}>
            {crumbs && <Breadcrumbs items={crumbs} />}
            {eyebrow && <span className="eyebrow">{eyebrow}</span>}
            <h1 className="max-w-3xl text-balance text-[clamp(2rem,5vw,3.5rem)] font-semibold leading-[1.1] tracking-tight text-navy">{title}</h1>
            {description && <p className="max-w-2xl text-pretty text-lg leading-relaxed text-muted">{description}</p>}
            {children}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={cn("relative overflow-hidden bg-white", className)}>
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute inset-0 bg-grid opacity-60" />
        <div className="absolute -top-32 right-0 h-[28rem] w-[28rem] rounded-full bg-soft blur-3xl" />
        <div className="absolute -left-24 top-1/3 h-72 w-72 rounded-full bg-primary/5 blur-3xl" />
        <AnimatedBackground className="absolute inset-0 h-full w-full opacity-70" density={0.5} />
      </div>

      <div className="container-x relative pb-14 pt-32">
        <motion.div
          className={cn("flex flex-col gap-5", centered && "items-center text-center")}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: motionTokens.ease.standard }}
        >
          {crumbs && <Breadcrumbs items={crumbs} />}
          {eyebrow && <span className="eyebrow">{eyebrow}</span>}
          <h1 className="max-w-3xl text-balance text-[clamp(2rem,5vw,3.5rem)] font-semibold leading-[1.1] tracking-tight text-navy">
            {title}
          </h1>
          {description && <p className="max-w-2xl text-pretty text-lg leading-relaxed text-muted">{description}</p>}
          {children}
        </motion.div>
      </div>
    </section>
  );
}