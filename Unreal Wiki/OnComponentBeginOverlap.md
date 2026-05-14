---
publish: true
---


An event that fires when another actor or component starts overlapping a collision volume — a player stepping onto a [[Collision Components|Box Collision]], a projectile entering a trigger zone, a character walking through a doorway. This is the primary way Blueprints detect proximity and contact without blocking movement.

## Use When

- You need to detect a player entering an area (trigger zone, pickup radius, room boundary)
- You want to start a [[Timeline]] when something touches a floor plate or trigger
- You're building collectables, interactive zones, or proximity-based events
- You need overlap detection but not physics collision (for blocking collisions, use OnComponentHit instead)

## How It Works

OnComponentBeginOverlap is an **event node** — it sits in the Event Graph and fires automatically when an overlap occurs. You don't call it; the engine calls it for you.

### Requirements

Both components involved must have **Generate Overlap Events** set to **true**. If either one has it disabled, no event fires. 

At least one of the components must have a collision shape ([[Collision Components|Box Collision]], [[Collision Components|Sphere Collision]], or [[Collision Components|Capsule Collision]]) with its **Collision Preset** set to generate overlaps (e.g., OverlapAllDynamic, or a custom profile).

### Output Pins

| Pin | Type | Description |
|---|---|---|
| **Overlapped Component** | Primitive Component | The component on *this* actor that was overlapped |
| **Other Actor** | Actor | The actor that caused the overlap |
| **Other Comp** | Primitive Component | The specific component on the other actor that overlapped |
| **Other Body Index** | Integer | Body index for physics bodies (rarely used in simple setups) |
| **From Sweep** | Boolean | True if the overlap resulted from a sweep (movement), false if placed into overlap |
| **Sweep Result** | Hit Result | Detailed hit information — impact point, normal, etc. Only valid when From Sweep is true |

### Adding the Event

Select a collision component in the Components panel → go to the Details panel → scroll to **Events** → click **+** next to **On Component Begin Overlap**. This creates the event node in the Event Graph, already bound to that component.

## Common Patterns

**Floor plate triggers a door ([[UE Tutorial 1 - A Floor Plate Opens A Door|Tutorial 1]] pattern):**
A [[Collision Components|Box Collision]] component on a floor plate actor has OnComponentBeginOverlap. When the player steps on it, the event fires → calls Play on a [[Timeline]] → the [[Timeline]] drives a [[Lerp]] → the door opens. [[OnComponentEndOverlap]] reverses it when the player steps off.

**Collectable pickup ([[UE Tutorial 2 - Collectables and Restart|Tutorial 2]] pattern):**
A collectable actor has a [[Collision Components|Sphere Collision]] with OnComponentBeginOverlap. When the player overlaps, the event fires → the collectable is destroyed → a counter increments.

**Checking who overlapped:**
Use the **Other Actor** pin with a [[Cast To]] node to verify the overlapping actor is actually the player (not an AI, physics object, or another trigger). This prevents unintended triggers.

## Related

- [[OnComponentEndOverlap]] — fires when the overlap stops (player leaves the zone)
- [[OnComponentHit]] — fires on blocking collisions instead of overlaps
- [[Collision Components|Box Collision]] — the most common component that generates this event
- [[Collision Components|Sphere Collision]] — alternative collision shape for radial triggers
- [[Cast To]] — used to verify the overlapping actor's type
- [[Timeline]] — commonly started by this event
- [[Collision Components|Generate Overlap Events]] — the setting that must be enabled for this to work

## Source

- [On Component Begin Overlap | UE 5.7 Documentation](https://dev.epicgames.com/documentation/unreal-engine/BlueprintAPI/Collision/OnComponentBeginOverlap) — retrieved 2026-04-07

