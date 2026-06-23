---
publish: true
---


Not the Blueprint Editor UI — a Blueprint Interface is a specific asset type. It defines function signatures — names, inputs, and outputs — without any implementation. Any Blueprint that adds the Interface is guaranteed to have those functions, but each Blueprint provides its own implementation. This lets you call the same function on completely different actor types without knowing their class, and without [[Cast To]].

## Use When

- Multiple unrelated Blueprints need to respond to the same action (e.g., "interact," "take damage," "read")
- You want to call a function on a hit actor without casting to a specific class
- You need a cleaner alternative to [[Actor Has Tag]] + [[Cast To]] chains for polymorphic behavior

## How It Works

### Creating

Content Browser → **Add (+) → Blueprints → Blueprint Interface**. Name it descriptively (e.g., `Reading`, `Interactable`, `Damageable`).

![[createinterface.png]]

### The Interface Editor

Double-click to open. The editor looks like a Blueprint Editor but is heavily restricted — no variables, no components, no implementation graphs. The graph is marked **READ-ONLY** and **INTERFACE**. You can only define function signatures here.

![[interfaceeditor.png]]

A default function `NewFunction_0` is created automatically. Rename it in the My Blueprint panel (e.g., `ReadingInteraction`).

### Defining Function Signatures

Functions are name + inputs + outputs only. In the **Details** panel:

- **Inputs:** Click **+** under Inputs to add parameters. Set name and type. Expand to set default values.
- **Outputs:** Click **+** under Outputs. Adding an output changes the function from a message (fire-and-forget) to a function with a return value.

![[details_signature.png]]

### Implementing the Interface

In the Blueprint that should respond to the interface:

1. Open the Blueprint → **Class Settings** → **Implemented Interfaces** → add your interface
2. **Compile** — the function now appears in the Event Graph
3. Right-click the function in My Blueprint → **Implement Event** — this creates an Event node you can wire logic to

Each implementing Blueprint provides its own logic. A note might show a reading UI. A door might open. A chest might play an animation. All respond to the same interface function.

### Calling Interface Functions

When you have a reference to an actor (e.g., from a [[Traces|trace]] Hit Actor), you can call the interface function directly — drag from the actor reference and search for the function name. If the actor implements the interface, the function runs. If it doesn't, the call is silently ignored. No cast needed, no error.

This is the key advantage over Cast To: you don't need to know or care what class the actor is. You just call the interface function and let the actor handle it (or not).

### Limitations

Blueprint Interfaces cannot:
- Add variables
- Contain implementation logic (graphs are read-only)
- Add components

They are purely contracts — "any Blueprint with this interface will have these functions."

## Common Patterns

**Readable item ([[UE Tutorial 801 - Inspect an Object|Tutorial 801]] pattern):**
Create a `Reading` interface with a `ReadingInteraction` function. The player's character fires a Line Trace on E key press. If the trace hits something, call `ReadingInteraction` on the Hit Actor. `BP_Note_1` implements the `Reading` interface — its `ReadingInteraction` event creates a close-up reading widget and disables player input. The player doesn't cast to BP_Note_1; the interface call works on any actor that implements `Reading`.

**Damage system (docs example):**
A car and a tree are completely different actors, but both implement a `Damageable` interface with an `OnTakeWeaponFire` function. Weapon traces call `OnTakeWeaponFire` on whatever they hit — the car explodes, the tree splinters. One trace handles both without branching on actor type.

**Interface vs Cast To vs Actor Has Tag:**

| Approach | When to Use |
|---|---|
| **Blueprint Interface** | Multiple unrelated classes need to respond to the same call. You don't need to access class-specific variables — just trigger behavior. |
| **[[Cast To]]** | You need access to a specific class's variables or functions. You know the exact type. |
| **[[Actor Has Tag]]** | You just need a category check (is this "interactable"?) without calling any function. |

## Related

- [[Cast To]] — heavier alternative that provides typed access; Interface is preferred when you just need to call a function
- [[Actor Has Tag]] — lightweight tag check; Interface is preferred when you need the target to *do* something
- [[Traces]] — common source of the actor reference you call the interface function on
- [[Custom Events]] — similar concept (named callable events) but within a single Blueprint, not across classes
- [[Event Dispatchers]] — one-to-many broadcast alternative; sender doesn't know receivers
- [[Components]] — Actor Components are another way to add shared behavior; Interfaces are contracts, Components are implementations

## Source

- [Blueprint Interface in Unreal Engine | UE 5.5](https://dev.epicgames.com/documentation/unreal-engine/blueprint-interface-in-unreal-engine?application_version=5.5) — clipped 2026-04-11
- [[UE Tutorial 801 - Inspect an Object|Tutorial 801]] — BPI_Evidence interface with Examine function

