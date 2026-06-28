---
type: Tutorial
cssclasses: unreal-tutorial
publish: true
---



## 0. Introduction

**Outcome.** By the end of this tutorial, The GET's content is on your machine, Codex is pointed at the folder, and you've started your first session — ready for [[Tutorial 1101 - Start Using The GET]].

**Prerequisites.** Codex installed by one of: [[Tutorial 1021 - Install Codex for the Terminal]], [[Tutorial 1022 - Set Up Codex Desktop]], or [[Tutorial 1023 - Set Up Codex in VSCode]].

**Learning Objectives:**
- Download The GET's content from GitHub
- Point Codex at the GET folder
- Start your first session

<span style="color:#cb5d21">**Important — Codex needs a paid ChatGPT plan.**</span> Codex is included with **ChatGPT Plus, Pro, Business, Edu, and Enterprise** plans; free accounts don't have access. If you'd rather not pay, use the free Gemini path instead ([[Tutorial 1004 - Set Up The GET for Gemini]]).

> [!NOTE]
> **Already used the desktop app or VSCode tutorial?** Those walked you through opening the folder and starting a session. This page is the terminal version, and the canonical home for downloading the content (Chapter 1).

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

1. In your terminal: `cd ~/Documents`
2. Clone the repo:
   ```
   git clone https://github.com/vLabUSC/The-GET.git
   ```
3. The folder will be named `The-GET`. Later, run `git pull` inside it to fetch updates.

---

## 2. Point Codex at the folder

The steps depend on which surface you installed:

- **Desktop app** — make sure **Local** is selected, then choose the GET folder as the project. (Full detail: [[Tutorial 1022 - Set Up Codex Desktop|Tutorial 1022]].)
- **VSCode** — **File → Open Folder…**, pick the GET folder, then open the Codex panel. (Full detail: [[Tutorial 1023 - Set Up Codex in VSCode|Tutorial 1023]].)
- **Terminal** — navigate into the folder, then launch Codex:
  ```
  cd ~/Documents/The-GET
  codex
  ```

<span class="hint">Terminal tip: type `cd ` (with a trailing space), drag the GET folder into the window so the path pastes itself, press Enter, then run `codex`.</span>

---

## 3. Start your first session

At the Codex prompt, type:

```
Start a GET session.
```

Press **Enter**. The GET reads its instructions from the folder, greets you, and asks what you're working on.

### *You're set up* — continue to [[Tutorial 1101 - Start Using The GET]].

---

## 4. Troubleshooting

### A sign-in or "upgrade" message

Codex needs a paid ChatGPT plan (Plus, Pro, Business, Edu, or Enterprise). See [openai.com/chatgpt/pricing](https://openai.com/chatgpt/pricing), or use the free Gemini path ([[Tutorial 1004 - Set Up The GET for Gemini]]).

### It runs, but doesn't act like the tutor

Codex reads its instructions from **`AGENTS.md`** at the root of the folder you opened. Make sure you opened **the GET folder itself** (`The-GET`), not a parent. If it still doesn't pick it up, ask Codex directly: *"Read AGENTS.md in this folder and follow it."*

### `codex` isn't recognized (terminal)

Close every terminal window and open a fresh one. If it still fails, reinstall via [[Tutorial 1021 - Install Codex for the Terminal]].

---

## What you can now do

- **Continue to [[Tutorial 1101 - Start Using The GET]]** — learn the three conversation types and hold your first real GET conversation.
- **Pull future updates** — if you used `git clone`, run `git pull` inside the folder to receive GET changes without re-downloading.
