# Event Driven Nurture Architecture

`event-driven-nurture` models lifecycle follow-up as B2B revenue plumbing rather than generic email automation. It combines trigger sequences, conversion-aware cadence, artifact samples, and verification checks into one operator surface.

## Core surfaces

- `src/app.ts`
  - Express application serving HTML routes and JSON payloads.
- `src/data/sampleNurture.ts`
  - Trigger sequences, cadence entries, artifact metadata, and sample operator text.
- `src/services/nurtureService.ts`
  - Summary metrics and API projections over the modeled nurture data.
- `src/services/render.ts`
  - Operator UI and route-specific HTML views.

## Design goal

The repo is designed to show that B2B nurture needs:

- trigger-lane quality controls
- activation-aware cadence scoring
- explicit suppression and proof rules
- follow-up integrity checks

That keeps follow-up growth commercially useful instead of noisy.
