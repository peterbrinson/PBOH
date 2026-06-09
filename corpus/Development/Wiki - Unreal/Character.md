---
publish: true
---


A special type of [[Pawn]] designed for a vertically-oriented player representation that can walk, run, jump, fly, and swim. Character builds on the base Pawn class with richer default components suited for humanoid movement.

## Use When

- Your player or AI entity needs humanoid movement (walking, jumping, gravity)
- You want built-in capsule collision and skeletal mesh support
- You're using the Third Person or First Person template (both template characters are Characters)
- You need an NPC with a skeletal mesh and animations (e.g., a Mixamo character)

## How It Works

Character comes with these components by default:

| Component | Purpose |
|---|---|
| **CharacterMovementComponent** | Handles walking, running, jumping, falling, flying, swimming. Includes gravity, ground friction, air control. Much richer than DefaultPawn's flying-only movement. |
| **SkeletalMeshComponent** | Renders an animated skeletal mesh (the visible character model) |
| **CapsuleComponent** | Capsule-shaped collision for the character body |

### Character vs. Pawn

Use **Character** when you need humanoid movement and gravity. Use **[[Pawn]]** directly when the entity doesn't walk — vehicles, drones, abstract game pieces.

## Common Patterns

**Template characters (Tutorials 1–4):**
Both BP_ThirdPersonCharacter and BP_FirstPersonCharacter are Character Blueprints. The [[GameMode]] sets one as the Default Pawn Class. They come pre-configured with a skeletal mesh, capsule collision, and movement settings. When using [[Cast To]] in overlap events, cast to the specific template Blueprint (e.g., Cast to BP_FirstPersonCharacter), not the base Character class — the template is where student-created variables live.

**NPC with Mixamo animations ([[UE Tutorial 4 - Haunted House Triggers and Events|Tutorial 4]], Chapter C):**
Create a Blueprint with **Character** as the parent class (e.g., BP_Zombie). Replace the default skeletal mesh with an imported Mixamo character. Set **Animation Mode** to "Use Animation Asset" and assign an idle animation. The Character's SkeletalMeshComponent handles rendering and animation playback. Use a [[Custom Events|Custom Event]] to trigger attack animations via Play Animation, and [[Set Timer by Event]] to return to idle after the animation finishes.

## Related

- [[Pawn]] — the parent class; Character is a subclass
- [[Controller]] — possesses the Character to control it
- [[PlayerController]] — the human player's Controller
- [[GameMode]] — sets which Character/Pawn class is spawned
- [[Cast To]] — commonly used to cast a Pawn reference to a specific Character subclass
- [[Animation Montage]] — plays one-shot animations on characters with Animation Blueprints
- [[MetaHuman]] — photorealistic character that reparents to a Character Blueprint for player control

## Source

- [Gameplay Framework in Unreal Engine | UE 5.7](https://dev.epicgames.com/documentation/unreal-engine/gameplay-framework-in-unreal-engine) — clipped 2026-04-08
- [Gameplay Framework Quick Reference | UE 5.7](https://dev.epicgames.com/documentation/unreal-engine/gameplay-framework-quick-reference-in-unreal-engine?application_version=5.7) — clipped 2026-04-08
- [[UE Tutorial 4 - Haunted House Triggers and Events|Tutorial 4]] — Chapter C (NPC Character Blueprint with Mixamo)

