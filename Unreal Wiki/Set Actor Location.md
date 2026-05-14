---
publish: true
---


Moves an actor to a new position in the world. This is the most direct way to place something at a specific location from a Blueprint. Feed it a Vector (X, Y, Z) and the actor teleports or sweeps there.

## Use When

- You need to move an actor to a computed position each frame (driven by [[Timeline]] + [[Lerp]])
- You want to teleport an actor to a specific location instantly
- You're building doors, platforms, elevators, or any actor that changes position during gameplay

## How It Works

### Pins

| Pin | Type | Description |
|---|---|---|
| **Target** | Actor | The actor to move (usually Self) |
| **New Location** | Vector | The world-space position to move to |
| **Sweep** | Boolean | If true, the actor moves incrementally and stops if it hits something. If false, it teleports directly. Default: false. |
| **Teleport** | Boolean | If true, physics velocity stays unchanged (ragdolls unaffected). If false, physics updates based on position change. Only matters if the actor has physics enabled. Default: false. |
| **Sweep Hit Result** | Hit Result | Output — collision info if Sweep was true and the actor hit something |
| **Return Value** | Boolean | Output — whether the move succeeded |

### Sweep vs. Teleport

For most tutorial-level uses, leave both **Sweep** and **Teleport** at their defaults (false). The actor simply appears at the new location each frame.

**Sweep** matters when the moving actor shouldn't pass through walls or other blocking geometry — the engine checks for collisions along the path. Useful for moving platforms that shouldn't clip through level geometry.

**Teleport** matters when the actor has physics simulation. Usually irrelevant for doors and platforms.

## Common Patterns

**Timeline-driven door ([[UE Tutorial 1 - A Floor Plate Opens A Door|Tutorial 1]] pattern):**
[[OnComponentBeginOverlap]] → Play on [[Timeline]] → float track (0 to 1) feeds [[Lerp]] Alpha → Lerp blends between closed Vector and open Vector → that Vector goes into **New Location** on Set Actor Location, called every frame from the Timeline's Update pin. The door slides smoothly.

**Instant teleport:**
Set New Location to a stored Vector. No Timeline needed — just fires once and the actor is there. Used for respawn points, teleporters, reset-to-start.

## Related

- [[Lerp]] — typically produces the Vector that feeds New Location
- [[Timeline]] — drives this node every frame via the Update pin
- [[Get Actor Location]] — reads the current position (useful for computing relative movement)

## Source

- [Set Actor Location | UE 5.7 Documentation](https://dev.epicgames.com/documentation/unreal-engine/BlueprintAPI/Transformation/SetActorLocation?application_version=5.7) — retrieved 2026-04-07

