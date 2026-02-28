# Job Analysis Brief — Behavioral Health Website Redesign

**Job**: Full Website Redesign & Migration from Squarespace to WordPress
**Analyzed**: 2026-02-27
**Agent**: Job Analyst

---

## Important Note on WordPress

The developer profile explicitly lists "WordPress/PHP projects" under "What I Don't Build." This job requires WordPress expertise. The analysis brief is produced for the demo app, which will showcase the design vision, SEO strategy, HIPAA compliance approach, and lead generation capability — without requiring Humam to pretend expertise in WordPress. The cover letter should be honest about the approach: "I'd use a modern headless WordPress setup" or "I'd use Next.js with a headless CMS like Contentful or Sanity — same outcome, much cleaner code." The demo will show what the redesigned site looks like and how it works; the cover letter can address the tech conversation directly.

Alternatively, if the team lead wants to proceed without flagging this concern, the demo still stands on its merits as a visual and functional showcase.

---

## Analysis Brief (JSON)

```json
{
  "domain": "health",
  "clientName": null,
  "features": [
    "Homepage hero with trust signals and primary CTA",
    "Services overview with treatment modality descriptions",
    "Lead intake form with HIPAA-compliant handling",
    "Insurance & payment information section",
    "Provider profiles and team page",
    "Blog / educational resources for SEO",
    "Location and contact information with map"
  ],
  "challenges": [
    {
      "title": "HIPAA-compliant lead form without a healthcare data breach risk",
      "vizType": "flow-diagram",
      "outcome": "Could eliminate the liability of standard web forms by routing all PHI through a BAA-covered form provider (e.g., JotForm HIPAA, Formstack) — zero PHI stored on the website itself"
    },
    {
      "title": "SEO architecture for competitive behavioral health search terms",
      "vizType": "before-after",
      "outcome": "Could lift organic ranking for high-intent terms like 'therapist near me' and 'behavioral health [city]' by building service pages with proper semantic structure, schema markup, and internal linking — versus the Squarespace flat-page model that lacks structured heading hierarchy"
    },
    {
      "title": "Migration from Squarespace with zero ranking loss",
      "vizType": "timeline",
      "outcome": "Could preserve all existing organic rankings through a phased migration: URL mapping, 301 redirects, sitemap resubmission, and GSC verification — versus a cut-over migration that typically causes 20-40% traffic drop in the first 90 days"
    }
  ],
  "portfolioProjects": [
    "Tinnitus Therapy SaaS",
    "Southfield Healthcare",
    "MedRecord AI",
    "Lead Intake CRM"
  ],
  "coverLetterHooks": [
    "HIPAA compliant website",
    "lead form generation capabilities",
    "migration from Squarespace to WordPress",
    "scalable platform for future growth",
    "strong SEO performance focus"
  ],
  "screeningQuestions": [
    "Please provide links to websites you've built for other businesses.",
    "Include a link to your GitHub profile and/or website",
    "Describe your approach to testing and improving QA",
    "Describe your recent experience with similar projects"
  ],
  "screeningAnswers": {
    "q1": "Here's a live healthcare demo built specifically for this project: {VERCEL_URL}. Additional live projects: https://tinnitus-therapy.vercel.app (multi-clinic healthcare SaaS) and https://southfield-healthcare.vercel.app (patient scheduling platform).",
    "q2": "GitHub: https://github.com/HumamAl — includes the source for 10+ deployed projects. The demo for this project is live at {VERCEL_URL}.",
    "q3": "My QA process: TypeScript strict mode catches type errors before runtime; I run pnpm build before every deployment to surface lint and compile errors; I do manual cross-browser testing (Chrome, Safari, Firefox) plus mobile viewport checks. For HIPAA-adjacent work I audit every form for PHI exposure and verify no data is stored server-side without a BAA.",
    "q4": "Built two healthcare SaaS platforms (Southfield Healthcare for clinic scheduling, Tinnitus Therapy for multi-clinic patient management) and a healthcare AI records tool. The demo at {VERCEL_URL} shows the redesigned site experience I'd build for your behavioral health practice — HIPAA form flow, SEO page structure, lead capture, and mobile performance included."
  },
  "aestheticProfile": {
    "aesthetic": "nature-wellness",
    "demoFormat": "split-panel-demo",
    "formatRationale": "This is an explicit redesign job — migrating from Squarespace to WordPress means the client has an existing site and wants to see what 'better' looks like. A split-panel demo directly answers 'before vs. after' visually and is the most credible format for a redesign proposal. It shows the current Squarespace aesthetic on the left and the proposed redesigned experience on the right — making the value immediately legible without explanation.",
    "mood": "calming, trustworthy, approachable, professional-yet-warm",
    "colorDirection": "sage green at oklch(0.65 0.12 148) — consumer wellness warmth, increased chroma slightly for a living-green feel over clinical teal; secondary warm cream for backgrounds",
    "densityPreference": "spacious",
    "justification": "This is a behavioral health company seeking a consumer-facing website — the audience is people seeking therapy, mental health support, or substance use treatment. Healthcare consumer sites follow wellness visual conventions: breathing room, warm organic palettes, rounded forms, calming imagery references, and an 'approachable professional' tone that reduces patient anxiety. The job post mentions 'creative design approach required', signaling the client values aesthetic quality, not just functional delivery. The nature-wellness aesthetic is the correct primary — not corporate-enterprise (which would feel clinical and cold to patients) and not warm-organic alone (which might read as too casual for a medical context)."
  },
  "clientVocabulary": {
    "primaryEntities": ["client", "patient", "provider", "therapist", "counselor", "practice"],
    "kpiLabels": ["new client inquiries", "form submissions", "page ranking", "organic traffic", "lead conversion rate"],
    "statusLabels": ["New Inquiry", "Intake Scheduled", "Insurance Verified", "Active Client", "Waitlisted"],
    "workflowVerbs": ["inquire", "schedule", "verify", "refer", "intake", "onboard"],
    "sidebarNavCandidates": ["Home", "Services", "Our Team", "Insurance & Fees", "Resources", "Contact"],
    "websitePageLabels": ["Our Approach", "What We Treat", "Meet the Team", "Insurance & Fees", "Get Started", "FAQ"],
    "industryTerms": ["HIPAA", "behavioral health", "telehealth", "BAA (Business Associate Agreement)", "PHI (Protected Health Information)", "intake form", "EHR", "in-network", "out-of-network", "sliding scale"]
  },
  "designSignals": "The client operates a behavioral health practice — their patients are people seeking therapy or mental health treatment who are often anxious about the process of 'getting help.' The website must feel safe and professionally credible simultaneously. They likely look at Psychology Today provider profiles, BetterHelp, and local competitor therapy sites as benchmarks for 'good.' They'll equate visual warmth and approachability with competence in this domain — a cold corporate aesthetic would undermine trust before a patient ever fills out a form. The 'creative design approach required' signal means they're dissatisfied with cookie-cutter Squarespace themes and want something that feels intentional.",
  "accentColor": "sage-green",
  "signals": ["HIGH_BUDGET", "TECH_SPECIFIC", "REDESIGN"],
  "coverLetterVariant": "E",
  "domainResearcherFocus": "Focus on behavioral health / mental health practice terminology: therapy modalities (CBT, DBT, EMDR, trauma-informed care, somatic therapy), condition vocabulary (anxiety, depression, PTSD, OCD, substance use, eating disorders), and intake language ('free consultation', 'accepting new clients', 'in-network insurance'). Entity types: therapist names should feel credentialed (LCSW, LPC, LMFT suffix), service names should use therapeutic language (not medical). Metric ranges for lead forms: behavioral health practices typically get 20-100 web inquiries/month; conversion from inquiry to intake session is 40-60%. HIPAA compliance signals to include: BAA mention, form provider names (JotForm HIPAA, Formstack, Hushmail), 'no PHI stored on website'. Real tools practitioners use: SimplePractice, TherapyNotes, Psychology Today profile listings, Google Business Profile. Edge cases: insurance verification failure, waitlist status, sliding scale fee requests, telehealth-only availability."
}
```

