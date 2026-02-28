/**
 * Mindwell Behavioral Health — Mock Data
 * Fictional practice for demo purposes. All data is fabricated.
 *
 * Company: Mindwell Behavioral Health (fictional)
 * Domain: Consumer behavioral health (therapy, counseling, mental health treatment)
 * Demo Format: multi-screen-walkthrough — 5 screens (Home, Services, Our Team, Contact/Intake, Blog)
 */

import type {
  Service,
  TeamMember,
  Testimonial,
  BlogPost,
  Stat,
  InsuranceProvider,
  ContactFormField,
  Location,
  FAQ,
  SiteStats,
  OutcomeDataPoint,
  ServiceBreakdownPoint,
  ChartDataPoint,
} from "@/lib/types";

// ===========================================================================
// SITE STATS (homepage hero + outcomes sections)
// ===========================================================================

export const siteStats: SiteStats = {
  clientsServed: 2847,
  clientsServedChange: 18.4,            // % growth vs prior year
  treatmentCompletionRate: 78.3,        // % who complete recommended treatment course
  completionRateChange: 4.7,
  clientSatisfactionScore: 4.8,         // out of 5
  satisfactionChange: 0.2,
  yearsServing: 12,
  licensedClinicians: 14,
  insurancePlansAccepted: 24,
  telehealthAvailable: true,
};

// ---------------------------------------------------------------------------
// Hero impact stats (displayed as animated counters on homepage)
// ---------------------------------------------------------------------------

export const heroStats: Stat[] = [
  {
    id: "stat_cl001",
    label: "Clients Served",
    value: "2,800+",
    numericValue: 2847,
    suffix: "+",
    description: "Individuals, couples, and families served since 2013",
    icon: "Users",
  },
  {
    id: "stat_rt002",
    label: "Treatment Completion Rate",
    value: "78%",
    numericValue: 78,
    suffix: "%",
    description: "Of clients complete their recommended treatment course",
    icon: "TrendingUp",
  },
  {
    id: "stat_cs003",
    label: "Client Satisfaction",
    value: "4.8 / 5",
    numericValue: 4.8,
    suffix: " / 5",
    description: "Average satisfaction score across all clinicians",
    icon: "Star",
  },
  {
    id: "stat_yr004",
    label: "Years of Service",
    value: "12",
    numericValue: 12,
    suffix: " years",
    description: "Serving the community with evidence-based behavioral health care",
    icon: "Calendar",
  },
  {
    id: "stat_cl005",
    label: "Licensed Clinicians",
    value: "14",
    numericValue: 14,
    suffix: "",
    description: "PhD, PsyD, LCSW, LPC, and LMFT credentialed clinicians",
    icon: "Award",
  },
  {
    id: "stat_in006",
    label: "Insurance Plans Accepted",
    value: "24+",
    numericValue: 24,
    suffix: "+",
    description: "Including Aetna, BCBS, Cigna, United, and Medicaid",
    icon: "ShieldCheck",
  },
];

// ===========================================================================
// SERVICES (8 treatment programs)
// ===========================================================================

