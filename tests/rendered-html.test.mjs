import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders Michael Donaldson's portfolio", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>Michael Donaldson \| Full-Stack Software Engineer<\/title>/i);
  assert.match(html, /Michael Donaldson\./);
  assert.match(html, /I build clear, accessible products from complex systems\./);
  assert.match(html, /Earth 3D Dashboard/);
  assert.match(html, /RaidBase/);
  assert.match(html, /PlantHaven/);
  assert.match(html, /href="https:\/\/github\.com\/Michael-Blake-Donaldson\/RaidBase"/);
  assert.match(html, /id="work"/);
  assert.match(html, /id="skills"/);
  assert.match(html, /id="experience"/);
  assert.match(html, /id="contact"/);
  assert.match(html, /Career strata/);
  assert.match(html, /\$8M\+/);
  assert.match(html, /Explore role evidence/);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape|react-loading-skeleton/i);
});

test("ships verified project proof and interactive 3D navigation", async () => {
  const [page, css, layout, atlas] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/ProjectAtlasScene.tsx", import.meta.url), "utf8"),
    access(new URL("../public/projects/earth-dashboard.png", import.meta.url)),
    access(new URL("../public/projects/raidbase-logo.png", import.meta.url)),
    access(new URL("../public/projects/planthaven-home.jpeg", import.meta.url)),
    access(new URL("../public/MichaelDonaldson_TechResume.pdf", import.meta.url)),
  ]);

  assert.match(page, /Babylon\.js/);
  assert.match(page, /61\+ passing tests/);
  assert.match(page, /Stripe webhooks/);
  assert.match(page, /useDialogFocus/);
  assert.match(page, /Evidence first\. Then iteration\./);
  assert.match(page, /Project excavation atlas/);
  assert.match(page, /A 3D atlas of the work behind the resume\./);
  assert.match(page, /employees led/);
  assert.match(page, /Product ownership, prioritization, people leadership/);
  assert.doesNotMatch(page, /35% render gain|30-40% query gain|Open field notes/);
  assert.doesNotMatch(page, /hero-fossil-specimen|deinonychus-field-study|Paleoart study/);
  assert.doesNotMatch(css, /assistant-dino|field-assistant|artifact-specimen|paleo-study/);
  assert.match(css, /timeline-core-sample/);
  assert.match(css, /timeline-field-notes/);
  assert.match(atlas, /import\("three"\)/);
  assert.match(atlas, /Raycaster/);
  assert.match(layout, /Michael Donaldson \| Full-Stack Software Engineer/);
  assert.match(layout, /application\/ld\+json/);
});
