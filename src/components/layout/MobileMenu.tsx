import { useEffect, useState } from "react";
import { Link } from "react-router";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ChevronDown, Mail, MapPin, Phone, X } from "lucide-react";
import { motionTokens } from "@/animations/tokens";
import { site } from "@/config/site";
import { Icon } from "@/components/ui/Icon";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/layout/Logo";

interface MobileEntry {
  key: string;
  label: string;
  to?: string;
  items?: { to: string; label: string; description?: string; icon?: string }[];
}

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.05, delayChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: motionTokens.ease.standard } },
};

export function MobileMenu({ open, onClose, entries }: { open: boolean; onClose: () => void; entries: MobileEntry[] }) {
  const [expanded, setExpanded] = useState<string | null>("services");

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[60] overflow-y-auto bg-white/97 backdrop-blur-md lg:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          <div className="container-x flex h-20 items-center justify-between">
            <Logo />
            <button
              type="button"
              onClick={onClose}
              aria-label="Close menu"
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-line bg-white text-navy shadow-soft transition-colors hover:text-primary"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>

          <motion.nav variants={containerVariants} initial="hidden" animate="show" aria-label="Mobile main navigation" className="container-x pb-10 pt-4">
            <ul className="flex flex-col gap-1">
              {entries.map((entry) => (
                <motion.li key={entry.key} variants={itemVariants} className="border-b border-line py-2">
                  {entry.to ? (
                    <Link to={entry.to} onClick={onClose} className="flex items-center justify-between py-2 text-lg font-semibold text-navy transition-colors hover:text-primary">
                      {entry.label}
                      <ArrowRight className="h-4.5 w-4.5 text-muted" aria-hidden="true" />
                    </Link>
                  ) : (
                    <>
                      <button
                        type="button"
                        onClick={() => setExpanded((e) => (e === entry.key ? null : entry.key))}
                        aria-expanded={expanded === entry.key}
                        className="flex w-full items-center justify-between py-2 text-lg font-semibold text-navy transition-colors hover:text-primary"
                      >
                        {entry.label}
                        <ChevronDown
                          className={`h-4.5 w-4.5 text-muted transition-transform duration-300 ${expanded === entry.key ? "rotate-180" : ""}`}
                          aria-hidden="true"
                        />
                      </button>
                      <AnimatePresence initial={false}>
                        {expanded === entry.key && entry.items && (
                          <motion.ul
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: motionTokens.ease.standard }}
                            className="overflow-hidden"
                          >
                            {entry.items.map((item) => (
                              <li key={item.to}>
                                <Link
                                  to={item.to}
                                  onClick={onClose}
                                  className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-[15px] font-medium text-muted transition-colors hover:bg-soft hover:text-primary"
                                >
                                  {item.icon && <Icon name={item.icon as never} className="h-4 w-4 text-primary" />}
                                  <span>{item.label}</span>
                                </Link>
                              </li>
                            ))}
                          </motion.ul>
                        )}
                      </AnimatePresence>
                    </>
                  )}
                </motion.li>
              ))}
            </ul>

            <motion.div variants={itemVariants} className="mt-8 flex flex-col gap-3">
              <Button to="/get-a-quote" size="lg" icon={<ArrowRight className="h-4 w-4" aria-hidden="true" />} onClick={onClose}>
                Get a Quote
              </Button>
              <Button to="/schedule-consultation" size="lg" variant="outline" onClick={onClose}>
                Schedule Consultation
              </Button>
            </motion.div>

            <motion.div variants={itemVariants} className="mt-10 flex flex-col gap-3 text-sm text-muted">
              <p className="flex items-center gap-2.5">
                <MapPin className="h-4 w-4 text-primary" aria-hidden="true" />
                {site.address}
              </p>
              <p className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-primary" aria-hidden="true" />
                <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="transition-colors hover:text-primary">
                  {site.phone}
                </a>
              </p>
              <p className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-primary" aria-hidden="true" />
                <a href={`mailto:${site.email}`} className="transition-colors hover:text-primary">
                  {site.email}
                </a>
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="mt-8 flex gap-2">
              {site.socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-line bg-white px-4 py-2 text-sm font-semibold text-navy transition-all duration-300 hover:border-primary/40 hover:text-primary"
                >
                  {s.label}
                </a>
              ))}
            </motion.div>
          </motion.nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}