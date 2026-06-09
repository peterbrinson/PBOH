---
publish: false
---

# AI Learning Plan

Goal: learn contemporary AI approaches well enough to teach them. Each step builds toward understanding the full stack, not just using tools.

## Phase 1 — Experience RAG (done)

Installed **Smart Connections** plugin. Asked it questions. Observed:
- Similarity scores (~0.77 for strong matches — cosine similarity, not a percentage)
- Same file appearing multiple times = different chunks matched
- Vault too small for surprising results, but saw the retrieval step clearly

Takeaway: understood the end-user experience of semantic search. The retrieval step is the middle layer that's normally invisible.

## Phase 2 — LLM Wiki: Unreal Engine Knowledge Base (current direction)

**Pivot from RAG.** Inspired by [Karpathy's LLM Wiki pattern](https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f) (April 2026): instead of embedding documents into vectors, have the LLM **read source material and write a structured wiki** — markdown files with summaries, concept pages, and wikilinks. The knowledge gets compiled once, not retrieved per-query.

This fits better than RAG because:
- We're already in Obsidian with wikilinks — this *is* the pattern
- Output is readable markdown, not a black-box vector database
- Students can browse the wiki directly in Obsidian
- Grows incrementally — ingest one section at a time
- No Sally needed for this phase — Claude Code does the ingestion right here
- The instructor learns by doing: curating sources, directing the LLM, reviewing output

### The Karpathy Structure (adapted for this project)

```
raw/          ← source UE docs, PDFs, forum answers — never modified
wiki/         ← LLM-generated markdown: concept pages, summaries, cross-references
index.md      ← table of contents, updated with each ingest
log.md        ← chronological record of what was ingested and changed
CLAUDE.md     ← rules for how the LLM should maintain the wiki
```

### The Process

1. Feed Claude a section of UE5 docs (or a tutorial page, or a forum answer)
2. Claude reads it, extracts key concepts, writes wiki pages in markdown
3. Claude updates the index, adds wikilinks to related pages
4. Periodically run "lint" passes — check for contradictions, missing links, stale info
5. Over time: a navigable, student-readable Unreal knowledge base

### What to figure out

- Where do the raw UE docs come from? (Scrape docs.unrealengine.com? Obsidian Web Clipper? Manual paste?)
- What scope to start with? (Blueprints fundamentals? The topics covered in the 12 tutorials?)
- How should the wiki pages relate to the existing hand-built tutorials?
- What goes in CLAUDE.md to define quality standards and wiki structure?

### Why not RAG?

RAG re-derives knowledge per query. The wiki **compounds** — each source ingested enriches the whole structure. At the scale we're working (~100–400 articles), an LLM can navigate via its own index and wikilinks without needing vector search. Karpathy's system works at 400K words with no vector DB.

RAG is still worth understanding (Phase 1 covered the concept). And Sally is still available if the wiki grows large enough to need local model inference. But the immediate path is wiki compilation, not retrieval pipelines.

## Phase 3 — RAG on Sally (if needed)

If the wiki grows beyond what Claude Code can navigate via index files (~500+ articles), the RAG approach becomes relevant again — this time as infrastructure *underneath* the wiki, not instead of it.

Sally (3090 Ti, 24GB VRAM) is standing by for:
- Running local models (Llama 3 70B, Code Llama 34B) for heavy ingestion
- Chroma vector DB if retrieval becomes necessary at scale
- Serving as a shared class resource if networked

## Phase 4 — MCP (after wiki is working)

MCP (Model Context Protocol) is about connecting AI to *tools*, not knowledge bases. Different pattern.

Revisit after the wiki is producing value. Possible project: an MCP server that exposes wiki search as a tool Claude can call directly.

## Notes

- These phases aren't a rigid sequence — stop and teach at any point
- The instructor deliberately goes through the novice experience first (Phase 1 → Phase 2) so they can teach from that perspective
- See [[a_ai-learn-vision]] for the full picture of where this connects to the course

## Status

- [x] Phase 1 — Smart Connections (done 2026-04-07, saw retrieval step clearly)
- [ ] Phase 2 — LLM Wiki (next: decide scope, set up folder structure, ingest first section)
- [ ] Phase 3 — RAG on Sally (if wiki outgrows index-based navigation)
- [ ] Phase 4 — MCP deep dive

