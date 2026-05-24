---
publish: false
---

# UE Capability Map

*For the UE Tutorial Companion. When a student describes a project, use this map to identify which features are covered by the vault, which tutorials teach them, and which SPR the idea maps to. Features not listed here are outside the current vault scope — explain what they'd need to learn separately, and flag as a wiki gap (instructor-only).*

*Sourced from `## What you can now build` sections across all tutorials. Last updated 2026-05-11. Approved 2026-05-11.*

**Columns:**
- **SPR fit** — every role this feature can plausibly serve. Use this to *explain* why the tutorials fit the student's chosen role(s).
- **Best for** — the 0–2 roles this feature is *strongest* for (rarely 2). Lean into this with enthusiasm when it matches a student's project — this is what the feature is built to shine at. Note: Entrant and Dreamer are mechanically identical here; differentiation is in meaning/metaphor, not mechanics.

**Tone — never discourage.** This map is a tool for expanding what students can imagine, not a gate that filters out ideas. If a student's idea doesn't fit cleanly, that's a teaching moment, not a rejection. Off-map features get an explanation of what they'd need to learn — never a "you can't do this."

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
- Physics simulation (beyond basic collision)
- Procedural generation
- C++ integration
- Advanced animation (state machines, blend spaces)
- Online services (leaderboards, authentication)
