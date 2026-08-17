import { Navigate, useParams } from "react-router";
import { ArrowRight, Cpu, ShieldCheck, Plug, MonitorSmartphone } from "lucide-react";
import PageTransition from "@/components/animation/PageTransition";
import Seo from "@/components/seo/Seo";
import { productsBySlug } from "@/data/products";
import { breadcrumbSchema } from "@/config/schemas";
import { PageHero } from "@/components/layout/PageHero";
import { Icon } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { AccordionItem } from "@/components/ui/Accordion";
import { DetailSidebar } from "@/components/common/DetailSidebar";
import { TechChips } from "@/components/common/TechChips";
import { Metric } from "@/components/common/Metric";
import { Artwork } from "@/components/common/Artwork";
import { FinalCta } from "@/components/sections/FinalCta";
import { Reveal, RevealGroup, RevealItem } from "@/components/animation/Reveal";

const sections = [
  { id: "overview", label: "Overview" },
  { id: "features", label: "Core features" },
  { id: "screenshots", label: "Product tour" },
  { id: "integrations", label: "Integrations" },
  { id: "security", label: "Security" },
  { id: "faq", label: "FAQ" },
];

export default function ProductDetail() {
  const { slug } = useParams();
  const product = slug ? productsBySlug[slug] : undefined;
  if (!product) return <Navigate to="/products" replace />;

  return (
    <PageTransition>
      <Seo
        title={`${product.name} — Products`}
        description={product.description}
        path={`/products/${product.slug}`}
        schema={[breadcrumbSchema([{ name: "Products", path: "/products" }, { name: product.name, path: `/products/${product.slug}` }])]}
      />

      <PageHero
        eyebrow={`Products · ${product.category}`}
        title={<span className="text-gradient">{product.name}</span>}
        description={product.tagline}
        crumbs={[{ label: "Products", to: "/products" }, { label: product.name }]}
      >
        <div className="flex flex-wrap items-center gap-3 pt-2">
          <Button to="/contact" icon={<ArrowRight className="h-4 w-4" aria-hidden="true" />}>
            Request a Demo
          </Button>
          <Button to="/get-a-quote" variant="outline">
            Get a Quote
          </Button>
        </div>
        <Reveal className="mt-8 grid w-full max-w-2xl grid-cols-2 gap-3 sm:grid-cols-4">
          {product.metrics.map((metric) => (
            <div key={metric.label} className="rounded-xl border border-line bg-white/70 px-4 py-3 backdrop-blur-sm">
              <p className="font-display text-xl font-bold tracking-tight text-primary sm:text-2xl">
                <Metric raw={metric.value} />
              </p>
              <p className="mt-0.5 text-[12px] font-medium text-muted">{metric.label}</p>
            </div>
          ))}
        </Reveal>
      </PageHero>

      <div className="container-x grid gap-10 pb-20 lg:grid-cols-[250px_1fr] lg:gap-14">
        <DetailSidebar sections={sections} />

        <div className="flex min-w-0 flex-col gap-20">
          <section id="overview" className="scroll-mt-28" aria-labelledby="prod-overview-heading">
            <Reveal>
              <div className="flex flex-col gap-5">
                <div className="flex items-center gap-3">
                  <span className="flex h-13 w-13 items-center justify-center rounded-2xl bg-soft p-3 text-primary">
                    <Icon name={product.icon} className="h-6.5 w-6.5" />
                  </span>
                  <h2 id="prod-overview-heading" className="text-2xl font-semibold tracking-tight text-navy">
                    Overview
                  </h2>
                </div>
                <p className="text-pretty text-[17px] leading-relaxed text-muted">{product.longDescription}</p>
              </div>
            </Reveal>
          </section>

          <section id="features" className="scroll-mt-28" aria-labelledby="prod-features-heading">
            <SectionHeading align="left" eyebrow="Core features" title={<span id="prod-features-heading">What {product.name} does</span>} />
            <RevealGroup className="mt-10 grid gap-4 sm:grid-cols-2" stagger={0.06}>
              {product.features.map((feature) => (
                <RevealItem key={feature}>
                  <div className="flex items-start gap-3 rounded-xl border border-line bg-white p-4 shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/25 hover:shadow-card">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-soft text-primary">
                      <Cpu className="h-4.5 w-4.5" aria-hidden="true" />
                    </span>
                    <span className="text-[15px] font-medium text-navy/85">{feature}</span>
                  </div>
                </RevealItem>
              ))}
            </RevealGroup>
          </section>

          <section id="screenshots" className="scroll-mt-28" aria-labelledby="prod-tour-heading">
            <SectionHeading align="left" eyebrow="Product tour" title={<span id="prod-tour-heading">Inside the product</span>} />
            <div className="mt-10 flex flex-col gap-8">
              {product.screenshots.map((shot, i) => (
                <Reveal key={shot.title} direction={i % 2 === 0 ? "up" : "left"} delay={i % 2 === 0 ? 0 : 0.05}>
                  <div className="grid items-center gap-6 lg:grid-cols-2">
                    <Artwork tint={shot.tint} pattern="flow" className="aspect-[16/10] rounded-2xl shadow-lift">
                      <div className="flex h-full items-center justify-center">
                        <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15 backdrop-blur-sm">
                          <MonitorSmartphone className="h-8 w-8 text-white" aria-hidden="true" />
                        </span>
                      </div>
                    </Artwork>
                    <div className="flex flex-col gap-3">
                      <h3 className="text-lg font-semibold tracking-tight text-navy">{shot.title}</h3>
                      <p className="text-[15px] leading-relaxed text-muted">{shot.description}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </section>

          <section id="integrations" className="scroll-mt-28" aria-labelledby="prod-integrations-heading">
            <SectionHeading align="left" eyebrow="Connect" title={<span id="prod-integrations-heading">Integrations</span>} />
            <Reveal className="mt-10 flex flex-col gap-6">
              <div className="flex items-start gap-3 text-[15px] text-muted">
                <Plug className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                <p>
                  {product.name} works alongside the tools your team already uses. Open APIs and webhooks make
                  integration straightforward.
                </p>
              </div>
              <TechChips items={product.integrations} />
            </Reveal>
          </section>

          <section id="security" className="scroll-mt-28" aria-labelledby="prod-security-heading">
            <SectionHeading align="left" eyebrow="Trust" title={<span id="prod-security-heading">Security &amp; compliance</span>} />
            <RevealGroup className="mt-10 grid gap-4 sm:grid-cols-2" stagger={0.06}>
              {product.security.map((item) => (
                <RevealItem key={item}>
                  <div className="flex items-start gap-3 rounded-xl border border-line bg-white p-4 shadow-soft">
                    <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-success" aria-hidden="true" />
                    <span className="text-[15px] font-medium text-navy/85">{item}</span>
                  </div>
                </RevealItem>
              ))}
            </RevealGroup>
          </section>

          <section id="faq" className="scroll-mt-28" aria-labelledby="prod-faq-heading">
            <SectionHeading align="left" eyebrow="Questions" title={<span id="prod-faq-heading">Frequently asked questions</span>} />
            <div className="mt-10 flex flex-col gap-3">
              {product.faqs?.length ? (
                product.faqs.map((faq) => <AccordionItem key={faq.q} q={faq.q} a={faq.a} />)
              ) : (
                <p className="rounded-xl border border-line bg-white p-5 text-[15px] text-muted">
                  Questions about {product.name}?{" "}
                  <a href="/contact" className="font-semibold text-primary hover:text-primary-dark">
                    Talk to our team
                  </a>
                  .
                </p>
              )}
            </div>
          </section>
        </div>
      </div>

      <FinalCta
        title={`See ${product.name} in action`}
        description="Book a 30-minute demo tailored to your workflow — no obligations, no sales pitch."
      />
    </PageTransition>
  );
}