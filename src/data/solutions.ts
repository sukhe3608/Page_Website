import type { Solution } from "@/types/content";

/**
 * PLACEHOLDER CONTENT — replace all copy with real company information before launch.
 */
export const solutions: Solution[] = [
  {
    slug: "enterprise-solutions",
    name: "Enterprise Solutions",
    tagline: "Systems built for enterprise scale and governance",
    description:
      "Architecture, platforms and integrations that give large organizations reliability, security and speed at enterprise scale.",
    longDescription:
      "Enterprises face a double challenge: keep critical systems stable while moving faster than ever. We build the connective tissue — APIs, platforms, data flows and integrations — that lets large organizations operate as one modern company.\n\nOur work is governed by enterprise realities: compliance, auditability, legacy constraints and multi-team delivery. We bring the discipline that makes ambitious programs actually land.",
    icon: "layers",
    features: [
      "Enterprise architecture and modernization",
      "API platforms and integration hubs",
      "Identity and access management",
      "Data governance and security programs",
      "Multi-team delivery governance",
      "Legacy retirement and replatforming",
    ],
    industries: ["Finance", "Healthcare", "Government", "Manufacturing"],
    technologies: ["Kubernetes", "Event-driven architecture", "Keycloak", "Kafka", "Terraform", "Service Mesh"],
    caseStudySlugs: ["platform-modernization", "cloud-migration-scale"],
    order: 1,
  },
  {
    slug: "digital-transformation",
    name: "Digital Transformation",
    tagline: "From legacy processes to digital operations",
    description:
      "A structured roadmap to modernize operations, empower teams and unlock data-driven growth.",
    longDescription:
      "Digital transformation fails when it starts with technology. We start with your operating model: where work is slow, where data is trapped, where customers are underserved — and design a roadmap that moves the whole organization forward in phases that deliver real value.\n\nWe partner with change management, not against it, ensuring adoption keeps pace with delivery.",
    icon: "refresh",
    features: [
      "Digital maturity assessment",
      "Transformation roadmap and governance",
      "Process digitization",
      "Data-driven operating models",
      "Change management and training",
      "Legacy system modernization",
    ],
    industries: ["Retail", "Manufacturing", "Logistics", "Healthcare"],
    technologies: ["Cloud platforms", "Low-code orchestration", "Data platforms", "Workflow automation", "Integration suites"],
    caseStudySlugs: ["platform-modernization", "field-service-platform"],
    order: 2,
  },
  {
    slug: "ecommerce",
    name: "E-Commerce",
    tagline: "Storefronts and checkout built for conversion",
    description:
      "End-to-end e-commerce — from headless storefronts to payments, fulfillment and loyalty.",
    longDescription:
      "E-commerce is decided in milliseconds of page load and moments of checkout friction. We design and build storefronts and back-office systems that convert browsers into customers and customers into loyal advocates.\n\nHeadless architecture, sub-second performance, flexible merchandising and rock-solid payments — with analytics that tell you exactly what to improve next.",
    icon: "cart",
    features: [
      "Headless storefront development",
      "Checkout and payments optimization",
      "Subscription and loyalty programs",
      "Search and merchandising",
      "Order management integration",
      "Performance and CRO",
    ],
    industries: ["Retail", "Consumer Goods", "Fashion", "Groceries"],
    technologies: ["Shopify Plus", "Commercetools", "Stripe", "Algolia", "Klaviyo", "Headless CMS"],
    caseStudySlugs: ["ecommerce-storefront", "retail-loyalty-app"],
    order: 3,
  },
  {
    slug: "crm-solutions",
    name: "CRM Solutions",
    tagline: "One customer view across sales, marketing and service",
    description:
      "CRM platforms configured, integrated and adopted — so teams finally live in one source of truth.",
    longDescription:
      "Most CRM implementations fail at adoption, not configuration. We take a human-first approach: understand how your teams actually sell and serve, then configure a CRM that fits the work — with automation, integrations and training that make it the natural place to work.\n\nFrom Salesforce to HubSpot to custom builds, we deliver a single customer view that leadership and teams both trust.",
    icon: "users",
    features: [
      "Salesforce and HubSpot implementation",
      "Sales process automation",
      "Marketing and lead management",
      "Service and support workflows",
      "Data migration and deduplication",
      "Team enablement and training",
    ],
    industries: ["B2B", "Financial Services", "Technology", "Professional Services"],
    technologies: ["Salesforce", "HubSpot", "Zapier", "Pipedrive", "PowerBI", "SalesLoft"],
    caseStudySlugs: ["field-service-platform", "platform-modernization"],
    order: 4,
  },
  {
    slug: "process-automation",
    name: "Process Automation",
    tagline: "Workflows that run themselves",
    description:
      "Automate repetitive work end-to-end — approvals, onboarding, document flows and integrations.",
    longDescription:
      "Your team doesn't need more tools — it needs fewer manual steps. We map high-volume processes, then automate them end-to-end: forms, approvals, document flows, data entry and system handoffs.\n\nAutomation here is about compounding returns: every hour saved today is freed capacity for growth tomorrow. We measure and report those savings transparently.",
    icon: "workflow",
    features: [
      "Process discovery and opportunity mapping",
      "Workflow orchestration platforms",
      "Document and data entry automation",
      "Approval and exception management",
      "System-to-system integration",
      "RPA for legacy systems",
    ],
    industries: ["Finance", "Insurance", "Healthcare", "Manufacturing"],
    technologies: ["n8n", "Make", "UiPath", "AWS Step Functions", "Camunda", "DocuSign"],
    caseStudySlugs: ["ai-document-processing", "field-service-platform"],
    order: 5,
  },
  {
    slug: "ai-and-analytics",
    name: "AI & Analytics",
    tagline: "Answers, not dashboards",
    description:
      "Data platforms and AI that turn your information into decisions — measured in outcomes.",
    longDescription:
      "Dashboards nobody opens are a common failure of analytics. We build the opposite: systems where answers surface in the tools people already use — alerts, natural-language queries and AI-assisted analysis.\n\nUnder the hood: modern data platforms, governed pipelines and models trained on your context, so every insight is explainable and actionable.",
    icon: "bar-chart",
    features: [
      "Data platform and warehouse architecture",
      "Business intelligence and reporting",
      "Predictive analytics and forecasting",
      "Natural-language data querying",
      "AI document and media intelligence",
      "Data governance and quality",
    ],
    industries: ["Retail", "Finance", "Healthcare", "Logistics"],
    technologies: ["Snowflake", "BigQuery", "dbt", "Looker", "Power BI", "Python", "LangChain"],
    caseStudySlugs: ["ai-document-processing", "retail-loyalty-app"],
    order: 6,
  },
  {
    slug: "cloud-platforms",
    name: "Cloud Platforms",
    tagline: "The platform your product deserves",
    description:
      "Internal developer platforms, Kubernetes foundations and managed cloud operations.",
    longDescription:
      "A good cloud platform is invisible: environments on demand, pipelines that run themselves, security baked in. We design and operate internal platforms that give your teams autonomy without chaos.\n\nWith GitOps, policy-as-code and self-service provisioning, developers deploy in minutes while your platform team stays ahead of risk.",
    icon: "cloud",
    features: [
      "Internal developer platforms",
      "Kubernetes foundations and GitOps",
      "Self-service environments",
      "Policy-as-code and compliance",
      "Multi-cloud and hybrid strategies",
      "Managed platform operations",
    ],
    industries: ["Technology", "Financial Services", "Government", "E-Commerce"],
    technologies: ["AWS", "Azure", "GCP", "Kubernetes", "ArgoCD", "Crossplane", "Vault", "Prometheus"],
    caseStudySlugs: ["cloud-migration-scale", "platform-modernization"],
    order: 7,
  },
  {
    slug: "omnichannel",
    name: "Omnichannel Experiences",
    tagline: "One brand, every channel, no seams",
    description:
      "Consistent, connected customer experiences across web, mobile, in-store and beyond.",
    longDescription:
      "Customers don't think in channels — they think in journeys. We unify data and experience across touchpoints so a customer can start on mobile, continue in store and finish on web without friction or repeated questions.\n\nReal-time inventory, unified profiles and consistent design language make every channel feel like one product.",
    icon: "network",
    features: [
      "Channel strategy and architecture",
      "Unified customer profiles",
      "Real-time inventory and order sync",
      "In-store and web convergence",
      "Consistent design across channels",
      "Journey analytics and orchestration",
    ],
    industries: ["Retail", "Hospitality", "Financial Services", "Healthcare"],
    technologies: ["Event streaming", "Headless commerce", "CDP", "Mobile SDKs", "Kafka", "GraphQL"],
    caseStudySlugs: ["retail-loyalty-app", "ecommerce-storefront"],
    order: 8,
  },
];

export const solutionsBySlug = Object.fromEntries(solutions.map((s) => [s.slug, s])) as Record<string, Solution>;
