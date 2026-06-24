---
cssclasses: unreal-tutorial
publish: true
---




## 0. Introduction

**Outcome.** By the end of this tutorial, **Codex** (OpenAI's coding agent) is installed as a terminal command and verified. The next tutorial — [[Tutorial 1024 - Set Up The GET for Codex]] — downloads The GET's content, signs you in, and gets you to your first session.

**Time.** About 10 minutes.

**Learning Objectives:**
- Install the Codex CLI
- Sign in with your ChatGPT account
- Verify the `codex` command runs

> [!NOTE]
> **Three ways to run Codex — this is the terminal one.** Codex also runs as a desktop app ([[Tutorial 1022 - Set Up Codex Desktop]]) and inside VSCode ([[Tutorial 1023 - Set Up Codex in VSCode]]). If you'd rather not use a terminal, skip this and use the desktop app.

<span style="color:#cb5d21">**Important — Codex needs a paid ChatGPT plan.**</span> Codex is included with **ChatGPT Plus, Pro, Business, Edu, and Enterprise** plans. Free ChatGPT accounts don't have access. If you'd rather not pay, use the free Gemini path instead ([[Tutorial 1001 - Install Gemini for the Terminal]]).

---

## 1. Open your terminal

*The terminal is the text-based window where you type commands instead of clicking. Different name on each OS, same idea.*

- **Windows:** Press the **Windows Key**, type `PowerShell`, and press Enter.
- **macOS:** Press **Cmd + Space**, type `Terminal`, and press Enter.

A window with a text prompt opens. This is where the rest of the steps go.

---

## 2. Install Codex

There are two ways to install. Pick one.

### Option A. macOS (one line, no setup)

```
curl -fsSL https://chatgpt.com/codex/install.sh | sh
```

### Option B. Windows or any system (via npm)

The npm route works everywhere, including Windows. It needs **Node.js** first.

1. **Install Node.js** if you don't have it: go to [nodejs.org](https://nodejs.org/), download the **LTS** installer, run it with the defaults, then **close and reopen your terminal**. (Check with `node -v` — a version number means you're set.)
2. **Install Codex:**
   ```
   npm install -g @openai/codex
   ```
   The `-g` means *install globally* — available from any folder.

<span class="hint">macOS only: if Option B gives a "permission denied" error, run `sudo npm install -g @openai/codex` and enter your Mac password.</span>

---

## 3. Verify the install

```
codex --version
```

Press Enter. You should see a version number. If you see `not recognized` or `command not found`, close the terminal, open a fresh one, and try again.

# *Codex is installed* — continue to [[Tutorial 1024 - Set Up The GET for Codex]].

---

## 4. Troubleshooting

### `codex` isn't recognized after installing

Close every open terminal window and open a brand-new one — new commands aren't registered until you restart the terminal.

### Windows: "running scripts is disabled on this system"

1. Open PowerShell **as Administrator** (right-click PowerShell in the Start menu → **Run as administrator**).
2. Run:
   ```
   Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
   ```
3. Type `Y`, press Enter, close the Admin window, and try again in a regular PowerShell window.

### A sign-in or plan message when you first run it

Codex needs a paid ChatGPT plan (Plus, Pro, Business, Edu, or Enterprise). See [openai.com/chatgpt/pricing](https://openai.com/chatgpt/pricing), or use the free Gemini path ([[Tutorial 1001 - Install Gemini for the Terminal]]).

---

## What you can now do

- **Run `codex` from any terminal** — the CLI is installed and ready.
- **Continue to [[Tutorial 1024 - Set Up The GET for Codex]]** — download The GET's content, sign in, and start your first session.
- **Prefer a window over a terminal?** Use [[Tutorial 1022 - Set Up Codex Desktop]] or [[Tutorial 1023 - Set Up Codex in VSCode]] instead.
