---
publish: true
---


An event that fires when a component receives a blocking physical collision — a projectile striking a wall, a character landing on a surface, an object slamming into another. Unlike [[OnComponentBeginOverlap]] (which detects non-blocking overlap), OnComponentHit fires when physics actually stops or redirects movement.

## Use When

- You need to detect a projectile hitting a target or surface
- You want to know the impact point and force of a collision (not just that two things touched)
- The collision should block movement, not allow pass-through
- You're building hit reactions, damage systems, or impact effects

## How It Works

OnComponentHit is an **event node** that fires automatically when a component with a **blocking** collision preset collides with another component. Two requirements:

1. The component's collision preset must be set to **Block** (not Overlap or Ignore) for the relevant object types
2. **Simulation Generates Hit Events** must be enabled on the component that wants to receive the event (Details → Collision). Without this, blocking collisions still physically stop movement but won't fire the Blueprint event.

See [[Collision Components]] for the full collision response system (Block vs Overlap vs Ignore rules).

### Adding the Event

Right-click a component in the Components panel → **Add Event** → **Add OnComponentHit**. This creates the event node in the Event Graph, bound to that component. Alternatively: select the component → Details panel → Events → click **+** next to **On Component Hit**.

### Output Pins

| Pin | Type | Description |
|---|---|---|
| **Hit Component** | Primitive Component | The component on *this* actor that was hit |
| **Other Actor** | Actor | The actor that hit us |
| **Other Comp** | Primitive Component | The specific component on the other actor involved in the collision |
| **Normal Impulse** | Vector | The force of the impact — direction and magnitude of the collision |
| **Hit Result** | Hit Result | Detailed impact data: location, impact normal, bone name, physics material. Same structure as [[Traces]] hit results |

### Hit vs Overlap

| | OnComponentHit | [[OnComponentBeginOverlap]] |
|---|---|---|
| **Collision response** | Block — movement is stopped or redirected | Overlap — objects pass through each other |
| **Impact data** | Yes — location, force, normal | Limited — Sweep Result only valid from movement |
| **Typical use** | Projectile hits, landing detection, damage | Trigger zones, pickups, proximity detection |
| **Requires** | Collision preset set to Block + Simulation Generates Hit Events | Generate Overlap Events on both components |

The same component can generate both hit and overlap events with different actors, depending on its collision preset's per-channel settings (Block for some object types, Overlap for others).

## Common Patterns

**Projectile hits a target:**
A target actor has a Static Mesh with collision set to Block. OnComponentHit fires when a projectile strikes it → [[Cast To]] checks if OtherActor is the projectile class → if yes, increment score, play sound, destroy projectile.

**Impact location for effects:**
Break the **Hit Result** pin to get **Impact Point** and **Impact Normal**. Spawn a particle effect or decal at the impact point, oriented along the normal. Same Break Hit Result workflow as [[Traces]].

## Related

- [[OnComponentBeginOverlap]] — non-blocking overlap detection; use when objects should pass through
- [[OnComponentEndOverlap]] — fires when an overlap stops
- [[Collision Components]] — the volumes that generate hit and overlap events
- [[Traces]] — raycasts that also produce Hit Results
- [[Cast To]] — used to verify what actor caused the hit

## Source

- [Hits and Overlaps (BP + C++) (+ Multiplayer)](https://dev.epicgames.com/community/learning/tutorials/zw7m/unreal-engine-hits-and-overlaps-bp-c-multiplayer) — community tutorial, Blueprint Example #01 (target practice hit/overlap pattern)
- [Collision in Unreal Engine - Overview | UE 5.7](https://dev.epicgames.com/documentation/unreal-engine/collision-in-unreal-engine-overview?application_version=5.7) — clipped 2026-04-12

