---
publish: true
---


Plays an animation asset on a Skeletal Mesh Component. This is the direct, simple approach — point it at an animation sequence and it plays. No Animation Blueprint or state machine required.

Target is Skeletal Mesh Component.

## Use When

- You need to play a specific animation on an NPC or character (attack, wave, react)
- The character doesn't have an Animation Blueprint (e.g., a simple Mixamo import)
- You want direct control over which animation plays and when

## How It Works

### Input Pins

| Pin | Type | Description |
|---|---|---|
| **Target** | Skeletal Mesh Component | The mesh to animate — access via the character's Mesh component reference |
| **New Anim to Play** | Animation Sequence | The animation asset to play. Can be promoted to a variable for per-instance configuration |
| **Looping** | Boolean | If true, the animation repeats. If false, it plays once and holds the last frame |

### Limitation: No "On Finished" Callback

Play Animation has no output pin that fires when the animation ends. If you need to do something after (like return to idle), use [[Set Timer by Event]] with a delay matching the animation's length. This is a workaround — Animation Blueprints handle transitions more elegantly, but Play Animation is simpler for basic NPC setups.

### Not Safe in Construction Script

Play Animation changes transient data on the animation instance. Don't call it in the Construction Script — use it only during gameplay (Event Graph, Custom Events).

## Common Patterns

**NPC attack with return to idle ([[UE Tutorial 4 - Haunted House Triggers and Events|Tutorial 4]], Chapter C):**
BP_Zombie is a [[Character]] Blueprint with a Mixamo skeletal mesh. Animation Mode is set to "Use Animation Asset" with idle as the default. A [[Custom Events|Custom Event]] `PlayAttackAnimation` calls Play Animation with the attack sequence (Looping = false). A [[Set Timer by Event]] fires after the attack's duration, triggering a second Play Animation that returns to idle (Looping = true).

**Why not an Animation Blueprint?** Mixamo characters imported directly don't have an Animation Blueprint — they just have raw animation sequences. For a simple NPC that idles and attacks, Play Animation + timer is the fastest path. For characters with complex state (walk/run/jump blends, multiple transitions), an Animation Blueprint is the right tool.

**Trigger from another Blueprint (Tutorial 4, Chapter C):**
A separate trigger Blueprint (with [[Collision Components|Box Collision]] + [[OnComponentBeginOverlap]]) holds a reference to BP_Zombie as an Instance Editable variable. When the player enters the trigger zone, it calls `PlayAttackAnimation` on the zombie reference. This keeps the trigger logic and the animation logic in separate Blueprints.

## Related

- [[Animation Montage]] — richer alternative with completion callbacks, sections, and slot layering; use for characters with Animation Blueprints
- [[Character]] — the parent class for NPC Blueprints that use Play Animation
- [[Custom Events]] — the entry point that triggers Play Animation
- [[Set Timer by Event]] — used to time the return-to-idle after a one-shot animation
- [[Getting References]] — the trigger Blueprint needs a reference to the NPC to call its event

## Source

- [Play Animation | UE 5.7](https://dev.epicgames.com/documentation/unreal-engine/BlueprintAPI/Components/Animation/PlayAnimation?application_version=5.7) — clipped 2026-04-11
- [[UE Tutorial 4 - Haunted House Triggers and Events|Tutorial 4]] — Chapter C (Mixamo NPC, attack + return-to-idle pattern)

