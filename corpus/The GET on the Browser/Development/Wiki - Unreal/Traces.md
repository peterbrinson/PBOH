---
publish: true
---


Traces (also called raycasts) shoot an invisible line or shape from a start point to an end point and report what they hit along the way. They're the standard way to detect what a player is looking at, check line of sight, simulate projectiles, or test if something is in the way.

Traces are computationally cheap compared to overlap checks and work through the physics system — only objects with collision set to respond to the trace's channel or object type will register as hits.

## Use When

- You need to detect what the player is looking at (interaction systems, crosshair targeting)
- You want line-of-sight checks (can enemy see the player?)
- You're simulating instant-hit weapons (hitscan)
- You need to find the surface normal or material at a hit point
- You want to check if a space is clear before spawning or moving an object

## How It Works

### Trace Types

Every trace has two independent choices: **what shape** and **what to filter by**.

**Shape:**

| Shape | Description | Use For |
|---|---|---|
| **Line Trace** | A single ray with no width | Precise targeting, hitscan weapons |
| **Sphere Trace** | A sphere swept along the line | Forgiving aim detection, interaction systems (player doesn't have to aim precisely) |
| **Box Trace** | A box swept along the line | Wide area checks, vision cones |
| **Capsule Trace** | A capsule swept along the line | Character-shaped clearance checks |

![[traces-overview-shape-traces.png]]

**Filter:**

| Filter | Description |
|---|---|
| **By Channel** | Tests against a collision channel (Visibility, Camera, or custom). Objects respond based on their collision response settings. Most common choice. |
| **By Object** (For Objects) | Tests against specific object types (WorldStatic, WorldDynamic, Pawn, etc.). Returns anything matching those types. |

Combine these freely: Line Trace By Channel, Sphere Trace For Objects, Box Trace By Channel, etc.

### Single vs Multi

- **Single Trace** — returns the **first** hit. Output is a single Hit Result on the **Out Hit** pin. **Return Value** (bool) tells you if anything was hit.
- **Multi Trace** — returns **all** hits as an array on **Out Hits**. For By Channel, returns all overlaps up to and including the first blocking hit. For By Object, returns everything matching the specified types.

Multi traces feed naturally into [[For Each Loop]] to process each hit.

### Common Pins

All trace nodes share these inputs:

| Pin | Description |
|---|---|
| **Start** | World-space start position (usually camera or actor location) |
| **End** | World-space end position (start + forward vector * distance) |
| **Trace Channel** / **Object Types** | What to trace against |
| **Trace Complex** | If true, traces against complex collision (mesh triangles) instead of simple collision |
| **Actors to Ignore** | Array of actors the trace should pass through |
| **Draw Debug Type** | None, For One Frame, For Duration — visualizes the trace as a red/green line |
| **Ignore Self** | Whether the trace ignores the actor running it (default: checked) |

Shape traces add **Radius** (sphere), **Half Size + Orientation** (box), or **Radius + Half Height** (capsule).

### Calculating Start and End

The typical pattern for a "look at" trace from the camera:

1. Get the camera's world location → **Start**
2. Get the camera's forward vector → multiply by trace distance (e.g., 1500) → add to Start → **End**

In [[UE Tutorial 821 - Base Interactive System (WIP)|Tutorial 821]], a slightly different approach is used: **Convert Screen Location To World Space** computes the trace from the center of the screen, and a **Trace Distance** variable controls the reach.

### Break Hit Result

When a trace hits something, the **Out Hit** pin contains a **Hit Result** struct. Use **Break Hit Result** to access its fields:

![[blueprint-hit-struct.png]]

Key fields for most use cases:

| Field | What It Gives You |
|---|---|
| **Hit Actor** | Reference to the actor that was hit — promote to variable to interact with it later |
| **Hit Component** | The specific component hit (useful if the actor has multiple collision shapes) |
| **Location** | World-space position of the hit, adjusted for trace shape |
| **Impact Point** | Exact point of contact (ignoring trace shape) |
| **Impact Normal** | Surface normal at the hit point — useful for decals, bounce directions |
| **Distance** | Distance from Start to the hit |
| **Phys Mat** | Physical Material of the surface — useful for footstep sounds, impact effects |
| **Hit Bone Name** | If hitting a Skeletal Mesh, which bone was hit |

### Draw Debug

Set **Draw Debug Type** to **For One Frame** or **For Duration** during development. The trace draws as a red line (miss) or green line (hit) with impact points marked. Set it back to **None** before shipping.

## Common Patterns

**Interaction system ([[UE Tutorial 821 - Base Interactive System (WIP)|Tutorial 821]] pattern):**
A Sphere Trace By Channel fires every 0.1 seconds (via [[Set Timer by Event|Set Timer by Function Name]]) from the center of the screen. If it hits an actor with the `Interactable` tag (**Actor Has Tag**), store a reference to that actor and enable interaction. Sphere Trace is used instead of Line Trace so the player doesn't have to aim precisely at small objects.

**Camera-forward line trace (Single Line Trace guide pattern):**
Get the First Person Camera's world location (Start) and forward vector. Multiply the forward vector by the desired trace length (e.g., 1500) and add it to Start (End). Wire the Line Trace By Channel's Out Hit through Break Hit Result → Hit Actor → To String → [[Print String]] to verify hits.

![[guide-how-to-2b-10.png]]

**Interface-based interaction ([[UE Tutorial 801 - Inspect an Object|Tutorial 801]] pattern):**
On E key press, fire a Line Trace By Channel from the camera with a short range (`DistanceToRead = 200`). If Return Value is true, call a [[Blueprint Interface]] function (`Examine`) directly on the Hit Actor. No cast, no tag check — if the actor implements the interface, the function runs; if not, the call is silently ignored. Simpler and cleaner than the Tutorial 821 sphere trace approach when you don't need continuous hover detection.

**Multi trace with iteration:**
Use a Multi Line Trace By Channel to find all objects along a path. Wire **Out Hits** (array) into a [[For Each Loop]]. Inside the loop, **Break Hit Result** on each Array Element to process individual hits — print names, apply damage, spawn effects.

![[guide-how-to-2b-19.png]]

## Related

- [[Collision Components]] — traces test against collision; objects need collision enabled to be detected
- [[For Each Loop]] — process Multi Trace hit arrays
- [[Actor Has Tag]] — common next step after a trace hit: check if the hit actor has a specific tag
- [[Branch]] — check Return Value (did the trace hit anything?)
- [[Blueprint Interface]] — call an interface function on the Hit Actor without casting
- [[Getting References]] — Hit Actor from Break Hit Result is a way to get a reference to whatever the player is looking at

## Source

- [Traces in Unreal Engine - Overview | UE 5.5](https://dev.epicgames.com/documentation/unreal-engine/traces-in-unreal-engine---overview?application_version=5.5) — clipped 2026-04-11
- [Using a Single Line Trace (Raycast) by Channel | UE 5.5](https://dev.epicgames.com/documentation/unreal-engine/using-a-single-line-trace-raycast-by-channel-in-unreal-engine?application_version=5.5) — clipped 2026-04-11
- [[UE Tutorial 821 - Base Interactive System (WIP)|Tutorial 821]] — Sphere Trace By Channel interaction system

