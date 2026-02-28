# Domain Knowledge Brief — Behavioral Health Outpatient Services (Website Redesign)

## Sub-Domain Classification

Multi-service behavioral health outpatient organization (5-25 licensed clinicians, 50-200 active clients per week) offering a continuum of care from standard outpatient therapy to Intensive Outpatient Programs (IOP) and Partial Hospitalization Programs (PHP). Includes psychiatry/medication management alongside therapy. Primary revenue mix: commercial insurance + Medicaid. Website purpose: patient acquisition, trust-building, and SEO-driven lead generation. **This is not a clinical ops dashboard — the demo is a public-facing marketing website with patient intake lead forms.**

---

## Job Analyst Vocabulary — Confirmed and Extended

This is a **website redesign** project (Squarespace to WordPress migration), not an internal ops tool. The vocabulary that matters here is website content vocabulary — what terms appear in navigation, page headings, service descriptions, CTAs, and intake forms.

### Confirmed Primary Entity Names

- Primary record type (website context): **"client"** (not "patient" — behavioral health moved away from "patient" to reduce stigma; "client" is the modern standard for outpatient therapy/counseling)
- People receiving services: **"client"** for adults; **"participant"** for group programs
- Clinical staff: **"clinician"** or **"therapist"** (not "provider" for therapy; "provider" is used for psychiatry/med management)
- Psychiatry staff: **"psychiatric provider"** or **"prescriber"** (MD, NP, or PA-C)
- Administrative staff: **"intake coordinator"** or **"care coordinator"**
- Treatment modality: **"program"** (e.g., "Intensive Outpatient Program") not "service tier"
- Scheduling term: **"appointment"** (not "visit" or "encounter" — those are clinical billing terms not used client-facing)
- First contact: **"intake"** or **"free consultation"**

### Expanded KPI Vocabulary

| KPI Name | What It Measures | Typical Format |
|---|---|---|
| New Intake Volume | Number of new clients entering care per month | Count (e.g., 34 intakes/month) |
| Website Lead Conversion Rate | % of website visitors who submit a contact/intake form | % (3–8% is typical for healthcare) |
| No-Show / Cancellation Rate | % of scheduled appointments missed | % (mental health: 20–35% without reminders) |
| Average Caseload Per Clinician | Active clients each full-time clinician carries | Count (typically 25–45 active clients) |
| Revenue Per Session (RPS) | Net collected revenue per completed session | $ (insurance: $115–$210; self-pay: $100–$175) |
| Days in A/R | Days outstanding for unpaid claims | Days (target: < 30 days; warning: > 45 days) |
| Net Collection Rate | % of collectible charges actually collected | % (healthy: 90–95%) |
| Client Retention Rate | % of clients who continue past session 3 | % (industry average: 60–75%) |
| Utilization Rate | % of clinician schedule slots that are filled | % (efficient: 75–85%) |
| Organic Search Ranking | Position for target local keywords (e.g., "therapist near me") | Rank / impressions |
| Website Traffic (Organic) | Monthly visitors from search | Count (small clinic: 500–3,000/mo) |
| Insurance Verification Time | Time from intake request to verified benefits | Hours (target: < 24 hrs) |

### Status Label Vocabulary

**Client/Case statuses (used internally, may appear in intake pipeline UI):**
- Active states: "Scheduled", "Active — In Treatment", "Pending Intake", "Benefits Verification In Progress", "Awaiting Intake Paperwork"
- Problem states: "No Show", "Cancelled — No Reason", "Insurance Denied", "On Waitlist"
- Terminal states: "Discharged", "Transferred", "Declined Services", "Self-Discharged Against Clinical Advice"

**Appointment statuses:**
- "Confirmed", "Unconfirmed", "Checked In", "In Session", "Completed", "Late Cancellation", "No Show"

**Lead/Inquiry statuses (website context):**
- "New Inquiry", "Contacted", "Intake Scheduled", "Converted to Client", "Not a Fit", "Unreachable"

### Workflow and Action Vocabulary

Primary actions (website/intake context):
- **"Request an Appointment"** or **"Get Started"** — primary CTA (not "Book Now" which feels too transactional for mental health)
- **"Schedule a Free Consultation"** — common for first contact, reduces barrier
- **"Verify Insurance"** — second CTA (clients want to know they can afford it before committing)
- **"Contact Us"** — generic fallback
- **"Learn More"** — service page CTAs

