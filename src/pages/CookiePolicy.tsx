import { Link } from "react-router";
import PageTransition from "@/components/animation/PageTransition";
import Seo from "@/components/seo/Seo";
import { site } from "@/config/site";
import { breadcrumbSchema } from "@/config/schemas";
import { PageHero } from "@/components/layout/PageHero";
import { LegalLayout } from "@/components/common/LegalLayout";

export default function CookiePolicy() {
  return (
    <PageTransition>
      <Seo
        title="Cookie Policy"
        description="How NovaCore uses cookies on its website and how you can control them."
        path="/cookie-policy"
        schema={[breadcrumbSchema([{ name: "Cookie Policy" }])]}
      />

      <PageHero
        eyebrow="Legal"
        title="Cookie Policy"
        description="A short, honest list of the cookies this website uses — and how to control them."
        crumbs={[{ label: "Cookie Policy" }]}
      />

      <LegalLayout
        intro="Cookies are small text files stored on your device. This website uses a deliberately small number of them, and only where they genuinely help."
        lastUpdated="January 1, 2026"
        sections={[
          {
            id: "essential",
            title: "Essential cookies",
            body: (
              <ul className="list-disc space-y-2 pl-6">
                <li>Strictly necessary for the site to work — e.g., security tokens and preferences.</li>
                <li>These cannot be switched off in our services because the site wouldn't function without them.</li>
              </ul>
            ),
          },
          {
            id: "analytics",
            title: "Analytics cookies",
            body: <p>We use privacy-friendly, aggregated analytics to understand general site usage — which pages are visited and whether content is helpful. No personal identifiers are collected, and identifiers are rotated automatically.</p>,
          },
          {
            id: "marketing",
            title: "Advertising cookies",
            body: <p>We do not use advertising cookies on this website. We do not profile visitors for ad targeting.</p>,
          },
          {
            id: "managing",
            title: "Managing cookies",
            body: (
              <>
                <p>You can control and delete cookies through your browser settings at any time. Blocking essential cookies may prevent parts of the site from working correctly.</p>
                <p>You can also use your browser's "private" or "incognito" modes, which clear most cookies when you close your browser.</p>
              </>
            ),
          },
          {
            id: "changes",
            title: "Changes to this policy",
            body: <p>We'll update this page if our cookie practices change. Material changes will be flagged on the website.</p>,
          },
        ]}
        contact={
          <p className="text-[14.5px] leading-relaxed text-navy/85">
            Questions about cookies? Contact us at{" "}
            <a href={`mailto:${site.email}`} className="font-semibold text-primary hover:text-primary-dark">
              {site.email}
            </a>
            . Our{" "}
            <Link to="/privacy-policy" className="font-semibold text-primary hover:text-primary-dark">
              Privacy Policy
            </Link>{" "}
            explains the full picture.
          </p>
        }
      />
    </PageTransition>
  );
}