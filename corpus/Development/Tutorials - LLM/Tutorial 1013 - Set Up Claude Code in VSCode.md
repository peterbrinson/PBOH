---
type: Tutorial
cssclasses: unreal-tutorial
publish: true
---




## 0. Introduction

**Outcome.** By the end of this tutorial, The GET folder is open as a VSCode workspace, Claude Code runs in VSCode's sidebar, and you can read tutorials and references in markdown preview while you talk to the GET.

**Time.** About 10 minutes.

**Prerequisites.** The GET's content downloaded ([[Tutorial 1014 - Set Up The GET for Claude Code|Tutorial 1014, Chapter 1]]) and a **paid Claude plan** (Pro, Max, Team, or Enterprise). This tutorial runs Claude Code inside a nicer container — it doesn't change anything about the GET itself.

**Why.** Running the GET in VSCode adds three things over a bare terminal:
- A **file tree** so you can browse tutorials, wiki pages, and references in one window
- **Markdown preview** so you can read what the GET cites while you keep talking to it
- **A workspace** that remembers the folder, so you don't re-select it every session

> [!NOTE]
> **Prefer not to fuss with an editor?** The [[Tutorial 1012 - Set Up Claude Code Desktop|desktop app]] is the simpler window. Use VSCode if you already like it, or want the file tree and preview beside the chat.

---

## 1. Install VSCode

If you don't have it already:

1. Go to [code.visualstudio.com](https://code.visualstudio.com/).
2. Download the installer for your OS and run it. Accept the defaults.
3. Launch VSCode.

---

## 2. Install the Claude Code extension

1. Open the **Extensions** view: click the squares icon in the left bar, or press `Ctrl + Shift + X` (Windows) / `Cmd + Shift + X` (macOS).
2. Search for **Claude Code**.
3. Install the one published by **Anthropic** (its ID is `anthropic.claude-code`).

<span class="hint">The extension needs a fairly recent VSCode. If it won't install, update VSCode (**Help → Check for Updates**) and try again.</span>

---

## 3. Open The GET folder

1. Choose **File → Open Folder…** (or **File → Open…** on macOS).
2. Navigate to the GET folder you downloaded in [[Tutorial 1014 - Set Up The GET for Claude Code|Tutorial 1014]] (e.g., `Documents/The-GET`).
3. Click **Select Folder** (Windows) or **Open** (macOS).

The left sidebar (the **Explorer**) shows the file tree — `agent/` (the AI's operating files), `corpus/` (GET Started, Design, Development), `gaps/`, and `student-notes-private/`.

<span class="hint">First time you open the folder, VSCode may ask "Do you trust the authors of the files in this folder?" — pick **Yes, I trust the authors**. The GET is your downloaded content, not arbitrary code.</span>

---

## 4. Open Claude Code and sign in

1. Open Claude Code: click the **spark icon** in the editor toolbar (top-right when a file is open), or press `Ctrl + Shift + P` / `Cmd + Shift + P` and run **Claude Code: Open**.
2. The first time, it asks you to **sign in** — use your Anthropic / Claude account (the one with your paid plan). If it offers to open a browser to finish signing in, allow it.

Claude Code opens as a panel beside your files, already pointed at the workspace folder.

---

## 5. Start your first session

In the Claude Code panel, type:

```
Start a GET session.
```

Press Enter. The GET greets you and asks what you're working on, exactly as in [[Tutorial 1014 - Set Up The GET for Claude Code|Tutorial 1014]].

<span style="color:#cb5d21">**Approving changes:**</span> by default Claude Code shows each file change for your approval before applying it. When the GET offers to save a note (e.g., into `student-notes-private/`), accept the change to let it save.

### *You're set up* — continue to [[Tutorial 1101 - Start Using The GET]].

---

## 6. Markdown preview (optional but useful)

Many GET files — tutorials, wiki pages, player-role pages, references — are markdown. VSCode renders them like a webpage so you can read alongside the agent.

1. Click any `.md` file in the Explorer to open it.
2. Press `Ctrl + Shift + V` / `Cmd + Shift + V` for a full preview, or click the **preview icon** (split-window icon, top-right of the editor) for a side-by-side view.

When the GET cites a wiki page or reference, open that file in the Explorer and preview it without leaving VSCode.

---

## What you can now do

- **Run the GET inside VSCode** with the workspace, file tree, and markdown preview in one window
- **Browse and preview** the GET's tutorials, wiki pages, player-role pages, and references without leaving the editor
- **See files appear live** when the GET writes to the folder (Prototype Maps, notes)

## Example deviations you are ready for

- The same folder works with other agents too — **Gemini** ([[Tutorial 1003 - Set Up Gemini in VSCode]]) reads the same content via the root `GEMINI.md` pointer
- Use VSCode's built-in **Source Control** panel to pull future GET updates if you cloned the repo (one-click `git pull`)
- Install a markdown extension (such as *Markdown All in One*) for a table of contents and extra shortcuts
