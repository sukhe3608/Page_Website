import { Link } from "react-router";
import PageTransition from "@/components/animation/PageTransition";
import Seo from "@/components/seo/Seo";
import { site } from "@/config/site";
import { breadcrumbSchema } from "@/config/schemas";
import { PageHero } from "@/components/layout/PageHero";
import { LegalLayout } from "@/components/common/LegalLayout";

export default function Terms() {
  return (
    <PageTransition>
      <Seo
        title="Terms of Service"
        description="The terms that govern your use of NovaCore's website, products and services."
        path="/terms"
        schema={[breadcrumbSchema([{ name: "Terms of Service" }])]}
      />

      <PageHero
        eyebrow="Legal"
        title="Terms of Service"
        description="The straightforward rules of the road for using our site, products and services."
        crumbs={[{ label: "Terms of Service" }]}
      />

      <LegalLayout
        intro="These Terms of Service (the &ldquo;Terms&rdquo;) govern your access to and use of the NovaCore website, products and services. By using them, you agree to these Terms. If you don't agree, please don't use them."
        lastUpdated="January 1, 2026"
        sections={[
          {
            id: "using-our-services",
            title: "Using our services",
            body: <p>You may use our services only for lawful purposes and in accordance with these Terms. You agree not to misuse the services, attempt unauthorized access, or interfere with the experience of other users.</p>,
          },
          {
            id: "accounts",
            title: "Accounts and credentials",
            body: <p>Where you create an account, you are responsible for safeguarding your credentials and for all activity under your account. Notify us promptly of any unauthorized use.</p>,
          },
          {
            id: "intellectual-property",
            title: "Intellectual property",
            body: (
              <>
                <p>All content on this website and all software we build for or deliver to you — including design, code, documentation and branding — is owned by {site.name} or its licensors, except where ownership is transferred by a separate written agreement.</p>
                <p>You may not copy, modify, distribute or reverse-engineer our products except as expressly permitted.</p>
              </>
            ),
          },
          {
            id: "your-content",
            title: "Your content",
            body: <p>You retain ownership of the content you submit to us. You grant us a limited license to process that content for the purpose of providing the services you use.</p>,
          },
          {
            id: "fees-and-payment",
            title: "Fees and payment",
            body: <p>Fees are set out in your order form or quote and are due as agreed. Prices exclude taxes unless stated otherwise. We may update pricing for renewals with thirty days' notice.</p>,
          },
          {
            id: "disclaimers",
            title: "Disclaimers",
            body: <p>To the maximum extent permitted by law, our services are provided "as is" and "as available," without warranties of any kind, express or implied — including merchantability and fitness for a particular purpose.</p>,
          },
          {
            id: "limitation-of-liability",
            title: "Limitation of liability",
            body: <p>To the maximum extent permitted by law, {site.name} will not be liable for indirect, incidental, special, consequential or punitive damages, or for lost profits or data, arising out of or related to use of our services.</p>,
          },
          {
            id: "termination",
            title: "Termination",
            body: <p>We may suspend or terminate access to our services if you breach these Terms, and you may stop using them at any time. Terms that by their nature should survive termination — including intellectual property, disclaimers and liability limits — will continue to apply.</p>,
          },
          {
            id: "governing-law",
            title: "Governing law",
            body: <p>These Terms are governed by the laws of the Republic of Ireland (placeholder — replace with your actual jurisdiction before launch), without regard to conflict-of-law principles.</p>,
          },
          {
            id: "contact",
            title: "Contact",
            body: <p>Questions about these Terms? Reach us at <a href={`mailto:${site.email}`} className="font-semibold text-primary">{site.email}</a>.</p>,
          },
        ]}
        contact={
          <p className="text-[14.5px] leading-relaxed text-navy/85">
            Before making any decision based on these Terms, consult your own legal counsel. This is placeholder
            template language.{" "}
            <Link to="/privacy-policy" className="font-semibold text-primary hover:text-primary-dark">
              Read our Privacy Policy
            </Link>
            .
          </p>
        }
      />
    </PageTransition>
  );
}