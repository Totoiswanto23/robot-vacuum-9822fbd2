// The Robot Vacuum's Funniest Excuse
// make.fun bounty: u-eager-stork-81-9647-the-robot-vacuum-s-funniest-9822fbd2
// Entry by @toto-iswanto — one line, max 120 characters.

// The entry line lives in its own constant below, so the joke
// stays readable on its own and easy to quote.

const entry =
  "I saw the dust bunny, we made eye contact, and I respected its hustle. Spot stays dirty. No regrets.";

// One line, no setup, no context needed: the vacuum looks the
// dust bunny in the eye, respects the hustle, and owns the miss.

// The program writes the single line to /output/entry.txt,
// the file the make.fun gate reads, and prints it too.
import { mkdirSync, writeFileSync } from "node:fs";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");

console.log(entry);

export { entry };
