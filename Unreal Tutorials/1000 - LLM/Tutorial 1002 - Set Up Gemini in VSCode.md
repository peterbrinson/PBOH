---
cssclasses: unreal-tutorial
publish: true
---



*Bring the Gemini Companion into VSCode so you have file navigation, markdown preview, and the agent all in one window.*

## 0. Introduction

**Outcome.** By the end of this tutorial, the Companion folder is open as a VSCode workspace, Gemini runs in VSCode's integrated terminal, and you can read tutorials and references in markdown preview while you talk to the Companion.

**Time.** About 10 minutes.

**Prerequisites.** [[Tutorial 1001 - Set Up Gemini CLI]] and [[Tutorial 1031 - Set Up The Companion for Gemini]] complete — the Gemini CLI is installed, The Companion is downloaded, and you've authenticated via Sign in with Google. This tutorial doesn't change anything about Gemini itself; it just runs it inside a nicer container.

**Why.** Running the Companion in VSCode adds three things over the bare terminal:
- A **file tree** so you can browse tutorials, wiki pages, and references without opening a separate window
- **Markdown preview** so you can read content the Companion cites while you keep talking to it
- A **persistent integrated terminal** in the workspace — no need to drag the folder into the terminal every session

---

## 1. Install VSCode

If you don't have it already:

1. Go to [code.visualstudio.com](https://code.visualstudio.com/).
2. Download the installer for your OS and run it. Accept the defaults.
3. Launch VSCode once it's installed.

---

## 2. Open The Companion folder

1. In VSCode, choose **File → Open Folder…** (or **File → Open…** on macOS).
2. Navigate to the Companion folder you downloaded in [[Tutorial 1031 - Set Up The Companion for Gemini|Tutorial 1031]] (e.g., `Documents/TheCompanion-main` or `Documents/TheCompanion`).
3. Click **Select Folder** (Windows) or **Open** (macOS).

VSCode opens the folder as a workspace. The left sidebar (the **Explorer**) shows the file tree — `Unreal Tutorials/`, `Unreal Wiki/`, `Situated Player Roles/`, `References/`, and the top-level files like `charter.md` and `START-STUDENT-HERE.md`.

<span class="hint">First time you open the folder, VSCode may ask "Do you trust the authors of the files in this folder?" — pick **Yes, I trust the authors**. The Companion is your downloaded content, not arbitrary code.</span>

---

## 3. Open the integrated terminal and start Gemini

1. Open the integrated terminal: **Terminal → New Terminal** in the menu, or press `` Ctrl + ` `` (Windows) / `` Cmd + ` `` (macOS).
2. The terminal opens **inside the workspace folder** — no `cd` needed. Confirm by checking the prompt; it should show the Companion folder name.
3. Type:
   ```
   gemini
   ```
   Press Enter. Gemini launches with the workspace already as its working folder.
4. At Gemini's prompt, type:
   ```
   Start a Companion session.
   ```
   The Companion greets you and asks what you're working on, exactly as in [[Tutorial 1031 - Set Up The Companion for Gemini|Tutorial 1031]].

---

## 4. Markdown preview (optional but useful)

Many Companion files — tutorials, wiki pages, SPR pages, references — are markdown. VSCode's preview renders them like a webpage so you can read alongside the agent.

1. Click any `.md` file in the Explorer to open it.
2. Press `Ctrl + Shift + V` (Windows) / `Cmd + Shift + V` (macOS) to open the preview.
3. Or click the **preview icon** (split-window icon, top-right of the editor) to open the preview in a side-by-side view alongside the source.

When the Companion cites a wiki page or reference, click that file in the Explorer and preview it without leaving VSCode.

---

## 5. Tips for the workflow

- **Split the layout.** Drag the integrated terminal panel down so it sits below the editor. Now you can read tutorials in the top panel and chat with Gemini in the bottom panel without switching focus.
- **Live file changes.** When the Companion saves a file (e.g., a `project-plan-mygame.md` you asked it to write), VSCode's Explorer shows it appear immediately. Click it to read.
- **Edit response files.** You can edit any markdown file the Companion creates. Useful for refining a saved project plan or jotting your own notes alongside it.
- **Same agent, same content.** Nothing about the Companion's behavior changes inside VSCode. It's still the same Gemini CLI and the same folder. The Companion has no idea you're in an IDE.

---

## What you can now do

- **Run the Companion inside VSCode** with the workspace, terminal, and markdown preview all in one window
- **Browse and preview** the Companion's tutorials, wiki pages, SPR pages, and references without leaving VSCode
- **See files appear live** when the Companion writes to the folder (project plans, notes)

## Example deviations you are ready for

- Try **Claude Code** in the same VSCode integrated terminal — the same folder works with either agent (they both read `charter.md`)
- Open the workspace from the command line by running `code .` inside the Companion folder (after installing the `code` command via VSCode's command palette → "Shell Command: Install 'code' command in PATH")
- Install a VSCode markdown extension (such as *Markdown All in One*) for additional features — table of contents, keyboard shortcuts, math support
- Use VSCode's built-in Git integration to pull future Companion updates if you used `git clone` in [[Tutorial 1031 - Set Up The Companion for Gemini|Tutorial 1031]] Chapter 1 — the Source Control panel handles `git pull` with one click
