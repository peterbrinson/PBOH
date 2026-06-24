---
cssclasses: unreal-tutorial
publish: true
---



## 0. Introduction

**Outcome.** By the end of this tutorial, The GET's content is on your machine, Claude Code is pointed at the folder, and you've started your first session — ready for [[Tutorial 1101 - Start Using The GET]].

**Prerequisites.** Claude Code installed by one of: [[Tutorial 1011 - Install Claude Code for the Terminal]], [[Tutorial 1012 - Set Up Claude Code Desktop]], or [[Tutorial 1013 - Set Up Claude Code in VSCode]].

**Learning Objectives:**
- Download The GET's content from GitHub
- Point Claude Code at the GET folder
- Start your first session

<span style="color:#cb5d21">**Important — Claude Code needs a paid Claude plan.**</span> Claude Code requires a **Pro, Max, Team, or Enterprise** subscription; the free Claude.ai plan doesn't include it. If you'd rather not pay, use the free Gemini path instead ([[Tutorial 1004 - Set Up The GET for Gemini]]).

> [!NOTE]
> **Already used the desktop app or VSCode tutorial?** Those tutorials walked you through opening the GET folder and starting a session in their own window — you're effectively done. This page is the terminal version of the same steps, and the canonical home for downloading the content (Chapter 1).

---

## 1. Download The GET: Choose A or B

*The GET's content — tutorials, wiki pages, role descriptions, references — lives in a public GitHub repository. You have two ways to get it onto your machine. Either works.*

### Option A. (your first time) ZIP download

1. Go to [github.com/vLabUSC/The-GET](https://github.com/vLabUSC/The-GET).
2. Click the green **`<> Code`** button (top-right of the file list).
3. Click **Download ZIP** at the bottom of the menu that appears.
4. Extract the ZIP:
   - **Windows:** Right-click the downloaded file → **Extract All…**
   - **macOS:** Double-click the file in Finder.
5. Rename the resulting folder to `The-GET`, then move it to your `Documents` folder (or anywhere easy to find).

<span class="hint">GitHub may cover the Download ZIP button with a "Sign in" banner. You don't need a GitHub account — dismiss the banner if it appears.</span>

### Option B. (lets you fetch updates later) Git clone

If you already have `git` installed, this is the better path — future updates take one command (`git pull`) instead of a full re-download.

1. In your terminal, navigate to where you want the folder. For Documents:
   ```
   cd ~/Documents
   ```
2. Clone the repo:
   ```
   git clone https://github.com/vLabUSC/The-GET.git
   ```
3. The folder will be named `The-GET`.
4. Later, to fetch updates: navigate into the folder and run `git pull`.

---

## 2. Point Claude Code at the folder

*You have Claude Code (Chapter 0 prerequisites) and the content. Now put them together. The steps depend on which surface you installed:*

- **Desktop app** — in the **Code** tab, choose **Local**, click **Select folder**, and pick the GET folder. (Full detail: [[Tutorial 1012 - Set Up Claude Code Desktop|Tutorial 1012]].)
- **VSCode** — **File → Open Folder…**, pick the GET folder, then open Claude Code. (Full detail: [[Tutorial 1013 - Set Up Claude Code in VSCode|Tutorial 1013]].)
- **Terminal** — navigate into the folder, then launch Claude Code:
  ```
  cd ~/Documents/The-GET
  claude
  ```
  On the first run in a folder, Claude Code asks whether to trust it — choose **yes**; it's your own downloaded content.

<span class="hint">Terminal tip: type `cd ` (with a trailing space), then **drag the GET folder** into the terminal window — the path pastes itself. Press Enter, then run `claude`.</span>

---

## 3. Start your first session

At the Claude Code prompt, type:

```
Start a GET session.
```

Press **Enter**. The GET reads its own instructions from the folder, greets you, and asks what you're working on.

<span style="color:#cb5d21">**Approving changes:**</span> Claude Code shows you each file change before applying it. When the GET offers to save a note (e.g., into `student-notes-private/`), accept the change to let it save.

### *You're set up* — continue to [[Tutorial 1101 - Start Using The GET]].

---

## 4. Troubleshooting

### A login or "upgrade" message

Claude Code needs a paid plan (Pro, Max, Team, or Enterprise). Subscribe at [claude.com/pricing](https://claude.com/pricing), or use the free Gemini path ([[Tutorial 1004 - Set Up The GET for Gemini]]).

### The GET greeted me but doesn't seem to know its files

You opened the wrong folder. Point Claude Code at **the GET folder itself** (`The-GET`), not your `Documents` folder or some parent.

### `claude` isn't recognized (terminal)

Close every terminal window and open a fresh one. If it still fails, reinstall via [[Tutorial 1011 - Install Claude Code for the Terminal]].

---

## What you can now do

- **Continue to [[Tutorial 1101 - Start Using The GET]]** — learn the three conversation types and hold your first real GET conversation.
- **Pull future updates** — if you used `git clone`, run `git pull` inside the folder (or ask Claude to do it) to receive GET changes without re-downloading.
