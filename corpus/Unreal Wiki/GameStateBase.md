---
publish: true
---


The replicated companion to [[GameModeBase]]. GameStateBase holds game-wide information that all connected clients need to see — things like the list of connected players, team scores, completed missions, or elapsed time. While GameModeBase exists only on the server, GameStateBase exists on the server **and** is replicated to all clients automatically.

## Use When

- You need game-wide data visible to all players (team score, round number, match timer)
- You need a list of all connected players
- You need a reliable server-synced time value
- The data is about the game, not about one specific player (per-player data belongs in [[PlayerState]])

## How It Works

Create a custom GameStateBase by making a Blueprint that inherits from **GameStateBase**. Add your game-wide variables. Then set your [[GameModeBase]]'s Game State Class to this Blueprint.

If your GameMode inherits from **GameMode** (not GameModeBase), inherit your GameState from **GameState** (not GameStateBase) to support the match state machine.

### Key Built-in Functionality

| Function / Variable | Purpose |
|---|---|
| **PlayerArray** | Array of all [[PlayerState]] objects. Useful for iterating over every player in the game. |
| **GetServerWorldTimeSeconds** | Server-synced time, reliable on both client and server. Use this instead of GetTimeSeconds for replicated logic. |
| **HasBegunPlay** | Returns true if BeginPlay has been called on actors in the game. |

### GameStateBase vs. PlayerState

| | [[GameStateBase]] | [[PlayerState]] |
|---|---|---|
| **Scope** | One per game | One per player |
| **Examples** | Team score, round count, match timer | Individual score, collectable count, player name |
| **Replication** | Server → all clients | Server → all clients |

## Common Patterns

**Team score tracking:**
Custom GameStateBase has a TeamAScore and TeamBScore integer. When any player scores, the server updates the GameStateBase variable, and all clients see it automatically.

**Player list iteration:**
Access GameStateBase's PlayerArray to loop through every connected player's [[PlayerState]] — useful for leaderboards, end-of-round summaries, or checking if all players are ready.

## Related

- [[GameModeBase]] — the server-only rule system; GameStateBase is its replicated counterpart
- [[PlayerState]] — per-player data; GameStateBase's PlayerArray contains all of them

## Source

- [Game Mode and Game State in Unreal Engine | UE 5.7](https://dev.epicgames.com/documentation/unreal-engine/game-mode-and-game-state-in-unreal-engine?application_version=5.7) — clipped 2026-04-08

