"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ShieldCheck,
  Lock,
  FileCheck,
  CheckCircle,
  ArrowRight,
  X,
  Check,
  TrendingUp,
  Globe,
  MapPin,
  Users,
  Layers,
  Database,
  Code2,
  Gauge,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";
import { challenges, executiveSummary } from "@/data/challenges";

// ─── Executive Summary ────────────────────────────────────────────────────────

function ExecutiveSummary() {
  const { commonApproach, differentApproach, accentWord } = executiveSummary;

  const renderDifferent = () => {
    if (!accentWord) return <span>{differentApproach}</span>;
    const escaped = accentWord.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const parts = differentApproach.split(new RegExp(`(${escaped})`, "i"));
    return (
      <>
        {parts.map((part, i) =>
          part.toLowerCase() === accentWord.toLowerCase() ? (
            <span key={i} className="text-primary font-semibold">
              {part}
            </span>
          ) : (
            <span key={i}>{part}</span>
          )
        )}
      </>
    );
  };

  return (
    <div
      className="relative overflow-hidden rounded-3xl p-6 md:p-8"
      style={{
        background: "oklch(0.12 0.03 145)",
        backgroundImage:
          "radial-gradient(ellipse at 30% 50%, oklch(0.52 0.13 145 / 0.12), transparent 70%)",
      }}
    >
      <p className="text-sm md:text-base leading-relaxed text-white/55">
        {commonApproach}
      </p>
      <hr className="my-4 border-white/10" />
      <p className="text-base md:text-lg leading-relaxed font-medium text-white/90">
        {renderDifferent()}
      </p>
      <p className="text-xs text-white/40 mt-4">
        <Link
          href="/"
          className="hover:text-white/65 transition-colors duration-200 underline underline-offset-2"
        >
          ← Back to the live demo
        </Link>
      </p>
    </div>
  );
}

// ─── Outcome Badge ────────────────────────────────────────────────────────────

function OutcomeBadge({ outcome }: { outcome: string }) {
  return (
    <div
      className="flex items-start gap-2.5 rounded-2xl px-4 py-3"
      style={{
        backgroundColor: "color-mix(in oklch, var(--success) 7%, transparent)",
        borderColor: "color-mix(in oklch, var(--success) 18%, transparent)",
        borderWidth: "1px",
        borderStyle: "solid",
      }}
    >
      <TrendingUp
        className="h-4 w-4 mt-0.5 shrink-0"
        style={{ color: "var(--success)" }}
      />
      <p
        className="text-sm font-medium"
        style={{ color: "var(--success)" }}
      >
        {outcome}
      </p>
    </div>
  );
}

// ─── Challenge Card Wrapper ───────────────────────────────────────────────────

function ChallengeCard({
  index,
  title,
  description,
  outcome,
  children,
}: {
  index: number;
  title: string;
  description: string;
  outcome: string;
  children: React.ReactNode;
}) {
  const stepNumber = String(index + 1).padStart(2, "0");

  return (
    <div
      className="bg-card border rounded-3xl p-6 md:p-8 space-y-5 transition-all"
      style={{
        borderColor: "var(--border)",
        boxShadow: "var(--card-shadow)",
        transitionDuration: "var(--dur-normal)",
      }}
    >
      <div className="flex items-baseline gap-3">
        <span
          className="text-xs font-medium shrink-0 w-6 text-right"
          style={{ color: "color-mix(in oklch, var(--primary) 60%, transparent)" }}
        >
          {stepNumber}
        </span>
        <div>
          <h3 className="text-lg font-semibold leading-snug">{title}</h3>
          <p className="text-sm text-muted-foreground mt-1.5 leading-relaxed">
            {description}
          </p>
        </div>
      </div>

      <div className="pl-9">{children}</div>

      <div className="pl-9">
        <OutcomeBadge outcome={outcome} />
      </div>
    </div>
  );
}

// ─── Viz 1: Step-Through Reveal — HIPAA Secure Form Flow ─────────────────────

