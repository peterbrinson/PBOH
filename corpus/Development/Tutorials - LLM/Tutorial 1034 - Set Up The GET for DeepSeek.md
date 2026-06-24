---
cssclasses: unreal-tutorial
publish: true
---



## 0. Introduction

**Outcome.** By the end of this tutorial, The GET's content is on your machine, Deep Code is pointed at the folder, and you've started your first session — ready for [[Tutorial 1101 - Start Using The GET]].

**Prerequisites.** [[Tutorial 1031 - Install DeepSeek for the Terminal]] complete — Deep Code is installed and your DeepSeek API key is in its config.

**Learning Objectives:**
- Download The GET's content from GitHub
- Point Deep Code at the GET folder
- Start your first session

---

## 1. Download The GET: Choose A or B

*The GET's content — tutorials, wiki pages, role descriptions, references — lives in a public GitHub repository. Two ways to get it. Either works.*

### Option A. (your first time) ZIP download

1. Go to [github.com/vLabUSC/The-GET](https://github.com/vLabUSC/The-GET).
2. Click the green **`<> Code`** button (top-right of the file list).
3. Click **Download ZIP**.
4. Extract the ZIP:
   - **Windows:** Right-click the downloaded file → **Extract All…**
   - **macOS:** Double-click the file in Finder.
5. Rename the resulting folder to `The-GET`, then move it to your `Documents` folder (or anywhere easy to find).

<span class="hint">GitHub may cover the Download ZIP button with a "Sign in" banner. You don't need a GitHub account — dismiss it.</span>

### Option B. (lets you fetch updates later) Git clone

*This path uses **Git**. Most Macs already have it. On Windows it isn't included, so install it once first: go to [git-scm.com/downloads/win](https://git-scm.com/downloads/win), run the installer, accept the defaults (leave **"Add Git to PATH"** checked), then close and reopen your terminal. (Not sure you want this path? Option A above needs no Git.)*

1. In your terminal, go to your Documents folder:
   ```
   cd ~/Documents
   ```
2. Clone the repo:
   ```
   git clone https://github.com/vLabUSC/The-GET.git
   ```
3. The folder will be named `The-GET`. Later, run `git pull` inside it to fetch updates.

---

## 2. Point Deep Code at the folder and launch Deepcode

In your terminal, navigate into the GET folder, then launch Deep Code:

```
cd ~/Documents/The-GET
deepcode
```

<span class="hint">Tip: If you're typing instead of copy and pasting, type `cd ` (with a trailing space), drag the GET folder (literally from your Windows explorer or OSX Finder) into the terminal window so the path pastes itself, press Enter, then run `deepcode`.</span>

---

## 3. Start your first session

At the Deep Code prompt, type:

```
Read the file AGENTS.md in this folder and follow it to act as The GET. Then start a GET session.
```

<span style="color:#cb5d21">**Why the long prompt:**</span> the first-party tools (Gemini, Claude Code, Codex) automatically read an instructions file when they start. Deep Code doesn't always do this, so we point it straight at `AGENTS.md` — the file that tells it how to be the tutor. After that, the GET behaves the same as on any other tool.

The GET greets you and asks what you're working on.

### *You're set up* — continue to [[Tutorial 1101 - Start Using The GET]].

---

## 4. Troubleshooting

### It runs, but doesn't act like the tutor

Two things to check: you opened **the GET folder itself** (`The-GET`), and your prompt told Deep Code to **read `AGENTS.md`** (Chapter 3). Without that pointer, it won't load the tutor instructions.

### An authentication or API-key error

Your DeepSeek key or credit needs attention — see [[Tutorial 1031 - Install DeepSeek for the Terminal]], Chapter 3 and its Troubleshooting.

### `deepcode` isn't recognized

Close every terminal window and open a fresh one. If it still fails, reinstall via [[Tutorial 1031 - Install DeepSeek for the Terminal]].

---

## What you can now do

- **Continue to [[Tutorial 1101 - Start Using The GET]]** — learn the three conversation types and hold your first real GET conversation.
- **Pull future updates** — if you used `git clone`, run `git pull` inside the folder to receive GET changes without re-downloading.
- **Want a free path instead?** Gemini is free with a personal Google account ([[Tutorial 1004 - Set Up The GET for Gemini]]).
