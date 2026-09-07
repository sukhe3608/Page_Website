import { execSync } from "node:child_process";
import { existsSync, readdirSync, writeFileSync } from "node:fs";
import { join, sep } from "node:path";

const DIST = "dist";
const TODAY = new Date().toISOString().slice(0, 10);

let baseUrl = "https://www.novacore.example.com";
try {
  const siteModule = await import("../src/config/site.ts");
  baseUrl = siteModule.site.url;
} catch {
  // fall back to the placeholder domain
}

function walk(dir, out = []) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) out.push(...walk(full));
    else if (entry.name.endsWith(".html")) out.push(full);
  }
  return out;
}

const base = baseUrl.replace(/\/+$/, "");

/** 1. Prerender every route to static HTML with react-snap. */
if (existsSync(join("node_modules", "react-snap"))) {
  const snapEnv = { ...process.env };
  if (process.env.GH_PAGES === "true") snapEnv.PUBLIC_URL = "/Page_Website/";
  execSync("npx react-snap", { stdio: "inherit", env: snapEnv });
} else {
  console.warn("[postbuild] react-snap not installed — skipping prerender.");
}

/** 2. Generate sitemap.xml and robots.txt from the prerendered HTML files. */
const pages = walk(DIST)
  .map((file) => file.split(sep).join("/"))
  .filter((file) => !file.endsWith("/404.html") && !file.endsWith("/200.html"));

const urls = pages
  .map((file) => {
    let path = file.replace(`${DIST}/`, "").replace(/index\.html$/, "").replace(/\.html$/, "");
    if (!path) path = "/";
    if (!path.startsWith("/")) path = `/${path}`;
    return path;
  })
  .sort();

const urlset = urls
  .map((path) => {
    const priority = path === "/" ? "1.0" : "0.8";
    return `  <url>\n    <loc>${base}${path}</loc>\n    <lastmod>${TODAY}</lastmod>\n    <priority>${priority}</priority>\n  </url>`;
  })
  .join("\n");

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urlset}\n</urlset>\n`;
writeFileSync(join(DIST, "sitemap.xml"), sitemap);

const robots = `User-agent: *\nAllow: /\nDisallow: /thank-you\n\nSitemap: ${base}/sitemap.xml\n`;
writeFileSync(join(DIST, "robots.txt"), robots);

console.log(`[postbuild] sitemap.xml with ${urls.length} URLs written.`);

/** 3. GitHub Pages SPA fallback — serve the app shell for unknown deep links. */
if (process.env.GH_PAGES === "true") {
  const { readFileSync } = await import("node:fs");
  try {
    const appShell = readFileSync(join(DIST, "index.html"), "utf8");
    writeFileSync(join(DIST, "404.html"), appShell);
    console.log("[postbuild] 404.html replaced with app shell (GitHub Pages deep-link fallback).");
  } catch (error) {
    console.warn(`[postbuild] Could not write 404 fallback: ${error.message}`);
  }
}
