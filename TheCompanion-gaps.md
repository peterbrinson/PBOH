---
publish: false
---

# Companion Gaps

Running list of gaps in the Companion's coverage — primarily UE topics not in the course wiki, but also other things the student wants flagged back to the instructor (course materials that confused, references worth adding, design observations). The Companion appends here when it falls back on training knowledge or when the student asks for something to be flagged. The instructor reviews this list to decide what to update or add next.

## Entry format

```
### YYYY-MM-DD — short topic
- **Student asked:** one-line paraphrase of the question
- **Wiki coverage:** none / partial (name the closest page if partial)
- **What was missing:** the specific node, concept, workflow, or detail the wiki didn't have
- **Answered from:** training knowledge (note any uncertainty — e.g., "unverified in 5.7")
```

Keep entries terse. One entry per gap. If the same gap comes up again, append a short "also asked YYYY-MM-DD" line to the existing entry rather than duplicating.

## Gaps

<!-- Append new entries below. Newest at bottom. -->

### 2026-05-15 — Input freezing at game start *(filled)*
- **Student asked:** How to freeze player controls for 10 seconds at the start of a game. (Sally / Gemini session)
- **Wiki coverage at the time:** Partial — [[PlayerController]] mentioned Set Ignore Look/Move Input briefly in a Tutorial 801 pattern note. No dedicated coverage of the input-gating nodes or of `Delay`.
- **What was missing:** Dedicated pages for `Delay`, `Disable Input`, `Enable Input`, `Set Ignore Look Input`, `Set Ignore Move Input`.
- **Answered from:** Gemini's training knowledge.
- **Filled by:** [[Delay]] (new) and [[Input Control]] (new — consolidates all four input-gating nodes into one page with choose-between-the-pairs guidance and the counter-behavior gotcha). [[PlayerController]]'s existing Tutorial 801 pattern note now cross-links to [[Input Control]] for the full reference. Index updated.
