---
cssclasses: unreal-tutorial
publish: true
---



*Get the Gemini AI tutor running on your machine so it can help you plan projects, work through tutorials, and answer concept questions.*

## 0. Introduction

**Outcome.** By the end of this tutorial, the Gemini command-line interface (CLI) is installed on your computer, connected to your Google account, and pointed at The Companion's content. You'll have typed `Start a Companion session.` and gotten the first greeting back — ready for [[UE Tutorial 1031 - Getting Started with the Companion]] to learn what to do next.

**Time.** About 15 minutes if everything goes smoothly.

**Learning Objectives:**
- Install Node.js (the runtime Gemini CLI needs to run)
- Install the Gemini CLI itself
- Download The Companion's content from GitHub
- Launch Gemini, sign in with Google, and start your first session

<span style="color:#cb5d21">**Important — use a personal Google account.**</span> When you sign in during Chapter 4, you **must** use a personal `@gmail.com` account. School- and work-associated accounts (e.g., `@usc.edu`) usually have Gemini disabled by the organization, which will prevent the tool from working. Create a personal Gmail account if you don't already have one — it's free.

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

---

## 3. Download The Companion: Choose A or B

*The Companion's content — tutorials, wiki pages, role descriptions, references — lives in a public GitHub repository. You have two ways to get it onto your machine. Either works.*

### Option A. (your first time) ZIP download 

1. Go to [github.com/peterbrinson/TheCompanion](https://github.com/peterbrinson/TheCompanion).
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
   git clone https://github.com/peterbrinson/TheCompanion.git
   ```

3. The folder will be named `TheCompanion` (no `-main` suffix this time).

4. Later, to fetch updates: navigate into the folder and run `git pull`.

---

## 4. Launch and Sign In

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
### *You're set up* — continue to [[UE Tutorial 1031 - Getting Started with the Companion]].

---

## 5. Troubleshooting

### A. Windows: "Scripts are disabled on this system"

If `gemini` fails with `gemini.ps1 cannot be loaded because running scripts is disabled`:

1. Open PowerShell **as Administrator** (right-click PowerShell in the Start menu → **Run as administrator**).
2. Run:
   ```
   Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
   ```
3. Type `Y` and press Enter.
4. Close the Admin window. Open a regular PowerShell window and try `gemini` again.

### B. Gemini says "authenticated with gemini-api-key" — I wanted Sign in with Google

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

### C. My organization account doesn't work for sign-in

`@ucla.edu`, `@usc.edu`, and many other school/workplace Google accounts have Gemini disabled by the admin. Create or use a personal `@gmail.com` account instead.

### D. Hitting the daily quota almost immediately

Almost certainly still on the API-key path. Inside Gemini, run:

```
/auth
```

If it shows `gemini-api-key`, follow Troubleshooting section B above.

---

## What you can now do

- **Continue to [[UE Tutorial 1031 - Getting Started with the Companion]]** — the main next step. Learn how to talk to the Companion through the three conversation types.
- **Optional: [[UE Tutorial 1002 - Set Up Gemini in VSCode]]** — if you'd rather work in VSCode than a bare terminal, this brings the same Companion into a richer environment.
- **Pull future updates** — if you used `git clone` in Chapter 3, run `git pull` inside the folder to receive Companion changes without re-downloading.
