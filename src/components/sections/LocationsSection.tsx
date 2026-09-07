import { motion } from "framer-motion";
import { MapPin, Mail, Phone } from "lucide-react";
import { locations } from "@/data/misc";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Artwork } from "@/components/common/Artwork";
import { Reveal, RevealGroup, RevealItem } from "@/components/animation/Reveal";

export function LocationsSection() {
  return (
    <section className="section-pad bg-white" aria-labelledby="locations-heading">
      <div className="container-x grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <Reveal direction="right" delay={0.05}>
          <div className="relative">
            <Artwork tint="blue" pattern="map" className="aspect-[4/3] rounded-3xl shadow-lift">
              <div className="relative h-full w-full">
                {locations.map((loc, i) => (
                  <div
                    key={loc.city}
                    className="absolute"
                    style={{ left: `${10 + i * 16}%`, top: `${28 + (i % 3) * 20}%` }}
                  >
                    <motion.div
                      className="relative flex h-9 w-9 items-center justify-center"
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 + i * 0.2, type: "spring", stiffness: 300, damping: 18 }}
                    >
                      <motion.span
                        className="absolute inset-0 rounded-full bg-white/40"
                        animate={{ scale: [1, 1.9], opacity: [0.8, 0] }}
                        transition={{ duration: 2.2, repeat: Infinity, delay: i * 0.7, ease: "easeOut" }}
                        aria-hidden="true"
                      />
                      <span className="relative flex h-5 w-5 items-center justify-center rounded-full border-2 border-white bg-primary shadow-glow">
                        <span className="h-1.5 w-1.5 rounded-full bg-white" aria-hidden="true" />
                      </span>
                      <span className="absolute -bottom-7 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-white/95 px-2.5 py-1 text-[11px] font-bold text-navy shadow-soft">
                        {loc.city}
                      </span>
                    </motion.div>
                  </div>
                ))}
              </div>
            </Artwork>
            <div className="absolute -bottom-5 -right-4 rounded-2xl border border-line bg-white px-5 py-4 shadow-lift sm:-right-8">
              <p className="text-sm font-bold text-navy">6 offices</p>
              <p className="text-xs text-muted">PAN-India support network</p>
            </div>
          </div>
        </Reveal>

        <div className="flex flex-col gap-8">
          <SectionHeading
            align="left"
            eyebrow="Locations"
            title={<span id="locations-heading">Where you can find us</span>}
            description="Six offices across India — always close to your site and your team."
          />
          <RevealGroup className="flex flex-col gap-4" stagger={0.08}>
            {locations.map((loc) => (
              <RevealItem key={loc.city}>
                <div className="group rounded-2xl border border-line bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/25 hover:shadow-card">
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-soft text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                        <MapPin className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <div>
                        <h3 className="font-semibold text-navy">{loc.city}</h3>
                        <p className="text-sm text-muted">{loc.country}</p>
                      </div>
                    </div>
                    <span className="rounded-full bg-success/10 px-2.5 py-1 text-xs font-bold text-green-800" aria-label="Office hours today">
                      Open
                    </span>
                  </div>
                  <div className="mt-4 grid gap-2 border-t border-line pt-4 text-sm text-muted sm:grid-cols-2">
                    <p>{loc.address}</p>
                    <div className="flex flex-col gap-1.5 sm:items-end">
                      <a href={`tel:${loc.phone.replace(/\s/g, "")}`} className="flex items-center gap-1.5 transition-colors hover:text-primary">
                        <Phone className="h-3.5 w-3.5" aria-hidden="true" />
                        {loc.phone}
                      </a>
                      <a href={`mailto:${loc.email}`} className="flex items-center gap-1.5 transition-colors hover:text-primary">
                        <Mail className="h-3.5 w-3.5" aria-hidden="true" />
                        {loc.email}
                      </a>
                    </div>
                  </div>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </div>
    </section>
  );
}