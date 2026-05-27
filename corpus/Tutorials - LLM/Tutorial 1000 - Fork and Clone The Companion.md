---
cssclasses: unreal-tutorial
publish: true
---

> [!warning] Draft —  The full fork-based rollout is targeted for mid-summer / fall. Until then, this stays as a published draft. When the rollout formally happens: voice-review this tutorial, remove this warning block, and trim Tutorial 1004's download chapter (which this tutorial replaces).

## 0. Introduction

**Outcome.** By the end of this tutorial you have your own copy — a *fork* — of The Companion on GitHub, cloned to your machine, and connected to the class original so you can pull updates later.

**Prerequisites.**
- A **GitHub account** — free; make one at [github.com](https://github.com/) if you don't have one.
- **Git installed.** Check by running `git --version` in your terminal. If it isn't recognized, install it from [git-scm.com/downloads](https://git-scm.com/downloads), accept the defaults, and open a fresh terminal.

**Learning Objectives:**
- Fork The Companion into your own GitHub account
- Clone your fork to your machine
- Connect your clone to the class original ("upstream") for future updates

**Why fork?** A fork is your own copy of the project. You can save your work to it freely, and the gap log the Companion keeps for you reaches the instructor through it. The class original stays read-only to you — you pull its updates, you never write to it directly.

---

## 1. Fork The Companion

*Forking makes a copy of the project under your own GitHub account. One click.*

1. Sign in to [github.com](https://github.com/).
2. Go to [github.com/vLabUSC/TheCompanion](https://github.com/vLabUSC/TheCompanion).
3. Click the **Fork** button (top-right of the page).
4. On the "Create a new fork" page, leave the defaults and click **Create fork**.

After a moment you land on **`github.com/<your-username>/TheCompanion`** — your own copy. That address is your fork; you'll use it in the next chapter.

---

## 2. Clone Your Fork

*Cloning downloads your fork to your machine so you can work with it.*

### A. Open your terminal

- **Windows:** Windows Key → type `PowerShell` → Enter
- **macOS:** Cmd + Space → type `Terminal` → Enter

### B. Navigate to where you want the folder

For your Documents folder:

```
cd ~/Documents
```

### C. Clone

Run this — **with your own username**, not `vLabUSC`:

```
git clone https://github.com/<your-username>/TheCompanion.git
```

This creates a `TheCompanion` folder. Move into it:

```
cd TheCompanion
```

<span style="color:#cb5d21">**Don't miss this step:**</span> clone **your fork** (your username in the URL), not `vLabUSC`. If you clone `vLabUSC` directly, you won't be able to save your work back.

---

## 3. Connect to Upstream

*Your clone knows about your fork. Now tell it about the class original, so you can pull updates.*

From inside the `TheCompanion` folder:

```
git remote add upstream https://github.com/vLabUSC/TheCompanion.git
```

Verify:

```
git remote -v
```

You should see two names:

- **`origin`** → your fork — where you save your work
- **`upstream`** → the class original — where course updates come from

That's the whole setup. These are one-time commands — you won't run them again.

### *You're set up* — continue to [[Tutorial 1004 - Set Up The Companion for Gemini]].

---

## What you can now do

- **Continue to [[Tutorial 1004 - Set Up The Companion for Gemini]]** — install your CLI and point it at the folder you just cloned.
- **Pull updates and contribute later** — see `_welcome/contributing-to-the-companion.md` in the folder for how to fetch course updates, send your gap log to the instructor, and contribute a reference page.

---

## Troubleshooting

### `git` is not recognized

Git isn't installed, or the terminal window predates the install. Install from [git-scm.com/downloads](https://git-scm.com/downloads), accept the defaults, then **close the terminal and open a fresh one**.

### I accidentally cloned `vLabUSC/TheCompanion` instead of my fork

Easiest: delete the folder and redo Chapter 2 with your own username. Or, from inside the folder, repoint the remotes:

```
git remote set-url origin https://github.com/<your-username>/TheCompanion.git
git remote add upstream https://github.com/vLabUSC/TheCompanion.git
```

### The Fork button asks me to sign in

You need a GitHub account and must be signed in. Create a free account at [github.com](https://github.com/) and try again.
