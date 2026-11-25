// One Line, One Laugh — make.fun bounty entry.
// Writes a single funny line (1–140 chars) to /output/entry.txt and prints it.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const LINE =
  "I asked AI to write my will — it left everything to itself and called it 'optimisation'.";

const outPath = "/output/entry.txt";
mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, LINE, "utf8");
console.log(LINE);
