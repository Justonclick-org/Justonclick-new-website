/**
 * Renders every page reachable from "/" to static HTML so GitHub Pages serves each URL
 * with a 200 status and real content, then writes sitemap.xml from the pages found.
 * Runs after copy-404.js, so build/404.html stays the plain app shell for unknown URLs.
 */
const fs = require("fs");
const http = require("http");
const path = require("path");
const puppeteer = require("puppeteer");

const SITE_URL = "https://justonclick.in";
const buildDirectory = path.resolve(__dirname, "..", "build");
const shellPath = path.join(buildDirectory, "404.html");

const TYPES = {
  ".html": "text/html",
  ".js": "application/javascript",
  ".css": "text/css",
  ".json": "application/json",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".webp": "image/webp",
  ".ico": "image/x-icon",
  ".txt": "text/plain",
};

function startServer() {
  const server = http.createServer((req, res) => {
    const urlPath = decodeURIComponent(req.url.split("?")[0]);
    const filePath = path.join(buildDirectory, urlPath);
    const isFile =
      filePath.startsWith(buildDirectory) &&
      fs.existsSync(filePath) &&
      fs.statSync(filePath).isFile();
    // Every route gets the untouched app shell, never an already-prerendered page.
    const target = isFile ? filePath : shellPath;
    res.writeHead(200, {
      "Content-Type": TYPES[path.extname(target)] || "application/octet-stream",
    });
    fs.createReadStream(target).pipe(res);
  });
  return new Promise((resolve) => server.listen(0, () => resolve(server)));
}

function outputFiles(route) {
  if (route === "/") return [path.join(buildDirectory, "index.html")];
  const rel = route.replace(/^\//, "");
  // "about.html" lets GitHub Pages answer /about directly; "about/index.html" covers /about/.
  return [
    path.join(buildDirectory, `${rel}.html`),
    path.join(buildDirectory, rel, "index.html"),
  ];
}

async function main() {
  const server = await startServer();
  const origin = `http://localhost:${server.address().port}`;
  let browser;
  try {
    browser = await puppeteer.launch();
  } catch (err) {
    console.error(
      "Could not start Chrome for prerendering. Run `npx puppeteer browsers install chrome` once, then build again."
    );
    throw err;
  }
  const page = await browser.newPage();
  await page.setViewport({ width: 1366, height: 900 });
  await page.setRequestInterception(true);
  // Only load the site itself; maps, fonts and other third-party requests are skipped.
  page.on("request", (req) =>
    req.url().startsWith(origin) || req.url().startsWith("data:") ? req.continue() : req.abort()
  );

  const queue = ["/"];
  const seen = new Set(queue);
  const indexable = [];

  while (queue.length) {
    const route = queue.shift();
    await page.goto(origin + route, { waitUntil: "networkidle0", timeout: 60000 });
    await page.waitForSelector("main");
    await new Promise((r) => setTimeout(r, 300));

    const { html, links, noindex } = await page.evaluate(() => ({
      html: "<!DOCTYPE html>" + document.documentElement.outerHTML,
      links: Array.from(document.querySelectorAll("a[href^='/']"), (a) =>
        a.getAttribute("href").split(/[?#]/)[0].replace(/(.)\/$/, "$1")
      ),
      noindex: /noindex/.test(
        document.querySelector('meta[name="robots"]')?.getAttribute("content") || ""
      ),
    }));

    for (const file of outputFiles(route)) {
      fs.mkdirSync(path.dirname(file), { recursive: true });
      fs.writeFileSync(file, html);
    }
    if (!noindex) indexable.push(route);
    console.log(`prerendered ${route}${noindex ? " (noindex)" : ""}`);

    for (const link of links) {
      if (link && !seen.has(link) && !link.startsWith("/admin") && !path.extname(link)) {
        seen.add(link);
        queue.push(link);
      }
    }
  }

  await browser.close();
  server.close();

  const today = new Date().toISOString().slice(0, 10);
  const sitemap = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...indexable.map(
      (route) => `  <url><loc>${SITE_URL}${route}</loc><lastmod>${today}</lastmod></url>`
    ),
    "</urlset>",
    "",
  ].join("\n");
  fs.writeFileSync(path.join(buildDirectory, "sitemap.xml"), sitemap);
  console.log(`sitemap.xml written with ${indexable.length} URLs`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
