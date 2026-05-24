---
publish: false
---

# AI + Game Development: Vision

Where this is all heading and why it matters for the course.

## The Core Idea

The goal is not to train students on current tools. It's to make them **learners** — people who can assess what's available, identify a gap, and build a solution with whatever exists right now. In two years all of this could be different. Employers don't want graduates trained on the present. They want people who do what we're doing right here: finding a solution to the current situation.

Students use AI at every stage of game development while staying the thinker. Not AI making games — students making games with AI as a skilled, queryable, sometimes unreliable assistant they learn to direct.

The Obsidian + Claude Code workflow is the model: human at the center, AI assists, everything visible.

## The Karpathy Shift (April 2026)

Andrej Karpathy published a pattern called **LLM Wiki** — using an LLM to compile raw source material into a structured, interlinked markdown wiki. Not RAG (which retrieves chunks per query), but **compilation** (the LLM reads sources and writes organized knowledge once, enriching the whole structure incrementally).

This is the current direction for the Unreal knowledge base project. See [[a_ai-learn-plan]] for the phased approach.

Why this fits:
- We're already in Obsidian with wikilinks — this is the native format
- The output is readable by students, not locked in a vector database
- It grows incrementally — ingest one UE doc section at a time
- Claude Code does the ingestion directly — no extra infrastructure needed
- The instructor curates and reviews, learning by doing
- Karpathy's system works at 400K words with no vector DB — just index files and wikilinks

Source: [Karpathy's llm-wiki gist](https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f)

## The Current Landscape (2026)

There is no standard workflow for AI-augmented game development yet. The pieces exist but nobody has assembled them:

- **AI + code (C++, Python)** — mature. Copilot, Claude.
- **AI + Blueprints** — weak. Blueprints are visual node graphs; LLMs can't see or edit them. Claude can discuss Blueprint logic in conversation, but the student builds it. This gap is real and may not close soon.
- **AI + content** — mature. Image generation for textures/concepts, dialogue generation, narrative.
- **AI + Unreal docs** — buildable now via LLM Wiki pattern. Claude reads official docs, writes structured wiki pages with wikilinks.
- **MCP connecting AI to Unreal directly** — barely exists. Early experiments only.

## Where Claude's Unreal Knowledge Comes From

This matters. When a student asks Claude an Unreal question:

1. **Training data** — broad but potentially outdated or wrong on specifics. Can hallucinate node names, property paths, menu locations.
2. **The vault tutorials** — Claude reads these directly. Accurate, curated, but limited to the 12 tutorials.
3. **Web search** — Claude can search in real time. Works but results are noisy.
4. **The LLM Wiki** — not built yet. This is the Phase 2 goal. A structured, navigable Unreal knowledge base in the vault that Claude (and students) can read directly.

Students can't tell the difference between a confident correct answer and a confident hallucination. That's the problem the wiki solves: grounding responses in compiled, reviewed documentation rather than training-data guesses.

## The Student Journey

**Weeks 1–10:** Curated path. The 12 hand-built tutorials control the sequence. Students learn Unreal fundamentals through Blueprints. Claude assists via the vault — reads the tutorials, answers questions grounded in known-good material.

**After week 10:** Students are independent. Working on their own projects, hitting problems the tutorials don't cover. They need to go beyond — and that's where the current system breaks down. Claude is guessing from training data. The official docs are vast and hard to navigate.

**The LLM Wiki fills this gap.** A navigable, student-readable Unreal knowledge base in Obsidian. The 12 tutorials are the curated onramp; the wiki is the highway they merge onto. Students can browse it directly or ask Claude questions grounded in it.

## What Students Would Actually Use

| Stage | AI tool | Student's role |
|---|---|---|
| Worldbuilding concepts | Claude + vault | Thinking, writing, iterating |
| Learning Unreal (early) | 12 tutorials + Claude reading them | Following, experimenting |
| Learning Unreal (later) | LLM Wiki over UE docs | Browsing, asking questions, building |
| Blueprint design | Claude as conversation partner | Designing systems, student builds in editor |
| Content creation | Image gen, dialogue gen | Directing, curating, integrating |
| Critique | Vault critique framework + Claude | Leading, AI-informed but human-driven |

## Why Obsidian Is the Right Center

- Everything is visible markdown — no black boxes
- Students see how the knowledge base works (it's just files)
- Wikilinks model how ideas connect (graph view makes this tangible)
- The vault can grow with student contributions
- Claude Code reads and writes it directly — the AI is integrated but transparent
- The Karpathy LLM Wiki pattern is native to this format

## The Business Context

What we're building is structurally similar to what companies sell:

| Company | What they built | Who pays |
|---|---|---|
| **Kapa.ai** | RAG over developer docs, chatbot on your site | Companies pay monthly (~$500–2000/mo) |
| **Glean** | RAG over internal knowledge (Slack, Docs, Jira) | Enterprise subscriptions |
| **Harvey AI** | RAG over legal documents and case law | Law firms per seat |
| **Cursor** | RAG over your codebase + LLM | Developer subscriptions |
| **Internal builds** | Every large company does this over their own docs | Built in-house |

Our version uses the wiki pattern instead of RAG, built for learning instead of profit. But the underlying skill — organizing domain knowledge for LLM consumption — is exactly what companies hire for. A student who understands this can evaluate and build whatever replaces today's approach.

## Hardware — Sally

The 3090 Ti desktop ("Sally," 24GB VRAM) is available for:
- Running local models (Llama 3 70B, Code Llama 34B) if the wiki grows large enough to need local inference
- RAG infrastructure (Chroma vector DB) if the wiki outgrows index-based navigation (~500+ articles)
- Serving as a shared class resource if networked

For the immediate Phase 2 work (LLM Wiki ingestion), Sally isn't needed — Claude Code handles it directly. Sally becomes relevant at scale.

## Open Questions

- Where do the raw UE docs come from? Scrape? Obsidian Web Clipper? Manual paste?
- What scope to start with? Blueprints fundamentals? Topics from the 12 tutorials?
- How should wiki pages relate to the existing hand-built tutorials?
- What goes in the wiki's CLAUDE.md to define quality and structure?
- Could students contribute back — adding their own solutions to the wiki?
- Blueprint gap: is anyone building tooling to serialize Blueprint graphs for LLM consumption?
- Why hasn't someone done this publicly for Unreal yet? Maybe they have, privately.

## References

- [[z_ai-learn-plan|AI Learning Plan]] — the phased learning path
- [Karpathy's llm-wiki gist](https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f) — the pattern we're following
- [VentureBeat coverage](https://venturebeat.com/data/karpathy-shares-llm-knowledge-base-architecture-that-bypasses-rag-with-an) — context on why this bypasses RAG
- [obsidian-wiki framework](https://github.com/Ar9av/obsidian-wiki) — someone already built tooling for this pattern
- [NVIDIA: RAG for Game Development](https://developer.nvidia.com/blog/evolving-ai-powered-game-development-with-retrieval-augmented-generation/) — the article that originally framed the UE docs idea
- [OpenClaw](https://openclaw.ai/) — local AI agent framework, Obsidian integration; revisit later

