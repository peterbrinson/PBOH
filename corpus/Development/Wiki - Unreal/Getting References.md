---
publish: true
---


A reference is how one Blueprint talks to another object. Without a reference, you can't read an actor's variables, call its functions, or destroy it. "How do I get a reference to X?" is one of the most common questions students hit when working across multiple Blueprints.

## Use When

- You need to access a variable or function on another actor or object
- You need to pass an actor as a parameter to a [[Custom Events|Custom Event]]
- You're getting "Accessed None" errors — usually means a reference is missing or invalid

## Ways to Get a Reference

### By Index (Global Lookup)

Retrieve an object from the engine by player index. Works anywhere — no prior connection to the target needed.

- [[Get Player Controller]] — returns the [[PlayerController]] at a given index (0 for single-player)
- [[Get Player State]] — returns the [[PlayerState]] at a given index

### By Overlap (Collision Gives You One)

When [[OnComponentBeginOverlap]] fires, the **Other Actor** pin is already a reference to whatever entered the volume. [[Cast To]] then type-checks it and gives access to class-specific variables and functions.

### By Level Blueprint (Placed Actor Reference)

Inside a [[Level Blueprint]], you can create direct references to actors placed in the level — something class Blueprints cannot do. Select an actor in the viewport or World Outliner, then right-click in the Level Blueprint graph → **Create a Reference to [ActorName]**. Or drag the actor from the World Outliner directly into the graph. The resulting node shows the actor name and "from Persistent Level."

This is the only way to say "this specific door" or "that specific light" rather than "any actor of class X." It's why [[UE Tutorial 201 - Pawn Possession (WIP)|Tutorial 6]] uses a Level Blueprint for possession — the specific characters to swap between are placed instances, not class-level concepts.

### By Trace (Hit Result)

When a [[Traces|trace]] hits something, the **Hit Actor** field of the **Break Hit Result** gives you a reference to whatever was hit. This is how interaction systems work — a Sphere Trace fires from the camera, and if it hits an actor with the right tag, you store that reference for later use.

In [[UE Tutorial 821 - Base Interactive System (WIP)|Tutorial 821]], Hit Actor is promoted to a variable called `Interactable Item`, giving the interaction system a persistent reference to the object the player is looking at.

### Self

**Get a Reference to Self** — right-click in the Event Graph and search for it. Returns a reference to the current Blueprint's actor. Used when you need to pass *this actor* as a parameter to another Blueprint's function or event.

In [[UE Tutorial 3 - Scoring and UI|Tutorial 3]], Self is used in BP_Collectable: the collectable passes a reference to itself into the `OnCollectedCollectable` event so that the PlayerState can call [[DestroyActor]] on it at the end of the chain.

### By Component (Get Component by Class)

If you have a reference to an Actor and need to access one of its [[Components]], use **Get Component by Class**. Drag from the Actor reference, search for the component class, and it returns the first component of that type on the Actor.

[[UE Tutorial 821 - Base Interactive System (WIP)]] does this.

A component can get a reference back to its owning Actor with **Get Owner**.

### From a Function or Node Return Value

Many nodes return object references as output pins:
- [[Create Widget]] returns the widget instance
- [[Cast To]] returns the cast result (the object, now typed to the specific class)

These references are temporary — they exist on the wire but disappear after the current execution unless you save them.

## Keeping a Reference (Promote to Variable)

A reference that flows through a pin is gone after that frame's execution. To use it later, **Promote to Variable**: drag off an output pin and select **Promote to Variable**. This creates a named variable (visible in the Variables panel) that stores the reference persistently.

In [[UE Tutorial 3 - Scoring and UI|Tutorial 3]], the return value of [[Create Widget]] is promoted to a variable called `ScoreWidget`. This lets the scoring logic access the widget later to call `OnScoreUpdated` and update the displayed text.

**When to promote:** if you need a reference more than once, or in a different part of the Event Graph from where it was created, promote it.

## Common Mistakes

- **Forgetting to promote** — the reference is created but not stored, so it's inaccessible later
- **Wrong Cast To class** — the cast silently fails and returns null; the exec pin for failure fires instead
- **Assuming remote access** — in networked games, [[Get Player Controller]] only returns local controllers on clients; remote controllers aren't available

## Related

- [[Cast To]] — type-checks and narrows a reference to a specific class
- [[Custom Events]] — often the mechanism for passing references between Blueprints
- [[Level Blueprint]] — the only place you can reference specific placed actors by selection
- [[Traces]] — Hit Actor from Break Hit Result provides references to whatever the trace hits
- [[PlayerController]] — common target of reference lookups
- [[PlayerState]] — common target of reference lookups

## Source

- [[UE Tutorial 3 - Scoring and UI|Tutorial 3]] — Self reference (Step 5), Promote to Variable (Step 3)
- Synthesized from existing wiki pages: [[Get Player Controller]], [[Get Player State]], [[Cast To]], [[Create Widget]], [[OnComponentBeginOverlap]]

