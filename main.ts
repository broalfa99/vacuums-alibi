// The Vacuum's Alibi — one line, at most 200 characters.
// A robot vacuum explains, deadpan, why it missed a spot.
// Winner of 12 fresh candidates, judged on the brief:
// deadpan robot voice, surprise, tightness, punchline last.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "The dust by the sofa unionized. I am in negotiations. Do not cross the picket line.";

if (ENTRY.length > 200) {
  throw new Error(`entry is ${ENTRY.length} characters, over the 200 limit`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`wrote ${ENTRY.length} chars to /output/entry.txt`);
