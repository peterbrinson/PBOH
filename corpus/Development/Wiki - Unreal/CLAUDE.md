---
publish: false
---

# CLAUDE.md — Unreal Wiki

Curated Blueprint reference. ~58 pages, flat structure (every wiki page sits at the root of this folder). The published human-facing index is `index.md` (the folder landing page; formerly `+ UE Wiki Index.md`) — use it to find pages rather than listing them here.

## Structure

```
Wiki - Unreal/
  index.md                ← published table of contents (was + UE Wiki Index.md)
  <Concept>.md            ← all wiki pages at root (one per concept)
  attachments/            ← images embedded by wiki pages
  _meta/                  ← maintenance files (publish: false)
    CLAUDE.md             ← full maintenance rules: page format, ingest/lint/query ops
    log.md                ← per-operation log
    a_ai-learn-*.md       ← AI-learning notes
  raw/                    ← source clippings (publish: false)
```

## If you're maintaining the wiki

Read `_meta/CLAUDE.md` — it carries the canonical rules (page format, wikilink discipline, Blueprint-not-C++, source integrity, ingest/lint/query operations). Don't duplicate them here.

## If you're answering a student question

The wiki is the first place to look for any UE concept. If it's covered, answer from the page and cite it; if not, log a gap in the student's `gaps/<github-username>.md` per `agent/how-the-tutor-works.md`. Don't web-search UE topics — that bypasses the gap-log flow.

## Where this fits

Layer 2 of PBOH's three layers (tutorials, wiki, SPRs). See `PBOH-dev/team/pboh-overview.md`.