export const services: Service[] = [
  {
    id: "svc_cbt01",
    name: "Cognitive Behavioral Therapy (CBT)",
    shortName: "CBT",
    category: "evidence_based_therapy",
    modality: "individual_therapy",
    description:
      "CBT is one of the most researched and effective forms of therapy for anxiety, depression, and a wide range of mental health conditions. Our clinicians help you identify and reshape unhelpful thought patterns that drive distress and avoidance behaviors.",
    approach:
      "Evidence-based, structured, and goal-oriented — typically 12–20 sessions with measurable progress milestones.",
    treatsConditions: [
      "Generalized Anxiety Disorder",
      "Major Depressive Disorder",
      "Social Anxiety",
      "OCD",
      "Panic Disorder",
      "PTSD",
    ],
    typicalSessionCount: "12–20 sessions",
    sessionFormat: "both",
    acceptsInsurance: true,
    requiresIntake: true,
    icon: "Brain",
    featuredOnHomepage: true,
  },
  {
    id: "svc_dbt02",
    name: "Dialectical Behavior Therapy (DBT)",
    shortName: "DBT",
    category: "evidence_based_therapy",
    modality: "individual_therapy",
    description:
      "DBT combines individual therapy with skills training in mindfulness, distress tolerance, emotional regulation, and interpersonal effectiveness. Originally developed for borderline personality disorder, DBT is now used for a broad range of emotional and self-harm concerns.",
    approach:
      "Structured 6-month program with weekly individual sessions and skills group — scientifically validated for emotional dysregulation.",
    treatsConditions: [
      "Borderline Personality Disorder",
      "Emotional Dysregulation",
      "Self-Harm",
      "Eating Disorders",
      "Substance Use",
      "Chronic Depression",
    ],
    typicalSessionCount: "24–32 sessions (6-month program)",
    sessionFormat: "both",
    acceptsInsurance: true,
    requiresIntake: true,
    icon: "HeartHandshake",
    featuredOnHomepage: true,
  },
  {
    id: "svc_emdr03",
    name: "EMDR Therapy",
    shortName: "EMDR",
    category: "trauma_recovery",
    modality: "individual_therapy",
    description:
      "Eye Movement Desensitization and Reprocessing (EMDR) is an evidence-based trauma therapy that helps the brain process distressing memories so they no longer hold emotional charge. Our EMDR-certified therapists specialize in complex trauma, single-incident trauma, and childhood abuse.",
    approach:
      "Trauma-informed, phase-based treatment — typically 8–12 sessions for single-incident trauma; longer for complex PTSD.",
    treatsConditions: [
      "PTSD",
      "Complex Trauma",
      "Childhood Abuse",
      "Grief",
      "Phobias",
      "Accident Trauma",
    ],
    typicalSessionCount: "8–16 sessions",
    sessionFormat: "in_person",
    acceptsInsurance: true,
    requiresIntake: true,
    icon: "Eye",
    featuredOnHomepage: true,
  },
  {
    id: "svc_fam04",
    name: "Family & Couples Therapy",
    shortName: "Family Therapy",
    category: "evidence_based_therapy",
    modality: "family_therapy",
    description:
      "We provide systemic family therapy and Gottman Method couples therapy to help families improve communication, navigate conflict, and rebuild connection. Whether you're facing a parenting challenge, blended family adjustment, or relationship repair after breach of trust — our clinicians meet you where you are.",
    approach:
      "Person-centered, attachment-based approach using evidence-based frameworks including Gottman Method and Emotionally Focused Therapy (EFT).",
    treatsConditions: [
      "Marital Conflict",
      "Communication Breakdown",
      "Parenting Challenges",
      "Blended Family Stress",
      "Infidelity Recovery",
      "Divorce Adjustment",
    ],
    typicalSessionCount: "10–16 sessions",
    sessionFormat: "both",
    acceptsInsurance: true,
    requiresIntake: false,
    icon: "Users",
    featuredOnHomepage: false,
  },
  {
    id: "svc_sub05",
    name: "Substance Use Treatment",
    shortName: "Substance Use",
    category: "substance_use_treatment",
    modality: "intensive_outpatient",
    description:
      "Our outpatient substance use program offers individualized counseling and evidence-based treatment for alcohol use disorder, opioid use disorder, and polysubstance use. We take a recovery-oriented, non-judgmental approach and work closely with prescribers to coordinate medication-assisted treatment (MAT) when clinically appropriate.",
    approach:
      "Motivational interviewing, CBT for addiction, and 12-step facilitation — coordinated with MAT prescribers for comprehensive recovery support.",
    treatsConditions: [
      "Alcohol Use Disorder",
      "Opioid Use Disorder",
      "Cannabis Use Disorder",
      "Stimulant Use Disorder",
      "Polysubstance Use",
      "Co-occurring Mental Health",
    ],
    typicalSessionCount: "Individualized — typically 16–24 sessions",
    sessionFormat: "both",
    acceptsInsurance: true,
    requiresIntake: true,
    icon: "ShieldCheck",
    featuredOnHomepage: false,
  },
  {
    id: "svc_tele06",
    name: "Telehealth Therapy",
    shortName: "Telehealth",
    category: "telehealth_services",
    modality: "telehealth",
    description:
      "Access the same high-quality, evidence-based therapy from anywhere in the state — no commute, no waiting room. Our HIPAA-compliant telehealth platform supports individual therapy, couples sessions, and medication management appointments. Telehealth is covered by most major insurance plans.",
    approach:
      "Identical clinical quality to in-person care — delivered via HIPAA-compliant video with flexible scheduling including evenings and weekends.",
    treatsConditions: [
      "Anxiety",
      "Depression",
      "Stress & Burnout",
      "Life Transitions",
      "Grief",
      "Relationship Issues",
    ],
    typicalSessionCount: "Ongoing — match in-person treatment plan",
    sessionFormat: "telehealth",
    acceptsInsurance: true,
    requiresIntake: true,
    icon: "Video",
    featuredOnHomepage: true,
  },
  {
    id: "svc_grp07",
    name: "Group Therapy",
    shortName: "Group Therapy",
    category: "evidence_based_therapy",
    modality: "group_therapy",
    description:
      "Structured therapeutic groups offer community, shared perspective, and skills practice in a safe, facilitated environment. We run ongoing groups for anxiety management, depression recovery, grief support, and DBT skills. Groups typically meet weekly for 90 minutes.",
    approach:
      "Facilitated by a licensed clinician — structured curriculum balanced with open process work; 6–10 participants per group.",
    treatsConditions: [
      "Social Anxiety",
      "Depression",
      "Grief & Loss",
      "Trauma Recovery",
      "Emotional Dysregulation",
      "Isolation & Loneliness",
    ],
    typicalSessionCount: "Ongoing (open enrollment) or 8-week cohorts",
    sessionFormat: "both",
    acceptsInsurance: true,
    requiresIntake: true,
    icon: "Users",
    featuredOnHomepage: false,
  },
  {
    id: "svc_cad08",
    name: "Child & Adolescent Therapy",
    shortName: "Child & Teen",
    category: "child_adolescent",
    modality: "individual_therapy",
    description:
      "Our child and adolescent specialists use developmentally appropriate, play-informed, and trauma-sensitive approaches to support children ages 5–17. We work closely with parents and schools to provide wraparound care. Parent guidance sessions are integrated into all child treatment plans.",
    approach:
      "Trauma-informed, developmentally adapted therapy with parent involvement — integrating play therapy, CBT-A, and family systems approaches.",
    treatsConditions: [
      "ADHD",
      "Childhood Anxiety",
      "School Refusal",
      "Bullying & Peer Relationships",
      "Childhood Trauma",
      "Autism Spectrum (co-occurring)",
    ],
    typicalSessionCount: "12–24 sessions (individualized)",
    sessionFormat: "both",
    acceptsInsurance: true,
    requiresIntake: true,
    icon: "Heart",
    featuredOnHomepage: true,
  },
  {
    id: "svc_med09",
    name: "Psychiatric Medication Management",
    shortName: "Medication Management",
    category: "medication_management",
    modality: "medication_management",
    description:
      "Our psychiatric nurse practitioner and consulting psychiatrist provide evaluation, prescribing, and ongoing medication management for mood disorders, anxiety, ADHD, and psychotic disorders. Medication services are coordinated with your therapy team for a truly integrated, whole-person care model.",
    approach:
      "Collaborative prescribing with a whole-person, recovery-oriented philosophy — prioritizing minimal effective dosing and regular reassessment.",
    treatsConditions: [
      "Major Depressive Disorder",
      "Bipolar Disorder",
      "Generalized Anxiety Disorder",
      "ADHD",
      "PTSD",
      "Schizophrenia / Psychosis",
    ],
    typicalSessionCount: "Initial evaluation + quarterly follow-ups",
    sessionFormat: "both",
    acceptsInsurance: true,
    requiresIntake: true,
    icon: "Pill",
    featuredOnHomepage: false,
  },
  {
    id: "svc_tra10",
    name: "Trauma Recovery Program",
    shortName: "Trauma Recovery",
    category: "trauma_recovery",
    modality: "individual_therapy",
    description:
      "Our integrated trauma recovery program combines EMDR, somatic therapy, and Trauma-Focused CBT (TF-CBT) into a phased treatment approach. Clinicians are trained in complex trauma, developmental trauma, and historical trauma — taking a culturally responsive, trauma-informed lens to every session.",
    approach:
      "Phase-based trauma treatment: stabilization, processing, integration — sequenced to ensure client safety and sustainable healing.",
    treatsConditions: [
      "Complex PTSD (C-PTSD)",
      "Developmental Trauma",
      "Sexual Assault Survivors",
      "Domestic Violence",
      "First Responder Trauma",
      "Medical Trauma",
    ],
    typicalSessionCount: "20–36 sessions (phase-based)",
    sessionFormat: "in_person",
    acceptsInsurance: true,
    requiresIntake: true,
    icon: "Sunrise",
    featuredOnHomepage: false,
  },
];

// ===========================================================================
// TEAM MEMBERS (6 clinicians with realistic BH credentials)
// ===========================================================================

