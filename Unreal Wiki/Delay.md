---
publish: true
---


Pauses execution on the wire for a specified number of seconds, then continues. Latent node — execution leaves the graph and returns when the timer elapses, while the rest of the game continues normally.

## Use When

- You need a one-off pause between two actions ("wait 2 seconds, then open the door")
- You want a simple timed sequence in an Event Graph (intro freeze, staggered effects)
- You don't need to cancel, pause, or repeat the timer

If you need to cancel, repeat, or hold a handle to the timer, use [[Set Timer by Event]] instead.

## How It Works

### Pins

| Type | Name | Description |
|---|---|---|
| exec | **(in)** | Triggers the delay |
| real | **Duration** | Seconds before Completed fires. Default 0.2. |
| exec | **Completed** | Fires once the duration has elapsed |

### Latent execution

Delay is a **latent node** — execution leaves the graph and returns later. Other code continues running normally. You can only use Delay in Event Graphs and macro graphs that aren't pure functions; you cannot use it inside a Function.

### Re-triggering before completion

Delay's behavior when called again before its previous timer has finished can be subtle: depending on graph setup, calls may stack into parallel timers rather than reset cleanly. If you need predictable cancel-and-restart behavior (debounce, single-instance), use [[Set Timer by Event]] with a stored handle so you can clear and re-set the timer explicitly.

### Game time vs. real time

Delay uses game time. When the game is paused (Set Game Paused = true), Delay's countdown also pauses. For wall-clock time independent of game pause, use [[Set Timer by Event]] with `Use Real Time` set true.

## Common Patterns

**Frozen intro ([[Input Control]] partner pattern):**
Event BeginPlay → Disable Input (or Set Ignore Look/Move Input = true) → Delay (Duration = 10) → Enable Input (or Set Ignore Look/Move Input = false). Used for opening cinematics, intro fades, "watch the world for a moment before you can move" beats. The student gap that prompted this page (Sally, 2026-05-15) was exactly this: freeze player controls for 10 seconds at the start of the game.

**Brief pause between effects:**
Trigger → first action → Delay (0.5s) → second action. Useful for staggering visuals, audio, or UI without wiring a [[Timeline]].

**Sequenced reveal:**
Single event → Delay (1s) → action 1 → Delay (1s) → action 2. Quick and readable for short scripted sequences. For more than three or four steps, [[Timeline]] is cleaner — the curves give you per-frame control rather than discrete steps.

## Related

- [[Set Timer by Event]] — when you need a handle (cancel, pause, repeat) or function-name targeting
- [[Timeline]] — for time-based animation (lerp, curve output) instead of just a wait
- [[Custom Events]] — common destination for the Completed pin
- [[Input Control]] — common partner for game-start and modal-UI freezes

## Source

- [Delay | UE 5.7](https://dev.epicgames.com/documentation/unreal-engine/BlueprintAPI/Utilities/FlowControl/Delay?application_version=5.7) — clipped 2026-05-15
