---
publish: true
---


The primary class that specifies which classes should be spawned and used by the other systems — [[PlayerController]], [[Pawn]], HUD, [[GameStateBase]], [[PlayerState]], and more. It is also where game rules live: a Capture the Flag mode could use it to manage flags; a wave-based shooter to handle wave spawning. It also handles spawning the player.

GameModeBase **only exists on the server** — no client ever has an instance. To replicate data that clients need, use [[GameStateBase]] (or GameStateBase), which exists on all clients and is designed for this purpose.

> [!hint] Hold On
> Unreal's UI and common usage refer to this system generically as "GameMode" — the dropdown in World Settings, blueprint naming conventions, etc.
>
> GameMode is also a class, specifically a subclass of GameModeBase.
>
> Therefore, the answer to "What class is the GameMode?" might be "GameMode" or "GameModeBase".

## Use When

- You need to set which Pawn or [[PlayerState]] class every player spawns with
- You want to control spawn/respawn behavior
- You need game-level rules (player limits, pause handling, level transitions)
- You want to define what happens when players join or leave

## How It Works

### Class Defaults

A GameMode Blueprint sets these defaults in its Class Defaults:

| Setting | What it does |
|---|---|
| **Default Pawn Class** | The Pawn that spawns for each player (e.g., BP_ThirdPersonCharacter) |
| **Player State Class** | The [[PlayerState]] subclass that tracks per-player data |
| **Player Controller Class** | The controller that handles input and owns the Pawn |
| **HUD Class** | The HUD class drawn for each player |
| **Spectator Class** | The Pawn used for spectating players |
| **Game State Class** | The [[GameStateBase]] subclass that tracks game-wide replicated data |

### Subclass: GameMode

**GameMode** (child of GameModeBase) adds features originally built for Unreal Tournament: MatchState and other shooter-type functionality. Stick to GameModeBase — it has everything you need and nothing more. If you do inherit from GameMode, also inherit your GameState from **GameState** (not GameStateBase).

### Key Functions

| Function | Purpose |
|---|---|
| **InitGame** | Called before any other scripts. Initializes parameters and spawns helper classes. |
| **PreLogin** | Accepts or rejects a player attempting to join. Set ErrorMessage to reject. |
| **PostLogin** | Called after successful login. First safe place to call replicated functions on the PlayerController. |
| **HandleStartingNewPlayer** | Called after PostLogin. Override in Blueprint to change what happens to a new player. Default: creates a Pawn. |
| **RestartPlayer** | Starts spawning a player's Pawn. Variants: RestartPlayerAtPlayerStart, RestartPlayerAtTransform. |
| **SpawnDefaultPawnAtTransform** | Actually spawns the Pawn. Can be overridden in Blueprint. |
| **Logout** | Called when a player leaves or is destroyed. |

### Match State Machine (GameMode only, not GameModeBase)

For multiplayer games with distinct phases. States flow in order:

1. **EnteringMap** — initial state, world not fully initialized
2. **WaitingToStart** — actors ticking, players not yet spawned
3. **InProgress** — main gameplay, BeginPlay has been called
4. **WaitingPostMatch** — game ended, actors still tick, no new players can join
5. **LeavingMap** — transferring to a new map
6. **Aborted** — failure state (unrecoverable error)

Query with `GetMatchState`, `HasMatchStarted`, `IsMatchInProgress`, `HasMatchEnded`.

### Setting the GameMode

From lowest to highest priority:

1. **Project-wide default** — GlobalDefaultGameMode in DefaultEngine.ini (Project Settings → Maps & Modes)
2. **Per-level override** — **World Settings → GameMode Override** in the editor
3. **URL parameter** — command-line `?game=MyGameMode`
4. **Map prefix** — map name prefixes mapped to GameModes in DefaultEngine.ini

## Common Patterns

**Custom player data ([[UE Tutorial 2 - Collectables and Restart|Tutorial 2]] pattern):**
Create a custom GameMode Blueprint. Set its Player State Class to a custom [[PlayerState]] that holds a collectable count variable. Assign this GameMode in World Settings. Now every player who joins gets that custom PlayerState automatically.

**Timed game with restart:**
GameMode runs a [[Set Timer by Event]] at BeginPlay. When the timer expires, a [[Custom Events|Custom Event]] fires that calls [[Open Level]] to reload the map.

## Related

- [[GameStateBase]] — the replicated companion; holds game-wide data that clients need to see
- [[PlayerState]] — per-player data class; GameMode controls which subclass is used
- [[Open Level]] — commonly called from GameMode to restart or change levels
- [[Set Timer by Event]] — used in GameMode for countdown timers
- [[Cast To]] — needed to access your custom GameMode from other Blueprints

## Source

- [Game Mode and Game State in Unreal Engine | UE 5.7](https://dev.epicgames.com/documentation/unreal-engine/game-mode-and-game-state-in-unreal-engine?application_version=5.7) — clipped 2026-04-08
- [Unreal Engine Gameplay Framework Guide | Tom Looman](https://tomlooman.com/unreal-engine-gameplay-framework/) — clipped 2026-05-01