export const teamMembers: TeamMember[] = [
  {
    id: "tm_r4p9k",
    firstName: "Dr. Sarah",
    lastName: "Okonkwo",
    credential: "PhD",
    displayName: "Dr. Sarah Okonkwo, PhD",
    role: "clinical_director",
    roleLabel: "Clinical Director & Licensed Psychologist",
    specialties: [
      "Trauma-Informed Care",
      "EMDR",
      "Complex PTSD",
      "Culturally Responsive Therapy",
    ],
    bio: "Dr. Okonkwo is a licensed clinical psychologist and the clinical director of Mindwell. She brings 17 years of experience specializing in complex trauma, PTSD, and culturally responsive mental health care. She has a particular passion for creating affirming, accessible care for communities historically underserved by the mental health system.",
    education: "PhD, Clinical Psychology — University of Michigan, Ann Arbor",
    yearsExperience: 17,
    approachPhilosophy:
      "Every person carries both wounds and immense resilience — my role is to help you access your own capacity for healing.",
    acceptingNewClients: false,   // edge case: full clinical director
    offersTelehealth: true,
    serviceIds: ["svc_emdr03", "svc_tra10", "svc_cbt01"],
    imagePlaceholder: "#7c9e8a",
  },
  {
    id: "tm_w8n2q",
    firstName: "Marcus",
    lastName: "Delaney",
    credential: "LCSW",
    displayName: "Marcus Delaney, LCSW",
    role: "licensed_therapist",
    roleLabel: "Licensed Clinical Social Worker",
    specialties: [
      "Substance Use & Co-occurring Disorders",
      "Motivational Interviewing",
      "Men's Mental Health",
      "Recovery-Oriented Care",
    ],
    bio: "Marcus is a licensed clinical social worker with 11 years of experience in substance use treatment and co-occurring mental health disorders. He is particularly skilled at helping clients who have had difficult experiences with the mental health system build trust and meaningful therapeutic alliances.",
    education: "MSW, Clinical Social Work — Fordham University, New York",
    yearsExperience: 11,
    approachPhilosophy:
      "Change is not linear, and shame is not a treatment tool — I meet people exactly where they are.",
    acceptingNewClients: true,
    offersTelehealth: true,
    serviceIds: ["svc_sub05", "svc_cbt01", "svc_grp07"],
    imagePlaceholder: "#8b9fc7",
  },
  {
    id: "tm_f5j1m",
    firstName: "Dr. Ananya",
    lastName: "Krishnan",
    credential: "PsyD",
    displayName: "Dr. Ananya Krishnan, PsyD",
    role: "clinical_psychologist",
    roleLabel: "Licensed Clinical Psychologist",
    specialties: [
      "DBT",
      "Emotional Dysregulation",
      "Eating Disorders",
      "Adolescent Mental Health",
    ],
    bio: "Dr. Krishnan is a licensed clinical psychologist with intensive DBT training from Behavioral Tech, the organization founded by DBT developer Dr. Marsha Linehan. She runs Mindwell's DBT program and sees adolescents and adults struggling with emotional dysregulation, eating disorders, and borderline personality disorder.",
    education: "PsyD, Clinical Psychology — Rutgers University Graduate School of Applied Psychology",
    yearsExperience: 9,
    approachPhilosophy:
      "Life worth living is not just a goal — it's a skill set we build together, session by session.",
    acceptingNewClients: true,
    offersTelehealth: true,
    serviceIds: ["svc_dbt02", "svc_cad08", "svc_grp07"],
    imagePlaceholder: "#b8a6d4",
  },
  {
    id: "tm_t3v6s",
    firstName: "Elena",
    lastName: "Vasquez",
    credential: "LMFT",
    displayName: "Elena Vasquez, LMFT",
    role: "licensed_therapist",
    roleLabel: "Licensed Marriage & Family Therapist",
    specialties: [
      "Couples & Relationship Therapy",
      "Gottman Method",
      "Emotionally Focused Therapy (EFT)",
      "Infidelity Recovery",
    ],
    bio: "Elena is a licensed marriage and family therapist trained in both Gottman Method Couples Therapy (Level 3) and Emotionally Focused Therapy (EFT). She works with couples navigating communication breakdown, betrayal, life transitions, and rebuilding intimacy after conflict. She also sees individuals dealing with attachment wounds and relationship patterns.",
    education: "MS, Marriage and Family Therapy — Loyola Marymount University",
    yearsExperience: 8,
    approachPhilosophy:
      "Healthy relationships are not accident — they are a practice that couples and families can learn together.",
    acceptingNewClients: true,
    offersTelehealth: true,
    serviceIds: ["svc_fam04", "svc_cbt01"],
    imagePlaceholder: "#c4a882",
  },
  {
    id: "tm_j7b4r",
    firstName: "James",
    lastName: "Whitfield",
    credential: "LPC",
    displayName: "James Whitfield, LPC",
    role: "licensed_therapist",
    roleLabel: "Licensed Professional Counselor",
    specialties: [
      "Child & Adolescent Therapy",
      "Play Therapy",
      "School-Based Mental Health",
      "ADHD & Neurodiversity",
    ],
    bio: "James is a licensed professional counselor specializing in children ages 5–14 and their families. He uses play therapy, sand tray, and trauma-focused CBT to help children process difficult experiences in developmentally appropriate ways. James works closely with school systems and pediatricians to provide coordinated care.",
    education: "MEd, School Counseling & Clinical Mental Health — Ohio State University",
    yearsExperience: 7,
    approachPhilosophy:
      "Children communicate through play — my therapy room is a safe space where even the youngest clients can tell their story.",
    acceptingNewClients: true,
    offersTelehealth: false,   // edge case: child therapist without telehealth
    serviceIds: ["svc_cad08", "svc_fam04"],
    imagePlaceholder: "#a8c4b0",
  },
  {
    id: "tm_p2d8n",
    firstName: "Dr. Fatima",
    lastName: "Al-Rashid",
    credential: "APRN",
    displayName: "Dr. Fatima Al-Rashid, APRN, PMH-BC",
    role: "psychiatric_nurse_practitioner",
    roleLabel: "Psychiatric Nurse Practitioner",
    specialties: [
      "Psychiatric Medication Management",
      "Mood Disorders",
      "ADHD",
      "Integrated Behavioral Health",
    ],
    bio: "Dr. Al-Rashid is a board-certified psychiatric mental health nurse practitioner with 13 years of experience in outpatient psychiatric care. She takes a collaborative, whole-person approach to prescribing — always working in coordination with each client's therapy team and primary care provider. She holds a particular interest in metabolic wellness alongside psychiatric medication.",
    education: "DNP, Psychiatric Mental Health Nursing — Vanderbilt University School of Nursing",
    yearsExperience: 13,
    approachPhilosophy:
      "Medication is a tool, not a solution — effective psychiatric care means understanding the whole person and the life they want to live.",
    acceptingNewClients: true,
    offersTelehealth: true,
    serviceIds: ["svc_med09"],
    imagePlaceholder: "#9eb8d4",
  },
  {
    id: "tm_k6c1p",
    firstName: "Yuki",
    lastName: "Tanaka",
    credential: "LPC",
    displayName: "Yuki Tanaka, LPC",
    role: "licensed_therapist",
    roleLabel: "Licensed Professional Counselor",
    specialties: [
      "Anxiety & Panic Disorders",
      "CBT & ACT",
      "Workplace Burnout",
      "LGBTQ+ Affirming Care",
    ],
    bio: "Yuki is a licensed professional counselor specializing in anxiety disorders, OCD, and work-related burnout. She uses a combination of CBT and Acceptance and Commitment Therapy (ACT) to help clients move from anxious avoidance toward a values-driven, flexible relationship with their thoughts and fears. She provides LGBTQ+ affirming care.",
    education: "MA, Counseling Psychology — University of Denver",
    yearsExperience: 6,
    approachPhilosophy:
      "Anxiety doesn't have to run your life — and you don't have to eliminate it to thrive.",
    acceptingNewClients: true,
    offersTelehealth: true,
    serviceIds: ["svc_cbt01", "svc_tele06", "svc_grp07"],
    imagePlaceholder: "#d4c4a0",
  },
];

// ===========================================================================
// CLIENT TESTIMONIALS (first name + last initial only — HIPAA-safe)
// ===========================================================================

