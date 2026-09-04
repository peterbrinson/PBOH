---
type: Guide
publish: false
---

# About PBOH

This folder is your AI guide for designing playable stories and worlds in Unreal Engine. You set it up with the 1000-series tutorials — install an AI tool (Antigravity, Claude Code, Codex, Gemini, or DeepSeek), download the folder, and start your first session. Each quick start ends with that first session and a saved Prototype Plan; **Tutorial 1101** picks up from there. This page orients you to what you just downloaded.

## What's in this folder

| Folder / file | What it is |
|---|---|
| `corpus/index.md` | The published site's front door — what PBOH is, what a first session is like, and the quick start for each AI tool. |
| `corpus/For Contributors/` | You're reading from here. Repo-only notes (kept off the website): this orientation and `contributing-to-pboh.md` (how to send your work back to the instructor). |
| `corpus/Design/` | One corpus pillar: `Storytelling/` (the four player roles — **Investigator, Traveler, Entrant, Dreamer**), `Worldbuilding/` (the Bounded Worlds framework), and `_References/` (game and film examples the AI may cite). |
| `corpus/Development/` | The other pillar: `Tutorials - LLM/` (the 1000-series setup tutorials), `Tutorials - Unreal/` (numbered Unreal tutorials — 101, 102, 103, 104, 201, 202, 301, 302, 401, 501, 701, 702, 801, 821, 901), `Wiki - Unreal/` (quick-reference Blueprint pages). |
| `agent/` | The AI's operating files — `how-the-tutor-works.md`, the `map-project-skill.md` skill, the `ue-capability-map.md` lookup. The AI reads these; you usually don't need to. |
| `gaps/` | Your per-student gap log. When the AI hits an Unreal topic the wiki doesn't cover, it logs the gap in your file here. You push that to your fork; the instructor harvests it. See `contributing-to-pboh.md` for the workflow. |
| `student-notes-private/` | **Your personal working folder.** PBOH saves your Prototype Plans, notes, references you collect, and a "where we left off" summary here. Local-only — never pushed anywhere. See the README inside. |

You can ignore most of this until you need it. The AI will route you to specific files when relevant.

It's worth knowing why it's shaped this way: the whole folder is plain markdown — one idea per file, organized in folders, linked together. That's a deliberate, standard form (Google's [Open Knowledge Format](https://github.com/GoogleCloudPlatform/knowledge-catalog/blob/main/okf/SPEC.md) names exactly this pattern) for material both a person and an AI can read. It's why setup is just "download a folder and open it."

## Three things to know

- **Blueprint-only.** This course uses Unreal's visual scripting — no C++. PBOH won't suggest C++ even if asked.
- **The AI checks the wiki first.** If it doesn't find what you need there, it'll say so and answer from its training. That's fine — those gaps get logged for your instructor to fill in over time.
- **Push back on the AI.** If it's off-track, vague, or wrong, say so. It'll adjust. PBOH is meant to be a collaborator, not an oracle.

## Questions worth saving for your professor

Some questions the AI shouldn't decide alone — design intent, meaning, scope ambitions, sensitive subject matter, technical paths where your professor has hands-on experience. When the AI says **"worth bringing this up with your instructor,"** it means it literally. Save the question, bring it.

---

Good luck, and have fun. The course is meant to be played in.
