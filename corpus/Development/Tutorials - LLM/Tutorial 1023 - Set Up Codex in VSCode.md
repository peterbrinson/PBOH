---
cssclasses: unreal-tutorial
publish: true
---




## 0. Introduction

**Outcome.** By the end of this tutorial, The GET folder is open as a VSCode workspace, Codex runs in VSCode's sidebar, and you can read tutorials and references in markdown preview while you talk to the GET.

**Time.** About 10 minutes.

**Prerequisites.** The GET's content downloaded ([[Tutorial 1024 - Set Up The GET for Codex|Tutorial 1024, Chapter 1]]) and a **paid ChatGPT plan** (Plus, Pro, Business, Edu, or Enterprise).

**Why.** Running the GET in VSCode adds a **file tree**, **markdown preview** for reading what the GET cites, and a **workspace** that remembers the folder between sessions.

> [!NOTE]
> **Prefer not to fuss with an editor?** The [[Tutorial 1022 - Set Up Codex Desktop|desktop app]] is the simpler window. Use VSCode if you already like it.

---

## 1. Install VSCode

If you don't have it already:

1. Go to [code.visualstudio.com](https://code.visualstudio.com/).
2. Download the installer for your OS and run it. Accept the defaults.
3. Launch VSCode.

---

## 2. Install the Codex extension

1. Open the **Extensions** view: click the squares icon in the left bar, or press `Ctrl + Shift + X` (Windows) / `Cmd + Shift + X` (macOS).
2. Search for **Codex**.
3. Install the one published by **OpenAI** (its ID is `openai.chatgpt`).

---

## 3. Open The GET folder

1. Choose **File → Open Folder…** (or **File → Open…** on macOS).
2. Navigate to the GET folder you downloaded in [[Tutorial 1024 - Set Up The GET for Codex|Tutorial 1024]] (e.g., `Documents/The-GET-main` or `Documents/The-GET`).
3. Click **Select Folder** (Windows) or **Open** (macOS).

The left sidebar (the **Explorer**) shows the file tree — `_welcome/`, `agent/`, `corpus/` (Tutorials, Wiki, player roles, References), `gaps/`, and `student-notes-private/`.

<span class="hint">If VSCode asks "Do you trust the authors of the files in this folder?" — pick **Yes, I trust the authors**. The GET is your downloaded content.</span>

---

## 4. Open Codex and sign in

1. Codex appears in the **right sidebar** after installing. Click its icon to open the panel.
2. The first time, **sign in with your ChatGPT account** (the one with your paid plan). Allow the browser sign-in if it offers one.

---

## 5. Start your first session

In the Codex panel, type:

```
Start a GET session.
```

The GET reads its instructions from the folder, greets you, and asks what you're working on.

### *You're set up* — continue to [[Tutorial 1101 - Start Using The GET]].

---

## 6. Markdown preview (optional but useful)

Many GET files are markdown. VSCode renders them like a webpage so you can read alongside the agent.

1. Click any `.md` file in the Explorer.
2. Press `Ctrl + Shift + V` / `Cmd + Shift + V` for a full preview, or click the **preview icon** (top-right of the editor) for side-by-side.

---

## What you can now do

- **Run the GET inside VSCode** with the workspace, file tree, and markdown preview in one window
- **Browse and preview** the GET's tutorials, wiki pages, player-role pages, and references without leaving the editor
- **See files appear live** when the GET writes to the folder
