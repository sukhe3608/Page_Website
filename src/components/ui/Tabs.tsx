import { useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { motionTokens } from "@/animations/tokens";
import { cn } from "@/utils/cn";

export interface TabItem {
  id: string;
  label: string;
  content: ReactNode;
}

export function Tabs({ tabs, className }: { tabs: TabItem[]; className?: string }) {
  const [active, setActive] = useState(tabs[0]?.id ?? "");

  return (
    <div className={className}>
      <div
        role="tablist"
        aria-label="Section tabs"
        className="flex w-fit max-w-full flex-wrap gap-1 rounded-full border border-line bg-white p-1 shadow-soft"
      >
        {tabs.map((tab) => {
          const selected = active === tab.id;
          return (
            <button
              key={tab.id}
              role="tab"
              aria-selected={selected}
              aria-controls={`panel-${tab.id}`}
              id={`tab-${tab.id}`}
              onClick={() => setActive(tab.id)}
              className={cn(
                "relative rounded-full px-4 py-2 text-sm font-semibold transition-colors duration-300",
                selected ? "text-white" : "text-muted hover:text-navy"
              )}
            >
              {selected && (
                <motion.span
                  layoutId="tab-pill"
                  className="absolute inset-0 rounded-full bg-primary"
                  transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  aria-hidden="true"
                />
              )}
              <span className="relative z-10">{tab.label}</span>
            </button>
          );
        })}
      </div>
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={active}
          role="tabpanel"
          id={`panel-${active}`}
          aria-labelledby={`tab-${active}`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.25, ease: motionTokens.ease.standard }}
          className="mt-8"
        >
          {tabs.find((t) => t.id === active)?.content}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}