---
publish: false
---

# CLAUDE.md — Unreal Tutorials

Numbered, hand-built UE tutorials students follow step by step. The published human-facing index is `index.md` (the folder landing page; formerly `UE Tutorials - Table of Contents.md`) — use it rather than this file when you need the list of tutorials.

## Structure

Eight numbered series, each in its own subfolder:

- **100s** — Discovery and Encounter (triggers, doors, scoring, UI) · Tut 101–104
- **200s** — The Player Character (pawn possession, MetaHuman) · Tut 201–202
- **300s** — Environment Systems (landscapes, water) · Tut 301–302
- **400s** — Materials · Tut 401
- **700s** — Tone and Atmosphere (post-processing, Niagara) · Tut 701–702
- **800s** — Interactive Systems (inspect, base interactive) · Tut 801, 821
- **900s** — Release (OBS recording) · Tut 901

The **1000s** (LLM setup / PBOH onboarding) are *not* in this folder — they live in the sibling `Tutorials - LLM/`, teach no gameplay features, and never belong in a build order. See that folder's `CLAUDE.md`.

Top-level reference pages: `UE Editor Navigation.md`, `Unreal Engine.md`. Images live in `attachments/`.

## Per-tutorial conventions

Every tutorial page ends with two sections used by the project-mapping skill:

- **`## What you can now build`** — plain-language list of project features unlocked by this tutorial. Feeds `agent/ue-capability-map.md`.
- **`## Example deviations you are ready for`** — concrete variations on the tutorial's pattern; expands what counts as "covered" beyond exact capability-map matches.

For drafting new tutorials see `PBOH-dev/agent/tutorial-drafting.md`.

## Where this fits

The tutorial spine is layer 1 of PBOH's three layers (tutorials, wiki, SPRs). See `PBOH-dev/team/pboh-overview.md`.
