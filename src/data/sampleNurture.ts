export type NurtureSequence = {
  id: string;
  trigger: string;
  audience: string;
  health: "healthy" | "watch" | "critical";
  enrolledCount: number;
  activatedCount: number;
  conversionRatePct: number;
  cadenceRule: string;
  notes: string;
};

export type ConversionCadenceEntry = {
  sequence: string;
  segment: string;
  touches: number;
  activationLiftPct: number;
  score: number;
  health: "healthy" | "watch" | "critical";
  sequenceAsset: string;
  nextAction: string;
};

export type NurtureArtifact = {
  path: string;
  kind: string;
  description: string;
  tags: string[];
};

export const nurtureSequences: NurtureSequence[] = [
  {
    id: "NT-01",
    trigger: "Demo request follow-up",
    audience: "Enterprise buyers requesting a first call",
    health: "healthy",
    enrolledCount: 84,
    activatedCount: 39,
    conversionRatePct: 46,
    cadenceRule: "Send SDR follow-up within 20 minutes, then product proof within 24 hours.",
    notes: "Highest-intent lane. Speed-to-proof matters more than extra touches."
  },
  {
    id: "NT-02",
    trigger: "Webinar attendee nurture",
    audience: "Mid-funnel operators coming out of a live event",
    health: "healthy",
    enrolledCount: 112,
    activatedCount: 51,
    conversionRatePct: 41,
    cadenceRule: "Follow with recap, proof asset, and CTA split across 72 hours.",
    notes: "Strong when paired with tighter CTA sequencing and recap proof."
  },
  {
    id: "NT-03",
    trigger: "Pricing page return visit",
    audience: "Warm buyers revisiting a commercial-intent page",
    health: "watch",
    enrolledCount: 63,
    activatedCount: 18,
    conversionRatePct: 29,
    cadenceRule: "Retarget with ROI proof before booking CTA; suppress after two non-engaged sends.",
    notes: "Good compounding lane, but only when commercial proof lands before the ask."
  },
  {
    id: "NT-04",
    trigger: "Re-engagement after stalled trial",
    audience: "Dormant trial users who completed setup but stopped progressing",
    health: "watch",
    enrolledCount: 240,
    activatedCount: 34,
    conversionRatePct: 14,
    cadenceRule: "Send one operator note plus one proof packet; stop before spam takes over.",
    notes: "Biggest reactivation surface, but lower conversion and weaker urgency."
  }
];

export const conversionCadenceEntries: ConversionCadenceEntry[] = [
  {
    sequence: "Demo follow-up x proof handoff",
    segment: "Enterprise SaaS",
    touches: 3,
    activationLiftPct: 18,
    score: 96,
    health: "healthy",
    sequenceAsset: "ROI deck plus architecture note",
    nextAction: "Keep this sequence as the benchmark and replicate to other hand-raisers."
  },
  {
    sequence: "Webinar recap x CTA ladder",
    segment: "Mid-market ops",
    touches: 4,
    activationLiftPct: 11,
    score: 90,
    health: "healthy",
    sequenceAsset: "Event recap, case study, and meeting CTA",
    nextAction: "Preserve timing and tighten CTA copy before adding more sends."
  },
  {
    sequence: "Pricing revisit retarget",
    segment: "Buyer committee",
    touches: 5,
    activationLiftPct: 6,
    score: 74,
    health: "watch",
    sequenceAsset: "Pricing proof strip and calculator",
    nextAction: "Needs a clearer proof ladder and fewer repeated asks."
  },
  {
    sequence: "Stalled trial reactivation",
    segment: "Self-serve to sales-assist",
    touches: 6,
    activationLiftPct: 2,
    score: 58,
    health: "watch",
    sequenceAsset: "Checklist email and operator note",
    nextAction: "Do not scale this lane until activation recovers and suppression rules tighten."
  }
];

export const nurtureArtifacts: NurtureArtifact[] = [
  {
    path: "nurture/trigger-map.md",
    kind: "Trigger map",
    description: "Trigger-to-sequence map for high-intent nurture entry points.",
    tags: ["Triggers", "Nurture", "Growth"]
  },
  {
    path: "nurture/cadence-rules.md",
    kind: "Cadence guide",
    description: "How touch limits, wait windows, and proof assets stay aligned to conversion quality.",
    tags: ["Cadence", "Scoring", "RevOps"]
  },
  {
    path: "docs/sequence-notes.md",
    kind: "Operator notes",
    description: "Guidance for sequence design, suppression rules, and activation pacing.",
    tags: ["Sequences", "Integrity", "Ops"]
  }
];

export const fileSamples: Record<string, string> = {
  "nurture/trigger-map.md": `# Trigger Map

- Demo request -> fast proof sequence
- Webinar attendee -> recap plus CTA ladder
- Pricing revisit -> ROI proof retarget
- Stalled trial -> operator rescue sequence`,
  "nurture/cadence-rules.md": `# Cadence Rules

Score formula:
- conversion lift weight
- touch efficiency weight
- segment-fit multiplier
- suppression penalty

Never let extra sends outrank activation quality.`,
  "docs/sequence-notes.md": `# Sequence Notes

- Sequence quality should reward activation, not email volume.
- Cap touches when buying intent falls off.
- Use suppression rules before a nurture lane starts creating drag.`
};
