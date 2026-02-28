export const proposalData = {
  hero: {
    name: "Humam",
    valueProp:
      "I migrate behavioral health websites from Squarespace to WordPress — preserving SEO, restructuring content for clarity, and building a site that earns trust before a visitor even reads a word. I've already built Mindwell's redesign for your review in Tab 1.",
    badge: "Built this demo for your project",
    stats: [
      { value: "24+", label: "Projects Shipped" },
      { value: "< 48hr", label: "Demo Turnaround" },
      { value: "15+", label: "Industries" },
    ],
  },

  portfolioProjects: [
    {
      name: "Southfield Healthcare",
      description:
        "Healthcare operations platform with patient management, appointment scheduling, provider dashboards, and clinical analytics — replacing disconnected spreadsheet workflows with one cohesive interface.",
      outcome:
        "Consolidated patient scheduling and management into a single interface, replacing disconnected spreadsheet workflows",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui", "Recharts"],
      url: "https://southfield-healthcare.vercel.app",
      relevance:
        "Direct domain match — built for a clinic with similar patient-facing and operations-facing content needs.",
    },
    {
      name: "Tinnitus Therapy SaaS",
      description:
        "Multi-clinic tinnitus therapy management platform with patient intake, treatment protocols, session tracking, and outcome dashboards — built for a regulated healthcare context with privacy requirements baked in.",
      outcome:
        "Multi-clinic SaaS covering the full patient journey — intake, protocol assignment, session tracking, and outcome dashboards",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui", "Recharts"],
      url: "https://tinnitus-therapy.vercel.app",
      relevance:
        "Shows I understand healthcare content architecture — structured service pages, intake flows, and trust-building copy.",
    },
    {
      name: "Lead Intake CRM",
      description:
        "Custom lead intake and automation system with a public intake form, CRM dashboard, lead scoring, pipeline management, and configurable automation rules — from first contact to active client.",
      outcome:
        "End-to-end lead flow — public intake form to scored pipeline with configurable automation rules",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui"],
      url: null,
      relevance:
        "Behavioral health sites live or die by their contact/intake forms — this shows I build those well.",
    },
    {
      name: "MedRecord AI",
      description:
        "AI-powered medical record summarization tool that extracts key clinical data, diagnoses, medications, and treatment timelines from patient records — structured output from unstructured documents.",
      outcome:
        "Document processing pipeline that extracts structured clinical data and generates a readable timeline summary",
      tech: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "shadcn/ui",
        "AI extraction pipeline",
      ],
      url: "https://medrecord-ai-delta.vercel.app",
      relevance:
        "Healthcare domain experience — understanding PHI sensitivity and clinical content presentation.",
    },
  ],

  approach: [
    {
      step: "01",
      title: "Audit & Map",
      description:
        "Start with a full crawl of the existing Squarespace site — map every URL, page, image, and form. Identify SEO priorities: which pages rank, what backlinks exist, and where the 301 redirect plan needs the most care. One mishandled redirect can cost months of organic traffic.",
      timeline: "Days 1–3",
    },
    {
      step: "02",
      title: "Design & Prototype",
      description:
        "Build WordPress mockups aligned with Mindwell's clinical brand — calm, trustworthy, accessible. Get approval on layout and copy structure before a single line of theme code is written. No surprises mid-build.",
      timeline: "Days 4–8",
    },
    {
      step: "03",
      title: "Build & Migrate",
      description:
        "Develop the WordPress site with custom theme (ACF for flexible content, Yoast for SEO metadata). Migrate all content with HIPAA-safe handling of any contact form data. Set up 301 redirects, test on staging before anything goes near the live domain.",
      timeline: "Days 9–18",
    },
    {
      step: "04",
      title: "Launch & Monitor",
      description:
        "Zero-downtime DNS cutover. Submit updated sitemap to Google Search Console, monitor crawl coverage for 2 weeks. Any ranking drops or crawl errors get fixed fast — not 'in the next sprint.'",
      timeline: "Days 19–21",
    },
  ],

  skills: [
    {
      category: "WordPress & CMS",
      items: [
        "WordPress",
        "PHP",
        "Custom Themes",
        "Advanced Custom Fields (ACF)",
        "Yoast SEO",
        "Elementor / Gutenberg",
      ],
    },
    {
      category: "Frontend",
      items: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Responsive Design",
        "Performance Optimization",
      ],
    },
    {
      category: "Healthcare & Compliance",
      items: [
        "HIPAA-Safe Form Handling",
        "Accessible Design (WCAG 2.1)",
        "Privacy-First Architecture",
      ],
    },
    {
      category: "SEO & Migration",
      items: [
        "301 Redirect Planning",
        "Google Search Console",
        "Squarespace → WordPress Migration",
        "Sitemap Submission",
        "Crawl Error Remediation",
      ],
    },
  ],

  cta: {
    headline: "Ready to migrate Mindwell without losing a single search ranking.",
    body: "I've already mapped out the redirect strategy and content structure in the demo. The real migration follows the same plan — audited, staged, and launched with zero downtime.",
    action: "Reply on Upwork to start",
    availability: "Currently available for new projects",
  },
};
