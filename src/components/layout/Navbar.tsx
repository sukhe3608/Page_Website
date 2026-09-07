import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ChevronDown, Menu } from "lucide-react";
import { motionTokens } from "@/animations/tokens";
import { services } from "@/data/services";
import { solutions } from "@/data/solutions";
import { products } from "@/data/products";
import { industries } from "@/data/industries";
import { Icon } from "@/components/ui/Icon";
import { Magnetic } from "@/components/ui/Magnetic";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/layout/Logo";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { cn } from "@/utils/cn";
import type { IconName } from "@/types/content";

interface DropdownItem {
  to: string;
  label: string;
  description?: string;
  icon?: IconName;
}

interface NavEntry {
  key: string;
  label: string;
  to?: string;
  items?: DropdownItem[];
  wide?: boolean;
  seeAll?: { to: string; label: string };
}

const entries: NavEntry[] = [
  { key: "home", label: "Home", to: "/" },
  {
    key: "services",
    label: "Services",
    wide: true,
    seeAll: { to: "/services", label: "All services" },
    items: services.map((s) => ({ to: `/services/${s.slug}`, label: s.name, description: s.tagline, icon: s.icon })),
  },
  {
    key: "solutions",
    label: "Solutions",
    seeAll: { to: "/solutions", label: "All solutions" },
    items: solutions.slice(0, 5).map((s) => ({ to: `/solutions/${s.slug}`, label: s.name, description: s.tagline, icon: s.icon })),
  },
  {
    key: "products",
    label: "Products",
    seeAll: { to: "/products", label: "All products" },
    items: products.slice(0, 5).map((p) => ({ to: `/products/${p.slug}`, label: p.name, description: p.tagline, icon: p.icon })),
  },
  {
    key: "industries",
    label: "Industries",
    seeAll: { to: "/industries", label: "All industries" },
    items: industries.slice(0, 6).map((i) => ({ to: `/industries/${i.slug}`, label: i.name, description: i.tagline, icon: i.icon })),
  },
  {
    key: "company",
    label: "Company",
    items: [
      { to: "/about", label: "About Us", description: "Who we are and how we work" },
      { to: "/team", label: "Our Team", description: "Leadership and specialists" },
      { to: "/careers", label: "Careers", description: "Work with us" },
      { to: "/partners", label: "Partners", description: "Ecosystem and alliances" },
      { to: "/clients", label: "Clients", description: "Who we serve" },
      { to: "/locations", label: "Locations", description: "Where we work" },
    ],
  },
  {
    key: "resources",
    label: "Resources",
    items: [
      { to: "/insights", label: "Insights", description: "Guides on safety and security systems" },
      { to: "/faq", label: "FAQ", description: "Answers to common questions" },
      { to: "/case-studies", label: "Case Studies", description: "How we deliver outcomes" },
    ],
  },
  { key: "contact", label: "Contact", to: "/contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpenMenu(null);
    setMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <motion.header
      initial={{ opacity: 0, y: -14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: motionTokens.ease.standard, delay: 0.1 }}
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled || openMenu ? "bg-white/85 shadow-soft backdrop-blur-md" : "bg-white/0"
      )}
    >
      <div
        className={cn(
          "container-x flex items-center justify-between transition-all duration-300",
          scrolled ? "h-16" : "h-20"
        )}
      >
        <Logo />

        <nav aria-label="Main navigation" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {entries.map((entry) => (
              <li key={entry.key} className="relative">
                {entry.to ? (
                  <Link
                    to={entry.to}
                    className={cn(
                      "link-underline rounded-lg px-3 py-2 text-[14.5px] font-semibold text-navy transition-colors duration-300 hover:text-primary",
                      location.pathname === entry.to && "text-primary"
                    )}
                  >
                    {entry.label}
                  </Link>
                ) : (
                  <div
                    onMouseEnter={() => setOpenMenu(entry.key)}
                    onMouseLeave={() => setOpenMenu((m) => (m === entry.key ? null : m))}
                  >
                    <button
                      type="button"
                      onClick={() => setOpenMenu((m) => (m === entry.key ? null : entry.key))}
                      aria-expanded={openMenu === entry.key}
                      aria-haspopup="menu"
                      className={cn(
                        "flex items-center gap-1 rounded-lg px-3 py-2 text-[14.5px] font-semibold transition-colors duration-300",
                        openMenu === entry.key ? "text-primary" : "text-navy hover:text-primary"
                      )}
                    >
                      {entry.label}
                      <ChevronDown
                        className={cn("h-3.5 w-3.5 transition-transform duration-300", openMenu === entry.key && "rotate-180")}
                        aria-hidden="true"
                      />
                    </button>
                    <AnimatePresence>
                      {openMenu === entry.key && entry.items && (
                        <div className="absolute left-1/2 top-full -translate-x-1/2 pt-3">
                          <motion.div
                            initial={{ opacity: 0, y: 8, scale: 0.98 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 6, scale: 0.98 }}
                            transition={{ duration: 0.22, ease: motionTokens.ease.standard }}
                            role="menu"
                            className={cn(
                              "overflow-hidden rounded-2xl border border-line bg-white shadow-lift",
                              entry.wide ? "w-[640px]" : "w-[400px]"
                            )}
                          >
                            <div className={cn("grid gap-1 p-3", entry.wide ? "grid-cols-2" : "grid-cols-1")}>
                              {entry.items.map((item) => (
                                <Link
                                  key={item.to}
                                  to={item.to}
                                  role="menuitem"
                                  className="group/item flex items-start gap-3 rounded-xl p-3 transition-colors duration-200 hover:bg-soft"
                                >
                                  {item.icon && (
                                    <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white text-primary shadow-soft transition-all duration-300 group-hover/item:bg-primary group-hover/item:text-white">
                                      <Icon name={item.icon} className="h-4.5 w-4.5" />
                                    </span>
                                  )}
                                  <span className="flex flex-col gap-0.5">
                                    <span className="text-sm font-semibold text-navy transition-colors group-hover/item:text-primary">
                                      {item.label}
                                    </span>
                                    {item.description && (
                                      <span className="text-[13px] leading-snug text-muted">{item.description}</span>
                                    )}
                                  </span>
                                </Link>
                              ))}
                            </div>
                            {entry.seeAll && (
                              <Link
                                to={entry.seeAll.to}
                                className="group/see flex items-center justify-center gap-2 border-t border-line bg-bg/60 px-4 py-3 text-sm font-semibold text-primary transition-colors duration-200 hover:bg-soft"
                              >
                                {entry.seeAll.label}
                                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/see:translate-x-1" aria-hidden="true" />
                              </Link>
                            )}
                          </motion.div>
                        </div>
                      )}
                    </AnimatePresence>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Magnetic strength={0.25}>
            <Button to="/get-a-quote" size="sm" icon={<ArrowRight className="h-4 w-4" aria-hidden="true" />}>
              Get Free Site Inspection
            </Button>
          </Magnetic>
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
          aria-expanded={mobileOpen}
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-line bg-white text-navy shadow-soft transition-colors hover:text-primary lg:hidden"
        >
          <Menu className="h-5 w-5" aria-hidden="true" />
        </button>
      </div>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} entries={entries} />
    </motion.header>
  );
}