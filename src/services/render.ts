import { artifacts, conversionCadence, sequenceLane, summary, verification } from "./nurtureService";

function layout(title: string, activePath: string, body: string) {
  const nav = [
    { href: "/", label: "Overview" },
    { href: "/sequence-lane", label: "Sequence Lane" },
    { href: "/conversion-cadence", label: "Conversion Cadence" },
    { href: "/verification", label: "Verification" },
    { href: "/docs", label: "Docs" }
  ]
    .map((item) => {
      const active = item.href === activePath ? "nav-chip active" : "nav-chip";
      return `<a class="${active}" href="${item.href}">${item.label}</a>`;
    })
    .join("");

  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${title}</title>
    <style>
      :root {
        --bg: #0d1320;
        --panel: rgba(20, 26, 40, 0.92);
        --line: rgba(91, 192, 190, 0.18);
        --text: #f6f3ed;
        --muted: #b8c2cf;
        --accent: #5bc0be;
        --accent-strong: #6c8fff;
      }
      * { box-sizing: border-box; }
      body {
        margin: 0;
        font-family: "Segoe UI", Inter, sans-serif;
        color: var(--text);
        background:
          radial-gradient(circle at top left, rgba(91, 192, 190, 0.16), transparent 28%),
          radial-gradient(circle at top right, rgba(108, 143, 255, 0.16), transparent 26%),
          linear-gradient(180deg, #0a101a 0%, var(--bg) 100%);
      }
      a { color: inherit; text-decoration: none; }
      .shell { max-width: 1280px; margin: 0 auto; padding: 28px 28px 40px; }
      .topbar {
        display: flex; justify-content: space-between; align-items: center; gap: 20px;
        padding: 16px 18px; border: 1px solid var(--line);
        background: rgba(12, 16, 26, 0.9); border-radius: 24px;
      }
      .brand { display: flex; gap: 14px; align-items: center; }
      .brand-mark {
        width: 42px; height: 42px; display: grid; place-items: center;
        border-radius: 14px;
        background: linear-gradient(135deg, var(--accent) 0%, var(--accent-strong) 100%);
        font-weight: 800; color: #071521;
      }
      .eyebrow {
        margin: 0 0 2px; font-size: 12px; letter-spacing: 0.22em;
        text-transform: uppercase; color: #b2f0ea;
      }
      .brand-title { margin: 0; font-size: 24px; font-weight: 700; }
      .brand-subtitle { margin: 4px 0 0; color: var(--muted); font-size: 14px; }
      nav { display: flex; flex-wrap: wrap; gap: 10px; justify-content: flex-end; }
      .nav-chip {
        padding: 12px 16px; border-radius: 999px; border: 1px solid var(--line);
        background: rgba(21, 28, 42, 0.95); color: #e6f3f5; font-size: 13px;
        letter-spacing: 0.06em; text-transform: uppercase;
      }
      .nav-chip.active {
        background: linear-gradient(135deg, rgba(91, 192, 190, 0.96), rgba(108, 143, 255, 0.94));
        border-color: transparent; color: #08131e; box-shadow: 0 10px 24px rgba(91, 192, 190, 0.28);
      }
      .hero {
        margin-top: 24px; padding: 30px 30px 34px; border-radius: 30px;
        border: 1px solid var(--line);
        background: linear-gradient(180deg, rgba(19, 25, 39, 0.96), rgba(15, 20, 31, 0.93));
      }
      .hero-grid { display: grid; gap: 24px; grid-template-columns: minmax(0, 1fr) 280px; align-items: start; }
      .kicker, .stat-label, .panel-title {
        font-size: 12px; letter-spacing: 0.24em; text-transform: uppercase; color: #98ece6;
      }
      h1 { margin: 10px 0 14px; font-size: clamp(44px, 5vw, 68px); line-height: 0.98; }
      .hero p { margin: 0; color: var(--muted); max-width: 760px; font-size: 18px; line-height: 1.6; }
      .hero-side {
        padding: 20px; border-radius: 22px; border: 1px solid rgba(91, 192, 190, 0.16);
        background: rgba(13, 19, 32, 0.85);
      }
      .hero-side strong { display: block; margin-top: 10px; font-size: 15px; }
      .stats { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 18px; margin-top: 26px; }
      .stat-card {
        padding: 22px; border-radius: 24px; border: 1px solid rgba(91, 192, 190, 0.14);
        background: rgba(13, 19, 32, 0.84);
      }
      .stat-value { font-size: 46px; font-weight: 800; margin: 10px 0 8px; }
      .stat-note { margin: 0; color: var(--muted); line-height: 1.55; }
      .content-grid { display: grid; grid-template-columns: repeat(12, minmax(0, 1fr)); gap: 22px; margin-top: 24px; }
      .panel {
        border-radius: 26px; border: 1px solid rgba(91, 192, 190, 0.14);
        background: var(--panel); padding: 24px;
      }
      .panel.span-12 { grid-column: span 12; }
      .panel.span-6 { grid-column: span 6; }
      .recommendation {
        border-color: rgba(91, 192, 190, 0.28);
        background: linear-gradient(180deg, rgba(12, 18, 31, 0.95), rgba(18, 28, 45, 0.94));
      }
      .recommendation strong { display: block; margin-top: 12px; font-size: 17px; color: #dbfffc; line-height: 1.6; }
      .cards { display: grid; gap: 14px; margin-top: 16px; }
      .mini-card {
        padding: 18px; border-radius: 18px; border: 1px solid rgba(91, 192, 190, 0.12);
        background: rgba(13, 19, 32, 0.66);
      }
      .mini-card h3 { margin: 0 0 8px; font-size: 20px; }
      .mini-card p { margin: 0; color: var(--muted); line-height: 1.58; }
      .meta { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 12px; }
      .meta span, .pill {
        display: inline-flex; align-items: center; gap: 6px;
        padding: 7px 10px; border-radius: 999px; font-size: 12px;
        background: rgba(91, 192, 190, 0.1); border: 1px solid rgba(91, 192, 190, 0.14);
      }
      .pill.good { color: #bcffe2; }
      .pill.watch { color: #ffe6ab; }
      .code-block {
        margin-top: 14px; padding: 16px 18px; border-radius: 18px;
        background: rgba(8, 12, 20, 0.92); border: 1px solid rgba(91, 192, 190, 0.14);
        color: #d8f8f5; white-space: pre-wrap; font-family: Consolas, monospace; line-height: 1.6;
      }
      ul.docs-list { margin: 12px 0 0 18px; color: var(--muted); line-height: 1.75; }
      @media (max-width: 1100px) {
        .hero-grid, .stats { grid-template-columns: 1fr; }
        .panel.span-6, .panel.span-12 { grid-column: span 12; }
      }
    </style>
  </head>
  <body>
    <div class="shell">
      <div class="topbar">
        <div class="brand">
          <div class="brand-mark">EN</div>
          <div>
            <p class="eyebrow">Kinetic Gain</p>
            <h1 class="brand-title">Event Driven Nurture</h1>
            <p class="brand-subtitle">Trigger routing, sequence pacing, and activation-aware conversion posture.</p>
          </div>
        </div>
        <nav>${nav}</nav>
      </div>
      ${body}
    </div>
  </body>
</html>`;
}

function healthPill(health: "healthy" | "watch" | "critical") {
  const cls = health === "healthy" ? "good" : "watch";
  return `<span class="pill ${cls}">${health}</span>`;
}

function renderProductDepth() {
  return `
    <section class="content-grid">
      <article class="panel span-6">
        <p class="panel-title">Product depth</p>
        <h2>What this product does</h2>
        <p>Event Driven Nurture turns product, campaign, webinar, pricing, and re-engagement signals into governed follow-up lanes. Non-technical leaders see which nurture motions create activated demand. Technical teams see the trigger, cadence, suppression, and artifact logic behind each route.</p>
      </article>
      <article class="panel span-6">
        <p class="panel-title">GTM analyst lens</p>
        <h2>Where revenue teams use it</h2>
        <p>Use it to compare signup, demo, webinar, pricing, sales-assist, and reactivation sequences by conversion quality instead of send volume. It shows when follow-up is too slow, too generic, over-touched, or missing the right proof artifact.</p>
      </article>
      <article class="panel span-6">
        <p class="panel-title">Value architecture</p>
        <h2>Where the money leaks</h2>
        <p>The system surfaces leakage from delayed activation, stale nurture, weak segmentation, duplicate touches, and sequences that generate activity but not qualified pipeline. Leaders can redirect spend toward the follow-up paths that actually compound demand.</p>
      </article>
      <article class="panel span-6">
        <p class="panel-title">Technical proof</p>
        <h2>What is inspectable</h2>
        <p>Static routes, API-style outputs, seeded sequence lanes, cadence records, nurture artifacts, verification checks, prerendering, tests, smoke checks, and screenshot generation keep this as a real operator surface rather than generic marketing copy.</p>
      </article>
      <article class="panel span-12">
        <p class="panel-title">Portfolio pattern</p>
        <h2>What these repos have in common</h2>
        <p>Each Kinetic Gain surface converts operational evidence into board-readable decisions: owner, signal, model, risk, value, route, and verification stay visible together.</p>
      </article>
    </section>`;
}

export function renderOverview() {
  const dashboard = summary();
  const sequences = sequenceLane();
  const cadences = conversionCadence();

  const body = `
    <section class="hero">
      <div class="hero-grid">
        <div>
          <p class="kicker">Revenue Plumbing</p>
          <h1>Nurture flows that convert intent before follow-up drag sets in.</h1>
          <p>This control plane models B2B nurture as revenue infrastructure: trigger lanes, conversion-aware cadence, suppression rules, and proof-backed follow-up paths that keep activation quality ahead of send volume.</p>
        </div>
        <aside class="hero-side">
          <p class="panel-title">Environment Posture</p>
          <strong>Live Nurture Console</strong>
        </aside>
      </div>
      <div class="stats">
        <article class="stat-card">
          <p class="stat-label">Sequences</p>
          <div class="stat-value">${dashboard.sequenceCount}</div>
          <p class="stat-note">Distinct trigger lanes being measured for pacing and conversion quality.</p>
        </article>
        <article class="stat-card">
          <p class="stat-label">Activated Accounts</p>
          <div class="stat-value">${dashboard.totalActivated}</div>
          <p class="stat-note">Activated accounts across demo, webinar, pricing, and re-engagement sequences.</p>
        </article>
        <article class="stat-card">
          <p class="stat-label">Average Conversion Rate</p>
          <div class="stat-value">${dashboard.averageConversionRate}%</div>
          <p class="stat-note">Blended activation yield across all active nurture sequences.</p>
        </article>
        <article class="stat-card">
          <p class="stat-label">Top Score</p>
          <div class="stat-value">${dashboard.topScore}</div>
          <p class="stat-note">Highest cadence health score tied to activation-weighted follow-up quality.</p>
        </article>
      </div>
    </section>
    <section class="content-grid">
      <article class="panel span-12 recommendation">
        <p class="panel-title">Critical Growth Recommendation</p>
        <strong>${dashboard.recommendation}</strong>
      </article>
      <article class="panel span-6">
        <p class="panel-title">Sequence Lane Snapshot</p>
        <div class="cards">
          ${sequences
            .slice(0, 3)
            .map(
              (item) => `<div class="mini-card">
                <div style="display:flex;justify-content:space-between;gap:12px;align-items:start;">
                  <h3>${item.trigger}</h3>
                  ${healthPill(item.health)}
                </div>
                <p>${item.audience}</p>
                <div class="meta">
                  <span>${item.activatedCount} activated</span>
                  <span>${item.conversionRatePct}% conversion</span>
                </div>
              </div>`
            )
            .join("")}
        </div>
      </article>
      <article class="panel span-6">
        <p class="panel-title">Conversion Cadence Snapshot</p>
        <div class="cards">
          ${cadences
            .slice(0, 3)
            .map(
              (item) => `<div class="mini-card">
                <div style="display:flex;justify-content:space-between;gap:12px;align-items:start;">
                  <h3>${item.sequence}</h3>
                  ${healthPill(item.health)}
                </div>
                <p>${item.segment}</p>
                <div class="meta">
                  <span>${item.touches} touches</span>
                  <span>${item.activationLiftPct}% lift</span>
                  <span>score ${item.score}</span>
                </div>
              </div>`
            )
            .join("")}
        </div>
      </article>
    </section>
    ${renderProductDepth()}
  `;

  return layout("Event Driven Nurture", "/", body);
}

export function renderSequenceLane() {
  const sequences = sequenceLane();

  const body = `
    <section class="hero">
      <div class="hero-grid">
        <div>
          <p class="kicker">Sequence Lane</p>
          <h1>Triggers, cadence rules, and conversion quality in one nurture surface.</h1>
          <p>Each sequence is modeled with enrolled volume, activated accounts, conversion rate, and a cadence rule so operators can see which nurture motions are genuinely compounding demand.</p>
        </div>
      </div>
    </section>
    <section class="content-grid">
      <article class="panel span-12">
        <p class="panel-title">Nurture Sequences</p>
        <div class="cards">
          ${sequences
            .map(
              (item) => `<div class="mini-card">
                <div style="display:flex;justify-content:space-between;gap:12px;align-items:start;">
                  <h3>${item.trigger}</h3>
                  ${healthPill(item.health)}
                </div>
                <p>${item.audience}</p>
                <div class="meta">
                  <span>${item.enrolledCount} enrolled</span>
                  <span>${item.activatedCount} activated</span>
                  <span>${item.conversionRatePct}% conversion</span>
                </div>
                <div class="code-block">Cadence rule: ${item.cadenceRule}

Notes: ${item.notes}</div>
              </div>`
            )
            .join("")}
        </div>
      </article>
    </section>
    ${renderProductDepth()}
  `;

  return layout("Event Driven Nurture - Sequence Lane", "/sequence-lane", body);
}

export function renderConversionCadence() {
  const cadences = conversionCadence();
  const artifactList = artifacts();

  const body = `
    <section class="hero">
      <div class="hero-grid">
        <div>
          <p class="kicker">Conversion Cadence</p>
          <h1>Activation-weighted scoring for nurture sequences.</h1>
          <p>The cadence index favors activated demand over raw follow-up volume, which keeps sequences aligned with pipeline value instead of vanity send counts.</p>
        </div>
      </div>
    </section>
    <section class="content-grid">
      <article class="panel span-6">
        <p class="panel-title">Cadence Entries</p>
        <div class="cards">
          ${cadences
            .map(
              (item) => `<div class="mini-card">
                <div style="display:flex;justify-content:space-between;gap:12px;align-items:start;">
                  <h3>${item.sequence}</h3>
                  ${healthPill(item.health)}
                </div>
                <p>${item.segment}</p>
                <div class="meta">
                  <span>${item.touches} touches</span>
                  <span>${item.activationLiftPct}% lift</span>
                  <span>score ${item.score}</span>
                </div>
                <div class="code-block">Sequence asset: ${item.sequenceAsset}

Next action: ${item.nextAction}</div>
              </div>`
            )
            .join("")}
        </div>
      </article>
      <article class="panel span-6">
        <p class="panel-title">Artifact Samples</p>
        <div class="cards">
          ${artifactList
            .map(
              (artifact) => `<div class="mini-card">
                <h3>${artifact.path}</h3>
                <p>${artifact.description}</p>
                <div class="meta">${artifact.tags.map((tag) => `<span>${tag}</span>`).join("")}</div>
                <div class="code-block">${artifact.sample}</div>
              </div>`
            )
            .join("")}
        </div>
      </article>
    </section>
  `;

  return layout("Event Driven Nurture - Conversion Cadence", "/conversion-cadence", body);
}

export function renderVerification() {
  const checks = verification();

  const body = `
    <section class="hero">
      <div class="hero-grid">
        <div>
          <p class="kicker">Verification</p>
          <h1>Operator checks for nurture integrity and activation quality.</h1>
          <p>These checks keep the nurture stack honest by anchoring cadence logic to activated demand rather than pure send volume.</p>
        </div>
      </div>
    </section>
    <section class="content-grid">
      <article class="panel span-12">
        <p class="panel-title">Verification Checks</p>
        <div class="cards">
          ${checks
            .map(
              (item) => `<div class="mini-card">
                <h3>Validation</h3>
                <p>${item}</p>
              </div>`
            )
            .join("")}
        </div>
      </article>
    </section>
  `;

  return layout("Event Driven Nurture - Verification", "/verification", body);
}

export function renderDocs() {
  const body = `
    <section class="hero">
      <div class="hero-grid">
        <div>
          <p class="kicker">Docs</p>
          <h1>Event-driven nurture infrastructure for qualified pipeline growth.</h1>
          <p>This repo models B2B nurture as revenue infrastructure: trigger lanes, activated demand, abuse-resistant suppression rules, and cadence pacing that helps GTM teams scale follow-up without sacrificing quality.</p>
        </div>
      </div>
    </section>
    <section class="content-grid">
      <article class="panel span-6">
        <p class="panel-title">Route Map</p>
        <ul class="docs-list">
          <li><code>/</code> overview metrics and recommendation surface</li>
          <li><code>/sequence-lane</code> trigger sequences and cadence rules</li>
          <li><code>/conversion-cadence</code> scoring logic and artifact samples</li>
          <li><code>/verification</code> integrity and launch-readiness checks</li>
          <li><code>/docs</code> architecture framing and usage notes</li>
        </ul>
      </article>
      <article class="panel span-6">
        <p class="panel-title">API Map</p>
        <ul class="docs-list">
          <li><code>/api/dashboard/summary</code></li>
          <li><code>/api/sequence-lane</code></li>
          <li><code>/api/conversion-cadence</code></li>
          <li><code>/api/nurture-artifacts</code></li>
          <li><code>/api/verification</code></li>
          <li><code>/api/sample</code></li>
        </ul>
      </article>
    </section>
    ${renderProductDepth()}
  `;

  return layout("Event Driven Nurture - Docs", "/docs", body);
}
