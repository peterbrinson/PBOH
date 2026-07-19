---
type: Tutorial
cssclasses: unreal-tutorial
publish: true
---




## 0. Introduction

**Outcome.** By the end of this tutorial, you've held your first real GET conversation — described an idea, gotten back a Prototype Map for your narrative or worldbuilding project which might include role identification, features, and a build order.

**Before you start.** Read at least one of the [Situated Player Roles](https://vlabusc.github.io/The-GET/Design/Storytelling/) (The Investigator, The Traveler, The Dreamer) or the [Bounded Worlds](https://vlabusc.github.io/The-GET/Design/Worldbuilding/) framework first. The GET will ask which one you're working in, so you'll want to arrive already knowing at least one of them.

**Prerequisites.** (one is needed)
- For Gemini -- [[Tutorial 1004 - Set Up The GET for Gemini]]
- For Claude Code -- [[Tutorial 1014 - Set Up The GET for Claude Code]]
- For Codex -- [[Tutorial 1024 - Set Up The GET for Codex]]
- For Deepseek -- [[Tutorial 1034 - Set Up The GET for DeepSeek]]

---

## 1. Start Your Session

#### Already have your CLI running with the GET greeting? Skip to Section 2.*

Do this every time you've closed The GET in the terminal:

1. **Open your terminal.**
   - Windows: Windows Key → type `PowerShell` → Enter
   - macOS: Cmd + Space → type `Terminal` → Enter
2. **Navigate to The GET folder.** Type `cd ` (with a trailing space), drag the folder into the terminal, then press Enter. You'll see the absolute folder path filled in.
3. **Run** your CLI.  Type one of these:
	- gemini
	- claude
	- codex
	- deepcode
4. **At the prompt, type:** `Start a GET session.`

The GET will greet you and ask which role you're working in — The Investigator, The Traveler, or The Dreamer (or instead, Bounded Worlds).

---

## 2. Try Your Idea

Tell the GET about an idea you have. Something concrete is best — describe the **experience**, more than the mechanics. 

You don't need a finished concept. A situation you can picture is enough.  Perhaps 4 to 8 sentences.  There certainly can be unknowns.




---

## What you can now do

- **Plan a project with The GET** — describe an idea, get it broken into features, mapped against the tutorials, and sequenced into a build order
- **Get tutorial help** — ask The GET to walk you through a tutorial step, diagnose a stuck Blueprint, or explain a concept you've hit
- **Ask concept questions** — what is a Material, how does a Blueprint Interface work, why does this lerp look wrong?

## Example deviations you are ready for

- Ask the GET to **save your Prototype Map to a file** in the GET folder (e.g., `prototype-map-mygame.md`) — useful when you're exploring multiple ideas in parallel
- Ask for a **reference to look at** from the bundle's `References/` folder (*Gone Home*, *What Remains of Edith Finch*, etc.) when an idea reminds you of something you can't quite name
- Open the same GET folder in another LLM front-end — the same workflow applies because The GET's content lives in the folder, not in the agent
