import { readdirSync, writeFileSync } from "fs";

const assets = readdirSync("dist/client/standalone/assets");

const jsFile = assets.find((f) => f.endsWith(".js") && !f.includes("chunk"));
const cssFile = assets.find((f) => f.endsWith(".css"));

const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="author" content="Built by Lyka" />
  <title>Built by Lyka — Websites & portfolios made simple</title>
  <meta name="description" content="Affordable, beginner-friendly website creation for creators, freelancers, and small businesses. Starting at ₱1,000." />
  <meta property="og:title" content="Built by Lyka — Websites & portfolios made simple" />
  <meta property="og:description" content="Soft, modern websites built around you. Portfolios, landing pages, and business sites starting at ₱1,000." />
  <meta property="og:type" content="website" />
  <meta name="twitter:card" content="summary_large_image" />
  <link rel="icon" href="/MyFavicon.png" type="image/png" />
  ${cssFile ? `<link rel="stylesheet" href="/standalone/assets/${cssFile}" />` : ""}
</head>
<body>
  <div id="root"></div>
  ${jsFile ? `<script type="module" src="/standalone/assets/${jsFile}"></script>` : ""}
</body>
</html>`;

writeFileSync("dist/client/index.html", html);
console.log(`✓ Generated dist/client/index.html (js: ${jsFile}, css: ${cssFile})`);
