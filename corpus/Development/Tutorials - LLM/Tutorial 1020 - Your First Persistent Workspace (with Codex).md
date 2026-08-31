---
type: Tutorial
cssclasses: unreal-tutorial
publish: true
---

## 0. Introduction

**Outcome.** By the end of this tutorial you will have Codex access approved, Obsidian installed, and you will have used the two of them together to reorganize a messy game project into a working team vault.

The project you will work on belongs to **Anthony and Deloris** — a two-person student team who are not real. Their folder is a deliberate mess: duplicate design docs, three versions of the schedule, notes that contradict each other, and files with names like `GDD_v2_FINAL.md` sitting next to `GDD_v2_FINAL_deloris-comments.md`. Nothing in it is your project, and you are not being asked to judge their game.

**What this is actually teaching.** Three things at once:

- **The basics of Codex** — pointing it at a folder, reading, planning, and letting it act.
- **A persistent workspace** — a folder on disk that both you and an AI return to, instead of a chat that forgets.
- **Context engineering** — the practice of arranging files so an AI can find what matters without being told every time.

**You need:** a USC email account, about 15 minutes of setup, and an hour or so for the workshop itself. Codex access takes USC IT some time to grant, so start Step 1 well before you plan to do the rest.

---

## 1. Request Codex Access from USC IT

You should have already requested Codex access from USC IT — see [USC's ChatGPT Edu workspace announcement](https://itservices.usc.edu/2026/02/26/new-features-now-available-in-uscs-chatgpt-edu-workspace/) for how to request it if you haven't.

Once USC IT has granted it, you can continue.

---

## 2. Download Obsidian

1. Go to [obsidian.md](https://obsidian.md/).
2. Click **Get Obsidian** and choose your operating system.
3. Download the installer.

---

## 3. Install Obsidian

1. Run the installer and follow the prompts.
2. Open Obsidian once installation finishes.

Leave it open. You will point it at a folder in the next step.

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

## 5. Install the ChatGPT Desktop App

1. Download the desktop app from [chatgpt.com/download](https://chatgpt.com/download/).
2. Install and open it.
3. Sign in with the ChatGPT account that has Codex access.
4. Open the Codex or local-work area.

---

## 6. Open the Project in Codex

1. In Codex, make a **new project**.
2. Point it at `PHO-game-project (Improve)` — the copy, not the original.
3. Set the model to **5.6 Sol**, reasoning **Medium**.

---

## 7. Ask Codex to Read Everything

Paste this:

```
This is the design and production folder of two game students working together. Not me.
It's messy. Read through it all and orient me to their collaboration and
their ideas but don't give your advice or take on the merits of the idea.
Think like a project manager who is trying to organize for the sake of
comprehension.
```

It will take a while, and the answer will be long. Skim it.

Notice what it can tell you that a folder listing cannot: where Anthony and Deloris **disagree**, which documents are in fact current, and what meeting decisions  never made it into the design doc.

Then ask for less:

```
Ok. That's a long response. Summarize in 2 paragraphs or
equivalent bullet points.
```

Read that. 

---

## 8. Make a Plan

Click the **plus button** next to the chat interface and choose **Plan Mode**. In Plan Mode, Codex proposes what it intends to do before it does any of it.

Paste:

```
Please suggest how to organize things. Let's move, create, edit, and
archive whatever files and folders will make that possible. And, consider
context engineering practices such as creating indexes and the like.
Ultimately, I want this to be an Obsidian vault for the team and Codex to
work together moving forward.
```

It will probably ask you some questions. Answer them with these in mind:

- Don't use Git (yet).
- Make these edits in `PHO-game-project (Improve)`, **not** the original download.
- If it asks about the Unity game project itself, tell it to work only on these documents.
- It will likely propose drafting new files as part of the restructure. Ask it to **archive** anything made obsolete by that, rather than deleting it.
- If it asks about Obsidian, ask for a **minimal** setup.

Read the plan. Skimming is fine.

You can edit the plan or just tell it to **implement the plan**.

---

## 9. Watch It Happen

Switch to Obsidian while Codex works. The project structure in the left navigation will reorganize itself as files move.

Don't edit anything until Codex is finished. 

---

## 10. Read What It Built

Start at the root of the reorganized folder and read whatever is now sitting there — files like `AGENTS.md`, `README.md`, or a start-here note.

These are the entry points. A folder that explains itself in its own root is the difference between a workspace an AI can pick up cold and one it has to re-derive every session.

---

## 11. Ask How It Works

Ask Codex:

```
What are examples of context engineering you implemented? Tell me what
files determine what to load into working memory? How does that work?
```

Then:

```
Tell me about any frontmatter you added. I'm new to this concept.
```


---

## 12. Look at Your Context Window

In the prompt area, next to the model dropdown, there is a small **incomplete circle**. Hover over it.

That is your context window — how much of the conversation and the files Codex is currently holding in mind. 

Ask Codex about it directly. Some worth asking:

```
What is in my context window right now, and what happens when it fills up?
```

```
Now that the project is reorganized, what would you need to read in order to answer
a question about it? How does that compare to the messy version?
```



---

With Codex access granted and Obsidian installed, you can continue to [[Tutorials - LLM/Tutorial 1021 - Codex Terminal Quick Start|Codex Terminal]] or [[Tutorials - LLM/Tutorial 1025 - Codex Desktop Quick Start|Codex Desktop]].

---

## Troubleshooting


### The unzipped folder contains another folder with the same name

Windows sometimes nests the folder inside another copy of itself. Use the inner one — the one that directly contains `design/`, `development/`, and `notes and meetings/`.

### Codex reorganized the original instead of the copy

Delete what it touched, unzip a fresh copy from the download, and start again from Step 4 — telling it explicitly which folder to work in.

### I edited a file while Codex was still working

Ask it to re-read the folder before continuing. If the two of you have written over each other, the clean original is still on disk.
