---
publish: true
---


A special node within Blueprints that provides time-based animation, played back based on **events**, **floats**, **vectors**, or **colors** triggered at keyframes along the timeline. Timelines handle simple, non-cinematic tasks: opening doors, altering lights, or performing other time-centric manipulations to Actors within a scene. They are similar to level sequences in that both provide values to be interpolated between keyframes.

Edit a Timeline by **double-clicking** it in the Graph tab or the My Blueprint tab.

## Use When

- You need to smoothly interpolate a value over time (position, rotation, opacity, color)
- You want to drive a door, elevator, or moving platform from a Blueprint
- You need play/reverse control over an animation (e.g., a door that opens and closes)
- The task is too simple for a Level Sequence but needs more control than a single [[Lerp]]

## How It Works

A Timeline contains one or more **tracks** — curves that define how values change over time. When triggered, it plays through its tracks and outputs values via its output pins.

### Input Pins

| Pin | What it does |
|---|---|
| **Play** | Play forward from current time |
| **Play from Start** | Play forward from the beginning |
| **Stop** | Freeze playback at current time |
| **Reverse** | Play backward from current time |
| **Reverse from End** | Play backward from the end |
| **Set New Time** | Jump to the time specified by **New Time** |
| **New Time** | Float value (seconds) — the target time for Set New Time |

### Output Pins

| Pin | What it does |
|---|---|
| **Update** | Outputs an execution signal as soon as the Timeline is called |
| **Finished** | Outputs an execution signal when playback ends (not triggered by Stop) |
| **Direction** | Enum — the direction the Timeline is currently playing |

Additional output data pins appear for each track added, reflecting the track type (float, vector, etc.).

### Track Types

Timelines may have any number of tracks:

- **Float Track** — outputs a float value along a curve. Most common. Used with [[Lerp]] to drive position, rotation, material parameters.
- **Vector Track** — outputs a Vector (X, Y, Z). Useful for driving location directly.
- **Event Track** — fires execution pins at specific keyframe times. No value output — just a trigger.

## Common Patterns

**Door open/close ([[UE Tutorial 1 - A Floor Plate Opens A Door|Tutorial 1]] pattern):**
A [[Collision Components|Box Collision]] component triggers [[OnComponentBeginOverlap]]. Play fires the Timeline. The float track outputs 0→1 over 1 second. That value feeds a [[Lerp]] between closed position and open position, driving [[Set Actor Location]] each frame via the Update pin. Reverse closes it.

## Related

- [[Lerp]] — typically receives the Timeline's float output as Alpha
- Level Sequence — heavier cinematic alternative
- [[OnComponentBeginOverlap]] — common trigger for starting a Timeline
- [[Set Actor Location]] — common target driven by Timeline output

## Source

- [Timelines in Unreal Engine | UE 5.7](https://dev.epicgames.com/documentation/unreal-engine/timelines-in-unreal-engine?application_version=5.7) — clipped 2026-04-08

