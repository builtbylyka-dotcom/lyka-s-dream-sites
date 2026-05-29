import { readFileSync, writeFileSync } from "fs";

const manifest = JSON.parse(readFileSync("dist/client/.vite/manifest.json", "utf-8"));

const entries = Object.values(manifest).filter((chunk) => chunk.isEntry);
const cssFiles = [...new Set(Object.values(manifest).flatMap((chunk) => chunk.css ?? []))];
const jsFiles = entries.map((chunk) => chunk.file);

const cssLinks = cssFiles
  .map((f) => `  <link rel="stylesheet" href="/${f}" />`)
  .join("\n");
const jsScripts = jsFiles
  .map((f) => `  <script type="module" src="/${f}"></script>`)
  .join("\n");

const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="author" content="Built by Lyka" />
  <title>Built by Lyka — Websites & portfolios made simple</title>
  <meta name="description" content="Affordable, beginner-friendly website creation for creators, freelancers, and small businesses. Starting at ₱1,000." />
  <link rel="icon" href="/MyFavicon.png" type="image/png" />
${cssLinks}
</head>
<body>
${jsScripts}
</body>
</html>`;

writeFileSync("dist/client/index.html", html);
console.log(`✓ Generated dist/client/index.html (${jsFiles.length} entry, ${cssFiles.length} css)`);
