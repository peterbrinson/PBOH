---
cssclasses: unreal-tutorial
publish: true
---




## 0. Introduction

**Outcome.** By the end of this tutorial, the **Claude desktop app** is installed, you're signed in, and its **Code** tab is pointed at The GET — with no terminal involved. The Code tab *is* Claude Code, in a normal point-and-click window that shows you every change before it happens.

**Time.** About 10 minutes (a little more on Windows, where you also install Git).

> [!NOTE]
> **This is the friendliest path — no command line.** If you'd rather work in a terminal, see [[Tutorial 1011 - Install Claude Code for the Terminal]]; to work inside VSCode, see [[Tutorial 1013 - Set Up Claude Code in VSCode]]. They all run the same Claude Code.

<span style="color:#cb5d21">**Important — Claude Code needs a paid Claude plan.**</span> The **Code** tab requires a **Pro, Max, Team, or Enterprise** subscription. A free Claude account can use **Chat** but not **Code**. If you try and see an "upgrade" prompt, that's why — see [claude.com/pricing](https://claude.com/pricing). If you'd rather not pay, use the free Gemini path instead ([[Tutorial 1002 - Set Up Gemini Desktop (Antigravity)]]).

---

## 1. Install the Claude desktop app

### A. Download

Go to [claude.com/download](https://claude.com/download) and get the app for your system:

- **macOS** — a `.dmg` file (one universal build works on both Intel and Apple Silicon).
- **Windows** — a `.exe` setup file (choose ARM64 only if you have an ARM Windows laptop; most are x64).

<span class="hint">The desktop app is macOS and Windows only. On Linux, use [[Tutorial 1011 - Install Claude Code for the Terminal]] instead.</span>

### B. Run the installer

- **macOS:** Open the `.dmg` and drag **Claude** into your **Applications** folder.
- **Windows:** Run the `.exe` and accept the defaults.

Then launch Claude — from **Applications** (macOS) or the **Start menu** (Windows).

---

## 2. Windows only — Install Git

*The Code tab uses **Git** behind the scenes to track file changes. On Windows it isn't included. (Most Macs already have it — skip to Chapter 3.)*

1. Go to [git-scm.com/downloads/win](https://git-scm.com/downloads/win) and download the installer.
2. Run it and accept the defaults (leave **"Add Git to PATH"** checked).
3. **Restart the Claude app** after Git installs, so it notices Git is present.

---

## 3. Sign in and open the Code tab

1. When Claude opens, **sign in** with your Anthropic / Claude account (the one carrying your paid plan).
2. Across the top are three tabs: **Chat**, **Cowork**, and **Code**. Click **Code**.

- If it opens to a screen asking you to pick a folder and type a task, you're set — continue.
- If clicking **Code** prompts you to **upgrade**, your account is on the free tier (see the Important note above).

---

## 4. Get The GET's content

You need The GET's files on your machine before you can point Claude at them. If you haven't downloaded them yet, do it now — full detail is in [[Tutorial 1014 - Set Up The GET for Claude Code|Tutorial 1014, Chapter 1]]. The short version:

- Go to [github.com/vLabUSC/The-GET](https://github.com/vLabUSC/The-GET) → green **`<> Code`** button → **Download ZIP** → extract it → move the `The-GET-main` folder somewhere easy, like `Documents`.

---

## 5. Open The GET and start a session

### A. Point Claude at the folder

In the Code tab's prompt area:

1. Set the **environment** to **Local** (runs on your machine, reading your files directly).
2. Click **Select folder** and choose The GET folder you downloaded (`The-GET-main` or `The-GET`) — the folder itself, not its parent.

### B. Leave the safe defaults

- **Model** — the default is fine; the GET works with any current Claude model.
- **Permission mode** — leave it on **Ask permissions**. Claude will show you each change and wait for your **Accept** or **Reject**. That's the right setting while you're learning.

### C. Start your first session

In the prompt box, type:

```
Start a GET session.
```

Press **Enter**. The GET reads its own instructions from the folder, greets you, and asks what you're working on.

<span style="color:#cb5d21">**When the GET wants to save something:**</span> as you work, the GET may offer to write a note into the project (for example, into `student-notes-private/`). You'll see a small diff with **Accept / Reject** buttons — click **Accept** to let it save. Nothing changes on your machine until you do.

### *You're set up* — continue to [[Tutorial 1101 - Start Using The GET]].

---

## 6. Troubleshooting

### Clicking "Code" asks me to upgrade

The Code tab requires a paid plan (Pro, Max, Team, or Enterprise). Subscribe at [claude.com/pricing](https://claude.com/pricing), or use the free Gemini desktop path ([[Tutorial 1002 - Set Up Gemini Desktop (Antigravity)]]).

### The Code tab mentions Git, or won't start a local session (Windows)

Git isn't installed or the app hasn't noticed it. Install it from [git-scm.com/downloads/win](https://git-scm.com/downloads/win) with default options, then fully quit and reopen the Claude app.

### The GET greeted me but doesn't seem to know its files

Make sure you selected **the GET folder itself** (`The-GET-main` or `The-GET`) as the project folder — not `Documents` or some parent. Start a new session and pick the correct folder.

### A "403" or authentication error in the Code tab

Sign out and back in, then restart the app. If it persists, confirm your paid plan is active on the account you signed in with.

---

## What you can now do

- **Run the GET in a window, no terminal required** — the Code tab shows every change before it happens.
- **Continue to [[Tutorial 1101 - Start Using The GET]]** — learn the three conversation types and hold your first real GET conversation.
- **Run more than one session** — the Code tab's sidebar keeps several GET sessions side by side, each on its own topic.
