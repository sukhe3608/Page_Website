import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { motionTokens } from "@/animations/tokens";
import { isBot } from "@/utils/env";
import { cn } from "@/utils/cn";

interface RotatingWordsProps {
  words: string[];
  interval?: number;
  className?: string;
}

/**
 * Cycles through words with a vertical slide-and-fade.
 * Shows the first word statically for bots and reduced-motion users.
 */
export function RotatingWords({ words, interval = 2400, className }: RotatingWordsProps) {
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (isBot || reduce || words.length < 2) return;
    const t = setInterval(() => setIndex((i) => (i + 1) % words.length), interval);
    return () => clearInterval(t);
  }, [words.length, interval, reduce]);

  if (isBot || reduce || words.length < 2) {
    return <span className={cn("inline-block", className)}>{words[0]}</span>;
  }

  return (
    <span className={cn("relative inline-block", className)}>
      <AnimatePresence mode="wait">
        <motion.span
          key={words[index]}
          className="inline-block"
          initial={{ opacity: 0, y: "0.6em" }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: "-0.6em" }}
          transition={{ duration: motionTokens.duration.fast, ease: motionTokens.ease.standard }}
          aria-live="polite"
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}