---
publish: true
---


The if/else of Blueprints. Takes a boolean **Condition** input and routes execution to either the **True** or **False** output pin. Only one path fires — never both.

## Use When

- You need to check a condition before proceeding (has this triggered already? is the player alive? is a variable above a threshold?)
- You want to gate logic so it only runs once
- You need different behavior depending on a boolean state

## How It Works

### Input Pins

| Pin | Type | Description |
|---|---|---|
| **Condition** | Boolean | The value to test. True → top output. False → bottom output. |

### Output Pins

| Pin | Type | Description |
|---|---|---|
| **True** | Exec | Fires if Condition is true |
| **False** | Exec | Fires if Condition is false |

### Where the Boolean Comes From

The Condition pin accepts any boolean: a variable, the output of a comparison node (>, <, ==), the return value of a function like Is Valid, or a hardcoded true/false. Drag off any boolean output and it connects directly.

## Common Patterns

**Trigger-once gate ([[UE Tutorial 4 - Haunted House Triggers and Events|Tutorial 4]], Chapter A):**
Create a boolean variable `HasTriggered`, default false. At the start of the overlap event, wire a Branch: if `HasTriggered` is true, do nothing (the False path is unwired or stops). If false, proceed with the effect and then set `HasTriggered` to true. The trigger fires once and never again. This pattern appears in every chapter of Tutorial 4 — lights, doors, NPCs, and sounds all use it.

**Why not just remove the overlap event?** You can't easily disconnect an event at runtime. The Branch + boolean gate is the standard Blueprint pattern for "run once" behavior. It's simpler than alternatives like removing the collision component or unbinding the event.

## Related

- [[Flow Control]] — overview of all flow control nodes; DoOnce replaces the Branch + boolean gate for simple one-shot triggers
- [[Sequence]] — another flow control node; executes multiple paths (Branch chooses one)
- [[Switch]] — multi-way alternative when you have more than two outcomes
- [[OnComponentBeginOverlap]] — the event that typically precedes a Branch gate
- [[Cast To]] — another form of conditional branching (success/failure paths based on type)

## Source

- [Branch | UE 5.7](https://dev.epicgames.com/documentation/unreal-engine/BlueprintAPI/Utilities/FlowControl/Branch?application_version=5.7) — clipped 2026-04-11
- [[UE Tutorial 4 - Haunted House Triggers and Events|Tutorial 4]] — Chapter A, Section A7 (trigger-once bool gate pattern)

