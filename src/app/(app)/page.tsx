"use client";

import { useState, useEffect, useRef, useMemo } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Heart,
  Brain,
  Users,
  Phone,
  Mail,
  MapPin,
  Clock,
  Shield,
  Star,
  CheckCircle,
  Search,
  ChevronRight,
  Video,
  Leaf,
  UserCheck,
  BookOpen,
  Calendar,
  ArrowRight,
  Lock,
  Baby,
  Zap,
  MessageSquare,
} from "lucide-react";
import { cn } from "@/lib/utils";

// ─────────────────────────────────────────────────────────────────────────────
// DATA — Self-contained inline demo data
// ─────────────────────────────────────────────────────────────────────────────

const STATS = [
  { label: "Clients Helped", value: 2500, suffix: "+", icon: Heart },
  { label: "Satisfaction Rate", value: 98, suffix: "%", icon: Star },
  { label: "Licensed Therapists", value: 15, suffix: "+", icon: UserCheck },
  { label: "Clinic Locations", value: 4, suffix: "", icon: MapPin },
];

const SERVICES = [
  {
    id: "cbt",
    name: "Cognitive Behavioral Therapy",
    shortName: "CBT",
    category: "Individual",
    description:
      "Evidence-based talk therapy that helps you identify and reshape negative thought patterns driving anxiety, depression, and unhelpful behaviors.",
    treatsConditions: ["Anxiety", "Depression", "OCD", "PTSD"],
    sessions: "12–20 sessions",
    format: "In-Person & Telehealth",
    icon: Brain,
    featured: true,
  },
  {
    id: "dbt",
    name: "Dialectical Behavior Therapy",
    shortName: "DBT",
    category: "Individual",
    description:
      "Combines CBT with mindfulness to build distress tolerance, emotional regulation, and interpersonal effectiveness skills.",
    treatsConditions: ["BPD", "Self-Harm", "Eating Disorders", "Mood Disorders"],
    sessions: "6–12 months",
    format: "In-Person",
    icon: Heart,
    featured: true,
  },
  {
    id: "emdr",
    name: "EMDR Therapy",
    shortName: "EMDR",
    category: "Specialized",
    description:
      "Eye Movement Desensitization and Reprocessing helps the brain reprocess traumatic memories to reduce their emotional impact.",
    treatsConditions: ["PTSD", "Trauma", "Phobias", "Anxiety"],
    sessions: "8–12 sessions",
    format: "In-Person",
    icon: Zap,
    featured: true,
  },
  {
    id: "family",
    name: "Family Therapy",
    shortName: "Family",
    category: "Family",
    description:
      "Strengthens communication and resolves conflict within family systems, with a focus on creating healthier relational patterns at home.",
    treatsConditions: ["Family Conflict", "Parenting Challenges", "Adolescent Issues"],
    sessions: "8–16 sessions",
    format: "In-Person & Telehealth",
    icon: Users,
    featured: false,
  },
  {
    id: "substance",
    name: "Substance Use Treatment",
    shortName: "SUT",
    category: "Specialized",
    description:
      "Integrated care combining individual therapy, group support, and medication-assisted treatment for alcohol and substance use disorders.",
    treatsConditions: ["Alcohol Use Disorder", "Opioid Dependence", "Co-occurring Disorders"],
    sessions: "Ongoing / 90-day programs",
    format: "In-Person",
    icon: Leaf,
    featured: false,
  },
  {
    id: "telehealth",
    name: "Telehealth Therapy",
    shortName: "Telehealth",
    category: "Individual",
    description:
      "HIPAA-secure video sessions let you receive the same quality of care from the privacy of your home, office, or anywhere with a connection.",
    treatsConditions: ["All Conditions", "Anxiety", "Depression", "Stress"],
    sessions: "Ongoing",
    format: "Telehealth",
    icon: Video,
    featured: true,
  },
  {
    id: "group",
    name: "Group Therapy",
    shortName: "Group",
    category: "Group",
    description:
      "Structured therapeutic groups led by licensed clinicians offering peer connection, shared learning, and communal healing.",
    treatsConditions: ["Social Anxiety", "Grief", "Substance Use", "Depression"],
    sessions: "Ongoing (weekly)",
    format: "In-Person",
    icon: MessageSquare,
    featured: false,
  },
  {
    id: "child-adolescent",
    name: "Child & Adolescent Therapy",
    shortName: "Child/Teen",
    category: "Child/Teen",
    description:
      "Developmentally adapted therapy supporting children and teenagers through anxiety, school challenges, behavioral concerns, and life transitions.",
    treatsConditions: ["ADHD", "School Anxiety", "Behavioral Issues", "Trauma"],
    sessions: "12–24 sessions",
    format: "In-Person & Telehealth",
    icon: Baby,
    featured: false,
  },
];

const SERVICE_CATEGORIES = ["All", "Individual", "Group", "Family", "Specialized", "Child/Teen"];

