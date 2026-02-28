import { ExternalLink, TrendingUp, CheckCircle2 } from "lucide-react";
import { APP_CONFIG } from "@/lib/config";
import { proposalData } from "@/data/proposal";

export default function ProposalPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-10 space-y-14">

      {/* ── Section 1: Hero ───────────────────────────────────────────────── */}
      <section
        className="relative rounded-3xl overflow-hidden"
        style={{ background: `oklch(0.13 0.04 var(--primary-h, 145))` }}
      >
        {/* Soft radial glow — nature wellness warmth */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 50% at 50% 0%, oklch(0.55 0.14 145 / 0.18), transparent 70%)",
          }}
        />

        <div className="relative z-10 p-8 md:p-12">
          {/* Effort badge — mandatory trust signal */}
          <span className="inline-flex items-center gap-2 text-xs font-medium bg-white/10 border border-white/15 text-white/80 px-4 py-1.5 rounded-full mb-7">
            <span className="relative inline-flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[color:var(--success)] opacity-75" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[color:var(--success)]" />
            </span>
            Built this demo for your project
          </span>

          {/* Role prefix */}
          <p className="text-xs tracking-widest uppercase text-white/45 mb-4">
            Full-Stack Developer &middot; WordPress &amp; CMS Specialist
          </p>

          {/* Weight-contrast headline */}
          <h1 className="text-5xl md:text-6xl leading-none mb-5" style={{ letterSpacing: "-0.01em" }}>
            <span className="font-light text-white/75">Hi, I&apos;m</span>{" "}
            <span className="font-bold text-white">Humam</span>
          </h1>

          {/* Tailored value prop */}
          <p className="text-lg md:text-xl text-white/65 max-w-2xl leading-relaxed">
            {proposalData.hero.valueProp}
          </p>
        </div>

        {/* Stats shelf */}
        <div className="relative z-10 border-t border-white/10 bg-white/5 px-8 py-5">
          <div className="grid grid-cols-3 gap-6">
            {proposalData.hero.stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl font-bold text-white">
                  {stat.value}
                </div>
                <div className="text-xs text-white/50 mt-0.5">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 2: Proof of Work ──────────────────────────────────────── */}
      <section className="space-y-6">
        <div>
          <p className="text-xs tracking-widest uppercase text-muted-foreground mb-1">
            Proof of Work
          </p>
          <h2 className="text-2xl font-semibold tracking-tight">Relevant Projects</h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {proposalData.portfolioProjects.map((project) => (
            <div
              key={project.name}
              className="aesthetic-card p-6 space-y-4"
            >
              {/* Title row */}
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-base font-semibold leading-snug">
                  {project.name}
                </h3>
                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors duration-200 shrink-0 mt-0.5"
                    aria-label={`View ${project.name}`}
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>

              {/* Description */}
              <p className="text-sm text-muted-foreground leading-relaxed">
                {project.description}
              </p>

              {/* Outcome badge — always present */}
              <div className="flex items-start gap-2 text-sm text-[color:var(--success)]">
                <TrendingUp className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                <span className="leading-snug">{project.outcome}</span>
              </div>

              {/* Tech tags — nature-wellness pill style */}
              <div className="flex flex-wrap gap-1.5">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-0.5 rounded-full bg-muted text-xs text-muted-foreground border border-border/60"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Relevance note */}
              {project.relevance && (
                <p className="text-xs text-primary/70 italic leading-relaxed">
                  {project.relevance}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ── Section 3: How I Work ─────────────────────────────────────────── */}
      <section className="space-y-6">
        <div>
          <p className="text-xs tracking-widest uppercase text-muted-foreground mb-1">
            Process
          </p>
          <h2 className="text-2xl font-semibold tracking-tight">How I Work</h2>
          <p className="text-sm text-muted-foreground mt-1">
            Adapted for Squarespace &rarr; WordPress migrations — not a generic web dev process.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {proposalData.approach.map((step) => (
            <div key={step.step} className="aesthetic-card p-6 space-y-3">
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs tracking-widest uppercase text-muted-foreground font-medium">
                  Step {step.step}
                </span>
                <span className="text-xs text-muted-foreground/60 bg-muted px-2 py-0.5 rounded-full">
                  {step.timeline}
                </span>
              </div>
              <h3 className="text-base font-semibold">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Section 4: Skills Grid ────────────────────────────────────────── */}
      <section className="space-y-6">
        <div>
          <p className="text-xs tracking-widest uppercase text-muted-foreground mb-1">
            Tech Stack
          </p>
          <h2 className="text-2xl font-semibold tracking-tight">What I Build With</h2>
          <p className="text-sm text-muted-foreground mt-1">
            Filtered to what matters for a behavioral health website migration.
          </p>
        </div>

        <div className="space-y-4">
          {proposalData.skills.map((category) => (
            <div key={category.category} className="aesthetic-card p-5 space-y-3">
              <p className="text-xs font-medium text-muted-foreground tracking-wide uppercase">
                {category.category}
              </p>
              <div className="flex flex-wrap gap-2">
                {category.items.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center gap-1 px-3 py-1 rounded-full border border-border/60 text-sm text-foreground/80 bg-muted/40"
                  >
                    <CheckCircle2 className="w-3 h-3 text-primary/60 shrink-0" />
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Section 5: CTA ───────────────────────────────────────────────── */}
      <section
        className="relative rounded-3xl overflow-hidden text-center"
        style={{ background: `oklch(0.12 0.03 var(--primary-h, 145))` }}
      >
        {/* Warm glow at bottom — completes the bookend */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 40% at 50% 100%, oklch(0.52 0.13 145 / 0.15), transparent 70%)",
          }}
        />

        <div className="relative z-10 p-8 md:p-12 space-y-5">
          {/* Pulsing availability indicator */}
          <div className="flex items-center justify-center gap-2">
            <span className="relative inline-flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[color:var(--success)] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[color:var(--success)]" />
            </span>
            <span
              className="text-sm"
              style={{
                color: "color-mix(in oklch, var(--success) 80%, white)",
              }}
            >
              {proposalData.cta.availability}
            </span>
          </div>

          {/* Tailored headline */}
          <h2 className="text-2xl font-bold text-white leading-snug">
            {proposalData.cta.headline}
          </h2>

          {/* Specific body copy */}
          <p className="text-white/65 max-w-md mx-auto leading-relaxed text-sm md:text-base">
            {proposalData.cta.body}
          </p>

          {/* Primary action — text, not a dead button */}
          <p className="text-lg font-semibold text-white pt-2">
            {proposalData.cta.action}
          </p>

          {/* Back link to demo */}
          <a
            href="/"
            className="inline-flex items-center gap-1 text-sm text-white/45 hover:text-white/70 transition-colors duration-200"
          >
            &larr; Back to the demo
          </a>

          {/* Signature */}
          <p className="pt-5 text-sm text-white/35 border-t border-white/10">
            &mdash; Humam
          </p>

          {/* Project attribution — uses APP_CONFIG, never hardcoded */}
          <p className="text-xs text-white/25">
            Demo built for {APP_CONFIG.projectName}
          </p>
        </div>
      </section>

    </div>
  );
}
