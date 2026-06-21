---
cssclasses: unreal-tutorial
publish: true
---




## 0. Introduction

**Outcome.** By the end of this tutorial, **Deep Code** — a terminal agent that runs on the DeepSeek model — is installed, connected to your DeepSeek API key, and verified. The next tutorial — [[Tutorial 1034 - Set Up The GET for DeepSeek]] — downloads The GET's content and gets you to your first session.

**Time.** About 15 minutes.

**Learning Objectives:**
- Install the Deep Code CLI
- Get a DeepSeek API key and put it in Deep Code's config
- Verify the `deepcode` command runs

> [!NOTE]
> **DeepSeek works a little differently from the others.** Gemini, Claude Code, and Codex each make their *own* agent. DeepSeek doesn't — it provides the AI model, and you reach it through a separate **community tool called Deep Code**. There's no DeepSeek desktop app or VSCode tutorial here; the terminal is the path. Because it's a third-party tool, expect a bit more setup, and steps may shift over time.

<span style="color:#cb5d21">**Important — DeepSeek is pay-as-you-go, not free and not a subscription.**</span> Deep Code reaches DeepSeek through an **API key**, which bills by usage (it's inexpensive, but you do add a small amount of credit to your DeepSeek account). This is unlike the free Gemini path. If you'd prefer free, use Gemini instead ([[Tutorial 1001 - Install Gemini for the Terminal]]).

---

## 1. Install Node.js

*Deep Code runs on **Node.js**. Install it first if you don't have it.*

1. Go to [nodejs.org](https://nodejs.org/) and download the **LTS** installer for your OS.
2. Run it, accept the defaults, then **close and reopen your terminal**.
3. Check it worked — in the terminal, run `node -v`. A version number (like `v20.12.0`) means you're set.

<span class="hint">To open the terminal: **Windows** — press the Windows Key, type `PowerShell`, Enter. **macOS** — Cmd + Space, type `Terminal`, Enter.</span>

---

## 2. Install Deep Code

In the terminal:

```
npm install -g @vegamo/deepcode-cli
```

The `-g` means *install globally* — available from any folder. Then verify:

```
deepcode --version
```

You should see a version number. If you see `not recognized` or `command not found`, close the terminal, open a fresh one, and try again.

---

## 3. Connect your DeepSeek API key

### A. Get the key

1. Go to the DeepSeek Platform: [platform.deepseek.com/api_keys](https://platform.deepseek.com/api_keys).
2. Create an account and add a small amount of credit (see the Important note above).
3. Create a new API key and **copy it** — it looks like `sk-...`. You won't be able to see it again, so copy it now.

### B. Save it in Deep Code's config file

Deep Code reads its settings from a file called `settings.json` in a `.deepcode` folder in your home directory. Create it with any text editor:

- **Windows:** `C:\Users\<your-name>\.deepcode\settings.json`
- **macOS:** `~/.deepcode/settings.json`

Paste this in, replacing `sk-...` with your key:

```json
{
  "env": {
    "MODEL": "deepseek-v4-pro",
    "BASE_URL": "https://api.deepseek.com",
    "API_KEY": "sk-..."
  },
  "thinkingEnabled": true,
  "reasoningEffort": "max"
}
```

Save the file.

<span class="hint">On Windows, if your text editor adds a `.txt` ending, the file becomes `settings.json.txt` and won't work. Make sure it's saved as exactly `settings.json` (in the editor's Save dialog, set "Save as type" to **All Files**).</span>

# *++++++++++ Deep Code is installed* — continue to [[Tutorial 1034 - Set Up The GET for DeepSeek]].

---

## 4. Troubleshooting

### `deepcode` isn't recognized after installing

Close every open terminal window and open a brand-new one — new commands aren't registered until you restart the terminal.

### It runs but reports an authentication or API-key error

Open `settings.json` again and check: the key is pasted in full (starts with `sk-`), the file is named exactly `settings.json` (not `settings.json.txt`), and it sits in the `.deepcode` folder in your home directory. Also confirm your DeepSeek account has credit.

### Windows: "running scripts is disabled on this system"

1. Open PowerShell **as Administrator** (right-click PowerShell → **Run as administrator**).
2. Run:
   ```
   Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
   ```
3. Type `Y`, press Enter, close the Admin window, and try again in a regular PowerShell window.

---

## What you can now do

- **Run `deepcode` from any terminal** — the agent is installed and pointed at DeepSeek.
- **Continue to [[Tutorial 1034 - Set Up The GET for DeepSeek]]** — download The GET's content and start your first session.
- **Want a free path instead?** Gemini is free with a personal Google account ([[Tutorial 1001 - Install Gemini for the Terminal]]).
