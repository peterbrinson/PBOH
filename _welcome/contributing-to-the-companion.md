---
publish: false
---

# Contributing to The Companion

The Companion is distributed by **forking**. You work in your own fork; the class original stays read-only to you. This page covers the three things you'll do after setup: pull updates, send your gap log to the instructor, and (optionally) contribute a reference page.

If you haven't forked and cloned yet, do [[Tutorial 1030 - Fork and Clone The Companion]] first.

## Your two remotes

After Tutorial 1030 your clone has two remotes:

- **`origin`** — your own fork (`github.com/<you>/TheCompanion`). You can push here freely.
- **`upstream`** — the class original (`github.com/vLabUSC/TheCompanion`). You pull updates from here; you cannot push to it.

Check them any time with `git remote -v`.

## Get the latest Companion updates

The course tutorials and wiki get updated over the semester. To pull the latest, from inside your Companion folder:

```
git fetch upstream
git merge upstream/main
```

As long as you haven't edited the bundle's own files (see the rule at the bottom), this always merges cleanly.

## Send your gap log to the instructor

Your gap log lives at `gaps/<your-username>.md`. The Companion writes to it but never runs git. To get it to the instructor, commit and push it to your fork:

```
git add gaps/
git commit -m "Update gap log"
git push origin main
```

Do this whenever you like — weekly is plenty. The instructor collects gap logs from every student's fork. You do **not** open a pull request for the gap log; pushing to your own fork is enough.

## Contribute a reference page (optional)

Found a game or film worth adding to the shared `corpus/References/` library? That one *does* go back by pull request, so every student gets it:

1. Add a new file `corpus/References/Game - Your Title.md` (or `Film - …`), matching the format of the existing reference pages.
2. Commit and push it to your fork (`git push origin main`).
3. On GitHub, open a **pull request** from your fork to `vLabUSC/TheCompanion`.
4. The instructor reviews it; if accepted, it merges and reaches everyone on their next `git fetch upstream`.

A brand-new file like this never causes a merge conflict — it's the cleanest kind of contribution.

## One rule that keeps updates painless

**Don't edit the bundle's own files** — the tutorials, wiki pages, charter, or skills. Those are the instructor's to maintain; editing them locally causes a merge conflict every time you pull updates. Your own work has two homes that never conflict:

- Project plans, notes, your own references, session handoffs → `student-notes-private/` (stays on your machine, never pushed).
- Gaps the wiki doesn't cover → `gaps/<your-username>.md` (pushed to your fork).

Keep your writing in those two places and updates from upstream will always be smooth.