export const testimonials: Testimonial[] = [
  {
    id: "tst_w2m7n",
    attribution: "Sarah M.",
    conditionCategory: "anxiety",
    serviceReceived: "Individual CBT Therapy",
    quote:
      "I came to Mindwell after years of trying to 'just push through' my anxiety. Within three months of working with my therapist, I had actual tools — not just coping strategies I'd read in a book, but skills that fit my life. I finally feel like I'm driving the bus.",
    outcomeStatement:
      "After 16 sessions of CBT, Sarah reduced her panic frequency from daily to fewer than once per month.",
    rating: 5,
    monthsInTreatment: 5,
    featured: true,
  },
  {
    id: "tst_k9b3x",
    attribution: "David T.",
    conditionCategory: "substance_use",
    serviceReceived: "Substance Use Treatment",
    quote:
      "I was skeptical of therapy — I'd tried it before and felt judged. Marcus never made me feel that way. He helped me understand what I was running from without making me feel like a failure. Two years sober now, and I still come in for maintenance sessions.",
    outcomeStatement:
      "David completed Mindwell's outpatient substance use program and has maintained sobriety for 24 months.",
    rating: 5,
    monthsInTreatment: 18,
    featured: true,
  },
  {
    id: "tst_r5q1v",
    attribution: "Jennifer K.",
    conditionCategory: "trauma_ptsd",
    serviceReceived: "EMDR Therapy",
    quote:
      "I spent 15 years thinking my trauma was just 'part of me' and that I had to live around it. Dr. Okonkwo explained EMDR clearly, and honestly I was skeptical. But after eight sessions, memories that used to stop me in my tracks lost their grip. I can think about what happened without shutting down.",
    outcomeStatement:
      "Jennifer's PTSD symptom score (PCL-5) dropped from severe to below clinical threshold after 10 EMDR sessions.",
    rating: 5,
    monthsInTreatment: 6,
    featured: true,
  },
  {
    id: "tst_n4h8w",
    attribution: "Michael & Priya R.",
    conditionCategory: "relationship_issues",
    serviceReceived: "Couples Therapy",
    quote:
      "We were on the verge of ending our marriage. Elena didn't take sides — she helped us each see the other's perspective in a way we couldn't on our own. We learned to fight better, not less. The Gottman tools we learned in sessions still come up in conversations years later.",
    outcomeStatement:
      "Completed a 14-session Gottman couples program; reported significantly improved communication and reduced conflict frequency.",
    rating: 5,
    monthsInTreatment: 7,
    featured: false,
  },
  {
    id: "tst_e7f2t",
    attribution: "Lauren B.",
    conditionCategory: "mood_disorder",
    serviceReceived: "DBT Therapy",
    quote:
      "DBT saved my life — I don't say that lightly. I entered the program in crisis, and the distress tolerance skills gave me something to hold onto in the worst moments. Fourteen months later I'm managing my emotions in a way that would have felt impossible when I started.",
    outcomeStatement:
      "Lauren completed the full 6-month DBT program and continued in individual maintenance therapy for 8 additional months.",
    rating: 5,
    monthsInTreatment: 14,
    featured: true,
  },
  {
    id: "tst_c3a6u",
    attribution: "Renata V.",
    conditionCategory: "life_transitions",
    serviceReceived: "Telehealth Therapy",
    quote:
      "As a working mom with a travel schedule, in-person therapy just wasn't happening for me. Telehealth through Mindwell gave me access to quality care that fit my life. My therapist Yuki is excellent — just as connected and effective on video as I imagine she would be in person.",
    outcomeStatement:
      "Renata maintained consistent weekly sessions for 9 months through telehealth, achieving stated goals around work-life boundaries and anxiety management.",
    rating: 4,
    monthsInTreatment: 9,
    featured: false,
  },
  {
    id: "tst_m1s9p",
    attribution: "Tamara O.",
    conditionCategory: "depression",
    serviceReceived: "Integrated Care (Therapy + Medication Management)",
    quote:
      "My depression had gotten to the point where getting out of bed felt impossible. Mindwell connected me with both a therapist and their psychiatric nurse practitioner — the coordinated care made a huge difference. I didn't have to repeat my story to five different providers.",
    outcomeStatement:
      "Tamara achieved PHQ-9 symptom remission within 4 months of integrated behavioral health treatment.",
    rating: 5,
    monthsInTreatment: 8,
    featured: false,
  },
  {
    id: "tst_h0k4z",
    attribution: "Carlos N.",
    conditionCategory: "grief_loss",
    serviceReceived: "Individual Therapy & Grief Support Group",
    quote:
      "After losing my father, I was drowning and didn't know how to ask for help. The grief support group at Mindwell was unlike anything I expected — it felt less like therapy and more like being understood by people who actually knew what it felt like. My individual therapist helped me hold the rest of my life together at the same time.",
    outcomeStatement:
      "Carlos participated in both individual therapy and Mindwell's grief support group for 7 months, returning to work full-time.",
    rating: 5,
    monthsInTreatment: 7,
    featured: false,
  },
];

// ===========================================================================
// BLOG POSTS (SEO-focused, behavioral health topics)
// ===========================================================================

