---
publish: true
---


Returns the [[PlayerState]] at the given index in the [[GameState]]'s PlayerArray. Works on both client and server with a consistent index — after initial replication, all machines have access to PlayerStates for all connected players.

Target is Gameplay Statics.

## Use When

- You need to read or write a player's custom data (score, collectable count) from outside the PlayerState itself
- A collectable, enemy, or UI widget needs to access the player's state
- You know the player index (0 for the first/only player in single-player)

## How It Works

### Input Pins

| Type | Name | Description |
|---|---|---|
| integer | **Player State Index** | Index into the GameState's PlayerArray. 0 for the first player. |

### Output Pins

| Type | Name | Description |
|---|---|---|
| object | **Return Value** | The PlayerState object. Returns the base class — [[Cast To]] your custom subclass to access your own variables. |

### Alternative Access

If you already have a reference to the **[[PlayerController]]** or **[[Pawn]]**, they both have a Get Player State function (or a PlayerState property) that returns the same object without needing a player index.

## Common Patterns

**Collectable pickup chain ([[UE Tutorial 2 - Collectables and Restart|Tutorial 2]] pattern):**
[[OnComponentBeginOverlap]] fires → [[Cast To]] confirms it's the player character → Get Player State (from the Pawn reference) → [[Cast To]] the custom [[PlayerState]] subclass → [[Increment Int]] on the collectable count variable → [[DestroyActor]].

**UI score display:**
A HUD widget calls Get Player State on tick or on a custom update event → casts to the custom [[PlayerState]] → reads the score or collectable count → updates the text display.

## Related

- [[PlayerState]] — the object this node returns
- [[GameState]] — owns the PlayerArray this node indexes into
- [[Cast To]] — required after Get Player State to access custom variables
- [[GameMode]] — determines which PlayerState subclass is assigned to players
- [[Increment Int]] — commonly used on PlayerState variables after retrieval

## Source

- [Get Player State | UE 5.7](https://dev.epicgames.com/documentation/unreal-engine/BlueprintAPI/Game/GetPlayerState?application_version=5.7) — clipped 2026-04-08

