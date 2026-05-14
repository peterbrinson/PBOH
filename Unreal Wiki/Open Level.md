---
publish: true
---


Travels to another level by name, replacing the current one. Everything in the current level is destroyed — all actors, state, timers, and variables are gone. The new level starts fresh from Event BeginPlay. This is the simplest way to restart a game or transition between maps.

Target is Gameplay Statics.

## Use When

- The game timer runs out and you need to restart
- The player completes a level and transitions to the next
- You need a "restart" or "return to menu" function
- Any situation that requires a full level reload

## How It Works

### Input Pins

| Type | Name | Description |
|---|---|---|
| name | **Level Name** | The level to open. Must match the level's asset name exactly, without path or extension. |
| boolean | **Absolute** | If true, options are reset. If false, options are carried over from the current level. |
| string | **Options** | A string of options for the travel URL. Usually left empty. Can pass game mode overrides or other parameters. |

### Variant

**Open Level (by Object Reference)** — accepts a level asset reference instead of a name string. Safer against typos but less commonly used in simple projects.

## Common Patterns

**Game restart ([[UE Tutorial 2 - Collectables and Restart|Tutorial 2]] pattern):**
[[GameMode]]'s [[Set Timer by Event]] expires → [[Custom Events|Custom Event]] fires → Open Level with the current level's own name. The level reloads from scratch, resetting the game.

**Get current level name for restart:**
Use **Get Current Level Name** node → plug its output into Open Level's Level Name pin. This makes the restart work regardless of which level is loaded.

**Menu transition:**
Player presses "Start" on the main menu → Open Level loads the gameplay map.

## Related

- [[GameMode]] — typically owns the restart logic that calls Open Level
- [[Set Timer by Event]] — timer expiry often triggers the Open Level call
- [[Custom Events]] — the delegate that bridges the timer to Open Level

## Source

- [Open Level (by Name) | UE 5.7](https://dev.epicgames.com/documentation/unreal-engine/BlueprintAPI/Game/OpenLevel_byName?application_version=5.7) — clipped 2026-04-08

