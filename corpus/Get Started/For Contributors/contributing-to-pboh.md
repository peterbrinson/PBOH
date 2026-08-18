---
type: Guide
publish: false
---

# Contributing to PBOH

PBOH is distributed by **forking**. You work in your own fork; the class original stays read-only to you. This page covers the three things you'll do after setup: pull updates, send your gap log to the instructor, and (optionally) contribute a reference page.

If you haven't forked and cloned yet, do [[Tutorial 1090 - Fork and Update PBOH]] first.

## Your two remotes

After Tutorial 1090 your clone has two remotes:

- **`origin`** — your own fork (`github.com/<you>/PBOH`). You can push here freely.
- **`upstream`** — the class original (`github.com/peterbrinson/PBOH`). You pull updates from here; you cannot push to it.

Check them any time with `git remote -v`.

## Get the latest PBOH updates

The course tutorials and wiki get updated over the semester. To pull the latest, from inside your PBOH folder:

```
git fetch upstream
git merge upstream/main
```

As long as you haven't edited the bundle's own files (see the rule at the bottom), this always merges cleanly.

## Send your gap log to the instructor

Your gap log lives at `gaps/<your-username>.md`. PBOH writes to it but never runs git. To get it to the instructor, commit and push it to your fork:

```
git add gaps/
git commit -m "Update gap log"
git push origin main
```

Do this whenever you like — weekly is plenty. The instructor collects gap logs from every student's fork. You do **not** open a pull request for the gap log; pushing to your own fork is enough.

## Contribute a reference page (optional)

Found a game or film worth adding to the shared `corpus/Design/_References/` library? That one *does* go back by pull request, so every student gets it:

1. Add a new file `corpus/Design/_References/Game - Your Title.md` (or `Film - …`), matching the format of the existing reference pages.
2. Commit and push it to your fork (`git push origin main`).
3. On GitHub, open a **pull request** from your fork to `peterbrinson/PBOH`.
4. The instructor reviews it; if accepted, it merges and reaches everyone on their next `git fetch upstream`.

A brand-new file like this never causes a merge conflict — it's the cleanest kind of contribution.

*Maintainer note: after merging any corpus addition, move, or renumber, regenerate the corpus index — `node scripts/generate-corpus-index.mjs` — and commit the updated `agent/corpus-index.md`. See `scripts/README.md`. (Students don't need to run this; the instructor does it on merge.)*

## One rule that keeps updates painless

**Don't edit the bundle's own files** — the tutorials, wiki pages, charter, or skills. Those are the instructor's to maintain; editing them locally causes a merge conflict every time you pull updates. Your own work has two homes that never conflict:

- Prototype Plans, notes, your own references, session handoffs → `student-notes-private/` (stays on your machine, never pushed).
- Gaps the wiki doesn't cover → `gaps/<your-username>.md` (pushed to your fork).

Keep your writing in those two places and updates from upstream will always be smooth.
