---
publish: true
---


The interface between the [[Pawn]] and the human player controlling it. The PlayerController represents the human player's will — it processes input, can display HUD information, and possesses a Pawn to act in the world. Every human player in a game has a PlayerController.

## Use When

- You need to understand where input handling lives (PlayerController vs [[Pawn]])
- You're accessing player-specific systems (HUD, camera, input)
- You need something that persists when the player's Pawn is destroyed and respawned

## How It Works

The PlayerController is a [[Controller]] subclass. It possesses a [[Pawn]] and directs it based on human input. Like all Controllers, it has no physical presence in the world.

### Input Handling: PlayerController vs. Pawn

It's possible to handle all input directly on the Pawn, and for simple cases that's fine. But putting input on the PlayerController is better when:

- Multiple players share one game client
- The player can change characters dynamically at runtime
- You want input logic to survive Pawn death/respawn

In these cases, the PlayerController processes input and issues commands to the Pawn (e.g., "start crouching," "jump").

### Persistence

The PlayerController persists throughout the game. The Pawn can be transient — destroyed on death, replaced on respawn. In deathmatch-style gameplay, if you kept score on the Pawn it would reset on death. On the PlayerController (or [[PlayerState]]), it survives.

### What It Owns

Each PlayerController typically has:

- A **HUD** instance — the 2D on-screen display
- A **PlayerCameraManager** — manages the camera/viewpoint

## Common Patterns

**Standard flow ([[UE Tutorial 2 - Collectables and Restart|Tutorial 2]] pattern):**
[[GameMode]] creates a PlayerController for the human player → the GameMode spawns a [[Pawn]] (or [[Character]]) → the PlayerController possesses the Pawn → input flows from player through PlayerController to Pawn.

**Accessing from other Blueprints:**
Use **Get Player Controller** (index 0 for single-player) to retrieve it. [[Cast To]] your custom PlayerController subclass if you've added variables or functions.

**Disabling input while reading ([[UE Tutorial 801 - Inspect an Object|Tutorial 801]] pattern):**
When the player opens a note, call **Set Ignore Look Input** and **Set Ignore Move Input** (both checked) on the PlayerController to freeze the camera and movement. When the note closes, call both again with inputs unchecked to restore control. This is cleaner than disabling the entire input stack — it selectively blocks look and move while still allowing the E key to close the note. See [[Input Control]] for the full reference (all four input-gating nodes, the counter-behavior gotcha, and the choose-between-the-pairs guide).

## Related

- [[Controller]] — the parent class; PlayerController is the human-input subclass
- [[Pawn]] — the physical body the PlayerController possesses
- [[Character]] — common Pawn subclass used with PlayerController
- [[PlayerState]] — per-player data; accessed through the PlayerController
- [[GameMode]] — determines which PlayerController class is used

## Source

- [Player Controllers in Unreal Engine | UE 5.7](https://dev.epicgames.com/documentation/unreal-engine/player-controllers-in-unreal-engine) — clipped 2026-04-08
- [Gameplay Framework Quick Reference | UE 5.7](https://dev.epicgames.com/documentation/unreal-engine/gameplay-framework-quick-reference-in-unreal-engine?application_version=5.7) — clipped 2026-04-08

