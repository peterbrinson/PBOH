---
publish: true
---


Returns a [[PlayerController]] reference. Two versions exist:

- **Standalone node** (Gameplay Statics) — looks up a controller by Player Index. This is the common version.
- **PlayerState node** — called on a [[PlayerState]] target, returns the controller that owns it. No index needed.

## Use When

- You need a PlayerController reference to pass as Owning Player (e.g., for [[Create Widget]])
- You need to access input, HUD, or camera functionality through the player's controller
- Single-player games almost always use Player Index 0

## How It Works

### Standalone Version (Gameplay Statics)

| Pin | Type | Description |
|---|---|---|
| **Player Index** (input) | Integer | Index in the player controller list. 0 = first local player. In networked games, local players are listed first, then available remote ones |
| **Return Value** (output) | Player Controller Object Reference | The controller at that index |

The index stays consistent as long as no players join or leave, but is not the same across different clients and servers.

### PlayerState Version

| Pin | Type | Description |
|---|---|---|
| **Target** (input) | Player State Object Reference | The PlayerState to query |
| **Return Value** (output) | Player Controller Object Reference | The controller that created this PlayerState, or null for remote clients |

## Common Patterns

**Provide Owning Player to Create Widget ([[UE Tutorial 3 - Scoring and UI|Tutorial 3]] pattern):**
At BeginPlay, call Get Player Controller (Player Index 0). Connect its Return Value to the Owning Player pin of [[Create Widget]].

## Related

- [[PlayerController]] — the object this node returns
- [[PlayerState]] — the target for the PlayerState version; also provides [[Get Player State]] (the reverse lookup)
- [[Create Widget]] — most common consumer of this node's return value

## Source

- [Get Player Controller (Gameplay Statics) | UE 5.7](https://dev.epicgames.com/documentation/unreal-engine/BlueprintAPI/Game/GetPlayerController?application_version=5.7) — clipped 2026-04-11
- [Get Player Controller (PlayerState) | UE 5.7](https://dev.epicgames.com/documentation/unreal-engine/BlueprintAPI/PlayerState/GetPlayerController?application_version=5.7) — clipped 2026-04-11

