---
publish: false
---

# UE Capability Map

*For the UE Tutorial GET. When a student describes a project, use this map to identify which features are covered by the vault, which tutorials teach them, and which SPR the idea maps to. Features not listed here are outside the current vault scope — explain what they'd need to learn separately, and flag as a wiki gap (instructor-only).*

*Sourced from `## What you can now build` sections across all tutorials. Feature tables last updated + approved 2026-05-11. **Tutorial Index + "How to use this map" lookup block added 2026-06-04 (CE Review Phase B) — additive, no feature rows changed; the index is reorganized from existing map content. Worth a quick instructor pass to confirm each one-line "Teaches" description, but nothing was newly claimed.***

**Columns:**
- **SPR fit** — every role this feature can plausibly serve. Use this to *explain* why the tutorials fit the student's chosen role(s).
- **Best for** — the 0–2 roles this feature is *strongest* for (rarely 2). Lean into this with enthusiasm when it matches a student's project — this is what the feature is built to shine at. Note: Entrant and Dreamer are mechanically identical here; differentiation is in meaning/metaphor, not mechanics.

**Tone — never discourage.** This map is a tool for expanding what students can imagine, not a gate that filters out ideas. If a student's idea doesn't fit cleanly, that's a teaching moment, not a rejection. Off-map features get an explanation of what they'd need to learn — never a "you can't do this."

**Sibling lookup — world & rendering features.** This map lists *Blueprint gameplay mechanics*. For common *world / rendering / setup* features (water, fog, lighting, foliage, cameras, physics) — labeled Covered / Partial / Off-map — see [[ue-feature-catalog]], scanned at skill Step 4 for the noticing pass.

---

## How to use this map (lookup discipline)

When a student describes a feature, route it like a lookup — don't read the whole map top-to-bottom:

1. **Find the feature** in the category tables below → note the tutorial number(s).
2. **Verify in the Tutorial Index** (right below) that the tutorial actually teaches that feature. If the number you're about to cite doesn't match what the index says it teaches, you've wandered — go back to step 1.
3. **Read lean.** During project-mapping, read only the tutorial's `## What you can now build` and `## Example deviations you are ready for` sections — not the full tutorial body. Pull the full tutorial only when the student is actively building it.
4. **Cite by number** and connect the SPR fit to the student's idea.

## Tutorial Index (reverse lookup — verify here before citing)

| Tutorial | Title | Teaches (one line) |
| --- | --- | --- |
| 1 | A Floor Plate Opens A Door | Trigger zones (enter/exit), objects that slide open/closed, event dispatchers |
| 2 | Collectables and Restart | Collectibles that disappear on touch, counters, shared game state, level restart |
| 3 | Scoring and UI | On-screen counter / HUD driven by a gameplay event (event → state → UI chain) |
| 4 | Haunted House Triggers and Events | Arrays of triggered objects, staggered/sequential events, spatial ambient sound, Mixamo NPC with animation |
| 201 | Pawn Possession *(WIP)* | Switching between multiple characters at a key press; Level Blueprint behavior — **not** locomotion |
| 202 | MetaHuman Animations | MetaHuman as player or NPC, Mixamo animation retargeted to MetaHuman, montages |
| 301 | Landscapes, Gaea and Automaterial | Landscape terrain from a Gaea heightmap, auto-layered grass/rock/snow, atmospheric sky, overhead map |
| 302 | Water | Lakes, oceans (island), rivers with spline-controlled current |
| 401 | Create a Material | Custom colored materials with editable parameters, material instances, texture-mapped surfaces |
| 501 | Simple Physics | Objects that fall/tumble/settle (`Simulate Physics`), per-object weight (Mass), bounce via Physical Material (Restitution), gravity dials (Enable Gravity / Global Gravity Z / character Gravity Scale), launch/scatter via Add Impulse; simple vs. complex collision |
| 701 | Post-Processing | Global color grade (mood/tone), multiple Post Process Volumes per area |
| 702 | Niagara Particles | Looping ambient particles (smoke/fire/dust/sparks), turbulent motion, color-shift over lifetime |
| 801 | Inspect an Object | Readable note/object — full-screen widget, player input locked while open, audio log / photo / diary, full-screen black-out / end-card / fade-to-black; Blueprint Interface |
| 821 | Base Interactive System *(WIP)* | E-key interaction with whatever the player looks at, sphere trace for tagged objects, reusable interactable base class; **prefer 801 when it covers the need — see the 801-vs-821 note** |
| 901 | Recording with OBS | Screen-recording gameplay to an H.264 video, voice narration, no debug messages |

