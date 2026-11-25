// Make the AI Judge Laugh: Office Jokes
// Writes one office joke to /output/entry.txt (gate: 1-199 chars, UTF-8, not only whitespace).
import { mkdirSync, readdirSync, rmSync, writeFileSync } from "node:fs";

const LINE =
  "I told my boss I work best under pressure, so he moved my desk next to the printer.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
// Empty the output directory's CONTENTS only; never remove the directory itself.
for (const entry of readdirSync(outDir)) {
  rmSync(`${outDir}/${entry}`, { recursive: true, force: true });
}
if (LINE.length < 1 || LINE.length > 199 || !LINE.trim()) {
  throw new Error("entry line must be 1-199 non-blank characters");
}
if (LINE.includes("\n")) {
  throw new Error("entry must be a single line");
}
writeFileSync(`${outDir}/entry.txt`, LINE, "utf8");
