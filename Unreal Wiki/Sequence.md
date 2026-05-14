---
publish: true
---


A flow control node that takes one exec input and fires multiple exec outputs in order: **Then 0**, **Then 1**, **Then 2**, etc. Click **Add pin** on the node to add more outputs. Each output completes fully before the next one fires.

## Use When

- One event needs to trigger multiple independent chains of logic
- You want to keep parallel logic paths visually organized instead of branching from a single wire
- A [[Timeline]] update needs to drive different targets (e.g., different light types, different object properties)

## How It Works

| Pin | Type | Description |
|---|---|---|
| **In** (input) | Exec | The single trigger |
| **Then 0, 1, 2...** (output) | Exec | Fired in order, top to bottom. Each path completes before the next begins |

### Why Not Just Connect Multiple Wires?

You *can* drag multiple wires from a single exec output pin — Unreal allows it. But execution order isn't guaranteed, and the graph becomes visually tangled. Sequence makes the order explicit and keeps each logic path on its own clean branch.

## Common Patterns

**One Timeline driving multiple light types ([[UE Tutorial 4 - Haunted House Triggers and Events|Tutorial 4]], Chapter A):**
A [[Timeline]] ticks its Update pin every frame. The Sequence node splits that into two paths: Then 0 iterates over the Spot Light array with a For Each Loop, Then 1 iterates over the Point Light array with its own For Each Loop. Both apply the same Lerp → Set Intensity pattern, but to different light types. Without Sequence, you'd need two separate Timelines or a tangled graph.

## Related

- [[Flow Control]] — overview of all flow control nodes
- [[Timeline]] — common source of the exec input, especially via the Update pin
- [[MultiGate]] — also routes to multiple outputs, but fires *one per call* instead of all at once
- [[Custom Events]] — another way to organize parallel logic, but with named entry points rather than numbered outputs

## Source

- [Sequence | UE 5.7](https://dev.epicgames.com/documentation/unreal-engine/BlueprintAPI/Utilities/FlowControl/Sequence?application_version=5.7) — clipped 2026-04-11
- [[UE Tutorial 4 - Haunted House Triggers and Events|Tutorial 4]] — Chapter A, Section A5 (Sequence used to split Timeline update across light types)

