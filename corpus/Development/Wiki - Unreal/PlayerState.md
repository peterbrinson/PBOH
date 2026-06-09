---
publish: true
---


The state of a participant in the game — a human player or a bot simulating a player. PlayerState handles data and logic relevant to its associated player: things like player name, score, health, ammo count, inventory, or whether the player is carrying the flag. Non-player AI (enemies, NPCs) do not have a PlayerState.

PlayerStates for all players exist on all machines and replicate freely to keep things in sync. A PlayerState is created for each player when they join the game or upon entrance into the level. The [[GameMode]] controls which PlayerState subclass is used.

## Use When

- You need a variable that belongs to a player, not a specific [[Pawn]] (collectable count, score, inventory)
- The data should survive the Pawn being destroyed and respawned
- Other players or Blueprints need to read a player's data
- You need per-player data that replicates to all clients

## How It Works

Create a custom PlayerState by making a new Blueprint class that inherits from **Player State**. Add your variables. Then set your [[GameMode]]'s Player State Class to this Blueprint.

To access from other Blueprints: use [[Get Player State]] and [[Cast To]] your custom subclass.

### PlayerState vs. GameState vs. PlayerController

| | **PlayerState** | **[[GameState]]** | **[[PlayerController]]** |
|---|---|---|---|
| **Scope** | One per player | One per game | One per human player |
| **Replicates?** | Yes — all machines | Yes — all machines | No — server + owning client only |
| **Examples** | Score, collectable count, inventory | Team score, round number, objectives | Input handling, HUD, camera |
| **Survives respawn?** | Yes | Yes | Yes |

### What belongs where?

- Data about **one player** that **everyone needs to see** → PlayerState
- Data about **the whole game** that **everyone needs to see** → [[GameState]]
- Input handling and player-specific systems → [[PlayerController]]
- The physical body in the world → [[Pawn]]

## Common Patterns

**Collectable counter ([[UE Tutorial 2 - Collectables and Restart|Tutorial 2]] pattern):**
Custom PlayerState has an integer variable `CollectableCount`. When the player overlaps a collectable, the collectable's [[OnComponentBeginOverlap]] fires → [[Cast To]] confirms it's the player → [[Get Player State]] retrieves the PlayerState → [[Cast To]] the custom PlayerState → [[Increment Int]] increases the count → [[DestroyActor]] removes the collectable.

**Player list:**
[[GameState]]'s PlayerArray contains every connected player's PlayerState. Loop through it for leaderboards, end-of-round summaries, or checking if all players are ready.

## Related

- [[GameMode]] — controls which PlayerState subclass is used
- [[GameState]] — game-wide data counterpart; its PlayerArray holds all PlayerStates
- [[Get Player State]] — the node to retrieve a player's PlayerState
- [[Cast To]] — required to access custom variables on your PlayerState subclass
- [[PlayerController]] — the human input interface; owns a reference to the PlayerState
- [[Increment Int]] — commonly used to update integer counters on PlayerState

## Source

- [Gameplay Framework in Unreal Engine | UE 5.7](https://dev.epicgames.com/documentation/unreal-engine/gameplay-framework-in-unreal-engine) — clipped 2026-04-08
- [Gameplay Framework Quick Reference | UE 5.7](https://dev.epicgames.com/documentation/unreal-engine/gameplay-framework-quick-reference-in-unreal-engine?application_version=5.7) — clipped 2026-04-08

