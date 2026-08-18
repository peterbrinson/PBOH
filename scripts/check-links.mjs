#!/usr/bin/env node
// Checks every wikilink in corpus/ against what the Quartz build actually emits.
//
// Zero dependencies (Node built-ins only). Run from anywhere:
//   node scripts/check-links.mjs            # report; exit 1 only on real breakage
//   node scripts/check-links.mjs --strict   # also fail on links to unwritten pages
//   node scripts/check-links.mjs --quiet     # counts only, no per-link detail
//
// WHY THIS EXISTS. Obsidian and Quartz resolve links differently, so a link can
// be perfectly valid in one and a 404 in the other — with nothing to warn you:
//
//   * Obsidian's root is the VAULT, so a path-style link needs a `PBOH/corpus/`
//     prefix. Quartz's root IS `corpus/`, so that same prefix 404s on the site.
//     Quartz does not flag these — it accepts the bad slug and emits a normal
//     -looking anchor. Invisible in the editor, in the build log, and on the page.
//   * A link into a `publish: false` page resolves fine in Obsidian and 404s
//     live. It also breaks LATER, whenever a page gets hidden, with nothing to
//     say what pointed at it.
//
// Exit codes: 0 = clean (or only unwritten-page links, which are a content
// backlog). 1 = at least one link that is genuinely broken for a reader.

import { readFileSync, readdirSync, statSync } from "node:fs";
import { join, relative, dirname, extname, sep } from "node:path";
import { fileURLToPath } from "node:url";

const SCRIPT_DIR = dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = join(SCRIPT_DIR, "..");
const CORPUS = join(REPO_ROOT, "corpus");
const QUARTZ_CONFIG = join(REPO_ROOT, "site", "quartz.config.ts");

const STRICT = process.argv.includes("--strict");
const QUIET = process.argv.includes("--quiet");

