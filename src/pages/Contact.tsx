import { ArrowRight, Clock3, Mail, Phone, MapPin } from "lucide-react";
import PageTransition from "@/components/animation/PageTransition";
import Seo from "@/components/seo/Seo";
import { breadcrumbSchema } from "@/config/schemas";
import { site } from "@/config/site";
import { PageHero } from "@/components/layout/PageHero";
import { Button } from "@/components/ui/Button";
import { ContactForm } from "@/components/forms/ContactForm";
import { FinalCta } from "@/components/sections/FinalCta";
import { Reveal } from "@/components/animation/Reveal";

export default function Contact() {
  return (
    <PageTransition>
      <Seo
        title="Contact"
        description="Get in touch with SLN Automation India Pvt. Ltd. — tell us about your site and we'll reply with a free inspection and proposal."
        path="/contact"
        schema={[breadcrumbSchema([{ name: "Contact" }])]}
      />

      <PageHero
        eyebrow="Contact"
        title="Let's talk"
        description="Tell us where you are and what you need to protect. We'll reply with honest thoughts and a free site assessment, not a sales pitch."
        crumbs={[{ label: "Contact" }]}
      />

      <section className="section-pad" aria-labelledby="contact-main-heading">
        <div className="container-x grid gap-10 lg:grid-cols-[1fr_1.3fr] lg:gap-14">
          <div className="flex flex-col gap-6">
            <Reveal>
              <div className="flex flex-col gap-5">
                <p className="eyebrow">Reach us directly</p>
                <h2 id="contact-main-heading" className="text-2xl font-semibold tracking-tight text-navy">
                  Prefer a quick hello?
                </h2>
                <div className="flex flex-col gap-3">
                  <a href={`mailto:${site.email}`} className="flex items-center gap-3 rounded-xl border border-line bg-white p-4 shadow-soft transition-all duration-300 hover:border-primary/40 hover:shadow-card">
                    <Mail className="h-5 w-5 text-primary" aria-hidden="true" />
                    <span className="text-[14.5px] font-medium text-navy/85">{site.email}</span>
                  </a>
                  <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="flex items-center gap-3 rounded-xl border border-line bg-white p-4 shadow-soft transition-all duration-300 hover:border-primary/40 hover:shadow-card">
                    <Phone className="h-5 w-5 text-primary" aria-hidden="true" />
                    <span className="text-[14.5px] font-medium text-navy/85">{site.phone}</span>
                  </a>
                  <div className="flex items-center gap-3 rounded-xl border border-line bg-white p-4 shadow-soft">
                    <MapPin className="h-5 w-5 text-primary" aria-hidden="true" />
                    <span className="text-[14.5px] font-medium text-navy/85">{site.address}</span>
                  </div>
                  <div className="flex items-center gap-3 rounded-xl border border-line bg-white p-4 shadow-soft">
                    <Clock3 className="h-5 w-5 text-primary" aria-hidden="true" />
                    <span className="text-[14.5px] font-medium text-navy/85">Mon – Fri, 9:00 – 18:00</span>
                  </div>
                </div>
                <p className="text-[13.5px] leading-relaxed text-muted">
                  For partnership inquiries:{" "}
                  <a href={`mailto:${site.email}`} className="font-semibold text-primary hover:text-primary-dark">
                    {site.email}
                  </a>
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="rounded-2xl border border-line bg-soft/50 p-6">
                <p className="text-[14px] font-semibold text-navy">Rather start with a quote?</p>
                <p className="mt-1.5 text-[13.5px] leading-relaxed text-muted">Request a free site inspection — our engineers will assess your premises and respond with a transparent proposal.</p>
                <div className="mt-4">
                  <Button to="/get-a-quote" variant="outline" icon={<ArrowRight className="h-4 w-4" aria-hidden="true" />}>
                    Get Free Site Inspection
                  </Button>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal direction="left" delay={0.05}>
            <div className="rounded-3xl border border-line bg-white p-6 shadow-lift sm:p-8">
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </section>

      <FinalCta />
    </PageTransition>
  );
}