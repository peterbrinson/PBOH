---
cssclasses: unreal-tutorial
publish: true
---



## 0. Introduction

**Outcome.** By the end of this tutorial, The Companion's content is on your machine, your LLM CLI is working and pointed at the folder, making you ready for [[Tutorial 1101 - Start Using The Companion]].


**Prerequisites.** [[Tutorial 1001 - Install Gemini Locally (CLI)]] complete — the Gemini CLI is installed and the `gemini` command runs.

**Learning Objectives:**
- Download The Companion's content from GitHub
- Launch Gemini and sign in with your Google account
- Point Gemini at the Companion folder
- Start your first session

<span style="color:#cb5d21">**Important — use a personal Google account.**</span> When you sign in during Chapter 2, you **must** use a personal `@gmail.com` account. School- and work-associated accounts (e.g., `@usc.edu`) usually have Gemini disabled by the organization, which will prevent the tool from working. Create a personal Gmail account if you don't already have one — it's free.

---

## 1. Download The Companion: Choose A or B

*The Companion's content — tutorials, wiki pages, role descriptions, references — lives in a public GitHub repository. You have two ways to get it onto your machine. Either works.*

### Option A. (your first time) ZIP download 

1. Go to [github.com/vLabUSC/TheCompanion](https://github.com/vLabUSC/TheCompanion).
2. Click the green **`<> Code`** button (top-right of the file list).
3. Click **Download ZIP** at the bottom of the menu that appears.
4. Extract the ZIP:
   - **Windows:** Right-click the downloaded file → **Extract All…**
   - **macOS:** Double-click the file in Finder.
5. Move the resulting folder (named `TheCompanion-main`) to your `Documents` folder, or anywhere easy to find.

<span class="hint">GitHub may cover the Download ZIP button with a "Sign in" banner. You don't need a GitHub account — dismiss the banner if it appears.</span>

### Option B. (lets you fetch updates later) Git clone 

If you already have `git` installed, this is the better path. The Companion gets updated over time; with a clone, future updates take one command (`git pull`) instead of a full re-download.

1. In your terminal, navigate to where you want the folder. For Documents:
   ```
   cd ~/Documents
   ```

2. Clone the repo:
   ```
   git clone https://github.com/vLabUSC/TheCompanion.git
   ```

3. The folder will be named `TheCompanion` (no `-main` suffix this time).

4. Later, to fetch updates: navigate into the folder and run `git pull`.

---

## 2. Launch and Sign In

*You have the runtime (Node.js), the tool (Gemini CLI), and the content (The Companion). Time to put them together.*

### A. Navigate to the folder

In your terminal, type `cd ` (with a trailing space) and then **drag the Companion folder** into the terminal window. The folder's path gets pasted automatically. Press Enter.

Example on Windows after the drag.   This is only an example, your path will be different:
cd "C:\Users\you\Documents\TheCompanion-main"


### B. Start Gemini

```
gemini
```

Press Enter. Gemini launches.

### C. Authentication method

On first launch, if Gemini asks how you want to authenticate. Pick **Sign in with Google**.

A browser window opens. Sign in with your **personal Google account**. (Avoid school/work accounts — see the Important note in the Introduction.) Allow the access Gemini requests. The browser will redirect back and Gemini will report that you're authenticated.

<span style="color:#cb5d21">**Don't miss this step:**</span> if Gemini offers **Use Gemini API key** as an option, **do not pick it** — even if you happen to have an API key from somewhere. That path uses a separate billing system with a much tighter free tier (about 25–50 requests per day, versus roughly 1,000 per day via Sign in with Google), and it does **not** apply any Google AI subscription you may have. People hit the API-key daily limit in a handful of Companion turns.

### D. Trust the folder

Gemini next asks whether to trust the current folder or its parent. Pick **the current folder** (the one called `TheCompanion-main` or `TheCompanion`, not its parent).

Trusting the folder lets Gemini read The Companion's content. Trusting the parent would extend access to everything else in `Documents`, which Gemini doesn't need.

### E. Start your first session

Once you see Gemini's prompt, type:

```
Start a Companion session.
```

Press Enter. The Companion greets you and asks what you're working on. 
### *You're set up* — continue to [[Tutorial 1101 - Start Using The Companion]].

---

## 3. Troubleshooting

### A. Gemini says "authenticated with gemini-api-key" — I wanted Sign in with Google

This means either an environment variable is forcing the API-key path, or Gemini cached a previous auth choice in its settings folder. Reset both:

**Step 1 — remove the environment variable.**

- **Windows:** Press the **Windows Key**, type `env`, select **Edit environment variables for your account**. In the *User variables* list (top box), find `GEMINI_API_KEY` → click **Delete** → OK. Close **all** open PowerShell windows so the change takes effect in new ones.
- **macOS:** Open `~/.zshrc` in a text editor and delete any line that sets `GEMINI_API_KEY`. Save, then run `source ~/.zshrc` in a fresh terminal.

**Step 2 — reset Gemini's config folder.** (Most people miss this step. Even after removing the variable, Gemini remembers your previous choice in a settings file.)

- **Windows (PowerShell):**
  ```
  Rename-Item -Path "$HOME\.gemini" -NewName ".gemini.bak"
  ```
- **macOS / Linux:**
  ```
  mv ~/.gemini ~/.gemini.bak
  ```

This **renames** the config folder rather than deleting it — your old config sits at `.gemini.bak` in case anything goes wrong.

**Step 3 — relaunch.**

```
cd <path to The Companion folder>
gemini
```

You'll be re-prompted for auth method. Pick **Sign in with Google**.

### B. My organization account doesn't work for sign-in

`@ucla.edu`, `@usc.edu`, and many other school/workplace Google accounts have Gemini disabled by the admin. Create or use a personal `@gmail.com` account instead.

### C. Hitting the daily quota almost immediately

Almost certainly still on the API-key path. Inside Gemini, run:

```
/auth
```

If it shows `gemini-api-key`, follow Troubleshooting section A above.

---

## What you can now do

- **Continue to [[Tutorial 1101 - Start Using The Companion]]** — learn the three conversation types and hold your first real Companion conversation.
- **Optional: [[Tutorial 1003 - Set Up Gemini in VSCode]]** — if you'd rather work in VSCode than a bare terminal, this brings the same Companion into a richer environment.
- **Optional: [[Tutorial 1002 - Set Up Gemini Desktop (Antigravity)]]** — if you'd prefer to use a dedicated desktop application with a richer UI.
- **Pull future updates** — if you used `git clone` in Chapter 1, run `git pull` inside the folder to receive Companion changes without re-downloading.
