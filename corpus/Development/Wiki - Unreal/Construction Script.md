---
publish: true
---


A special graph in every Blueprint Class that runs once when the actor spawns — both when placed in the level editor and when spawned during gameplay. It also re-runs in the editor whenever you move the actor or change one of its properties, so you see the result immediately in the viewport.

Construction Script runs *before* Event BeginPlay. It's for setup: configuring components, applying materials, setting initial values based on context. It is not for gameplay logic.

## Use When

- You need to initialize an actor's appearance or properties at spawn time (apply a material, set a color, configure a light)
- You want an actor to look different in the editor based on its variable values (preview colors, preview mesh swaps)
- Setup logic needs to run regardless of whether the actor was placed in the editor or spawned at runtime

## How It Works

Open a Blueprint Class → click the **Construction Script** tab (next to Event Graph and Viewport). The graph starts with a single **Construction Script** node. Wire your setup logic from its execution pin.

### When It Runs

| Situation | Runs? |
|---|---|
| Actor placed in level (editor) | Yes |
| Actor moved or rotated (editor) | Yes |
| Actor property changed (editor) | Yes |
| Actor spawned at runtime (Spawn Actor) | Yes |
| Every frame during gameplay | No — runs once, not per tick |

### Construction Script vs Event BeginPlay

Both run once when an actor starts. The difference:

- **Construction Script** runs in the editor too, so you can see its effects while building levels. BeginPlay only runs during gameplay.
- **Construction Script** re-runs when you edit the actor's properties. BeginPlay doesn't.
- Use Construction Script for visual setup. Use BeginPlay for gameplay initialization (binding events, starting timers, spawning other actors).

## Common Patterns

**Context-dependent material:** An actor has an Instance Editable enum variable (e.g., "Ground Type" with values Grass, Stone, Sand). The Construction Script reads the variable and applies the corresponding material to the Static Mesh Component. When you change the dropdown in the editor, the mesh updates immediately.

**Preview configuration:** A light Blueprint has editable Color and Intensity variables. The Construction Script applies them to the Point Light Component. Designers see the actual light color in the editor without pressing Play.

## Related

- [[Components]] — Construction Script configures components at spawn time
- [[Custom Events]] — gameplay-time events (Construction Script is setup-time only)
- [[Blueprint Instances]] — Instance Editable variables drive per-instance Construction Script behavior

## Source

- [Blueprint Visual Scripting | UE 5.7](https://dev.epicgames.com/documentation/unreal-engine/blueprints-visual-scripting-in-unreal-engine?application_version=5.7) — Construction Script section, clipped 2026-04-12

