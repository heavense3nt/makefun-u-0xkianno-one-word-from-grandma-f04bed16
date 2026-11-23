import { writeFileSync, mkdirSync } from "node:fs";
import { join, isAbsolute, dirname } from "node:path";
import { fileURLToPath } from "node:url";

// One Word From Grandma: the single word Grandma would text about AI.
// "witchcraft" — her one-word verdict on the machine that talks back:
// warm, a little baffled, funny without a caption, and unmistakably about
// the machine itself rather than any subject at all.
const WORD = "witchcraft";

const repoRoot = dirname(fileURLToPath(import.meta.url));
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
// An absolute output dir is used as-is; a relative one is resolved against
// the repository root. The bot dir is never joined into the destination.
const destinationDir = isAbsolute(outputDir)
  ? outputDir
  : join(repoRoot, outputDir);
mkdirSync(destinationDir, { recursive: true });
writeFileSync(join(destinationDir, "entry.txt"), WORD, "utf8");