// ---- read ignorePatterns out of the real Quartz config -------------------
// Parsed rather than duplicated so this check can't drift from the build.
function ignorePatterns() {
  const fallback = ["private", "templates", ".obsidian", "**/raw/**",
                    "**/CLAUDE.md", "**/GEMINI.md", "**/DEEPSEEK.md", "**/AGENTS.md"];
  let src;
  try { src = readFileSync(QUARTZ_CONFIG, "utf8"); } catch { return fallback; }
  const m = src.match(/ignorePatterns:\s*\[([^\]]*)\]/s);
  if (!m) return fallback;
  const pats = [...m[1].matchAll(/["'`]([^"'`]+)["'`]/g)].map((x) => x[1]);
  return pats.length ? pats : fallback;
}
const IGNORE = ignorePatterns();

// glob-ish matcher covering the shapes Quartz's ignorePatterns actually use
function isIgnored(rel) {
  const parts = rel.split("/");
  for (const pat of IGNORE) {
    if (!pat.includes("/") && !pat.includes("*")) {
      if (parts.includes(pat)) return true;          // bare segment, e.g. "private"
      continue;
    }
    const rx = new RegExp("^" + pat
      .replace(/[.+^${}()|[\]\\]/g, "\\$&")
      .replace(/\*\*\//g, "(?:.*/)?")
      .replace(/\*\*/g, ".*")
      .replace(/\*/g, "[^/]*") + "$");
    if (rx.test(rel)) return true;
  }
  return false;
}

// ---- walk ----------------------------------------------------------------
function walk(dir) {
  const out = [];
  let entries;
  try { entries = readdirSync(dir); } catch { return out; }
  for (const name of entries) {
    if (name === ".git" || name === ".obsidian") continue;
    const full = join(dir, name);
    if (statSync(full).isDirectory()) out.push(...walk(full));
    else out.push(full);
  }
  return out;
}

const relOf = (p) => relative(CORPUS, p).split(sep).join("/");
const stripBom = (s) => (s.charCodeAt(0) === 0xfeff ? s.slice(1) : s);

// ---- frontmatter ---------------------------------------------------------
// Files written by Obsidian on Windows can carry a UTF-8 BOM; gray-matter (and
// therefore Quartz) sees through it, so this must too or every alias is missed.
function frontmatter(text) {
  const m = stripBom(text).match(/^---\s*\n([\s\S]*?)\n---\s*(\n|$)/);
  return m ? m[1] : null;
}

function aliasesOf(fm) {
  if (!fm) return [];
  const out = [];
  const inline = fm.match(/^aliases:\s*\[(.*?)\]/m);
  if (inline) out.push(...inline[1].split(",").map((s) => s.trim().replace(/^["']|["']$/g, "")));
  const block = fm.match(/^aliases:\s*\n((?:[ \t]*-[ \t]*.*\n?)+)/m);
  if (block) {
    for (const line of block[1].split("\n")) {
      const v = line.replace(/^[ \t]*-[ \t]*/, "").trim().replace(/^["']|["']$/g, "");
      if (v) out.push(v);
    }
  }
  return out.filter(Boolean);
}

function isPublished(fm, rel) {
  if (isIgnored(rel)) return false;
  if (!fm) return true;                                    // no frontmatter = published
  if (/^publish:\s*false\b/mi.test(fm)) return false;
  if (/^draft:\s*true\b/mi.test(fm)) return false;
  return true;
}

// ---- index the corpus ----------------------------------------------------
const byRel = new Map();      // "Design/index"          -> rel path with ext
const byBase = new Map();     // "index"                 -> [rel paths]
const byAlias = new Map();    // "Bounded Worlds"        -> [rel paths]
const folders = new Set();
const published = new Map();  // rel path -> boolean

for (const full of walk(CORPUS)) {
  const rel = relOf(full);
  const ext = extname(rel);
  const noExt = rel.slice(0, rel.length - ext.length);
  const base = noExt.split("/").pop();

  byRel.set(noExt, rel);
  if (!byBase.has(base)) byBase.set(base, []);
  byBase.get(base).push(rel);

  let d = rel.split("/").slice(0, -1);
  while (d.length) { folders.add(d.join("/")); d = d.slice(0, -1); }

  if (ext.toLowerCase() === ".md") {
    const fm = frontmatter(readFileSync(full, "utf8"));
    published.set(rel, isPublished(fm, rel));
    for (const a of aliasesOf(fm)) {
      if (!byAlias.has(a)) byAlias.set(a, []);
      byAlias.get(a).push(rel);
    }
  } else {
    published.set(rel, !isIgnored(rel));
  }
}

// ---- scan links ----------------------------------------------------------
const WIKILINK = /(!?)\[\[([^\]\n]+?)\]\]/g;

const brokenLive = [];   // resolves in Obsidian, 404s on the site
const intoHidden = [];   // target exists but is not published
const unwritten = [];    // target does not exist anywhere
const obsidianOnly = []; // resolves in Quartz, dead in Obsidian (mirror bug)
const ambiguous = [];
let totalLinks = 0;

for (const [noExt, rel] of byRel) {
  if (!rel.endsWith(".md")) continue;
  const srcPublished = published.get(rel);
  const text = stripBom(readFileSync(join(CORPUS, rel), "utf8"));

  for (const m of text.matchAll(WIKILINK)) {
    const isEmbed = m[1] === "!";
    // Inside markdown tables the alias pipe is escaped as \| — strip it, or the
    // target reads as "Components\" and looks dead when it is perfectly fine.
    let target = m[2].split("|")[0].replace(/\\+$/, "").split("#")[0].trim();
    if (!target) continue;
    totalLinks++;

    // Vault-absolute: valid in Obsidian (vault root), 404 on the site.
    if (/^(PBOH|GDOH|corpus)\//.test(target)) {
      if (srcPublished) brokenLive.push({ rel, target });
      continue;
    }

    // Targets may carry any extension (image embeds) or none at all, so try
    // both forms at every step — the index is keyed without the extension.
    const stem = target.replace(/\.[A-Za-z0-9]+$/, "");
    let hit = byRel.get(stem) ?? byRel.get(target) ?? null;
    let viaPath = hit !== null;

    if (!hit) {
      const folder = [target, stem].find((t) => folders.has(t));
      if (folder) {
        hit = byRel.get(folder + "/index") ?? null;
        viaPath = hit !== null;
      }
    }
    if (!hit) {
      const al = byAlias.get(target) ?? byAlias.get(stem);
      if (al) hit = al[0];
    }
    if (!hit) {
      const base = stem.split("/").pop();
      const cands = byBase.get(base) ?? byBase.get(target.split("/").pop()) ?? [];
      if (cands.length === 1) hit = cands[0];
      else if (cands.length > 1) {
        // Same basename, different extensions (e.g. a .jpg beside a .webp) is
        // not ambiguous when the link names one explicitly.
        const exact = cands.find((c) => c.split("/").pop() === target.split("/").pop());
        if (exact) hit = exact;
        else { ambiguous.push({ rel, target, cands }); continue; }
      }
    }
    if (!hit) {
      // Bare folder name, e.g. [[Tutorials - LLM]] -> that folder's index.
      const folder = [...folders].find((f) => f.split("/").pop() === stem);
      if (folder) { hit = byRel.get(folder + "/index") ?? null; viaPath = hit !== null; }
    }

    if (!hit) {
      unwritten.push({ rel, target, isEmbed, srcPublished });
    } else {
      // A multi-segment path link resolves corpus-relative (Quartz) but NOT from
      // the vault root (Obsidian) — the mirror image of the vault-absolute bug.
      if (viaPath && target.includes("/")) obsidianOnly.push({ rel, target, hit });
      if (srcPublished && !published.get(hit)) intoHidden.push({ rel, target, hit });
    }
  }
}

// ---- report --------------------------------------------------------------
const mdCount = [...byRel.values()].filter((r) => r.endsWith(".md")).length;
console.log(`Checked ${mdCount} pages, ${totalLinks} wikilinks.\n`);

function section(title, rows, render) {
  const label = rows.length ? `${rows.length}` : "clean";
  console.log(`${title}: ${label}`);
  if (rows.length && !QUIET) for (const r of rows) console.log("    " + render(r));
  if (rows.length) console.log("");
}

section("BREAKS THE LIVE SITE — vault-absolute link", brokenLive,
  (r) => `${r.rel}\n        [[${r.target}]]  → drop the PBOH/corpus/ prefix; use the target's alias`);

section("BREAKS THE LIVE SITE — links into an unpublished page", intoHidden,
  (r) => `${r.rel}\n        [[${r.target}]] → ${r.hit} (publish:false)`);

// Advisory only: the published site is correct, it's the editor that can't
// follow these. Worth knowing, not worth blocking a deploy over.
section("ADVISORY — resolves on the site, dead in Obsidian", obsidianOnly,
  (r) => `${r.rel}\n        [[${r.target}]] → ${r.hit}; Obsidian can't follow a folder/corpus-relative path`);

section("AMBIGUOUS — basename matches several files", ambiguous,
  (r) => `${r.rel}\n        [[${r.target}]] → ${r.cands.length} candidates; qualify it`);

// Links to pages nobody has written yet are a content backlog, not a defect.
// Grouped and counted, but they don't fail the run unless --strict.
const liveUnwritten = unwritten.filter((u) => u.srcPublished);
const hiddenUnwritten = unwritten.length - liveUnwritten.length;
const grouped = new Map();
for (const u of liveUnwritten) {
  if (!grouped.has(u.target)) grouped.set(u.target, []);
  grouped.get(u.target).push(u.rel);
}
console.log(`PAGE NEVER WRITTEN — cited from published pages: ${liveUnwritten.length} link(s) → ${grouped.size} missing page(s)`);
if (grouped.size && !QUIET) {
  for (const [t, srcs] of [...grouped].sort((a, b) => b[1].length - a[1].length)) {
    console.log(`    ${String(srcs.length).padStart(2)}x  ${t}`);
  }
}
console.log(`PAGE NEVER WRITTEN — cited only from unpublished pages: ${hiddenUnwritten} link(s)  (cosmetic)\n`);

const hard = brokenLive.length + intoHidden.length + ambiguous.length;
if (hard) {
  console.error(`FAIL — ${hard} link(s) broken for a reader on the published site. See above.`);
  process.exit(1);
}
if (STRICT && liveUnwritten.length) {
  console.error(`FAIL (--strict) — ${liveUnwritten.length} link(s) to pages that don't exist.`);
  process.exit(1);
}
const notes = [];
if (liveUnwritten.length) notes.push(`${grouped.size} page(s) still to write`);
if (obsidianOnly.length) notes.push(`${obsidianOnly.length} editor-only advisory`);
console.log(
  notes.length
    ? `Link check: no reader-facing breakage. Outstanding: ${notes.join(", ")}.`
    : "Link check: clean — every link resolves in both Obsidian and the published site."
);
