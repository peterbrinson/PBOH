---
publish: true
---


Controls whether execution pulses pass through or are blocked. The Gate has an **Enter** input that receives pulses and an **Exit** output that only fires when the gate is currently open. Separate **Open**, **Close**, and **Toggle** inputs change the gate's state.

## Use When

- You need to enable or disable a stream of logic at runtime (e.g., player can only interact while a door is unlocked)
- A repeating event (tick, timer, timeline) should only produce output during certain game states
- You want external events (triggers, pickups, game state changes) to control whether a system is active

## How It Works

![[gate_example.png]]

### Input Pins

| Pin | Type | Description |
|---|---|---|
| **Enter** | Exec | The stream of execution to control. Pulses here only pass through if the gate is open. |
| **Open** | Exec | Sets the gate to open. Future Enter pulses will pass through. |
| **Close** | Exec | Sets the gate to closed. Future Enter pulses are blocked. |
| **Toggle** | Exec | Flips the gate state — open becomes closed, closed becomes open. |
| **Start Closed** | Bool | If true, the gate begins closed (default). If false, it starts open. |

### Output Pins

| Pin | Type | Description |
|---|---|---|
| **Exit** | Exec | Fires only when an Enter pulse arrives while the gate is open. |

### Key Behavior

- The gate remembers its state. Opening it doesn't fire Exit — it just allows *future* Enter pulses through.
- Multiple Open pulses in a row are harmless (gate is already open). Same for Close.
- Toggle is useful when you want a single event (like a key press) to switch the gate on and off.

## Common Patterns

![[gate_network.png]]

**Toggled interaction zone:** A looping [[Timeline]] (auto-play, no tracks, just ticking) continuously pulses Enter. Two trigger volumes in the level — one wired to Open, the other to Close. While the player is in the "active" zone, messages print to screen. Walk into the "off" zone, messages stop. Walk back, they resume.

**Ability cooldown gate:** A Gate starts open. When the player uses an ability, wire the action to Enter (which passes through and fires the ability), then immediately pulse Close. A [[Set Timer by Event]] fires Open after the cooldown period. The ability can't fire again until the timer reopens the gate.

## Related

- [[Flow Control]] — overview of all flow control nodes
- [[Branch]] — one-time conditional check (Gate is persistent state)
- [[Timeline]] — commonly drives the Enter pin with a looping tick

## Source

- [Flow Control | UE 4.27](https://dev.epicgames.com/documentation/en-us/unreal-engine/flow-control-in-unreal-engine?application_version=4.27) — Gate section, clipped 2026-04-12