---

## Vocabulary Map (Structured Format)

```json
{
  "entityNames": {
    "primary_record": "inquiry",
    "customer": "client",
    "worker": "therapist",
    "id_field": "intake ID",
    "location": "practice location"
  },
  "statusWorkflow": [
    "New Inquiry",
    "Intake Scheduled",
    "Insurance Verified",
    "Active Client",
    "Waitlisted",
    "Referred Out"
  ],
  "kpiNames": [
    "New Client Inquiries",
    "Intake Conversion Rate",
    "Organic Search Ranking",
    "Monthly Inquiries",
    "Telehealth Sessions"
  ],
  "sidebarLabels": [
    "Practice Overview",
    "Services & Specialties",
    "Provider Directory",
    "Insurance & Fees",
    "Client Resources",
    "Get Started"
  ],
  "industryTerms": [
    "HIPAA",
    "PHI",
    "BAA",
    "telehealth",
    "CBT",
    "DBT",
    "EMDR",
    "sliding scale",
    "in-network",
    "EHR",
    "intake form",
    "LCSW",
    "LPC",
    "LMFT"
  ],
  "complianceSignals": [
    "HIPAA compliant",
    "BAA-covered form provider",
    "No PHI stored on website",
    "SSL encrypted"
  ],
  "painVocabulary": [
    "Squarespace limitations",
    "poor SEO performance",
    "lead form compliance risk",
    "no scalability",
    "cookie-cutter design",
    "migration ranking loss"
  ]
}
```

