import { writeFileSync, mkdirSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const entry = "Scrum says the sprint lasts two weeks, but ours has been sprinting since January and nobody has seen the finish line.";

const here = dirname(fileURLToPath(import.meta.url));
void here;
const outDir = process.env.MAKEFUN_OUTPUT_DIR
  ? resolve(process.env.MAKEFUN_OUTPUT_DIR)
  : "/output";

try {
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
} catch (err) {
  console.error(err);
  process.exit(1);
}