*Not in this map: the 1000-series (LLM / Gemini-CLI setup, GET onboarding) — it teaches no gameplay features, so it never belongs in a build order. If you're tempted to cite a 1000-series tutorial for a game mechanic, that's a wander — the feature is off-map.*

---

## Triggers & Environment Response

| Feature                                              | Tutorial(s) | SPR fit                    | Best for         |
| ---------------------------------------------------- | ----------- | -------------------------- | ---------------- |
| Trigger zone that detects player entering or exiting | 1           | All                        | Entrant, Dreamer |
| Object that slides open/closed when triggered        | 1           | Traveler, Entrant, Dreamer |                  |
| Object that rotates when triggered (door on hinge)   | 4           | Traveler, Entrant, Dreamer |                  |
| Actor broadcasting an event via dispatcher           | 1           | All                        | Entrant, Dreamer |
| Single trigger controlling multiple objects (array)  | 4           | Traveler, Entrant, Dreamer |                  |
| Lights that turn on when player enters a room        | 4           | Traveler, Entrant, Dreamer | Traveler         |
| Staggered sequential events (lights one by one)      | 4           | Traveler, Entrant, Dreamer | Traveler         |
| Spatial ambient sound activating on zone entry       | 4           | Traveler, Dreamer          | Traveler         |

---

## Collectibles & Game State

| Feature                                           | Tutorial(s) | SPR fit                | Best for |
| ------------------------------------------------- | ----------- | ---------------------- | -------- |
| Collectible object that disappears on touch       | 2           | Investigator, Traveler |          |
| Counter tracking any incrementing value           | 2, 3        | Traveler               |          |
| Shared game state readable by multiple blueprints | 2           | All                    |          |
| Level that restarts after a fixed time            | 2           | Entrant, Dreamer       |          |
| "Use it up" objects — evidence, keys, pickups     | 2           | Investigator, Entrant, Dreamer  |          |

---

## UI / HUD

| Feature                                                     | Tutorial(s) | SPR fit      | Best for |
| ----------------------------------------------------------- | ----------- | ------------ | -------- |
| On-screen counter updating in real time                     | 3           | All          |          |
| HUD element driven by any gameplay event                    | 3           | All          |          |
| Multi-blueprint chain: event → state → UI                   | 3           | All          |          |
| Hover UI tip appearing when player aims at object           | 821         | Investigator |          |
| Full-screen widget (note, image, map) opened by interaction | 801         | Investigator |          |
| Player input locked while widget is open                    | 801         | Investigator |          |
| Full-screen black-out / end-card / fade-to-black (event-triggered) | 801  | All          |          |

> **Black-out / end-card / fade-to-black is 801, not 3.** It's a *full-screen widget* (801's machinery — a widget that fills the screen, shown on an event such as game-end), **not** a HUD/counter element (Tutorial 103). Tutorial 103 is an on-screen HUD *driven by* gameplay state; 801 is the full-screen takeover. A weak model tends to guess 3 — route it to 801.

---

## Player Character

| Feature                                           | Tutorial(s) | SPR fit          | Best for         |
| ------------------------------------------------- | ----------- | ---------------- | ---------------- |
| Switch between multiple characters at a key press | 201         | Entrant, Dreamer |                  |
| Level-specific behavior (Level Blueprint)         | 201         | All              |                  |
| Photorealistic MetaHuman as player character      | 202         | All              | Entrant, Dreamer |
| Custom Mixamo animation retargeted to MetaHuman   | 202         | All              |                  |
| Specific animation played on demand (Montage)     | 202         | All              | Traveler         |

---

## Interaction Systems

| Feature                                                             | Tutorial(s) | SPR fit               | Best for |
| ------------------------------------------------------------------- | ----------- | --------------------- | -------- |
| E key interaction with whatever player is looking at                | 821, 801    | Investigator, Entrant, Dreamer |          |
| Sphere trace detecting tagged interactable objects                  | 821         | Investigator, Entrant, Dreamer |          |
| Reusable interactable base class (note, door, switch all extend it) | 821         | Investigator, Entrant, Dreamer |          |
| Readable note — opens full-screen, freezes player input             | 801         | Investigator          |          |
| Audio log, photograph, map, diary page                              | 801         | Investigator          |          |
| Blueprint Interface for polymorphic interaction                     | 801         | Investigator          |          |

