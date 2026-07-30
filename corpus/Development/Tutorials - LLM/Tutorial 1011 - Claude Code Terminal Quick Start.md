---
type: Tutorial
cssclasses: unreal-tutorial
publish: true
---

## 0. Introduction

**Outcome.** By the end of this tutorial, Claude Code is installed in your terminal, pointed at GDOH, and used for your first saved Prototype Plan.

Use this path only if you prefer a terminal. For the graphical route, use [[Tutorials - LLM/Tutorial 1015 - Claude Code Desktop Quick Start|Claude Code Desktop Quick Start]].

**You need:** a Claude account with Claude Code access, an internet connection, and about 15 minutes.

---

## 1. Install Claude Code

Open **PowerShell** on Windows or **Terminal** on macOS. Paste the command for your system.

**Windows PowerShell:**

```
irm https://claude.ai/install.ps1 | iex
```

**macOS:**

```
curl -fsSL https://claude.ai/install.sh | bash
```

Close and reopen the terminal, then verify:

```
claude --version
```

On Windows, if Claude asks for Git, install it from [git-scm.com/downloads/win](https://git-scm.com/downloads/win) with the default options and reopen the terminal.

---

## 2. Download GDOH

1. Go to [github.com/gdofficehours/GDOH](https://github.com/gdofficehours/GDOH).
2. Click **Code** → **Download ZIP**.
3. Unzip it, rename `GDOH-main` to `GDOH`, and move it to Documents.

---

## 3. Launch Claude in GDOH Folder

Type `cd `, drag the `GDOH` folder into the terminal, and press Enter. Then run:

```
claude
```

Complete the browser sign-in when asked.

---

## 4. Start, Talk, and Save

Type:

```
Start a GDOH session.
```

Describe a project idea in 4 to 8 sentences and continue until GDOH produces a Prototype Plan. Approve its offer to save the plan to `student-notes-private/projects/`.

If this is a class submission, add `Tool: Claude Code CLI` near the top and save the transcript if your instructor requests it.

Continue with [[Tutorials - LLM/Tutorial 1101 - Keep Using GDOH|Keep Using GDOH]].

---

## Troubleshooting

### `claude` is not recognized

Close every terminal, open a new one, and try `claude --version` again.

### The account cannot use Claude Code

Sign in with an account that has Claude Code access, or use [[Tutorials - LLM/Tutorial 1005 - Antigravity Quick Start|Antigravity Quick Start]].
