---
type: Tutorial
cssclasses: unreal-tutorial
publish: true
---

## 0. Introduction

**Outcome.** By the end of this tutorial you have The Game Engine Tutor on your computer, reachable through **Deep Code** (a terminal agent running on the DeepSeek model), and you've held your first GET conversation — brought an idea for a game, talked it through, and saved the plan it gave you.

This is the everything-on-one-page path. **No GitHub account, no git.** You do need three things:

- A terminal (this path can't avoid it — DeepSeek has no desktop app)
- A **DeepSeek account with a small amount of credit** — pay-as-you-go, not free (see the note below)
- An internet connection

> [!NOTE]
> **DeepSeek works a little differently from Gemini/Claude/Codex.** Those tools each ship their own agent. DeepSeek doesn't — it's the AI model, reached through a separate community tool called **Deep Code**. That means terminal-only (no desktop app), and pay-as-you-go billing through an API key rather than a subscription or a free tier. If you'd rather avoid a paid step entirely, [[Tutorial 1005 - Antigravity Quick Start|the Gemini quick start]] is free with a personal Google account.

**Before you start, consider.** Soon, you will share a rough idea for a game — a description of what you're working on in class now, or instead one you've thought of today. The GET can frame your idea through the Situated Player Roles — **The Investigator** and **The Traveler** — *or* the **Bounded Worlds** framework. You've studied these in class and you are encouraged to embrace one or more of them when you draft your idea. If you want to refresh, the pages are on the class site: [Situated Player Roles](https://vlabusc.github.io/The-GET/Design/Storytelling/) and [Bounded Worlds](https://vlabusc.github.io/The-GET/Design/Worldbuilding/).

---

## 1. Open Your Terminal

- **Windows:** Windows Key → type `PowerShell` → Enter
- **macOS:** Cmd + Space → type `Terminal` → Enter

Everything below happens here.

---

## 2. Install Node.js (if you don't have it)

*Deep Code runs on top of Node.js, a runtime for command-line programs.*

> [!NOTE]
> This step is just a check — it doesn't change anything on your computer. If you get an error, that's fine and expected if you don't have Node yet; the next line tells you what to do about it.

Type:

```
node -v
```

- If a version number prints (like `v20.12.0`), skip to Step 3.
- If you see `command not found` or `is not recognized`: go to [nodejs.org](https://nodejs.org/), download the **LTS** installer for your OS, run it with defaults, then **close and reopen your terminal**. Verify with `node -v` again.

---

## 3. Install Deep Code

```
npm install -g @vegamo/deepcode-cli
```

Verify:

```
deepcode --version
```

You should see a version number. If not: close the terminal, open a fresh one, and try again.

---

## 4. Get a DeepSeek API Key and Add Credit

1. Go to [platform.deepseek.com/api_keys](https://platform.deepseek.com/api_keys).
2. Create an account and add a small amount of credit — around $2 is plenty to start.
3. Create a new API key and **copy it** — it looks like `sk-...`. You won't be able to see it again, so paste it somewhere temporary (a blank text document) until Step 5 is done.

<span style="color:#cb5d21">**Keep this key private.**</span> It bills to your account — don't paste it into chats, commits, screenshots, or anywhere public.

---

## 5. Configure Deep Code With Your Key

Deep Code reads its settings from `settings.json` inside a `.deepcode` folder in your home directory. We'll create both from the terminal — this avoids the usual dotfile/Notepad pitfalls.

Paste the block for your system into the terminal from Step 1 and press Enter:

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

Now open the file and swap in your real key:

**Windows:** `notepad "$env:USERPROFILE\.deepcode\settings.json"`
**macOS:** `open -e ~/.deepcode/settings.json`

Find `"API_KEY": "sk-REPLACE_WITH_YOUR_KEY"`, replace `sk-REPLACE_WITH_YOUR_KEY` with your real key from Step 4 (keep the quotation marks), then save and close.

---

## 6. Download The GET

1. In your browser, go to **[github.com/vLabUSC/The-GET](https://github.com/vLabUSC/The-GET)**.
2. Click the green **Code** button (top-right of the file list).
3. Click **Download ZIP**.

<span class="hint">GitHub may cover the button with a "Sign in" banner. You don't need an account — dismiss it.</span>

4. Unzip it:
   - **Windows:** right-click the downloaded file → **Extract All…**
   - **macOS:** double-click the downloaded file
5. You now have a folder named **`The-GET-main`**. Move it somewhere you can find again — your **Documents** folder is good.
6. **Rename** the folder from `The-GET-main` to **`The-GET`**.

<span style="color:#cb5d21">**Don't miss this step:**</span> after unzipping, open the folder and check what's inside. You should see folders named `agent/` and `corpus/` directly inside.

---

## 7. Point Deep Code at the Folder and Launch It

In your terminal:

```
cd ~/Documents/The-GET
deepcode
```

<span class="hint">Tip: if you're typing instead of pasting, type `cd ` (with a trailing space), then drag the `The-GET` folder from Explorer/Finder into the terminal window so the path fills itself in, then press Enter.</span>

---

## 8. Start a GET Session

At the Deep Code prompt, type this — or the same request in your own language:

```
Read the file AGENTS.md in this folder and follow it to act as The GET. Then start a GET session.
```

**Japanese**

```
このフォルダ内の AGENTS.md を読み、それに従って The GET として振る舞ってください。それから GET セッションを始めてください。
```

**Chinese**

```
请阅读此文件夹中的 AGENTS.md,并按照其中的说明扮演 The GET。然后开始一个 GET 会话。
```

**Spanish**

```
Lee el archivo AGENTS.md en esta carpeta y síguelo para actuar como The GET. Luego inicia una sesión con el GET.
```

<span style="color:#cb5d21">**Why the long prompt:**</span> Gemini, Claude Code, and Codex automatically read an instructions file when they start. Deep Code doesn't always do this, so we point it straight at `AGENTS.md` — the file that tells it how to be the tutor. After that, it behaves the same as on any other tool.

The GET will greet you and ask what you're working on. It knows the roles you've learned — **The Investigator**, **The Traveler** — and the **Bounded Worlds** framework. Any of these is a fine place to start.

---

## 9. Bring Your Idea

Tell The GET about an idea you have. Something concrete is best — describe the **experience**, more than the mechanics.

You don't need a finished concept. A situation you can picture is enough — perhaps 4 to 8 sentences. It can be half-baked. There can be unknowns.

> [!NOTE]
> You can write to The GET in your own language if you prefer. Its pages are in English, but the conversation doesn't have to be.

---

## 10. Save What You Get

After some back and forth, The GET will deliver a **Prototype Map** — you'll know it when you see it (it announces itself by name, includes concrete sections, and might include a "Build Order"). Three things:

- **Note which tool you used**, near the top of the saved file — for example: *"Tool: DeepSeek"*. Takes a second, and it means anyone comparing results across different AI tools later can actually tell them apart.
- Ask it to **save the Prototype Map to a file** in the folder — for example: *"save this Prototype Map to prototype-map.md"*.
- If your instructor asks for it, also **copy the whole conversation** into a text file. The conversation itself is the most useful thing to see.

---

## Troubleshooting

### `deepcode` isn't recognized

Close every open terminal window and open a brand-new one — new commands aren't registered until you restart the terminal. Reinstall from Step 3 if it still fails.

### It runs, but doesn't act like the tutor

Two things to check: you opened **the GET folder itself** (`The-GET`), and your prompt told Deep Code to **read `AGENTS.md`** (Step 8). Without that pointer, it won't load the tutor instructions.

### An authentication or API-key error

Open `settings.json` again (Step 5) and check: the key is pasted in full (starts with `sk-`), the file is named exactly `settings.json` (not `settings.json.txt`), and it sits in the `.deepcode` folder in your home directory. Also confirm your DeepSeek account has credit.

### Windows: "running scripts is disabled on this system"

1. Open PowerShell **as Administrator** (right-click PowerShell → **Run as administrator**).
2. Run:
   ```
   Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
   ```
3. Type `Y`, press Enter, close the Admin window, and try again in a regular PowerShell window.

### I can't find the folder I unzipped

Check your **Downloads** folder — unzipped folders land next to the ZIP file. Move the folder to Documents and continue from Step 6, item 5.
