---
type: Tutorial
cssclasses: unreal-tutorial
publish: true
---




## 0. Introduction

**Outcome.** By the end of this tutorial, **Claude Code** is installed as a terminal command on your computer and verified. The next tutorial — [[Tutorial 1014 - Set Up The GET for Claude Code]] — downloads The GET's content, signs you in, and gets you to your first session.

**Time.** About 5 minutes if everything goes smoothly.

**Learning Objectives:**
- Install Claude Code with the native installer (no Node.js required)
- On Windows, install Git (Claude Code uses it behind the scenes)
- Verify the `claude` command runs

> [!NOTE]
> **Three ways to run Claude Code — this is the terminal one.** Claude Code also runs as a desktop app ([[Tutorial 1012 - Set Up Claude Code Desktop]]) and inside VSCode ([[Tutorial 1013 - Set Up Claude Code in VSCode]]). If you'd rather not use a terminal at all, skip this tutorial and use the desktop app instead — it's the friendliest path.

<span style="color:#cb5d21">**Important — Claude Code needs a paid Claude plan.**</span> Unlike the Gemini path (free with a personal Google account), Claude Code requires a **Pro, Max, Team, or Enterprise** subscription. The free Claude.ai plan does not include Claude Code. If you'd rather not pay, use the Gemini path instead ([[Tutorial 1001 - Install Gemini for the Terminal]]).

---

## 1. Open your terminal

The terminal is the text-based window where you type commands.

- **Windows:** Press the **Windows Key**, type `PowerShell`, and press Enter.
- **macOS:** Press **Cmd + Space**, type `Terminal`, and press Enter.

A window with a text prompt opens. This is where the install command goes.

---

## 2. Install Claude Code

*The native installer downloads the right version for your computer and sets it up. You do **not** need Node.js.*

Paste the line for your system and press Enter.

**Windows (PowerShell):**
```
irm https://claude.ai/install.ps1 | iex
```

**macOS:**
```
curl -fsSL https://claude.ai/install.sh | bash
```

<span class="hint">If Windows says `'irm' is not recognized`, you're in the older "Command Prompt," not PowerShell. Close it, open **PowerShell** as in Chapter 1, and try again.</span>

When it finishes, **close the terminal window and open a fresh one** — the `claude` command isn't recognized until you do.

---

## 3. Windows only — Install Git

*Claude Code uses **Git** behind the scenes to run some of its tools. On Windows it isn't included, so install it once. (Most Macs already have Git — skip to Chapter 4.)*

1. Go to [git-scm.com/downloads/win](https://git-scm.com/downloads/win) and download the installer.
2. Run it and accept the defaults. Leave **"Add Git to PATH"** checked (it is by default).
3. Close and reopen your terminal afterward.

---

## 4. Verify the install

In a fresh terminal, type:

```
claude --version
```

Press Enter. You should see a version number. If you see `not recognized` or `command not found`, close the terminal, open a new one, and try again — the command sometimes isn't registered until you restart the terminal.

# *Claude Code is installed* — continue to [[Tutorial 1014 - Set Up The GET for Claude Code]].

---

## 5. Troubleshooting

### `claude` isn't recognized after installing

Close **every** open terminal window and open a brand-new one. The installer updates your PATH, and only new terminals pick up the change.

### Windows: PowerShell says scripts are disabled

If the install line fails with "running scripts is disabled on this system":

1. Open PowerShell **as Administrator** (right-click PowerShell in the Start menu → **Run as administrator**).
2. Run:
   ```
   Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
   ```
3. Type `Y` and press Enter, then close the Admin window and try the install again in a regular PowerShell window.

### A login or "upgrade" message when you first run it

You're on the free plan. Claude Code needs a paid plan (Pro, Max, Team, or Enterprise) — see [claude.com/pricing](https://claude.com/pricing), or use the free Gemini path ([[Tutorial 1001 - Install Gemini for the Terminal]]).

---

## What you can now do

- **Run `claude` from any terminal** — Claude Code is installed and auto-updates itself in the background.
- **Continue to [[Tutorial 1014 - Set Up The GET for Claude Code]]** — download The GET's content, sign in, and start your first session.
- **Prefer a window over a terminal?** Use [[Tutorial 1012 - Set Up Claude Code Desktop]] or [[Tutorial 1013 - Set Up Claude Code in VSCode]] instead.
