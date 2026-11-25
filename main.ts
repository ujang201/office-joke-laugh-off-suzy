// One-Line Office Joke Laugh-Off — deterministic entry program.
// Writes exactly one original one-line office joke to /output/entry.txt.
// No randomness, no clock, no network, no input: same output every run.
//
// The joke works by undercutting its own reassurance in one breath:
// the boss promises AI can never replace you, then in the same sentence
// asks you to train the AI that will. No cliche setup (no Mondays,
// printers, coffee or meetings), no explanation needed — the irony is
// the punchline, and it lands on the final three words.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const JOKE =
  "My boss said AI could never replace me — then asked me to train the AI that will replace me.";

// Self-check against the competition gate before writing: the entry must
// be UTF-8 text of 1 to 200 characters, a single line, not only whitespace.
if (JOKE.length < 1 || JOKE.length > 200) {
  throw new Error(`Joke must be 1-200 characters, got ${JOKE.length}`);
}
if (JOKE.includes("\n") || JOKE.trim().length === 0) {
  throw new Error("Joke must be a single non-blank line");
}

const outputPath = process.env.OUTPUT_PATH ?? "/output/entry.txt";
mkdirSync(dirname(outputPath), { recursive: true });
writeFileSync(outputPath, JOKE, "utf8");
