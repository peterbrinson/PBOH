---
cssclasses: unreal-tutorial
publish: true
---




## 0. Introduction

**Outcome.** By the end of this tutorial, the **Codex desktop app** is installed, you're signed in, and it's pointed at The GET — no terminal involved.

**Time.** About 10 minutes.

> [!NOTE]
> **This is the friendliest Codex path — no command line.** To run Codex in a terminal, see [[Tutorial 1021 - Install Codex for the Terminal]]; to run it inside VSCode, see [[Tutorial 1023 - Set Up Codex in VSCode]]. They're all the same Codex.

<span style="color:#cb5d21">**Important — Codex needs a paid ChatGPT plan.**</span> Codex is included with **ChatGPT Plus, Pro, Business, Edu, and Enterprise** plans; free accounts don't have access. If you'd rather not pay, use the free Gemini path instead ([[Tutorial 1002 - Set Up Gemini Desktop (Antigravity)]]).

---

## 1. Install the Codex app

### A. Download

Go to OpenAI's Codex app page — [developers.openai.com/codex/app](https://developers.openai.com/codex/app) — and download for your system:

- **macOS** — a `.dmg` (choose the **Intel** build if you have an Intel Mac; otherwise the Apple Silicon build).
- **Windows** — installs through the **Microsoft Store**.

<span class="hint">The Codex app is macOS and Windows only. On Linux, use [[Tutorial 1021 - Install Codex for the Terminal]] instead.</span>

### B. Run the installer and launch

- **macOS:** Open the `.dmg` and drag **Codex** into **Applications**.
- **Windows:** Complete the Microsoft Store install.

Then launch Codex.

---

## 2. Sign in

When the app opens, **sign in with your ChatGPT account** (the one carrying your paid plan). If you've used Codex before, your previous projects appear automatically.

---

## 3. Get The GET's content

You need The GET's files on your machine first. If you haven't downloaded them, do it now — full detail in [[Tutorial 1024 - Set Up The GET for Codex|Tutorial 1024, Chapter 1]]. The short version:

- Go to [github.com/vLabUSC/The-GET](https://github.com/vLabUSC/The-GET) → green **`<> Code`** button → **Download ZIP** → extract → rename the folder to `The-GET` and move it somewhere easy, like `Documents`.

---

## 4. Open The GET and start a session

1. Make sure **Local** is selected (so Codex runs on your machine, using your files).
2. Choose the project folder: pick The GET folder you downloaded (`The-GET`) — the folder itself, not its parent.
3. In the message box, type:
   ```
   Start a GET session.
   ```

The GET reads its instructions from the folder, greets you, and asks what you're working on.

### *You're set up* — continue to [[Tutorial 1101 - Start Using The GET]].

---

## 5. Troubleshooting

### It asks me to upgrade or sign in again

Codex needs a paid ChatGPT plan (Plus, Pro, Business, Edu, or Enterprise). See [openai.com/chatgpt/pricing](https://openai.com/chatgpt/pricing), or use the free Gemini desktop path ([[Tutorial 1002 - Set Up Gemini Desktop (Antigravity)]]).

### It greeted me but doesn't act like the tutor

Make sure you opened **the GET folder itself** (`The-GET`) — Codex reads its instructions from `AGENTS.md` in that folder, so opening a parent folder means it won't find them. If it still doesn't, ask it directly: *"Read AGENTS.md in this folder and follow it."*

---

## What you can now do

- **Run the GET in a window, no terminal required.**
- **Continue to [[Tutorial 1101 - Start Using The GET]]** — learn the three conversation types and hold your first real GET conversation.
