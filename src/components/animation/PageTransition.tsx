import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { motionTokens } from "@/animations/tokens";
import { isBot } from "@/utils/env";

/** Route-level enter/exit transition. Kept fast so navigation never feels slow. */
export default function PageTransition({ children }: { children: ReactNode }) {
  if (isBot) return <div>{children}</div>;

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.32, ease: motionTokens.ease.standard }}
    >
      {children}
    </motion.div>
  );
}