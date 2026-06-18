---
cssclasses: unreal-tutorial
publish: true
---




## 0. Introduction

**Outcome.** By the end of this tutorial, you've held your first real GET conversation — described an idea, gotten back a project plan for your narrative or worldbuilding project which might include role identification, features, and a build order.

**Before you start.** Read the **Situated Player Roles** (The Investigator, The Traveler, The Dreamer) and the **Small Worlds** pages first. The GET opens by asking which one you're working in, so you'll want to arrive already knowing them.

**Prerequisites.**
- For Gemini -- [[Tutorial 1004 - Set Up The GET for Gemini]]. Gemini is installed, authenticated, and pointed at The GET.
- For Claude Code -- *forthcoming*
- For Codex -- *forthcoming*

---

## 1. Start Your Session

#### *Already have your CLI running with the GET greeting? Skip to Section 2.*

Do this every time you come back to the GET — first time, after a break, or after you've closed your terminal. The same four steps every time:

1. **Open your terminal.**
   - Windows: Windows Key → type `PowerShell` → Enter
   - macOS: Cmd + Space → type `Terminal` → Enter
2. **Navigate to The GET folder.** Type `cd ` (with a trailing space), drag the folder into the terminal, then press Enter. You'll see the absolute folder path filled in.
3. **Run** your CLI.  Type one of these:
	- gemini
	- claude
	- codex
4. **At the prompt, type:** `Start a GET session.`

The GET will greet you and ask which role you're working in — The Investigator, The Traveler, or The Dreamer (or instead, Small Worlds).

---

## 2. Try Your Idea

Tell the GET about an idea you have. Something concrete is best — describe the **experience**, not the mechanics. For example:

> I have an idea for a small game. The player wakes up in an abandoned library at night. There are clues scattered across the desks — a torn diary, a strange map, a photo. The player has to piece together what happened to the librarian.

That's an **Investigator** idea — a world read as evidence. Pick the role that best fits whatever you bring; the example above happens to be one of the three.

You don't need a finished concept. A situation you can picture is enough to plan outward from.




---

## What you can now do

- **Plan a project with The GET** — describe an idea, get it broken into features, mapped against the tutorials, and sequenced into a build order
- **Get tutorial help** — ask The GET to walk you through a tutorial step, diagnose a stuck Blueprint, or explain a concept you've hit
- **Ask concept questions** — what is a Material, how does a Blueprint Interface work, why does this lerp look wrong?

## Example deviations you are ready for

- Ask the GET to **save your plan to a file** in the GET folder (e.g., `project-plan-mygame.md`) — useful when you're exploring multiple ideas in parallel
- Ask for a **reference to look at** from the bundle's `References/` folder (*Gone Home*, *What Remains of Edith Finch*, etc.) when an idea reminds you of something you can't quite name
- Open the same GET folder in another LLM front-end (e.g., Deepseek) — the same workflow applies because The GET's content lives in the folder, not in the agent
