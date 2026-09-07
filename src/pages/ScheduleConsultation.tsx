import PageTransition from "@/components/animation/PageTransition";
import Seo from "@/components/seo/Seo";
import { breadcrumbSchema } from "@/config/schemas";
import { PageHero } from "@/components/layout/PageHero";
import { ConsultationForm } from "@/components/forms/ConsultationForm";
import { Reveal } from "@/components/animation/Reveal";

export default function ScheduleConsultation() {
  return (
    <PageTransition>
      <Seo
        title="Schedule a Consultation"
        description="Book a free 30-minute discovery call with our team — we'll discuss your site, requirements and the right way forward."
        path="/schedule-consultation"
        schema={[breadcrumbSchema([{ name: "Schedule a Consultation" }])]}
      />

      <PageHero
        eyebrow="Consultation"
        title="Book a 30-minute call"
        description="Thirty minutes, no pressure. We'll listen, understand your safety requirements and tell you honestly what we'd recommend."
        crumbs={[{ label: "Schedule a Consultation" }]}
      />

      <section className="py-16" aria-labelledby="consultation-form-heading">
        <div className="container-x">
          <Reveal>
            <div className="rounded-3xl border border-line bg-white p-6 shadow-lift sm:p-10">
              <ConsultationForm />
            </div>
          </Reveal>
        </div>
      </section>
    </PageTransition>
  );
}