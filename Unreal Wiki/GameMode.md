---
publish: true
---


> [!hint] Hold On
> Unreal's UI and common usage refer to the system that governs game rules generically as "GameMode" — the dropdown in World Settings, blueprint naming conventions, etc.
>
> GameMode is also a class, specifically a subclass of [[GameModeBase]].
>
> Therefore, the answer to "What class is the GameMode?" might be "GameMode" or "GameModeBase".


## As a Class

GameMode is a specific class that **inherits from [[GameModeBase]]**. It adds features originally built for Unreal Tournament: a match state machine and other shooter-specific functionality.

For most projects, [[GameModeBase]] has everything you need — stick with it unless you specifically want match states. If you do inherit from GameMode, also inherit your GameState from **GameState** (not GameStateBase).

### Match State Machine

States flow in order:

1. **EnteringMap** — initial state, world not fully initialized
2. **WaitingToStart** — actors ticking, players not yet spawned
3. **InProgress** — main gameplay, BeginPlay has been called
4. **WaitingPostMatch** — game ended, actors still tick, no new players can join
5. **LeavingMap** — transferring to a new map
6. **Aborted** — failure state (unrecoverable error)

Query with `GetMatchState`, `HasMatchStarted`, `IsMatchInProgress`, `HasMatchEnded`.

## Related

- [[GameModeBase]] — the parent class; the right choice for most projects
- [[GameStateBase]] — replicated companion class

