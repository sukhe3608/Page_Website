import { motion, useReducedMotion, type Variants } from "framer-motion";
import { motionTokens } from "@/animations/tokens";
import { isBot } from "@/utils/env";
import { cn } from "@/utils/cn";

type SplitMode = "word" | "char";

interface TextSplitProps {
  text: string;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
  mode?: SplitMode;
  delay?: number;
  stagger?: number;
  duration?: number;
  className?: string;
}

/**
 * Reveals text word-by-word (or char-by-char) with a masked rise-in.
 * Renders plain text for bots and reduced-motion users.
 */
export function TextSplit({
  text,
  as = "span",
  mode = "word",
  delay = 0,
  stagger = 0.06,
  duration = 0.7,
  className,
}: TextSplitProps) {
  const reduce = useReducedMotion();
  const Tag = as;

  if (isBot || reduce) return <Tag className={className}>{text}</Tag>;

  const units = mode === "word" ? text.split(" ") : text.split("");

  const variants: Variants = {
    hidden: {},
    show: {
      transition: { staggerChildren: stagger, delayChildren: delay },
    },
  };

  const unitVariants: Variants = {
    hidden: { opacity: 0, y: "0.55em", filter: "blur(4px)" },
    show: {
      opacity: 1,
      y: "0em",
      filter: "blur(0px)",
      transition: { duration, ease: motionTokens.ease.standard },
    },
  };

  return (
    <Tag className={className}>
      <motion.span className="inline" variants={variants} initial="hidden" animate="show" aria-label={text} aria-hidden="false">
        {units.map((unit, i) => (
          <motion.span
            key={`${i}-${unit}`}
            variants={unitVariants}
            className={cn("inline-block overflow-hidden align-bottom will-change-transform")}
            aria-hidden="true"
          >
            <motion.span variants={unitVariants} className="inline-block">
              {unit}
              {mode === "word" && i < units.length - 1 ? "\u00A0" : ""}
            </motion.span>
          </motion.span>
        ))}
      </motion.span>
    </Tag>
  );
}