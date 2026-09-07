import { partners } from "@/data/misc";
import { Marquee } from "@/components/animation/Marquee";

export function TrustedBy() {
  return (
    <section className="border-y border-line bg-white py-10" aria-label="Trusted by partners and clients">
      <p className="sr-only">Trusted by {partners.length} partner companies</p>
      <p className="mb-7 text-center text-[13px] font-semibold uppercase tracking-[0.18em] text-muted">
        Authorized distribution for global brands
      </p>
      <div className="marquee relative overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-white to-transparent" />
        <Marquee duration={30}>
          {partners.map((partner) => (
            <span
              key={partner.name}
              className="flex items-center gap-2.5 whitespace-nowrap px-7 text-[15px] font-semibold text-navy/70 transition-colors duration-300 hover:text-primary"
            >
              <span className="h-2 w-2 rounded-full bg-gradient-to-br from-primary to-primary-light" aria-hidden="true" />
              {partner.name}
            </span>
          ))}
        </Marquee>
      </div>
    </section>
  );
}