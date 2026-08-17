/**
 * QA smoke script — runs against the production build (vite preview).
 *  1. Crawls a representative sample of pages at desktop + mobile widths.
 *  2. Collects page errors / console errors.
 *  3. Runs axe-core accessibility scans.
 *  4. Checks for horizontal overflow and missing alt text.
 *  5. Exercises key interactions: mobile menu, nav link, FAQ accordion, tabs.
 *  6. Captures screenshots into ./qa-screenshots for visual review.
 */
import { createRequire } from "node:module";
import { mkdirSync, existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const require = createRequire(import.meta.url);
const puppeteer = require("puppeteer");
const axeSource = require("axe-core").source;

const BROWSER_CANDIDATES = [
  "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe",
  "C:/Program Files/Microsoft/Edge/Application/msedge.exe",
  "C:/Program Files/Google/Chrome/Application/chrome.exe",
  "C:/Program Files (x86)/Google/Chrome/Application/chrome.exe",
];
const browserPath = BROWSER_CANDIDATES.find(existsSync);
const launchOptions = { headless: "new", args: ["--no-sandbox", "--disable-dev-shm-usage", "--hide-scrollbars"] };
if (browserPath) launchOptions.executablePath = browserPath;
if (!browserPath) console.warn("WARN: no system Chrome/Edge found — falling back to bundled Chromium (axe may fail).");

const BASE = process.env.QA_BASE ?? "http://localhost:4173";
const outDir = path.join(path.dirname(fileURLToPath(import.meta.url)), "..", "qa-screenshots");
mkdirSync(outDir, { recursive: true });

const PAGES = [
  "/", "/about", "/services", "/services/software-development", "/services/ai-solutions",
  "/solutions", "/solutions/ecommerce-growth", "/products", "/products/novaflow",
  "/industries", "/industries/fintech", "/case-studies", "/case-studies/cloud-migration-scale",
  "/insights", "/insights/practical-guide-llm-production", "/faq", "/team", "/careers",
  "/careers/senior-fullstack-engineer", "/locations", "/partners", "/clients",
  "/contact", "/get-a-quote", "/schedule-consultation", "/thank-you",
  "/privacy-policy", "/terms", "/cookie-policy", "/404",
];

const WIDTHS = [1440, 768, 390];

const report = {
  pages: 0,
  errors: [],
  axeViolations: {},
  overflow: [],
  missingAlts: [],
  interactions: [],
};

async function scan(page, url) {
  const errors = [];
  page.on("pageerror", (e) => errors.push(`pageerror: ${e.message}`));
  page.on("console", (m) => {
    if (m.type() === "error") errors.push(`console: ${m.text()}`);
  });

  await page.goto(url, { waitUntil: "networkidle0", timeout: 60000 });
  await page.evaluate(axeSource);
  const axe = await page.evaluate(async () => {
    const r = await window.axe.run(document, {
      rules: { "color-contrast": { enabled: true } },
    });
    return r;
  });

  const layout = await page.evaluate(() => {
    const doc = document.documentElement;
    return {
      overflowX: doc.scrollWidth > doc.clientWidth + 1,
      width: doc.scrollWidth,
      client: doc.clientWidth,
      missingAlts: Array.from(document.images)
        .filter((img) => !(img.getAttribute("alt") !== null))
        .map((img) => img.getAttribute("src")?.slice(0, 80)),
      title: document.title,
    };
  });

  for (const v of axe.violations) {
    const key = `${v.id} (impact: ${v.impact})`;
    report.axeViolations[key] = (report.axeViolations[key] ?? 0) + v.nodes.length;
  }
  if (layout.overflowX) report.overflow.push({ url, width: layout.width, client: layout.client });
  if (layout.missingAlts.length) report.missingAlts.push({ url, imgs: layout.missingAlts });
  if (errors.length) report.errors.push({ url, errors });
  report.pages++;
}

async function interactions(browser) {
  const page = await browser.newPage();
  await page.setViewport({ width: 390, height: 844 });

  // Mobile menu
  await page.goto(`${BASE}/`, { waitUntil: "networkidle0" });
  await page.evaluate(() => window.scrollTo(0, 0));
  const menuBtn = await page.$('[aria-label="Open menu"]');
  if (menuBtn) {
    await menuBtn.click().catch(() => {});
    await new Promise((r) => setTimeout(r, 700));
    const menuVisible = await page.evaluate(() => {
      const el = document.querySelector('[role="dialog"][aria-label="Mobile navigation"]');
      if (!el) return false;
      return el.getBoundingClientRect().width > 0 && getComputedStyle(el).visibility !== "hidden";
    });
    report.interactions.push(`mobile menu opens: ${menuVisible} (dialog found: ${Boolean(await page.$('[role="dialog"]'))})`);
    await page.keyboard.press("Escape");
  } else {
    report.interactions.push("mobile menu button: NOT FOUND");
  }

  // Responsive nav link navigation
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto(`${BASE}/`, { waitUntil: "networkidle0" });
  const link = await page.$('a[href="/contact"]');
  if (link) {
    await link.click();
    await new Promise((r) => setTimeout(r, 1200));
    report.interactions.push(`nav link to /contact: ${page.url().includes("/contact")}`);
  } else {
    report.interactions.push("nav link /contact: NOT FOUND");
  }

  // FAQ accordion
  await page.goto(`${BASE}/faq`, { waitUntil: "networkidle0" });
  const firstItem = await page.$("[data-accordion-item] button");
  if (firstItem) {
    const readAttr = async (name) => {
      const val = await firstItem.evaluate((el, n) => el.getAttribute(n), name);
      return val;
    };
    const before = await readAttr("aria-expanded");
    await firstItem.click();
    await new Promise((r) => setTimeout(r, 600));
    const after = await readAttr("aria-expanded");
    report.interactions.push(`faq accordion aria-expanded ${before} -> ${after}`);
  } else {
    report.interactions.push("faq accordion: NOT FOUND");
  }

  // Filter pills on insights
  await page.goto(`${BASE}/insights`, { waitUntil: "networkidle0" });
  const pill = await page.$('button[role="tab"]');
  if (pill) {
    const texts = await page.$$eval("article h2, article h3", (els) => els.map((e) => e.textContent).slice(0, 3));
    await pill.click();
    await new Promise((r) => setTimeout(r, 800));
    report.interactions.push(`insights filter pill clicked: "${(await pill.evaluate((el) => el.textContent)).trim()}"`);
  } else {
    report.interactions.push("insights filter pill: NOT FOUND");
  }
  await page.close();
}

async function main() {
  const browser = await puppeteer.launch(launchOptions);

  for (const url of PAGES) {
    for (const width of WIDTHS) {
      const page = await browser.newPage();
      await page.setViewport({ width, height: 900 });
      await scan(page, `${BASE}${url}`);
      if (url === "/" && width === 1440) await page.screenshot({ path: path.join(outDir, "home-1440.png"), fullPage: false });
      if (url === "/services" && width === 1440) await page.screenshot({ path: path.join(outDir, "services-1440.png") });
      if (url === "/products/novaflow" && width === 1440) await page.screenshot({ path: path.join(outDir, "product-1440.png") });
      if (url === "/contact" && width === 1440) await page.screenshot({ path: path.join(outDir, "contact-1440.png") });
      if (url === "/" && width === 390) await page.screenshot({ path: path.join(outDir, "home-390.png") });
      if (url === "/get-a-quote" && width === 1440) await page.screenshot({ path: path.join(outDir, "quote-1440.png") });
      await page.close();
    }
  }

  await interactions(browser);
  await browser.close();

  console.log(`\n=== QA REPORT (${report.pages} page-view scans) ===`);
  console.log(`\n-- Page errors (${report.errors.length}) --`);
  for (const e of report.errors.slice(0, 10)) {
    console.log(`[${e.url}] ${e.errors.slice(0, 3).join(" | ")}`);
  }
  console.log(`\n-- Horizontal overflow (${report.overflow.length}) --`);
  for (const o of report.overflow.slice(0, 10)) console.log(`[${o.url}] scrollWidth=${o.width} client=${o.client}`);
  console.log(`\n-- Missing alt (${report.missingAlts.length}) --`);
  for (const m of report.missingAlts.slice(0, 10)) console.log(`[${m.url}] ${m.imgs.join(", ")}`);
  console.log(`\n-- Axe violations --`);
  const sorted = Object.entries(report.axeViolations).sort((a, b) => b[1] - a[1]);
  for (const [rule, count] of sorted.slice(0, 15)) console.log(`${count}\t${rule}`);
  if (!sorted.length) console.log("(none)");
  console.log(`\n-- Interactions --`);
  for (const i of report.interactions) console.log(i);
  console.log(`\nScreenshots -> ${outDir}`);
}

main().catch((e) => {
  console.error("QA script failed:", e);
  process.exit(1);
});