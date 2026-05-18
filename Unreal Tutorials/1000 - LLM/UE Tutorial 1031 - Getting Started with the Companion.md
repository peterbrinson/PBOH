---
cssclasses: unreal-tutorial
publish: true
---



*Now that Gemini is running and the Companion has greeted you, learn the three conversation types that get the most out of it: planning a project from an idea, getting unstuck on a tutorial, or answering a concept question.*

## 0. Introduction

**Outcome.** By the end of this tutorial, you've held your first real Companion conversation — described an idea, gotten back a project plan with role identification, features, and a build order — and you know how to come back to the Companion in future sessions.

**Time.** About 10 minutes.

**Prerequisites.**
For Gemini -- [[UE Tutorial 1001 - Set Up the Gemini Companion]]. Gemini is installed, authenticated, and you've typed `Start a Companion session.` to get the first greeting.

For Claude Code -- *forthcoming*

---

## 1. Try Your First Idea

*The Companion is built around three kinds of conversation: planning a project from an idea, getting unstuck on a tutorial, or answering a concept question.*

### A. Type your idea

After "Start a Companion session," the Companion greets you and asks what you're working on. Tell it about an idea you have. Something concrete is best — describe the **experience**, not the mechanics. For example:

> I have an idea for a small game. The player wakes up in an abandoned library at night. There are clues scattered across the desks — a torn diary, a strange map, a photo. The player has to piece together what happened to the librarian.

You don't need a finished concept. A situation you can picture is enough to plan outward from.

### B. Let it work

The Companion will quote your idea back, ask one or two clarifying questions and identify which [Situated Player Role](https://publish.obsidian.md/brinson/The+Companion/Situated+Player+Roles/Situated+Player+Roles) the idea fits.

You can ask the Companion to save the plan to a file in the folder — handy if you want to come back to it.

### C. What works

- **Describe what the player experiences; mechanics aren't essential.** *"The player wanders through fog and hears voices"* tells the Companion more than *"I want to use the Niagara system."* The Companion's job is to map experience to mechanics for you.
- **Tutorial help is also fair game.** *"I'm stuck on Tutorial 4, section D — the light snaps instead of fading"* — name the tutorial and section, describe what you did and what's happening. Numbers help: *"the light stops at 0.0037 after 3 seconds"* is enough to diagnose.
- **Concept questions land cleanly too.** *"What's a Blueprint Interface? When would I use one?"* — the Companion answers from the wiki and tells you where to read more.
- **Bring half-formed ideas.** The Companion listens first and probes before prescribing. You don't have to arrive with a finished concept.

---

## 2. Next Time You Use the Companion

You've installed Gemini and set up The Companion. Next time you want to work with it:

1. Open your terminal (Windows: Windows Key → `PowerShell` → Enter; macOS: Cmd + Space → `Terminal` → Enter).
2. Navigate to The Companion folder: type `cd ` (with a trailing space), drag the folder into the terminal, press Enter. You'll see the absolute folder path filled in.
3. Run `gemini`.
4. At the prompt, type **Start a Companion session.**

---

## What you can now do

- **Plan a project with the Companion** — describe an idea, get it broken into features, mapped against the tutorials, and sequenced into a build order
- **Get tutorial help** — ask the Companion to walk you through a tutorial step, diagnose a stuck Blueprint, or explain a concept you've hit
- **Ask concept questions** — what is a Material, how does a Blueprint Interface work, why does this lerp look wrong

## Example deviations you are ready for

- Ask the Companion to **save your plan to a file** in the Companion folder (e.g., `project-plan-mygame.md`) — useful when you're exploring multiple ideas in parallel
- Ask for a **reference to look at** from the bundle's `References/` folder (*Gone Home*, *What Remains of Edith Finch*, etc.) when an idea reminds you of something you can't quite name
- Open the same Companion folder in another LLM front-end (e.g., Claude Code) — the same workflow applies because the Companion's content lives in the folder, not in the agent
