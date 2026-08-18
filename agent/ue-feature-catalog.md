---
publish: false
---

# UE Feature Catalog (common feature → covered / partial / off-map)

> **v1 — instructor-passed 2026-06-08.** Built from Peter's "what students hit in the early months of Unreal" list. The **third lookup leg** (see `PBOH-dev/agent/recall-lookup-audit.md`): the Tutorial Index fixes *routing*, the References Index fixes *retrieval*, and this catalog fixes **noticing** — so a common feature a student clearly wants (water!) isn't silently dropped at the decompose step. Sibling to `ue-capability-map.md`, not merged into it: that map is *Blueprint gameplay mechanics*; this is *world / rendering / setup* features you mostly configure in the editor. Coverage calls confirmed in-engine 2026-06-08; wired into skill Step 4.

## How to use this catalog (lookup discipline)

At **Step 4 of `map-project-skill.md` (decompose into features)**, after you've listed what the idea needs:

1. **Scan this catalog as a checklist** — "does the idea involve any of these common features?" — so a common one isn't missed. This is the *noticing* pass.
2. **Label each feature you find** by its coverage state (key below).
3. **Carry the labels into Step 5** mapping and Step 7's Off-Map calibration.

**Never discourage (carries over from the capability map).** Most off-map features here are *low-hanging* — say so. "Lighting isn't in our tutorials, but it's one of the easier things to try" is the posture, not "the vault doesn't support this."

## Coverage key

- **Covered** → a tutorial introduces it at a **beginner level** (enough for an early-semester student to use, not exhaustive mastery); cite the number.
- **Partial** → covered for one part, off-map for another; cite the tutorial *and* name the off-map part.
- **Off-map · low-hanging** → no tutorial, but a standard/easy step a beginner can attempt in a weekend.
- **Off-map · harder** → no tutorial, and genuinely involved; flag honestly, offer a first-pass approximation where one exists.

---

## Atmosphere & Sky

| Feature | Coverage | Where / note |
|---|---|---|
| Fog / atmospheric haze | **Partial** | 301 introduces it as part of its *outdoor* atmospheric sky. For *interior* haze (e.g. a humid greenhouse), height/volumetric fog is **off-map · low-hanging** — or approximate the heavy-air feel with 702 particles. |
| Sky & sun placement | **Covered** | 301 |
| Day/night *cycle* (animated sun) | **Off-map · harder** | sun & sky *placement* are covered (301, row above); an *animated* day/night cycle isn't taught — and **don't suggest a Timeline-driven sun** (fiddly, not worth it). Leave it off-map. |

## Water

| Feature                                           | Coverage             | Where / note                                                                                                        |
| ------------------------------------------------- | -------------------- | ------------------------------------------------------------------------------------------------------------------- |
| Lakes / ocean / rivers                            | **Covered**          | 302                                                                                                                 |
| Convincing underwater look *from below or within* | **Off-map · harder** | refraction + bubbles; research outside the vault (bubbles approximable with Niagara 702). See the aquarium example. |

## Lighting & Camera

| Feature | Coverage | Where / note |
|---|---|---|
| Lights — directional / point / spot | **Off-map · low-hanging** | PBOH does not provide a tutorial for this; a *standard build step* — place and tune (same status as "place the player character") |
| Light mobility (static / stationary / movable) | **Off-map · low-hanging** | editor setting on each light |
| Depth of field (camera focus blur) | **Off-map · low-hanging** | PBOH does not provide a tutorial for this; a focus/blur effect you add through Post Process settings |

## Landscape & Foliage

| Feature | Coverage | Where / note |
|---|---|---|
| Landscape terrain | **Covered** | 301 (via a Gaea heightmap) |
| Auto-material ground (grass / rock / snow by slope) | **Covered** | 301 automaterial |
| Foliage *mode* — painting tree / grass *meshes* | **Off-map · low-hanging** | the Foliage paint tool; distinct from 301's automaterial ground cover |

## Physics & Collision

| Feature | Coverage | Where / note |
|---|---|---|
| Collision / overlap detection | **Covered** | underlies Tutorial 101's trigger volumes; simple vs. complex collision taught in 501 |
| Collision presets | **Off-map · low-hanging** | a per-component editor dropdown |
| Falling / tumbling / settling rigid bodies, per-object weight (Mass), bounce (Restitution), gravity tuning | **Covered** | 501 (Simple Physics) — beginner level |
| Advanced physics — ragdoll, cloth, vehicles, destruction, buoyancy | **Off-map · harder** | not taught; offer a Timeline-driven approximation as a first pass where one fits (e.g. a looping bob instead of buoyancy) |

## Characters & Animation

| Feature | Coverage | Where / note |
|---|---|---|
| Skeletal mesh character | **Covered** | 4 (Mixamo NPC), 202 (MetaHuman) |
| Skeleton / animation retargeting | **Covered** | 202 (Mixamo → MetaHuman retarget) |
| Animation — idle, montage on demand | **Covered** | 4 (idle), 202 (montages) |
| Switching between characters | **Covered** | 201 |

## Effects

| Feature | Coverage | Where / note |
|---|---|---|
| Niagara particles (smoke / fire / dust / sparks) | **Covered** | 702 |
| Post-processing (color grade, Post Process Volumes) | **Covered** | 701 |

---

## Confirmed (instructor pass, 2026-06-08)

- **Fog** — 301 *introduces* it for **outdoor** atmospheric sky (Covered, beginner level). **Interior** haze (e.g. a humid greenhouse) is off-map · low-hanging — so the row is **Partial**. Split surfaced by the 2026-06-09 greenhouse held-out test.
- **Foliage paint tool** — confirmed **uncovered** → off-map. 301 only does automaterial ground.
- **Day/night cycle** — **don't suggest a Timeline-driven sun.** Left off-map · harder.
- **Collision presets** — split confirmed (overlap covered via Tutorial 101; presets off-map).
- **Coverage = beginner level** — all "Covered" calls hold on the understanding that this catalog is scoped to early-semester, beginner use.

## Status

- ✅ Instructor pass on coverage calls (2026-06-08).
- ✅ Starter list accepted as the first pass — broader expansion (reflections, footsteps, weather, nav/AI, decals…) deferred, not blocking.
- ✅ Wired into `map-project-skill.md` Step 4 (the noticing pass) + Pointers list (2026-06-08).
- ✅ Publish: stays `publish: false` (matches the capability map).
- ✅ Cross-linked with `ue-capability-map.md` (siblings: gameplay mechanics vs. world/rendering features).
- **2026-06-11 — Tutorial 501 (Simple Physics) proofread + published.** Physics row split: basic rigid-body physics (falling/tumbling/settling, Mass, bounce, gravity tuning) is now **Covered → 501**; only ragdoll/cloth/vehicles/destruction/buoyancy stay off-map · harder. Capability map gained a "Physics & Simulation" section + Tutorial Index row; its "outside scope" line narrowed to *advanced* physics.
