---
type: Tutorial
cssclasses: unreal-tutorial
publish: true
---

## 0. Introduction

**Outcome.** By the end of this tutorial, GDOH is open in Claude Code’s desktop interface and you have completed and saved your first Prototype Map.

**You need:** a Claude account with Claude Code access, an internet connection, and about 15 minutes. You do not need a terminal or GitHub account.

If the **Code** area is unavailable after sign-in, your account or organization does not currently provide Claude Code access. Use [[Tutorials - LLM/Tutorial 1005 - Antigravity Quick Start|Antigravity Quick Start]] instead.

---

## 1. Download GDOH

1. Go to [github.com/gdofficehours/GDOH](https://github.com/gdofficehours/GDOH).
2. Click **Code** → **Download ZIP**.
3. Unzip the download.
4. Rename `GDOH-main` to `GDOH` and move it somewhere easy to find, such as Documents.
5. Check that `agent/`, `corpus/`, and `CLAUDE.md` are directly inside the folder.

---

## 2. Install Claude Desktop

1. Download the app from [claude.com/download](https://claude.com/download).
2. Install and open it.
3. Sign in with the Claude account that has Claude Code access.
4. Open **Code**.

On Windows, Claude may ask for Git before it can start a local Code session. If so, install Git from [git-scm.com/downloads/win](https://git-scm.com/downloads/win), accept the defaults, and restart Claude.

---

## 3. Open GDOH

1. Start a new local Code session.
2. Choose the `GDOH` folder itself—not Documents or another parent folder.
3. Keep the normal permission setting that asks before changing files.

---

## 4. Start a GDOH Session

Type:

```
Start a GDOH session.
```

GDOH reads `CLAUDE.md`, greets you, and asks which assignment or framework you are using.

---

## 5. Bring an Idea and Save

Describe a game or playable-world idea in 4 to 8 sentences. Continue until GDOH produces a Prototype Map.

When it offers to save, approve the file change. The map should appear at:

```
student-notes-private/projects/prototype-map-<project-name>.md
```

If this is a class submission, add `Tool: Claude Code Desktop` near the top. Save the transcript too if your instructor requests it.

Continue with [[Tutorials - LLM/Tutorial 1101 - Keep Using GDOH|Keep Using GDOH]].

---

## Troubleshooting

### Code asks me to upgrade or is missing

The account you used does not currently have Claude Code access, or your organization has disabled it. Switch to the correct account or use the Antigravity quickstart.

### Claude does not act like GDOH

Start a new local session and select the folder that directly contains `CLAUDE.md`, `agent/`, and `corpus/`.

### Windows mentions Git

Install Git with its default options, fully quit Claude, and reopen it.
