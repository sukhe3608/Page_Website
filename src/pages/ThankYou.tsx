import { Link } from "react-router";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import PageTransition from "@/components/animation/PageTransition";
import Seo from "@/components/seo/Seo";
import { PageHero } from "@/components/layout/PageHero";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/animation/Reveal";

export default function ThankYou() {
  return (
    <PageTransition>
      <Seo title="Thank You" description="We've received your message — here's what happens next." path="/thank-you" />

      <PageHero
        eyebrow="Thank you"
        title="We've got your message"
        description="Your inquiry is in a real human's inbox, not a void. Here's what happens next."
        crumbs={[{ label: "Thank You" }]}
      />

      <section className="py-16" aria-labelledby="thankyou-steps-heading">
        <div className="container-x">
          <Reveal>
            <div className="mx-auto flex max-w-2xl flex-col gap-10">
              <div className="flex flex-col items-center gap-4 text-center">
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-success/10 text-success">
                  <CheckCircle2 className="h-8 w-8" aria-hidden="true" />
                </span>
                <h2 id="thankyou-steps-heading" className="text-2xl font-semibold tracking-tight text-navy">
                  What happens next
                </h2>
              </div>
              <div className="flex flex-col gap-4">
                {[
                  { step: "1", text: "We review your details and route them to the right specialist — typically within a few hours." },
                  { step: "2", text: "You receive a personal reply (not an autoresponder) with a few focused questions or a proposed next step." },
                  { step: "3", text: "We schedule a call or follow up with written recommendations — your terms, your pace." },
                ].map((item) => (
                  <div key={item.step} className="flex items-start gap-4 rounded-2xl border border-line bg-white p-5 shadow-soft">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-[13px] font-bold text-white">
                      {item.step}
                    </span>
                    <p className="text-[14.5px] leading-relaxed text-navy/85">{item.text}</p>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap justify-center gap-3">
                <Button to="/" variant="outline">
                  Back to Home
                </Button>
                <Link to="/services" className="link-underline inline-flex items-center gap-1.5 text-[14px] font-semibold text-primary">
                  Explore services
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </PageTransition>
  );
}