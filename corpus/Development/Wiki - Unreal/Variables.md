---
publish: true
---


Named containers that store a value in a Blueprint. Every variable has a type (what kind of data it holds) and a value (the current data). You create them in the Variables section of the My Blueprint panel, then use **Get** (read) and **Set** (write) nodes to work with them in the Event Graph.

## Use When

- You need to store a value that changes during gameplay (health, score, has the door been opened)
- You need to pass data between nodes that aren't directly connected
- You need a value that's configurable per instance in the level (different enemies with different speeds)
- You need to remember something across multiple event firings (a bool that tracks whether a trigger has already fired)

## How It Works

### Creating a Variable

In the Blueprint editor, click **+** in the **Variables** section of the My Blueprint panel. Name it, then set its type in the Details panel. Compile to make it usable.

### Types

| Type | Stores | Default | Example Uses |
|---|---|---|---|
| **Boolean** | True or false | False | Has triggered, is door open, can player shoot |
| **Integer** | Whole number | 0 | Score, lives, item count |
| **Float** | Decimal number | 0.0 | Speed, health, timer duration, alpha values for [[Lerp]] |
| **String** | Text | Empty | Player name, debug messages for [[Print String]] |
| **Vector** | X, Y, Z floats | 0, 0, 0 | Positions for [[Set Actor Location]], directions, offsets |
| **Rotator** | Pitch, Yaw, Roll | 0, 0, 0 | Orientations for [[Set Relative Rotation]] |
| **Name** | Lightweight text identifier | None | Tag comparisons for [[Actor Has Tag]], section names |
| **Object** | Reference to an actor or object | None | Stored references — see [[Getting References]] |

### Get and Set

- **Get**: Drag a variable into the graph (or hold Ctrl + drag). Produces an output pin with the current value. Read-only — doesn't change anything.
- **Set**: Right-click → search the variable name, or hold Alt + drag. Takes an input pin with the new value and an exec pin. Changes the stored value.

### Arrays

A variable can hold a single value or a collection. Click the icon next to the type dropdown to change a variable into an **Array** (ordered list of values of the same type). Arrays support:

- **Add** — append a value to the end
- **Remove** — delete a value by index or by item
- **Get** (by index) — read a specific element
- **Length** — how many elements the array contains
- **[[For Each Loop]]** — iterate over every element

### Variable Settings (Details Panel)

| Setting | What It Does |
|---|---|
| **Instance Editable** | Exposes the variable in the Details panel when an instance is selected in the level. Different instances can have different values. See [[Blueprint Instances]]. |
| **Expose on Spawn** | Makes the variable an input pin on [[Construction Script]] and Spawn Actor nodes. Set the value at creation time. |
| **Private** | Only this Blueprint can read or write the variable. Other Blueprints can't access it even with a reference. |
| **Default Value** | The starting value before any Set node runs. Set this after compiling. |
| **Tooltip** | Description shown when hovering over the variable in other Blueprints. Useful for Instance Editable variables that designers will configure. |

## Common Patterns

**Trigger-once gate ([[UE Tutorial 4 - Haunted House Triggers and Events|Tutorial 4]]):**
A Boolean variable `HasTriggered` starts as false. On [[OnComponentBeginOverlap]], a [[Branch]] checks the bool — if false, run the effect and Set `HasTriggered` to true. Future overlaps hit the Branch and do nothing. This is the manual version of [[Flow Control|DoOnce]].

**Instance-configurable property ([[UE Tutorial 4 - Haunted House Triggers and Events|Tutorial 4]]):**
A variable `SoundToPlay` is marked Instance Editable. Each trigger Blueprint placed in the level can have a different sound assigned in the Details panel without modifying the Blueprint itself. See [[Blueprint Instances]].

**Storing a reference for later ([[UE Tutorial 3 - Scoring and UI|Tutorial 3]]):**
[[Create Widget]] returns a widget object. Promote the return value to a variable (right-click → Promote to Variable) so you can access the widget later to update its text. See [[Getting References]].

**Counter ([[UE Tutorial 2 - Collectables and Restart|Tutorial 2]]):**
An Integer variable on [[PlayerState]] tracks collectables. Each pickup calls [[Increment Int]] on the variable. The count persists across the session because PlayerState survives as long as the player is connected.

## Related

- [[Blueprint Instances]] — Instance Editable and Expose on Spawn in detail
- [[Getting References]] — how to get, store, and pass object references
- [[For Each Loop]] — iterating over array variables
- [[Flow Control|DoOnce]] — engine-provided alternative to the bool gate pattern
- [[Construction Script]] — runs when Expose on Spawn variables are set
- [[Print String]] — quick way to display a variable's value for debugging

## Source

- Written from training knowledge — fundamental Blueprint concept stable across UE4/UE5 versions
- [[UE Tutorial 2 - Collectables and Restart|Tutorial 2]] — counter variable on PlayerState
- [[UE Tutorial 3 - Scoring and UI|Tutorial 3]] — Promote to Variable pattern
- [[UE Tutorial 4 - Haunted House Triggers and Events|Tutorial 4]] — trigger-once bool, Instance Editable properties

