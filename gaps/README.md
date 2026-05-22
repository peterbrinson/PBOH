---
publish: false
---

# Gap Logs

When the Companion answers a game engine question the course wiki doesn't cover — or when a student flags something for the instructor — it records an entry here. This is the **one outbound channel** from student to instructor.

## One file per student

Each student's bundle has a single gap file in this folder, named after the student's GitHub username — e.g. `jdoe.md`. A student only ever writes their own file, so no two students' logs ever collide. `README.md` (this file) is the only shared file in `gaps/`.

If you've just forked the Companion and have no gap file yet, the Companion creates `gaps/<your-github-username>.md` the first time it logs something.

## How it reaches the instructor

The Companion writes the gap file locally and never runs git. **You** commit and push it to your fork — see `CONTRIBUTING.md`. The instructor collects every student's gap file from their forks and reviews them, deciding which gaps become new wiki pages, tutorials, or pitfall notes.

## Entry format

Append new entries at the bottom of your gap file, newest last. One entry per gap:

```
### YYYY-MM-DD — short topic
- **Student asked:** one-line paraphrase of the question
- **Wiki coverage:** none / partial (name the closest page if partial)
- **What was missing:** the specific node, concept, workflow, or detail the wiki didn't have
- **Answered from:** training knowledge (note any uncertainty — e.g., "unverified in 5.7")
```

Keep entries terse. If the same gap recurs, append a short "also asked YYYY-MM-DD" line to the existing entry rather than duplicating.
