---
publish: true
---

# Physical Material

A small asset that describes what a surface is *made of* — its physical response. It carries properties like `Restitution` (bounciness) and `Friction`, plus a `Surface Type` label, and answers two questions: how does this surface behave in a physics collision, and what kind of surface did a trace just hit. The visual look of a surface lives in its [[Material]]; how it *feels* to the physics system lives here.

## Use When

- You want an object to bounce, or to slide on ice vs. grip like rubber — set `Restitution` / `Friction` on a Physical Material and apply it.
- You need a footstep system, decal picker, or hit reaction to know what was struck (wood vs. metal vs. flesh) — read the `Surface Type` from the trace result.
- You want one consistent physical response shared across every object using a given [[Material]] — attach the Physical Material to the Material itself.

## How It Works

**Creation.** Content Drawer → **Add → Physics → Physical Material** (or right-click → Physics → Physical Material). Double-click to edit its properties, adjust, Save. Convention: prefix the name `PM_` (same spirit as `BP_`, `M_`).

![[new-physical-material.png]]

![[physical-material-properties.png]]

![[adjust-properties.png]]

**Surface Type.** UE5 supports up to 62 Surface Types, free-text labels you define for your project (Concrete, Metal, Flesh…). They are stored in `Config/DefaultEngine.ini` under your project root and edited via Project Settings → Physics. A trace against a surface returns its Surface Type, which gameplay then switches on.

**Where it can be assigned.** A Physical Material can be attached at several levels; which one wins depends on whether collision is simple or complex:

| Assigned on | Applies to |
|---|---|
| [[Material]] / Material Instance (main node's Phys Material slot) | Complex (per-poly) collision traces against surfaces using that material |
| [[Static Mesh]] (Static Mesh Editor → **Simple Collision Physical Material**) | Simple collision on that mesh |
| Physics Asset (Skeletal Mesh) — toolbar dropdown, or per–Physics Body | Skeletal mesh collision (always simple — see below) |
| **Phys Material Override** (any Actor/Component with a Collision category) | Overrides the simple-collision Physical Material on that specific instance |

**Simple vs. complex resolution** (the key rule). On a [[Static Mesh]]:

- A collision/trace using **simple collision** reads the Physical Material set in the Static Mesh Editor — unless **Phys Material Override** on the placed actor is not `None`, which then takes priority.
- A collision/trace using **complex collision** reads the Physical Material from the [[Material]] applied to the surface that was hit — again, overridden by **Phys Material Override** if set.

`Phys Material Override` is the simplest, most local lever: it completely replaces the simple-collision Physical Material on one Actor or Component. It does **not** affect complex-collision traces.

**Skeletal Meshes.** Physics interactions with a Skeletal Mesh go through its **Physics Asset**, not the mesh's render material — so the render material's Physical Material is ignored. Set the Physical Material in the Physics Asset Editor: assign one to all Physics Bodies from the toolbar dropdown first, then override individual bodies via their **Simple Collision Physical Material** in the Details panel. Because a Physics Asset always returns simple collision, `Phys Material Override` on a placed Skeletal Mesh Actor overrides every body at once. (Tracing against a Physics Asset requires a complex trace, but it still returns the *Simple Collision* Physical Material of the body hit.)

## Common Patterns

**Bouncy ball ([[UE Tutorial 501 - Simple Physics|Tutorial 501]] pattern):**
Create `PM_Bouncy` with `Restitution` `0.9`, select a simulated [[Collision Components|Sphere]] in the level, and set **Phys Material Override** in its Collision section to `PM_Bouncy`. The sphere lands in long arcs; an un-overridden sphere beside it thuds. A `PM_Ice` with `Friction` `0` applied to a ramp shows the friction side.

**Material-wide surface response:**
Attach a Physical Material inside a [[Material]] asset so every mesh using that material is automatically icy or rubbery — no per-object setup. When both a Material-level Physical Material and a per-object `Phys Material Override` are present, the override wins for simple collision.

**Surface-aware feedback:**
A weapon or footstep [[Traces|trace]] hits a surface, reads its Surface Type from the Hit Result, and switches the played sound or spawned decal accordingly — wood creaks, metal clangs.

## Related

- [[Material]] — the visual/shading asset; can hold a Physical Material for complex-collision response
- [[Static Mesh]] — carries both simple and complex collision, each resolving the Physical Material differently
- [[Collision Components]] — simple-collision shapes; physics simulation runs against these
- [[OnComponentHit]] — the blocking-collision event where `Restitution` and `Friction` play out
- [[Traces]] — how Surface Type is read back at runtime

## Source

- [Physical Materials User Guide | UE 5.5](https://dev.epicgames.com/documentation/unreal-engine/physical-materials-user-guide-for-unreal-engine?application_version=5.5) — clipped 2026-06-11
- [Physical Material Reference | UE 5.5](https://dev.epicgames.com/documentation/unreal-engine/physical-materials-reference-for-unreal-engine?application_version=5.5)
- [[UE Tutorial 501 - Simple Physics|Tutorial 501]] — PM_Bouncy / Restitution / Phys Material Override pattern
