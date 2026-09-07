import { Link } from "react-router";
import { ArrowUpRight, ChevronRight, Mail, MapPin, Phone } from "lucide-react";
import { site } from "@/config/site";
import { services } from "@/data/services";
import { products } from "@/data/products";
import { Logo } from "@/components/layout/Logo";
import { Reveal, RevealGroup, RevealItem } from "@/components/animation/Reveal";

const linkGroups = [
  {
    title: "Services",
    links: services.slice(0, 8).map((s) => ({ label: s.name, to: `/services/${s.slug}` })),
  },
  {
    title: "Products",
    links: products.map((p) => ({ label: p.name, to: `/products/${p.slug}` })),
  },
  {
    title: "Company",
    links: [
      { label: "About Us", to: "/about" },
      { label: "Our Team", to: "/team" },
      { label: "Careers", to: "/careers" },
      { label: "Partners", to: "/partners" },
      { label: "Clients", to: "/clients" },
      { label: "Locations", to: "/locations" },
    ],
  },
  {
    title: "Quick Links",
    links: [
      { label: "Insights", to: "/insights" },
      { label: "Case Studies", to: "/case-studies" },
      { label: "FAQ", to: "/faq" },
      { label: "Contact", to: "/contact" },
      { label: "Get a Quote", to: "/get-a-quote" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-navy text-slate-300">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -top-40 left-1/2 h-96 w-[60rem] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
      </div>

      <RevealGroup className="container-x relative grid gap-12 pb-12 pt-16 lg:grid-cols-[1.2fr_2fr]">
        <RevealItem>
          <div className="flex flex-col gap-5">
            <Logo dark />
            <p className="max-w-sm text-[15px] leading-relaxed text-slate-400">
              {site.name} — protecting Airports, DRDO Labs, Hospitals, Hotels and Global Brands across India with
              certified fire safety, security and automation systems since 2016.
            </p>
            <div className="flex flex-col gap-2.5 text-[14px] text-slate-400">
              <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="flex items-center gap-2.5 transition-colors hover:text-white">
                <Phone className="h-4 w-4 text-primary" aria-hidden="true" />
                {site.phone}
              </a>
              <a href={`tel:${site.salesPhone.replace(/\s/g, "")}`} className="flex items-center gap-2.5 transition-colors hover:text-white">
                <Phone className="h-4 w-4 text-primary" aria-hidden="true" />
                Toll Free: {site.salesPhone}
              </a>
              <a href={`mailto:${site.email}`} className="flex items-center gap-2.5 transition-colors hover:text-white">
                <Mail className="h-4 w-4 text-primary" aria-hidden="true" />
                {site.email}
              </a>
              <span className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                {site.address}
              </span>
            </div>
            <div className="flex gap-2">
              {site.socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/50 hover:text-white"
                >
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </RevealItem>

        <RevealItem>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {linkGroups.map((group) => (
              <div key={group.title} className="flex flex-col gap-3.5">
                <p className="text-sm font-semibold uppercase tracking-wider text-white">{group.title}</p>
                <ul className="flex flex-col gap-2.5">
                  {group.links.map((link) => (
                    <li key={link.to}>
                      <Link
                        to={link.to}
                        className="link-underline inline-block text-[14px] text-slate-400 transition-colors duration-300 hover:text-white"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </RevealItem>
      </RevealGroup>

      <Reveal direction="up">
        <div className="container-x relative border-t border-white/10 py-6">
          <div className="flex flex-col items-center justify-between gap-3 text-[13px] text-slate-400 sm:flex-row">
            <p>
              © {new Date().getFullYear()} {site.name}. All rights reserved.
            </p>
            <nav aria-label="Legal" className="flex flex-wrap items-center justify-center gap-1">
              <Link to="/privacy-policy" className="rounded px-2 py-1 transition-colors hover:text-white">
                Privacy Policy
              </Link>
              <ChevronRight className="h-3 w-3 text-slate-600" aria-hidden="true" />
              <Link to="/terms" className="rounded px-2 py-1 transition-colors hover:text-white">
                Terms &amp; Conditions
              </Link>
              <ChevronRight className="h-3 w-3 text-slate-600" aria-hidden="true" />
              <Link to="/cookie-policy" className="rounded px-2 py-1 transition-colors hover:text-white">
                Cookie Policy
              </Link>
            </nav>
          </div>
        </div>
      </Reveal>
    </footer>
  );
}