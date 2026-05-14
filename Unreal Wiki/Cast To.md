---
publish: true
---


A Blueprint node that checks whether an object is a specific class — and if it is, gives you access to that class's variables and functions. Casting is how you reach across from one Blueprint to another to read or change things.

Without casting, an overlap event gives you a generic **Actor** reference. You know *something* overlapped, but you can't access its health variable, its inventory, or anything specific to its class. Casting says: "I think this Actor is actually a BP_ThirdPersonCharacter — prove it, and give me access."

## Use When

- An [[OnComponentBeginOverlap]] gives you **Other Actor** and you need to verify it's the player
- You have a generic reference (Actor, Object) and need to access class-specific variables or functions
- You want to call a function that only exists on a particular Blueprint class

## How It Works

### Pins

| Pin | Type | Description |
|---|---|---|
| **Object** | Wildcard | The reference you're checking (e.g., Other Actor from an overlap event) |
| **Out** | Exec | Fires if the cast succeeds — the object *is* that class |
| **Cast Failed** | Exec | Fires if the cast fails — the object is *not* that class |
| **As [ClassName]** | Object | The typed reference you can now use to access that class's variables and functions |

### The Node Name Changes

There is no single "Cast To" node. When you drag off a pin and search "Cast to," you see every class in the project. You pick the target:

- **Cast to Character** — the base Unreal character class
- **Cast to BP_ThirdPersonCharacter** — the template Blueprint that ships with the Third Person project
- **Cast to BP_FirstPersonCharacter** — the First Person template equivalent
- **Cast to MyCustomCharacter** — any Blueprint class you've created

In the tutorials, students typically cast to the **template character Blueprint** (e.g., BP_ThirdPersonCharacter), not the base Character class. This is correct — the template Blueprint is where student-created variables and functions live.

### Why Not Just Cast to Character?

The base Character class only has properties that every character shares (movement, capsule, mesh). If a student added a "Health" variable to BP_ThirdPersonCharacter, casting to the base Character class won't see it. Cast to the most specific class you need.

## Common Patterns

**Verify the player in an overlap ([[UE Tutorial 1 - A Floor Plate Opens A Door|Tutorial 1]] pattern):**
[[OnComponentBeginOverlap]] fires → drag off **Other Actor** → **Cast to BP_ThirdPersonCharacter**. If the cast succeeds, it's the player — proceed with the door logic. If it fails, something else entered the trigger (a physics object, an AI) — ignore it.

**Access a variable on another Blueprint:**
Actor A needs to read a variable on Actor B. Get a reference to Actor B (via overlap, line trace, or stored reference) → Cast to B's class → pull the variable off the **As [ClassName]** pin.

## Related

- [[OnComponentBeginOverlap]] — the most common source of the Object pin (via Other Actor)
- [[Character]] — the base class that template characters inherit from
- [[PlayerState]] — commonly cast to a custom PlayerState after [[Get Player State]]
- [[GameMode]] — commonly cast to a custom GameMode to access game rules
- [[PlayerController]] — commonly cast to a custom PlayerController for player-specific logic

## Source

- [Cast To Character | UE 5.7 Documentation](https://dev.epicgames.com/documentation/unreal-engine/BlueprintAPI/Utilities/Casting/CastToCharacter?application_version=5.7) — retrieved 2026-04-07

