import type { Solution } from "@/types/content";

export const solutions: Solution[] = [
  {
    slug: "building-home-automation",
    name: "Building & Home Automation Solutions",
    tagline: "Intelligent automation for comfort, safety and efficiency",
    description:
      "Integrated automation for buildings and homes — lighting, HVAC, access, curtains and appliances unified into one smart system.",
    longDescription:
      "Automate your building or home for maximum comfort, safety and energy efficiency. We design and integrate automation systems that unify lighting, HVAC, access control, curtains and appliances into a single, intelligent platform.\n\nControllable from wall panels, mobile apps or voice assistants, our solutions adapt to your lifestyle while reducing energy use and enhancing security.",
    icon: "building",
    features: [
      "Integrated lighting and HVAC control",
      "Smart access and security automation",
      "Motorized curtains, shades and blinds",
      "Appliance and scene automation",
      "Mobile and voice control",
      "Energy efficiency optimization",
    ],
    industries: ["Residential", "Commercial", "Hospitality", "Offices"],
    technologies: ["KNX", "Smart Hubs", "Z-Wave", "Voice Control", "Motion Sensors", "BMS"],
    caseStudySlugs: [],
    order: 1,
  },
  {
    slug: "electronic-security-fire",
    name: "Electronic Security & Fire Solution",
    tagline: "Complete electronic security and fire protection in one integrated solution",
    description:
      "Integrated CCTV, fire alarm, access control and intrusion systems that protect your people, premises and assets.",
    longDescription:
      "Protect everyone and everything under one roof with integrated electronic security and fire solutions. We combine CCTV surveillance, fire alarm & detection, access control and intrusion systems into a unified, code-compliant solution.\n\nFrom design to installation and AMC, our solutions deliver complete peace of mind with live monitoring, remote access and instant alerts.",
    icon: "shield-check",
    features: [
      "Integrated CCTV and surveillance",
      "Fire alarm and smoke detection",
      "Access control and biometrics",
      "Intrusion detection and alarms",
      "Central monitoring and alerts",
      "Installation and AMC",
    ],
    industries: ["Commercial", "Industrial", "Institutional", "Residential"],
    technologies: ["Honeywell", "Hikvision", "Notifier", "Bosch", "Access Control", "Fire Panels"],
    caseStudySlugs: [],
    order: 2,
  },
  {
    slug: "physical-security-products",
    name: "Physical Security Products Solutions",
    tagline: "Perimeter and physical security products to stop threats at the boundary",
    description:
      "Gate barriers, bollards, solar fencing, tyre killers, turnstiles and UVSS — physical security that secures your perimeter.",
    longDescription:
      "Stop threats at the boundary with physical security products and solutions. We supply and install gate barriers, bollards, solar fencing, tyre killers, turnstiles, under vehicle scanning systems and more.\n\nThese layered physical controls secure vehicle and pedestrian access for high-protection facilities.",
    icon: "layers",
    features: [
      "Gate and boom barriers",
      "Bollards and crash protection",
      "Solar fencing systems",
      "Tyre killer barricades",
      "Turnstiles and pedestrian gates",
      "Under vehicle scanning (UVSS)",
    ],
    industries: ["Government", "Industrial", "Commercial", "Campuses"],
    technologies: ["Bollards", "Boom Barriers", "Tyre Killers", "Turnstiles", "UVSS", "Solar Fencing"],
    caseStudySlugs: [],
    order: 3,
  },
  {
    slug: "communication-systems",
    name: "Communication Systems Solution",
    tagline: "Reliable communication — video conferencing, PA, intercom and nurse call",
    description:
      "Video conferencing, public address, intercom and nurse call systems that keep people connected and informed.",
    longDescription:
      "Keep people connected and informed with professional communication systems. We deliver video conferencing, public address & voice evacuation, intercom and nurse call solutions for offices, buildings and facilities.\n\nFrom seamless meetings to life-safety announcements and patient communication, our solutions are reliable, clear and easy to operate.",
    icon: "network",
    features: [
      "Video conferencing and AV rooms",
      "Public address & voice evacuation",
      "Intercom and building communication",
      "Nurse call and alerts",
      "Clear, reliable audio",
      "Installation and support",
    ],
    industries: ["Corporate", "Healthcare", "Educational", "Hospitality"],
    technologies: ["Video Conferencing", "PA Systems", "Intercom", "Nurse Call", "AV Integration"],
    caseStudySlugs: [],
    order: 4,
  },
  {
    slug: "lighting-energy",
    name: "Lighting and Energy Solution",
    tagline: "Intelligent lighting and energy management for measurable savings",
    description:
      "Lighting control and smart energy management that cut costs and improve sustainability.",
    longDescription:
      "Reduce costs and improve sustainability with intelligent lighting and energy solutions. We deliver lighting control, smart metering and energy management systems that monitor, automate and optimize consumption.\n\nWith real-time visibility and automation, you gain measurable savings and a more sustainable operation.",
    icon: "zap",
    features: [
      "Intelligent lighting control",
      "Daylight and occupancy sensing",
      "Energy monitoring and analytics",
      "Smart metering",
      "Automated load control",
      "Energy savings and reporting",
    ],
    industries: ["Commercial", "Industrial", "Institutional", "Residential"],
    technologies: ["DALI", "KNX", "Smart Meters", "EMS", "IoT Sensors", "Energy Analytics"],
    caseStudySlugs: [],
    order: 5,
  },
  {
    slug: "cabinet-alarm-locks",
    name: "Cabinet Alarm Locks Solution",
    tagline: "Secure cabinets and lockers with intelligent alarm lock systems",
    description:
      "Cabinet alarm locks and security solutions that protect sensitive items and equipment.",
    longDescription:
      "Protect sensitive equipment, documents and valuables with cabinet alarm lock solutions. We supply and install intelligent alarm locks for cabinets, lockers and equipment enclosures across organizations.\n\nOur solutions alert you to unauthorized access and secure critical assets with reliable, easily managed locking.",
    icon: "landmark",
    features: [
      "Cabinet and locker alarm locks",
      "Unauthorized access alerts",
      "Key and electronic locking",
      "Centralized management",
      "Asset protection",
      "Installation and support",
    ],
    industries: ["Government", "Defense", "Institutional", "Corporate"],
    technologies: ["Alarm Locks", "Electronic Locks", "Asset Protection", "Access Alert"],
    caseStudySlugs: [],
    order: 6,
  },
];

export const solutionsBySlug = Object.fromEntries(solutions.map((s) => [s.slug, s])) as Record<string, Solution>;