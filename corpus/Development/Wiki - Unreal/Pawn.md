---
publish: true
---


The base class for any Actor that can be controlled by a player or AI. A Pawn is the physical representation of a player or entity in the world — it determines what they look like, where they are, and how they interact with the world through collisions and physics. Even in games without a visible player mesh, the Pawn still represents the player's physical location and rotation.

A [[Character]] is a special type of Pawn designed for humanoid movement (walking, running, jumping).

## Use When

- You need a physical representation of a player or AI entity in the level
- You're setting up what a player controls (the [[GameMode]] assigns a Default Pawn Class)
- You need a simple controllable actor that isn't humanoid (a vehicle, a camera drone, a ball)

## How It Works

Pawns are possessed by [[Controller|Controllers]]. By default, there is a one-to-one relationship — each Controller controls only one Pawn at a time. Pawns spawned during gameplay are not automatically possessed by a Controller.

### Movement

In Blueprints, the primary way to move a Pawn is with [[Set Actor Location]]. You can choose to **teleport** (instant move) or **sweep** (move along a direction and stop if something is hit).

### Default Pawn

The DefaultPawn subclass comes with:

- A **DefaultPawnMovementComponent** — no-gravity, flying-style movement with MaxSpeed, Acceleration, and Deceleration settings
- A spherical **CollisionComponent**
- A **StaticMeshComponent**
- Default movement input bindings (enabled by default)

### Spectator Pawn

A subclass of DefaultPawn used for spectating. Specified separately from the gameplay Pawn in the [[GameMode]]. Same flying behavior as DefaultPawn but without a visible mesh.

## Common Patterns

**Third-person character ([[UE Tutorial 2 - Collectables and Restart|Tutorial 2]] pattern):**
The [[GameMode]] sets its Default Pawn Class to BP_ThirdPersonCharacter (a [[Character]], which is a Pawn subclass). When a player joins, the GameMode spawns this Pawn and the [[PlayerController]] possesses it.

**Custom non-humanoid player:**
For a game where the player is a rolling ball or a flying drone, create a Blueprint derived from Pawn (not Character) and configure its movement component and mesh. Set it as the Default Pawn Class in the [[GameMode]].

## Related

- [[Character]] — Pawn subclass for humanoid movement
- [[Controller]] — possesses and directs the Pawn
- [[PlayerController]] — the human player's Controller
- [[GameMode]] — determines which Pawn class is spawned for players
- [[Set Actor Location]] — primary Blueprint method for moving a Pawn

## Source

- [Pawn in Unreal Engine | UE 5.7](https://dev.epicgames.com/documentation/unreal-engine/pawn-in-unreal-engine) — clipped 2026-04-08
- [Gameplay Framework in Unreal Engine | UE 5.7](https://dev.epicgames.com/documentation/unreal-engine/gameplay-framework-in-unreal-engine) — clipped 2026-04-08
- [Gameplay Framework Quick Reference | UE 5.7](https://dev.epicgames.com/documentation/unreal-engine/gameplay-framework-quick-reference-in-unreal-engine?application_version=5.7) — clipped 2026-04-08

