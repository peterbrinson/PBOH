---
publish: true
---


Sets the rotation of a component relative to its parent. Unlike [[Set Actor Location]] which moves an actor in world space, this rotates a component relative to whatever it's attached to — making it the right choice for doors, hinged objects, and anything that rotates around a pivot point.

Target is Scene Component.

## Use When

- You need to rotate a door, lid, lever, or any hinged object
- You want rotation relative to a parent actor (not world-space rotation)
- You're driving rotation with a [[Timeline]] + [[Lerp]]

## How It Works

### Input Pins

| Pin | Type | Description |
|---|---|---|
| **Target** | Scene Component | The component to rotate |
| **New Rotation** | Rotator (Pitch, Yaw, Roll) | The new rotation relative to the parent. Right-click → **Split Struct Pin** to expose X (Roll), Y (Pitch), Z (Yaw) as separate float pins |
| **Sweep** | Boolean | Not currently supported for rotation — leave false |
| **Teleport** | Boolean | If true, physics velocity stays unchanged. Usually leave false |

### Split Struct Pin

The New Rotation pin is a Rotator (3 values packed together). For a door that only swings on one axis, right-click the pin and choose **Split Struct Pin**. This breaks it into three separate float pins — typically you only need to drive **Z (Yaw)** and leave X and Y at 0.

## Common Patterns

**Door swing ([[UE Tutorial 4 - Haunted House Triggers and Events|Tutorial 4]], Chapter B):**
[[OnComponentBeginOverlap]] → [[Cast To]] player → [[Timeline]] outputs 0→1 → [[Lerp]] between 0° and 90° → Set Relative Rotation with Split Struct Pin, connecting only the Z (Yaw) pin. The door swings open around its parent's origin.

**Rotation axis trick (Tutorial 4, Chapter B):**
A door mesh rotates around its own center by default — not around its hinge. Fix: place a **Static Mesh Actor** at the hinge point, make the door a child of it. Apply Set Relative Rotation to the parent. The door now swings around the hinge, not its center. This parent-as-pivot pattern works for any hinged object.

## Related

- [[Set Actor Location]] — same pattern but for position instead of rotation
- [[Timeline]] — drives the rotation value over time
- [[Lerp]] — interpolates between start and end rotation angles

## Source

- [Set Relative Rotation | UE 5.7](https://dev.epicgames.com/documentation/unreal-engine/BlueprintAPI/Transformation/SetRelativeRotation?application_version=5.7) — clipped 2026-04-11
- [[UE Tutorial 4 - Haunted House Triggers and Events|Tutorial 4]] — Chapter B (door rotation, Split Struct Pin, parent-as-pivot)