const TEAM_MEMBERS = [
  {
    id: "tm1",
    firstName: "Sarah",
    lastName: "Okonkwo",
    credential: "PhD",
    displayName: "Dr. Sarah Okonkwo, PhD",
    roleLabel: "Clinical Psychologist",
    specialties: ["Trauma-Informed Care", "DBT", "Women's Mental Health"],
    bio: "Dr. Okonkwo brings 14 years of experience treating complex trauma and mood disorders. She trained at the Beck Institute for CBT and holds a specialty certification in EMDR.",
    yearsExperience: 14,
    initials: "SO",
    color: "#7BAE7F",
    acceptingNewClients: true,
    offersTelehealth: true,
  },
  {
    id: "tm2",
    firstName: "Marcus",
    lastName: "Treviño",
    credential: "LCSW",
    displayName: "Marcus Treviño, LCSW",
    roleLabel: "Licensed Clinical Social Worker",
    specialties: ["Substance Use", "CBT", "Men's Mental Health"],
    bio: "Marcus specializes in co-occurring disorders, combining motivational interviewing with evidence-based CBT to help clients reclaim their lives from addiction.",
    yearsExperience: 9,
    initials: "MT",
    color: "#5E9EA0",
    acceptingNewClients: true,
    offersTelehealth: false,
  },
  {
    id: "tm3",
    firstName: "Priya",
    lastName: "Sharma",
    credential: "LPC",
    displayName: "Priya Sharma, LPC",
    roleLabel: "Licensed Professional Counselor",
    specialties: ["Child & Adolescent", "School-Based Anxiety", "ADHD"],
    bio: "Priya uses play therapy, CBT, and family systems approaches to support children and teens navigating academic pressure, social anxiety, and life transitions.",
    yearsExperience: 7,
    initials: "PS",
    color: "#A89BB8",
    acceptingNewClients: true,
    offersTelehealth: true,
  },
  {
    id: "tm4",
    firstName: "James",
    lastName: "Whitfield",
    credential: "PsyD",
    displayName: "Dr. James Whitfield, PsyD",
    roleLabel: "Clinical Director",
    specialties: ["EMDR", "PTSD", "First Responders"],
    bio: "As Clinical Director, Dr. Whitfield oversees clinical quality and specializes in trauma treatment for veterans, first responders, and survivors of acute trauma.",
    yearsExperience: 18,
    initials: "JW",
    color: "#4A7B5E",
    acceptingNewClients: false,
    offersTelehealth: false,
  },
  {
    id: "tm5",
    firstName: "Elena",
    lastName: "Morales",
    credential: "LMFT",
    displayName: "Elena Morales, LMFT",
    roleLabel: "Licensed Marriage & Family Therapist",
    specialties: ["Couples Therapy", "Family Systems", "Grief & Loss"],
    bio: "Elena specializes in relationship and family dynamics, using Gottman Method couples therapy and narrative approaches to help families and couples reconnect.",
    yearsExperience: 11,
    initials: "EM",
    color: "#C4956A",
    acceptingNewClients: true,
    offersTelehealth: true,
  },
  {
    id: "tm6",
    firstName: "David",
    lastName: "Chen",
    credential: "APRN",
    displayName: "David Chen, APRN",
    roleLabel: "Psychiatric Nurse Practitioner",
    specialties: ["Medication Management", "Depression", "Bipolar Disorder"],
    bio: "David provides comprehensive psychiatric evaluations and medication management, collaborating closely with therapists to ensure holistic treatment plans for complex mood disorders.",
    yearsExperience: 8,
    initials: "DC",
    color: "#6A8FAF",
    acceptingNewClients: true,
    offersTelehealth: true,
  },
  {
    id: "tm7",
    firstName: "Amara",
    lastName: "Osei",
    credential: "LCSW",
    displayName: "Amara Osei, LCSW",
    roleLabel: "Licensed Clinical Social Worker",
    specialties: ["DBT", "Eating Disorders", "Adolescent Mental Health"],
    bio: "Amara's DBT-intensive practice supports adolescents and adults struggling with emotional dysregulation and eating disorders, using skills-based groups and individual sessions.",
    yearsExperience: 6,
    initials: "AO",
    color: "#8BAE7F",
    acceptingNewClients: true,
    offersTelehealth: true,
  },
  {
    id: "tm8",
    firstName: "Robert",
    lastName: "Kim",
    credential: "LPC",
    displayName: "Robert Kim, LPC",
    roleLabel: "Licensed Professional Counselor",
    specialties: ["Anxiety Disorders", "OCD", "Mindfulness-Based Therapy"],
    bio: "Robert integrates mindfulness-based cognitive therapy (MBCT) with ERP for clients managing OCD, generalized anxiety, and panic, with a focus on sustainable daily wellness practices.",
    yearsExperience: 5,
    initials: "RK",
    color: "#7EA0B5",
    acceptingNewClients: true,
    offersTelehealth: true,
  },
];

const SPECIALTY_FILTERS = [
  "All",
  "Trauma & PTSD",
  "Anxiety & OCD",
  "Substance Use",
  "DBT Trained",
  "Child & Teen",
  "Couples & Family",
  "Medication Mgmt",
  "Telehealth",
];

