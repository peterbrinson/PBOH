---
type: Tutorial
cssclasses: unreal-tutorial
publish: true
---

## 0. Introduction

**Outcome.** By the end of this tutorial, Codex CLI is installed, pointed at PBOH, and used for your first saved Prototype Plan.

Use this path only if you prefer a terminal. For the graphical route, use [[Tutorials - LLM/Tutorial 1025 - Codex Desktop Quick Start|Codex Desktop Quick Start]].

**You need:** a ChatGPT account with Codex access, Node.js, an internet connection, and about 15 minutes. If you haven't requested Codex access yet, see [[Tutorials - LLM/Tutorial 1020 - Codex Access and Obsidian Setup|Codex Access and Obsidian Setup]] first.

---

## 1. Install Codex CLI

Open **PowerShell** on Windows or **Terminal** on macOS.

Check Node.js:

```
node -v
```

If the command is missing, install the current **LTS** release from [nodejs.org](https://nodejs.org/) and reopen the terminal.

Install and verify Codex:

```
npm install -g @openai/codex
codex --version
```

---

## 2. Download PBOH

1. Go to [github.com/peterbrinson/PBOH](https://github.com/peterbrinson/PBOH).
2. Click **Code** → **Download ZIP**.
3. Unzip it, rename `PBOH-main` to `PBOH`, and move it to Documents.

---

## 3. Launch Codex in PBOH Folder

Type `cd `, drag the `PBOH` folder into the terminal, and press Enter. Then run:

```
codex
```

Choose **Sign in with ChatGPT** and complete the browser sign-in.

---

## 4. Start, Talk, and Save

Type:

```
Start a PBOH session.
```

Describe a project idea in 4 to 8 sentences and continue until PBOH produces a Prototype Plan. Approve its offer to save the plan to `student-notes-private/projects/`.

If this is a class submission, add `Tool: Codex CLI` near the top and save the transcript if your instructor requests it.

Continue with [[Tutorials - LLM/Tutorial 1101 - Keep Using PBOH|Keep Using PBOH]].

---

## Troubleshooting

### `codex` is not recognized

Close every terminal, open a new one, and try `codex --version` again.

### Sign-in or access fails

Confirm that you used the intended ChatGPT account and workspace. Codex availability and limits vary by plan and organization.
