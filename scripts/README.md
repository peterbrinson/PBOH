# scripts/

Maintenance tooling for The GET. Instructor / maintainer use — students never need to run these.

## generate-corpus-index.mjs

Regenerates `agent/corpus-index.md` — the GET's single source of truth for **where each corpus page lives** and **which tutorial number maps to which file**. The GET reads that index to locate content instead of globbing the filesystem.

**Run it** (zero dependencies, needs Node) from the repo root:

```
node scripts/generate-corpus-index.mjs
```

**When to run it:** after you **add, move, rename, or renumber** anything under `corpus/`. Then commit the regenerated `agent/corpus-index.md` alongside your change.

**What it does:**
- Walks `corpus/` and writes a table of contents (page title · path · one-line description), grouped by section.
- Builds the **canonical tutorial registry** from tutorial filenames (e.g. `UE Tutorial 101 - ….md` → `101`). Filenames are the authority.
- **Drift check:** scans the curated indexes (`ue-capability-map.md`, `ue-feature-catalog.md`, `examples/`) for tutorial numbers that don't exist in the registry — e.g. a stale "Tutorial 1" left behind after a renumber. If it finds any, it prints warnings and **exits non-zero** (so a git hook or CI can block the commit). Fix the flagged citations, then re-run.

Output is plain markdown by design — the GET's legibility constraint (no embeddings, no opaque index a student can't read).
