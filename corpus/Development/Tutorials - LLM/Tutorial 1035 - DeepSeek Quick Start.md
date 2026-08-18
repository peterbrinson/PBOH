---
type: Tutorial
cssclasses: unreal-tutorial
publish: true
---

## 0. Introduction

**Outcome.** By the end of this tutorial, Deep Code is connected to DeepSeek, pointed at PBOH, and used for your first saved Prototype Plan.

This is the shortest supported DeepSeek route. It does not require GitHub or git, but it does require a terminal, a DeepSeek API key, and a small pay-as-you-go balance.

> [!NOTE]
> DeepSeek provides the model, not the agent. This tutorial uses **Deep Code**, a third-party community tool. If you want a free graphical path, use [[Tutorials - LLM/Tutorial 1005 - Antigravity Quick Start|Antigravity Quick Start]].

---

## 1. Open Your Terminal

- **Windows:** Windows Key → type `PowerShell` → Enter
- **macOS:** Cmd + Space → type `Terminal` → Enter

---

## 2. Install Node.js and Deep Code

Check Node.js:

```
node -v
```

If the command is missing, install the current **LTS** release from [nodejs.org](https://nodejs.org/) and reopen the terminal.

Install and verify Deep Code:

```
npm install -g @vegamo/deepcode-cli
deepcode --version
```

---

## 3. Create a DeepSeek API Key

1. Go to [platform.deepseek.com/api_keys](https://platform.deepseek.com/api_keys).
2. Create an account and add a small amount of credit.
3. Create and copy an API key beginning with `sk-`.

<span style="color:#cb5d21">**Keep the key private.**</span> It bills to your account. Never paste it into a chat, assignment, screenshot, or public file.

---

## 4. Configure Deep Code

Deep Code reads `settings.json` from a `.deepcode` folder in your home directory.

Paste the block for your computer.

**Windows PowerShell:**

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
notepad "$env:USERPROFILE\.deepcode\settings.json"
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
open -e ~/.deepcode/settings.json
```

Replace `sk-REPLACE_WITH_YOUR_KEY` with the key from Chapter 3. Keep the quotation marks, then save and close the file.

---

## 5. Download PBOH

1. Go to [github.com/peterbrinson/PBOH](https://github.com/peterbrinson/PBOH).
2. Click **Code** → **Download ZIP**.
3. Unzip it, rename `PBOH-main` to `PBOH`, and move it to Documents.
4. Check that `AGENTS.md`, `agent/`, and `corpus/` are directly inside it.

---

## 6. Launch Deep Code in PBOH Folder

Type `cd `, drag the `PBOH` folder into the terminal, and press Enter. Then run:

```
deepcode
```

---

## 7. Start, Talk, and Save

Deep Code may not automatically load the guide instructions, so begin with:

```
Read AGENTS.md in this folder and follow it to act as PBOH. Then start a PBOH session.
```

Describe a project idea in 4 to 8 sentences and continue until PBOH produces a Prototype Plan. Let it save the plan to `student-notes-private/projects/`.

If this is a class submission, add `Tool: DeepSeek (Deep Code)` near the top and save the transcript if your instructor requests it.

Continue with [[Tutorials - LLM/Tutorial 1101 - Keep Using PBOH|Keep Using PBOH]].

---

## Troubleshooting

### `deepcode` is not recognized

Close every terminal, open a new one, and try `deepcode --version` again.

### It does not act like PBOH

Confirm that the terminal is inside the folder containing `AGENTS.md`, then use the full starting prompt from Chapter 7.

### Authentication fails

Check that the key is complete, `settings.json` is inside your home `.deepcode` folder, and the DeepSeek account has credit.

### PowerShell says scripts are disabled

Open PowerShell as Administrator and run:

```
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

Close the Administrator window and continue in a regular PowerShell window.
