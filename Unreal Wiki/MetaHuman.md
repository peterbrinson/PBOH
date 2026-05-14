---
publish: true
---


A photorealistic digital human system built into Unreal Engine. MetaHumans are created through Epic's MetaHuman Creator (accessed as an in-editor plugin) and produce fully rigged characters with facial animation support, skeletal meshes, and LOD levels. They can serve as player characters or NPCs.

## Use When

- You want a realistic human character without modeling one from scratch
- Your project needs facial animation or motion capture support
- You're building a player character or NPC that needs to look human (not stylized)

## How It Works

### Plugin Setup

MetaHuman requires the **MetaHuman Creator Core Data** installed through the Epic Games Launcher (Installation Options for your engine version) and the **MetaHuman** plugins enabled in Edit → Plugins. Both require a project restart.

### Creating a MetaHuman

Right-click in the Content Browser → create a **MetaHuman Character**. The MetaHuman Creator opens in-editor where you customize appearance or choose a preset. When finished, choose a rig type:

| Rig Type | Use For | What You Get |
|---|---|---|
| **Full Rig** | Player characters | Complete skeleton with all animation support |
| **Joints Only** | NPCs | Lighter skeleton, sufficient for basic animation |

After selecting a rig, download textures, then **Assemble** at your desired quality level. The assembled MetaHuman Blueprint appears in a `MetaHumans/` folder in your Content Browser.

### Making a MetaHuman Your Player Character

The MetaHuman Blueprint isn't a player character by default — it has no movement, input, or camera. To use it as your player, reparent it to an existing character Blueprint:

1. Open the MetaHuman Blueprint → **Class Settings** → change **Parent Class** to `BP_ThirdPersonCharacter` (or your project's character Blueprint)
2. In Components, make **Body** a child of **Mesh**, zero out Body's transform, then delete the MetaHuman's original **Root** component
3. Hide the inherited mannequin by unchecking **Visible** on the **Mesh** component
4. In your [[GameMode]], change **Default Pawn Class** to the MetaHuman Blueprint

The MetaHuman inherits all movement, input, and camera behavior from the parent character class.

### Retargeting Animations

The inherited character animations (walk, run, jump) need retargeting to the MetaHuman's skeleton:

1. Find the Animation Blueprint on the **Mesh** component (e.g., `ABP_Unarmed`)
2. Right-click it in the Content Browser → **Retarget Animations**
3. Set the target to your MetaHuman's Body mesh, add a suffix (e.g., `_YourName`), and export
4. Back in the MetaHuman Blueprint, set the **Body** component's Animation Class to the retargeted ABP

### Foot IK Fix

After retargeting, feet may drag on the ground. This requires adding **virtual bones** (`ik_foot_l`, `ik_foot_r`) to the MetaHuman's base skeleton and updating the **Control Rig** to reference them. This only needs to be done once per project — all MetaHumans share the same base skeleton. See [[UE Tutorial 202 - MetaHuman Animations (WIP)|Tutorial 5]] Chapter B for the full walkthrough.

### Custom Animations (Mixamo)

To add animations beyond the template set (emotes, gestures, combat):

1. Download an animation from Mixamo as FBX (30fps, no keyframe reduction)
2. Import the FBX into Unreal, then right-click the animation → **Retarget Animations** to the MetaHuman's Body mesh
3. Right-click the retargeted animation → **Create AnimMontage**
4. In Blueprint, get the Anim Instance from the **Body** component (not Mesh) and call [[Animation Montage|Play Montage]]

The Body component is the MetaHuman's visible skeletal mesh — always target it for animation, not the inherited Mesh component.

## Common Patterns

**Player character setup ([[UE Tutorial 202 - MetaHuman Animations (WIP)|Tutorial 5]], Chapters A–B):**
Create MetaHuman → Full Rig → Assemble → reparent to BP_ThirdPersonCharacter → retarget ABP → fix foot IK → swap Default Pawn Class in GameMode. The MetaHuman replaces the mannequin as the playable character with all existing movement and input intact.

**Custom animation playback ([[UE Tutorial 202 - MetaHuman Animations (WIP)|Tutorial 5]], Chapter C):**
Import a Mixamo animation → retarget to MetaHuman skeleton → create [[Animation Montage]] → play via Blueprint on the Body component's Anim Instance. The animation layers on top of the character's existing locomotion.

## Related

- [[Animation Blueprint]] — the ABP that must be retargeted when setting up a MetaHuman player
- [[Animation Montage]] — how to play custom animations on a MetaHuman
- [[Play Animation]] — simpler alternative for characters without Animation Blueprints
- [[Character]] — the parent class MetaHumans reparent to for player control
- [[GameMode]] — where you set the MetaHuman as Default Pawn Class
- [[Components]] — MetaHumans use multiple skeletal mesh components (Body, Face, etc.)

## Source

- [MetaHuman Documentation](https://dev.epicgames.com/documentation/metahuman/metahuman-documentation) — Epic's full MetaHuman reference
- [[UE Tutorial 202 - MetaHuman Animations (WIP)|Tutorial 5]] — Chapters A–C (create, incorporate, animate)