Clinical workflow verbs:
- "complete intake", "authorize release of information", "consent to treatment", "schedule follow-up", "refer out", "step down" (from IOP to standard outpatient), "step up" (reverse)

Secondary/admin actions:
- "verify benefits", "submit prior authorization", "submit claim", "appeal denial", "discharge", "transfer care"

### Sidebar / Navigation Candidates

For the website demo (this is a public marketing website, not an internal dashboard):

Page-level navigation (top nav, not sidebar):
- **Home** — hero + trust signals + primary CTA
- **Services** — dropdown: Individual Therapy, Group Therapy, Psychiatry & Medication Management, Intensive Outpatient (IOP), Partial Hospitalization (PHP), Telehealth, Specialized Programs
- **Our Team** — clinician profiles with credentials and specialties
- **Locations** — map, address, directions (especially if multi-site)
- **Insurance & Fees** — accepted plans, self-pay rates, sliding scale info
- **Patient Portal** — login link to EHR portal (SimplePractice, TherapyNotes, etc.)
- **Contact / Get Started** — intake request form, phone, hours

For a demo that uses a sidebar layout (admin-side view of the website CMS):
- **Pages** (Home, Services, Team, Locations, Insurance, Blog, Contact)
- **Lead Inquiries** — new contact form submissions
- **Service Areas** — SEO landing pages by location/condition
- **Blog / Resources** — mental health content library
- **SEO Performance** — keyword rankings, traffic
- **Intake Forms** — HIPAA-compliant form builder

---

## Design Context — Visual Language of This Industry

### What "Premium" Looks Like in This Domain

Behavioral health websites that practitioners and clients consider "the good ones" share a consistent visual language: **warm trust, clean spaciousness, human photography, and soft color systems.** The best behavioral health sites feel like a well-designed wellness brand, not a clinical EHR or generic corporate website. The visual priority is emotional safety — visitors (who are often in distress or researching for a struggling family member) must feel welcomed and reassured within 3 seconds of landing.

