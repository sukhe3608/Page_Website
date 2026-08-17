import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { motionTokens } from "@/animations/tokens";
import { isBot, prefersReducedMotion } from "@/utils/env";

export function Preloader() {
  const [visible, setVisible] = useState(!isBot);

  useEffect(() => {
    if (isBot) return;
    const t = setTimeout(() => setVisible(false), prefersReducedMotion ? 350 : 1500);
    return () => clearTimeout(t);
  }, []);

  if (isBot) return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-bg"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45, ease: motionTokens.ease.standard }}
          aria-hidden="true"
        >
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute left-1/2 top-1/2 h-[40rem] w-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-soft blur-3xl" />
          </div>
          <div className="relative flex flex-col items-center gap-6">
            <motion.div
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: motionTokens.ease.spring }}
            >
              <svg width="56" height="56" viewBox="0 0 64 64" aria-hidden="true">
                <defs>
                  <linearGradient id="plg" x1="0" y1="0" x2="1" y2="1">
                    <stop stopColor="#155EEF" />
                    <stop offset="1" stopColor="#3B82F6" />
                  </linearGradient>
                </defs>
                <rect width="64" height="64" rx="14" fill="url(#plg)" />
                <path d="M17 45V19l15 17 15-17v26" fill="none" stroke="#fff" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.5, ease: motionTokens.ease.standard }}
              className="text-sm font-semibold tracking-[0.18em] text-navy"
            >
              NOVACORE
            </motion.p>
            <div className="h-1 w-40 overflow-hidden rounded-full bg-line">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-primary to-primary-light"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: prefersReducedMotion ? 0.2 : 1.1, ease: motionTokens.ease.smooth }}
                style={{ transformOrigin: "left" }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}