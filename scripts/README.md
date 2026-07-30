# scripts/

Maintenance tooling for GDOH. Instructor / maintainer use — students never need to run these.

## generate-corpus-index.mjs

Regenerates `agent/corpus-index.md` — GDOH's single source of truth for **where each corpus page lives** and **which tutorial number maps to which file**. GDOH reads that index to locate content instead of globbing the filesystem.

**Run it** (zero dependencies, needs Node) from the repo root:

```
node scripts/generate-corpus-index.mjs
```

**When to run it:** after you **add, move, rename, or renumber** anything under `corpus/`. Then commit the regenerated `agent/corpus-index.md` alongside your change.

**What it does:**
- Walks `corpus/` and writes a table of contents (page title · path · one-line description), grouped by section.
- Builds the **canonical tutorial registry** from tutorial filenames (e.g. `UE Tutorial 101 - ….md` → `101`). Filenames are the authority.
- **Drift check:** scans the curated indexes (`ue-capability-map.md`, `ue-feature-catalog.md`, `examples/`) for tutorial numbers that don't exist in the registry — e.g. a stale "Tutorial 1" left behind after a renumber. If it finds any, it prints warnings and **exits non-zero** (so a git hook or CI can block the commit). Fix the flagged citations, then re-run.

Output is plain markdown by design — GDOH's legibility constraint (no embeddings, no opaque index a student can't read).

## Corpus authoring conventions

Two rules keep the corpus tidy. Both are cheap to follow at write time and annoying to fix in bulk later.

**1. Regenerate the index after any corpus change.** See above.

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

Why bother: it's the one hard requirement of the [Open Knowledge Format](https://github.com/GoogleCloudPlatform/knowledge-catalog/blob/main/okf/SPEC.md), the plain-markdown knowledge-bundle convention GDOH is already shaped like. Nothing in GDOH reads `type:` today — it's there so the corpus stays interoperable and so a future lookup can route on it. Tagged in bulk across 348 files on 2026-06-28; keeping up is a per-file habit, not a project.
