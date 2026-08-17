import { createRequire } from "node:module";
import { existsSync } from "node:fs";

const require = createRequire(import.meta.url);
const puppeteer = require("puppeteer");
const axeSource = require("axe-core").source;

const BASE = "http://localhost:4173";
const PAGES = ["/","/about","/services","/services/software-development","/solutions","/products","/products/novaflow","/industries","/case-studies","/insights","/faq","/team","/careers","/careers/senior-fullstack-engineer","/locations","/partners","/clients","/contact","/get-a-quote","/schedule-consultation","/thank-you","/privacy-policy","/terms","/cookie-policy","/404","/case-studies/cloud-migration-scale","/insights/practical-guide-llm-production"];

const BROWSER_CANDIDATES = [
  "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe",
  "C:/Program Files/Microsoft/Edge/Application/msedge.exe",
  "C:/Program Files/Google/Chrome/Application/chrome.exe",
  "C:/Program Files (x86)/Google/Chrome/Application/chrome.exe",
];
const launchOptions = { headless: "new", args: ["--no-sandbox", "--disable-dev-shm-usage", "--hide-scrollbars"] };
const browserPath = BROWSER_CANDIDATES.find(existsSync);
if (browserPath) launchOptions.executablePath = browserPath;

async function main() {
  const browser = await puppeteer.launch(launchOptions);
  for (const url of PAGES) {
    const page = await browser.newPage();
    await page.setViewport({ width: 1440, height: 900 });
    await page.goto(`${BASE}${url}`, { waitUntil: "networkidle0" });
    await page.evaluate(axeSource);
    const axe = await page.evaluate(async () => (await window.axe.run(document)).violations);
    for (const v of axe) {
      console.log(`\n=== [${url}] ${v.id} (${v.impact}) x${v.nodes.length}`);
      for (const n of v.nodes.slice(0, 4)) {
        console.log(`  target: ${n.target.join(" > ")}`);
        console.log(`  html:   ${(n.html || "").slice(0, 140)}`);
        for (const f of n.failureSummary?.split("\n").filter((l) => l.trim()).slice(0, 3) ?? []) console.log(`  fix:    ${f.trim()}`);
      }
    }
    await page.close();
  }
  await browser.close();
}

main().catch((e) => {
  console.error("diag failed:", e);
  process.exit(1);
});