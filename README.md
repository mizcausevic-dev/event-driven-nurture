# event-driven-nurture

Board-ready Kinetic Gain surface for event-driven nurture sequencing, conversion pacing, and activation-aware follow-up loops that keep downstream pipeline quality ahead of vanity send volume.

- Live: [http://nurture.kineticgain.com/](http://nurture.kineticgain.com/)
- Repo: [https://github.com/mizcausevic-dev/event-driven-nurture](https://github.com/mizcausevic-dev/event-driven-nurture)

## Why this matters

Leaders need one nurture surface that shows which trigger paths are converting, which follow-up cadences are stalling, and where activation pressure should move before the next revenue push.

## What this product does

Event Driven Nurture turns product, campaign, webinar, pricing, and re-engagement signals into governed follow-up lanes. It connects trigger source, audience, cadence rule, suppression posture, sequence artifact, activation lift, and conversion quality in one operating view.

For a SaaS go-to-market analyst, the product answers which nurture paths create activated demand, which ones only create activity, and where sales, marketing, product, or customer success should intervene before pipeline quality decays.

For a SaaS value architect, it exposes where money leaks: delayed activation, stale nurture, weak segmentation, duplicate touches, missing proof artifacts, and sequences that increase volume without improving qualified conversion.

For technical reviewers, the repo includes static routes, API-style outputs, seeded sequence data, cadence records, artifact samples, verification checks, prerendered pages, smoke tests, and screenshot generation. It is meant to demonstrate an inspectable operator surface, not a keyword-only landing page.

This follows the broader Kinetic Gain pattern: every surface keeps owner, signal, model, risk, value, route, and verification visible together so non-technical and technical readers can understand what the system does and why it matters.

## What it includes

- TypeScript control plane for event-driven nurture sequencing, trigger routing, follow-up pacing, and activation-aware conversion loops
- synthetic nurture cohorts across signup, webinar, sales-assist, and re-engagement lanes
- reusable outputs for trigger pacing, sequence posture, follow-up assets, and board-facing pipeline narratives
- prerendered static site, JSON payloads, screenshots, and docs

## Routes

- `/`
- `/sequence-lane`
- `/conversion-cadence`
- `/verification`
- `/docs`

## Local run

```powershell
cd event-driven-nurture
npm install
npm run verify
npm run prerender
npm run render:assets
```

## CLI

```powershell
npm run demo
npm run smoke
```

## Docs

- [docs/architecture.md](./docs/architecture.md)
- [docs/incentive-notes.md](./docs/incentive-notes.md)
- [docs/ORIGIN.md](./docs/ORIGIN.md)

## Screenshots

![Overview](./screenshots/01-overview-proof.png)
![Sequence lane](./screenshots/02-referral-lane-proof.png)
![Conversion cadence](./screenshots/03-leaderboard-lab-proof.png)
