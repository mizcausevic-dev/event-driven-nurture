import express from "express";

import { artifacts, conversionCadence, payload, sequenceLane, summary, verification } from "./services/nurtureService";
import { renderConversionCadence, renderDocs, renderOverview, renderSequenceLane, renderVerification } from "./services/render";

const app = express();
const port = Number(process.env.PORT ?? 5478);

app.get("/", (_req, res) => res.type("html").send(renderOverview()));
app.get("/sequence-lane", (_req, res) => res.type("html").send(renderSequenceLane()));
app.get("/conversion-cadence", (_req, res) => res.type("html").send(renderConversionCadence()));
app.get("/verification", (_req, res) => res.type("html").send(renderVerification()));
app.get("/docs", (_req, res) => res.type("html").send(renderDocs()));

app.get("/api/dashboard/summary", (_req, res) => res.json(summary()));
app.get("/api/sequence-lane", (_req, res) => res.json(sequenceLane()));
app.get("/api/conversion-cadence", (_req, res) => res.json(conversionCadence()));
app.get("/api/nurture-artifacts", (_req, res) => res.json(artifacts()));
app.get("/api/verification", (_req, res) => res.json(verification()));
app.get("/api/sample", (_req, res) => res.json(payload()));

if (require.main === module) {
  app.listen(port, "127.0.0.1", () => {
    console.log(`Event Driven Nurture listening on http://127.0.0.1:${port}`);
  });
}

export default app;
