import type { LucideIcon } from "lucide-react";

// ---------------------------------------------------------------------------
// Sidebar navigation
// ---------------------------------------------------------------------------
export interface NavItem {
  href: string;
  label: string;
  icon: LucideIcon;
}

// ---------------------------------------------------------------------------
// Challenge visualization types (used by Challenges Builder)
// ---------------------------------------------------------------------------
export type VisualizationType =
  | "flow"
  | "before-after"
  | "metrics"
  | "architecture"
  | "risk-matrix"
  | "timeline"
  | "dual-kpi"
  | "tech-stack"
  | "decision-flow";

export interface Challenge {
  id: string;
  title: string;
  description: string;
  visualizationType: VisualizationType;
  outcome?: string;
}

// ---------------------------------------------------------------------------
// Proposal types (used by Proposal Builder)
// ---------------------------------------------------------------------------
export interface Profile {
  name: string;
  tagline: string;
  bio: string;
  approach: { title: string; description: string }[];
  skillCategories: { name: string; skills: string[] }[];
}

export interface PortfolioProject {
  id: string;
  title: string;
  description: string;
  tech: string[];
  relevance?: string;
  outcome?: string;
  liveUrl?: string;
}

// ---------------------------------------------------------------------------
// Screen definition for multi-screen-walkthrough demo format
// ---------------------------------------------------------------------------
export interface DemoScreen {
  id: string;
  label: string;
  icon?: LucideIcon;
  href: string;
}

// ---------------------------------------------------------------------------
// Conversion element variant types (fixed — do not remove)
// ---------------------------------------------------------------------------
export type ConversionVariant = "sidebar" | "inline" | "floating" | "banner";

// ===========================================================================
// BEHAVIORAL HEALTH DOMAIN TYPES
// ===========================================================================

// ---------------------------------------------------------------------------
// Treatment modalities / service delivery types
// ---------------------------------------------------------------------------
export type TreatmentModality =
  | "individual_therapy"
  | "group_therapy"
  | "family_therapy"
  | "couples_therapy"
  | "telehealth"
  | "intensive_outpatient"
  | "medication_management"
  | "crisis_support";

export type ServiceCategory =
  | "evidence_based_therapy"
  | "substance_use_treatment"
  | "trauma_recovery"
  | "child_adolescent"
  | "mood_disorders"
  | "anxiety_disorders"
  | "telehealth_services"
  | "medication_management";

export interface Service {
  id: string;                        // e.g. "svc_cbt01"
  name: string;                      // "Cognitive Behavioral Therapy (CBT)"
  shortName: string;                 // "CBT" — used in navigation
  category: ServiceCategory;
  modality: TreatmentModality;
  description: string;               // 2-3 sentence paragraph for Services page
  approach: string;                  // brief evidence-based rationale
  /** Conditions this service addresses */
  treatsConditions: string[];
  /** How many sessions a typical treatment course involves */
  typicalSessionCount: string;       // "12–20 sessions"
  sessionFormat: "in_person" | "telehealth" | "both";
  acceptsInsurance: boolean;
  /** Whether this service requires an intake assessment first */
  requiresIntake: boolean;
  icon: string;                      // Lucide icon name as string
  featuredOnHomepage: boolean;
}

// ---------------------------------------------------------------------------
// Clinician credentials and specializations
// ---------------------------------------------------------------------------
export type ClinicianCredential =
  | "PhD"
  | "PsyD"
  | "LCSW"
  | "LPC"
  | "LMFT"
  | "LPCC"
  | "MD"
  | "APRN"
  | "NP";

export type ClinicianRole =
  | "licensed_therapist"
  | "clinical_psychologist"
  | "psychiatrist"
  | "psychiatric_nurse_practitioner"
  | "clinical_director"
  | "intake_coordinator";

export interface TeamMember {
  id: string;                        // e.g. "tm_r4p9k"
  firstName: string;
  lastName: string;
  credential: ClinicianCredential;
  /** Full display name: "Dr. Sarah Okonkwo, PhD" */
  displayName: string;
  role: ClinicianRole;
  roleLabel: string;                 // human-readable: "Licensed Clinical Psychologist"
  specialties: string[];             // "Trauma-Informed Care", "DBT", "Adolescent Mental Health"
  bio: string;                       // 3-4 sentences
  education: string;                 // "PhD, Clinical Psychology — University of Michigan"
  yearsExperience: number;
  approachPhilosophy: string;        // one sentence on their clinical philosophy
  acceptingNewClients: boolean;
  /** Telehealth availability */
  offersTelehealth: boolean;
  serviceIds: string[];              // references Service.id[]
  imagePlaceholder: string;          // color hex for avatar placeholder
}

// ---------------------------------------------------------------------------
// Client testimonials (first-name + initial only — HIPAA-safe)
// ---------------------------------------------------------------------------
export type TestimonialConditionCategory =
  | "anxiety"
  | "depression"
  | "trauma_ptsd"
  | "substance_use"
  | "relationship_issues"
  | "grief_loss"
  | "mood_disorder"
  | "life_transitions";

export interface Testimonial {
  id: string;                        // e.g. "tst_w2m7n"
  /** First name + last initial only — never full name */
  attribution: string;               // "Sarah M."
  conditionCategory: TestimonialConditionCategory;
  serviceReceived: string;           // "Individual CBT Therapy"
  quote: string;                     // 2-4 sentences
  /** Outcome statement — what changed for them */
  outcomeStatement: string;          // "After 4 months of DBT..."
  rating: 4 | 5;                     // behavioral health practices rarely publish < 4
  monthsInTreatment: number;
  /** Whether this testimonial is featured on the homepage */
  featured: boolean;
}

