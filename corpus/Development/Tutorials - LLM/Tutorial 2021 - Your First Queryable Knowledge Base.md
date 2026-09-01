---
type: Tutorial
cssclasses: unreal-tutorial
publish: true
aliases: ["Tutorial 2021 - Your First Queryable Knowledge Bundle"]
---

## 0. Introduction

**Outcome.** By the end of this tutorial a slice of your own material — a course you teach, a research area, a project's documents — is a working knowledge base: a folder you can ask questions of, that an AI can pick up cold, and that you can keep adding to.

In [[Tutorials - LLM/Tutorial 2020 - Your First Persistent Workspace (with Codex)|Your First Persistent Workspace]] you did this to somebody else's mess. That folder was chosen to be easy: it was small, it was already markdown, and none of it was yours to have opinions about. Your own material is none of those things. This tutorial is about the difference.

**What this is actually teaching.** Four things 2020 left out:

- **Scope** — choosing a slice small enough to finish.
- **Conversion** — getting real files out of Word, Google Docs, and PDFs and into plain text.
- **Authorship** — the parts an AI shouldn't decide for you: your vocabulary, your structure, your standing instructions.
- **Upkeep** — what makes it a living folder rather than a one-time cleanup.

**You need:** an AI coding agent already working on your machine and Obsidian installed — both covered in 2020 — plus material of your own. Budget an hour or two, and expect to come back to it.

---

## 1. Choose Your Slice

Pick one thing you already know well: a single course, a single research area, one project's documents. Not a whole drive, not "all my teaching."

Somewhere between 20 and 200 files is the right size. Small enough to finish in a sitting, big enough that finding things by hand is genuinely annoying — which is the feeling this is supposed to relieve.

The temptation is to start with the biggest mess you own. Resist it. A large folder produces a reorganization you can't check, and if you can't check it you won't trust it, and if you don't trust it you won't use it.

---

## 2. Make a Copy

Copy the folder. Work only on the copy. Name it something obvious like `<project> (KB)`.

This is the same discipline as 2020, and it matters more here because this material is real. Everything below is reversible as long as the original is untouched.

If your material lives in Google Drive or Dropbox, download a copy to a local folder first. Working inside a syncing folder while an agent moves files around can produce conflicts that are tedious to untangle.

---

## 3. Get It Into Markdown

This is the step 2020 skipped entirely, and it's where most people stall.

**First, decide what actually needs converting.** Not everything does:

- **Convert** anything you'll want to *ask questions about* — notes, outlines, drafts, meeting records, syllabi, reading responses.
- **Leave alone** anything that's an artifact rather than text — images, video, slide decks you present from, spreadsheets, final PDFs you hand out. These can sit in the folder and be referenced by name. Your agent can still see them.
- **Decide case by case** on long PDFs. Many agents read PDFs directly; ask yours before spending effort converting one.

**Then let the agent do the work.** Point it at the folder and ask for a plan before any converting happens:

```
This is a folder of my own material that I want to turn into a markdown
knowledge base I can ask questions of. Take an inventory first: list the
file types you find, tell me which ones you can read directly, and which
ones you'd need to convert. Then propose a conversion plan — what becomes
markdown, what stays as-is, and why. Don't convert anything yet.
```

Read the plan and push back on it. You know which of these files matter; it doesn't.

Two things to tell it when you approve:

- **Keep the original next to the converted copy** for anything where formatting carried meaning — tables, figures, anything you'd have to rebuild by hand if the conversion came out wrong.
- **Don't invent content.** If a conversion loses something, you want a gap you can see, not a plausible sentence filling it.

**Shortcuts worth knowing.** Google Docs exports markdown directly (File → Download → Markdown), which is cleaner than going through `.docx`. If you have many Word files, ask your agent whether `pandoc` is available on your machine — it's the standard converter and handles bulk jobs in one command.

Expect this step to be imperfect. Converted files will have odd spacing and stray artifacts. That's fine; the text is what you're querying, not the formatting.

---

## 4. Let It Read Everything

Now the orientation pass:

```
Read through all of this. Orient me to what's here: the main threads, where
things are duplicated, where two documents contradict each other, and what
looks unfinished. Don't give advice on the merits of the ideas.
```

The result is different from 2020's, and the difference is the point. In the workshop you were learning about strangers. Here you're being shown your own material from outside — which draft is actually current, what you wrote twice, what you started and abandoned.

