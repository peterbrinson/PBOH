#!/usr/bin/env node
// Generates agent/corpus-index.md — PBOH's single source of truth for
// WHERE each corpus page lives and WHICH tutorial number maps to which file.
//
// Zero dependencies (Node built-ins only). Run from anywhere:
//   node scripts/generate-corpus-index.mjs
//
// Exits non-zero if the drift check finds a curated index citing a tutorial
// number that doesn't exist in the registry (e.g. a stale "Tutorial 1").

import { readFileSync, writeFileSync, readdirSync, statSync } from "node:fs";
import { join, relative, dirname, basename, sep } from "node:path";
import { fileURLToPath } from "node:url";

const SCRIPT_DIR = dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = join(SCRIPT_DIR, "..");
const CORPUS = join(REPO_ROOT, "corpus");
const AGENT = join(REPO_ROOT, "agent");
const OUT = join(AGENT, "corpus-index.md");

const SKIP_DIRS = new Set(["raw", "attachments"]);
const SKIP_FILES = new Set(["CLAUDE.md", "GEMINI.md", "AGENTS.md", "DEEPSEEK.md"]);

// ---- walk a directory tree for .md files ----
function walk(dir) {
  const out = [];
  let entries;
  try { entries = readdirSync(dir); } catch { return out; }
  for (const name of entries) {
    const full = join(dir, name);
    if (statSync(full).isDirectory()) {
      if (!SKIP_DIRS.has(name)) out.push(...walk(full));
    } else if (name.endsWith(".md") && !SKIP_FILES.has(name)) {
      out.push(full);
    }
  }
  return out;
}

