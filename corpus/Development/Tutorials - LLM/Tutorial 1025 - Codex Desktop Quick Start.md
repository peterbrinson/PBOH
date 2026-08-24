---
type: Tutorial
cssclasses: unreal-tutorial
publish: true
---

## 0. Introduction

**Outcome.** By the end of this tutorial, Peter's project, PB Office Hours is open through Codex in the ChatGPT desktop app and you have completed and saved your first Prototype Plan.  [[Get Started|PBOH is a knowledge bundle]] — course material coupled with the instructions that turn an LLM into your guide.  

**You need:** a ChatGPT account with Codex access, an internet connection, and about 15 minutes. You do not need a terminal or GitHub account. If you haven't requested Codex access yet, [[Tutorials - LLM/Tutorial 1020 - Codex Access and Obsidian Setup|Codex Access and Obsidian Setup]] Step 1 tells you how — access takes USC IT a while to grant.

---

## 1. Download PBOH

1. Go to [github.com/peterbrinson/PBOH](https://github.com/peterbrinson/PBOH).
2. Click **Code** → **Download ZIP**.
3. Unzip it.
4. Rename `PBOH-main` to `PBOH` and move it somewhere easy to find, such as Documents.
5. Open the `PBOH` folder. If it contains only another folder called `PBOH-main` instead of folders such as `agent/`, `corpus/`, and `AGENTS.md`, that folder was nested in the ZIP — move that inner folder to Documents instead and rename it `PBOH`.

---

## 2. Install the ChatGPT Desktop App

1. Download the desktop app from [chatgpt.com/download](https://chatgpt.com/download/).
2. Install and open it.
3. Sign in with the ChatGPT account that has Codex access.
4. Open the Codex or local-work area.

---

## 3. Open PBOH

1. Begin a new local task.
2. Choose the `PBOH` folder itself—not Documents or another parent folder.
3. Keep the normal workspace permissions so Codex stays limited to the project and asks before broader actions.

---

## 4. Start a PBOH Session

Type:

```
Start a PBOH session.
```

Codex reads `AGENTS.md`, greets you, and asks which assignment or framework you are using.

---

## 5. Bring an Idea and Save

Describe a game or playable-world idea in 4 to 8 sentences. Continue until PBOH produces a Prototype Plan.

When it offers to save, approve the file change. The map should appear at:

```
student-notes-private/projects/prototype-plan-<project-name>.md
```

If this is a class submission, add `Tool: Codex Desktop` near the top. Save the transcript too if your instructor requests it.

Continue with [[Tutorials - LLM/Tutorial 1101 - Keep Using PBOH|Keep Using PBOH]].

---

## Troubleshooting

### I cannot find Codex or local work

Confirm that you are signed into the intended account and workspace. Codex availability and usage limits vary by plan and organization.

### Codex does not act like PBOH

Start a new local task and select the folder that directly contains `AGENTS.md`, `agent/`, and `corpus/`.
