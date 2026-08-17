import { ArrowRight, ShieldCheck, Sparkles, Rocket } from "lucide-react";
import PageTransition from "@/components/animation/PageTransition";
import Seo from "@/components/seo/Seo";
import { products } from "@/data/products";
import { breadcrumbSchema } from "@/config/schemas";
import { PageHero } from "@/components/layout/PageHero";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProductCard } from "@/components/cards/ProductCard";
import { AccordionItem } from "@/components/ui/Accordion";
import { FinalCta } from "@/components/sections/FinalCta";
import { RevealGroup, RevealItem } from "@/components/animation/Reveal";

const productFaqs = [
  { q: "Can we try the products before buying?", a: "Yes — every product includes a free trial or demo environment so your team can evaluate it with real workflows and data." },
  { q: "How does pricing work?", a: "Pricing is transparent and tiered by usage. Request a quote and we'll send a detailed breakdown with no hidden fees." },
  { q: "Do you help with implementation?", a: "Always. Deployment, integrations and team training are included in every plan." },
];

export default function ProductsHub() {
  return (
    <PageTransition>
      <Seo
        title="Products"
        description="NovaCore's product suite — workflow automation, real-time analytics, customer service and security platforms built for modern teams."
        path="/products"
        schema={[breadcrumbSchema([{ name: "Products" }])]}
      />

      <PageHero
        eyebrow="Products"
        title="Tools your team will actually enjoy"
        description="Four products, one promise: software that removes friction instead of adding it. Explore the suite or book a demo below."
        crumbs={[{ label: "Products" }]}
      >
        <div className="flex flex-wrap items-center gap-3 pt-2">
          <Button to="/contact" icon={<ArrowRight className="h-4 w-4" aria-hidden="true" />}>
            Book a Demo
          </Button>
        </div>
      </PageHero>

      <section className="section-pad" aria-labelledby="products-grid-heading">
        <div className="container-x flex flex-col gap-10">
          <SectionHeading uiOnly title="Our product suite" />
          <RevealGroup className="grid gap-6 md:grid-cols-2" stagger={0.06}>
            {products.map((product) => (
              <RevealItem key={product.slug} className="h-full">
                <ProductCard product={product} index={products.indexOf(product)} className="h-full" />
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <section className="section-pad bg-bg/60" aria-labelledby="products-why-heading">
        <div className="container-x grid gap-8 lg:grid-cols-3">
          {[
            { icon: ShieldCheck, title: "Enterprise-grade trust", description: "SOC 2 Type II certified, SSO-ready, with encryption and audit trails built in from day one." },
            { icon: Sparkles, title: "Fast to adopt", description: "Self-serve onboarding, templates and training mean most teams are productive in days, not months." },
            { icon: Rocket, title: "Built by the team behind them", description: "Our product and services teams work side by side — so bugs get fixed and ideas get shipped quickly." },
          ].map((item) => (
            <div key={item.title} className="rounded-2xl border border-line bg-white p-6 shadow-soft">
              <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-soft text-primary">
                <item.icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="text-[16px] font-semibold text-navy">{item.title}</h3>
              <p className="mt-2 text-[13.5px] leading-relaxed text-muted">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-pad" aria-labelledby="products-faq-heading">
        <div className="container-x flex flex-col gap-8 lg:grid lg:grid-cols-[1fr_1.4fr] lg:items-start lg:gap-14">
          <SectionHeading align="left" eyebrow="Questions" title={<span id="products-faq-heading">Product questions, answered</span>} description="Anything else? Our team replies within one business day." />
          <div className="flex flex-col gap-3">
            {productFaqs.map((faq) => (
              <AccordionItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

      <FinalCta title="See the suite in action" description="Book a combined demo of NovaFlow, NovaPulse, NovaDesk and NovaShield." />
    </PageTransition>
  );
}