// ---- tiny frontmatter parser (key: value lines only) ----
function parseFrontmatter(text) {
  const fm = {};
  let body = text;
  if (text.startsWith("---")) {
    const end = text.indexOf("\n---", 3);
    if (end !== -1) {
      body = text.slice(end + 4);
      for (const line of text.slice(3, end).split("\n")) {
        const m = line.match(/^([A-Za-z][\w-]*):\s*(.*)$/);
        if (m) fm[m[1].toLowerCase()] = m[2].trim().replace(/^["']|["']$/g, "");
      }
    }
  }
  return { fm, body };
}

const stripMd = (s) =>
  s.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1").replace(/\*\*|\*|`|\[\[|\]\]|__|#/g, "").trim();

function clip(s, n = 140) {
  s = s.replace(/\s+/g, " ").trim();
  return s.length <= n ? s : s.slice(0, n - 1).replace(/\s+\S*$/, "") + "…";
}

function describe(fm, body) {
  if (fm.description) return clip(fm.description);
  if (fm.summary) return clip(fm.summary);
  const outcome = body.match(/\*\*Outcome\.\*\*\s*([^\n]+)/); // tutorials
  if (outcome) return clip(stripMd(outcome[1]));
  for (const raw of body.split("\n")) {
    const line = raw.trim();
    if (!line || /^[#>|<]|^---|^!\[|^\*?\s*$/.test(line)) continue;
    return clip(stripMd(line));
  }
  return "";
}

const titleOf = (fm, file) => fm.title || basename(file, ".md");

// ---- collect corpus pages ----
const pages = walk(CORPUS).sort().map((f) => {
  const { fm, body } = parseFrontmatter(readFileSync(f, "utf8"));
  return {
    path: relative(REPO_ROOT, f).split(sep).join("/"),
    rel: relative(CORPUS, f).split(sep).join("/"),
    title: titleOf(fm, f),
    publish: fm.publish,
    desc: describe(fm, body),
  };
});

// ---- tutorial registry (filenames are the authority) ----
const registry = [];
for (const p of pages) {
  if (!/^Development\/Tutorials - (Unreal|LLM)\//.test(p.rel)) continue;
  const m = basename(p.path).match(/\bTutorial\s+(\d+)\s*-\s*(.+)\.md$/);
  if (m) registry.push({ num: +m[1], title: m[2].trim(), path: p.path });
}
registry.sort((a, b) => a.num - b.num);
const validNums = new Set(registry.map((r) => r.num));

// ---- drift check: do curated indexes cite numbers not in the registry? ----
const curated = [
  join(AGENT, "ue-capability-map.md"),
  join(AGENT, "ue-feature-catalog.md"),
  ...walk(join(AGENT, "examples")),
];
const warnings = [];
for (const file of curated) {
  let text;
  try { text = readFileSync(file, "utf8"); } catch { continue; }
  const relFile = relative(REPO_ROOT, file).split(sep).join("/");
  const isCapMap = file.endsWith("ue-capability-map.md");
  const isExample = relFile.includes("/examples/");
  text.split("\n").forEach((line, i) => {
    const cites = new Set();
    for (const m of line.matchAll(/\bTutorials?\s+(\d+)/g)) cites.add(+m[1]);
    for (const m of line.matchAll(/\bTut\s+(\d+)/g)) cites.add(+m[1]);
    // capability-map tables: the Tutorial(s) / index columns are digit-only cells
    if (isCapMap && line.startsWith("|")) {
      for (const cell of line.split("|")) {
        const c = cell.trim();
        if (/^\d+(\s*,\s*\d+)*$/.test(c)) c.split(/\s*,\s*/).forEach((n) => cites.add(+n));
      }
    }
    // worked-example coverage: tags are bare tutorial numbers
    if (isExample && /^coverage:/i.test(line.trim())) {
      for (const m of line.matchAll(/\b(\d{1,4})\b/g)) cites.add(+m[1]);
    }
    for (const n of cites) {
      if (!validNums.has(n)) warnings.push(`${relFile}:${i + 1}  cites Tutorial ${n} (not in registry)`);
    }
  });
}

// ---- emit corpus-index.md ----
const groups = new Map();
for (const p of pages) {
  const top = p.rel.split("/")[0];
  (groups.get(top) || groups.set(top, []).get(top)).push(p);
}
const ORDER = ["GET Started", "Design", "Development"];
const rank = (s) => (ORDER.indexOf(s) === -1 ? 99 : ORDER.indexOf(s));
const tops = [...groups.keys()].sort((a, b) => rank(a) - rank(b) || a.localeCompare(b));

let md = "---\npublish: false\n---\n\n# Corpus Index\n\n";
md += "*Auto-generated by `scripts/generate-corpus-index.mjs` — do not edit by hand. " +
  "Regenerate after adding, moving, or renumbering corpus content: `node scripts/generate-corpus-index.mjs`.*\n\n";
md += "PBOH's single source of truth for **where each corpus page lives** and **which tutorial number maps to which file**. " +
  "To locate a page, look it up here — don't guess paths or glob the filesystem.\n\n";

md += "## Section A — Corpus map\n\n";
for (const top of tops) {
  md += `### ${top}\n\n`;
  for (const p of groups.get(top).sort((a, b) => a.rel.localeCompare(b.rel, undefined, { numeric: true }))) {
    const tag = p.publish === "false" ? " *(unpublished)*" : "";
    md += `- **${p.title}**${tag} \`${p.path}\`${p.desc ? ` — ${p.desc}` : ""}\n`;
  }
  md += "\n";
}

md += "## Section B — Tutorial registry (canonical)\n\n";
md += "*Number → file, parsed straight from tutorial filenames. Curated indexes (capability map, examples) must agree with this.*\n\n";
md += "| Number | Title | Path |\n| --- | --- | --- |\n";
for (const r of registry) md += `| ${r.num} | ${r.title} | \`${r.path}\` |\n`;
md += "\n";

writeFileSync(OUT, md, "utf8");

// ---- report ----
console.log(`Wrote ${relative(REPO_ROOT, OUT).split(sep).join("/")} — ${pages.length} pages, ${registry.length} tutorials.`);
if (warnings.length) {
  console.error(`\nDRIFT CHECK — ${warnings.length} suspect tutorial citation(s):`);
  for (const w of warnings) console.error("  ! " + w);
  console.error("\nFix these so curated indexes match the tutorial registry, then re-run.");
  process.exit(1);
}
console.log("Drift check: clean — all tutorial citations match the registry.");
