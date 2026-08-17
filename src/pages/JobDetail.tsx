import { Navigate, useParams, Link } from "react-router";
import { ArrowLeft, Briefcase, MapPin, Clock3, UserRound } from "lucide-react";
import PageTransition from "@/components/animation/PageTransition";
import Seo from "@/components/seo/Seo";
import { jobsBySlug } from "@/data/projects";
import { jobSchema } from "@/config/schemas";
import { PageHero } from "@/components/layout/PageHero";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { JobApplicationForm } from "@/components/forms/JobApplicationForm";
import { FinalCta } from "@/components/sections/FinalCta";
import { Reveal } from "@/components/animation/Reveal";

export default function JobDetail() {
  const { slug } = useParams();
  const job = slug ? jobsBySlug[slug] : undefined;
  if (!job) return <Navigate to="/careers" replace />;

  return (
    <PageTransition>
      <Seo
        title={`${job.title} — Careers`}
        description={job.description}
        path={`/careers/${job.slug}`}
        schema={[jobSchema({ title: job.title, location: job.location, type: job.type, description: job.description, slug: job.slug })]}
      />

      <PageHero
        eyebrow="Careers"
        title={<span className="text-gradient">{job.title}</span>}
        description={job.description}
        crumbs={[{ label: "Careers", to: "/careers" }, { label: job.title }]}
      >
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-1 text-[13.5px] font-medium text-muted">
          <span className="flex items-center gap-1.5">
            <Briefcase className="h-4 w-4 text-primary" aria-hidden="true" />
            {job.department}
          </span>
          <span className="flex items-center gap-1.5">
            <MapPin className="h-4 w-4 text-primary" aria-hidden="true" />
            {job.location}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock3 className="h-4 w-4 text-primary" aria-hidden="true" />
            {job.type}
          </span>
          <span className="flex items-center gap-1.5">
            <UserRound className="h-4 w-4 text-primary" aria-hidden="true" />
            {job.experience}
          </span>
        </div>
        <div className="flex flex-wrap items-center gap-3 pt-3">
          <Badge variant="soft">Posted {job.posted}</Badge>
        </div>
      </PageHero>

      <div className="container-x grid gap-10 pb-20 lg:grid-cols-[1.4fr_1fr] lg:gap-14">
        <article className="flex min-w-0 flex-col gap-10">
          <Reveal>
            <section aria-labelledby="job-responsibilities-heading">
              <h2 id="job-responsibilities-heading" className="mb-5 text-2xl font-semibold tracking-tight text-navy">
                What you'll do
              </h2>
              <ul className="flex flex-col gap-3">
                {job.responsibilities.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[15.5px] leading-relaxed text-navy/85">
                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          </Reveal>

          <Reveal delay={0.05}>
            <section aria-labelledby="job-requirements-heading">
              <h2 id="job-requirements-heading" className="mb-5 text-2xl font-semibold tracking-tight text-navy">
                What we're looking for
              </h2>
              <ul className="flex flex-col gap-3">
                {job.requirements.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[15.5px] leading-relaxed text-navy/85">
                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-500" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          </Reveal>

          <Reveal delay={0.1}>
            <section aria-labelledby="job-benefits-heading">
              <h2 id="job-benefits-heading" className="mb-5 text-2xl font-semibold tracking-tight text-navy">
                Why join us
              </h2>
              <div className="grid gap-3 sm:grid-cols-2">
                {job.benefits.map((item) => (
                  <div key={item} className="rounded-xl border border-line bg-white p-4 text-[14.5px] font-medium text-navy/85 shadow-soft">
                    {item}
                  </div>
                ))}
              </div>
            </section>
          </Reveal>

          <Reveal delay={0.1}>
            <Link to="/careers" className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-primary transition-colors hover:text-primary-dark">
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              Browse all roles
            </Link>
          </Reveal>
        </article>

        <aside className="lg:sticky lg:top-28 lg:self-start" aria-label="Apply">
          <div className="rounded-3xl border border-line bg-white p-6 shadow-lift sm:p-8">
            <div className="mb-6">
              <p className="eyebrow">Apply now</p>
              <h2 className="mt-2 text-xl font-semibold tracking-tight text-navy">Tell us about yourself</h2>
              <p className="mt-1.5 text-[13.5px] leading-relaxed text-muted">Our team reviews every application personally — usually within five working days.</p>
            </div>
            <JobApplicationForm jobTitle={job.title} />
            <div className="mt-5">
              <Button to="/contact" variant="ghost" className="w-full">
                Or get in touch first
              </Button>
            </div>
          </div>
        </aside>
      </div>

      <FinalCta title="Don't see your role?" description="Tell us what you'd love to build, and we'll keep you in mind for the right opening." />
    </PageTransition>
  );
}