export const blogPosts: BlogPost[] = [
  {
    id: "blg_h9q3t",
    title: "CBT vs. DBT: Which Therapy Is Right for You?",
    slug: "cbt-vs-dbt-which-therapy-is-right-for-you",
    excerpt:
      "Cognitive Behavioral Therapy and Dialectical Behavior Therapy are both evidence-based — but they serve different needs. Learn which approach fits your situation.",
    category: "treatment_guides",
    categoryLabel: "Treatment Guides",
    author: "Dr. Ananya Krishnan, PsyD",
    authorId: "tm_f5j1m",
    publishDate: "2026-01-28T09:00:00Z",
    readTimeMinutes: 8,
    targetKeyword: "CBT vs DBT therapy",
    featured: true,
    tags: ["CBT", "DBT", "therapy types", "evidence-based treatment", "mental health"],
  },
  {
    id: "blg_t4r7m",
    title: "What to Expect in Your First Therapy Session",
    slug: "what-to-expect-first-therapy-session",
    excerpt:
      "Starting therapy can feel intimidating. Here's an honest look at what happens in an initial session — and how to make the most of it.",
    category: "treatment_guides",
    categoryLabel: "Treatment Guides",
    author: "Yuki Tanaka, LPC",
    authorId: "tm_k6c1p",
    publishDate: "2026-02-11T09:00:00Z",
    readTimeMinutes: 6,
    targetKeyword: "what to expect first therapy session",
    featured: true,
    tags: ["starting therapy", "intake session", "anxiety about therapy", "first appointment"],
  },
  {
    id: "blg_p2n8k",
    title: "7 Signs Your Anxiety Has Crossed Into Disorder Territory",
    slug: "signs-anxiety-disorder-vs-normal-worry",
    excerpt:
      "Everyone worries — but when does everyday anxiety become a disorder that benefits from professional treatment? A licensed therapist explains the difference.",
    category: "anxiety_depression",
    categoryLabel: "Anxiety & Depression",
    author: "Yuki Tanaka, LPC",
    authorId: "tm_k6c1p",
    publishDate: "2026-01-14T10:30:00Z",
    readTimeMinutes: 7,
    targetKeyword: "signs of anxiety disorder",
    featured: false,
    tags: ["anxiety disorder", "GAD", "panic attacks", "when to seek help", "mental health"],
  },
  {
    id: "blg_m6s2v",
    title: "EMDR for Trauma: A Therapist's Guide to the Process",
    slug: "emdr-therapy-trauma-what-happens",
    excerpt:
      "EMDR sounds unusual to many people — eye movements as therapy? Here's how it actually works, backed by 30 years of research.",
    category: "trauma_recovery",
    categoryLabel: "Trauma Recovery",
    author: "Dr. Sarah Okonkwo, PhD",
    authorId: "tm_r4p9k",
    publishDate: "2025-12-19T09:00:00Z",
    readTimeMinutes: 10,
    targetKeyword: "EMDR therapy for trauma",
    featured: false,
    tags: ["EMDR", "trauma therapy", "PTSD treatment", "eye movement desensitization", "evidence-based"],
  },
  {
    id: "blg_v1w5c",
    title: "How to Talk to Your Child About Going to Therapy",
    slug: "how-to-talk-to-child-about-therapy",
    excerpt:
      "Many parents hesitate before bringing their child to therapy — unsure how to explain it without creating fear or stigma. Here's an age-appropriate guide.",
    category: "parenting_family",
    categoryLabel: "Parenting & Family",
    author: "James Whitfield, LPC",
    authorId: "tm_j7b4r",
    publishDate: "2026-01-07T11:00:00Z",
    readTimeMinutes: 7,
    targetKeyword: "how to tell child about therapy",
    featured: false,
    tags: ["child therapy", "parenting", "children's mental health", "therapy for kids", "anxiety in children"],
  },
  {
    id: "blg_q8a4j",
    title: "Does Insurance Cover Therapy? A Complete Guide for 2026",
    slug: "does-insurance-cover-therapy-2026",
    excerpt:
      "Mental health coverage has expanded significantly under the Mental Health Parity Act — but navigating insurance for therapy is still confusing. We break it down.",
    category: "treatment_guides",
    categoryLabel: "Treatment Guides",
    author: "Marcus Delaney, LCSW",
    authorId: "tm_w8n2q",
    publishDate: "2026-02-03T09:00:00Z",
    readTimeMinutes: 9,
    targetKeyword: "does insurance cover therapy",
    featured: true,
    tags: ["insurance", "mental health coverage", "therapy cost", "in-network therapist", "Aetna BCBS Cigna"],
  },
  {
    id: "blg_b3f9r",
    title: "Substance Use and Mental Health: Understanding Co-occurring Disorders",
    slug: "substance-use-mental-health-co-occurring-disorders",
    excerpt:
      "Depression and alcohol use. Anxiety and cannabis use. These combinations are far more common than most people realize — and they require integrated treatment.",
    category: "substance_use",
    categoryLabel: "Substance Use",
    author: "Marcus Delaney, LCSW",
    authorId: "tm_w8n2q",
    publishDate: "2025-11-24T10:00:00Z",
    readTimeMinutes: 8,
    targetKeyword: "co-occurring disorders substance use mental health",
    featured: false,
    tags: ["substance use", "dual diagnosis", "co-occurring disorders", "alcohol use disorder", "integrated treatment"],
  },
  {
    id: "blg_d7e6n",
    title: "Is Telehealth Therapy as Effective as In-Person? What the Research Says",
    slug: "telehealth-therapy-effectiveness-research",
    excerpt:
      "With telehealth now mainstream, clients often ask: is online therapy really as good? The evidence is compelling — here's a summary of what we know.",
    category: "treatment_guides",
    categoryLabel: "Treatment Guides",
    author: "Dr. Sarah Okonkwo, PhD",
    authorId: "tm_r4p9k",
    publishDate: "2026-02-19T09:30:00Z",
    readTimeMinutes: 6,
    targetKeyword: "telehealth therapy effectiveness",
    featured: false,
    tags: ["telehealth therapy", "online therapy", "research", "effectiveness", "video therapy"],
  },
  {
    id: "blg_x5o1g",
    title: "DBT Skills for Daily Life: The TIPP Technique for Intense Emotions",
    slug: "dbt-tipp-technique-intense-emotions",
    excerpt:
      "One of DBT's most useful distress tolerance skills — the TIPP technique — can interrupt emotional escalation in minutes. Here's how to use it.",
    category: "wellness_tips",
    categoryLabel: "Wellness Tips",
    author: "Dr. Ananya Krishnan, PsyD",
    authorId: "tm_f5j1m",
    publishDate: "2025-12-03T10:00:00Z",
    readTimeMinutes: 5,
    targetKeyword: "DBT TIPP skill distress tolerance",
    featured: false,
    tags: ["DBT", "distress tolerance", "emotional regulation", "TIPP technique", "coping skills"],
  },
  {
    id: "blg_l9k2h",
    title: "Teen Mental Health in 2026: Warning Signs Parents Need to Know",
    slug: "teen-mental-health-warning-signs-2026",
    excerpt:
      "Adolescent mental health has deteriorated significantly over the past decade. What warning signs indicate a teen needs professional support — and what to do next.",
    category: "teen_mental_health",
    categoryLabel: "Teen Mental Health",
    author: "James Whitfield, LPC",
    authorId: "tm_j7b4r",
    publishDate: "2026-01-21T09:00:00Z",
    readTimeMinutes: 8,
    targetKeyword: "teen mental health warning signs",
    featured: false,
    tags: ["teen mental health", "adolescent therapy", "warning signs", "parenting teenagers", "school anxiety"],
  },
];

// ===========================================================================
// INSURANCE PROVIDERS
// ===========================================================================

export const insuranceProviders: InsuranceProvider[] = [
  {
    id: "ins_ae4m1",
    name: "Aetna",
    shortName: "Aetna",
    planTypes: ["PPO", "HMO", "EPO", "HDHP"],
    inNetwork: true,
    acceptedForTelehealth: true,
    verificationNote:
      "Aetna members: mental health benefits typically include outpatient therapy with a copay after deductible. Call the member services number on the back of your card to verify your specific plan coverage.",
    logoPlaceholder: "#7b1c2e",
  },
  {
    id: "ins_bc5n2",
    name: "Blue Cross Blue Shield",
    shortName: "BCBS",
    planTypes: ["PPO", "HMO", "EPO", "BlueCard"],
    inNetwork: true,
    acceptedForTelehealth: true,
    verificationNote:
      "BCBS coverage varies significantly by state plan. We are in-network with the majority of BCBS PPO plans. Contact us and we'll verify your specific plan at no charge.",
    logoPlaceholder: "#003087",
  },
  {
    id: "ins_ci6p3",
    name: "Cigna",
    shortName: "Cigna",
    planTypes: ["PPO", "HMO", "Open Access Plus"],
    inNetwork: true,
    acceptedForTelehealth: true,
    verificationNote:
      "Cigna plans typically cover outpatient behavioral health services. Telehealth parity laws ensure telehealth sessions are covered at the same rate as in-person visits.",
    logoPlaceholder: "#006d9e",
  },
  {
    id: "ins_uh7q4",
    name: "United Healthcare",
    shortName: "United",
    planTypes: ["Choice Plus PPO", "Navigate HMO", "Options PPO"],
    inNetwork: true,
    acceptedForTelehealth: true,
    verificationNote:
      "UnitedHealthcare members have access to mental health benefits under the Federal Mental Health Parity Act. We are in-network with UnitedHealthcare commercial plans.",
    logoPlaceholder: "#2e6da4",
  },
  {
    id: "ins_hm8r5",
    name: "Humana",
    shortName: "Humana",
    planTypes: ["PPO", "HMO", "Humana Choice"],
    inNetwork: true,
    acceptedForTelehealth: true,
    verificationNote:
      "Humana commercial and Medicare Advantage plans accepted. Contact our billing coordinator to verify coverage before your first appointment.",
    logoPlaceholder: "#006a3c",
  },
  {
    id: "ins_mc9s6",
    name: "Medicaid",
    shortName: "Medicaid",
    planTypes: ["State Medicaid", "Managed Medicaid"],
    inNetwork: true,
    acceptedForTelehealth: true,
    verificationNote:
      "We accept state Medicaid for qualifying clients. Medicaid covers outpatient mental health and substance use treatment. Call us — we'll help verify eligibility.",
    logoPlaceholder: "#1a5276",
  },
  {
    id: "ins_ok0t7",
    name: "Oscar Health",
    shortName: "Oscar",
    planTypes: ["Classic PPO", "Simple PPO"],
    inNetwork: true,
    acceptedForTelehealth: true,
    verificationNote:
      "Oscar Health members: behavioral health services are covered under your mental health benefit. Oscar's telehealth coverage is especially strong.",
    logoPlaceholder: "#e84c3d",
  },
  {
    id: "ins_mv1u8",
    name: "Maven / Self-Pay",
    shortName: "Self-Pay",
    planTypes: ["Out-of-Pocket", "Superbill Provided"],
    inNetwork: false,             // edge case: self-pay / out-of-network
    acceptedForTelehealth: true,
    verificationNote:
      "No insurance? Our sliding scale fee ranges from $90–$200 per session based on income. We provide superbills for out-of-network reimbursement.",
    logoPlaceholder: "#6c757d",
  },
];

