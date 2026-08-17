import { useRef, type MouseEvent } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";
import { ArrowRight, CalendarClock, ShieldCheck, Sparkles, TrendingUp } from "lucide-react";
import { motionTokens } from "@/animations/tokens";
import { isBot, prefersReducedMotion } from "@/utils/env";
import { AnimatedBackground } from "@/components/animation/AnimatedBackground";
import { Button } from "@/components/ui/Button";
import { Magnetic } from "@/components/ui/Magnetic";
import { LineDraw } from "@/components/animation/LineDraw";

const HEADLINE: { text: string; highlight?: boolean }[] = [
  { text: "We" },
  { text: "Build" },
  { text: "Digital", highlight: true },
  { text: "Solutions", highlight: true },
  { text: "That" },
  { text: "Drive" },
  { text: "Real" },
  { text: "Business" },
  { text: "Growth" },
];

const wordVariants = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: motionTokens.ease.standard } },
};

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.35 } },
};

function FloatingKpi({
  className,
  icon,
  label,
  value,
  delay,
}: {
  className?: string;
  icon: React.ReactNode;
  label: string;
  value: string;
  delay: number;
}) {
  if (isBot) {
    return (
      <div className={`absolute ${className ?? ""} rounded-xl border border-line bg-white/95 p-3 shadow-lift`}>
        <div className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-soft text-primary">{icon}</span>
          <div className="flex flex-col">
            <span className="text-sm font-bold text-navy">{value}</span>
            <span className="text-[11px] text-muted">{label}</span>
          </div>
        </div>
      </div>
    );
  }
  return (
    <motion.div
      className={`absolute ${className ?? ""} rounded-xl border border-line bg-white/95 p-3 shadow-lift backdrop-blur-sm`}
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay, duration: 0.6, ease: motionTokens.ease.spring }}
    >
      <motion.div
        className="flex items-center gap-2"
        animate={{ y: [0, -7, 0] }}
        transition={{ duration: 5 + delay, repeat: Infinity, ease: "easeInOut", delay }}
      >
        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-soft text-primary">{icon}</span>
        <div className="flex flex-col">
          <span className="text-sm font-bold text-navy">{value}</span>
          <span className="text-[11px] text-muted">{label}</span>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function Hero() {
  const reduce = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const smx = useSpring(mx, { stiffness: 60, damping: 20 });
  const smy = useSpring(my, { stiffness: 60, damping: 20 });
  const visualX = useTransform(smx, (v) => v * 14);
  const visualY = useTransform(smy, (v) => v * 14);
  const depthX = useTransform(smx, (v) => v * 26);
  const depthY = useTransform(smy, (v) => v * 26);
  const deepX = useTransform(smx, (v) => v * 40);
  const deepY = useTransform(smy, (v) => v * 40);

  const onMouseMove = (e: MouseEvent<HTMLElement>) => {
    if (reduce || !window.matchMedia("(pointer: fine)").matches) return;
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  return (
    <section ref={sectionRef} onMouseMove={onMouseMove} className="relative overflow-hidden bg-bg" aria-label="Introduction">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute inset-0 bg-grid opacity-70" />
        <div className="absolute -top-24 left-1/2 h-[30rem] w-[52rem] -translate-x-1/2 rounded-full bg-soft blur-3xl" />
        <div className="absolute right-[-8rem] top-40 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-0 left-[-6rem] h-80 w-80 rounded-full bg-primary/5 blur-3xl" />
        <AnimatedBackground className="absolute inset-0 h-full w-full opacity-80" density={0.8} />
      </div>

      <div className="container-x relative grid items-center gap-16 pb-16 pt-32 sm:pt-36 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:pb-24 lg:pt-44">
        <div className="flex flex-col items-start gap-7">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: motionTokens.ease.standard, delay: 0.15 }}
          >
            <span className="eyebrow">
              <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
              Enterprise Software · Cloud · AI
            </span>
          </motion.div>

          <motion.h1
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="text-balance text-[clamp(2.4rem,6.5vw,4.75rem)] font-semibold leading-[1.06] tracking-tight text-navy"
          >
            {HEADLINE.map((word) => (
              <motion.span
                key={word.text}
                variants={wordVariants}
                className={`inline-block whitespace-pre ${word.highlight ? "text-gradient" : ""}`}
              >
                {word.text}{" "}
              </motion.span>
            ))}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: motionTokens.ease.standard, delay: 1.05 }}
            className="max-w-xl text-pretty text-lg leading-relaxed text-muted"
          >
            NovaCore is a technology company engineering enterprise software, cloud platforms and AI
            solutions for organizations that take growth seriously.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: motionTokens.ease.standard, delay: 1.2 }}
            className="flex flex-wrap items-center gap-3"
          >
            <Magnetic strength={0.25}>
              <Button to="/services" size="lg" icon={<ArrowRight className="h-4.5 w-4.5" aria-hidden="true" />}>
                Explore Services
              </Button>
            </Magnetic>
            <Button to="/schedule-consultation" size="lg" variant="outline" icon={<CalendarClock className="h-4.5 w-4.5" aria-hidden="true" />}>
              Schedule Consultation
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            className="mt-2 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted"
          >
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="h-4 w-4 text-success" aria-hidden="true" />
              Security &amp; compliance first
            </span>
            <span className="flex items-center gap-1.5">
              <TrendingUp className="h-4 w-4 text-primary" aria-hidden="true" />
              250+ projects delivered
            </span>
            <span className="flex items-center gap-1.5">
              <Sparkles className="h-4 w-4 text-warning" aria-hidden="true" />
              Dedicated senior teams
            </span>
          </motion.div>
        </div>

        <motion.div
          className="relative mx-auto w-full max-w-xl lg:max-w-none"
          style={reduce || isBot ? undefined : { x: visualX, y: visualY }}
          initial={{ opacity: 0, y: 30, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: motionTokens.ease.standard, delay: 0.5 }}
          aria-hidden="true"
        >
          <div className="relative">
            <motion.div
              style={reduce || isBot ? undefined : { x: deepX, y: deepY }}
              className="pointer-events-none absolute -inset-8"
            >
              <LineDraw
                d="M20 10 C 80 0, 120 30, 190 12 M40 150 C 90 130, 140 160, 200 140 M10 90 C 60 80, 130 100, 180 70 M160 0 C 150 60, 180 110, 150 170"
                viewBox="0 0 210 180"
                className="absolute inset-0 h-full w-full text-primary/20"
                duration={2}
              />
              <span className="absolute left-0 top-8 h-2.5 w-2.5 rounded-full bg-primary/50" />
              <span className="absolute right-4 top-1 h-1.5 w-1.5 rounded-full bg-primary-light/60" />
              <span className="absolute bottom-10 left-6 h-1.5 w-1.5 rounded-full bg-primary-light/60" />
              <span className="absolute bottom-0 right-24 h-2 w-2 rounded-full bg-primary/40" />
            </motion.div>

            <motion.div
              style={reduce || isBot ? undefined : { x: depthX, y: depthY }}
              className="relative rounded-3xl border border-white/70 bg-white/85 p-5 shadow-lift backdrop-blur-sm"
            >
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-danger/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-warning/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-success/70" />
                </div>
                <span className="text-xs font-semibold text-muted">Performance Overview</span>
              </div>

              <div className="mb-4 flex items-end justify-between">
                <div>
                  <p className="text-3xl font-bold tracking-tight text-navy">+42%</p>
                  <p className="text-xs font-medium text-muted">Revenue growth</p>
                </div>
                <span className="rounded-full bg-success/10 px-2.5 py-1 text-xs font-bold text-green-800">▲ 12.4% MoM</span>
              </div>

              <div className="relative flex h-36 items-end gap-2.5">
                {[42, 58, 46, 70, 62, 84, 74, 92, 80, 100].map((h, i) => (
                  <motion.span
                    key={i}
                    className="flex-1 rounded-t-lg bg-gradient-to-t from-primary/25 to-primary-light/60"
                    initial={{ height: "8%" }}
                    animate={{ height: `${h}%` }}
                    transition={{ duration: 0.7, delay: 0.9 + i * 0.07, ease: motionTokens.ease.standard }}
                  />
                ))}
                <motion.svg
                  viewBox="0 0 300 120"
                  className="pointer-events-none absolute inset-0 h-full w-full"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.8, duration: 0.6 }}
                >
                  <defs>
                    <linearGradient id="hero-area" x1="0" y1="0" x2="0" y2="1">
                      <stop stopColor="#155eef" stopOpacity="0.28" />
                      <stop offset="1" stopColor="#155eef" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M0 100 C 30 88, 50 60, 80 66 S 130 40, 160 46 S 220 24, 250 30 S 290 12, 300 16 L 300 120 L 0 120 Z"
                    fill="url(#hero-area)"
                  />
                  <path
                    d="M0 100 C 30 88, 50 60, 80 66 S 130 40, 160 46 S 220 24, 250 30 S 290 12, 300 16"
                    fill="none"
                    stroke="#155eef"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                </motion.svg>
              </div>

              <div className="mt-4 grid grid-cols-3 gap-2">
                {[
                  { label: "Uptime", value: "99.9%" },
                  { label: "Response", value: "180ms" },
                  { label: "Users", value: "12.4k" },
                ].map((m) => (
                  <div key={m.label} className="rounded-xl bg-bg px-3 py-2.5">
                    <p className="text-sm font-bold text-navy">{m.value}</p>
                    <p className="text-[11px] text-muted">{m.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <FloatingKpi
              className="-left-3 top-10 sm:-left-8"
              icon={<TrendingUp className="h-4 w-4" aria-hidden="true" />}
              value="+42%"
              label="Revenue growth"
              delay={1.1}
            />
            <FloatingKpi
              className="-right-2 bottom-24 sm:-right-6"
              icon={<ShieldCheck className="h-4 w-4" aria-hidden="true" />}
              value="99.9%"
              label="Uptime SLA"
              delay={1.3}
            />
            <FloatingKpi
              className="bottom-0 left-1/2 -translate-x-1/2 sm:bottom-6"
              icon={<Sparkles className="h-4 w-4" aria-hidden="true" />}
              value="3x"
              label="Faster delivery"
              delay={1.5}
            />
          </div>
        </motion.div>
      </div>

      {!prefersReducedMotion && !isBot && (
        <motion.div
          className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 lg:flex"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2, duration: 0.8 }}
          aria-hidden="true"
        >
          <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-muted">Scroll</span>
          <motion.span
            className="h-9 w-5 rounded-full border-2 border-muted/40 p-1"
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="mx-auto block h-2 w-1 rounded-full bg-primary" />
          </motion.span>
        </motion.div>
      )}
    </section>
  );
}