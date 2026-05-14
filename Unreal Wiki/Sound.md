---
publish: true
---


Unreal provides several ways to play audio. The two most relevant to the tutorials are **Play Sound at Location** (one-shot, fire-and-forget) and **Ambient Sound** (persistent, spatial, controllable). Choosing the right one depends on whether the sound is a momentary event or an ongoing presence.

## Play Sound at Location

A Blueprint node that plays a sound once at a world position. Fire-and-forget — it plays, it's done, you can't stop or modify it. Target is Gameplay Statics.

### Key Pins

| Pin | Type | Description |
|---|---|---|
| **Sound** | Sound Base | The sound asset. Can be promoted to a variable and made [[Blueprint Instances|Instance Editable]] |
| **Location** | Vector | World position. Use [[Get Actor Location]] for an actor's position |
| **Volume Multiplier** | Float | Volume scale (1.0 = normal) |
| **Pitch Multiplier** | Float | Pitch scale (1.0 = normal) |
| **Start Time** | Float | Seconds to skip ahead into the sound |
| **Attenuation Settings** | Object | Override spatial falloff (how sound fades with distance) |

### Play Sound 2D

The non-spatial variant. Plays at full volume regardless of listener position. Use for UI sounds, music stings, or anything that shouldn't be affected by the player's location in the world.

### When to Use

One-shot effects: door creaks, pickup chimes, explosions, footstep impacts. Anything that plays once and doesn't need to be controlled afterward.

## Ambient Sound

An **actor** (not a node) placed in the level. It exists as a persistent sound source at a fixed location in the world. Unlike Play Sound at Location, Ambient Sound can be turned on/off, have its volume adjusted at runtime, and spatializes automatically based on the player's distance.

### Key Properties

| Property | What It Does |
|---|---|
| **Sound** | The audio asset to play |
| **Volume** | Base volume. Set to 0 by default if you want a trigger to turn it on |
| **Spatialization** | Enable for 3D positional audio — sound appears to come from the actor's location |
| **Inner Radius** | Distance within which the sound plays at full volume |
| **Falloff Distance** | Distance over which the sound fades to silence beyond the Inner Radius |

### When to Use

Persistent environmental audio: room tone, wind, machinery hum, background music tied to a location. Anything the player walks toward and away from, or that you want to turn on/off via a trigger.

## Choosing Between Them

| | Play Sound at Location | Ambient Sound |
|---|---|---|
| **Type** | Blueprint node | Level actor |
| **Duration** | One-shot | Persistent / looping |
| **Control after start** | None | Volume, on/off |
| **Spatialization** | Manual (via Attenuation Settings) | Built-in (Inner Radius + Falloff) |
| **Triggered by** | Blueprint logic | Exists in level; can be controlled by triggers |

## Common Patterns

**Door creak ([[UE Tutorial 4 - Haunted House Triggers and Events|Tutorial 4]], Chapters A & B):**
After a [[Timeline]] fires, Play Sound at Location plays a one-shot sound. The Sound pin is promoted to a variable and made [[Blueprint Instances|Instance Editable]] — each door instance plays a different sound.

**Triggered ambient audio (Tutorial 4, Chapter D):**
An Ambient Sound actor is placed in the level with Volume set to 0. A trigger Blueprint holds a reference to it (Instance Editable variable of type Ambient Sound). When the player enters the trigger zone ([[OnComponentBeginOverlap]]), the Blueprint sets the Ambient Sound's volume to its active level. The sound fades in spatially as the player moves through the space.

## Related

- [[Get Actor Location]] — provides the Location input for Play Sound at Location
- [[Timeline]] — commonly triggers one-shot sounds after an animation
- [[Blueprint Instances]] — Instance Editable sound variables let each trigger play different audio
- [[OnComponentBeginOverlap]] — the event that triggers sound activation

## Source

- [Play Sound at Location | UE 5.7](https://dev.epicgames.com/documentation/unreal-engine/BlueprintAPI/Audio/PlaySoundatLocation?application_version=5.7) — clipped 2026-04-11
- [[UE Tutorial 4 - Haunted House Triggers and Events|Tutorial 4]] — Chapters A & B (one-shot sounds), Chapter D (Ambient Sound trigger)

