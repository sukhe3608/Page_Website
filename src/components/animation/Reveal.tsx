import type { ReactNode } from "react";
import { motion, useReducedMotion, type Target, type Variants } from "framer-motion";
import { motionTokens } from "@/animations/tokens";
import { isBot } from "@/utils/env";

type Direction = "up" | "down" | "left" | "right" | "scale" | "clip" | "none";

const hiddenState: Record<Direction, Target> = {
  up: { opacity: 0, y: motionTokens.distance.md },
  down: { opacity: 0, y: -motionTokens.distance.md },
  left: { opacity: 0, x: motionTokens.distance.md },
  right: { opacity: 0, x: -motionTokens.distance.md },
  scale: { opacity: 0, scale: 0.94 },
  clip: { opacity: 0, clipPath: "inset(0 0 100% 0)" },
  none: { opacity: 0 },
};

const shownState: Record<Direction, Target> = {
  up: { opacity: 1, y: 0 },
  down: { opacity: 1, y: 0 },
  left: { opacity: 1, x: 0 },
  right: { opacity: 1, x: 0 },
  scale: { opacity: 1, scale: 1 },
  clip: { opacity: 1, clipPath: "inset(0 0 0% 0)" },
  none: { opacity: 1 },
};

interface RevealProps {
  children: ReactNode;
  direction?: Direction;
  delay?: number;
  duration?: number;
  distance?: number;
  className?: string;
}

export function Reveal({
  children,
  direction = "up",
  delay = 0,
  duration = motionTokens.duration.normal,
  distance,
  className,
}: RevealProps) {
  const reduce = useReducedMotion();
  if (isBot || reduce) return <div className={className}>{children}</div>;

  const hidden: Target = distance
    ? {
        ...hiddenState[direction],
        y: direction === "up" || direction === "down" ? distance : undefined,
        x: direction === "left" || direction === "right" ? distance : undefined,
      }
    : hiddenState[direction];

  return (
    <motion.div
      className={className}
      initial={hidden}
      whileInView={shownState[direction]}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration, delay, ease: motionTokens.ease.standard }}
    >
      {children}
    </motion.div>
  );
}

interface RevealGroupProps {
  children: ReactNode;
  className?: string;
  stagger?: number;
  amount?: number;
}

export function RevealGroup({ children, className, stagger = motionTokens.stagger.sm, amount = 0.15 }: RevealGroupProps) {
  const reduce = useReducedMotion();
  if (isBot || reduce) return <div className={className}>{children}</div>;

  const variants: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: stagger } },
  };

  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount }}
    >
      {children}
    </motion.div>
  );
}

interface RevealItemProps {
  children: ReactNode;
  direction?: Direction;
  className?: string;
}

export function RevealItem({ children, direction = "up", className }: RevealItemProps) {
  const reduce = useReducedMotion();
  if (isBot || reduce) return <div className={className}>{children}</div>;

  const variants: Variants = {
    hidden: hiddenState[direction],
    show: shownState[direction],
  };

  return (
    <motion.div className={className} variants={variants} transition={{ duration: motionTokens.duration.normal, ease: motionTokens.ease.standard }}>
      {children}
    </motion.div>
  );
}