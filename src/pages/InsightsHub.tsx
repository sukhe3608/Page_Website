import { useMemo, useState } from "react";
import { Link } from "react-router";
import PageTransition from "@/components/animation/PageTransition";
import Seo from "@/components/seo/Seo";
import { posts } from "@/data/posts";
import { breadcrumbSchema } from "@/config/schemas";
import { PageHero } from "@/components/layout/PageHero";
import { BlogCard } from "@/components/cards/BlogCard";
import { FinalCta } from "@/components/sections/FinalCta";
import { Reveal, RevealGroup, RevealItem } from "@/components/animation/Reveal";

const categories = ["All", "Fire Safety", "Security", "CCTV & Surveillance", "Access Control", "Automation"];

export default function InsightsHub() {
  const [active, setActive] = useState("All");
  const filtered = useMemo(() => (active === "All" ? posts : posts.filter((p) => p.category === active)), [active]);
  const [featured, ...rest] = filtered;

  return (
    <PageTransition>
      <Seo
        title="Insights"
        description="Practical guides on fire safety, CCTV, access control, solar fencing and security systems that last."
        path="/insights"
        schema={[breadcrumbSchema([{ name: "Insights" }])]}
      />

      <PageHero
        eyebrow="Insights"
        title="Field notes worth stealing"
        description="Practical guides from our engineers and safety specialists — no fluff, just what works."
        crumbs={[{ label: "Insights" }]}
      />

      <section className="section-pad" aria-labelledby="insights-grid-heading">
        <div className="container-x flex flex-col gap-10">
          <div role="tablist" aria-label="Filter articles by category" className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                role="tab"
                aria-selected={active === category}
                onClick={() => setActive(category)}
                className={`rounded-full border px-4 py-2 text-[13px] font-semibold transition-all duration-200 ${
                  active === category
                    ? "border-primary bg-primary text-white shadow-soft"
                    : "border-line bg-white text-navy/70 hover:border-primary/40 hover:text-primary"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {featured && (
            <Reveal>
              <article className="grid gap-6 overflow-hidden rounded-3xl border border-line bg-white shadow-lift lg:grid-cols-2">
                <div className={`relative min-h-56 bg-gradient-to-br ${featured.tint === "navy" ? "from-navy to-primary" : featured.tint === "teal" ? "from-teal-600 to-primary" : featured.tint === "violet" ? "from-violet-600 to-primary" : "from-primary to-teal-600"}`}>
                  <div className="bg-dots absolute inset-0 opacity-20" aria-hidden="true" />
                  <span className="absolute left-6 top-6 rounded-full bg-white/20 px-3 py-1 text-[12px] font-bold text-white backdrop-blur-sm">{featured.category}</span>
                </div>
                <div className="flex flex-col justify-center gap-4 p-6 sm:p-10">
                  <p className="eyebrow">Featured article</p>
                  <h2 className="text-2xl font-semibold leading-snug tracking-tight text-navy sm:text-3xl">
                    {featured.title}
                  </h2>
                  <p className="text-[14.5px] leading-relaxed text-muted">{featured.excerpt}</p>
                  <p className="text-[13px] font-medium text-muted">
                    {featured.author} · {featured.date} · {featured.readTime}
                  </p>
                  <Link to={`/insights/${featured.slug}`} className="link-underline self-start text-[14px] font-semibold text-primary">
                    Read the article
                  </Link>
                </div>
              </article>
            </Reveal>
          )}

          <RevealGroup key={active} className="grid gap-6 md:grid-cols-2 lg:grid-cols-3" stagger={0.06}>
            {rest.map((post, i) => (
              <RevealItem key={post.slug} className="h-full">
                <BlogCard post={post} index={i} className="h-full" />
              </RevealItem>
            ))}
          </RevealGroup>

          <div className="rounded-2xl border border-line bg-soft/50 p-6 text-center">
            <p className="text-[14.5px] text-navy/80">
              Want these insights in your inbox?{" "}
              <a href="mailto:info@slninfosys.com" className="font-semibold text-primary hover:text-primary-dark">
                Subscribe to our newsletter
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      <FinalCta />
    </PageTransition>
  );
}