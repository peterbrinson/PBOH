---
publish: true
---


An event that fires when another actor or component **stops** overlapping a collision volume — a player stepping off a floor plate, leaving a trigger zone, or exiting a room boundary. The complement to [[OnComponentBeginOverlap]]: BeginOverlap starts something, EndOverlap reverses it.

## Use When

- You need to reverse something that BeginOverlap started (close a door, stop a sound, reset a light)
- You want to detect a player *leaving* an area
- You're building paired on/off trigger behavior

## How It Works

OnComponentEndOverlap is an **event node** — it fires automatically when an overlap ends. Same setup requirements as [[OnComponentBeginOverlap]]: both components need [[Collision Components|Generate Overlap Events]] enabled, and at least one needs a collision shape with an overlap-generating preset.

### Adding the Event

Select a collision component in the Components panel → Details panel → scroll to **Events** → click **+** next to **On Component End Overlap**.

### Output Pins

| Pin | Type | Description |
|---|---|---|
| **Overlapped Component** | Primitive Component | The component on *this* actor that was overlapped |
| **Other Actor** | Actor | The actor that left the volume |
| **Other Comp** | Primitive Component | The specific component on the other actor |
| **Other Body Index** | Integer | Body index for physics bodies (rarely used in simple setups) |

Same pins as [[OnComponentBeginOverlap]], minus From Sweep and Sweep Result (those only apply to entering, not leaving).

### Destruction Does NOT Trigger EndOverlap

If an actor is destroyed while still inside the volume (e.g., a collectable picked up via [[DestroyActor]]), EndOverlap does **not** fire. The actor is gone — there's no "exit" to detect. If your logic depends on EndOverlap for cleanup, destruction will skip it. Plan accordingly.

## Common Patterns

**Door close ([[UE Tutorial 1 - A Floor Plate Opens A Door|Tutorial 1]] pattern):**
[[OnComponentBeginOverlap]] on a [[Collision Components|Box Collision]] floor plate calls **Play** on a [[Timeline]] → the door opens. OnComponentEndOverlap on the same Box Collision calls **Reverse** on the same Timeline → the door closes. The Timeline handles smooth animation in both directions. This BeginOverlap/EndOverlap pair is the foundational on/off trigger pattern used throughout the tutorials.

**Trigger-once zones ([[UE Tutorial 4 - Haunted House Triggers and Events|Tutorial 4]] pattern):**
Tutorial 4's triggers intentionally *don't* use EndOverlap — they fire once and stay triggered (using a bool "HasTriggered" gate). EndOverlap is only useful when you want reversible behavior. If the effect should be permanent (lights stay on, NPC stays triggered), skip EndOverlap entirely.

## Related

- [[OnComponentBeginOverlap]] — the companion event; fires on entry
- [[Collision Components|Box Collision]] — rectangular component that generates this event
- [[Collision Components|Sphere Collision]] — spherical component that generates this event
- [[Timeline]] — Reverse pin is commonly called from this event
- [[Collision Components|Generate Overlap Events]] — must be enabled on both components
- [[DestroyActor]] — does not trigger EndOverlap (gotcha)

## Source

- [On Component End Overlap | UE 5.7](https://dev.epicgames.com/documentation/unreal-engine/BlueprintAPI/Collision/OnComponentEndOverlap?application_version=5.7) — clipped 2026-04-07
- [[UE Tutorial 1 - A Floor Plate Opens A Door|Tutorial 1]] — door close pattern (BeginOverlap/EndOverlap pair)
- [[UE Tutorial 4 - Haunted House Triggers and Events|Tutorial 4]] — trigger-once pattern (intentionally no EndOverlap)

