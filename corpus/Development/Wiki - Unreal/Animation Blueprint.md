---
publish: true
---


A specialized Blueprint that controls how a Skeletal Mesh animates. Instead of playing a single animation directly (like [[Play Animation]]), an Animation Blueprint evaluates multiple animations, blends between them, and picks the right pose every frame based on gameplay variables — is the character moving? How fast? Jumping? The template characters (BP_ThirdPersonCharacter, BP_FirstPersonCharacter) come with one pre-built.

![[editoroverview.png]]

## Use When

- Your character needs to blend between animations based on gameplay state (idle → walk → run → jump)
- You're using a [[MetaHuman]] as a player character (retarget the template ABP to the MetaHuman skeleton)
- You need [[Animation Montage]] playback layered on top of locomotion (attacks, emotes)
- Your character has complex animation needs beyond playing a single sequence

## When You Don't Need One

- Simple NPCs with one or two animations — [[Play Animation]] + [[Set Timer by Event]] is enough
- Static objects with a looping animation — set Animation Mode to "Use Animation Asset" directly on the Skeletal Mesh component

## How It Works

### Creating an Animation Blueprint

Content Browser → right-click → **Animation > Animation Blueprint** → select the **Skeleton** this ABP will animate. The ABP is bound to one Skeleton — it can only animate meshes that share that Skeleton.

### Three Graph Types

An Animation Blueprint contains three kinds of graphs, each with a different purpose:

**Event Graph** — standard Blueprint logic, same as any other Blueprint. Runs every frame. Use it to read gameplay state (speed, direction, is falling) and store values in variables that the Anim Graph reads.

![[graphevent.png]]

**Anim Graph** — pose-based logic unique to Animation Blueprints. Evaluates animation nodes (play sequence, blend, state machine) and outputs a final pose to the **Output Pose** node each frame. This is where animations are selected and blended.

![[graphanim.png]]

**State Machine** — a graph within the Anim Graph that organizes animations into states (Idle, Start, Cycle, Stop, Pivot) with transition rules between them. Each state plays an animation or blend. Transitions fire based on variables set in the Event Graph. This is the standard approach for locomotion.

![[graphstate.png]]

### The Flow

1. **Event Graph** reads gameplay data (character velocity, is in air, etc.) → stores in variables
2. **Anim Graph** reads those variables → feeds them to a **State Machine**
3. **State Machine** transitions between states based on the variables → each state plays the right animation
4. The final blended pose goes to **Output Pose** → the character renders that pose this frame

### Slots and Montages

The Anim Graph can include a **Slot** node (see [[Animation Montage]]). When a Montage plays in that Slot, it overrides or layers on top of whatever the State Machine is producing. This is how a character can play an attack animation on the upper body while the legs keep running.

### Assigning an Animation Blueprint

On a Skeletal Mesh Component → Details → **Animation** section:
- Set **Animation Mode** to "Use Animation Blueprint"
- Set **Anim Class** to your ABP

For [[MetaHuman|MetaHumans]], this is set on the **Body** component (not the inherited Mesh component). When reparenting a MetaHuman to a player character, retarget the template ABP to the MetaHuman's skeleton first — see [[MetaHuman]].

## Common Patterns

**Template character locomotion:**
The default ABP_Mannequin uses a State Machine with states for Idle, Start, Cycle (full-speed movement), Stop, and Pivot. The Event Graph reads the character's velocity and ground state each frame. Transition rules check these variables — velocity above threshold triggers Idle → Start, reaching full speed triggers Start → Cycle, velocity dropping triggers Cycle → Stop.

**MetaHuman player character ([[UE Tutorial 202 - MetaHuman Animations (WIP)|Tutorial 5]], Chapter B):**
Retarget the template ABP (ABP_Unarmed) to the MetaHuman's skeleton → assign the retargeted ABP to the MetaHuman's Body component → all locomotion animations transfer automatically. Foot IK requires a separate Control Rig fix (see [[MetaHuman]]).

## Related

- [[Animation Montage]] — plays one-shot animations through Slots in the Anim Graph
- [[Play Animation]] — simpler alternative that bypasses the ABP entirely
- [[MetaHuman]] — requires retargeting the ABP to the MetaHuman skeleton
- [[Character]] — the actor type that typically uses an Animation Blueprint

## Source

- [Animation Blueprint Editor in Unreal Engine | UE 5.7](https://dev.epicgames.com/documentation/unreal-engine/animation-blueprint-editor-in-unreal-engine?application_version=5.7) — clipped 2026-04-12
- [[UE Tutorial 202 - MetaHuman Animations (WIP)|Tutorial 5]] — Chapter B (retargeting ABP to MetaHuman)

