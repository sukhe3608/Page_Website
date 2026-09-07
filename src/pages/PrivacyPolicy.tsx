import { Link } from "react-router";
import PageTransition from "@/components/animation/PageTransition";
import Seo from "@/components/seo/Seo";
import { site } from "@/config/site";
import { breadcrumbSchema } from "@/config/schemas";
import { PageHero } from "@/components/layout/PageHero";
import { LegalLayout } from "@/components/common/LegalLayout";

export default function PrivacyPolicy() {
  return (
    <PageTransition>
      <Seo
        title="Privacy Policy"
        description="How SLN Automation India Pvt. Ltd. collects, uses and protects your personal data."
        path="/privacy-policy"
        schema={[breadcrumbSchema([{ name: "Privacy Policy" }])]}
      />

      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        description="Clear, plain-language privacy practices — no hidden surprises."
        crumbs={[{ label: "Privacy Policy" }]}
      />

      <LegalLayout
        intro="This Privacy Policy explains what personal data we process when you use our websites, products and services, why we process it, and the choices you have. Entering into our products and services is voluntary — and so is sharing your data with us."
        lastUpdated="January 1, 2026"
        sections={[
          {
            id: "data-we-collect",
            title: "Data we collect",
            body: (
              <>
                <p>We collect information you share with us directly — for example, when you send an inquiry, request a quote, apply for a role or use our products. This can include your name, email address, phone number, company details and any content of your message.</p>
                <p>We also collect limited technical data when you visit our website, such as anonymized usage statistics, device type and approximate location, so we can keep the site fast, secure and easy to use.</p>
                <p>We do not buy personal data, and we do not sell your data to anyone. Ever.</p>
              </>
            ),
          },
          {
            id: "how-we-use",
            title: "How we use your data",
            body: (
              <ul className="list-disc space-y-2 pl-6">
                <li>To respond to your inquiries and provide the services you request.</li>
                <li>To deliver, maintain and improve our products — including support and security.</li>
                <li>To send you communications you have opted into, with one-click unsubscribe.</li>
                <li>To meet legal obligations, such as tax, audit and anti-fraud requirements.</li>
              </ul>
            ),
          },
          {
            id: "legal-basis",
            title: "Legal basis",
            body: <p>We process personal data based on your consent, the performance of a contract with you, our legitimate interests in running and improving our business (balanced against your rights), and compliance with legal obligations — depending on the purpose.</p>,
          },
          {
            id: "sharing",
            title: "Who we share data with",
            body: (
              <>
                <p>We share personal data only with trusted processors who help us operate — for example, hosting providers, email and payment services — under contracts that require them to protect your data.</p>
                <p>We may also disclose data where required by law, or where necessary to protect the rights and safety of our users or the public.</p>
              </>
            ),
          },
          {
            id: "retention",
            title: "Retention",
            body: <p>We keep personal data only as long as needed for the purposes described here, or as required by law. After that, it is securely deleted or anonymized.</p>,
          },
          {
            id: "your-rights",
            title: "Your rights",
            body: (
              <>
                <p>Depending on where you live, you may have rights to access, correct, delete or port your personal data, and to object to or restrict certain processing. To exercise any of these rights, contact us at {site.email}. We respond to all verified requests within thirty days.</p>
                <p>You can also raise a concern with your local data protection authority at any time.</p>
              </>
            ),
          },
          {
            id: "cookies",
            title: "Cookies",
            body: <p>Our website uses only essential cookies to operate and measure performance. See our <Link to="/cookie-policy" className="font-semibold text-primary">Cookie Policy</Link> for the full picture.</p>,
          },
          {
            id: "changes",
            title: "Changes to this policy",
            body: <p>We may update this policy from time to time. When we do, we'll revise the "Last updated" date above and, for material changes, notify you through our website or by email.</p>,
          },
        ]}
        contact={
          <p className="text-[14.5px] leading-relaxed text-navy/85">
            Questions about your data? Contact our privacy team:{" "}
            <a href={`mailto:${site.email}`} className="font-semibold text-primary hover:text-primary-dark">
              {site.email}
            </a>
            , {site.address}.
          </p>
        }
      />
    </PageTransition>
  );
}