const BLOG_POSTS = [
  {
    id: "blg1",
    title: "CBT vs. DBT: Which Therapy Is Right for You?",
    excerpt: "Both CBT and DBT are highly effective — but they target different challenges. Here's how to know which approach fits your situation.",
    category: "Treatment Guides",
    categoryKey: "treatment",
    author: "Dr. Sarah Okonkwo, PhD",
    publishDate: "Feb 10, 2026",
    readTime: 7,
    featured: true,
    tags: ["CBT", "DBT", "Therapy Comparison"],
  },
  {
    id: "blg2",
    title: "What to Expect at Your First Therapy Appointment",
    excerpt: "Feeling nervous about your intake session? We walk through exactly what happens, what to bring, and how to make the most of your first visit.",
    category: "Getting Started",
    categoryKey: "started",
    author: "Priya Sharma, LPC",
    publishDate: "Feb 3, 2026",
    readTime: 5,
    featured: true,
    tags: ["First Session", "Intake", "Mental Health"],
  },
  {
    id: "blg3",
    title: "5 Signs Your Teen May Benefit from Therapy",
    excerpt: "Mood swings, school refusal, and social withdrawal can signal more than 'typical' adolescent behavior. Learn the warning signs that warrant professional support.",
    category: "Family Support",
    categoryKey: "family",
    author: "Priya Sharma, LPC",
    publishDate: "Jan 28, 2026",
    readTime: 6,
    featured: false,
    tags: ["Teen Mental Health", "Adolescent", "Parenting"],
  },
  {
    id: "blg4",
    title: "Understanding EMDR: How Trauma Therapy Actually Works",
    excerpt: "EMDR can sound unusual, but the research behind it is robust. This guide explains the neuroscience and what a typical session looks like.",
    category: "Treatment Guides",
    categoryKey: "treatment",
    author: "Dr. James Whitfield, PsyD",
    publishDate: "Jan 20, 2026",
    readTime: 9,
    featured: false,
    tags: ["EMDR", "Trauma", "PTSD"],
  },
  {
    id: "blg5",
    title: "Does Insurance Cover Mental Health Therapy?",
    excerpt: "Thanks to the Mental Health Parity Act, most insurance plans must cover behavioral health services. Here's how to verify your benefits before your first session.",
    category: "Wellness Tips",
    categoryKey: "wellness",
    author: "Marcus Treviño, LCSW",
    publishDate: "Jan 14, 2026",
    readTime: 4,
    featured: false,
    tags: ["Insurance", "Billing", "Access to Care"],
  },
  {
    id: "blg6",
    title: "How to Support a Loved One in Recovery from Substance Use",
    excerpt: "Recovery is a family process. Evidence-based strategies to offer support without enabling, and how to set healthy boundaries during a loved one's treatment.",
    category: "Family Support",
    categoryKey: "family",
    author: "Marcus Treviño, LCSW",
    publishDate: "Jan 7, 2026",
    readTime: 8,
    featured: false,
    tags: ["Substance Use", "Recovery", "Family"],
  },
  {
    id: "blg7",
    title: "Mindfulness for Anxiety: A 10-Minute Daily Practice",
    excerpt: "You don't need an app or a yoga mat. This clinician-designed 10-minute mindfulness routine can meaningfully reduce anxiety levels in 3–4 weeks.",
    category: "Wellness Tips",
    categoryKey: "wellness",
    author: "Robert Kim, LPC",
    publishDate: "Dec 30, 2025",
    readTime: 5,
    featured: false,
    tags: ["Mindfulness", "Anxiety", "Self-Help"],
  },
  {
    id: "blg8",
    title: "Telehealth Therapy: Is It as Effective as In-Person Sessions?",
    excerpt: "The research is clear: telehealth therapy achieves outcomes comparable to in-person care for most conditions. What the studies actually show.",
    category: "Mental Health Awareness",
    categoryKey: "awareness",
    author: "Elena Morales, LMFT",
    publishDate: "Dec 22, 2025",
    readTime: 6,
    featured: false,
    tags: ["Telehealth", "Research", "Online Therapy"],
  },
];

const BLOG_CATEGORIES = ["All", "Treatment Guides", "Wellness Tips", "Family Support", "Mental Health Awareness", "Getting Started"];

const INSURANCE_PROVIDERS = [
  "Aetna", "Blue Cross Blue Shield", "Cigna", "United Healthcare",
  "Humana", "Magellan Health", "Beacon Health", "Optum",
  "Medicaid", "Medicare Advantage", "Tricare (Veterans)", "Out-of-Pocket",
];

const LOCATIONS = [
  {
    name: "Mindwell — Downtown",
    address: "248 Wellness Plaza, Suite 400",
    city: "Portland",
    state: "OR",
    zip: "97201",
    phone: "(503) 555-0182",
    email: "downtown@mindwellbh.com",
    hours: "Mon–Fri: 8:00 AM – 7:00 PM · Sat: 9:00 AM – 2:00 PM",
  },
  {
    name: "Mindwell — Eastside",
    address: "1140 Burnside Ave, Suite 201",
    city: "Portland",
    state: "OR",
    zip: "97214",
    phone: "(503) 555-0247",
    email: "eastside@mindwellbh.com",
    hours: "Mon–Thu: 9:00 AM – 6:00 PM · Fri: 9:00 AM – 4:00 PM",
  },
];

const TESTIMONIALS = [
  {
    id: "t1",
    attribution: "Sarah M.",
    service: "Individual CBT Therapy",
    quote: "After six months of CBT with Dr. Okonkwo, I finally feel like I have tools to manage my anxiety instead of it managing me. This team genuinely changed my life.",
    rating: 5,
  },
  {
    id: "t2",
    attribution: "James T.",
    service: "Substance Use Treatment",
    quote: "Mindwell gave me a recovery plan that actually made sense for my life. Their integrated approach — therapy plus medication management — made all the difference.",
    rating: 5,
  },
  {
    id: "t3",
    attribution: "Linda & Paul K.",
    service: "Family Therapy",
    quote: "We came in barely speaking to each other. After 12 sessions with Elena, we have communication skills we'll use for the rest of our lives.",
    rating: 5,
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// HOOKS
// ─────────────────────────────────────────────────────────────────────────────

function useCountUp(target: number, duration = 1400) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const startTime = performance.now();
          const step = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(step);
            else setCount(target);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration]);

  return { count, ref };
}

// ─────────────────────────────────────────────────────────────────────────────
// SUBCOMPONENTS
// ─────────────────────────────────────────────────────────────────────────────

