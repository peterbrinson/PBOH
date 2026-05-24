---
publish: true
---


Invisible volumes you add to a Blueprint to detect when other actors enter, exit, or occupy a space. Depending on their collision settings, they either let things pass through (generating overlap events) or physically block movement (generating hit events). In the editor they appear as wireframes.

Three shapes are available. They share the same settings, events, and behavior — choose based on the geometry you're detecting.

## The Three Shapes

| Shape | Component Name | Size Property | Best For |
|---|---|---|---|
| **Box** | Box Collision | **Box Extent** (half-size per axis) | Floor plates, doorways, room boundaries, rectangular trigger zones |
| **Sphere** | Sphere Collision | **Sphere Radius** | Collectables, explosion range, radial proximity detection |
| **Capsule** | Capsule Collision | **Half Height** + **Radius** | Character colliders (built into [[Character]] by default) |

### How to Add

In the Blueprint editor: **Add Component** → search for the shape name. Position and scale it in the viewport.

## Key Settings (Details Panel → Collision)

| Setting | What It Does |
|---|---|
| **Generate Overlap Events** | Must be **true** for [[OnComponentBeginOverlap]] and [[OnComponentEndOverlap]] to fire. **Both** components in an overlap need this enabled — your trigger volume *and* the thing entering it (e.g., the player's Capsule Collision). The default [[Character]] template has this on by default. |
| **Simulation Generates Hit Events** | Must be **true** for [[OnComponentHit]] to fire on physics-simulating objects. Without this, blocking collisions still physically stop movement but won't trigger Blueprint events. |
| **Collision Presets** | Determines what this volume interacts with. **OverlapAllDynamic** is the safe default for trigger zones — overlaps with everything that moves. For custom behavior, set to **Custom** to configure per-object-type responses. |
| **Object Type** | What this component identifies as in the collision system — WorldStatic, WorldDynamic, Pawn, PhysicsBody, etc. Other components use this to decide how to respond. |
| **Hidden in Game** | True by default. The wireframe is editor-only. |

## Collision Responses

Every component has an **Object Type** (what it is) and a grid of **Collision Responses** (how it reacts to each other Object Type). For each object type, the response is one of three values:

| Response | What Happens | Events |
|---|---|---|
| **Block** | Objects physically stop each other | [[OnComponentHit]] fires (if Simulation Generates Hit Events is on) |
| **Overlap** | Objects pass through each other | [[OnComponentBeginOverlap]] / [[OnComponentEndOverlap]] fire (if Generate Overlap Events is on for both) |
| **Ignore** | Objects pass through each other | No events fire |

### Rules

- **Both components must agree to Block** for a blocking collision to occur. If one is set to Block and the other to Overlap, you get an overlap — not a block.
- **Overlap without Generate Overlap Events behaves like Ignore.** The objects pass through each other and no events fire. This is by design for performance — the engine only runs overlap queries when both components opt in.
- **One component is enough for hit events.** Only the component with Simulation Generates Hit Events enabled receives the [[OnComponentHit]] event. The other object doesn't need the setting.
- An object set to **Block** can still generate overlap events if the other object is set to Overlap. An overlap occurs even though the first object wanted to block.

### What the Settings Look Like

**Hit event setup** — a PhysicsBody with Simulation Generates Hit Events enabled, set to Block WorldDynamic objects:

![[col_collideevent_sphere.png]]

**Overlap event setup** — a PhysicsBody with Generate Overlap Events enabled, set to Overlap WorldDynamic objects:

![[col_overlapevent_sphere.png]]

**The other side** — a WorldDynamic wall with Generate Overlap Events enabled, set to Block PhysicsBody objects. Even though the wall Blocks, an overlap event still fires because the sphere is set to Overlap:

![[col_collideoverlapevent_box.png]]

## Events

Select the collision component → Details panel → scroll to **Events**:

| Event | When It Fires | See |
|---|---|---|
| **On Component Begin Overlap** | Another actor enters the volume | [[OnComponentBeginOverlap]] |
| **On Component End Overlap** | Another actor leaves the volume | [[OnComponentEndOverlap]] |
| **On Component Hit** | A blocking collision occurs | [[OnComponentHit]] |

## Debugging: "My Overlap Isn't Firing"

Check in this order:

1. **Generate Overlap Events** is true on **both** components (your trigger *and* the entering actor's collider)
2. **Collision Preset** is set to overlap (not ignore) the other object type
3. The event node is wired to the **correct component** — if you have multiple collision components, each generates its own events
4. The other actor actually has a collision component (a Static Mesh alone doesn't generate overlaps without one)

## Common Patterns

**Floor plate trigger ([[UE Tutorial 1 - A Floor Plate Opens A Door|Tutorial 1]] pattern):**
A Box Collision scaled flat and wide (large X/Y, small Z). Player walks over it → [[OnComponentBeginOverlap]] fires → [[Timeline]] plays → door opens. [[OnComponentEndOverlap]] reverses the Timeline → door closes.

**Collectable pickup ([[UE Tutorial 2 - Collectables and Restart|Tutorial 2]] pattern):**
A Sphere Collision slightly larger than the collectable's mesh. Player enters the sphere → [[OnComponentBeginOverlap]] fires → [[Cast To]] verifies it's the player → [[PlayerState]] updates → [[DestroyActor]] removes the collectable.

**Haunted house triggers ([[UE Tutorial 4 - Haunted House Triggers and Events|Tutorial 4]] pattern):**
Box Collisions used for room-entry triggers — lights, doors, NPC animations, sounds. Each trigger Blueprint uses the same overlap-and-cast pattern with a different effect. A bool variable `HasTriggered` gates one-time triggers to prevent re-firing.

**Character body (default):**
Every [[Character]] comes with a Capsule Collision as its root collider. This is what makes the player detectable by trigger volumes. Its Generate Overlap Events is enabled by default — if you disable it, no trigger in the level will detect this character.

## Related

- [[OnComponentBeginOverlap]] — the primary event generated by these components
- [[OnComponentEndOverlap]] — fires when an actor leaves the volume
- [[Cast To]] — typically follows an overlap event to verify the overlapping actor's type
- [[Character]] — comes with a Capsule Collision by default

## Source

- [Collision in Unreal Engine - Overview | UE 5.7](https://dev.epicgames.com/documentation/unreal-engine/collision-in-unreal-engine-overview?application_version=5.7) — clipped 2026-04-12
- [On Component Begin Overlap | UE 5.7](https://dev.epicgames.com/documentation/unreal-engine/BlueprintAPI/Collision/OnComponentBeginOverlap) — clipped 2026-04-07
- [On Component End Overlap | UE 5.7](https://dev.epicgames.com/documentation/unreal-engine/BlueprintAPI/Collision/OnComponentEndOverlap?application_version=5.7) — clipped 2026-04-07
- [[UE Tutorial 1 - A Floor Plate Opens A Door|Tutorial 1]] — floor plate Box Collision pattern
- [[UE Tutorial 2 - Collectables and Restart|Tutorial 2]] — collectable Sphere Collision pattern
- [[UE Tutorial 4 - Haunted House Triggers and Events|Tutorial 4]] — trigger-once Box Collision pattern

