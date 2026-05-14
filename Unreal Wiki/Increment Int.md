---
publish: true
---


Adds 1 to an integer variable. A convenience node (displays as `++`) — equivalent to `Set` with `Variable + 1`, but more compact and readable. The variable is modified in place.

## Use When

- You're counting something: collectables picked up, enemies killed, rounds completed
- You want a clean single-node counter increment instead of a Get → Add → Set chain

## How It Works

### Pins

| Pin | Direction | Type | Description |
|---|---|---|---|
| **Target** | Input | Integer (by ref) | The integer variable to increment. Drag a variable onto this pin or select one from the dropdown. |

The node reads the current value, adds 1, and writes it back. No output pin for the new value — if you need the updated value after incrementing, follow with a Get on the same variable.

### Decrement Int

The counterpart **Decrement Int** subtracts 1. Same behavior, opposite direction.

## Common Patterns

**Collectable count ([[UE Tutorial 2 - Collectables and Restart|Tutorial 2]] pattern):**
Player overlaps a collectable → [[Get Player State]] → [[Cast To]] custom [[PlayerState]] → Increment Int on the `NumberOfCollectables` variable → [[Print String]] to verify → [[DestroyActor]] removes the collectable.

### Alternative: Add Node

[[UE Tutorial 3 - Scoring and UI|Tutorial 3]] uses a different approach for counting: an **Add** node instead of Increment Int. Drag from the event, search for "Add (Operators)," connect the variable, and the output is `x + 1`. The Add node returns the new value as an output pin — unlike Increment Int, which modifies in place but has no output. This matters when you need to pass the updated count forward (e.g., into a [[Custom Events|Custom Event]] parameter to update a [[Widget Blueprint|widget]]).

Use **Increment Int** when you just need to bump a counter. Use **Add** when you need the new value immediately on the same wire.

## Related

- [[PlayerState]] — the typical owner of counter variables that Increment Int modifies
- [[Get Player State]] — used to reach the PlayerState before incrementing
- [[Cast To]] — needed between Get Player State and Increment Int to access custom variables
- [[Print String]] — commonly placed after Increment Int to verify the new value during debugging

## Source

- [[UE Tutorial 2 - Collectables and Restart|Tutorial 2]] — Step 3 (Increment Int on NumberOfCollectables)
- [[UE Tutorial 3 - Scoring and UI|Tutorial 3]] — Step 4B (Add node alternative)
- No dedicated UE docs page for this node.