const hipaaSteps = [
  {
    icon: Users,
    title: "Client Submits Intake",
    detail:
      "The new-client form collects only minimum-necessary PHI — name, contact, insurance, presenting concern. Consent checkbox gated before submission.",
    badge: "Consent required",
    badgeColor: "primary" as const,
  },
  {
    icon: Lock,
    title: "PHI Encrypted in Transit",
    detail:
      "All form data is transmitted over TLS 1.3 to a BAA-signed processing endpoint. No PHI touches the WordPress database — it routes directly to a HIPAA-compliant intake queue.",
    badge: "TLS 1.3 + BAA host",
    badgeColor: "primary" as const,
  },
  {
    icon: ShieldCheck,
    title: "Secure Routing to Practice",
    detail:
      "Encrypted submission is delivered to the practice EHR intake queue or a secure email inbox (e.g., Hushmail, ProtonMail). Access is role-restricted and audit-logged.",
    badge: "Audit logged",
    badgeColor: "primary" as const,
  },
  {
    icon: FileCheck,
    title: "Confirmation — No PHI Exposed",
    detail:
      "Client receives a plain confirmation (no PHI repeated back). Practice admin is notified via secure channel. The WordPress site retains zero stored PHI.",
    badge: "Zero PHI stored",
    badgeColor: "success" as const,
  },
];

function HipaaStepThrough() {
  const [step, setStep] = useState(0);
  const current = hipaaSteps[step];
  const Icon = current.icon;
  const isLast = step === hipaaSteps.length - 1;
  const isFirst = step === 0;

  return (
    <div className="space-y-4">
      {/* Step dots */}
      <div className="flex items-center gap-2">
        {hipaaSteps.map((s, i) => (
          <button
            key={i}
            onClick={() => setStep(i)}
            className="transition-all"
            style={{ transitionDuration: "var(--dur-normal)" }}
            aria-label={`Step ${i + 1}: ${s.title}`}
          >
            <div
              className="rounded-full"
              style={{
                width: i === step ? "1.5rem" : "0.5rem",
                height: "0.5rem",
                backgroundColor:
                  i === step
                    ? "var(--primary)"
                    : i < step
                    ? "color-mix(in oklch, var(--primary) 40%, transparent)"
                    : "var(--border)",
                transitionDuration: "var(--dur-normal)",
                transition: "all var(--dur-normal) ease-in-out",
              }}
            />
          </button>
        ))}
        <span className="text-xs text-muted-foreground ml-1">
          Step {step + 1} of {hipaaSteps.length}
        </span>
      </div>

      {/* Step content */}
      <div
        className="rounded-2xl border p-5 space-y-3 transition-all"
        style={{
          borderColor: "color-mix(in oklch, var(--primary) 20%, transparent)",
          backgroundColor: "color-mix(in oklch, var(--primary) 4%, transparent)",
          transitionDuration: "var(--dur-normal)",
        }}
      >
        <div className="flex items-start gap-3">
          <div
            className="rounded-xl p-2 shrink-0"
            style={{
              backgroundColor: "color-mix(in oklch, var(--primary) 12%, transparent)",
            }}
          >
            <Icon
              className="w-5 h-5"
              style={{ color: "var(--primary)" }}
            />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2 flex-wrap">
              <p className="text-sm font-semibold">{current.title}</p>
              <span
                className="text-[10px] font-medium px-2 py-0.5 rounded-full"
                style={{
                  backgroundColor:
                    current.badgeColor === "success"
                      ? "color-mix(in oklch, var(--success) 12%, transparent)"
                      : "color-mix(in oklch, var(--primary) 12%, transparent)",
                  color:
                    current.badgeColor === "success"
                      ? "var(--success)"
                      : "var(--primary)",
                }}
              >
                {current.badge}
              </span>
            </div>
            <p className="text-sm text-muted-foreground mt-1.5 leading-relaxed">
              {current.detail}
            </p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex items-center gap-2">
        <button
          onClick={() => setStep((s) => Math.max(0, s - 1))}
          disabled={isFirst}
          className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground disabled:opacity-30 disabled:cursor-not-allowed transition-colors px-2 py-1 rounded-lg hover:bg-primary/5"
          style={{ transitionDuration: "var(--dur-fast)" }}
        >
          <ChevronLeft className="w-3.5 h-3.5" />
          Previous
        </button>
        <button
          onClick={() => setStep((s) => Math.min(hipaaSteps.length - 1, s + 1))}
          disabled={isLast}
          className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground disabled:opacity-30 disabled:cursor-not-allowed transition-colors px-2 py-1 rounded-lg hover:bg-primary/5"
          style={{ transitionDuration: "var(--dur-fast)" }}
        >
          Next
          <ChevronRight className="w-3.5 h-3.5" />
        </button>
        {isLast && (
          <span
            className="text-xs font-medium ml-1"
            style={{ color: "var(--success)" }}
          >
            Flow complete — zero PHI stored
          </span>
        )}
      </div>
    </div>
  );
}