// ===========================================================================
// INTAKE FORM FIELDS (HIPAA-aware — 18 fields across 6 sections)
// ===========================================================================

export const intakeFormFields: ContactFormField[] = [
  // — Personal Information —
  {
    id: "fld_fn001",
    section: "personal_information",
    sectionLabel: "Personal Information",
    label: "Legal First Name",
    type: "text",
    required: true,
    placeholder: "First name as it appears on your insurance card",
    isPHI: true,
  },
  {
    id: "fld_ln002",
    section: "personal_information",
    sectionLabel: "Personal Information",
    label: "Legal Last Name",
    type: "text",
    required: true,
    placeholder: "Last name",
    isPHI: true,
  },
  {
    id: "fld_dob003",
    section: "personal_information",
    sectionLabel: "Personal Information",
    label: "Date of Birth",
    type: "date",
    required: true,
    helpText: "Required for insurance verification and medical records",
    isPHI: true,
  },
  {
    id: "fld_pn004",
    section: "personal_information",
    sectionLabel: "Personal Information",
    label: "Preferred Name",
    type: "text",
    required: false,
    placeholder: "If different from legal name",
    helpText: "We will use your preferred name in all communications",
    isPHI: false,
  },
  // — Contact Details —
  {
    id: "fld_em005",
    section: "contact_details",
    sectionLabel: "Contact Details",
    label: "Email Address",
    type: "email",
    required: true,
    placeholder: "your@email.com",
    helpText: "Used only for appointment reminders and secure portal access. Never shared.",
    isPHI: true,
  },
  {
    id: "fld_ph006",
    section: "contact_details",
    sectionLabel: "Contact Details",
    label: "Phone Number",
    type: "tel",
    required: true,
    placeholder: "(555) 000-0000",
    isPHI: true,
  },
  {
    id: "fld_ct007",
    section: "contact_details",
    sectionLabel: "Contact Details",
    label: "Preferred Contact Method",
    type: "radio",
    required: true,
    options: [
      { value: "phone_call", label: "Phone call" },
      { value: "text_message", label: "Text message" },
      { value: "email", label: "Email" },
      { value: "patient_portal", label: "Patient portal message" },
    ],
    isPHI: false,
  },
  // — Insurance Information —
  {
    id: "fld_ip008",
    section: "insurance_information",
    sectionLabel: "Insurance Information",
    label: "Insurance Provider",
    type: "select",
    required: true,
    options: [
      { value: "aetna", label: "Aetna" },
      { value: "bcbs", label: "Blue Cross Blue Shield" },
      { value: "cigna", label: "Cigna" },
      { value: "united", label: "United Healthcare" },
      { value: "humana", label: "Humana" },
      { value: "medicaid", label: "Medicaid" },
      { value: "oscar", label: "Oscar Health" },
      { value: "self_pay", label: "Self-Pay / No Insurance" },
      { value: "other", label: "Other (we'll verify)" },
    ],
    helpText: "Not sure if we accept your plan? Select your carrier and we'll verify before your appointment.",
    isPHI: true,
  },
  {
    id: "fld_mid009",
    section: "insurance_information",
    sectionLabel: "Insurance Information",
    label: "Member ID",
    type: "text",
    required: false,
    placeholder: "Found on the front of your insurance card",
    helpText: "Helps us verify your benefits faster — optional but speeds up the process",
    isPHI: true,
  },
  // — Clinical Information —
  {
    id: "fld_rv010",
    section: "clinical_information",
    sectionLabel: "Reason for Visit",
    label: "Primary Reason for Seeking Care",
    type: "select",
    required: true,
    options: [
      { value: "anxiety", label: "Anxiety or worry" },
      { value: "depression", label: "Depression or low mood" },
      { value: "trauma", label: "Trauma or PTSD" },
      { value: "relationship", label: "Relationship or family issues" },
      { value: "substance_use", label: "Substance use or addiction" },
      { value: "grief", label: "Grief or loss" },
      { value: "mood_disorder", label: "Mood disorder (bipolar, BPD)" },
      { value: "adhd", label: "ADHD or attention issues" },
      { value: "eating_disorder", label: "Eating disorder" },
      { value: "life_transitions", label: "Life transitions or stress" },
      { value: "other", label: "Other / Not sure" },
    ],
    isPHI: true,
  },
  {
    id: "fld_add011",
    section: "clinical_information",
    sectionLabel: "Reason for Visit",
    label: "Additional Context (Optional)",
    type: "textarea",
    required: false,
    placeholder:
      "Share anything that would help us match you with the right clinician — what you're experiencing, what you've tried before, or what you're hoping for from treatment.",
    helpText:
      "This is fully confidential and protected under HIPAA. You can write as much or as little as you'd like.",
    isPHI: true,
  },
  {
    id: "fld_pt012",
    section: "clinical_information",
    sectionLabel: "Reason for Visit",
    label: "Therapy Format Preference",
    type: "radio",
    required: true,
    options: [
      { value: "in_person", label: "In-person only" },
      { value: "telehealth", label: "Telehealth (video) only" },
      { value: "no_preference", label: "No preference" },
    ],
    isPHI: false,
  },
  {
    id: "fld_pt013",
    section: "clinical_information",
    sectionLabel: "Reason for Visit",
    label: "Previous Therapy Experience",
    type: "select",
    required: false,
    options: [
      { value: "never", label: "This is my first time seeking therapy" },
      { value: "some", label: "I've been to therapy before but not recently" },
      { value: "current", label: "I'm currently in therapy elsewhere" },
      { value: "recent", label: "I've been in therapy recently but am not currently" },
    ],
    isPHI: true,
  },
  // — Emergency Contact —
  {
    id: "fld_ec014",
    section: "emergency_contact",
    sectionLabel: "Emergency Contact",
    label: "Emergency Contact Name",
    type: "text",
    required: true,
    placeholder: "Full name of emergency contact",
    isPHI: true,
  },
  {
    id: "fld_ep015",
    section: "emergency_contact",
    sectionLabel: "Emergency Contact",
    label: "Emergency Contact Phone",
    type: "tel",
    required: true,
    placeholder: "(555) 000-0000",
    isPHI: true,
  },
  {
    id: "fld_er016",
    section: "emergency_contact",
    sectionLabel: "Emergency Contact",
    label: "Relationship to Emergency Contact",
    type: "select",
    required: true,
    options: [
      { value: "spouse_partner", label: "Spouse / Partner" },
      { value: "parent", label: "Parent" },
      { value: "sibling", label: "Sibling" },
      { value: "child", label: "Adult Child" },
      { value: "friend", label: "Friend" },
      { value: "other_family", label: "Other Family Member" },
      { value: "other", label: "Other" },
    ],
    isPHI: true,
  },
  // — Consent —
  {
    id: "fld_cs017",
    section: "consent_agreements",
    sectionLabel: "Consent & Agreements",
    label: "Consent to Treatment",
    type: "checkbox",
    required: true,
    helpText:
      "I understand that behavioral health services involve voluntary participation. I consent to an intake assessment and, if appropriate, an individualized treatment plan developed collaboratively with my clinician.",
    isPHI: false,
  },
  {
    id: "fld_hp018",
    section: "consent_agreements",
    sectionLabel: "Consent & Agreements",
    label: "HIPAA Privacy Notice Acknowledgment",
    type: "checkbox",
    required: true,
    helpText:
      "I acknowledge receipt of Mindwell Behavioral Health's Notice of Privacy Practices, which explains how my protected health information (PHI) is used and disclosed. I understand my rights under HIPAA.",
    isPHI: false,
  },
];

