import { describe, expect, it } from "vitest";

import { artifacts, conversionCadence, payload, sequenceLane, summary } from "./services/nurtureService";

describe("event-driven-nurture", () => {
  it("summary exposes nurture and cadence posture", () => {
    const result = summary();

    expect(result.sequenceCount).toBeGreaterThanOrEqual(4);
    expect(result.cadenceCount).toBeGreaterThanOrEqual(4);
    expect(result.recommendation).toContain("sequence");
  });

  it("sequence lane and cadence stay nurture-specific", () => {
    expect(sequenceLane().some((item) => item.trigger.toLowerCase().includes("demo"))).toBe(true);
    expect(conversionCadence().some((item) => item.sequence.toLowerCase().includes("demo"))).toBe(true);
    expect(artifacts().some((artifact) => artifact.path.includes("nurture"))).toBe(true);
  });

  it("payload bundles the full nurture operating surface", () => {
    const result = payload();

    expect(result.dashboard.sequenceCount).toBe(result.sequenceLane.length);
    expect(result.conversionCadence.length).toBeGreaterThan(0);
    expect(result.artifacts.length).toBeGreaterThan(0);
    expect(result.verification.length).toBe(3);
  });
});
