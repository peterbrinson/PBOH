---
type: Tutorial
cssclasses: unreal-tutorial
publish: true
---

## 0. Introduction

**Outcome.** By the end of this tutorial, PBOH is open in Claude Code’s desktop interface and you have completed and saved your first Prototype Plan.

**You need:** a Claude account with Claude Code access, an internet connection, and about 15 minutes. You do not need a terminal or GitHub account.

If the **Code** area is unavailable after sign-in, your account or organization does not currently provide Claude Code access. Use [[Tutorials - LLM/Tutorial 1005 - Antigravity Quick Start|Antigravity Quick Start]] instead.

---

## 1. Download PBOH

1. Go to [github.com/peterbrinson/PBOH](https://github.com/peterbrinson/PBOH).
2. Click **Code** → **Download ZIP**.
3. Unzip the download.
4. Rename `PBOH-main` to `PBOH` and move it somewhere easy to find, such as Documents.
5. Open the `PBOH` folder. If it contains only another folder called `PBOH-main` instead of folders such as  `agent/`, `corpus/`, and `CLAUDE.md`, that folder was nested in the ZIP — move that inner folder to Documents instead and rename it `PBOH`.

---

## 2. Install Claude Desktop

1. Download the app from [claude.com/download](https://claude.com/download).
2. Install and open it.
3. Sign in with the Claude account that has Claude Code access.
4. Switch to **Code**.


---

## 3. Open PBOH

1. Start a new local Code session.
2. Choose the `PBOH` folder itself—not Documents or another parent folder.
3. Keep the normal permission setting that asks before changing files.

---

## 4. Start a PBOH Session

Type:

```
Start a PBOH session.
```

PBOH reads `CLAUDE.md`, greets you, and asks which assignment or framework you are using.

---

## 5. Bring an Idea and Save

Describe a game or playable-world idea in 4 to 8 sentences. Continue until PBOH produces a Prototype Plan.

When it offers to save, approve the file change. The map should appear at:

```
student-notes-private/projects/prototype-plan-<project-name>.md
```

If this is a class submission, add `Tool: Claude Code Desktop` near the top. Save the transcript too if your instructor requests it.

Continue with [[Tutorials - LLM/Tutorial 1101 - Keep Using PBOH|Keep Using PBOH]].

---

## Troubleshooting

### Code asks me to upgrade or is missing

The account you used does not currently have Claude Code access, or your organization has disabled it. Switch to the correct account or use the Antigravity quickstart.

### Claude does not act like PBOH

Start a new local session and select the folder that directly contains `CLAUDE.md`, `agent/`, and `corpus/`.

### Windows mentions Git

Install Git with its default options, fully quit Claude, and reopen it.