// ===========================================================================
// CLINIC LOCATIONS
// ===========================================================================

export const locations: Location[] = [
  {
    id: "loc_main1",
    name: "Mindwell — Midtown",
    address: "1840 Peachtree Road NW, Suite 310",
    city: "Atlanta",
    state: "GA",
    zip: "30309",
    phone: "(404) 887-2241",
    fax: "(404) 887-2249",
    email: "midtown@mindwellbh.com",
    isMainLocation: true,
    offersTelehealth: true,
    hours: [
      { day: "Monday", open: "8:00 AM", close: "7:00 PM", closed: false },
      { day: "Tuesday", open: "8:00 AM", close: "7:00 PM", closed: false },
      { day: "Wednesday", open: "8:00 AM", close: "7:00 PM", closed: false },
      { day: "Thursday", open: "8:00 AM", close: "7:00 PM", closed: false },
      { day: "Friday", open: "8:00 AM", close: "5:00 PM", closed: false },
      { day: "Saturday", open: "9:00 AM", close: "1:00 PM", closed: false },
      { day: "Sunday", open: "", close: "", closed: true },
    ],
    parkingNote: "Free parking in the Peachtree Park complex. Validated for all Mindwell appointments.",
    accessibilityNote: "ADA accessible. Elevator access to all floors. Accessible restrooms on suite level.",
    mapEmbedPlaceholder: "#c8d8c0",
  },
  {
    id: "loc_sth2",
    name: "Mindwell — Buckhead",
    address: "3565 Piedmont Road NE, Suite 205",
    city: "Atlanta",
    state: "GA",
    zip: "30305",
    phone: "(404) 812-4870",
    fax: undefined,
    email: "buckhead@mindwellbh.com",
    isMainLocation: false,
    offersTelehealth: true,
    hours: [
      { day: "Monday", open: "9:00 AM", close: "6:00 PM", closed: false },
      { day: "Tuesday", open: "9:00 AM", close: "6:00 PM", closed: false },
      { day: "Wednesday", open: "9:00 AM", close: "6:00 PM", closed: false },
      { day: "Thursday", open: "9:00 AM", close: "6:00 PM", closed: false },
      { day: "Friday", open: "9:00 AM", close: "4:00 PM", closed: false },
      { day: "Saturday", open: "", close: "", closed: true },   // edge case: no weekend hours at satellite
      { day: "Sunday", open: "", close: "", closed: true },
    ],
    parkingNote: "Street parking available. Piedmont Center garage is one block north.",
    accessibilityNote: "ADA accessible building with elevator access.",
    mapEmbedPlaceholder: "#c8d0dc",
  },
];

// ===========================================================================
// FAQ ENTRIES
// ===========================================================================

export const faqs: FAQ[] = [
  {
    id: "faq_gs001",
    category: "getting_started",
    categoryLabel: "Getting Started",
    question: "How do I know if therapy is right for me?",
    answer:
      "If you're experiencing persistent anxiety, sadness, stress, relationship difficulties, or any emotional struggle that's affecting your daily life, therapy can help. You don't need to be in crisis to benefit. Many people come to therapy for personal growth, life transitions, or simply to have a skilled, objective sounding board. If you're wondering whether to try it — that curiosity is itself a good enough reason.",
    featured: true,
  },
  {
    id: "faq_gs002",
    category: "getting_started",
    categoryLabel: "Getting Started",
    question: "What happens during an intake assessment?",
    answer:
      "Your first appointment is a 55-minute intake session where your clinician gathers a thorough understanding of your history, current concerns, and treatment goals. This is a two-way conversation — you're also assessing whether this clinician is the right fit for you. At the end of the intake, your clinician will share their initial clinical impressions and recommend a treatment plan. You are under no obligation to continue after the intake.",
    featured: true,
  },
  {
    id: "faq_ib003",
    category: "insurance_billing",
    categoryLabel: "Insurance & Billing",
    question: "Do you accept insurance for therapy?",
    answer:
      "Yes. We are in-network with Aetna, BCBS, Cigna, United Healthcare, Humana, Medicaid, and Oscar Health, covering the majority of our clients. We also offer sliding scale fees for self-pay clients (ranging from $90–$200 per session based on income), and we provide superbills for out-of-network reimbursement. Contact us and we'll verify your specific benefits before your first appointment — at no charge.",
    featured: true,
  },
  {
    id: "faq_ib004",
    category: "insurance_billing",
    categoryLabel: "Insurance & Billing",
    question: "What does a typical out-of-pocket cost look like?",
    answer:
      "For insured clients, your cost is typically your specialist copay or coinsurance after your deductible, commonly ranging from $20–$60 per session depending on your plan. For self-pay clients, our sliding scale starts at $90/session. Psychiatric medication management appointments are billed separately and typically have different cost-sharing than therapy sessions — your insurance card will indicate your mental health benefit tier.",
    featured: false,
  },
  {
    id: "faq_wte005",
    category: "what_to_expect",
    categoryLabel: "What to Expect",
    question: "How long does therapy typically last?",
    answer:
      "Treatment length varies by presenting concern and your individual goals. Short-term therapy (12–16 sessions) is often sufficient for focused concerns like adjustment to a life transition or specific phobia. Longer-term work is common for complex trauma, personality-level concerns, or deeply ingrained patterns. Your clinician will discuss expected duration during your intake and revisit this periodically. Many clients also use therapy in episodes — returning for a \"booster\" course during challenging periods rather than staying indefinitely.",
    featured: false,
  },
  {
    id: "faq_wte006",
    category: "what_to_expect",
    categoryLabel: "What to Expect",
    question: "How do I know if a therapist is a good fit for me?",
    answer:
      "The therapeutic relationship — the sense of trust, safety, and collaboration between you and your clinician — is one of the strongest predictors of treatment success. In your intake, pay attention to whether you feel heard and understood, not judged. It's completely normal to try more than one therapist before finding the right fit. If after two or three sessions you don't feel a connection, it's okay to tell your therapist or contact us for a rematch — we want you to find the right person.",
    featured: false,
  },
  {
    id: "faq_tele007",
    category: "telehealth",
    categoryLabel: "Telehealth",
    question: "Is telehealth therapy as effective as in-person?",
    answer:
      "For most presentations — including anxiety, depression, PTSD, relationship issues, and adjustment disorders — research shows telehealth therapy produces equivalent outcomes to in-person care. A meta-analysis of 64 studies published in the Journal of Anxiety Disorders found no significant difference in outcomes between video-based and in-person CBT. Some clients actually prefer telehealth because it removes barriers of commute, childcare, and scheduling. A small number of conditions or treatment modalities (e.g., some aspects of EMDR or child play therapy) are better suited to in-person work — your clinician will advise you.",
    featured: false,
  },
  {
    id: "faq_tele008",
    category: "telehealth",
    categoryLabel: "Telehealth",
    question: "What technology do I need for telehealth sessions?",
    answer:
      "A device with a camera and microphone (smartphone, tablet, laptop, or desktop computer), a stable internet connection, and a private space where you won't be overheard. We use a HIPAA-compliant video platform — no app download required, just a secure link sent before each session. Most clients find their phone or laptop works perfectly well.",
    featured: false,
  },
  {
    id: "faq_cs009",
    category: "crisis_support",
    categoryLabel: "Crisis Support",
    question: "What should I do if I'm in crisis between sessions?",
    answer:
      "If you are in immediate danger, call 911 or go to your nearest emergency room. For mental health crisis support, call or text 988 (the Suicide & Crisis Lifeline) — available 24/7. You can also text HOME to 741741 (Crisis Text Line). Contact your Mindwell clinician through the patient portal — while we cannot guarantee same-day response, urgent messages are triaged by our clinical staff. We will provide you with a personalized crisis plan as part of your treatment.",
    featured: true,
  },
  {
    id: "faq_hp010",
    category: "privacy_hipaa",
    categoryLabel: "Privacy & HIPAA",
    question: "Is everything I share in therapy confidential?",
    answer:
      "Yes, with very limited legal exceptions. Your clinician is bound by HIPAA, state licensing law, and professional ethics to maintain strict confidentiality. The exceptions are narrow and exist to protect safety: (1) if you disclose intent to harm yourself or someone else imminently, (2) if there is reasonable suspicion of child, elder, or dependent adult abuse, or (3) if a court of law orders disclosure. Outside of these situations, nothing you share will leave the room without your written authorization. We take confidentiality seriously and will explain these limits fully at your intake.",
    featured: false,
  },
];

