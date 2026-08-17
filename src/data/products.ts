import type { Product } from "@/types/content";

/**
 * PLACEHOLDER CONTENT — placeholder product suite for the NovaCore brand. Replace with real products before launch.
 */
export const products: Product[] = [
  {
    slug: "novaflow",
    name: "NovaFlow",
    category: "Workflow Automation",
    tagline: "The workflow platform that runs your operations",
    description:
      "Design, automate and monitor business workflows without writing code — approvals, onboarding, document flows and system handoffs in one place.",
    longDescription:
      "NovaFlow is a visual workflow automation platform built for operations teams who are tired of chasing spreadsheets and email chains. Drag-and-drop builders, human approval steps, and 150+ integrations make complex processes simple to run.\n\nEvery workflow ships with real-time monitoring, audit trails and SLA alerts, so you always know where work is stuck — and what to fix next.",
    icon: "workflow",
    features: [
      "Visual workflow builder",
      "Human approvals and task routing",
      "150+ pre-built integrations",
      "Real-time monitoring and SLA alerts",
      "Full audit trail and compliance export",
      "Embedded analytics on every flow",
    ],
    metrics: [
      { value: "68%", label: "avg. process time saved" },
      { value: "150+", label: "integrations" },
      { value: "99.9%", label: "uptime SLA" },
    ],
    integrations: ["Slack", "Salesforce", "HubSpot", "Google Workspace", "Microsoft 365", "Stripe", "DocuSign", "Zapier"],
    security: ["SOC 2 Type II certified", "SSO and SAML", "Role-based access control", "Encrypted at rest and in transit", "Regional data residency", "Automated backups"],
    screenshots: [
      { title: "Workflow canvas", description: "Drag, connect and publish processes visually with live validation.", tint: "blue" },
      { title: "Approval center", description: "Every pending approval, one inbox, full context.", tint: "navy" },
      { title: "Analytics", description: "Cycle time, bottlenecks and SLA risk at a glance.", tint: "violet" },
    ],
    caseStudySlugs: ["ai-document-processing", "field-service-platform"],
    faqs: [
      { q: "How long does it take to deploy NovaFlow?", a: "Most teams are live in under two weeks. We handle setup, connect your systems and train your process owners as part of onboarding." },
      { q: "Do I need developers to build workflows?", a: "No. The visual builder covers the vast majority of processes. If you need custom logic, our API and webhooks have you covered." },
      { q: "Can NovaFlow work with our existing tools?", a: "Yes — 150+ pre-built integrations plus a generic REST/webhook layer cover almost any stack." },
    ],
    order: 1,
  },
  {
    slug: "novapulse",
    name: "NovaPulse",
    category: "Real-time Analytics",
    tagline: "Your business, measured in real time",
    description:
      "A modern analytics platform that turns operational data into live dashboards, alerts and natural-language answers.",
    longDescription:
      "NovaPulse connects to your data sources and delivers answers in seconds — live KPIs, anomaly alerts and natural-language questions without SQL. Built for teams that need today's numbers, not last month's report.\n\nFrom real-time dashboards embedded in your product to executive pulse views, NovaPulse adapts to every audience.",
    icon: "bar-chart",
    features: [
      "Live dashboards and KPI tracking",
      "Natural-language queries",
      "Anomaly detection and alerts",
      "Embeddable analytics SDK",
      "Forecasting and what-if analysis",
      "Data governance controls",
    ],
    metrics: [
      { value: "<1s", label: "median query time" },
      { value: "40+", label: "native connectors" },
      { value: "24/7", label: "monitoring and alerts" },
    ],
    integrations: ["Snowflake", "BigQuery", "PostgreSQL", "Salesforce", "Stripe", "Segment", "Datadog", "Google Analytics"],
    security: ["SOC 2 Type II certified", "Row-level security", "SSO and MFA", "Field-level encryption", "Data residency options", "Full audit logging"],
    screenshots: [
      { title: "Live KPIs", description: "Business-critical metrics, updated in real time.", tint: "navy" },
      { title: "Ask NovaPulse", description: "Ask questions in plain language, get answers with context.", tint: "blue" },
      { title: "Anomaly alerts", description: "Be first to know when something shifts.", tint: "teal" },
    ],
    caseStudySlugs: ["retail-loyalty-app", "cloud-migration-scale"],
    faqs: [
      { q: "What data sources can NovaPulse connect to?", a: "40+ native connectors cover the major warehouses, SaaS tools and databases, plus a generic SQL/API connector for the rest." },
      { q: "Is NovaPulse suitable for non-technical teams?", a: "Absolutely. Natural-language questions mean anyone can query data without SQL, and dashboards can be shared with one click." },
      { q: "How does pricing scale with volume?", a: "Pricing is tiered by data volume and seats, so you start small and scale as your usage grows — with no overage surprises." },
    ],
    order: 2,
  },
  {
    slug: "novadesk",
    name: "NovaDesk",
    category: "Customer Service Platform",
    tagline: "Support that feels instant",
    description:
      "Omnichannel helpdesk with AI assistance — tickets, chat, knowledge and automations in one calm workspace.",
    longDescription:
      "NovaDesk brings every customer conversation into one workspace: email, chat, social and phone. AI drafts answers, routes tickets and suggests knowledge articles, so agents resolve faster and customers never repeat themselves.\n\nWith customer satisfaction scores and CSAT built in, support finally has a seat at the strategy table.",
    icon: "life-buoy",
    features: [
      "Omnichannel inbox",
      "AI-drafted replies and summarization",
      "Automated routing and macros",
      "Knowledge base with search",
      "SLA and CSAT tracking",
      "Custom fields and workflows",
    ],
    metrics: [
      { value: "41%", label: "avg. faster first response" },
      { value: "30+", label: "channels supported" },
      { value: "99.9%", label: "uptime SLA" },
    ],
    integrations: ["Slack", "Salesforce", "Shopify", "WhatsApp", "Zendesk", "Intercom", "Zoom", "Jira"],
    security: ["SOC 2 Type II certified", "GDPR-ready data handling", "SSO and SAML", "Role-based access", "Encryption everywhere", "GDPR data portability"],
    screenshots: [
      { title: "Unified inbox", description: "Every channel, one queue, full context.", tint: "teal" },
      { title: "AI assistant", description: "Draft, summarize and auto-route with confidence.", tint: "blue" },
      { title: "CSAT insights", description: "Customer sentiment, trends and coaching signals.", tint: "navy" },
    ],
    caseStudySlugs: ["ecommerce-storefront", "retail-loyalty-app"],
    faqs: [
      { q: "Which channels does NovaDesk support?", a: "30+ channels out of the box — email, web chat, WhatsApp, social DMs and more — all in one inbox." },
      { q: "How accurate is the AI assistance?", a: "The AI drafts and summarizes based on your knowledge base and conversation history. Every suggestion is clearly marked and requires agent confirmation." },
      { q: "Can we migrate from our current helpdesk?", a: "Yes. Our team migrates tickets, users and history from Zendesk, Intercom and most major platforms at no extra cost." },
    ],
    order: 3,
  },
  {
    slug: "novashield",
    name: "NovaShield",
    category: "Security Platform",
    tagline: "Security that doesn't slow you down",
    description:
      "Continuous vulnerability management, compliance checks and threat detection woven into your delivery pipeline.",
    longDescription:
      "NovaShield makes security a developer-friendly part of the software lifecycle: scans every commit, validates infrastructure as code, tracks vulnerabilities to fix and produces compliance evidence automatically.\n\nYour security team gets one view of risk across repos, cloud and dependencies — with remediation guidance your developers will actually follow.",
    icon: "shield-check",
    features: [
      "Dependency and container scanning",
      "Infrastructure-as-code validation",
      "Continuous compliance checks",
      "Threat detection and alerting",
      "Fix-first remediation workflows",
      "Automated compliance evidence",
    ],
    metrics: [
      { value: "-52%", label: "avg. time to remediate" },
      { value: "100%", label: "pipeline coverage" },
      { value: "500+", label: "compliance checks" },
    ],
    integrations: ["GitHub", "GitLab", "Kubernetes", "AWS", "Azure", "GCP", "Jira", "Slack"],
    security: ["SOC 2 Type II certified", "Zero-trust architecture", "Encrypted at rest and in transit", "SSO and SAML", "Regional data residency", "Annual third-party audits"],
    screenshots: [
      { title: "Risk overview", description: "One prioritized view of exposure across your stack.", tint: "navy" },
      { title: "Pipeline scans", description: "Gate builds with automated security checks.", tint: "violet" },
      { title: "Compliance center", description: "Evidence collection and reporting on demand.", tint: "blue" },
    ],
    caseStudySlugs: ["cloud-migration-scale", "platform-modernization"],
    faqs: [
      { q: "How does NovaShield fit into our DevOps workflow?", a: "It plugs into your CI/CD as a gate: scans run on every commit and pipeline job, with failures reported directly to the developer." },
      { q: "Which compliance frameworks are covered?", a: "NovaShield includes 500+ checks spanning SOC 2, ISO 27001, GDPR and OWASP mapping, with more added quarterly." },
      { q: "Will it slow down our builds?", a: "No — scans run in parallel with your pipeline using incremental analysis, adding seconds rather than minutes." },
    ],
    order: 4,
  },
];

export const productsBySlug = Object.fromEntries(products.map((p) => [p.slug, p])) as Record<string, Product>;
