import assert from "node:assert/strict";
import { readFile, access, stat } from "node:fs/promises";
import { resolve } from "node:path";

const html = await readFile("dist/index.html", "utf8");
const ids = [...html.matchAll(/\sid="([^"]+)"/g)].map((match) => match[1]);
assert.equal(ids.length, new Set(ids).size, "IDs must be unique");
assert.equal(
  (html.match(/<h1\b/g) || []).length,
  1,
  "Exactly one page heading",
);
for (const id of [
  "main",
  "top",
  "projects",
  "experience",
  "skills",
  "about",
  "contact",
]) {
  assert(ids.includes(id), `Missing section: ${id}`);
}
for (const match of html.matchAll(/\s(?:href|src)="([^"]*)"/g)) {
  const url = match[1];
  assert(url.length, "Links must have a destination");
  if (url.startsWith("#"))
    assert(ids.includes(url.slice(1)), `Missing anchor: ${url}`);
  if (url.startsWith("/")) {
    assert(
      url.startsWith("/portfolio-website/"),
      `Incorrect GitHub Pages base: ${url}`,
    );
    await access(resolve("dist", url.slice("/portfolio-website/".length)));
  }
}
assert.equal(
  (html.match(/<details\b/g) || []).length,
  3,
  "Three crawlable case studies",
);
assert(
  !/<script[^>]+type="module"/.test(html),
  "Production needs no client JavaScript",
);
for (const text of [
  "ChessLens",
  "AlgoDojo",
  "KitchenBuddy API",
  "TheRad",
  "Sep 2025",
  "Apr 2026",
  "26 maths games",
  "University of Johannesburg",
]) {
  assert(html.includes(text), `Missing crawlable evidence: ${text}`);
}
for (const metadata of [
  "description",
  "canonical",
  "og:image",
  "twitter:card",
  "application/ld+json",
])
  assert(html.includes(metadata));
const schema = JSON.parse(
  html.match(/<script type="application\/ld\+json">(.*?)<\/script>/s)[1],
);
assert.equal(schema["@type"], "Person");
assert.equal(schema.name, "Sennelo Mulanga Gundo");
const resume = await readFile("dist/Sennelo_Mulanga_CV.pdf");
assert(resume.subarray(0, 5).toString() === "%PDF-", "Resume must be a PDF");
assert(
  resume.equals(await readFile("public/Sennelo_Mulanga_CV.pdf")),
  "Resume must be copied unchanged",
);
for (const file of ["robots.txt", "sitemap.xml", "images/social-preview.png"])
  await access(`dist/${file}`);
console.log(
  `Build checks passed: ${ids.length} unique anchors, 3 static case studies, local assets, PDF and metadata.`,
);
console.log(
  `Prerendered HTML: ${(await stat("dist/index.html")).size} bytes; client JavaScript requested: 0 bytes.`,
);
