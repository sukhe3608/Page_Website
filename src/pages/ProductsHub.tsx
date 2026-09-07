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
  { q: "Can we see the systems before buying?", a: "Yes — every system can be demonstrated and evaluated on-site, and we start every engagement with a free site inspection and design." },
  { q: "How does pricing work?", a: "Pricing is transparent and scoped to your site after assessment. Request a quote and we'll send a detailed breakdown with no hidden fees." },
  { q: "Do you help with installation?", a: "Always. Supply, installation, testing, commissioning and training are included in every engagement — plus AMC support." },
];

export default function ProductsHub() {
  return (
    <PageTransition>
      <Seo
        title="Products"
        description="SLN Automation's product range — fire alarm, CCTV, access control, solar fencing, public address and more from authorized global brands."
        path="/products"
        schema={[breadcrumbSchema([{ name: "Products" }])]}
      />

      <PageHero
        eyebrow="Products"
        title="Safety systems built to perform"
        description="Six product lines, one promise: globally certified systems that work when it matters. Explore the range or request a free site inspection below."
        crumbs={[{ label: "Products" }]}
      >
        <div className="flex flex-wrap items-center gap-3 pt-2">
          <Button to="/contact" icon={<ArrowRight className="h-4 w-4" aria-hidden="true" />}>
            Get Free Site Inspection
          </Button>
        </div>
      </PageHero>

      <section className="section-pad" aria-labelledby="products-grid-heading">
        <div className="container-x flex flex-col gap-10">
          <SectionHeading uiOnly title="Our product range" />
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
            { icon: ShieldCheck, title: "Trusted brands", description: "Authorized distributor for Honeywell, Notifier, Bosch, Hikvision and more — globally certified, genuine products." },
            { icon: Sparkles, title: "Designed for your site", description: "Every system is engineered to your site after a free inspection, so it fits your operations from day one." },
            { icon: Rocket, title: "Backed end-to-end", description: "Supply, install, commission, train and maintain — one accountable partner across the full lifecycle." },
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

      <FinalCta title="See the range in action" description="Request a free site inspection and we'll demonstrate the right systems for your site." />
    </PageTransition>
  );
}