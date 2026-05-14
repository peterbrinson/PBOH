---
publish: true
---


Takes a single execution pulse and routes it to one of several outputs. Each call advances to the next output. Can run sequentially, randomly, or in a loop — configurable per node.

## Use When

- You want different behavior each time the same event fires (e.g., cycle through dialogue lines, rotate between attack patterns)
- You need to distribute events across multiple paths without tracking the index yourself
- You want randomized output selection (random barks, random spawn points)

## How It Works

![[multigate_example.png]]

### Input Pins

| Pin | Type | Description |
|---|---|---|
| **(Unlabeled)** | Exec | The pulse to route. Each call selects the next output. |
| **Reset** | Exec | Resets to the Start Index (or 0 if Start Index is -1). |
| **Is Random** | Bool | If true, outputs are chosen randomly instead of sequentially. |
| **Loop** | Bool | If true, wraps around after the last output. If false, stops firing after all outputs have been used once. |
| **Start Index** | Int | Which output to fire first. -1 (default) means start at Out 0. |

### Output Pins

| Pin | Type | Description |
|---|---|---|
| **Out 0, 1, 2...** | Exec | Each output fires when selected by the routing logic. |
| **Add pin** | — | Click to add more outputs. Right-click an output pin → Remove Output Pin to delete. |

### Key Behavior

- **Sequential (default):** Out 0 → Out 1 → Out 2 → ... → stops (or loops back to Out 0 if Loop is true).
- **Random:** Each pulse picks a random output. With Loop off, each output fires at most once before all are exhausted.
- **Non-looping:** After all outputs have fired once, the node stops responding until Reset is pulsed.

## Common Patterns

![[multigate_network.png]]

**Cycling dialogue:** An NPC's interact event pulses a MultiGate (Loop on, Is Random off). Out 0 plays "Hello," Out 1 plays "Nice weather," Out 2 plays "Watch out for wolves." Each interaction advances to the next line and wraps around.

**Randomized ambient events:** A timer pulses a MultiGate (Is Random on, Loop on). Each output triggers a different ambient sound or particle effect. The environment feels varied without scripting a random-index system manually.

**One-time sequence:** A MultiGate with Loop off and three outputs. First key press opens a door (Out 0). Second reveals a message (Out 1). Third spawns an item (Out 2). Further presses do nothing until Reset fires.

## Related

- [[Flow Control]] — overview of all flow control nodes
- [[Switch]] — also routes to one of several outputs, but based on a *data value* rather than call order
- [[Sequence]] — fires *all* outputs every time (MultiGate fires *one* output per call)

## Source

- [Flow Control | UE 4.27](https://dev.epicgames.com/documentation/en-us/unreal-engine/flow-control-in-unreal-engine?application_version=4.27) — MultiGate section, clipped 2026-04-12