**Typography** in premium behavioral health sites tends toward humanist sans-serifs — DM Sans, Plus Jakarta Sans, Inter with comfortable line-height, or occasionally a soft serif for display headings. Weights are modest (400-500 body, 600-700 headings); heavy-weight typography feels aggressive. **Color** follows a consistent pattern across the industry: a calming primary (soft teal, sage green, muted blue, or warm terracotta) on a near-white background with generous white space. Never clinical white — slightly warm (#F9F7F4 range) is the signature choice that signals comfort without looking medical.

**Photography** is the biggest differentiator in premium behavioral health sites. Stock photography of therapy sessions (two people on chairs) signals cheap website; custom or authentic photography of real spaces (welcoming reception, calming office, diverse candid portraits) signals premium. Visual metaphors lean toward nature: open sky, flowing water, forest paths — growth and calm. Imagery of people looking stressed or in crisis is avoided.

### Real-World Apps Clients Would Recognize as "Premium"

1. **LifeStance Health (lifestance.com)** — the benchmark for large multi-site behavioral health organizations. Clean, spacious, sage/blue palette, prominent "Find a Therapist" search with specialty filters, heavy use of clinician headshots with credentials. Clients recognize this as "the quality mental health brand." Visual pattern: hero with CTA + trust badges (insurance logos) + featured providers grid.

2. **Alma (helloalma.com)** — modern behavioral health network, warm photography, generous spacing, humanist sans-serif, earthy palette. Used by therapists as a reference for what a professional practice website looks like. Pattern: full-bleed photography sections, card-based provider profiles, prominent "Does Alma take my insurance?" tool.

3. **Talkspace / BetterHelp (consumer telehealth)** — recognized by any behavioral health client as the "big names." Warm, accessible, not clinical. Pattern: bold headlines about access + reassuring copy about privacy + simple 3-step process. Less useful for a brick-and-mortar clinic but provides color/tone reference.

4. **Headway (headway.co)** — platform connecting therapists with insurance. Clean, modern, Inter font, soft blue/white palette. Good reference for professional credibility without clinical coldness.

### Aesthetic Validation

- **Job Analyst chose**: (awaiting — this brief precedes the Job Analyst output)
- **Domain validation for behavioral health website redesign**: The correct aesthetic is **Warm Organic** (primary) with **Nature/Wellness** as secondary influence. This is a consumer-facing mental health website — NOT a clinical ops dashboard. Corporate Enterprise is explicitly wrong here (too cold, too institutional — creates distance when the entire brand goal is approachability). Linear/Minimal is too cold. The correct visual language is the one LifeStance, Alma, and TherapyBrands use: soft, human, spacious, warm.
- **Color direction**: Soft sage green-teal range (oklch 0.58-0.65, chroma 0.10-0.14, hue 165-185) on slightly warm off-white background. Warm secondary accent in terracotta or warm sand for CTA buttons. NOT clinical blue-white.
- **Radius profile**: Rounded (1rem) to Soft (1.5rem) — all cards, buttons, and form inputs should feel approachable, not sharp.
- **One adjustment**: Increase white space beyond standard — behavioral health websites use more generous padding than typical SaaS to create psychological "breathing room." Standard content padding (1.5rem) should be bumped to spacious (2rem).

### Format Validation

- **Job Analyst chose**: (awaiting — this brief should inform format selection)
- **Domain validation**: This is a **public marketing website redesign** (Squarespace to WordPress migration). The correct format is **`landing-page`** OR **`multi-screen-walkthrough`** (showing multiple pages of the website). A `dashboard-app` format would be completely wrong — there is no admin sidebar on a behavioral health marketing website. A `multi-screen-walkthrough` inside a browser frame showing Home → Services → Team → Contact would be the most impressive demo: it mimics what the client would actually want to see.
- **Recommended format**: `multi-screen-walkthrough` — show 5 screens: Home (hero + trust signals), Services (therapy modalities), Our Team (clinician profiles), Insurance & Fees (accepted plans), and Contact/Intake Form. This directly shows "here's what your new WordPress site would look like."
- **Format-specific design notes**: Each screen should feel like a real web page section, not a dashboard panel. Browser frame with a realistic URL bar (showing the clinic's domain). Transitions between screens should be smooth crossfade. No sidebar on the demo content itself.

### Density and Layout Expectations

**Spacious** — behavioral health websites deliberately use more white space than average websites. This is intentional: the visual breathing room signals calm and reduces anxiety. Practitioners who build these sites (and clients who review agencies on them) will notice if a site feels dense or compressed.

Layout pattern: **Section-based with full-width hero photography.** Not card-heavy grids (that's e-commerce/SaaS). Individual sections with large imagery, readable body copy, and clear CTAs. The "Our Team" page is the one card-heavy section — clinician profile cards with headshot, name, credentials, and specialties.

Data tables appear only on the Insurance/Fees page (accepted insurance grid). Otherwise, the site is prose and card-based.

---

## Entity Names (10+ realistic names)

### Companies / Organizations (Behavioral Health Clinics)

Real naming conventions in behavioral health: geography + descriptor + type, or value words (healing, wellness, mindful, pathways) + type. Avoid names that sound medical/clinical for therapy-focused orgs.

1. Ridgecrest Behavioral Health
2. Serenity Path Counseling & Psychiatry
3. Clearwater Behavioral Health Associates
4. Mindbridge Wellness Center
5. Elevate Mental Health (multi-site model)
6. Harborview Behavioral Health
7. Summit Counseling & Psychiatric Services
8. Magnolia Mental Health Group
9. Crossroads Behavioral Health (common — used by multiple orgs)
10. Northbrook Counseling Center
11. Pathways Behavioral Health (very common naming pattern)
12. Greenfield Psychological Services
13. Horizon Recovery & Behavioral Health

### People Names (Role-Appropriate)

Licensed clinicians (LCSWs, LPCs, LMFTs, psychologists) — demographically: behavioral health workforce is ~70% women, often 30-55 age range; psychiatry is more mixed:

1. Dr. Maya Okonkwo, MD — Psychiatrist
2. Sarah Chen, LCSW — Licensed Clinical Social Worker, trauma specialty
3. Marcus Delgado, LPC — Licensed Professional Counselor, adolescent specialty
4. Dr. Rachel Steinberg, PhD — Clinical Psychologist, assessment & CBT
5. Jennifer Aldrich, LMFT — Marriage & Family Therapist
6. Amara Williams, LCSW — IOP Program Lead
7. David Park, MD — Psychiatrist, medication management
8. Natalie Russo, PMHNP-BC — Psychiatric Nurse Practitioner
9. Thomas Brennan, LPC-A — Counseling Associate (supervised)
10. Dr. Christine Morales, PsyD — Clinical Director

### Programs / Services / Treatment Modalities

1. Individual Therapy (50-minute sessions)
2. Couples Counseling (50-minute or 90-minute sessions)
3. Family Therapy
4. Group Therapy — Anxiety & Depression Support Group
5. Group Therapy — DBT Skills Group (Dialectical Behavior Therapy)
6. Intensive Outpatient Program (IOP) — 3 days/week, 3 hours/day
7. Partial Hospitalization Program (PHP) — 5 days/week, 6 hours/day
8. Psychiatric Evaluation & Medication Management
9. Telehealth Therapy (video sessions)
10. Adolescent & Teen Mental Health Program
11. Trauma-Focused CBT (TF-CBT)
12. EMDR Therapy (Eye Movement Desensitization and Reprocessing)
13. Substance Use Counseling & Dual Diagnosis Program
14. Neuropsychological Testing & Assessment

---

## Realistic Metric Ranges

| Metric | Low | Typical | High | Notes |
|--------|-----|---------|------|-------|
| Monthly new intakes (outpatient clinic) | 8 | 22–34 | 60 | Multi-site orgs reach 60+; solo practice 8-15 |
| Active caseload per full-time clinician | 18 | 28–38 | 50 | Higher = burnout risk; lower = underutilized |
| Session no-show/late cancel rate | 8% | 18–28% | 40% | Without reminders; drops to 8-15% with automated reminders |
| Revenue per therapy session (insurance) | $95 | $130–$175 | $210 | Varies by CPT code, state, plan, and credential level |
| Revenue per session (self-pay) | $80 | $120–$165 | $220 | Sliding scale can go lower; cash-pay premium can go higher |
| Days in Accounts Receivable | 18 | 28–38 | 65 | Target < 30; > 45 is a billing problem signal |
| Net collection rate | 82% | 88–93% | 97% | Credentialing, clean claims, and payer mix drive this |
| Client retention beyond session 3 | 45% | 62–72% | 85% | Higher for IOP/PHP; lower for one-time EAP referrals |
| Website organic monthly visitors (small clinic) | 300 | 800–2,400 | 8,000 | Multi-site orgs with SEO investment reach higher |
| Website lead form conversion rate | 1.8% | 3.5–6% | 12% | With HIPAA-compliant scheduling integration: 8-12% |
| Time to insurance verification | 2 hrs | 4–24 hrs | 72 hrs | Real-time eligibility tools cut to <2 hrs |
| Average sessions per client per episode | 4 | 12–18 | 45 | Trauma/complex cases can exceed 45 |
| IOP enrollment size (concurrent) | 4 | 8–14 | 20 | PHP: 6-12 concurrent; smaller groups = better outcomes |
| Clinician headcount (mid-size clinic) | 3 | 6–12 | 25 | Includes both full-time and part-time/contracted |

---

## Industry Terminology Glossary

| Term | Definition | Usage Context |
|------|-----------|---------------|
| IOP (Intensive Outpatient Program) | Structured treatment 3+ days/week, 3+ hours/day; more intensive than standard outpatient but no overnight stay | Service tier label; insurance authorization |
| PHP (Partial Hospitalization Program) | Most intensive outpatient level, 5 days/week, 5-6 hrs/day; often a step-down from inpatient | Service tier; reimbursed at higher rate than IOP |
| Level of Care (LOC) | ASAM or LOCUS criteria-based determination of appropriate service intensity | Clinical assessment, intake, insurance auth |
| LOCUS | Level of Care Utilization System — standardized assessment tool for behavioral health LOC determination | Clinical documentation |
| ASAM Criteria | American Society of Addiction Medicine criteria for substance use treatment placement | SUD programs specifically |
| Biopsychosocial Assessment | Comprehensive clinical intake evaluation covering biological, psychological, and social factors | Initial intake process |
| PHQ-9 | Patient Health Questionnaire-9 — 9-question standardized depression screening tool | Intake forms, progress monitoring |
| GAD-7 | Generalized Anxiety Disorder 7-item scale — standardized anxiety screening | Intake forms, symptom tracking |
| LCSW | Licensed Clinical Social Worker — master's level clinician (MSW + 2 years supervised practice) | Clinician credential label |
| LPC | Licensed Professional Counselor (varies by state: LPCC, LCPC) — master's level therapy | Clinician credential label |
| LMFT | Licensed Marriage and Family Therapist — master's level, specialty in relational work | Clinician credential label |
| PMHNP-BC | Psychiatric-Mental Health Nurse Practitioner, Board Certified — can prescribe medication | Prescribing clinician label |
| EAP | Employee Assistance Program — employer-funded short-term counseling (typically 3-8 sessions) | Referral source; billing code |
| BAA (Business Associate Agreement) | HIPAA-required agreement between a covered entity and any vendor handling PHI | Legal/compliance; required for any HIPAA-compliant form/tool |
| PHI (Protected Health Information) | Any individually identifiable health information covered by HIPAA | Compliance context; forms, contact info + health data |
| CBT | Cognitive Behavioral Therapy — evidence-based approach targeting thought-behavior patterns | Treatment modality; service description |
| DBT | Dialectical Behavior Therapy — structured skills-based therapy for emotion regulation and self-harm | Treatment modality; especially for BPD, self-harm, eating disorders |
| EMDR | Eye Movement Desensitization and Reprocessing — trauma processing therapy | Treatment modality |
| Dual Diagnosis | Co-occurring mental health + substance use disorder | Specialty program label |
| Telehealth | Video-based therapy sessions; synonym: teletherapy, virtual therapy | Service label; platform feature |
| Clean Claim Rate | % of submitted insurance claims accepted without rejection on first submission | Billing KPI |
| Prior Authorization (PA) | Pre-approval from insurance required for IOP/PHP and ongoing outpatient beyond initial sessions | Billing workflow step |
| In-Network | Therapist/org has credentialing agreement with insurer, reducing client out-of-pocket cost | Insurance page key term |
| Sliding Scale | Fee structure where cost varies based on client income; reduces access barrier | Fees page; marketing differentiator |

---

## Common Workflows

### Workflow 1: New Client Intake Process (Website → First Session)

1. Potential client searches for therapist or behavioral health clinic (Google: "therapist near me", "anxiety treatment [city]")
2. Lands on clinic website — evaluates: accepts my insurance? Has my specialty? Easy to contact?
3. Submits contact/intake form OR calls intake coordinator directly
4. Intake coordinator calls back within 24-48 hours, conducts brief phone screening (5-15 min)
5. Insurance benefits verified (real-time eligibility check or manual payer call)
6. Level of care determined — referred to appropriate program (standard outpatient, IOP, PHP, psychiatry)
7. Intake appointment scheduled — client receives welcome email with portal login and paperwork
8. Client completes intake paperwork in patient portal (consent forms, demographics, PHQ-9/GAD-7, biopsychosocial assessment, release of information)
9. Intake session completed with assigned clinician (60-90 minutes)
10. Treatment plan developed, ongoing appointments scheduled

### Workflow 2: Website Lead Form to Intake Conversion

1. Visitor fills out contact/intake form on website (name, DOB, insurance, reason for seeking care, preferred contact)
2. Form submission triggers encrypted notification to intake coordinator (NOT stored in non-HIPAA-compliant email)
3. Lead logged in CRM or EHR inquiry queue
4. Intake coordinator calls within 24 hours (first call is conversion-critical — 80% of uncalled leads go elsewhere)
5. Warm handoff to scheduling — match client to available clinician based on specialty, schedule, insurance credentialing
6. Insurance benefits run, out-of-pocket estimate provided to client
7. Appointment confirmed; intake packet sent via HIPAA-compliant portal link

### Workflow 3: IOP/PHP Program Admission

1. Client referred to higher level of care (self-referral, OP therapist step-up, ED discharge, or insurance case manager)
2. Phone/video pre-screening with IOP coordinator
3. Clinical assessment (LOCUS or ASAM scoring)
4. Insurance prior authorization submitted (PA often required for IOP/PHP — 3-5 business day turnaround)
5. Admission scheduled pending PA approval
6. Orientation day: group schedule distributed, individual therapist assigned, medication management appointment set
7. Group therapy runs 3-5 days/week; individual sessions 1x/week; family therapy as indicated
8. Step-down review at weeks 4, 6, 8 — discharge to standard outpatient when clinically appropriate

---

## Common Edge Cases

1. **Insurance denial / prior authorization rejection** — client is mid-treatment when insurance refuses to authorize continued sessions; clinic must appeal while navigating client distress. Forces urgent rescheduling or self-pay conversation.
2. **No-show with safety concern** — client misses appointment without contact; mandates outreach attempt and risk documentation. Creates flagged record requiring follow-up within 24 hours.
3. **Telehealth technical failure** — video session drops; client may interpret as rejection. Requires immediate phone backup and re-scheduling documentation.
4. **Out-of-state telehealth** — client travels or moves; clinician license doesn't cover new state. Must transfer care — common pain point post-COVID with telehealth expansion.
5. **Waitlist with deteriorating client** — intake pipeline is full; prospective client is on a 4-6 week waitlist but their condition worsens. Requires interim crisis resource referral and documentation.
6. **Credentialing lag for new clinician** — new therapist joins but is not yet credentialed with all payers; clients assigned to them can't bill insurance. Financial ops gap.
7. **Mandatory reporting trigger** — during session, clinician identifies child abuse or imminent harm situation, requiring mandatory report while maintaining therapeutic relationship. Not a "bug" but a high-stakes workflow branch requiring documentation.
8. **Sliding scale dispute** — client's income documentation is unclear; administrative tension between access mission and revenue reality.
9. **Duplicate client record** — client previously seen years ago re-enters care; EHR may create duplicate. Merge/reconcile workflow required.

---

## What Would Impress a Domain Expert

1. **"The three-click rule for insurance verification"** — behavioral health insiders know that the single biggest drop-off on intake is the insurance conversation. A website or demo that shows real-time eligibility integration (type in insurance ID → see in-network status instantly) would immediately signal expertise. Even showing "Verify Insurance" as a prominent CTA alongside "Request Appointment" shows you understand the conversion funnel.

2. **Level of care as a navigation concept** — showing services organized by intensity level (Outpatient → IOP → PHP → Telehealth) rather than by modality (Individual, Group, Family) mirrors how clinicians and referral coordinators actually think. This is the industry's own framework (ASAM/LOCUS) applied to web navigation.

3. **Clinician profile credential display format** — practitioners are extremely specific about how credentials appear. "Sarah Chen, LCSW" with specialty tags (Trauma, Anxiety, Depression) and approach tags (CBT, EMDR, Mindfulness) is the correct format. Showing "Dr. Smith, Therapist" signals no domain knowledge. The NPI number reference and in-network status per clinician are additional insider signals.

4. **PHQ-9/GAD-7 embedded in the intake form** — including standardized screening tools in the lead form (not just "What brings you in?") signals clinical sophistication. Insurers and referrers recognize these tools as the baseline for evidence-based intake.

5. **HIPAA compliance as a design consideration, not just a badge** — insiders know that Squarespace's native forms are NOT HIPAA-compliant (they don't sign a BAA). A developer who mentions this specific limitation and demonstrates the WordPress + HIPAA-compliant form plugin solution (HIPAAtizer, Gravity Forms with HIPAA vault, Jotform HIPAA) immediately signals they've done this before.

---

## Common Systems & Tools Used

1. **SimplePractice** — most common EHR for small-to-mid behavioral health practices; client portal, scheduling, notes, billing, telehealth. The "gold standard" for private practice.
2. **TherapyNotes** — popular alternative to SimplePractice; stronger documentation templates, slightly more clinical UI. Common in group practices.
3. **ICANotes** — behavioral health-specific EHR, stronger for IOP/PHP documentation; preferred by larger group practices.
4. **Kipu Health** — EHR platform for SUD/dual diagnosis programs; common in IOP and residential settings.
5. **HIPAAtizer** — HIPAA-compliant form builder, specifically designed to bolt onto Squarespace or WordPress without a full HIPAA hosting setup.
6. **Jotform HIPAA** — alternative HIPAA-compliant form tool; very common in smaller practices.
7. **Luminare Health / Availity** — insurance eligibility verification portals used by billing staff.
8. **Talkroute / RingCentral** — HIPAA-compliant phone systems (regular phone numbers don't meet HIPAA standards for voicemail).
9. **Birdeye / Podium** — reputation management and review generation for healthcare; Google Reviews are critical acquisition channel.
10. **SE Ranking / SEMrush** — SEO tools used by behavioral health marketing agencies for keyword tracking.

---

## Geographic / Cultural Considerations

- **No specific geographic constraints identified** from the job brief. Behavioral health clinic websites are primarily regional/local SEO-driven — "therapist near me", "[city] mental health", "[city] anxiety treatment" are the primary acquisition keywords.
- **If multi-state**: telehealth licensure compact (PSYPACT for psychologists; Counseling Compact for LPCs) is a key differentiator to mention.
- **Insurance/Medicaid mix varies dramatically by state**: Some states have Medicaid managed care behavioral health carve-outs (separate insurance plan for mental health). This affects which insurance logos appear on the website and which payer names are prominent.
- **US-only**: HIPAA is US federal law. All compliance references are US-specific.

---

## Data Architect Notes

This is a **website redesign demo**, not a clinical ops dashboard. Mock data should reflect what appears ON THE WEBSITE and what a CMS admin would manage:

**Pages dataset**: 8-10 page records with slug, title, status (Published/Draft), last modified date, SEO score, meta description. Include edge cases: 2 Draft pages, 1 page with missing meta description (SEO warning).

**Services dataset**: 8-12 service records with name (e.g., "Intensive Outpatient Program (IOP)"), category (Individual, Group, Specialty Programs, Medication Management), description snippet, insurance covered (boolean), telehealth available (boolean), age groups served.

**Team/Clinicians dataset**: 8-10 clinician records with name, credential (LCSW, LPC, LMFT, MD, PMHNP-BC, PsyD), specialty tags (Anxiety, Depression, Trauma, Adolescents, DBT, EMDR), accepting new clients (boolean), telehealth available (boolean), insurance_networks array.

**Lead Inquiries dataset**: 15-20 inquiry records with timestamp, first name, service interest, insurance carrier, contact method (phone/email), status (New Inquiry, Contacted, Intake Scheduled, Converted, Unreachable), notes. Include edge cases: 2 "Unreachable" after 3 attempts, 1 out-of-state inquiry flagged, 1 urgent/crisis referral.

**SEO/Analytics dataset**: 12 months of monthly data — organic visitors (800-2,400 range with seasonal uptick Jan-March for New Year resolution seekers), lead form submissions (18-45/month), keyword rankings for 5-8 target terms.

**Insurance Accepted dataset**: 12-15 insurance plans with carrier name (Aetna, Cigna, Blue Cross Blue Shield, UnitedHealthcare, Medicaid/Medical Assistance, Medicare, Oscar Health, Ambetter, Magellan Health), in-network status, effective date.

**Status labels to use** (exact strings): "Published", "Draft", "Under Review", "New Inquiry", "Contacted", "Intake Scheduled", "Converted", "Unreachable", "In-Network", "Out-of-Network", "Accepting New Clients", "Waitlist Only", "Not Currently Accepting"

**Edge cases to include**:
- 1 clinician with "Waitlist Only" status (fully booked)
- 2 pages in "Draft" status
- 3 lead inquiries with "Unreachable" after 3+ contact attempts
- 1 inquiry flagged as "Urgent / Crisis Referral" — referred to same-day intake
- Insurance plan showing "Out-of-Network" (even though clinic usually accepts it — credentialing lapse scenario)
- SEO: 2 pages with 0 incoming organic traffic (pages need optimization)

**Date patterns**: Lead inquiries clustered within last 30 days. Monthly analytics cover Jan 2025 – Dec 2025. Seasonal note: January spike in inquiries (New Year resolution effect), September spike (back-to-school anxiety), lowest volume July-August.

---

## Layout Builder Notes

- **Recommended density**: Spacious — behavioral health websites use deliberate white space as a design signal of psychological safety. Use `--content-padding: 2rem`, `--card-padding: 1.75rem`.
- **Aesthetic**: Warm Organic is the correct aesthetic for a consumer-facing behavioral health marketing website. NOT Corporate Enterprise (too cold). NOT Linear/Minimal (too sterile). The visual language that LifeStance, Alma, and Headway use is Warm Organic with a soft green-teal primary.
- **No sidebar on the public-facing website screens** — the demo shows the website itself (multi-screen-walkthrough format). If there's an admin/CMS view panel, it can have a simple navigation list but should feel like a website builder CMS, not a clinical dashboard.
- **Sidebar width** (if admin CMS view): standard 16rem — page list navigation doesn't require wider.
- **Color direction**: Soft sage green-teal as primary (`oklch(0.62 0.12 172)`, `--primary-h: 172`). Warm off-white background (`oklch(0.98 0.01 85)`). CTAs in warm terracotta/amber accent for contrast.
- **Border treatment**: Very subtle — `border-border/20` to `border-border/30`. Heavy borders feel institutional. Cards should feel like elevated surfaces, not data tables.
- **Shadow**: Soft, warm shadows (`shadow-sm` with warm undertone) — not sharp or directional.
- **Radius**: Rounded (1rem) for cards and form inputs; slightly softer (1.25rem) for CTA buttons. Avoid sharp corners entirely.
- **Typography**: DM Sans or Plus Jakarta Sans for body (import from Google Fonts); soft humanist feel. If staying with Geist, use generous `line-height: 1.7` and `letter-spacing: 0.01em` to soften it.

---

## Demo Screen Builder Notes

**Format recommendation**: `multi-screen-walkthrough` inside a browser frame. This is a website redesign project — show what the NEW website looks like.

**5 screens to build** (in this order):

1. **Home** — Full-bleed hero with human photography (or illustrated placeholder), headline ("Compassionate Care for Every Mind"), insurance CTA row (logos: Aetna, BCBS, Cigna, UHC), 3-feature trust section (Accepting New Clients, Telehealth Available, Insurance Accepted), clinician highlights strip.

2. **Services** — 3-column service cards organized by level of care: Individual & Group Therapy, Psychiatry & Medication Management, Intensive Programs (IOP/PHP). Each card with icon, service name, description, and "Learn More" CTA. Clean, spacious grid.

3. **Our Team** — Clinician profile cards in a 2-3 column responsive grid. Each card: headshot placeholder (soft gradient avatar), name, credentials (LCSW, LPC, etc.), specialty tags (badge components), "Accepting New Clients" indicator, "Request Appointment" button.

4. **Insurance & Fees** — Two-column layout: left side insurance grid (logos/names in a clean table/grid), right side self-pay rates (sliding scale callout), FAQs about costs. Include "Verify My Benefits" prominent CTA.

5. **Contact / Get Started** — Intake request form on right, contact information + map placeholder on left. Form fields: Name, Date of Birth, Email, Phone, Insurance Carrier (dropdown), Service Interest (dropdown: Individual Therapy, Couples, IOP/PHP, Psychiatry, Telehealth, Not Sure), How did you hear about us, Additional notes. HIPAA disclaimer beneath form. "We'll respond within 24 hours" trust signal.

**Most important metric for the "hero stat" (if using a CMS admin view)**: Number of active clients or monthly leads (demonstrates the site's conversion function).

**Chart type**: Area chart for monthly website traffic/leads over 12 months — shows growth trajectory. The seasonal January and September spikes add realism.

**Domain-specific panel that impresses**: On admin view — "Recent Inquiries" feed showing new contact form submissions with name, insurance, service interest, and status badge. This directly shows the lead capture function of the website.

**Social proof elements credible in behavioral health**:
- Insurance logos row (this is the #1 trust signal — "do you take my insurance?" is the first question)
- Clinician credentials prominently displayed (LCSW, PsyD, MD badges)
- "Accepting New Clients" indicator (scarcity signal that's honest)
- Google Reviews integration mention (behavioral health: 85% of people choose based on reviews)
- HIPAA compliance badge / "Your privacy is protected" callout
- SAMHSA or state licensing body logo (legitimacy signal)
