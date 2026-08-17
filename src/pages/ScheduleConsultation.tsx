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
        description="Book a free 30-minute discovery call with our team — we'll discuss your goals and recommend the right approach."
        path="/schedule-consultation"
        schema={[breadcrumbSchema([{ name: "Schedule a Consultation" }])]}
      />

      <PageHero
        eyebrow="Consultation"
        title="Book a discovery call"
        description="Thirty minutes, no slide deck, no pressure. We'll listen, ask smart questions and tell you what we'd do."
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