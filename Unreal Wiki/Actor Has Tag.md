---
publish: true
---


Checks whether an Actor's Tags array contains a specific name. Returns a boolean — use it with [[Branch]] to route logic based on whether the actor is the right type.

Tags are simple strings added in the **Details** panel under **Actor → Tags**. They're a lightweight way to categorize actors without creating separate classes or using [[Cast To]].

## Use When

- You need to filter actors by category without knowing their exact class (e.g., "is this thing interactable?")
- A [[Traces|trace]] or overlap hits something and you need to check what kind of thing it is
- You want a simpler alternative to Cast To when you don't need access to class-specific variables

## How It Works

### Key Pins

| Pin | Type | Description |
|---|---|---|
| **Target** | Actor | The actor to check (often from a trace Hit Actor or overlap Other Actor) |
| **Tag** | Name | The tag string to look for (case-sensitive) |
| **Return Value** | Boolean | True if the actor's Tags array contains the tag |

### Adding Tags to an Actor

Select the Actor Blueprint (or instance) → **Details** panel → **Actor** section → **Tags**. Click **+** to add a new tag entry and type the name (e.g., `Interactable`).

Tags are an array — an actor can have multiple tags. Actor Has Tag checks if the specified tag is anywhere in the array.

### Actor Tags vs Component Tags

Actors and Components each have their own Tags array. **Actor Has Tag** checks the Actor's tags. There is a separate **Component Has Tag** node for checking component-level tags. In most cases, tagging the Actor is sufficient.

## Common Patterns

**Interaction filtering ([[UE Tutorial 821 - Base Interactive System (WIP)|Tutorial 821]] pattern):**
A Sphere Trace hits something → **Break Hit Result** → **Hit Actor** → **Actor Has Tag** with tag `Interactable` → [[Branch]]. If true, store the hit actor as the current interactable item. If false, clear the interaction state. This filters out walls, floors, and other non-interactable geometry without needing to cast to a specific class.

**Tag vs Cast To:**
Use tags when you just need to know *what category* an actor is in. Use [[Cast To]] when you need to access class-specific variables or functions. Tags are faster to set up and don't create class dependencies, but they don't give you typed access to the actor's internals.

## Related

- [[Branch]] — Actor Has Tag returns a bool; Branch routes execution based on it
- [[Cast To]] — heavier alternative that provides typed access to class-specific features
- [[Traces]] — Hit Actor from Break Hit Result is the common Target for Actor Has Tag
- [[Components]] — Component Has Tag is the component-level equivalent

## Source

- [Actor Has Tag | UE 5.7](https://dev.epicgames.com/documentation/unreal-engine/BlueprintAPI/Actor/ActorHasTag?application_version=5.7) — clipped 2026-04-11
- [[UE Tutorial 821 - Base Interactive System (WIP)|Tutorial 821]] — `Interactable` tag filtering in sphere trace interaction system

