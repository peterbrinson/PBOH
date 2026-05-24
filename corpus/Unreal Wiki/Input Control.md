---
publish: true
---


Nodes that turn player input on or off — either as a whole or selectively. Useful for cutscenes, modal UI (notes, menus), opening cinematics, or any moment where the player should watch or interact through a different channel rather than control their pawn.

Two pairs of nodes serve this purpose with different scopes:

| Pair | Scope | When to Use |
|---|---|---|
| **Disable Input / Enable Input** | All-or-nothing — kills the entire input stack | Cutscenes, full pauses, intros where no player input should reach the pawn |
| **Set Ignore Look Input / Set Ignore Move Input** | Selective — camera and movement freeze independently | Modal UI where some keys must still work (read-a-note, open-a-menu) |

## Disable Input / Enable Input

**Actor-level** nodes — call them on the Pawn (or any Actor that has input bindings). They take a PlayerController as the target and turn off or restore that PlayerController's input on the Actor.

### Pins

| Pin | Type | Description |
|---|---|---|
| **Target** | Actor | The Actor whose input to disable (typically the Pawn) |
| **Player Controller** | Player Controller | Which PlayerController's input to disable |

### When to use

- Cutscenes where the player should not be able to do anything at all
- Opening intros where the player watches before they move
- Game-over states where input should fall through to UI only
- Any moment where "no input at all" is the right answer

### Pattern: frozen intro

[[Level Blueprint]] Event BeginPlay → [[Get Player Controller]] (index 0) → Disable Input (Target = Get Player Pawn) → [[Delay]] (Duration = 10) → Enable Input. The player stands still while the intro plays; control returns automatically.

## Set Ignore Look Input / Set Ignore Move Input

**PlayerController-level** nodes. Each takes a boolean — true to ignore that input, false to restore it. Look (camera) and movement freeze independently, so you can lock one without the other.

### Pins (both variants)

| Pin | Type | Description |
|---|---|---|
| **Target** | Player Controller | The PlayerController to affect |
| **New Look Input To Ignore** *(or)* **New Move Input To Ignore** | Boolean | True ignores; false restores |

### When to use

- Modal UI where the player needs to keep using *some* keys to dismiss the UI (e.g., E to close a note)
- Tutorial states where you want to lock the camera but allow movement (or vice versa)
- Vehicle entry/exit beats where camera and movement come back at different moments

### Counter behavior — the gotcha

These nodes use an **internal counter**, not a simple on/off flag. Each call with `true` increments the counter; each call with `false` decrements it. Input is ignored as long as the counter is greater than zero. This means **calls must be paired**: if you call Set Ignore Look Input(true) twice, you must call Set Ignore Look Input(false) twice to restore look. If multiple paths in your Blueprint can call true before any of them restore, track the pairing carefully — or switch to Disable Input/Enable Input, which behave like a flag.

### Pattern: read-a-note ([[UE Tutorial 801 - Inspect an Object|Tutorial 801]])

When the player presses E to open a note: Set Ignore Look Input(true) and Set Ignore Move Input(true) on the [[PlayerController]]. The camera and movement freeze, but the E key itself still works to close the note. When E closes the note: Set Ignore Look Input(false) and Set Ignore Move Input(false) — control restored. This is cleaner than Disable Input here because the close-note key needs to remain live.

## Choosing between the pairs

| If you need… | Use |
|---|---|
| All input gone — even close-the-UI keys | Disable Input / Enable Input |
| Most input gone but one or two keys still working (UI dismissal) | Set Ignore Look + Set Ignore Move (the unblocked keys keep working) |
| Camera locked but player can still walk | Set Ignore Look Input (true) only |
| Movement locked but player can still look around | Set Ignore Move Input (true) only |

## Related

- [[PlayerController]] — owner of all four nodes; the Tutorial 801 input-freeze pattern lives here too
- [[Pawn]] — typical Target for Disable Input / Enable Input
- [[Get Player Controller]] — how you grab the PlayerController for any of these calls
- [[Delay]] — timed-unfreeze partner ("disable input, wait N seconds, enable input")
- [[Enhanced Input]] — the input system these nodes gate

## Source

- [Disable Input | UE 5.7](https://dev.epicgames.com/documentation/unreal-engine/BlueprintAPI/Input/DisableInput?application_version=5.7) — clipped 2026-05-15
- [Enable Input | UE 5.7](https://dev.epicgames.com/documentation/unreal-engine/BlueprintAPI/Input/EnableInput?application_version=5.7) — clipped 2026-05-15
- [Set Ignore Look Input | UE 5.7](https://dev.epicgames.com/documentation/unreal-engine/BlueprintAPI/Game/Player/SetIgnoreLookInput?application_version=5.7) — clipped 2026-05-15
- [Set Ignore Move Input | UE 5.7](https://dev.epicgames.com/documentation/unreal-engine/BlueprintAPI/Game/Player/SetIgnoreMoveInput?application_version=5.7) — clipped 2026-05-15
- [[UE Tutorial 801 - Inspect an Object|Tutorial 801]] — read-a-note input freezing pattern
