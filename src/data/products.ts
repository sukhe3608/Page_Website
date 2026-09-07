import type { Product } from "@/types/content";

export const products: Product[] = [
  {
    slug: "cctv-surveillance",
    name: "CCTV Surveillance",
    category: "Electronic Security",
    tagline: "High-resolution cameras with remote monitoring that protect what matters",
    description:
      "HD IP cameras, NVRs and mobile-app viewing for reliable 24/7 video surveillance and evidence.",
    longDescription:
      "Protect what matters most with our CCTV surveillance products. We supply high-resolution IP and HD cameras, NVR and DVR recorders and complete monitoring systems for commercial, industrial and residential spaces.\n\nEvery system supports live and remote viewing from your phone, motion detection, night vision and reliable evidence storage.",
    icon: "shield-check",
    features: [
      "HD and IP security cameras",
      "NVR and DVR recording systems",
      "Night vision and motion detection",
      "Mobile app live and remote viewing",
      "Wide dynamic range imaging",
      "Reliable evidence storage",
    ],
    metrics: [
      { value: "4K", label: "ultra-HD resolution support" },
      { value: "24/7", label: "recording and monitoring" },
      { value: "100%", label: "remote mobile access" },
    ],
    integrations: ["Mobile App", "NVR", "DVR", "POE Switch", "Video Analytics", "Remote Monitor"],
    security: ["Encrypted remote access", "User-based access control", "Secure local storage", "Motion-triggered recording", "Tamper alerts", "Backup and retention options"],
    screenshots: [
      { title: "Live view", description: "Monitor every camera from a single live dashboard.", tint: "blue" },
      { title: "Mobile access", description: "Watch your premises from anywhere with the mobile app.", tint: "navy" },
      { title: "Playback", description: "Search and review recordings with ease.", tint: "teal" },
    ],
    caseStudySlugs: [],
    faqs: [
      { q: "Can I view cameras on my phone?", a: "Yes. Our CCTV systems include mobile app access for live view, playback and instant alerts from anywhere." },
      { q: "Do you offer camera maintenance?", a: "Yes, we provide AMC services covering periodic checks, cleaning, firmware updates and prompt service response." },
      { q: "Which brands do you supply?", a: "We are authorized distributors for Hikvision and other leading brands, ensuring genuine, high-end equipment." },
    ],
    order: 1,
  },
  {
    slug: "fire-alarm",
    name: "Fire Alarm & Detection",
    category: "Fire Protection",
    tagline: "Addressable fire detection that gives you early warning and total compliance",
    description:
      "Addressable fire alarm panels, smoke and heat detectors with remote monitoring and AMC.",
    longDescription:
      "Detect fire early with our addressable fire alarm and detection products. We supply fire alarm panels, smoke and heat detectors, manual call points and alarms from globally certified brands.\n\nWith live monitoring, remote access and arm/disarm control, our systems ensure compliance and complete peace of mind.",
    icon: "shield-check",
    features: [
      "Addressable fire alarm panels",
      "Smoke and heat detectors",
      "Manual call points",
      "Voice evacuation integration",
      "Remote monitoring and alerts",
      "Arm/disarm control",
    ],
    metrics: [
      { value: "24/7", label: "fire detection" },
      { value: "100%", label: "code-compliant installs" },
      { value: "4.9/5", label: "customer rating" },
    ],
    integrations: ["Fire Panel", "Smoke Detectors", "Call Points", "BMS", "PA System", "Remote Monitoring"],
    security: ["Addressable zone mapping", "Event log and history", "Battery backup", "Supervision monitoring", "Tamper detection", "Remote status alerts"],
    screenshots: [
      { title: "System overview", description: "Monitor detectors and zones from a central panel.", tint: "navy" },
      { title: "Zone mapping", description: "Clear addressable identification for fast response.", tint: "blue" },
      { title: "Alerts", description: "Instant notification of any alarm condition.", tint: "violet" },
    ],
    caseStudySlugs: [],
    faqs: [
      { q: "Which fire alarm brands do you install?", a: "We are authorized distributors for Honeywell, Notifier, Edwards, Bosch and Mircom fire alarm systems." },
      { q: "Can you monitor my system remotely?", a: "Yes. Our systems support live monitoring, remote access and instant alerts for rapid response." },
      { q: "Do you provide annual maintenance?", a: "Yes, we offer AMC services covering testing, preventive maintenance and priority support." },
    ],
    order: 2,
  },
  {
    slug: "access-control",
    name: "Access Control",
    category: "Physical Security",
    tagline: "Biometric, RFID and card access that controls who enters your premises",
    description:
      "Fingerprint, face and card access systems with attendance tracking and secure entry management.",
    longDescription:
      "Control access with biometric, RFID and card-based security products. We supply fingerprint and face recognition, RFID readers and card access systems with attendance tracking.\n\nIntegrated with CCTV and fire safety, our access control products deliver secure, auditable entry for any facility.",
    icon: "landmark",
    features: [
      "Fingerprint and face recognition",
      "RFID and card readers",
      "Door access and lock control",
      "Attendance tracking and reporting",
      "Multi-site and cloud management",
      "Integration with CCTV and alarms",
    ],
    metrics: [
      { value: "<1s", label: "recognition time" },
      { value: "10k+", label: "user capacity" },
      { value: "100%", label: "audit trail accuracy" },
    ],
    integrations: ["Biometric Readers", "RFID", "Card Readers", "HR Software", "CCTV", "Cloud Management"],
    security: ["Encrypted credentials", "Role-based access", "Audit trail logging", "Anti-passback", "Tamper detection", "Backup power"],
    screenshots: [
      { title: "Access devices", description: "Fingerprint, face and card readers for any door.", tint: "navy" },
      { title: "Management console", description: "Control users, doors and access policies centrally.", tint: "blue" },
      { title: "Attendance reports", description: "Accurate time and attendance reporting.", tint: "teal" },
    ],
    caseStudySlugs: [],
    faqs: [
      { q: "Which access technologies do you support?", a: "We support biometric (fingerprint, face, Aadhaar), RFID, card and PIN-based access control." },
      { q: "Can it integrate with attendance?", a: "Yes, our systems integrate with HR and payroll for seamless attendance tracking." },
      { q: "Do you offer maintenance?", a: "Yes, we provide AMC covering preventive maintenance and priority support." },
    ],
    order: 3,
  },
  {
    slug: "solar-fencing",
    name: "Solar Fencing",
    category: "Perimeter Security",
    tagline: "Solar-powered electric fencing for reliable 24/7 perimeter protection",
    description:
      "High-security solar fencing that deters intruders and protects your perimeter with low running costs.",
    longDescription:
      "Secure your perimeter with our solar-powered electric fencing products. Designed for industrial, commercial and residential applications, our solar fencing deters intruders with a powerful yet safe deterrent.\n\nSolar-powered and low-maintenance, it delivers reliable 24/7 protection with alarm integration.",
    icon: "shield-check",
    features: [
      "Solar-powered energizers",
      "High-security fence wiring",
      "Perimeter intrusion detection",
      "Alarm and alert integration",
      "Deterrent and intercept capability",
      "Low-maintenance operation",
    ],
    metrics: [
      { value: "24/7", label: "perimeter protection" },
      { value: "0", label: "electricity cost" },
      { value: "100%", label: "solar powered" },
    ],
    integrations: ["Solar Panels", "Energizers", "Alarm System", "CCTV", "Perimeter Sensors", "Mobile Alerts"],
    security: ["High voltage, low current pulses", "Tamper detection", "Alarm integration", "Weather-resistant", "Deterrent signage", "Backup capability"],
    screenshots: [
      { title: "Fence layout", description: "Perimeter fencing designed to your site.", tint: "teal" },
      { title: "Energizer", description: "Solar-charged, high-performance energizer unit.", tint: "navy" },
      { title: "Alerts", description: "Instant notification on any tampering or breach.", tint: "blue" },
    ],
    caseStudySlugs: [],
    faqs: [
      { q: "How does solar fencing work?", a: "Solar panels charge the energizer which sends safe but powerful pulses through the fence, deterring intruders and triggering alarms." },
      { q: "Is it safe?", a: "Yes. The pulses are high voltage but low current, delivering a deterrent shock without being dangerous." },
      { q: "Do you provide onsite service?", a: "Yes, we provide onsite installation and service for solar fencing systems." },
    ],
    order: 4,
  },
  {
    slug: "public-address",
    name: "Public Address & Voice Evacuation",
    category: "Communication Systems",
    tagline: "Clear announcements and life-safety voice evacuation across your facility",
    description:
      "PA systems, zone controllers and loudspeakers for announcements, background music and emergency alerts.",
    longDescription:
      "Communicate clearly and safely with our public address and voice evacuation products. We supply amplifiers, loudspeakers, zone controllers and mic stations for announcements, background music and emergency alerting.\n\nIntegrated with fire alarm systems, our PA products ensure critical announcements reach every corner instantly.",
    icon: "zap",
    features: [
      "PA loudspeakers and amplifiers",
      "Voice evacuation and alerting",
      "Zone-based control",
      "Background music and announcements",
      "Fire alarm interface",
      "Clear, reliable audio",
    ],
    metrics: [
      { value: "100%", label: "zone coverage" },
      { value: "24/7", label: "emergency readiness" },
      { value: "0s", label: "alert latency" },
    ],
    integrations: ["Amplifiers", "Loudspeakers", "Zone Controllers", "Fire Panel", "Mic Stations", "BGM"],
    security: ["Priority override", "Fire alarm interface", "Battery backup", "Zone isolation", "System supervision", "Emergency power"],
    screenshots: [
      { title: "Zone setup", description: "Targeted announcements to specific zones.", tint: "blue" },
      { title: "Amplifier rack", description: "Reliable amplification for clear audio.", tint: "navy" },
      { title: "Emergency modes", description: "Automated voice evacuation on fire alarm.", tint: "violet" },
    ],
    caseStudySlugs: [],
    faqs: [
      { q: "Can the PA system announce in emergencies?", a: "Yes, our voice evacuation systems integrate with fire alarm panels for automated emergency announcements." },
      { q: "Do you provide maintenance?", a: "Yes, we offer AMC covering speaker servicing, testing and priority support." },
    ],
    order: 5,
  },
  {
    slug: "gate-barrier",
    name: "Gate Barrier & Boom Barrier",
    category: "Vehicle Access",
    tagline: "Automatic boom barriers that control vehicle entry with ease",
    description:
      "Automatic boom barriers with RFID, ANPR and safety sensors for secure, efficient vehicle access.",
    longDescription:
      "Control vehicle entry with our automatic gate and boom barrier products. We supply automatic barriers with RFID, remote and ANPR-based access for parking lots, gated communities, offices and industrial sites.\n\nIntegrated with vehicle detection and safety sensors, our barriers deliver secure, hands-free vehicle access.",
    icon: "building",
    features: [
      "Automatic boom barriers",
      "Swing and sliding gates",
      "RFID and remote control",
      "ANPR integration",
      "Vehicle detection and safety sensors",
      "Smooth, reliable operation",
    ],
    metrics: [
      { value: "3-12s", label: "barrier cycle time" },
      { value: "100k+", label: "cycles durability" },
      { value: "24/7", label: "operation" },
    ],
    integrations: ["RFID", "ANPR", "Remote Controls", "Loop Detectors", "Safety Sensors", "Access Control"],
    security: ["Breakaway arm", "Safety sensors", "Manual override", "Weather-resistant", "Anti-crash", "Audit logging"],
    screenshots: [
      { title: "Entry setup", description: "Barrier with ANPR access at the gate.", tint: "navy" },
      { title: "Control", description: "Automated and remote-controlled access.", tint: "blue" },
      { title: "Integration", description: "Seamless link to access control systems.", tint: "teal" },
    ],
    caseStudySlugs: [],
    faqs: [
      { q: "Can barriers integrate with ANPR?", a: "Yes, we integrate boom barriers with ANPR and RFID systems for automated vehicle recognition." },
      { q: "Do you provide maintenance?", a: "Yes, we offer AMC covering servicing and priority response for continuous operation." },
    ],
    order: 6,
  },
];

export const productsBySlug = Object.fromEntries(products.map((p) => [p.slug, p])) as Record<string, Product>;