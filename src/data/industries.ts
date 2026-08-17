import type { Industry } from "@/types/content";

/**
 * PLACEHOLDER CONTENT — replace all copy with real company information before launch.
 */
export const industries: Industry[] = [
  {
    slug: "healthcare",
    name: "Healthcare",
    tagline: "Technology that puts patients first",
    description:
      "Compliant, secure digital platforms for providers, payers and health tech — from patient portals to analytics.",
    longDescription:
      "Healthcare technology carries unique weight: lives, privacy and regulation. We build patient portals, clinical workflows and data platforms that meet compliance head-on while delivering experiences patients and clinicians genuinely appreciate.",
    icon: "heart-pulse",
    challenges: ["Legacy clinical systems that resist integration", "Strict HIPAA compliance and data privacy", "Clinician time wasted on administrative work", "Fragmented patient data across providers"],
    solutions: ["HIPAA-ready architecture and data governance", "Interoperable APIs and FHIR integrations", "Automated intake, scheduling and documentation", "Unified patient data platforms"],
    benefits: ["Better patient experience and retention", "Reduced administrative burden on staff", "Confident, audit-ready compliance", "Data-informed clinical and operational decisions"],
    technologies: ["FHIR", "HL7", "HIPAA", "Azure Health", "React", "Python", "Kubernetes"],
    caseStudySlugs: ["ai-document-processing"],
    order: 1,
  },
  {
    slug: "fintech",
    name: "FinTech",
    tagline: "Built for trust, speed and regulation",
    description:
      "Secure financial platforms — payments, lending, banking and wealth — engineered to rigorous standards.",
    longDescription:
      "Finance rewards reliability. We build payment systems, lending platforms and financial data products with defense-in-depth security, real-time processing and the auditability regulators expect.",
    icon: "landmark",
    challenges: ["Regulatory and audit complexity", "Zero tolerance for downtime or fraud", "Legacy core systems that are hard to modernize", "Data privacy across jurisdictions"],
    solutions: ["Compliance-first architecture (SOC 2, PCI-DSS)", "Real-time, highly available processing platforms", "Phased core modernization with safe rollbacks", "Granular data governance and residency controls"],
    benefits: ["Faster feature delivery without risk", "Audit-ready evidence by default", "Scalable transaction processing", "Stronger fraud and risk controls"],
    technologies: ["PCI-DSS", "Kafka", "PostgreSQL", "AWS", "Kubernetes", "React", "Python"],
    caseStudySlugs: ["cloud-migration-scale"],
    order: 2,
  },
  {
    slug: "education",
    name: "Education",
    tagline: "Learning experiences that scale",
    description:
      "LMS platforms, student portals and analytics for institutions and ed-tech companies.",
    longDescription:
      "From K-12 to higher ed to corporate learning, we build platforms that engage learners and simplify administration — accessible, data-informed and designed to grow with enrollment.",
    icon: "graduation-cap",
    challenges: ["Engagement and retention in digital learning", "Accessibility requirements across student bodies", "Complex enrollment and record systems", "Data privacy for minors"],
    solutions: ["Engaging, accessible learning experiences", "WCAG-first design and development", "Modern SIS and LMS integrations", "Privacy-by-design data architecture"],
    benefits: ["Higher course completion rates", "Reduced administrative overhead", "Compliant data handling", "Insights that improve curricula"],
    technologies: ["WCAG", "LMS APIs", "React", "Node.js", "PostgreSQL", "AWS", "Video streaming"],
    caseStudySlugs: ["platform-modernization"],
    order: 3,
  },
  {
    slug: "manufacturing",
    name: "Manufacturing",
    tagline: "Digitized from shop floor to top floor",
    description:
      "IoT, MES integrations and predictive maintenance that turn production data into efficiency.",
    longDescription:
      "We connect machines, ERP and people into one operational picture — real-time monitoring, predictive maintenance and quality analytics that reduce downtime and waste.",
    icon: "factory",
    challenges: ["Isolated OT systems and data silos", "Unplanned downtime and maintenance costs", "Manual quality and compliance reporting", "Skills gap in workforce digitalization"],
    solutions: ["OT/IT integration and edge data collection", "Predictive maintenance models", "Automated quality and traceability workflows", "Operator-friendly digital tools and training"],
    benefits: ["Reduced downtime and waste", "Higher production efficiency", "Audit-ready traceability", "Data-driven continuous improvement"],
    technologies: ["IoT", "MQTT", "OPC-UA", "Kafka", "Python", "Edge computing", "Time-series DBs"],
    caseStudySlugs: ["field-service-platform"],
    order: 4,
  },
  {
    slug: "retail",
    name: "Retail",
    tagline: "Commerce experiences that convert",
    description:
      "Storefronts, loyalty and omnichannel platforms for retailers growing beyond the physical store.",
    longDescription:
      "Modern retail lives in the seams between online and in-store. We build headless storefronts, loyalty programs and unified inventory systems that make every channel feel like one brand.",
    icon: "store",
    challenges: ["Siloed online and in-store operations", "Rising acquisition costs and thin margins", "Customer churn without personalization", "Inventory accuracy across channels"],
    solutions: ["Unified commerce and real-time inventory", "Loyalty and retention programs", "Personalized recommendations and search", "Analytics-driven merchandising"],
    benefits: ["Higher conversion and repeat purchases", "One view of customers and stock", "Faster response to demand shifts", "Lower operational costs"],
    technologies: ["Headless commerce", "Stripe", "Algolia", "CDP", "Kafka", "React", "Kubernetes"],
    caseStudySlugs: ["ecommerce-storefront", "retail-loyalty-app"],
    order: 5,
  },
  {
    slug: "logistics",
    name: "Logistics",
    tagline: "Every shipment, tracked and optimized",
    description:
      "Fleet, route and warehouse technology that keeps goods moving — and customers informed.",
    longDescription:
      "Logistics runs on coordination. We build dispatch platforms, route optimization and real-time tracking that reduce costs and keep customers informed at every step.",
    icon: "truck",
    challenges: ["Rising fuel and operational costs", "Fragmented carrier and warehouse data", "Poor shipment visibility for customers", "Volatile demand and capacity planning"],
    solutions: ["Real-time tracking and visibility", "Route and load optimization", "Unified carrier integration layer", "Demand forecasting and capacity planning"],
    benefits: ["Lower cost per delivery", "Better on-time performance", "Proactive customer communication", "Scalable across fleets and geographies"],
    technologies: ["React Native", "GraphQL", "Kafka", "PostgreSQL", "GIS", "AWS", "Kubernetes"],
    caseStudySlugs: ["field-service-platform"],
    order: 6,
  },
  {
    slug: "real-estate",
    name: "Real Estate",
    tagline: "Digital platforms for property at scale",
    description:
      "Portals, CRM and transaction platforms for brokers, developers and property managers.",
    longDescription:
      "We build listing platforms, broker CRMs and tenant experience apps that digitize every stage of the property lifecycle — from lead to lease to retention.",
    icon: "building",
    challenges: ["Manual listing and transaction workflows", "Scattered lead and owner data", "Weak tenant engagement after signing", "Valuation and market data fragmentation"],
    solutions: ["Modern listing and marketplace platforms", "Integrated broker CRMs", "Tenant experience and renewal apps", "Market analytics dashboards"],
    benefits: ["Faster deal cycles", "Higher tenant retention", "One source of truth for agents", "Data-backed pricing and valuation"],
    technologies: ["React", "Node.js", "PostgreSQL", "Maps API", "AWS", "Stripe", "Power BI"],
    caseStudySlugs: ["platform-modernization"],
    order: 7,
  },
  {
    slug: "government",
    name: "Government & Public Sector",
    tagline: "Digital services citizens can trust",
    description:
      "Accessible, secure citizen services and internal platforms delivered with public-sector rigor.",
    longDescription:
      "Public services must be accessible, transparent and secure by default. We deliver citizen portals, permit and case management systems and internal tools that are usable by everyone and auditable at every step.",
    icon: "land-plot",
    challenges: ["Strict procurement and compliance rules", "Legacy systems with decades of data", "Accessibility requirements for all citizens", "Budget constraints and long timelines"],
    solutions: ["Accessible-by-design citizen services", "Phased modernization of legacy systems", "Open standards and interoperable APIs", "Transparent delivery with fixed milestones"],
    benefits: ["Faster, more accessible public services", "Reduced processing times and costs", "Interoperable, standards-based systems", "Full audit and transparency"],
    technologies: ["Open standards", "React", "Node.js", "PostgreSQL", "Accessibility (WCAG)", "Azure Government", "GitOps"],
    caseStudySlugs: ["cloud-migration-scale"],
    order: 8,
  },
  {
    slug: "ecommerce",
    name: "E-Commerce & D2C",
    tagline: "Direct-to-consumer at full speed",
    description:
      "Storefronts, subscriptions and growth engines for digital-first consumer brands.",
    longDescription:
      "D2C brands win on speed and experience. We build headless storefronts, subscription engines and retention programs that help modern brands scale beyond the platform they started on.",
    icon: "cart",
    challenges: ["Platform limits as brands scale", "Subscription and retention complexity", "Customer acquisition costs climbing", "International expansion friction"],
    solutions: ["Headless commerce migration", "Subscription and billing automation", "Retention and loyalty programs", "Multi-market storefronts with localization"],
    benefits: ["Unlimited customization and scale", "Predictable recurring revenue", "Higher LTV and repeat rate", "Global expansion ready"],
    technologies: ["Shopify Plus", "Commercetools", "Stripe Billing", "React", "Klaviyo", "Algolia"],
    caseStudySlugs: ["ecommerce-storefront", "retail-loyalty-app"],
    order: 9,
  },
];

export const industriesBySlug = Object.fromEntries(industries.map((i) => [i.slug, i])) as Record<string, Industry>;
