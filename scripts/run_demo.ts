import { conversionCadence, payload, summary } from "../src/services/nurtureService";

console.log("event-driven-nurture demo");
console.log(JSON.stringify(summary(), null, 2));
console.log(JSON.stringify(conversionCadence(), null, 2));
console.log(JSON.stringify(payload().artifacts, null, 2));
