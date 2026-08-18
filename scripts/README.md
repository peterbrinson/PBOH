# scripts/

Maintenance tooling for PBOH. Instructor / maintainer use — students never need to run these.

## generate-corpus-index.mjs

Regenerates `agent/corpus-index.md` — PBOH's single source of truth for **where each corpus page lives** and **which tutorial number maps to which file**. PBOH reads that index to locate content instead of globbing the filesystem.

**Run it** (zero dependencies, needs Node) from the repo root:

```
node scripts/generate-corpus-index.mjs
```

**When to run it:** after you **add, move, rename, or renumber** anything under `corpus/`. Then commit the regenerated `agent/corpus-index.md` alongside your change.

**What it does:**
- Walks `corpus/` and writes a table of contents (page title · path · one-line description), grouped by section.
- Builds the **canonical tutorial registry** from tutorial filenames (e.g. `UE Tutorial 101 - ….md` → `101`). Filenames are the authority.
- **Drift check:** scans the curated indexes (`ue-capability-map.md`, `ue-feature-catalog.md`, `examples/`) for tutorial numbers that don't exist in the registry — e.g. a stale "Tutorial 1" left behind after a renumber. If it finds any, it prints warnings and **exits non-zero** (so a git hook or CI can block the commit). Fix the flagged citations, then re-run.

Output is plain markdown by design — PBOH's legibility constraint (no embeddings, no opaque index a student can't read).

## check-links.mjs

Checks every wikilink in `corpus/` against **what the Quartz build actually emits** — not just against the filesystem.

**Run it** (zero dependencies, needs Node) from the repo root:

```
node scripts/check-links.mjs
```

`--quiet` prints counts only. `--strict` also fails on links to pages that don't exist yet.

**When to run it:** after any corpus edit that adds, moves, renames, or hides a page — same trigger as the index generator. Also worth running before a push, since the failures it catches are invisible everywhere else.

**Why it exists.** Obsidian and Quartz resolve links differently, so a link can be valid in one and a 404 in the other, with nothing anywhere to warn you:

- **Obsidian's root is the vault**, so a path-style wikilink needs a `PBOH/corpus/` prefix. **Quartz's root *is* `corpus/`**, so that same prefix 404s on the site. Quartz does **not** flag this — it accepts the slug and emits a normal-looking anchor. Invisible in the editor, in the build log, and on the rendered page. Eight of these were live on 2026-08-10, three of them on the `Design/` hub.
- **A link into a `publish: false` page** resolves fine in Obsidian and 404s live. Worse, it breaks *later* — whenever a page gets hidden — with nothing to say what pointed at it.

**What it reports:**

| Category | Fails the run? |
| --- | --- |
| Vault-absolute link (`PBOH/corpus/…`) | yes |
| Link into an unpublished page | yes |
| Ambiguous basename (several candidates) | yes |
| Resolves on the site, dead in Obsidian | no — advisory |
| Page never written, cited from a published page | only with `--strict` |
| Page never written, cited from a hidden page | no — cosmetic |

Links to unwritten pages are a **content backlog**, not a defect, so they don't fail by default — otherwise the check would be red permanently and stop meaning anything.

**It reads `ignorePatterns` out of `site/quartz.config.ts`** rather than keeping its own copy, so the check can't drift from the real build config.

**Gotchas it already handles** (each one produced false positives while it was being written — don't "simplify" them away): frontmatter `aliases:` in both list and inline form (Quartz runs `AliasRedirects`), a UTF-8 BOM ahead of the frontmatter fence, `\|` escaped alias pipes inside markdown tables, folder links resolving to that folder's `index.md`, and image embeds whose extension isn't `.md`.

## Corpus authoring conventions

Two rules keep the corpus tidy. Both are cheap to follow at write time and annoying to fix in bulk later.

**1. Regenerate the index and check links after any corpus change.** See above — `generate-corpus-index.mjs` then `check-links.mjs`.

**Link form:** when linking to a page in another folder, use its frontmatter **alias**, not a path. `[[Bounded Worlds]]` resolves in both Obsidian and Quartz; `[[PBOH/corpus/Design/Worldbuilding/index]]` and `[[Design/Worldbuilding/index]]` each work in exactly one of them. Give any page that gets linked from elsewhere a short unique alias.

**2. Every new corpus page carries a `type:` in its frontmatter.** The vocabulary is fixed at seven labels, decided by which folder the page lives in:

| Folder | `type:` |
| --- | --- |
| `Development/Wiki - Unreal/` | `WikiPage` |
| `Design/_References/` | `Reference` |
| `Development/Tutorials - Unreal/` and `Tutorials - LLM/` | `Tutorial` |
| `Design/Worldbuilding/` | `Worldbuilding` |
| `Design/Storytelling/` (the player-role pages) | `PlayerRole` |
| `CTIN 389/` | `Lecture` |
| `Get Started/` | `Guide` |

**Not** tagged, deliberately: `index.md` and `log.md` (reserved names), and agent files (`CLAUDE.md` / `GEMINI.md`) — they aren't concept pages.

Why bother: it's the one hard requirement of the [Open Knowledge Format](https://github.com/GoogleCloudPlatform/knowledge-catalog/blob/main/okf/SPEC.md), the plain-markdown knowledge-bundle convention PBOH is already shaped like. Nothing in PBOH reads `type:` today — it's there so the corpus stays interoperable and so a future lookup can route on it. Tagged in bulk across 348 files on 2026-06-28; keeping up is a per-file habit, not a project.
