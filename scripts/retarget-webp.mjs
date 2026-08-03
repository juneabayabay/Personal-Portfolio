import { readFileSync, writeFileSync } from "node:fs";

const files = [
  "src/constants/projects.ts",
  "src/constants/learning.ts",
  "src/constants/capstone.ts",
];

for (const file of files) {
  let source = readFileSync(file, "utf8");
  source = source.replace(/(\/projects\/[^"']+)\.png/g, "$1.webp");
  source = source.replace(/(\/projects\/[^"']+)\.jpg/g, "$1.webp");
  source = source.replace(/(\/blog\/[^"']+)\.png/g, "$1.webp");
  writeFileSync(file, source);
  console.log("updated", file);
}
