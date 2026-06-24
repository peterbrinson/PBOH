---
publish: true
---


Reusable building blocks that you add to Actors. An Actor by itself is just a container — components give it visible meshes, collision shapes, movement behavior, audio, UI, and custom logic. Every Actor you've worked with is assembled from components: a [[Character]] has a Skeletal Mesh Component, a Capsule Component, and a CharacterMovementComponent. A BP_Interactable_Base has a Static Mesh Component, a [[Collision Components|Sphere Collision]] component, and a Widget Component.

## Use When

- You want to give an Actor a visible mesh, collision, movement, sound, or UI
- You need to separate a chunk of logic from the Actor it lives on (interaction system, health system, inventory)
- You want reusable behavior that can be added to or removed from any Actor

## How It Works

### Component Hierarchy

There are two base types of component:

| Type | Has Transform | Use For |
|---|---|---|
| **Actor Component** | No | Pure logic with no position in the world — interaction systems, health managers, input handlers, timers |
| **Scene Component** | Yes | Anything with a position, rotation, or scale — meshes, collision shapes, cameras, audio sources, widgets |

Scene Component is a subclass of Actor Component, so everything that's true of Actor Components is also true of Scene Components. The difference is whether the component has a transform (location/rotation/scale) in the world.

Most components you drag from the Components panel (Static Mesh, Sphere Collision, Camera, etc.) are Scene Components. Actor Components are the ones you create when you want logic without a physical presence.

### Common Built-in Components

| Component | Type | What It Does |
|---|---|---|
| **Static Mesh** | Scene | Renders a non-animated 3D model |
| **Skeletal Mesh** | Scene | Renders an animated 3D model (characters, creatures) |
| **Box / Sphere / Capsule Collision** | Scene | Trigger volumes and collision shapes (see [[Collision Components]]) |
| **CharacterMovementComponent** | Scene | Handles walking, jumping, falling, swimming for [[Character]] actors |
| **Camera** | Scene | Viewpoint for the player |
| **Widget** | Scene | Displays a [[Widget Blueprint]] in 3D space or screen space |
| **Audio** | Scene | Spatial sound attached to an actor |
| **Arrow** | Scene | Editor-only directional indicator |

### Creating a Custom Actor Component

This is what [[UE Tutorial 821 - Base Interactive System (WIP)|Tutorial 821]] teaches. To create reusable logic that can be added to any Actor:

1. In the Content Browser, right-click → Blueprint Class → **All Classes** → search **Actor Component**
2. Name it (e.g., `InteractionComponent`)
3. Open it — you get an Event Graph (same as any Blueprint) but no Viewport or Components panel
4. Add your logic: [[Custom Events]], variables, timers, traces
5. Add the component to any Actor: open the Actor's Blueprint → Components panel → **Add** → search for your component

The Actor Component has no physical presence in the level. It's purely logic. To talk back to the Actor that owns it, use **Get Owner** — this returns a reference to the Actor the component is attached to.

### Why Use a Component Instead of Putting Logic in the Actor

- **Removable:** Disable or remove the component and the behavior disappears. Tutorial 821's InteractionComponent can be removed from the character to disable interaction entirely.
- **Reusable:** The same component can be added to different Actor types without duplicating logic.
- **Organized:** Keeps complex Actors readable by separating concerns into focused components.

### Getting a Component from an Actor

From outside the Actor, use **Get Component by Class** — drag from an Actor reference and search for the component class. This returns the first component of that type on the Actor.

In [[UE Tutorial 821 - Base Interactive System (WIP)|Tutorial 821]] on it.

## Related

- [[Construction Script]] — setup graph that configures components at spawn time
- [[Collision Components]] — Box, Sphere, Capsule collision components
- [[Character]] — built from Skeletal Mesh + Capsule + CharacterMovementComponent
- [[Widget Blueprint]] — Widget Component displays a widget in 3D space
- [[Getting References]] — Get Component by Class and Get Owner are reference patterns
- [[Blueprint Instances]] — components are configured per-instance in the Details panel

## Source

- [Components in Unreal Engine | UE 5.7](https://dev.epicgames.com/documentation/unreal-engine/components-in-unreal-engine?application_version=5.7) — clipped 2026-04-12
- [[UE Tutorial 821 - Base Interactive System (WIP)|Tutorial 821]] — Actor Component creation (InteractionComponent), Get Component by Class, Get Owner