function StatCounter({ stat, index }: { stat: typeof STATS[0]; index: number }) {
  const { count, ref } = useCountUp(stat.value);
  const Icon = stat.icon;
  return (
    <div
      className="flex flex-col items-center text-center animate-fade-up-in"
      style={{ animationDelay: `${index * 80}ms`, animationFillMode: "both", animationDuration: "200ms" }}
    >
      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-2">
        <Icon className="w-5 h-5 text-primary" />
      </div>
      <p className="text-2xl font-bold tabular-nums text-foreground">
        <span ref={ref}>{count.toLocaleString()}</span>
        {stat.suffix}
      </p>
      <p className="text-xs text-muted-foreground mt-0.5">{stat.label}</p>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// SCREEN 1: HOME PAGE
// ─────────────────────────────────────────────────────────────────────────────

function HomeScreen() {
  const featuredServices = SERVICES.filter((s) => s.featured).slice(0, 4);

  return (
    <div className="min-h-full bg-background">
      {/* Hero */}
      <section
        className="relative px-6 pt-10 pb-8 overflow-hidden"
        style={{ background: "linear-gradient(160deg, oklch(0.97 0.015 145) 0%, oklch(0.99 0.005 110) 60%)" }}
      >
        <div className="max-w-xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary text-xs font-medium px-3 py-1 rounded-full mb-4">
            <span className="relative inline-flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary/60 opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
            </span>
            Accepting New Clients · Most Insurance Accepted
          </div>
          <h1 className="text-3xl font-bold tracking-tight leading-tight mb-3" style={{ fontFamily: "var(--font-display)" }}>
            Compassionate Care for Your Mental Health Journey
          </h1>
          <p className="text-sm text-muted-foreground leading-relaxed mb-6">
            Evidence-based behavioral health services — CBT, DBT, EMDR, substance use treatment, and more — delivered by licensed clinicians who take the time to understand you.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <button className="w-full sm:w-auto bg-primary text-primary-foreground px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-primary/90 transition-colors duration-150 flex items-center justify-center gap-2">
              <Calendar className="w-4 h-4" />
              Schedule a Consultation
            </button>
            <button className="w-full sm:w-auto border border-border/60 text-foreground px-5 py-2.5 rounded-xl text-sm font-medium hover:bg-muted/50 transition-colors duration-150">
              Learn About Our Services
            </button>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap items-center justify-center gap-3 mt-6">
            {[
              { icon: Shield, label: "HIPAA Compliant" },
              { icon: CheckCircle, label: "Insurance Accepted" },
              { icon: Video, label: "Telehealth Available" },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <Icon className="w-3.5 h-3.5 text-success" />
                {label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="px-6 py-8 border-b border-border/40">
        <div className="max-w-2xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6">
          {STATS.map((stat, i) => (
            <StatCounter key={stat.label} stat={stat} index={i} />
          ))}
        </div>
      </section>

      {/* Services preview */}
      <section className="px-6 py-8">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center justify-between mb-5">
            <div>
              <h2 className="text-lg font-semibold">Our Services</h2>
              <p className="text-xs text-muted-foreground mt-0.5">Evidence-based treatment for lasting change</p>
            </div>
            <button className="text-xs text-primary font-medium flex items-center gap-1 hover:text-primary/80 transition-colors duration-100">
              View All <ArrowRight className="w-3 h-3" />
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {featuredServices.map((svc, index) => {
              const Icon = svc.icon;
              return (
                <div
                  key={svc.id}
                  className="group rounded-2xl border border-border/50 bg-card p-4 hover:border-primary/40 hover:shadow-sm transition-all duration-150 cursor-pointer animate-fade-up-in"
                  style={{ animationDelay: `${index * 60}ms`, animationFillMode: "both", animationDuration: "200ms" }}
                >
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors duration-150">
                      <Icon className="w-4.5 h-4.5 text-primary" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-semibold leading-tight">{svc.name}</p>
                      <p className="text-xs text-muted-foreground mt-1 line-clamp-2">{svc.description}</p>
                      <div className="flex flex-wrap gap-1 mt-2">
                        {svc.treatsConditions.slice(0, 2).map((c) => (
                          <Badge key={c} variant="secondary" className="text-[10px] px-1.5 py-0 h-4 rounded-full">
                            {c}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="px-6 py-6 border-t border-border/40" style={{ background: "oklch(0.97 0.012 145)" }}>
        <div className="max-w-lg mx-auto">
          <div className="flex gap-1 mb-3 justify-center">
            {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-warning text-warning" />)}
          </div>
          <blockquote className="text-sm text-center text-foreground/90 leading-relaxed italic mb-3">
            &ldquo;{TESTIMONIALS[0].quote}&rdquo;
          </blockquote>
          <p className="text-xs text-muted-foreground text-center">— {TESTIMONIALS[0].attribution} · {TESTIMONIALS[0].service}</p>
        </div>
      </section>

      {/* Insurance logos strip */}
      <section className="px-6 py-5 border-t border-border/40">
        <p className="text-xs text-center text-muted-foreground mb-3 font-medium uppercase tracking-wide">Insurance Accepted</p>
        <div className="flex flex-wrap items-center justify-center gap-2">
          {INSURANCE_PROVIDERS.slice(0, 8).map((ins) => (
            <span key={ins} className="text-xs text-muted-foreground bg-muted/60 px-2.5 py-1 rounded-lg border border-border/40">
              {ins}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// SCREEN 2: SERVICES PAGE
// ─────────────────────────────────────────────────────────────────────────────

function ServicesScreen() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = useMemo(() => {
    if (activeCategory === "All") return SERVICES;
    return SERVICES.filter((s) => s.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="min-h-full bg-background">
      {/* Header */}
      <div className="px-6 pt-8 pb-5 border-b border-border/40" style={{ background: "linear-gradient(160deg, oklch(0.97 0.015 145) 0%, oklch(0.99 0.005 110) 80%)" }}>
        <h1 className="text-2xl font-bold tracking-tight">Our Services</h1>
        <p className="text-sm text-muted-foreground mt-1">Evidence-based treatment for every step of your mental health journey</p>
      </div>

      {/* Category filter */}
      <div className="px-6 py-3 border-b border-border/40 bg-background sticky top-0 z-10">
        <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none">
          {SERVICE_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "shrink-0 px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-150",
                activeCategory === cat
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted/60 text-muted-foreground hover:bg-muted border border-border/40"
              )}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Service cards */}
      <div className="px-6 py-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {filtered.map((svc, index) => {
            const Icon = svc.icon;
            return (
              <Card
                key={svc.id}
                className="group border-border/50 hover:border-primary/40 hover:shadow-sm transition-all duration-150 cursor-pointer animate-fade-up-in rounded-2xl"
                style={{ animationDelay: `${index * 50}ms`, animationFillMode: "both", animationDuration: "180ms" }}
              >
                <CardContent className="p-4">
                  <div className="flex items-center gap-2.5 mb-2.5">
                    <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors duration-150">
                      <Icon className="w-4.5 h-4.5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold leading-tight">{svc.name}</p>
                      <Badge variant="outline" className="text-[10px] mt-0.5 h-4 px-1.5 rounded-full border-primary/30 text-primary">
                        {svc.category}
                      </Badge>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-3 line-clamp-3">
                    {svc.description}
                  </p>
                  <div className="space-y-1.5 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3 h-3 text-primary/60" />
                      <span>{svc.sessions}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3 h-3 text-primary/60" />
                      <span>{svc.format}</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1 mt-3 pt-3 border-t border-border/40">
                    {svc.treatsConditions.slice(0, 3).map((c) => (
                      <Badge key={c} variant="secondary" className="text-[10px] h-4 px-1.5 rounded-full">
                        {c}
                      </Badge>
                    ))}
                  </div>
                  <button className="mt-3 text-xs text-primary font-medium flex items-center gap-1 hover:text-primary/80 transition-colors duration-100">
                    Learn More <ChevronRight className="w-3 h-3" />
                  </button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-12 text-muted-foreground text-sm">
            No services in this category
          </div>
        )}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// SCREEN 3: OUR TEAM PAGE
// ─────────────────────────────────────────────────────────────────────────────

function TeamScreen() {
  const [activeSpecialty, setActiveSpecialty] = useState("All");
  const [showOnlyAccepting, setShowOnlyAccepting] = useState(false);

  const filtered = useMemo(() => {
    let members = TEAM_MEMBERS;
    if (showOnlyAccepting) members = members.filter((m) => m.acceptingNewClients);
    if (activeSpecialty !== "All") {
      const lower = activeSpecialty.toLowerCase();
      members = members.filter((m) =>
        m.specialties.some((s) => s.toLowerCase().includes(lower)) ||
        (activeSpecialty === "Telehealth" && m.offersTelehealth)
      );
    }
    return members;
  }, [activeSpecialty, showOnlyAccepting]);

  return (
    <div className="min-h-full bg-background">
      <div className="px-6 pt-8 pb-5 border-b border-border/40" style={{ background: "linear-gradient(160deg, oklch(0.97 0.015 145) 0%, oklch(0.99 0.005 110) 80%)" }}>
        <h1 className="text-2xl font-bold tracking-tight">Our Clinical Team</h1>
        <p className="text-sm text-muted-foreground mt-1">
          {TEAM_MEMBERS.length} licensed clinicians · Average {Math.round(TEAM_MEMBERS.reduce((a, b) => a + b.yearsExperience, 0) / TEAM_MEMBERS.length)} years experience
        </p>
      </div>

      <div className="px-6 py-3 border-b border-border/40 bg-background sticky top-0 z-10 space-y-2">
        <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none">
          {SPECIALTY_FILTERS.map((spec) => (
            <button
              key={spec}
              onClick={() => setActiveSpecialty(spec)}
              className={cn(
                "shrink-0 px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-150",
                activeSpecialty === spec
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted/60 text-muted-foreground hover:bg-muted border border-border/40"
              )}
            >
              {spec}
            </button>
          ))}
        </div>
        <label className="flex items-center gap-2 text-xs text-muted-foreground cursor-pointer select-none">
          <input
            type="checkbox"
            className="accent-primary"
            checked={showOnlyAccepting}
            onChange={(e) => setShowOnlyAccepting(e.target.checked)}
          />
          Show only accepting new clients
        </label>
      </div>

      <div className="px-6 py-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {filtered.map((member, index) => (
            <Card
              key={member.id}
              className="group border-border/50 hover:border-primary/40 hover:shadow-sm transition-all duration-150 rounded-2xl animate-fade-up-in"
              style={{ animationDelay: `${index * 50}ms`, animationFillMode: "both", animationDuration: "180ms" }}
            >
              <CardContent className="p-4">
                <div className="flex items-start gap-3">
                  {/* Avatar */}
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center text-white font-bold text-sm shrink-0"
                    style={{ backgroundColor: member.color }}
                  >
                    {member.initials}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-start justify-between gap-1">
                      <div>
                        <p className="text-sm font-semibold leading-tight">{member.displayName}</p>
                        <p className="text-xs text-muted-foreground">{member.roleLabel}</p>
                      </div>
                      {member.acceptingNewClients ? (
                        <Badge className="text-[10px] h-4 px-1.5 rounded-full bg-success/15 text-success border-0 shrink-0">
                          Accepting
                        </Badge>
                      ) : (
                        <Badge variant="secondary" className="text-[10px] h-4 px-1.5 rounded-full shrink-0">
                          Full
                        </Badge>
                      )}
                    </div>
                    <div className="flex flex-wrap gap-1 mt-2">
                      {member.specialties.slice(0, 2).map((sp) => (
                        <Badge key={sp} variant="secondary" className="text-[10px] h-4 px-1.5 rounded-full">
                          {sp}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed mt-2.5 line-clamp-2">
                  {member.bio}
                </p>
                <div className="flex items-center gap-3 mt-2.5 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {member.yearsExperience} yrs
                  </span>
                  {member.offersTelehealth && (
                    <span className="flex items-center gap-1 text-primary">
                      <Video className="w-3 h-3" />
                      Telehealth
                    </span>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-12 text-sm text-muted-foreground">
            No clinicians match the selected filters
          </div>
        )}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// SCREEN 4: CONTACT / INTAKE PAGE
// ─────────────────────────────────────────────────────────────────────────────

function ContactScreen() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dob: "",
    insurance: "",
    reason: "",
    contactMethod: "email",
    emergencyName: "",
    emergencyPhone: "",
    hipaaConsent: false,
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(field: string, value: string | boolean) {
    setFormData((prev) => ({ ...prev, [field]: value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="min-h-full bg-background flex items-start justify-center pt-16 px-6">
        <div className="max-w-sm w-full text-center animate-fade-up-in" style={{ animationDuration: "300ms", animationFillMode: "both" }}>
          <div className="w-16 h-16 rounded-full bg-success/15 flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-8 h-8 text-success" />
          </div>
          <h2 className="text-xl font-bold mb-2">Intake Request Received</h2>
          <p className="text-sm text-muted-foreground leading-relaxed mb-5">
            Thank you for reaching out. A member of our intake team will contact you within one business day to schedule your first appointment.
          </p>
          <div className="rounded-2xl border border-border/50 bg-muted/30 p-4 text-left space-y-2 text-sm">
            <p className="font-medium text-xs text-muted-foreground uppercase tracking-wide mb-1">Your Request Summary</p>
            <p><span className="text-muted-foreground">Name: </span>{formData.firstName} {formData.lastName}</p>
            <p><span className="text-muted-foreground">Email: </span>{formData.email}</p>
            <p><span className="text-muted-foreground">Insurance: </span>{formData.insurance || "Not specified"}</p>
            <p><span className="text-muted-foreground">Contact via: </span>{formData.contactMethod}</p>
          </div>
          <button
            onClick={() => setSubmitted(false)}
            className="mt-4 text-xs text-primary font-medium hover:text-primary/80 transition-colors duration-100"
          >
            ← Submit another request
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-full bg-background">
      <div className="px-6 pt-8 pb-5 border-b border-border/40" style={{ background: "linear-gradient(160deg, oklch(0.97 0.015 145) 0%, oklch(0.99 0.005 110) 80%)" }}>
        <h1 className="text-2xl font-bold tracking-tight">Request an Intake Appointment</h1>
        <p className="text-sm text-muted-foreground mt-1">Most new clients are seen within 3–5 business days</p>
      </div>

      {/* HIPAA badge */}
      <div className="mx-6 mt-4 flex items-center gap-2.5 bg-success/8 border border-success/25 rounded-xl px-3 py-2.5">
        <Lock className="w-4 h-4 text-success shrink-0" />
        <p className="text-xs text-success leading-snug">
          Your information is protected by HIPAA-compliant encryption. We never share your data without your written consent.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-5 px-6 py-5">
        {/* Form */}
        <form onSubmit={handleSubmit} className="flex-1 space-y-5">
          {/* Personal Information */}
          <fieldset>
            <legend className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-3">
              Personal Information
            </legend>
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1">
                <label className="text-xs font-medium">First Name *</label>
                <Input
                  placeholder="Sarah"
                  value={formData.firstName}
                  onChange={(e) => handleChange("firstName", e.target.value)}
                  className="rounded-xl text-sm h-9"
                  required
                />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-medium">Last Name *</label>
                <Input
                  placeholder="Johnson"
                  value={formData.lastName}
                  onChange={(e) => handleChange("lastName", e.target.value)}
                  className="rounded-xl text-sm h-9"
                  required
                />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-medium">Email Address *</label>
                <Input
                  type="email"
                  placeholder="sarah@email.com"
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  className="rounded-xl text-sm h-9"
                  required
                />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-medium">Phone Number</label>
                <Input
                  type="tel"
                  placeholder="(503) 555-0100"
                  value={formData.phone}
                  onChange={(e) => handleChange("phone", e.target.value)}
                  className="rounded-xl text-sm h-9"
                />
              </div>
              <div className="space-y-1 col-span-2">
                <label className="text-xs font-medium">Date of Birth *</label>
                <Input
                  type="date"
                  value={formData.dob}
                  onChange={(e) => handleChange("dob", e.target.value)}
                  className="rounded-xl text-sm h-9"
                  required
                />
              </div>
            </div>
          </fieldset>

          {/* Insurance */}
          <fieldset>
            <legend className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-3">
              Insurance Information
            </legend>
            <div className="space-y-1">
              <label className="text-xs font-medium">Insurance Provider *</label>
              <select
                value={formData.insurance}
                onChange={(e) => handleChange("insurance", e.target.value)}
                required
                className="w-full rounded-xl border border-input bg-background px-3 py-2 text-sm h-9 focus:outline-none focus:ring-2 focus:ring-ring"
              >
                <option value="">Select your insurance provider</option>
                {INSURANCE_PROVIDERS.map((ins) => (
                  <option key={ins} value={ins}>{ins}</option>
                ))}
              </select>
            </div>
          </fieldset>

          {/* Clinical information */}
          <fieldset>
            <legend className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-3">
              Reason for Visit
            </legend>
            <textarea
              placeholder="Briefly describe what brings you in today. This helps us match you with the right clinician. (e.g., anxiety, depression, trauma history, substance use concerns...)"
              value={formData.reason}
              onChange={(e) => handleChange("reason", e.target.value)}
              rows={3}
              className="w-full rounded-xl border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none"
            />
          </fieldset>

          {/* Preferred contact */}
          <fieldset>
            <legend className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-3">
              Preferred Contact Method
            </legend>
            <div className="flex gap-4">
              {["email", "phone", "text"].map((method) => (
                <label key={method} className="flex items-center gap-2 text-sm cursor-pointer">
                  <input
                    type="radio"
                    name="contactMethod"
                    value={method}
                    checked={formData.contactMethod === method}
                    onChange={() => handleChange("contactMethod", method)}
                    className="accent-primary"
                  />
                  <span className="capitalize text-xs">{method}</span>
                </label>
              ))}
            </div>
          </fieldset>

          {/* Emergency contact */}
          <fieldset>
            <legend className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-3">
              Emergency Contact
            </legend>
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1">
                <label className="text-xs font-medium">Name</label>
                <Input
                  placeholder="John Johnson"
                  value={formData.emergencyName}
                  onChange={(e) => handleChange("emergencyName", e.target.value)}
                  className="rounded-xl text-sm h-9"
                />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-medium">Phone</label>
                <Input
                  type="tel"
                  placeholder="(503) 555-0200"
                  value={formData.emergencyPhone}
                  onChange={(e) => handleChange("emergencyPhone", e.target.value)}
                  className="rounded-xl text-sm h-9"
                />
              </div>
            </div>
          </fieldset>

          {/* HIPAA consent */}
          <fieldset className="rounded-2xl border border-border/50 bg-muted/20 p-4">
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                className="mt-0.5 accent-primary"
                checked={formData.hipaaConsent}
                onChange={(e) => handleChange("hipaaConsent", e.target.checked)}
                required
              />
              <span className="text-xs text-muted-foreground leading-relaxed">
                I acknowledge that I have read and understand Mindwell Behavioral Health&apos;s HIPAA Privacy Notice. I consent to the collection and use of my health information for treatment, payment, and healthcare operations as described therein. *
              </span>
            </label>
          </fieldset>

          <button
            type="submit"
            disabled={!formData.hipaaConsent || !formData.firstName || !formData.email || !formData.dob}
            className="w-full bg-primary text-primary-foreground px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-primary/90 disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-150"
          >
            Submit Intake Request
          </button>
        </form>

        {/* Sidebar info */}
        <aside className="lg:w-64 space-y-4 shrink-0">
          {LOCATIONS.map((loc) => (
            <div key={loc.name} className="rounded-2xl border border-border/50 bg-card p-4 space-y-2">
              <p className="text-sm font-semibold">{loc.name}</p>
              <div className="space-y-1.5 text-xs text-muted-foreground">
                <div className="flex items-start gap-1.5">
                  <MapPin className="w-3 h-3 mt-0.5 shrink-0 text-primary/60" />
                  <span>{loc.address}, {loc.city}, {loc.state} {loc.zip}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Phone className="w-3 h-3 shrink-0 text-primary/60" />
                  <span>{loc.phone}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Mail className="w-3 h-3 shrink-0 text-primary/60" />
                  <span>{loc.email}</span>
                </div>
                <div className="flex items-start gap-1.5">
                  <Clock className="w-3 h-3 mt-0.5 shrink-0 text-primary/60" />
                  <span>{loc.hours}</span>
                </div>
              </div>
            </div>
          ))}
          {/* Map placeholder */}
          <div
            className="rounded-2xl overflow-hidden border border-border/50 h-28 flex items-center justify-center text-xs text-muted-foreground"
            style={{ background: "oklch(0.94 0.02 145)" }}
          >
            <div className="flex flex-col items-center gap-1 opacity-60">
              <MapPin className="w-5 h-5" />
              Map embed
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// SCREEN 5: BLOG / RESOURCES PAGE
// ─────────────────────────────────────────────────────────────────────────────

function BlogScreen() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = useMemo(() => {
    let posts = BLOG_POSTS;
    if (activeCategory !== "All") {
      posts = posts.filter((p) => p.category === activeCategory);
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      posts = posts.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.excerpt.toLowerCase().includes(q) ||
          p.tags.some((t) => t.toLowerCase().includes(q))
      );
    }
    return posts;
  }, [searchQuery, activeCategory]);

  const featured = BLOG_POSTS.filter((p) => p.featured);

  return (
    <div className="min-h-full bg-background">
      <div className="px-6 pt-8 pb-5 border-b border-border/40" style={{ background: "linear-gradient(160deg, oklch(0.97 0.015 145) 0%, oklch(0.99 0.005 110) 80%)" }}>
        <h1 className="text-2xl font-bold tracking-tight">Mental Health Resources</h1>
        <p className="text-sm text-muted-foreground mt-1">Clinician-authored guides, treatment explainers, and wellness tips</p>
      </div>

      {/* Search */}
      <div className="px-6 py-3 border-b border-border/40 bg-background sticky top-0 z-10">
        <div className="relative mb-2">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground" />
          <Input
            placeholder="Search articles... (e.g. EMDR, insurance, teen anxiety)"
            className="pl-8 rounded-xl h-8 text-xs"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="flex gap-2 overflow-x-auto pb-0.5 scrollbar-none">
          {BLOG_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "shrink-0 px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-150",
                activeCategory === cat
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted/60 text-muted-foreground hover:bg-muted border border-border/40"
              )}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="px-6 py-5 space-y-6">
        {/* Featured posts strip */}
        {searchQuery === "" && activeCategory === "All" && (
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-3">Featured Articles</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {featured.map((post, index) => (
                <div
                  key={post.id}
                  className="group rounded-2xl border border-primary/25 bg-primary/5 p-4 cursor-pointer hover:bg-primary/8 hover:border-primary/40 transition-all duration-150 animate-fade-up-in"
                  style={{ animationDelay: `${index * 60}ms`, animationFillMode: "both", animationDuration: "180ms" }}
                >
                  <Badge className="text-[10px] h-4 px-1.5 rounded-full bg-primary/15 text-primary border-0 mb-2">
                    {post.category}
                  </Badge>
                  <h3 className="text-sm font-semibold leading-tight mb-1 group-hover:text-primary transition-colors duration-100">
                    {post.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center gap-2 mt-2.5 text-xs text-muted-foreground">
                    <span>{post.author.split(",")[0]}</span>
                    <span>·</span>
                    <span>{post.readTime} min read</span>
                    <span>·</span>
                    <span>{post.publishDate}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* All posts */}
        <div>
          {(searchQuery !== "" || activeCategory !== "All") && (
            <p className="text-xs text-muted-foreground mb-3">
              {filtered.length} article{filtered.length !== 1 ? "s" : ""} found
            </p>
          )}
          {(searchQuery === "" && activeCategory === "All") && (
            <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-3">All Articles</p>
          )}
          <div className="space-y-2.5">
            {filtered.map((post, index) => (
              <div
                key={post.id}
                className="group flex gap-4 rounded-2xl border border-border/50 bg-card p-4 cursor-pointer hover:border-primary/40 hover:shadow-sm transition-all duration-150 animate-fade-up-in"
                style={{ animationDelay: `${index * 40}ms`, animationFillMode: "both", animationDuration: "160ms" }}
              >
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <Badge variant="secondary" className="text-[10px] h-4 px-1.5 rounded-full">
                      {post.category}
                    </Badge>
                    <span className="text-[10px] text-muted-foreground">{post.readTime} min read</span>
                  </div>
                  <h3 className="text-sm font-semibold leading-tight mb-1 group-hover:text-primary transition-colors duration-100">
                    {post.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center gap-2 mt-2 text-xs text-muted-foreground">
                    <BookOpen className="w-3 h-3" />
                    <span>{post.author.split(",")[0]}</span>
                    <span>·</span>
                    <span>{post.publishDate}</span>
                  </div>
                </div>
                <div className="flex items-center shrink-0">
                  <ChevronRight className="w-4 h-4 text-muted-foreground/40 group-hover:text-primary group-hover:translate-x-0.5 transition-all duration-100" />
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-10 text-sm text-muted-foreground">
              No articles match &ldquo;{searchQuery}&rdquo;
            </div>
          )}
        </div>

        {/* SEO note */}
        <div className="rounded-2xl border border-border/50 bg-muted/20 px-4 py-3 text-xs text-muted-foreground leading-relaxed">
          <strong className="text-foreground">SEO note:</strong> Each article targets a high-intent keyword (&quot;CBT vs DBT&quot;, &quot;what to expect at therapy&quot;, &quot;does insurance cover therapy&quot;) to drive organic discovery by people actively seeking behavioral health services.
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// SCREEN DEFINITIONS
// ─────────────────────────────────────────────────────────────────────────────

const SCREENS = [
  { id: "home", label: "Home", icon: Heart, component: HomeScreen },
  { id: "services", label: "Services", icon: Brain, component: ServicesScreen },
  { id: "team", label: "Our Team", icon: UserCheck, component: TeamScreen },
  { id: "contact", label: "Contact", icon: Phone, component: ContactScreen },
  { id: "blog", label: "Resources", icon: BookOpen, component: BlogScreen },
];

// ─────────────────────────────────────────────────────────────────────────────
// MAIN PAGE COMPONENT
// ─────────────────────────────────────────────────────────────────────────────

export default function DemoPage() {
  const [activeScreenId, setActiveScreenId] = useState("home");
  const [isTransitioning, setIsTransitioning] = useState(false);
  const prevScreenId = useRef("home");

  function navigateTo(id: string) {
    if (id === activeScreenId) return;
    setIsTransitioning(true);
    setTimeout(() => {
      prevScreenId.current = activeScreenId;
      setActiveScreenId(id);
      setIsTransitioning(false);
    }, 120);
  }

  const activeScreen = SCREENS.find((s) => s.id === activeScreenId)!;
  const ActiveComponent = activeScreen.component;

  return (
    <div className="flex flex-col h-full">
      {/* Screen Tab Bar */}
      <nav className="flex items-center border-b border-border/50 bg-background/95 backdrop-blur-sm sticky top-0 z-20 px-1">
        {SCREENS.map((screen) => {
          const Icon = screen.icon;
          const isActive = screen.id === activeScreenId;
          return (
            <button
              key={screen.id}
              onClick={() => navigateTo(screen.id)}
              className={cn(
                "flex items-center gap-1.5 px-3 py-2.5 text-xs font-medium border-b-2 transition-all duration-150 relative",
                isActive
                  ? "border-primary text-primary"
                  : "border-transparent text-muted-foreground hover:text-foreground hover:border-border/60"
              )}
            >
              <Icon className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">{screen.label}</span>
            </button>
          );
        })}
        {/* Screen indicator */}
        <div className="ml-auto mr-2 flex items-center gap-1">
          {SCREENS.map((s, i) => (
            <button
              key={s.id}
              onClick={() => navigateTo(s.id)}
              className={cn(
                "w-1.5 h-1.5 rounded-full transition-all duration-150",
                s.id === activeScreenId ? "bg-primary w-3" : "bg-border/60 hover:bg-muted-foreground/40"
              )}
              aria-label={s.label}
            />
          ))}
        </div>
      </nav>

      {/* Screen Content with crossfade */}
      <div
        className={cn(
          "flex-1 overflow-y-auto transition-opacity",
          isTransitioning ? "opacity-0" : "opacity-100"
        )}
        style={{ transitionDuration: "120ms" }}
      >
        <ActiveComponent />
      </div>
    </div>
  );
}
