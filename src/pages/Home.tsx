import PageTransition from "@/components/animation/PageTransition";
import Seo from "@/components/seo/Seo";
import { site } from "@/config/site";
import { organizationSchema, websiteSchema, faqSchema } from "@/config/schemas";
import { Hero } from "@/components/sections/Hero";
import { TrustedBy } from "@/components/sections/TrustedBy";
import { Intro } from "@/components/sections/Intro";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { SolutionsSection } from "@/components/sections/SolutionsSection";
import { ProductsSection } from "@/components/sections/ProductsSection";
import { IndustriesSection } from "@/components/sections/IndustriesSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { WhyUsSection } from "@/components/sections/WhyUsSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { LocationsSection } from "@/components/sections/LocationsSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { InsightsSection } from "@/components/sections/InsightsSection";
import { FinalCta } from "@/components/sections/FinalCta";

export default function Home() {
  return (
    <PageTransition>
      <Seo
        title="Fire Safety, Security & Automation Solutions"
        description={site.description}
        path="/"
        schema={[organizationSchema(), websiteSchema(), faqSchema()]}
      />
      <Hero />
      <TrustedBy />
      <Intro />
      <ServicesSection />
      <SolutionsSection />
      <ProductsSection />
      <IndustriesSection />
      <ProjectsSection />
      <StatsSection />
      <WhyUsSection />
      <ProcessSection />
      <LocationsSection />
      <TestimonialsSection />
      <InsightsSection />
      <FinalCta />
    </PageTransition>
  );
}