// ---------------------------------------------------------------------------
// Blog / resource content (SEO-focused)
// ---------------------------------------------------------------------------
export type BlogCategory =
  | "anxiety_depression"
  | "trauma_recovery"
  | "substance_use"
  | "parenting_family"
  | "teen_mental_health"
  | "relationships"
  | "workplace_stress"
  | "treatment_guides"
  | "wellness_tips";

export interface BlogPost {
  id: string;                        // e.g. "blg_h9q3t"
  title: string;                     // SEO-optimized title
  slug: string;                      // URL slug: "cbt-vs-dbt-which-therapy-is-right-for-you"
  excerpt: string;                   // 1-2 sentence summary for cards
  category: BlogCategory;
  categoryLabel: string;             // human-readable
  author: string;                    // references TeamMember display name
  authorId: string;                  // references TeamMember.id
  publishDate: string;               // ISO date string
  readTimeMinutes: number;
  /** Primary keyword this post targets */
  targetKeyword: string;
  /** Whether this post is featured/pinned */
  featured: boolean;
  tags: string[];
}

// ---------------------------------------------------------------------------
// Hero / impact statistics for the homepage
// ---------------------------------------------------------------------------
export interface Stat {
  id: string;
  label: string;                     // "Clients Served"
  value: string;                     // "2,400+"
  numericValue: number;              // for animated counter
  suffix: string;                    // "+", "%", " years"
  description: string;               // brief supporting context
  icon: string;                      // Lucide icon name
}

// ---------------------------------------------------------------------------
// Insurance and payer information
// ---------------------------------------------------------------------------
export interface InsuranceProvider {
  id: string;                        // e.g. "ins_ae4m1"
  name: string;                      // "Aetna"
  shortName: string;                 // "Aetna" or "BCBS"
  planTypes: string[];               // ["PPO", "HMO", "EPO"]
  /** Whether Mindwell is currently in-network */
  inNetwork: boolean;
  /** Whether they accept this for telehealth specifically */
  acceptedForTelehealth: boolean;
  /** Call-to-action note shown on insurance page */
  verificationNote: string;
  logoPlaceholder: string;           // background color for logo placeholder
}

// ---------------------------------------------------------------------------
// HIPAA-aware intake form field definitions
// ---------------------------------------------------------------------------
export type FormFieldType =
  | "text"
  | "email"
  | "tel"
  | "date"
  | "select"
  | "textarea"
  | "checkbox"
  | "radio"
  | "file";

export type FormFieldSection =
  | "personal_information"
  | "contact_details"
  | "insurance_information"
  | "clinical_information"
  | "emergency_contact"
  | "consent_agreements";

export interface SelectOption {
  value: string;
  label: string;
}

export interface ContactFormField {
  id: string;                        // e.g. "fld_fn001"
  section: FormFieldSection;
  sectionLabel: string;              // "Personal Information"
  label: string;                     // "Date of Birth"
  type: FormFieldType;
  required: boolean;
  placeholder?: string;
  helpText?: string;                 // HIPAA context or guidance
  options?: SelectOption[];          // for select/radio fields
  /** Whether this field is encrypted/PHI-protected */
  isPHI: boolean;
}

// ---------------------------------------------------------------------------
// Clinic location information
// ---------------------------------------------------------------------------
export interface ClinicHours {
  day: "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday";
  open: string;                      // "8:00 AM"
  close: string;                     // "6:00 PM"
  closed: boolean;
}

export interface Location {
  id: string;                        // e.g. "loc_main1"
  name: string;                      // "Mindwell — Downtown"
  address: string;
  city: string;
  state: string;
  zip: string;
  phone: string;
  fax?: string;
  email: string;
  isMainLocation: boolean;
  offersTelehealth: boolean;
  hours: ClinicHours[];
  parkingNote?: string;
  accessibilityNote?: string;
  mapEmbedPlaceholder: string;       // color for map placeholder
}

// ---------------------------------------------------------------------------
// FAQ entries for the Services and Contact pages
// ---------------------------------------------------------------------------
export type FAQCategory =
  | "getting_started"
  | "insurance_billing"
  | "what_to_expect"
  | "telehealth"
  | "crisis_support"
  | "privacy_hipaa";

export interface FAQ {
  id: string;                        // e.g. "faq_gs001"
  category: FAQCategory;
  categoryLabel: string;
  question: string;
  answer: string;
  /** Whether this FAQ is shown on the homepage */
  featured: boolean;
}

// ---------------------------------------------------------------------------
// Chart data shapes (for site analytics / outcomes sections)
// ---------------------------------------------------------------------------
export interface ChartDataPoint {
  month: string;
  value: number;
  target?: number;
}

export interface OutcomeDataPoint {
  month: string;
  clientsServed: number;
  treatmentCompletions: number;
  satisfactionScore: number;         // 0-100
}

export interface ServiceBreakdownPoint {
  service: string;
  shortName: string;
  clientCount: number;
  percentage: number;
}

// ---------------------------------------------------------------------------
// Site-level stats object (for homepage hero and admin views)
// ---------------------------------------------------------------------------
export interface SiteStats {
  clientsServed: number;
  clientsServedChange: number;       // % change vs prior year
  treatmentCompletionRate: number;   // percentage
  completionRateChange: number;
  clientSatisfactionScore: number;   // 0-5 scale
  satisfactionChange: number;
  yearsServing: number;
  licensedClinicians: number;
  insurancePlansAccepted: number;
  telehealthAvailable: boolean;
}
