---
type: Tutorial
cssclasses: unreal-tutorial
publish: true
---

## 0. Introduction

**Outcome.** By the end of this tutorial you will have Claude installed, Obsidian installed, and you will have used the two of them together to reorganize a messy game project into a working team vault.

This is the same workshop as [[Tutorial 2020 - Your First Persistent Workspace (with Codex)|Your First Persistent Workspace (with Codex)]], but run on Claude Code instead. Do one or the other, not both. The difference that matters: **Claude is not provided through USC — you pay for it yourself**, the same as anyone else. The **Pro** plan (about $20 a month, cancel any time) includes Claude Code, which is everything this workshop needs. The free plan does not include Claude Code.

The project you will work on belongs to **Anthony and Deloris** — a fictional two-person student team. Their folder is a deliberate mess: duplicate design docs, three versions of the schedule, notes that contradict each other, and files with names like `GDD_v2_FINAL.md` sitting next to `GDD_v2_FINAL_deloris-comments.md`.

**What this is actually teaching.** Three things at once:

- **The basics of Claude Code** — pointing it at a folder, reading, planning, and letting it act.
- **A persistent workspace** — a folder on disk that both you and an AI return to, instead of a chat that forgets.
- **Context engineering** — the practice of arranging files so an AI can find what matters without being told every time.

**You need:** a Claude Pro (or higher) subscription, about 15 minutes of setup, and an hour or so for the workshop itself. No terminal, no GitHub account.

---

## 1. Install Claude Desktop

