import { readFile, writeFile } from "node:fs/promises";
import { createServer } from "vite";
import { renderToStaticMarkup } from "react-dom/server";
import { createElement } from "react";

// Keep React as the authoring layer; native anchors and <details> need no runtime JS.
const server = await createServer({
  server: { middlewareMode: true },
  appType: "custom",
});
try {
  const { default: App } = await server.ssrLoadModule("/src/App.jsx");
  const markup = renderToStaticMarkup(createElement(App));
  const template = await readFile("dist/index.html", "utf8");
  if (!template.includes('<div id="root"></div>'))
    throw new Error("Missing prerender target");
  const html = template
    .replace('<div id="root"></div>', `<div id="root">${markup}</div>`)
    .replace(/\s*<script type="module"[^>]*><\/script>/g, "")
    .replace(/\s*<link rel="modulepreload"[^>]*>/g, "");
  await writeFile("dist/index.html", html);
  console.log(
    "Prerendered full React content. Production interactions use native HTML; no client JavaScript required.",
  );
} finally {
  await server.close();
}
