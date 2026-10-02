---
publish: false
---

# Scope Calibration

Loaded by `agent/map-project-skill.md` at the first scope check (after Step 2) and used again at the second (before Step 6). This file tells PBOH how big a course project can be. Nothing in it is said to the student directly: the hours, the baseline table and the labeled cases are for PBOH's judgment only.

## The budget

A course project (Investigator, Traveler, Dreamer, hybrid, Bounded Worlds) is built by **one person in two weeks**.

In working hours, that is roughly **[20–25 hours - to confirm]**: two weeks at about 10 to 12 hours a week, alongside other classes.

**Assume the student has programming experience and is new to Unreal.** They can reason in steps and conditions, but they are following each tutorial for the first time and will get stuck on the engine itself: finding nodes, wiring pins, editor settings. Estimate every step for that student. Don't say this assumption to the student.

## Baseline: what fits

The worked examples in PBOH-dev's `responses/` folder are in scope. Measured from their build orders:

| Example                                              | Build steps | Off-map features | Tutorials used |
| ---------------------------------------------------- | ----------- | ---------------- | -------------- |
| Library After Hours                                  | 6           | 1                | 4              |
| Ghost Gallery                                        | 7           | 0                | 4              |
| Sylvia House                                         | 7           | 2                | 3              |
| Workshop Walk                                        | 8           | 1                | 7              |
| Maze of Coats                                        | 9           | 3                | 4              |
| Snow Globe                                           | 9           | 2                | 7              |
| Windshield Splats                                    | 9–10        | 2–4              | 6              |
| Classroom                                            | 10          | 3                | 5              |
| Pinewood Inquiry *(deliberately heavy off-map test)* | 8           | 5                | 5              |
| Falling Curtains                                     | 12          | 5                | 6              |

**The usual shape: 7 to 10 build steps, 0 to 3 off-map features, 4 to 7 tutorials, and none of the off-map features in the spine.** These counts are a quick first read. The five checks below decide.

## Warning signs (first scope check)

Any one of these in an idea usually means more than two weeks for one person new to Unreal. None of them is forbidden; each one is a reason to ask the student which part the experience depends on.

- More than one level, or more than about three distinct spaces that each need their own dressing and lighting
- Multiplayer or networking
- Procedural generation
- An "Open World game" with plenty of non-linear paths
- Many repeated units of handmade content (twenty rooms, thirty notes, a dozen scenes)

## The five checks (second scope check)

1. **Spine coverage.** Every step the core loop depends on is tier 1 (taught) or tier 2 (a variation or a join). An off-map feature in the spine is the most serious problem, because nothing is playable until it's solved. Look for an in-vault first-pass version first.
2. **New mechanics: three or fewer.** Count each system the student builds, such as a sentence puzzle, a fuel meter or a sequence lock. Walking, looking, pressing E and reading a note don't count.
3. **Handmade content: name a number.** A unit that needs staging, lighting and sound (a frozen scene, a dressed room, a street) takes 1 to 2 hours each. Three to five of them fit in two weeks alongside everything else.
4. **Joins: one or two.** Every step that connects two covered pieces with Blueprint logic no tutorial shows (a Branch comparing Strings, a Timeline's play rate driven by a variable) takes longer than it looks for someone new to Unreal.
5. **Slow to tune.** Physics feel, animation, camera behavior and NPC behavior take longer than their tutorials suggest, even when a tutorial covers them. Count each one as a step heavier than its tier.

## Rough costs for a programmer new to Unreal

Starting estimates, to be adjusted against what students actually take. Add them in build order; where the running total passes the budget is the two-week line.

| Item | Rough hours |
|---|---|
| Player character from the template | 0.5 |
| Block out with primitives, then Fab models | 3–6 |
| Following a tutorial for the first time | 1.5–3 |
| A variation of a tutorial already followed | 0.5–1 |
| A join step (connecting two covered pieces) | 0.5–1.5 |
| An off-map feature, small (a few nodes: auto-walk, load a level from a button) | 0.5–1 |
| An off-map feature, real (UMG drag and drop, a QTE window, a combo system) | 3–6, high variance |
| One unit of handmade content (a staged scene, a dressed room) | 1–2 each |
| Lighting pass, post-process grade | 2–3 |
| Slow-to-tune system (physics feel, camera, animation) | add 2–4 on top |

## Labeled cases

### In scope — Library After Hours (Investigator)

The player walks an empty library after the librarian vanished, examining the front desk, the return cart and the back office. Six build steps: template character, Fab library, basic interaction, Tutorial 801 with each examinable as a variation, Tutorial 401 for handwritten notes, lighting. One off-map feature (a voicemail sound), outside the spine, with a text-note fallback. One new mechanic (inspect). Handmade content is a handful of examinables. Estimated at about 18 to 20 hours. **Why it fits:** the whole spine is one tutorial and its variations.

### Slightly over budget in the spine — Walking (Traveler)

The player takes one foggy walk per session, pumping QTEs for fuel that makes a thought tree grow in the sky while the camera pulls back. Thirteen build steps, six off-map features. The spine (steps 1–9: auto-walk, one street, fog and grade, timed walk, fuel meter, thought tree, keyword combining, camera pullback) comes to roughly 27 hours by the cost table, past the budget before any stretch goal. It fails two checks: the keyword buttons that drive the thought tree are an off-map UMG feature in the spine, and the spine has three joins (fuel into the meter, fuel into the tree's reveal speed, keyword pairs into a Branch). **What PBOH should have said:** state the budget, name the keyword widget and the thought tree as what pushes it over, and offer the first pass the plan already contains: thought nodes reveal in a fixed order at a speed set by fuel, with keyword combining as the upgrade. Then ask the student which of the two they'd rather keep at full strength. The two-week line then falls after the camera pullback, and the two extra streets, the map screen, real QTEs and music become stretch goals.

### Out of scope — Void (Traveler)

A spaceship shaped like a cylinder with radial gravity: four decks of different gravity, an eight-minute time loop that persists progress across restarts, a three-phase boss fight in a zero-g core, deck enemies, and a floating ending. Fourteen build steps, five off-map features. Three warning signs at once: combat and a boss, a custom gravity system at the center of the play, and progress that persists across a restart. The spine's second step (radial gravity) is off-map, so nothing is playable until it works. The plan PBOH produced was itself organized into four weeks, which is the clearest sign it had no budget to measure against. **What PBOH should have said at the first scope check:** name the decks, the loop and the boss fight as what makes it large, and ask which one the feeling of the ship lives in.
