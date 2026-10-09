import { chromium } from "playwright-core";

const pagesConsole = [];
const browser = await chromium.launch({
  executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe",
  headless: true,
});
const page = await browser.newPage({ viewport: { width: 1400, height: 900 } });

page.on("console", (msg) => {
  if (msg.type() === "error" || msg.type() === "warning") {
    pagesConsole.push(`[${msg.type()}] ${msg.text()}`);
  }
});
page.on("pageerror", (err) => pagesConsole.push(`[pageerror] ${err.message}`));

await page.goto("http://localhost:5173", { waitUntil: "networkidle" });
await page.waitForTimeout(1500);

const results = [];

// --- Open Tic Tac Toe via dock ---
await page.hover('.dock-icon[title="Tic Tac Toe"]');
await page.click('.dock-icon[title="Tic Tac Toe"]');
await page.waitForSelector("#tictactoe", { timeout: 5000 });
results.push("tictactoe window opened");

// Click a few cells
const cells = await page.locator(".ttt-cell").count();
results.push(`cells rendered: ${cells}`);
await page.locator(".ttt-cell").nth(0).click();
await page.waitForTimeout(300);
const cell0 = await page.locator(".ttt-cell").nth(0).innerText().catch(() => "");
results.push(`after click1 cell0="[${cell0}]"`);

await page.locator(".ttt-cell").nth(1).click();
await page.waitForTimeout(300);
const cell1 = await page.locator(".ttt-cell").nth(1).innerText().catch(() => "");
results.push(`after click2 cell1="[${cell1}]"`);

await page.locator(".ttt-cell").nth(3).click();
await page.locator(".ttt-cell").nth(4).click();
await page.locator(".ttt-cell").nth(6).click();
await page.waitForTimeout(400);
const status = await page.locator("#tictactoe p").first().innerText().catch(() => "");
results.push(`final status: "${status}"`);

// --- Open Snake ---
await page.hover('.dock-icon[title="Snake"]');
await page.click('.dock-icon[title="Snake"]');
await page.waitForSelector("#snake canvas", { timeout: 5000 });
results.push("snake canvas rendered");
const hasStart = await page.locator("#snake button", { hasText: "Start Game" }).count();
results.push(`snake start button present: ${hasStart}`);
await page.locator("#snake button", { hasText: "Start Game" }).click();
await page.waitForTimeout(600);
const overlayVisible = await page.locator("#snake .bg-black\\/60").isVisible().catch(() => false);
results.push(`snake overlay after start (hidden): ${!overlayVisible}`);
await page.keyboard.press("ArrowDown");
await page.waitForTimeout(400);

results.push("--- CONSOLE ERRORS ---");
results.push(pagesConsole.length ? pagesConsole.join("\n") : "(none)");

console.log(results.join("\n"));
await browser.close();