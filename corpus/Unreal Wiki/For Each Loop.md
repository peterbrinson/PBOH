---
publish: true
---


Iterates over each element in an array (or set), executing the **Loop Body** once per element. The current element is available on the **Array Element** output pin. After all elements have been visited, the **Completed** pin fires.

## Use When

- You have an array variable and need to do something to each item (e.g., set intensity on every light in a list)
- One Blueprint instance needs to affect a variable number of objects (3 lights, 5 lights, 10 lights — same Blueprint)
- You want to apply the same operation to every member of a collection

## How It Works

### Input Pins

| Pin | Type | Description |
|---|---|---|
| **Array** | Array (wildcard) | The array to iterate over. Connect any array variable. |
| **Break** | Exec | Stops the loop early if fired during iteration |

### Output Pins

| Pin | Type | Description |
|---|---|---|
| **Loop Body** | Exec | Fires once per element — wire your per-element logic here |
| **Array Element** | Wildcard (matches array type) | The current element being processed |
| **Array Index** | Integer | The index of the current element (0, 1, 2...) |
| **Completed** | Exec | Fires once after all elements have been visited |

### Variants

- **For Each Loop** — iterates over an Array
- **For Each Loop (Set)** — iterates over a Set (unordered collection, no duplicates)
- **For Each Loop with Break** — same as For Each Loop but with an explicit Break input

## Common Patterns

**Apply effect to multiple lights ([[UE Tutorial 4 - Haunted House Triggers and Events|Tutorial 4]], Chapter A):**
BP_LightOnTrigger has two array variables: one for Spot Lights, one for Point Lights. Both are Instance Editable, so each instance in the level can point at different lights. A [[Sequence]] node after the [[Timeline]]'s Update pin splits into two For Each Loops — one per array. Each loop applies Lerp → Set Intensity to the current light. One trigger Blueprint handles any number and combination of lights.

**Why arrays matter here:** Without arrays, you'd need a separate variable and separate logic for each light. With arrays + For Each Loop, the Blueprint scales to any number — place one trigger, assign as many lights as you want.

## Related

- [[Flow Control]] — overview of all flow control nodes; see ForLoop for counter-based iteration (no array)
- [[Sequence]] — often used before For Each Loop to split into multiple iteration paths
- [[Timeline]] — commonly drives the values that For Each Loop applies per element
- [[Lerp]] — frequently inside the Loop Body to interpolate per-element values

## Source

- [For Each Loop (Set) | UE 5.7](https://dev.epicgames.com/documentation/unreal-engine/BlueprintAPI/Utilities/Set/ForEachLoop_Set?application_version=5.7) — clipped 2026-04-11
- [[UE Tutorial 4 - Haunted House Triggers and Events|Tutorial 4]] — Chapter A, Section A5 (For Each Loop over Spot Light and Point Light arrays)

