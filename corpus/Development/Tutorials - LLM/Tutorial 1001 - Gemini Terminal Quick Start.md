---
type: Tutorial
cssclasses: unreal-tutorial
publish: true
---

## 0. Introduction

**Outcome.** By the end of this tutorial, Gemini CLI is installed, pointed at PBOH, and used for your first GET conversation and Prototype Plan.

Use this path only if you prefer a terminal. For the simplest graphical route, use [[Tutorials - LLM/Tutorial 1005 - Antigravity Quick Start|Antigravity Quick Start]].

**You need:** a personal Google account, Node.js 20 or newer, an internet connection, and about 15 minutes.

---

## 1. Install Gemini CLI

Open **PowerShell** on Windows or **Terminal** on macOS.

Check Node.js:

```
node -v
```

If the version is below 20 or the command is missing, install the current **LTS** release from [nodejs.org](https://nodejs.org/), then reopen the terminal.

Install and verify Gemini CLI:

```
npm install -g @google/gemini-cli
gemini --version
```

---

## 2. Download PBOH

1. Go to [github.com/peterbrinson/PBOH](https://github.com/peterbrinson/PBOH).
2. Click **Code** → **Download ZIP**.
3. Unzip it, rename `PBOH-main` to `PBOH`, and move it to Documents.

---

## 3. Launch Gemini in PBOH Folder

In the terminal, change into the folder. One easy method is to type `cd `, drag the `PBOH` folder into the terminal, and press Enter.

Then run:

```
gemini
```

Sign in with your personal Google account and trust the folder when asked.

---

## 4. Start, Talk, and Save

Type:

```
Start a PBOH session.
```

Describe a project idea in 4 to 8 sentences and continue until PBOH produces a Prototype Plan. Accept its offer to save the file to `student-notes-private/projects/`.

If this is a class submission, add `Tool: Gemini CLI` near the top and save the transcript if your instructor requests it.

Continue with [[Tutorials - LLM/Tutorial 1101 - Keep Using PBOH|Keep Using PBOH]].

---

## Troubleshooting

### `gemini` is not recognized

Close every terminal, open a fresh one, and try `gemini --version` again.

### PowerShell says scripts are disabled

Open PowerShell as Administrator and run:

```
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

Close the Administrator window and return to a regular PowerShell window.
