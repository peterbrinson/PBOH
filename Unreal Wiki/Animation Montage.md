---
publish: true
---


An asset that wraps one or more Animation Sequences into a single playable unit with Blueprint control. Montages let you play animations on demand (attacks, emotes, interactions) without building a full Animation Blueprint state machine. They layer on top of whatever the character is already doing.

![[montagedemo.gif]]

Unlike [[Play Animation]] (which directly controls a mesh and has no completion callback), Montages integrate with the animation system and provide exec pins for On Completed, On Interrupted, and On Blend Out — so you know exactly when the animation finishes.

## Use When

- You need to play a one-shot animation on a character that already has an Animation Blueprint (attacks, gestures, pickups)
- You need to know when the animation finishes (On Completed) or gets interrupted (On Interrupted)
- You want to combine multiple animation sequences into sections that can play in any order
- You need to layer an animation on part of the body (upper body attack while legs keep running) using Slots

## How It Works

### Creating a Montage

Two methods:

**From scratch:** Content Browser → right-click → **Animation > Animation Montage** → select the Skeleton.

![[createfromscratch.png]]

**From an existing sequence:** Right-click an Animation Sequence in the Content Browser → **Create > Create AnimMontage**.

![[createfromsequ.png]]

### Playing a Montage in Blueprints

Two Blueprint nodes exist. Use **Play Montage** (the latent version):

| Pin | Direction | Type | Description |
|---|---|---|---|
| **In Skeletal Mesh Component** | Input | Object | The character's mesh — get from the Body or Mesh component |
| **Montage to Play** | Input | Object | The Animation Montage asset |
| **Play Rate** | Input | Float | Speed multiplier (1.0 = normal) |
| **Starting Position** | Input | Float | Time in seconds to start from |
| **Starting Section** | Input | Name | Jump to a named section |
| **On Completed** | Output | Exec | Fires when the montage finishes normally |
| **On Blend Out** | Output | Exec | Fires when the montage starts blending out |
| **On Interrupted** | Output | Exec | Fires if the montage is stopped early or fails to play |

**Montage Play** is the simpler variant — target is an Anim Instance, returns the montage duration as a float, but has no completion/interruption exec pins.

### Montage Sections

You can divide a Montage into named sections and control playback order at runtime. Sections appear as purple headers in the timeline.

![[montagesections.png]]

Use **Montage Jump to Section** in Blueprints to skip to a specific section during playback. This enables combo systems (Section 1 → Section 2 → Section 3 based on player input timing).

### Slots

Montages play in a **Slot** — a channel on the Animation Blueprint. By default, a montage overrides whatever animation is playing in that Slot. Using different Slots, you can play separate animations on different body parts simultaneously (e.g., upper body attack + lower body run).

![[montage2.png]]

### Child Montages

Create variants of a Montage by right-clicking → **Create Child Montage**. The child inherits the parent's structure (sections, timing, notifies) but lets you swap individual animation sequences. Useful for characters that share the same attack timing but use different animations.

![[createchild.png]]

## Common Patterns

**MetaHuman custom animation ([[UE Tutorial 202 - MetaHuman Animations (WIP)|Tutorial 5]], Chapter C):**
Import a Mixamo animation → retarget it to the MetaHuman skeleton → right-click the retargeted sequence → Create AnimMontage. In the Blueprint Event Graph, get the Anim Instance from the MetaHuman's Body component, then call Play Montage. The animation plays on top of the character's existing locomotion.

**Play Animation vs Animation Montage:**

| | [[Play Animation]] | Animation Montage |
|---|---|---|
| **Completion callback** | None — use [[Set Timer by Event]] as workaround | On Completed, On Interrupted, On Blend Out |
| **Animation Blueprint** | Not needed — direct mesh control | Integrates with the Animation Blueprint |
| **Layering** | Replaces everything | Plays in a Slot — can layer with other animations |
| **Best for** | Simple NPCs without Animation Blueprints | Player characters, MetaHumans, anything with an ABP |

## Related

- [[Animation Blueprint]] — the system montages play on top of; montages use Slots in the Anim Graph
- [[Play Animation]] — simpler alternative for characters without Animation Blueprints
- [[Character]] — the actor type that typically plays montages
- [[Custom Events]] — often triggers montage playback
- [[Components]] — montages target the Skeletal Mesh Component

## Source

- [Animation Montage in Unreal Engine | UE 5.7](https://dev.epicgames.com/documentation/unreal-engine/animation-montage-in-unreal-engine?application_version=5.7) — clipped 2026-04-12
- [Play Montage | UE 5.7](https://dev.epicgames.com/documentation/unreal-engine/BlueprintAPI/Animation/Montage/PlayMontage?application_version=5.7) — node reference, clipped 2026-04-12
- [Montage Play | UE 5.7](https://dev.epicgames.com/documentation/unreal-engine/BlueprintAPI/Animation/Montage/MontagePlay?application_version=5.7) — node reference, clipped 2026-04-12
- [[UE Tutorial 202 - MetaHuman Animations (WIP)|Tutorial 5]] — Chapter C (MetaHuman Mixamo animation import and playback)