// ===========================================================================
// CHART DATA — OUTCOMES AND SERVICE BREAKDOWN
// ===========================================================================

/**
 * Monthly outcomes trend — behavioral health seasonality pattern:
 * - Q1 (Jan/Feb): New Year mental health resolutions spike
 * - Spring: moderate, steady engagement
 * - Summer: dip (vacations, scheduling challenges)
 * - September: back-to-school stress surge
 * - Nov–Dec: holiday season/insurance year-end push
 * - Note: treatment completion rate lags new client volume by ~2 months
 */
export const monthlyOutcomes: OutcomeDataPoint[] = [
  { month: "Mar", clientsServed: 187, treatmentCompletions: 24, satisfactionScore: 91 },
  { month: "Apr", clientsServed: 194, treatmentCompletions: 28, satisfactionScore: 93 },
  { month: "May", clientsServed: 201, treatmentCompletions: 31, satisfactionScore: 92 },
  { month: "Jun", clientsServed: 178, treatmentCompletions: 27, satisfactionScore: 90 },  // early summer dip
  { month: "Jul", clientsServed: 162, treatmentCompletions: 22, satisfactionScore: 89 },  // summer low
  { month: "Aug", clientsServed: 174, treatmentCompletions: 26, satisfactionScore: 91 },
  { month: "Sep", clientsServed: 213, treatmentCompletions: 30, satisfactionScore: 94 },  // back-to-school surge
  { month: "Oct", clientsServed: 228, treatmentCompletions: 34, satisfactionScore: 93 },
  { month: "Nov", clientsServed: 247, treatmentCompletions: 38, satisfactionScore: 92 },  // insurance year-end
  { month: "Dec", clientsServed: 219, treatmentCompletions: 41, satisfactionScore: 90 },  // holiday disruption
  { month: "Jan", clientsServed: 264, treatmentCompletions: 33, satisfactionScore: 94 },  // New Year resolution spike
  { month: "Feb", clientsServed: 241, treatmentCompletions: 36, satisfactionScore: 95 },
];

/**
 * Service utilization breakdown — what clients are actually seeking
 * Reflects realistic behavioral health demand distribution:
 * anxiety/depression dominate, trauma is meaningful minority
 */
export const serviceBreakdown: ServiceBreakdownPoint[] = [
  { service: "Cognitive Behavioral Therapy (CBT)", shortName: "CBT", clientCount: 312, percentage: 28.4 },
  { service: "Anxiety & Depression (Mixed)", shortName: "Anxiety/Dep", clientCount: 198, percentage: 18.0 },
  { service: "Telehealth Therapy", shortName: "Telehealth", clientCount: 187, percentage: 17.0 },
  { service: "Trauma Recovery / EMDR", shortName: "Trauma/EMDR", clientCount: 143, percentage: 13.0 },
  { service: "Child & Adolescent Therapy", shortName: "Child/Teen", clientCount: 124, percentage: 11.3 },
  { service: "DBT Program", shortName: "DBT", clientCount: 89, percentage: 8.1 },
  { service: "Substance Use Treatment", shortName: "Substance Use", clientCount: 47, percentage: 4.3 },
];

/**
 * Client satisfaction trend — slight dip during summer (scheduling gaps) and
 * December (holiday disruption), then recovery through Q1
 */
export const satisfactionByMonth: ChartDataPoint[] = [
  { month: "Mar", value: 91, target: 90 },
  { month: "Apr", value: 93, target: 90 },
  { month: "May", value: 92, target: 90 },
  { month: "Jun", value: 90, target: 90 },
  { month: "Jul", value: 89, target: 90 },    // slight summer dip
  { month: "Aug", value: 91, target: 90 },
  { month: "Sep", value: 94, target: 91 },
  { month: "Oct", value: 93, target: 91 },
  { month: "Nov", value: 92, target: 91 },
  { month: "Dec", value: 90, target: 91 },    // holiday disruption
  { month: "Jan", value: 94, target: 92 },
  { month: "Feb", value: 95, target: 92 },
];

// ===========================================================================
// LOOKUP HELPERS
// ===========================================================================

export const getServiceById = (id: string): Service | undefined =>
  services.find((s) => s.id === id);

export const getTeamMemberById = (id: string): TeamMember | undefined =>
  teamMembers.find((m) => m.id === id);

export const getBlogPostBySlug = (slug: string): BlogPost | undefined =>
  blogPosts.find((p) => p.slug === slug);

export const getFeaturedTestimonials = (): Testimonial[] =>
  testimonials.filter((t) => t.featured);

export const getFeaturedServices = (): Service[] =>
  services.filter((s) => s.featuredOnHomepage);

export const getFeaturedBlogPosts = (): BlogPost[] =>
  blogPosts.filter((p) => p.featured);

export const getAcceptingClinicians = (): TeamMember[] =>
  teamMembers.filter((m) => m.acceptingNewClients);

export const getIntakeFieldsBySection = (section: ContactFormField["section"]): ContactFormField[] =>
  intakeFormFields.filter((f) => f.section === section);

export const getInNetworkInsurance = (): InsuranceProvider[] =>
  insuranceProviders.filter((i) => i.inNetwork);
