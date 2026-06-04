import { conversionCadenceEntries, fileSamples, nurtureArtifacts, nurtureSequences } from "../data/sampleNurture";

export function summary() {
  const totalActivated = nurtureSequences.reduce((sum, item) => sum + item.activatedCount, 0);
  const averageConversionRate = Math.round(
    nurtureSequences.reduce((sum, item) => sum + item.conversionRatePct, 0) / nurtureSequences.length
  );
  const healthySequences = nurtureSequences.filter((item) => item.health === "healthy").length;
  const topScore = Math.max(...conversionCadenceEntries.map((item) => item.score));

  return {
    sequenceCount: nurtureSequences.length,
    totalActivated,
    averageConversionRate,
    healthySequences,
    cadenceCount: conversionCadenceEntries.length,
    artifactCount: nurtureArtifacts.length,
    topScore,
    recommendation:
      "Keep the demo-request and webinar sequences tight, because nurture compounds fastest when trigger intent is matched with fast proof and clean suppression rules."
  };
}

export function sequenceLane() {
  return nurtureSequences;
}

export function conversionCadence() {
  return conversionCadenceEntries;
}

export function artifacts() {
  return nurtureArtifacts.map((artifact) => ({
    ...artifact,
    sample: fileSamples[artifact.path]
  }));
}

export function verification() {
  return [
    "The repo treats nurture as revenue plumbing with trigger quality, cadence posture, and activation lift, not just send volume theater.",
    "Sequence lanes make it obvious which trigger paths are compounding demand and which ones are just inflating follow-up noise.",
    "Cadence logic stays tied to activated demand so extra touches do not outrank actual conversion quality."
  ];
}

export function payload() {
  return {
    dashboard: summary(),
    sequenceLane: sequenceLane(),
    conversionCadence: conversionCadence(),
    artifacts: artifacts(),
    verification: verification()
  };
}
