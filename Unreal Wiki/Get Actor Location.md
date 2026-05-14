---
publish: true
---


Returns the current world-space position of an actor as a Vector (X, Y, Z). The getter companion to [[Set Actor Location]].

## Use When

- You need an actor's current position to compute relative movement (e.g., "move 200 units up from where it is now")
- You want to store a starting position before a [[Timeline]] moves something, so you can use it as the A value in a [[Lerp]]
- You need to measure distance between two actors

## How It Works

### Pins

| Pin | Type | Description |
|---|---|---|
| **Target** | Actor | The actor to read (usually Self, or a reference from [[Cast To]]) |
| **Return Value** | Vector | The actor's current position in world space |

Pure node — no exec pins. It reads the position at the moment it's evaluated, doesn't change anything.

## Common Patterns

**Store start position for Lerp ([[UE Tutorial 1 - A Floor Plate Opens A Door|Tutorial 1]] pattern):**
On **Event BeginPlay**, call Get Actor Location and save the result to a variable (e.g., ClosedPosition). Use that variable as the A pin on a [[Lerp]], with a manually set OpenPosition as B. Now the door animates relative to wherever it was placed in the level — no hardcoded coordinates.

**Distance check:**
Get Actor Location on two actors → subtract the vectors → use **Vector Length** to get the distance. Useful for proximity checks without collision volumes.

## Related

- [[Set Actor Location]] — the setter; moves the actor to a new position
- [[Lerp]] — often consumes the Vector this node returns

## Source

- [Get Actor Location | UE 5.7 Documentation](https://dev.epicgames.com/documentation/unreal-engine/BlueprintAPI/Transformation/GetActorLocation?application_version=5.7) — retrieved 2026-04-07

