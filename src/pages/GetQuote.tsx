import PageTransition from "@/components/animation/PageTransition";
import Seo from "@/components/seo/Seo";
import { breadcrumbSchema } from "@/config/schemas";
import { PageHero } from "@/components/layout/PageHero";
import { QuoteForm } from "@/components/forms/QuoteForm";
import { Reveal } from "@/components/animation/Reveal";

export default function GetQuote() {
  return (
    <PageTransition>
      <Seo
        title="Get a Quote"
        description="Request a free site inspection and quote for your safety, security or automation requirements — no obligation."
        path="/get-a-quote"
        schema={[breadcrumbSchema([{ name: "Get a Quote" }])]}
      />

      <PageHero
        eyebrow="Get a quote"
        title="Your site, quoted honestly"
        description="Five short steps. No obligation, no pressure — just a realistic proposal and a clear next step from our engineers."
        crumbs={[{ label: "Get a Quote" }]}
      />

      <section className="py-16" aria-labelledby="quote-form-heading">
        <div className="container-x">
          <Reveal>
            <div className="rounded-3xl border border-line bg-white p-6 shadow-lift sm:p-10">
              <QuoteForm />
            </div>
          </Reveal>
        </div>
      </section>
    </PageTransition>
  );
}