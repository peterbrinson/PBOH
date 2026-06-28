---
type: Tutorial
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

## 1. Open your terminal

*Everything in this tutorial happens in the **terminal** — the text-based window where you type commands instead of clicking. Different name on each OS, same idea.*

- **Windows:** Press the **Windows Key**, type `PowerShell`, and press Enter.
- **macOS:** Press **Cmd + Space**, type `Terminal`, and press Enter.

A window with a text prompt opens. This is where the rest of the steps go.

---

## 2. Install Node.js

*Deep Code runs on top of **Node.js**, a runtime that lets command-line programs work on your computer. You need it installed before anything else — but you may already have it.*

### A. Check if you already have Node.js

In the terminal, type:

```
node -v
```

Press Enter.

- If a version number prints (something like `v20.12.0`), Node.js is already installed — **skip to Step 3.**
- If you see `command not found` (macOS) or `is not recognized` (Windows), continue to section B.

### B. Install Node.js

1. Go to [nodejs.org](https://nodejs.org/) and download the **LTS** installer for your OS.
2. Run it, accept the defaults, then **close and reopen your terminal**.
3. Verify by running `node -v` again. You should now see a version number.

---

## 3. Install Deep Code

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

## 4. Connect your DeepSeek API key

### A. Get the key

1. Go to the DeepSeek Platform: [platform.deepseek.com/api_keys](https://platform.deepseek.com/api_keys).
2. Create an account and add a small amount of money, like $2 (see the note above).
3. Create a new API key and **copy it** — it looks like `sk-...`. You won't be able to see it again, so copy it now.  Perhaps paste it into a temporary text document.

### B. Create the config file

Deep Code reads its settings from a file called `settings.json` inside a `.deepcode` folder in your home directory. That folder name starts with a dot, which Windows Explorer and macOS Finder make awkward to create by hand — so we'll make the folder and file right in the terminal instead. (This also sidesteps the common Windows trap where Notepad secretly saves the file as `settings.json.txt`.)

You still have the terminal open from earlier. Paste this block below for your system and press Enter — it creates the `.deepcode` folder and writes a starter `settings.json`, with a placeholder where your key will go:

**Windows (PowerShell):**
```
New-Item -ItemType Directory -Force "$env:USERPROFILE\.deepcode" | Out-Null
@'
{
  "env": {
    "MODEL": "deepseek-v4-pro",
    "BASE_URL": "https://api.deepseek.com",
    "API_KEY": "sk-REPLACE_WITH_YOUR_KEY"
  },
  "thinkingEnabled": true,
  "reasoningEffort": "max"
}
'@ | Set-Content -Path "$env:USERPROFILE\.deepcode\settings.json" -Encoding ascii
```

**macOS:**
```
mkdir -p ~/.deepcode
cat > ~/.deepcode/settings.json <<'EOF'
{
  "env": {
    "MODEL": "deepseek-v4-pro",
    "BASE_URL": "https://api.deepseek.com",
    "API_KEY": "sk-REPLACE_WITH_YOUR_KEY"
  },
  "thinkingEnabled": true,
  "reasoningEffort": "max"
}
EOF
```

### C. Add your key

Now open that file and replace the placeholder with the real key you copied. Paste the line for your system:

**Windows (PowerShell):**
```
notepad "$env:USERPROFILE\.deepcode\settings.json"
```

**macOS:**
```
open -e ~/.deepcode/settings.json
```

Find the line `"API_KEY": "sk-REPLACE_WITH_YOUR_KEY"`, swap `sk-REPLACE_WITH_YOUR_KEY` for your key from 4A (keep the quotation marks), then save and close. The line should end up reading something like `"API_KEY": "sk-9a638...your real key..."`.

<span class="hint">Keep this key private — it bills to your account. Don't paste it into chats, commits, screenshots, or anywhere public.</span>

# *Deep Code is installed* — continue to [[Tutorial 1034 - Set Up The GET for DeepSeek]].

---

## 5. Troubleshooting

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
