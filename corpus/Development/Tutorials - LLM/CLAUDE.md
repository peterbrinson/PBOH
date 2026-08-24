---
publish: false
---

# CLAUDE.md — LLM Tutorials (the 1000 block)

Setup tutorials: how a student gets an AI tool running and has their first PBOH conversation. These teach **no gameplay features** and must never appear in a build order — if you're tempted to cite one for a game mechanic, that's a wander and the feature is off-map. The published human-facing list is `index.md`; use that when you need the reading order.

**One deliberate exception: 1020 — Codex Access and Obsidian Setup.** A prerequisite page for the Codex decade (1021, 1025), and the only page in this block that is a **classroom workshop** rather than a quick start. It has no PBOH session and produces no Prototype Plan. It covers requesting Codex access through USC IT (grants take time, so it must happen before a student sits down to use Codex), installing Obsidian, and then a guided exercise: unpack `attachments/PHO-game-project.zip` — a fictional two-person team's deliberately chaotic project folder — and use Codex to reorganize it into a working vault. What it actually teaches is persistent workspaces and context engineering, not any game feature.

Its title undersells the content; the filename is kept stable because it's a published URL. The ZIP is generated content, not authored — regenerate it from `teach/389/Workshop Files/PHO-game-project` if the workshop source changes. Don't generalize this page's shape to a new tool.

## The organizing principle — quick-start-first

**Every path is a single self-contained quick start.** One page takes a student from nothing installed to a first PBOH conversation and a saved Prototype Plan. No prerequisite chain, no terminal assumed, no GitHub account required.

This replaced (2026-07-19) an earlier shape: **per-tool four-step sequences** — install for the terminal → set up desktop → set up in VSCode → set up PBOH — one tool spread across four pages. Those are retired.

**Why the change, because it's not obvious from the files alone.** The quick starts were written under classroom pressure for the Tokyo and China cohorts, where the four-step path plainly wasn't going to survive contact with a room full of art students. They worked. Then English versions were written too — and *that* was the tell: the shape reached for when it has to actually work in a classroom is the right default for everyone, not a fallback for non-English cohorts. The four-step sequences assumed a terminal and a GitHub account before a student had seen the tutor do anything at all, which put the hardest, least rewarding part first.

**So, for anything added here:** a new tool gets **one page that stands alone**. Resist splitting setup across pages even when it feels long — length is cheaper than a dependency chain. Optional machinery (forking, updating) comes *after* the tool already works, never before.

## Numbering

Each tool owns a decade, and the last digit says which kind of path it is:

| | Recommended path (`…5`) | Terminal alternative (`…1`) |
| --- | --- | --- |
| **Gemini** | 1005 Antigravity | 1001 Gemini Terminal |
| **Claude Code** | 1015 Desktop | 1011 Terminal |
| **Codex** | 1025 Desktop | 1021 Terminal |
| **DeepSeek** | 1035 DeepSeek | — |

`…5` is the path the index recommends; `…1` is the terminal alternative where one exists. DeepSeek has only 1035 because Deep Code is terminal-only — there's no GUI to prefer, so it takes the recommended slot rather than inventing a 1031.

Outside the per-tool decades:

- **1090 — Fork and Update PBOH.** Optional GitHub setup, deliberately numbered high so it reads as *after*, not *before*.
- **1101 — Keep Using PBOH.** What to do once the first session has happened.

**Translations keep the source number** and carry the language in parentheses plus `language:` / `translation_of:` frontmatter — e.g. `Tutorial 1005 (Japanese)`, `Tutorial 1035 (Chinese)`. Two files sharing a number is correct *only* for translations. Two different tutorials sharing a number is the bug this renumbering fixed; the corpus index registry can't carry it.

## Housekeeping

- New pages carry `type: Tutorial` and `cssclasses: unreal-tutorial`. See `PBOH/scripts/README.md` for the corpus-wide conventions.
- Regenerate `agent/corpus-index.md` after adding, renaming, or renumbering anything here.
- The quick starts that don't imply their own runtime (1005, 1035) ask the student to **note which tool they used** near the top of the saved file — so a cohort's deliverables are self-labelling.

For drafting *Unreal* tutorials (a different voice and shape entirely) see `PBOH-dev/agent/tutorial-drafting.md`.
