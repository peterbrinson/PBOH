---
cssclasses: unreal-tutorial
publish: true
---



*Install the Gemini command-line tool — the AI runtime The Companion runs on. The next tutorial connects it to The Companion's content.*

## 0. Introduction

**Outcome.** By the end of this tutorial, the Gemini command-line interface (CLI) is installed on your computer and verified. The next tutorial — [[Tutorial 1031 - Set Up The Companion for Gemini]] — downloads The Companion's content, signs you in, and gets you to your first session.

**Time.** About 10 minutes if everything goes smoothly.

**Learning Objectives:**
- Install Node.js (the runtime Gemini CLI needs to run)
- Install the Gemini CLI itself
- Verify the `gemini` command runs

<span style="color:#cb5d21">**Important — use a personal Google account.**</span> When you sign in during Chapter 2, you **must** use a personal `@gmail.com` account. School- and work-associated accounts (e.g., `@usc.edu`) usually have Gemini disabled by the organization, which will prevent the tool from working. Create a personal Gmail account if you don't already have one — it's free.

---

## 1. Install Node.js

*The Gemini CLI runs on top of **Node.js**, a runtime that lets command-line programs written in JavaScript work on your computer. You need Node.js installed before anything else.*

### A. Open your terminal

The terminal is the text-based window where you type commands. Different name on each OS, same idea.

- **Windows:** Press the **Windows Key**, type `PowerShell`, and press Enter.
- **macOS:** Press **Cmd + Space**, type `Terminal`, and press Enter.

A window with a text prompt opens. This is where everything in this tutorial happens.

### B. Check if you already have Node.js

In the terminal, type:

```
node -v
```

Press Enter.

- If a version number prints (something like `v20.12.0`), Node.js is already installed — skip to Chapter 2.
- If you see `command not found` (macOS) or `is not recognized` (Windows), continue to section C below.

### C. Install Node.js

**Windows:**

1. Go to [nodejs.org](https://nodejs.org/).
2. Click the button labeled **LTS** (Long Term Support).
3. Run the downloaded `.msi` installer. Accept the defaults.
4. **Close your terminal window and open a fresh one.** Until you do this, the new terminal won't recognize the install.

**macOS:**

1. Go to [nodejs.org](https://nodejs.org/) and download the **LTS** `.pkg` installer.
2. Run it. Accept the defaults.
3. **Close your terminal window and open a fresh one.**

Verify by running `node -v` again. You should now see a version number.

---

## 2. Install the Gemini CLI

*Node.js comes with a tool called `npm` (Node Package Manager) that downloads and installs JavaScript-based command-line programs. We'll use it to install the Gemini CLI.*

### A. Run the install command

In the terminal:

```
npm install -g @google/gemini-cli
```

The `-g` flag means *install globally* — available from any folder, not just where you're currently sitting.

<span class="hint">macOS only: if you get a "permission denied" error, run `sudo npm install -g @google/gemini-cli` instead, and enter your Mac password when prompted.</span>

### B. Verify the install

```
gemini --version
```

You should see a version number. If you see `not recognized` or `command not found`, close the terminal window, open a fresh one, and try again — sometimes the new command isn't registered until you restart the terminal.

# *++++++++++ Gemini CLI is installed* — continue to [[Tutorial 1031 - Set Up The Companion for Gemini]].

---

## 3. Troubleshooting

### Windows: "Scripts are disabled on this system"

If `gemini` fails with `gemini.ps1 cannot be loaded because running scripts is disabled`:

1. Open PowerShell **as Administrator** (right-click PowerShell in the Start menu → **Run as administrator**).
2. Run:
   ```
   Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
   ```
3. Type `Y` and press Enter.
4. Close the Admin window. Open a regular PowerShell window and try `gemini` again.

---

## What you can now do

- **Run `gemini` from any terminal** — the CLI is installed globally and ready.
- **Continue to [[Tutorial 1031 - Set Up The Companion for Gemini]]** — download The Companion's content, sign in to Gemini, and start your first session.