1. Go to [claude.com/pricing](https://claude.com/pricing) and subscribe to **Pro**, if you don't already have a paid plan.
2. Download the desktop app from [claude.com/download](https://claude.com/download).
3. Install and open it.
4. Sign in with the account that has the paid plan.
5. Switch to **Code**.

---

## 2. Download Obsidian

1. Go to [obsidian.md](https://obsidian.md/).
2. Click **Get Obsidian** and choose your operating system.
3. Download the installer.

---

## 3. Install Obsidian

1. Run the installer and follow the prompts.
2. Open Obsidian once installation finishes.

---

## 4. Get the Workshop Project

1. Download [**PHO-game-project.zip**](https://peterbrinson.github.io/PBOH/Development/Tutorials---LLM/attachments/PHO-game-project.zip) and unzip it.
2. Make a **copy** of the root folder, `PHO-game-project`.
3. Rename the copy to `PHO-game-project (Improve)`.

Keep the original untouched. It is your clean starting point.

Now open the copy in Obsidian:

1. In Obsidian, choose **Open folder as vault**.
2. Select `PHO-game-project (Improve)`.

A vault is just a folder. Every note in it is a plain `.md` (markdown) text file sitting on your own computer — Obsidian is only a nice window onto files that already exist.

Take a minute to look around the left sidebar before anything changes. The mess is the point.

---

## 5. Open the Project in Claude

1. In Claude's **Code** area, start a new local session.
2. When asked for a folder, choose `PHO-game-project (Improve)` — the copy, not the original, and the folder itself rather than a parent folder like Documents.
3. Keep the model it suggests.

Claude Code works on whatever folder you opened. That folder is the whole setup — there is nothing else to configure.

---

## 6. Ask Claude to Read Everything

Paste this:

```
This is the design and production folder of two game students working together. Not me.
It's messy. Read through it all and orient me to their collaboration and
their ideas but don't give your advice or take on the merits of the idea.
Think like a project manager who is trying to organize for the sake of
comprehension.
```

It will take a while, and the answer will be long. Skim it.

Notice what it can tell you that a folder listing cannot: where Anthony and Deloris **disagree**, which documents are in fact current, and what meeting decisions never made it into the design doc.

Then ask for less:

```
Ok. That's a long response. Summarize in 2 paragraphs or
equivalent bullet points.
```

Read that.

---

## 7. Make a Plan

Switch to **Plan mode**. It's in the permission-mode menu next to the prompt box (the same menu that says *Ask permissions*). In Plan mode, Claude proposes what it intends to do before it does any of it.

Paste:

```
Please suggest how to organize things. Let's move, create, edit, and
archive whatever files and folders will make that possible. And, consider
context engineering practices such as creating indexes and the like.
Ultimately, I want this to be an Obsidian vault for the team and Claude to
work together moving forward.
```

It will probably ask you some questions. Answer them with these in mind:

- Don't use Git (yet).
- Make these edits in `PHO-game-project (Improve)`, **not** the original download.
- If it asks about the Unity game project itself, tell it to work only on these documents.
- It will likely propose drafting new files as part of the restructure. Ask it to **archive** anything made obsolete by that, rather than deleting it.
- If it asks about Obsidian, ask for a **minimal** setup.

Read the plan. Skimming is fine.

You can tell it what to change, or just approve the plan and let it start.

---

## 8. Watch It Happen

Claude keeps a task list as it works, ticking items off as it goes. Watch it for a moment.

You will likely have to approve permission requests as it edits files. That's the normal setting doing its job.

Then switch to Obsidian. The project structure in the left navigation will reorganize itself as files move. (Toggle back occasionally to approve whatever Claude is waiting on.)

Don't edit anything until Claude is finished.

---

## 9. Read What It Built

Start at the root of the reorganized folder and read whatever is now sitting there — files like `CLAUDE.md`, `README.md`, or a start-here note.

These are the entry points. `CLAUDE.md` in particular is read by Claude automatically at the start of every future session in this folder — anything written there is standing instruction, not something you have to say again.

A folder that explains itself in its own root is the difference between a workspace an AI can pick up cold and one it has to re-derive every session.

---

## 10. Ask How It Works

Ask Claude:

```
What are examples of context engineering you implemented? Tell me what
files determine what to load into working memory? How does that work?
```

Then:

```
Tell me about any frontmatter you added. I'm new to this concept.
```

---

## 11. Look at Your Context Window

Everything Claude is currently holding in mind — your conversation, the files it opened, the plan it wrote — sits in something called a **context window**. It has a size, and it fills up.

To see it, type:

```
/context
```

Claude draws a breakdown of how full the window is and what's taking up the space.

Then ask about it directly:

```
What is in my context window right now, and what happens when it fills up?
```

```
Now that the project is reorganized, what would you need to read in order to answer
a question about it? How does that compare to the messy version?
```

That second question is the one this whole workshop was built to make answerable. Read the answer slowly.

---

**Next:** do this to your own material — [[Tutorial 2030 - Your First Queryable Knowledge Base|Your First Queryable Knowledge Base]] covers the parts this workshop left out, starting with getting real files into markdown.

With Claude installed and Obsidian installed, you can also continue to [[Tutorial 1015 - Claude Code Desktop Quick Start|Claude Code Desktop]] to set up PBOH.

---

## Troubleshooting

### Code is missing or asks me to upgrade

The account you signed in with is on the free plan, or on a work/school organization that has Claude Code switched off. Sign in with the account that has Pro.

### I hit a usage limit partway through

Pro has a usage allowance that refills every few hours. The message will tell you when. The workshop survives being finished in two sittings, because everything lives in the folder rather than in a conversation. Come back later, reopen the same folder, and ask Claude to re-read it before continuing.

### Claude acts like a normal chatbot

It's probably looking at the wrong folder, or you're in Chat rather than Code. Start a new local Code session on `PHO-game-project (Improve)` itself — not Documents, not a parent folder.

### Windows mentions Git

Install Git with its default options, fully quit Claude, and reopen it.

### The unzipped folder contains another folder with the same name

Windows sometimes nests the folder inside another copy of itself. Use the inner one — the one that directly contains `design/`, `development/`, and `notes and meetings/`.

### Claude reorganized the original instead of the copy

Delete what it touched, unzip a fresh copy from the download, and start again from Step 4 — opening the copy this time.

### I edited a file while Claude was still working

Ask it to re-read the folder before continuing. If the two of you have written over each other, the clean original is still on disk.
