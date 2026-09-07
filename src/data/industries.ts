import type { Industry } from "@/types/content";

export const industries: Industry[] = [
  {
    slug: "corporate-enterprise",
    name: "Corporate & Enterprise",
    tagline: "Security and automation for modern enterprises",
    description:
      "CCTV, access control, fire safety and BMS solutions that protect enterprise offices and operations.",
    longDescription:
      "Enterprises need reliable, integrated security and automation that scale across sites. We deliver CCTV, access control, fire alarm, BMS and networking solutions for corporate offices and enterprises.\n\nOur systems protect people, assets and data while improving operational efficiency and compliance.",
    icon: "building",
    challenges: ["Security across multiple office sites", "Compliance and safety regulations", "Downtime and operational risk", "Managing complex, siloed systems"],
    solutions: ["Integrated CCTV and access control", "Compliant fire safety systems", "BMS and automation for efficiency", "Reliable networking infrastructure"],
    benefits: ["Protection of people and assets", "Regulatory compliance", "Operational efficiency", "Centralized management"],
    technologies: ["Honeywell", "Hikvision", "Bosch", "Access Control", "BMS", "Networking"],
    caseStudySlugs: [],
    order: 1,
  },
  {
    slug: "hospitality-retail",
    name: "Hospitality, Retail & Lifestyle",
    tagline: "Safety and smart experiences for hotels, malls and retail",
    description:
      "Fire safety, CCTV, PA and automation solutions that protect guests and enhance the experience.",
    longDescription:
      "Hospitality and retail demand a balance of safety, comfort and seamless experience. We provide fire alarm, CCTV, public address, lighting control and automation for hotels, resorts, malls and retail spaces.\n\nOur solutions protect guests and staff while creating smart, comfortable and safe environments.",
    icon: "store",
    challenges: ["Guest and staff safety around the clock", "Fire and life-safety compliance", "Managing large public spaces", "Enhancing guest experience"],
    solutions: ["Fire alarm and voice evacuation", "CCTV and surveillance coverage", "PA and background music systems", "Lighting and room automation"],
    benefits: ["Guest and asset protection", "Life-safety compliance", "Enhanced guest experience", "Efficient facility management"],
    technologies: ["Fire Panels", "CCTV", "PA Systems", "Lighting Control", "Room Automation"],
    caseStudySlugs: [],
    order: 2,
  },
  {
    slug: "automotive-industrial",
    name: "Automotive & Industrial",
    tagline: "Industrial automation and security for manufacturing and plants",
    description:
      "Industrial automation, CCTV, access control and perimeter security for plants and manufacturing.",
    longDescription:
      "Industrial facilities need robust automation and security to operate safely and efficiently. We deliver industrial automation, CCTV, access control, perimeter fencing and fire safety for automotive and industrial plants.\n\nOur solutions improve productivity, protect personnel and enhance process control.",
    icon: "factory",
    challenges: ["Harsh and hazardous environments", "Process control and product quality", "Secure access and perimeter", "Compliance and safety standards"],
    solutions: ["PLC and SCADA automation", "Heavy-duty CCTV surveillance", "Access control and gate barriers", "Solar fencing and perimeter security"],
    benefits: ["Higher productivity and efficiency", "Enhanced worker safety", "Secure facility access", "Compliant operations"],
    technologies: ["PLC", "SCADA", "CCTV", "Access Control", "Solar Fencing", "Industrial IoT"],
    caseStudySlugs: [],
    order: 3,
  },
  {
    slug: "government-defence",
    name: "Government & Defence",
    tagline: "High-security systems for government and defence facilities",
    description:
      "UVSS, baggage scanners, access control, CCTV and perimeter security for high-protection facilities.",
    longDescription:
      "Government and defence facilities demand the highest levels of security. We deliver UVSS, baggage scanners, access control, CCTV and perimeter security for ministries, defence establishments and public institutions.\n\nOur high-security solutions meet stringent requirements and are trusted by ministries, airports and hospitals.",
    icon: "land-plot",
    challenges: ["High-security requirements", "Physical and electronic threats", "Strict compliance standards", "Controlling pedestrian and vehicle access"],
    solutions: ["Under vehicle scanning (UVSS)", "Baggage and X-ray scanners", "Access control and turnstiles", "Multi-layered CCTV and alarm systems"],
    benefits: ["Enhanced physical security", "Controlled vehicle and pedestrian access", "Threat detection and deterrence", "Audit-ready compliance"],
    technologies: ["UVSS", "Baggage Scanners", "Access Control", "Turnstiles", "CCTV", "Perimeter Security"],
    caseStudySlugs: [],
    order: 4,
  },
  {
    slug: "technology-pharma-research",
    name: "Technology, Pharma & Research",
    tagline: "Secure, compliant environments for labs, pharma and tech",
    description:
      "Access control, CCTV, fire safety and automation for labs, pharma and research facilities.",
    longDescription:
      "Pharma and research facilities require controlled, compliant and secure environments. We deliver access control, CCTV, fire safety, networking and automation for labs, pharma plants and research institutions.\n\nOur solutions protect sensitive areas, support compliance and keep operations running reliably.",
    icon: "database",
    challenges: ["Restricted area access control", "Regulatory and GMP compliance", "Protecting sensitive equipment and data", "Reliable, contamination-safe operations"],
    solutions: ["Biometric access control", "Structured CCTV and monitoring", "Fire alarm and suppression", "Reliable networking and automation"],
    benefits: ["Controlled access to sensitive zones", "Regulatory compliance", "Protection of equipment and data", "Reliable operations"],
    technologies: ["Access Control", "CCTV", "Fire Panels", "Networking", "BMS"],
    caseStudySlugs: [],
    order: 5,
  },
  {
    slug: "real-estate-infrastructure",
    name: "Real Estate & Infrastructure",
    tagline: "Smart security and automation for properties and infrastructure",
    description:
      "CCTV, access control, gate barriers, BMS and fire safety for real estate and infrastructure projects.",
    longDescription:
      "Protect and automate your properties with comprehensive security and building management. We deliver CCTV, access control, gate barriers, BMS and fire safety for residential, commercial and infrastructure projects.\n\nFrom gated communities to commercial buildings, our solutions add security, convenience and value.",
    icon: "building",
    challenges: ["Security across large properties", "Managing vehicle and pedestrian access", "Energy and building management", "Ensuring resident safety"],
    solutions: ["Comprehensive CCTV coverage", "Gate barriers and access control", "BMS and energy management", "Fire alarm and life safety"],
    benefits: ["Enhanced property security", "Controlled access for residents", "Efficient building management", "Increased property value"],
    technologies: ["CCTV", "Gate Barriers", "Access Control", "BMS", "Fire Safety"],
    caseStudySlugs: [],
    order: 6,
  },
];

export const industriesBySlug = Object.fromEntries(industries.map((i) => [i.slug, i])) as Record<string, Industry>;