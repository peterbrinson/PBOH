---
publish: false
---

# UE Wiki — Maintenance Rules

## Resuming a session

Read these three files in order — stop after step 1 if the user gives a specific task:

1. **This file** (CLAUDE.md) — rules and format. You're reading it now.
2. **log.md, last entry only** — what was done last and the running page count.
3. **+ UE Wiki Index.md** — current table of contents (scan for stub categories to know what's next).

The tutorial spine defines ingest order: Tutorial 3's concepts are next. Each tutorial's Blueprint nodes and UE concepts become wiki pages. Stub wikilinks on existing pages define secondary ingest targets.

---

## Purpose

A navigable, student-readable Unreal Engine knowledge base in Obsidian. Not a tutorial sequence — a reference that supports students after they've completed the 12 hand-built tutorials and are working independently.

## Folder Structure

```
Unreal Wiki/
  + UE Wiki Index.md                         ← wiki table of contents (published)
  Timeline.md, Components.md, etc.   ← wiki pages at root (student-facing)
  attachments/                        ← images for wiki pages
  _meta/                              ← meta files (not published)
    CLAUDE.md
    log.md
    a_ai-learn-plan.md
    a_ai-learn-vision.md
  raw/                                ← source material (not published)
    *.md (clipped docs)
```

Published path for students: `Unreal Wiki/Timeline.md` (no extra nesting)

## Page Format

Every wiki page at the root must follow this structure:

```markdown
# Concept Name

One-paragraph summary. What this is, in plain language.

## Use When
Bullet list: the situations where a student would reach for this concept.

## How It Works
The essential mechanics. Not a tutorial — just what the student needs to understand the concept.
For nodes: list Key Pins/Properties with types and purpose.

## Common Patterns
Short examples of how this appears in practice (code snippets or Blueprint logic described in text).

## Related
Wikilinks to adjacent concepts: [[Concept A]], [[Concept B]]

## Source
- [Page title](URL) — docs.unrealengine.com, retrieved YYYY-MM-DD
```

## Rules

**One page per concept.** A `[[Timeline]]` page, not an "Animation" page. Narrow is navigable.

**Wikilink aggressively.** Any named Blueprint node, UE concept, or subsystem that has or should have its own page gets a `[[wikilink]]`. If the target page doesn't exist yet, the link is still correct — it becomes a stub target.

**Link to tutorials.** When a Common Patterns entry references a tutorial, use a wikilink with display text: `[[UE Tutorial 1 - A Floor Plate Opens A Door|Tutorial 1]]`. This creates backlinks on the tutorial pages showing which wiki concepts reference them.

**Reference, not tutorial.** No step-by-step instructions. No "first, then, finally." Explain what something is and when to use it. The tutorials handle sequence.

**UE5 default.** Assume UE5. Mark anything version-specific with `(UE5.x)` or `(UE4 only)`.

**Blueprints, not C++.** Always choose Blueprint content over C++. UE docs pages often have a Programming Language toggle — always select Blueprint. Wiki pages should describe Blueprint node behavior, not C++ API calls. If a concept only exists in C++, note that clearly.

**Update, don't duplicate.** If a concept appears in a new source with additional info, update the existing page. Only create a new page for a concept not yet covered.

**Source integrity.** Always record the source URL and retrieval date in the page footer. Never invent details not present in the source.

**Tone.** Concise, direct, technical but readable. A skilled student reading at midnight before a deadline. No filler, no enthusiasm, no opinions.

**Images use wikilink embeds.** Embed images as `![[filename.png]]`. Store image files in `Unreal Wiki/attachments/`. Images must be published alongside wiki pages to avoid grey dots on the Publish graph.

## Operations

### Ingest
Process a new source: read it, write or update wiki pages, update `+ UE Wiki Index.md`, log the entry. This is the primary operation.

### Query
Search relevant wiki pages to answer a question. Synthesize an answer with citations to wiki pages. If the answer produces something valuable and reusable, optionally file it back into the wiki as a new page.

### Lint
Periodic health check (~every 15-20 new pages). Check for:
- Contradictions between pages
- Stale claims (UE version changes, deprecated nodes)
- Orphan pages (no inbound wikilinks)
- Missing cross-references (pages that should link to each other but don't)
- Data gaps (stub links that have been waiting too long)

## Index and Log Maintenance

After each ingest session, update `+ UE Wiki Index.md` with any new pages added. Group by category (Blueprint Nodes, Events, UI, Rendering, etc.).

Update `log.md` with each operation using the parseable prefix format: `## [YYYY-MM-DD] operation | Subject`. Operations: `ingest`, `update`, `lint`, `query`, `meta`.

## What This Wiki Is Not

- Not a changelog or version history
- Not a tutorial (the 12 tutorials do that job)
- Not an opinion about best practices
- Not a replacement for the official docs — it's a compiled, navigable layer on top of them