**801 vs 821 — prefer 801, and don't recommend both.** 801 (Inspect an Object) is the stronger, self-contained default for readable/inspectable objects and covers most cases on its own. **When 801 covers the need, do not also recommend 821.** 821 (Base Interactive System, *WIP*) is a reusable interaction *base* — cite it only when the project genuinely needs one interaction system spanning many different object types (notes, doors, switches all extending a shared base), and even then weigh whether 801 alone is enough. Never sequence 821 ahead of 801 in a build order.

---

## NPCs

| Feature                                                      | Tutorial(s)   | SPR fit | Best for     |
| ------------------------------------------------------------ | ------------- | ------- | ------------ |
| Mixamo NPC with idle animation                               | 4             | All     |              |
| NPC that reacts to player proximity with triggered animation | 4             | All     | Investigator |
| MetaHuman placed as NPC (not player)                         | 202 deviation | All     | Investigator |

---

## World & Environment

| Feature                                               | Tutorial(s) | SPR fit | Best for |
| ----------------------------------------------------- | ----------- | ------- | -------- |
| Landscape terrain from Gaea heightmap                 | 301         | All     | Traveler |
| Auto-layered grass, rock, snow by elevation and slope | 301         | All     | Traveler |
| Atmospheric sky — sun position, haze, fog             | 301         | All     | Traveler |
| High-resolution overhead map view                     | 301         | All     | Traveler |
| Lake with customizable wave behavior                  | 302         | All     | Traveler |
| Ocean surrounding landscape as island                 | 302         | All     | Traveler |
| River with spline-controlled path and current         | 302         | All     | Traveler |

---

## Physics & Simulation

| Feature                                                                       | Tutorial(s) | SPR fit          | Best for         |
| ----------------------------------------------------------------------------- | ----------- | ---------------- | ---------------- |
| Object that falls, tumbles, and settles under gravity                         | 501         | All              | Entrant, Dreamer |
| Per-object weight (Mass) — light props vs. heavy/immovable                     | 501         | All              |                  |
| Bouncy or icy surface via Physical Material (Restitution)                      | 501         | All              |                  |
| Gravity tuned per object / world / character (moon levels, dream-slow falls)   | 501         | All              | Dreamer          |
| Launch, scatter, or knock over physics objects (Add Impulse)                  | 501         | Entrant, Dreamer | Entrant, Dreamer |
| Simple vs. complex collision (the Fab-prop-falls-through-the-floor fix)        | 501         | All              |                  |

> **Physics beyond rigid bodies is still off-map.** 501 covers falling/tumbling/bouncing rigid bodies and gravity tuning — basic, beginner-level. Ragdoll, cloth, vehicles, destruction, and buoyancy are *not* taught; offer a Timeline-driven approximation as a first pass where one fits (e.g. a looping bob instead of true buoyancy). See [[ue-feature-catalog]].

---

## Materials & Surface

| Feature | Tutorial(s) | SPR fit | Best for |
|---------|-------------|---------|----------|
| Custom colored material with editable parameter | 401 | All | |
| Multiple color/texture variants via Material Instances | 401 | All | |
| Texture-mapped surface (photo, pattern, painted) | 401 | All | |

---

## Atmosphere & Visual Effects

| Feature                                                     | Tutorial(s) | SPR fit           | Best for |
| ----------------------------------------------------------- | ----------- | ----------------- | -------- |
| Global color grade (tone, saturation, mood)                 | 701         | Traveler, Dreamer |          |
| Multiple Post Process Volumes in different areas            | 701         | Traveler, Dreamer | Dreamer  |
| Looping ambient particle effect (smoke, fire, dust, sparks) | 702         | Traveler, Dreamer |          |
| Turbulent swirling particle motion                          | 702         | Traveler, Dreamer | Dreamer  |
| Particles with color shifting over lifetime                 | 702         | Dreamer           | Dreamer  |

---

## Output & Delivery

| Feature | Tutorial(s) | SPR fit | Best for |
|---------|-------------|---------|----------|
| Screen recording with no debug messages | 901 | All | |
| Voice narration recorded with gameplay | 901 | All | |
| H.264 video file ready for a video editor | 901 | All | |

---

## Outside current vault scope

Features students may want that are not yet covered:

- Multiplayer / networking
- AI enemies with pathfinding
- Inventory systems
- Dialogue systems with branching
- Save / load game state
- Advanced physics — ragdoll, cloth, vehicles, destruction, buoyancy *(basic rigid-body physics — falling, tumbling, bouncing, gravity tuning — is now covered by Tutorial 501)*
- Procedural generation
- C++ integration
- Advanced animation (state machines, blend spaces)
- Online services (leaderboards, authentication)