// ─── Viz 2: Before/After Toggle — SEO Migration ───────────────────────────────

const seoBeforeAfter = {
  before: {
    label: "Squarespace (before migration)",
    items: [
      "URLs like /about-us — no namespace",
      "Therapist pages at /team/dr-sarah — breaks on WP",
      "Service pages at /services/cbt — slug mismatch",
      "No schema markup for local SEO",
      "No XML sitemap handoff plan",
      "Search Console ownership not transferred",
    ],
  },
  after: {
    label: "WordPress (post-migration)",
    items: [
      "301 redirects map every old URL to new equivalent",
      "/team/dr-sarah → /providers/dr-sarah (permanent, 301)",
      "/services/cbt → /services/cognitive-behavioral-therapy (301)",
      "JSON-LD schema for each provider and service page",
      "New sitemap submitted to Search Console on day 1",
      "GSC ownership verified, crawl monitoring for 90 days",
    ],
  },
};

function SeoBeforeAfter() {
  const [showing, setShowing] = useState<"before" | "after">("before");
  const data = seoBeforeAfter[showing];
  const isBefore = showing === "before";

  return (
    <div className="space-y-4">
      {/* Toggle */}
      <div
        className="inline-flex items-center rounded-2xl p-1 gap-1"
        style={{ backgroundColor: "var(--muted)" }}
      >
        <button
          onClick={() => setShowing("before")}
          className="text-xs font-medium px-3 py-1.5 rounded-xl transition-all"
          style={{
            transitionDuration: "var(--dur-normal)",
            backgroundColor: isBefore ? "var(--card)" : "transparent",
            color: isBefore ? "var(--foreground)" : "var(--muted-foreground)",
            boxShadow: isBefore ? "0 1px 3px oklch(0 0 0 / 0.08)" : "none",
          }}
        >
          Current state
        </button>
        <button
          onClick={() => setShowing("after")}
          className="text-xs font-medium px-3 py-1.5 rounded-xl transition-all"
          style={{
            transitionDuration: "var(--dur-normal)",
            backgroundColor: !isBefore ? "var(--card)" : "transparent",
            color: !isBefore ? "var(--foreground)" : "var(--muted-foreground)",
            boxShadow: !isBefore ? "0 1px 3px oklch(0 0 0 / 0.08)" : "none",
          }}
        >
          After migration
        </button>
      </div>

      {/* Panel */}
      <div
        className="rounded-2xl border p-4 space-y-2 transition-all"
        style={{
          transitionDuration: "var(--dur-normal)",
          borderColor: isBefore
            ? "color-mix(in oklch, var(--destructive) 20%, transparent)"
            : "color-mix(in oklch, var(--success) 20%, transparent)",
          backgroundColor: isBefore
            ? "color-mix(in oklch, var(--destructive) 5%, transparent)"
            : "color-mix(in oklch, var(--success) 5%, transparent)",
        }}
      >
        <p
          className="text-xs font-semibold uppercase tracking-wide mb-3"
          style={{
            color: isBefore ? "var(--destructive)" : "var(--success)",
          }}
        >
          {data.label}
        </p>
        <ul className="space-y-2">
          {data.items.map((item) => (
            <li key={item} className="flex items-start gap-2.5 text-sm">
              {isBefore ? (
                <X
                  className="w-4 h-4 shrink-0 mt-0.5"
                  style={{ color: "var(--destructive)" }}
                />
              ) : (
                <Check
                  className="w-4 h-4 shrink-0 mt-0.5"
                  style={{ color: "var(--success)" }}
                />
              )}
              <span
                style={{
                  color: isBefore
                    ? "color-mix(in oklch, var(--destructive) 80%, var(--foreground))"
                    : "color-mix(in oklch, var(--success) 80%, var(--foreground))",
                }}
              >
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Traffic preservation note */}
      {!isBefore && (
        <div
          className="flex items-center gap-2 text-xs rounded-xl px-3 py-2"
          style={{
            backgroundColor: "color-mix(in oklch, var(--primary) 6%, transparent)",
            color: "var(--primary)",
          }}
        >
          <Globe className="w-3.5 h-3.5 shrink-0" />
          <span>
            Every redirect is verified against Google Search Console before cutover
          </span>
        </div>
      )}
    </div>
  );
}

// ─── Viz 3: WordPress Architecture Diagram ───────────────────────────────────

const archLayers = [
  {
    layer: "Content Types",
    icon: Layers,
    items: ["Services (CPT)", "Providers (CPT)", "Locations (CPT)", "Blog Posts"],
    description: "Custom post types — structured, queryable, scalable",
    color: "primary" as const,
  },
  {
    layer: "Page Builder",
    icon: Code2,
    items: ["ACF Flexible Content", "Reusable blocks", "Template library", "Form builder"],
    description: "Admin-editable without developer involvement",
    color: "accent" as const,
  },
  {
    layer: "Performance",
    icon: Gauge,
    items: ["CDN (Cloudflare)", "Redis object cache", "Image optimization", "Core Web Vitals < 2s"],
    description: "Healthcare sites need speed — Google YMYL ranking factor",
    color: "success" as const,
  },
  {
    layer: "Data Layer",
    icon: Database,
    items: ["Structured SEO schema", "Local business markup", "Provider profiles", "Service taxonomy"],
    description: "Feeds Google's rich results and local pack rankings",
    color: "warning" as const,
  },
];

function WordPressArchDiagram() {
  const [active, setActive] = useState<number | null>(null);

  const colorMap = {
    primary: {
      bg: "color-mix(in oklch, var(--primary) 8%, transparent)",
      border: "color-mix(in oklch, var(--primary) 20%, transparent)",
      text: "var(--primary)",
    },
    accent: {
      bg: "color-mix(in oklch, var(--accent) 20%, transparent)",
      border: "color-mix(in oklch, var(--accent) 40%, transparent)",
      text: "color-mix(in oklch, var(--accent) 80%, var(--foreground))",
    },
    success: {
      bg: "color-mix(in oklch, var(--success) 8%, transparent)",
      border: "color-mix(in oklch, var(--success) 20%, transparent)",
      text: "var(--success)",
    },
    warning: {
      bg: "color-mix(in oklch, var(--warning) 10%, transparent)",
      border: "color-mix(in oklch, var(--warning) 25%, transparent)",
      text: "color-mix(in oklch, var(--warning) 80%, var(--foreground))",
    },
  };

  return (
    <div className="space-y-2.5">
      <p className="text-xs text-muted-foreground mb-3">
        Hover a layer to see what it unlocks
      </p>
      {archLayers.map((layer, i) => {
        const colors = colorMap[layer.color];
        const isActive = active === i;
        const Icon = layer.icon;

        return (
          <div
            key={layer.layer}
            onMouseEnter={() => setActive(i)}
            onMouseLeave={() => setActive(null)}
            className="rounded-2xl border p-4 cursor-default transition-all"
            style={{
              transitionDuration: "var(--dur-normal)",
              borderColor: isActive ? colors.border : "var(--border)",
              backgroundColor: isActive ? colors.bg : "var(--card)",
            }}
          >
            <div className="flex items-start gap-3">
              <div
                className="rounded-xl p-1.5 shrink-0"
                style={{
                  backgroundColor: isActive ? colors.bg : "var(--muted)",
                  transitionDuration: "var(--dur-normal)",
                  transition: `background-color var(--dur-normal) ease-in-out`,
                }}
              >
                <Icon
                  className="w-4 h-4"
                  style={{
                    color: isActive ? colors.text : "var(--muted-foreground)",
                    transitionDuration: "var(--dur-normal)",
                    transition: `color var(--dur-normal) ease-in-out`,
                  }}
                />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-semibold">{layer.layer}</span>
                  {isActive && (
                    <ArrowRight
                      className="w-3.5 h-3.5"
                      style={{ color: colors.text }}
                    />
                  )}
                </div>
                {isActive ? (
                  <>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      {layer.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      {layer.items.map((item) => (
                        <span
                          key={item}
                          className="text-[11px] font-medium px-2 py-0.5 rounded-lg"
                          style={{
                            backgroundColor: colors.bg,
                            color: colors.text,
                          }}
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </>
                ) : (
                  <div className="flex flex-wrap gap-1 mt-1">
                    {layer.items.map((item, itemIdx) => (
                      <span
                        key={item}
                        className="text-[11px] text-muted-foreground"
                      >
                        {item}
                        {itemIdx < layer.items.length - 1 && (
                          <span className="mx-1 opacity-40">·</span>
                        )}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        );
      })}

      {/* Growth metric */}
      <div
        className="flex items-center justify-between rounded-2xl px-4 py-3 mt-1"
        style={{
          backgroundColor: "color-mix(in oklch, var(--primary) 5%, transparent)",
          borderColor: "color-mix(in oklch, var(--primary) 15%, transparent)",
          borderWidth: "1px",
          borderStyle: "solid",
        }}
      >
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4" style={{ color: "var(--primary)" }} />
          <span className="text-sm text-muted-foreground">
            Add a new location
          </span>
        </div>
        <div className="flex items-center gap-1.5">
          <CheckCircle className="w-4 h-4" style={{ color: "var(--success)" }} />
          <span className="text-xs font-medium" style={{ color: "var(--success)" }}>
            Admin panel, no code
          </span>
        </div>
      </div>
    </div>
  );
}

// ─── CTA Closer ───────────────────────────────────────────────────────────────

function CtaCloser() {
  return (
    <section
      className="rounded-3xl p-6 md:p-8"
      style={{
        background:
          "linear-gradient(135deg, color-mix(in oklch, var(--primary) 8%, transparent), color-mix(in oklch, var(--primary) 3%, var(--background)))",
        borderColor: "color-mix(in oklch, var(--primary) 18%, transparent)",
        borderWidth: "1px",
        borderStyle: "solid",
      }}
    >
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-5">
        <div>
          <h3 className="text-base font-semibold mb-1">
            Let&apos;s talk through the details
          </h3>
          <p className="text-sm text-muted-foreground max-w-md leading-relaxed">
            I&apos;ve thought through the HIPAA requirements, the SEO risk, and the
            architecture. Happy to walk through any of this on a call or in writing.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 shrink-0">
          <Link
            href="/proposal"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
            style={{ transitionDuration: "var(--dur-normal)" }}
          >
            See the full proposal
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
          <span
            className="text-xs font-medium px-3 py-2 rounded-2xl"
            style={{
              background:
                "linear-gradient(135deg, color-mix(in oklch, var(--primary) 12%, transparent), color-mix(in oklch, var(--primary) 6%, transparent))",
              borderColor: "color-mix(in oklch, var(--primary) 22%, transparent)",
              borderWidth: "1px",
              borderStyle: "solid",
              color: "var(--primary)",
            }}
          >
            Reply on Upwork to start
          </span>
        </div>
      </div>
    </section>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ChallengesPage() {
  const visualizations: Record<string, React.ReactNode> = {
    "challenge-1": <HipaaStepThrough />,
    "challenge-2": <SeoBeforeAfter />,
    "challenge-3": <WordPressArchDiagram />,
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 py-8 md:px-6 space-y-8">
        {/* Page header */}
        <div>
          <h1 className="text-2xl font-semibold">My Approach to Your Redesign</h1>
          <p className="text-sm text-muted-foreground mt-1.5 leading-relaxed">
            How I&apos;d tackle the three hardest parts of moving Mindwell from
            Squarespace to a HIPAA-safe, SEO-stable WordPress platform.
          </p>
        </div>

        {/* Executive summary */}
        <ExecutiveSummary />

        {/* Challenge cards */}
        <div className="flex flex-col gap-5">
          {challenges.map((challenge, index) => (
            <ChallengeCard
              key={challenge.id}
              index={index}
              title={challenge.title}
              description={challenge.description}
              outcome={challenge.outcome ?? ""}
            >
              {visualizations[challenge.id]}
            </ChallengeCard>
          ))}
        </div>

        {/* CTA closer */}
        <CtaCloser />
      </div>
    </div>
  );
}
