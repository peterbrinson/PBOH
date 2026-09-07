---
type: Tutorial
cssclasses: unreal-tutorial
publish: true
---

## 0. Introduction

**Outcome.** By the end of this tutorial you will have Antigravity installed, Obsidian installed, and you will have used the two of them together to reorganize a messy game project into a working team vault.

This is the same workshop as [[Tutorials - LLM/Tutorial 2020 - Your First Persistent Workspace (with Codex)|Your First Persistent Workspace (with Codex)]], but run on Antigravity instead. Do one or the other, not both. The difference that matters: **Antigravity needs no access request and no paid plan** — a personal Google account is enough. 

The project you will work on belongs to **Anthony and Deloris** — a fictional two-person student team. Their folder is a deliberate mess: duplicate design docs, three versions of the schedule, notes that contradict each other, and files with names like `GDD_v2_FINAL.md` sitting next to `GDD_v2_FINAL_deloris-comments.md`. 

**What this is actually teaching.** Three things at once:

- **The basics of Antigravity** — pointing it at a folder, reading, planning, and letting it act.
- **A persistent workspace** — a folder on disk that both you and an AI return to, instead of a chat that forgets.
- **Context engineering** — the practice of arranging files so an AI can find what matters without being told every time.

**You need:** a personal Google account, about 15 minutes of setup, and an hour or so for the workshop itself. No terminal, no GitHub account, no paid plan.

Use a **personal** Google account rather than your USC one. School accounts are often restricted by an administrator, and you will not find out until sign-in fails.



---

## 1. Install Antigravity

1. Download **Antigravity 2.0** for your computer from [antigravity.google/download](https://antigravity.google/download).
2. Install and open it.
3. Sign in with your personal Google account.

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

## 5. Open the Project in Antigravity

1. Create a new project, or open a folder.
2. When asked for a folder, choose `PHO-game-project (Improve)` — the copy, not the original, and the folder itself rather than a parent folder like Documents.
3. If Antigravity asks you to choose a model, take the **Gemini Pro** one it suggests.

Antigravity works on whatever folder you opened. That folder is the whole setup — there is nothing else to configure.

---

## 6. Ask Antigravity to Read Everything

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

Paste:

```
Please suggest how to organize things. Let's move, create, edit, and
archive whatever files and folders will make that possible. And, consider
context engineering practices such as creating indexes and the like.
Ultimately, I want this to be an Obsidian vault for the team and Antigravity
to work together moving forward.
```

For reference, when doing this activity in Claude or Codex, you would be advised to switch into "Plan Mode". Antigravity writes an **Implementation Plan**.  If it doesn't open on its own, click on its name in the response.  

Read the plan. Skimming is fine.

If you're not on the most intense model, it probably won't ask you follow-up questions, but if it does, answer them with these in mind:

- Don't use Git (yet).
- Make these edits in `PHO-game-project (Improve)`, **not** the original download.
- If it asks about the Unity game project itself, tell it to work only on these documents.
- It will likely propose drafting new files as part of the restructure. Ask it to **archive** anything made obsolete by that, rather than deleting it.
- If it asks about Obsidian, ask for a **minimal** setup.

If something in it looks wrong, you can **leave a comment directly on the plan** (with that little 'plus' button), the way you would in a Google Doc, and the agent will take the note into account without starting over. When you are satisfied, click **Proceed**.

---

## 8. Watch It Happen

Antigravity keeps a **Task List** as it works — its own running checklist, ticking off as it goes. Watch it for a moment.

You likely have to approve various permission requests.

Then switch to Obsidian. The project structure in the left navigation will reorganize itself as files move.

(Toggle back in order to check on Antigravity's permissions occasionally).

Don't edit anything until Antigravity is finished.


---

## 9. Read What It Built

Antigravity finishes by writing a **Walkthrough** — a report of what it changed and why. Read that first.

Then go to the folder itself. Start at the root of the reorganized project and read whatever is now sitting there — files like `AGENTS.md`, `GEMINI.md`, `README.md`, or a start-here note.

These are the entry points, and they are doing something different from the Walkthrough. The Walkthrough explains this one session to you. The root files explain the *project* to whoever opens it next — including the agent itself, which reads them automatically at the start of every future session in this folder. Anything written there is standing instruction, not something you have to say again.

A folder that explains itself in its own root is the difference between a workspace an AI can pick up cold and one it has to re-derive every session.

---

## 10. Ask How It Works

Ask Antigravity:

```
What are examples of context engineering you implemented? Tell me what
files determine what to load into working memory? How does that work?
```

Then:

```
Tell me about any frontmatter you added. I'm new to this concept.
```

---

## 11. Find the Context Window

Everything the agent is currently holding in mind — your conversation, the files it opened, the plan it wrote — sits in something called a **context window**. It has a size, and it fills up.

Antigravity does not show you a gauge for this. Some tools do. That is worth noticing rather than shrugging at: the limit is there whether or not the interface draws it for you, and most of what you will learn about working with these tools is about spending that space well.

So ask directly:

```
What is in my context window right now, and what happens when it fills up?
```

- If you want, you can say "Give me a shorter version of that answer".

```
Now that the project is reorganized, what would you need to read in order to answer
a question about it? How does that compare to the messy version?
```

That second question is the one this whole workshop was built to make answerable. Read the answer slowly.

---

**Next for your learning:** do this to your own material — [[Tutorials - LLM/Tutorial 2021 - Your First Queryable Knowledge Base|Your First Queryable Knowledge Base]] covers the parts this workshop left out, starting with getting real files into markdown.



---

## Troubleshooting

### I ran out of agent runs partway through

A free account limits how often you can set an agent working, and the limit refreshes on a cycle rather than all at once. Google does not publish the exact number.

**Try a different model first.** Open the model picker and switch to one of the Claude models, or to Flash. The allowances appear to be kept separately per model family, so running out of Gemini Pro does not usually mean running out of everything. 

If that does not work either, **wait**. The workshop survives being finished in two sittings, because everything lives in the folder rather than in a conversation. Reopen the project later and ask the agent to re-read the folder before continuing.

The last resort is the **terminal version** of the same tool, which has a much larger free allowance: [[Tutorials - LLM/Tutorial 1001 - Gemini Terminal Quick Start|Gemini Terminal Quick Start]] Step 1 installs it, and you can point it at the same folder and pick up where you stopped.


### It is asking me to approve every single change

Look for the artifact review setting and set it to proceed automatically. 

### It acts like a normal chatbot

Antigravity is probably looking at the wrong folder. Reopen `PHO-game-project (Improve)` itself — not Documents, not a parent folder — and start a new session.

### Sign-in does not work

Try a personal Google account rather than a school or workplace account whose administrator may restrict Gemini.

### The unzipped folder contains another folder with the same name

Windows sometimes nests the folder inside another copy of itself. Use the inner one — the one that directly contains `design/`, `development/`, and `notes and meetings/`.

### Antigravity reorganized the original instead of the copy

Delete what it touched, unzip a fresh copy from the download, and start again from Step 4 — opening the copy this time.

### I edited a file while Antigravity was still working

Ask it to re-read the folder before continuing. If the two of you have written over each other, the clean original is still on disk.
