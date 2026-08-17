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
        description="Request a free, no-obligation quote for your project — tell us what you need and we'll come back with a starting figure and a plan."
        path="/get-a-quote"
        schema={[breadcrumbSchema([{ name: "Get a Quote" }])]}
      />

      <PageHero
        eyebrow="Get a quote"
        title="Your project, priced honestly"
        description="Five short steps. No obligation, no pressure — just a realistic starting point and a clear next step."
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