---

## Screening Answer Strategy

These four screening questions are the first thing the client reads. Each answer is 1-3 sentences, references the demo or a live healthcare project URL, and uses the client's vocabulary.

**Q1: Please provide links to websites you've built for other businesses.**
> Here's a live behavioral health site demo built specifically to show my approach for this project: {VERCEL_URL}. Past healthcare builds include https://tinnitus-therapy.vercel.app (multi-clinic therapy management platform) and https://southfield-healthcare.vercel.app (patient scheduling and provider dashboards).

**Q2: Include a link to your GitHub profile and/or website**
> GitHub: https://github.com/HumamAl — source code for 10+ deployed projects. The demo for this project is live at {VERCEL_URL}.

**Q3: Describe your approach to testing and improving QA**
> I build in TypeScript strict mode (catches type errors at compile time, not runtime), run a full build check before every deployment, and test manually across Chrome, Safari, and mobile viewports. For HIPAA-adjacent forms, I specifically audit that zero PHI is logged or stored server-side — only BAA-covered providers handle form submission data.

**Q4: Describe your recent experience with similar projects**
> Built Southfield Healthcare (clinic scheduling platform) and Tinnitus Therapy SaaS (multi-location patient management) — both healthcare web apps with intake flows, provider management, and compliance considerations. The demo at {VERCEL_URL} shows the redesigned behavioral health site experience I'd deliver: HIPAA-safe lead form, strong SEO page structure, mobile-first design, and a clean patient journey from first visit to intake submission.

---

## Cover Letter Draft (Variant E — "What It Could Look Like")

```
Hi,

Your Squarespace site is holding back both your SEO and your lead intake — rebuilt the experience to show what modern looks like:

{VERCEL_URL}

The demo shows: HIPAA-safe contact form (zero PHI on your server), service pages structured for local search ranking, and a patient-first design that converts visitors into consultations. Similar to the multi-clinic therapy platform I built at https://tinnitus-therapy.vercel.app.

What's your current inquiry volume — are you getting traffic but losing leads, or is the SEO the bigger gap right now?

10-minute call or I'll send a migration plan doc — your pick.

Humam
```

**Word count**: ~85 words. Under 120 limit. Does not start with "I". Demo link in sentence 2. Uses "HIPAA", "lead intake", "SEO" — all from the job post. Embedded question is specific to their business situation and shapes the first milestone.

---

## Quality Check

- [x] Domain: `health` (consumer-facing behavioral health — most specific match)
- [x] Aesthetic: `nature-wellness` — actively reasoned from "behavioral health", "consumer-facing", "creative design approach required" signals
- [x] Demo format: `split-panel-demo` — actively chosen because this is an explicit redesign/migration job
- [x] Format rationale explains the before/after visual argument the client needs to see
- [x] Aesthetic justification references 3 specific signals: behavioral health consumer audience, "creative design approach required", anti-clinical reasoning
- [x] Client vocabulary contains exact terms: "HIPAA compliant", "lead form generation", "behavioral health", "scalable platform"
- [x] Features list: 7 items, all domain-specific (none generic)
- [x] Challenges: 3, each with title + vizType + outcome with qualifier language
- [x] Portfolio projects ranked by domain (healthcare first: Tinnitus Therapy, Southfield, MedRecord AI; then feature overlap: Lead Intake CRM for form capability)
- [x] Cover letter hooks are specific job-post phrases, not generic adjectives
- [x] All 4 screening questions have verbatim answers drafted
- [x] Domain researcher focus notes include jargon, entity names, metric ranges, real tools, compliance signals, and edge cases
- [x] `clientName` is null (not found in job post)
- [x] WordPress flag surfaced transparently at top of document

---

## WordPress Flag — Recommendation for Team Lead

The developer profile at `references/developer-profile.md` explicitly lists "WordPress/PHP projects" under "What I Don't Build." This job title says "Migration from Squarespace to WordPress."

**Options:**
1. **Proceed with demo as a design/SEO showcase** — The demo shows what the redesigned site looks like and how the lead capture + HIPAA flow works. Cover letter can frame the tech discussion: "I'd recommend a headless approach — Next.js frontend deployed on Vercel with a WordPress or Contentful CMS backend. Same SEO capability, no PHP maintenance burden, faster load times." Some clients are open to this if you show them better outcomes.
2. **Skip this job** — If the client is specifically hiring for WordPress expertise (PHP theme development, plugin customization), this is outside Humam's stack and the demo won't overcome that gap.
3. **Proceed honestly** — Acknowledge in the cover letter that the stack recommendation is worth a conversation before locking in WordPress. Clients who want outcomes often prefer the better technical choice when shown the tradeoff.

The analysis brief is complete regardless of which path the team lead chooses. The demo and cover letter are the strongest version of the pitch given the constraint.
