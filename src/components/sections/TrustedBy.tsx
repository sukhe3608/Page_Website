import { partners, partnerLogos } from "@/data/misc";
import { Marquee } from "@/components/animation/Marquee";

export function TrustedBy() {
  return (
    <section className="border-y border-line bg-white py-10" aria-label="Trusted by partners and clients">
      <p className="sr-only">Trusted by {partners.length} core partners and {partnerLogos.length} additional brand associates</p>
      <p className="mb-7 text-center text-[13px] font-semibold uppercase tracking-[0.18em] text-muted">
        Authorized distribution for global brands
      </p>
      <div className="marquee relative overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-white to-transparent" />
        <Marquee duration={40}>
          {partnerLogos.map((logo) => (
            <span
              key={logo}
              className="flex h-10 w-24 shrink-0 items-center justify-center rounded-lg border border-line bg-white px-2 shadow-soft transition-colors duration-300 hover:border-primary/25"
            >
              <img
                src={`${import.meta.env.BASE_URL}${logo}`}
                alt=""
                aria-hidden="true"
                loading="lazy"
                width={96}
                height={40}
                className="max-h-full w-full object-contain"
              />
            </span>
          ))}
        </Marquee>
      </div>
    </section>
  );
}