---
publish: true
---


**Linear Interpolation.** Takes two values (A and B) and blends between them based on a third value called **Alpha**. When Alpha is 0, the result is A. When Alpha is 1, the result is B. At 0.5, you get the midpoint. The blend is linear — evenly spaced across the range.

The formula: `Result = A + Alpha × (B - A)`

## Use When

- You need to smoothly move an actor between two positions (closed → open, ground → raised)
- You want to blend between two material values (transparent → opaque, cold color → hot color)
- A [[Timeline]] is outputting a 0-to-1 float and you need to map that to real-world values
- You want to fade a light, scale an object, or transition any numeric property over time

## How It Works

### Pins

| Pin | Type | Description |
|---|---|---|
| **A** | Float | The starting value (result when Alpha = 0) |
| **B** | Float | The ending value (result when Alpha = 1) |
| **Alpha** | Float | The blend factor, typically 0.0 to 1.0 |
| **Return Value** | Float | The interpolated result |

### Variants

Lerp exists in multiple typed versions in Blueprints:

- **Lerp (Float)** — most common. Blends between two float values.
- **Lerp (Vector)** — blends between two Vector values (X, Y, Z interpolated independently). Used for position and scale.
- **Lerp (Rotator)** — blends between two rotations. Handles angle wrapping.
- **Lerp (Linear Color)** — blends between two colors.

All variants work the same way — Alpha controls the blend.

### Alpha Outside 0–1

Alpha values below 0 or above 1 extrapolate beyond A and B. A clamped variant (**Lerp (Clamped)**) restricts Alpha to 0–1 if you want to prevent overshoot.

## Common Patterns

**Timeline → Lerp → Set Actor Location ([[UE Tutorial 1 - A Floor Plate Opens A Door|Tutorial 1]] pattern):**
A [[Timeline]] outputs a float track ranging from 0 to 1. That float feeds the Alpha pin of a Lerp node. A is the door's closed position, B is the open position. The Lerp output drives [[Set Actor Location]] on the [[Timeline]]'s Update pin. The door slides smoothly from closed to open.

**Material parameter blend:**
Lerp between two material values (e.g., emissive intensity 0 → 5) to make an object glow when triggered. Alpha comes from a [[Timeline]] or a parameter driven by gameplay.

## Related

- [[Timeline]] — the most common source of the Alpha value
- [[Set Actor Location]] — common target for Lerp's output

## Source

- [Lerp | UE 5.7 Documentation](https://dev.epicgames.com/documentation/unreal-engine/node-reference/Dataflow/Lerp) — retrieved 2026-04-07