Read it properly. This is the most useful single output of the whole tutorial, and it's the one you can't get any other way.

---

## 5. Plan the Structure

Use plan mode if your tool has one, so you see the proposal before anything moves.

```
Propose an organization for this material. Move, create, edit, and archive
whatever helps. Use context engineering practices — clear folder names,
filenames that say what's inside, and a short index note at the root of
each folder. Archive anything made obsolete rather than deleting it.
I want to be able to hand this folder to an AI cold and have it find things.
```

When it asks questions — it will — here is where you overrule it:

- **Your vocabulary wins.** If you call them "modules" and it proposes "units," say so. The folder should sound like you, because you're the one who has to find things in it later.
- **Your groupings win.** An agent will organize by file type or by date because those are visible. You know the material has a shape that isn't visible in filenames. Tell it what that shape is.
- **Archive, don't delete.** Same rule as 2020.

Let it implement, and watch the sidebar in Obsidian while it works. Don't edit anything until it's finished.

---

## 6. Write the Root Note

Ask for a draft:

```
Draft a short note for the root of this folder that explains what's here,
what each folder holds, and where someone should start. Keep it under a page.
```

Then **edit it yourself.** This is the most valuable file in the folder and the one an agent is least able to write, because it's about intent — why the material is arranged this way, what it's for, what you were in the middle of.

A folder that explains itself in its own root is the difference between a workspace an AI can pick up cold and one it has to re-derive every session.

---

## 7. Write Your Standing Instructions

Add a file at the root named `AGENTS.md` — or `CLAUDE.md` if you use Claude Code, `GEMINI.md` for Gemini. Your agent reads it at the start of every session.

This is where a folder stops being a pile of files and starts being *yours*. Put in the things you'd otherwise re-explain every conversation:

- How you want to be talked to. *"Ask before reorganizing. Short answers unless I ask for detail."*
- What to check first. *"Course policy questions: read `admin/syllabus.md` before answering."*
- What never to do. *"Never edit anything in `archive/`. Never invent a citation."*
- Vocabulary. *"I call them modules, not units."*

Start with three or four lines. Add to it whenever you catch yourself repeating an instruction — that's the signal it belongs in the file rather than in a conversation.

---

## 8. Test It With a Real Question

Ask something you actually need answered, not a test question:

```
What have I already written about [a topic you know is in there somewhere]?
```

Then the diagnostic from 2020:

```
What did you need to read to answer that? How would it have gone before
the reorganization?
```

If it can't find something you know is there, that is a **context engineering problem, not an AI failure** — the file is named badly, or it's in the wrong folder, or the root note doesn't mention it. Fix the folder, then ask again.

---

## 9. Keep It Alive

A knowledge base is a habit, not a project. Three things keep it useful:

- **Add as you go.** New notes go in the folder in markdown, not in a chat window you'll close.
- **Let it file for you.** *"I'm adding this document — where does it belong and what should it be called?"*
- **Revisit the root note** when it stops describing what's actually there. That drift is the earliest sign the structure needs attention.

You do not need to convert the rest of your material. Add the next slice when the first one has proved itself.

---

If you want to see how far this goes with sustained tending, [PB Office Hours](https://peterbrinson.github.io/PBOH/) is a knowledge base built this way over months — course material plus standing instructions, arranged so an AI becomes a guide students talk to. It is one example of the shape, not the only one.

---

## Troubleshooting

### It reorganized things I didn't want touched

Your original copy is untouched — that's what Step 2 was for. Restore the parts you want back, tell the agent explicitly which folders are off limits, and add that rule to your `AGENTS.md` so it holds next session.

### The conversion mangled my tables and figures

Expected. Keep the original file beside the markdown version and reference it by name. Not everything needs to be text — the point is that the *queryable* material is text.

### It can't read my PDFs

Ask it directly what it can and can't open. For scanned PDFs (images of pages rather than text), it will need OCR, which is usually more effort than it's worth for a first pass — leave them as artifacts and move on.

### The answers are vague, or it misses things I know are there

Almost always a naming or structure problem rather than a model problem. Ask: *"What would make this folder easier for you to answer questions about?"* Its answer is usually specific and usually right.

### I started with too much and it's overwhelming

Stop, keep the original, and start again with a smaller slice. This is the most common way a first attempt goes wrong, and starting over costs less than trying to salvage a reorganization you can't check.
