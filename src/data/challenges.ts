import type { Challenge } from "@/lib/types";

export interface ExecutiveSummaryData {
  commonApproach: string;
  differentApproach: string;
  accentWord?: string;
}

export const executiveSummary: ExecutiveSummaryData = {
  commonApproach:
    "Most developers treating a behavioral health migration as a simple platform swap — lift the Squarespace content into WordPress, install a theme, and call it done. The result: HIPAA-violating contact forms, broken SEO from URL changes, and a rigid layout that can't grow with a practice.",
  differentApproach:
    "I approach this as a clinical-grade web build: HIPAA-compliant intake flows first, SEO continuity engineered from day one, and a WordPress architecture that scales with new providers, locations, and services — without a rebuild.",
  accentWord: "clinical-grade",
};

export const challenges: Challenge[] = [
  {
    id: "challenge-1",
    title: "HIPAA-Compliant Intake Without Friction",
    description:
      "Standard Squarespace and WordPress contact forms transmit protected health information (PHI) unencrypted and store it in databases that are rarely BAA-compliant. A behavioral health practice collecting intake details, insurance info, or presenting concerns is exposed the moment someone hits submit.",
    visualizationType: "flow",
    outcome:
      "Could reduce new-client intake friction by ~40% while meeting HIPAA's minimum necessary standard — encrypted transmission, BAA-signed hosting, and consent-gated PHI fields.",
  },
  {
    id: "challenge-2",
    title: "SEO-Safe Migration from Squarespace",
    description:
      "Squarespace generates URL patterns that don't map cleanly to WordPress. A direct migration without redirect mapping causes 404 errors on pages that rank for 'therapist near me', 'anxiety treatment [city]', and condition-specific queries — rankings that took years to build and are expensive to recover.",
    visualizationType: "before-after",
    outcome:
      "Could preserve 95%+ of organic search rankings during cutover with pre-built 301 redirect maps, schema markup migration, and Search Console monitoring through the first 90 days post-launch.",
  },
  {
    id: "challenge-3",
    title: "WordPress Architecture That Grows With the Practice",
    description:
      "Most WordPress builds use page templates for every provider, service, and location — meaning adding a new clinician or opening a second office requires a developer. For a growing behavioral health practice, this creates bottlenecks and inconsistent content quality.",
    visualizationType: "architecture",
    outcome:
      "Could support 5x content growth — new providers, services, and locations — through a custom post type system that lets the admin team publish new content without touching code or hiring a developer.",
  },
];
