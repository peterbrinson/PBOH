---
publish: false
---

# CLAUDE.md — Worldbuilding (Bounded Worlds)

The **Bounded Worlds** framework: the worldbuilding companion to the Situated Player Roles. Where the SPRs turn on what the player *does* (player-verb axis), Bounded Worlds turns on how the world *defines its edges* (world-edge axis). The two are companions, not alternatives — a project can be both an Investigator project and a Bounded World. The published hub is `index.md` — read it for the framework's intent and the three Boundaries.

## The three Boundaries

One question sorts them: **does the world imply an outside at all?**

| Boundary | The world's edge | Examples |
|---|---|---|
| **Finite** | No outside; the world is the totality | *Balance*, *Monument Valley*, *Inscryption* Act 1 |
| **Closed** | An outside is implied but withheld; the edge is felt, not passed | *P.T.*, *Return of the Obra Dinn*, *Papers, Please*, *Tacoma*, escape rooms |
| **Threshold** | The edge becomes a passage the player crosses | *Portal*, *Spirited Away*, *The Matrix* |

Unlike the four roles, the three Boundaries do **not** map to tutorial clusters — they're a design lens (how the world treats its limits), not a build-routing key. A Bounded World still builds in Unreal from the same tutorials, via the player role it's given.

## Key shaping pages

- `index.md` — the hub (the three Boundaries + Wolf's vocabulary, all linked from here)
- Two survey lectures adapted from CTIN 128, sitting at top level beside the cluster folders:
  - `Lecture - Building Imaginary Worlds.md` — title "Lecture: Building Imaginary Worlds" (aliased `Mark Wolf`); the richest single overview of Wolf's vocabulary
  - `Lecture - Situational Game Design for Bounded Worlds.md` — title "Lecture: Situational Game Design for Bounded Worlds" (aliased `Situational Game Design for Bounded Worlds`); Upton's situations

The concept pages are grouped into four cluster folders directly under `Worldbuilding/` (each a folder note + members):

- `Foundations/` — what worldbuilding is and where to start: `Worldbuilding - Definition and Scope.md`, `Starting Points for World Creation.md`
- `Vocabulary/` — Wolf's analytic terms: `Consistency and Internal Logic.md`, `Completeness.md`, `World Structure - Wolf's Eight Elements.md`, `Narrative Structure in Worlds.md`, `Transmedia.md`, and the nested invention cluster `Taxonomy of Invention/` (folder note `index.md` + `Cultural Invention.md`, `Nature and Invented Physics.md`)
- `The Experience/` — the playable shaping moments: `Meeting the World.md` (the entry), `World Responsiveness.md` (**the bridge to the build** — triggers/events → Tutorial 104, the Haunted House), `Teaching the Rules of the World.md`
- `Exposition and Anticipation/` — revealing without dumping: `Lore as a Trap.md`, `Catalysts of Speculation.md`, `Awkward Exposition.md` (the in-game codex now lives as a section inside `Catalysts of Speculation.md`)
- `attachments/` — images embedded by the pages above (resolved by filename, so the cluster moves didn't affect them)

## Where this fits

Layer 3 of PBOH's three layers (tutorials, wiki, design lenses), alongside the SPRs in `../Storytelling/`. The project-mapping skill loads the Bounded Worlds overview (`index.md`) when a student is on a worldbuilding project and takes **Branch D** in Step 3, which opens by asking whether the student has studied the Situated Player Roles. Shared either way: deduce and name the structure, do a short shaping pass (Meeting the World / World Responsiveness / Teaching the Rules). Then if they have studied the roles, identify the player role and anchor the build on its tutorial cluster; if they haven't, run without the SPR frame (plan from the world and its features, build anchored on the world's experience). See `agent/map-project-skill.md` and `agent/how-the-tutor-works.md`.
