import { Navigate, useParams, Link } from "react-router";
import { CalendarDays, Clock, ArrowLeft, Share2, Check } from "lucide-react";
import { useState } from "react";
import PageTransition from "@/components/animation/PageTransition";
import Seo from "@/components/seo/Seo";
import { postsBySlug, posts } from "@/data/posts";
import { articleSchema, breadcrumbSchema } from "@/config/schemas";
import { site } from "@/config/site";
import { PageHero } from "@/components/layout/PageHero";
import { BlogCard } from "@/components/cards/BlogCard";
import { RichText } from "@/components/common/RichText";
import { Artwork } from "@/components/common/Artwork";
import { FinalCta } from "@/components/sections/FinalCta";
import { Reveal } from "@/components/animation/Reveal";

export default function BlogDetail() {
  const { slug } = useParams();
  const post = slug ? postsBySlug[slug] : undefined;
  const [copied, setCopied] = useState(false);
  if (!post) return <Navigate to="/insights" replace />;

  const toc = post.content.filter((b) => b.type === "h2").map((b) => ({ id: b.text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, ""), label: b.text }));
  const related = posts.filter((p) => p.slug !== post.slug).slice(0, 3);
  const shareUrl = `${site.url}/insights/${post.slug}`;

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard unavailable */
    }
  };

  return (
    <PageTransition>
      <Seo
        title={`${post.title} — Insights`}
        description={post.excerpt}
        path={`/insights/${post.slug}`}
        schema={[
          articleSchema({ title: post.title, excerpt: post.excerpt, date: post.date, author: post.author, slug: post.slug }),
          breadcrumbSchema([{ name: "Insights", path: "/insights" }, { name: post.title, path: `/insights/${post.slug}` }]),
        ]}
      />

      <PageHero eyebrow={post.category} title={<span className="text-gradient">{post.title}</span>} crumbs={[{ label: "Insights", to: "/insights" }, { label: post.title }]}>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-1 text-[13.5px] font-medium text-muted">
          <span>{post.author}</span>
          <span className="flex items-center gap-1.5">
            <CalendarDays className="h-4 w-4 text-primary" aria-hidden="true" />
            {post.date}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="h-4 w-4 text-primary" aria-hidden="true" />
            {post.readTime}
          </span>
        </div>
        <Reveal className="mt-8">
          <Artwork tint={post.tint} pattern="flow" className="aspect-[21/9] rounded-2xl shadow-lift" />
        </Reveal>
      </PageHero>

      <div className="container-x grid gap-10 pb-20 lg:grid-cols-[250px_1fr] lg:gap-14">
        <aside className="lg:sticky lg:top-28 lg:self-start" aria-label="Table of contents">
          <div className="rounded-2xl border border-line bg-white p-5 shadow-soft">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.14em] text-muted">Table of contents</p>
            {toc.length > 0 ? (
              <ol className="flex flex-col gap-0.5">
                {toc.map((item) => (
                  <li key={item.id}>
                    <a href={`#${item.id}`} className="link-underline inline-block rounded px-2 py-1.5 text-[14px] font-medium text-navy/80 transition-colors duration-200 hover:text-primary">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ol>
            ) : (
              <p className="px-2 text-[14px] text-muted">No sections</p>
            )}
          </div>
        </aside>

        <article className="flex min-w-0 flex-col gap-10">
          <Reveal>
            <div className="flex flex-col items-start gap-6">
              <RichText blocks={post.content.map((block) => (block.type === "h2" ? { ...block, text: block.text } : block))} />
            </div>
          </Reveal>

          <div className="flex flex-wrap items-center justify-between gap-4 border-t border-line pt-6">
            <Link to="/insights" className="link-underline inline-flex items-center gap-1.5 text-[14px] font-semibold text-navy transition-colors hover:text-primary">
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              Back to insights
            </Link>
            <div className="flex items-center gap-2">
              <span className="mr-1 flex items-center gap-1.5 text-[13px] font-medium text-muted">
                <Share2 className="h-4 w-4" aria-hidden="true" />
                Share
              </span>
              <button
                type="button"
                onClick={copyLink}
                className="inline-flex items-center gap-1.5 rounded-full border border-line bg-white px-4 py-2 text-[13px] font-semibold text-navy shadow-soft transition-all duration-200 hover:border-primary/40 hover:text-primary"
              >
                {copied ? <Check className="h-3.5 w-3.5 text-success" aria-hidden="true" /> : "Copy link"}
              </button>
              <a
                href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-line bg-white px-4 py-2 text-[13px] font-semibold text-navy shadow-soft transition-all duration-200 hover:border-primary/40 hover:text-primary"
              >
                X
              </a>
              <a
                href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(shareUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-line bg-white px-4 py-2 text-[13px] font-semibold text-navy shadow-soft transition-all duration-200 hover:border-primary/40 hover:text-primary"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </article>
      </div>

      <section className="section-pad bg-bg/60" aria-labelledby="related-posts-heading">
        <div className="container-x flex flex-col gap-10">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="eyebrow">Keep reading</p>
              <h2 id="related-posts-heading" className="mt-3 text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
                Related articles
              </h2>
            </div>
            <Link to="/insights" className="link-underline text-[14px] font-semibold text-primary">
              View all insights
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {related.map((p, i) => (
              <BlogCard key={p.slug} post={p} index={i} className="h-full" />
            ))}
          </div>
        </div>
      </section>

      <FinalCta />
    </PageTransition>
  );
}