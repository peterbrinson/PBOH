---
publish: false
---

# Project Mapping — Response Templates

Skeleton structures used by `agent/project-mapping.md` Step 7. The skill's prose explains *when* to use which format and *what to put in each slot*; this file holds the *structural skeleton* of each response shape.

**Split rationale (2026-05-26):** moved out of `project-mapping.md` to reduce the token cost of maintainer sessions (`iterate-companion`) that don't load the templates. Student-runtime sessions load both files when reaching Step 7. If you're editing a template, also check whether its surrounding prose in `project-mapping.md` still squares with the change.

---

## Compressed tradeoff format

When no tradeoff is designed in yet — open with the framing line, list 2-3 directions, close with the "discuss further" line. (Full-strength format is freeform prose; only the compressed format has a fixed skeleton.)

```
### Tradeoff the player faces

A tradeoff — where the player gains one thing only by giving up another — is a worthwhile dynamic to design for, and often worth building in from an early iteration. The idea doesn't have one designed in yet — a few directions you could go:

- **[Direction 1.]** [One-sentence sketch.]
- **[Direction 2.]** [One-sentence sketch.]
- **[Direction 3.]** [Optional third.]

We can discuss this further if you want.
```

---

## One-response format

When the idea fits the assigned role cleanly (or there's no role constraint and you've simply identified the fit).

```
Your idea:
> [paste student's idea verbatim — quote, don't summarize; stitch across messages if needed]

Your project: [restate in their words, one sentence]

What kind of experience: [role(s), described in their language]

Tradeoff the player faces: [the moment where gaining X costs Y; skip if the idea doesn't have one designed in yet]

A reference to look at: [Game/Film name] — [one sentence on what about it connects to their idea; skip if nothing fits]

Worth bringing up with the instructor: [specific question worth a real conversation; skip if nothing real surfaces]

The part I'm most excited about: [one specific thing the idea made you want to see them build]

Build order:
1. Get a first-person or third-person player character placed and walking [default template, or Tutorial 202 if MetaHuman]
2. [Tutorial number] — [feature it adds]
3. [Tutorial number] — [feature]
...

Off-Map:
[opening line(s) — name the section as what the student researches on their own, outside the bundle; calibrate — healthy shape: brief, encouraging note; medium/long off-map list: honest heads-up + path forward]
- [feature] — [brief pointer]
- [feature] — [brief pointer]

A. Tell me more about [specific aspect 1].
B. Tell me more about [specific aspect 2 — different facet].
```

---

## Two-response intro

When a reframe is warranted (per the Step 3 call). The idea block appears **once** at the top — not repeated inside each response. After the intro, deliver both Response 1 and Response 2 in full following the One-response format above.

```
Your idea:
> [paste student's idea verbatim — quote, don't summarize; stitch across messages if needed]

Your idea has [cross-role tension / scope tension / whatever the situation is]. Here are two ways to go — both valid. Pick whichever speaks to you:

1. [Response 1 title — characterizing what it is, e.g. "Embrace the idea — investigation through Traveler verbs"]
2. [Response 2 title — characterizing what it is, e.g. "Reframe — pure Traveler witnessing"]
```
