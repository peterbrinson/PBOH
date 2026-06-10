---
cssclasses:
  - unreal-tutorial
publish: false
---

*By Peter Brinson*


## 0. Introduction

> [!info]- A. Outcome
> <span style="color:#cb5d21">**This tutorial's outcome:**</span>
> A small physics playground: objects that fall, tumble, and bounce — and you in control of the three dials that matter: how **heavy** an object is, how **bouncy** it is, and how strong **gravity** is.
>
> The essential lesson is that basic physics in Unreal is not programming — it is a checkbox plus a handful of properties. The skill is knowing which properties, and what each one actually changes.
> [image: a stack of crates mid-topple, a ball bouncing, in a simple blockout level]

> [!info]- B. Learning Objectives
> Develop working knowledge of physics fundamentals:
>
> - `Simulate Physics` — the checkbox that hands an object to the physics engine
> - collision — why physics requires it, and **simple vs. complex** collision shapes
> - `Mass (kg)`, `Linear Damping`, `Angular Damping` — weight and air resistance
> - Physical Materials — `Restitution` (bounciness) and `Friction`
> - gravity — per-object (`Enable Gravity`), per-world (`Global Gravity Z`), per-character (`Gravity Scale`)
> - `Add Impulse` — giving a physics object a push from a Blueprint
> - [[OnComponentHit]] — reacting when physics objects strike things
>
> Review:
> - [[Collision Components]] and [[OnComponentBeginOverlap]] (Tutorial 1)


## 1. The Checkbox: Simulate Physics
---
*An object falls, tumbles when clipped, and can be shoved around by the player — without a single Blueprint node.*

> [!info]- A. A Place to Drop Things
> Open any project with a playable character — your Tutorial 1 project works, or a fresh third person template.
>
> From the Quickly Add menu (the cube-with-a-plus icon in the toolbar) [?], place a `Cube` from Basic Shapes into the level. Use the Transform Gizmo to lift it well above the ground — two or three player-heights up.
>
> [image: a cube floating above the ground plane in the viewport]
>
> Press Play. The cube hangs in the air. Walk into the space below it. Nothing moves, nothing falls. By default, every Static Mesh in Unreal is exactly that — static. It isn't *waiting* to fall; the engine considers it part of the world, like a wall.

> [!info]- B. Hand It to the Physics Engine
> Select the cube. In the Details panel, find the **Physics** section and check `Simulate Physics`.
>
> [image: Details panel, Physics section, Simulate Physics checkbox highlighted]
>
> Press Play. The cube drops, lands, and settles. Walk into it — it slides and topples when you push it. The player character pushes physics objects automatically; no setup needed [?].
>
> Place four or five more cubes, check `Simulate Physics` on each, and stack them into a tower. Play, and knock it over.
>
> [image: a toppled stack of cubes with the player character standing in the rubble]
>
> > [!question] Ask your LLM why
> > In the Unreal tutorial I'm following, a cube only falls when "Simulate Physics" is checked. What is the engine doing differently for a simulated object versus a static one, and why isn't everything simulated all the time?

> [!info]- C. One Rule Before Going Further
> Physics simulation has one hard requirement: **the object must have simple collision.** The engine's Basic Shapes (Cube, Sphere, Cylinder) all ship with it, which is why this chapter just worked. Meshes you bring in from elsewhere — Fab assets, your own models — sometimes don't, and the symptom is unforgettable: you check `Simulate Physics`, press Play, and the object **falls straight through the floor and out of the world.**
>
> Chapter 2 is the fix. If you're only using basic shapes today, you can skim it — but you'll be back the first time a Fab prop drops through the ground.


## 2. Collision: What Lets Objects Touch
---
*Why some meshes fall through the floor, and how to give any mesh a physics body.*

> [!info]- A. Block, Overlap, Ignore
> Every collidable object in Unreal carries a set of **collision responses** that decide what happens when it meets another object [wiki gap?]:
>
> - **Block** — the two objects can't pass through each other. This is what physics needs: a falling crate *blocks* the floor, so it lands. Both objects must block each other for blocking to occur.
> - **Overlap** — the objects pass through each other, but the engine can fire an event at the moment they cross. This is Tutorial 1's pressure plate — [[OnComponentBeginOverlap]].
> - **Ignore** — they pass through silently. Nothing fires.
>
> You met overlap events in Tutorial 1. Blocking has its own event: [[OnComponentHit]] fires when a physics object *strikes* something — useful later for playing a sound on impact. (For a simulated object to report hits, `Simulation Generates Hit Events` must be checked in its Collision section [?].)

> [!info]- B. Simple vs. Complex Collision
> Every Static Mesh can carry two collision representations [wiki gap?]:
>
> - **Complex collision** — the render mesh itself, triangle by triangle. Precise, expensive, and used for things like line traces against detailed geometry.
> - **Simple collision** — a few invisible primitive shapes (boxes, spheres, capsules, convex hulls) wrapped around the mesh. Cheap and sturdy.
>
> **Physics simulation uses simple collision — full stop.** A mesh with no simple collision cannot simulate physics properly; this is the fall-through-the-floor bug from Chapter 1C [?]. The engine's Basic Shapes ship with simple collision; imported and Fab meshes vary.

> [!info]- C. Add Simple Collision to a Mesh
> Find a mesh that needs collision — any Fab prop, or to follow along, any Static Mesh asset in your project. **Double-click the asset in the Content Browser** to open the Static Mesh Editor.
>
> To see what collision it already has: from the editor's toolbar, enable Collision display (the Collision dropdown → `Simple Collision` [?]). Green wireframe shapes are its simple collision. No green shapes = no simple collision.
>
> [image: Static Mesh Editor with green simple-collision wireframe visible around a prop]
>
> To add some, open the **Collision menu** in the Static Mesh Editor's menu bar:
>
> - `Add Box Simplified Collision` [?] — a single box around the mesh. Right for crates, books, furniture — most props.
> - `Add Sphere Simplified Collision` [?] — for balls and roundish things you want to roll.
> - `Add Capsule Simplified Collision` [?] — for pill-shaped things.
> - `Auto Convex Collision` [?] — the engine fits a tighter hull around an irregular shape. Use when a box would be too crude (a statue, a chair).
>
> The collision shape is now a Physics Body you can move, rotate, and scale with the usual W / E / R keys, right inside the Static Mesh Editor. You can add more than one shape to better wrap a complex mesh.
>
> Save the asset. Back in the level, the mesh can now `Simulate Physics`.
>
> > [!question] Ask your LLM why
> > In the Unreal tutorial I'm following, physics simulation requires "simple collision" — a box or hull wrapped around the mesh — instead of using the actual detailed mesh. Why is simulating against the real triangles a problem?
>
> > [!tip] Tip
> > To see collision in the level (not just the mesh editor): viewport View Mode dropdown → `Player Collision` [?]. The world redraws as the physics engine sees it.


## 3. Weight: Mass and Damping
---
*Two cubes, same size — one shoves aside like cardboard, one barely moves.*

> [!info]- A. Mass
> Select a simulated cube. In Details → Physics, find `Mass (kg)`. Unreal computed this automatically from the object's volume — scale the cube bigger and the mass climbs on its own.
>
> To take control, check the small override box next to `Mass (kg)` [?] and type a value.
>
> Make two same-sized cubes: one at `5` kg, one at `500` kg. Play, and walk into each. The light one skids away from you; the heavy one barely acknowledges you. Mass is how objects *resist being pushed* — by the player, by impulses, by each other.
>
> [image: two identical cubes, player pushing; one displaced far, one barely moved]
>
> <span style="color:#cb5d21">**Don't miss this:**</span> mass does **not** change how fast an object falls. Drop the 5 kg and 500 kg cubes together — they land together. (Galileo said so; Unreal agrees.) If you want something to fall slower, that's gravity or damping — the next sections — not mass.
>
> > [!question] Ask your LLM why
> > In the Unreal tutorial I'm following, a 5 kg cube and a 500 kg cube fall at exactly the same speed, but they respond very differently when pushed. Why does mass affect pushing but not falling?

> [!info]- B. Damping — Air Resistance
> Two properties just below mass [?]:
>
> - `Linear Damping` — resistance to *moving*. At `0` (default [?]) objects fall at full acceleration. Raise it and a falling object drifts down, like falling through water. Values between `1` and `5` are already very noticeable [?].
> - `Angular Damping` — resistance to *spinning*. Raise it and a tumbling object settles quickly instead of rolling around.
>
> Damping is the cheap path to a dreamlike, floaty fall for a *single object* — no global changes, just that body's own air resistance.


## 4. Bounciness: Physical Materials
---
*Two identical spheres dropped together — one bounces away, one lands dead.*

> [!info]- A. Make a Physical Material
> Bounciness doesn't live on the mesh — it lives in a small asset called a **Physical Material** [wiki gap?], which describes what a surface is *made of*.
>
> Right-click in the Content Browser → **Physics → Physical Material** [?]. If asked to pick a class, choose `PhysicalMaterial` [?]. Name it `PM_Bouncy` (the `PM_` prefix, same spirit as `BP_` and `M_`).
>
> Double-click it. Two properties matter today:
>
> - `Restitution` — bounciness, `0` to `1`. At `0`, the object lands dead. At `0.9`, it's rubber. Set `PM_Bouncy` to `0.9`.
> - `Friction` — how much surfaces grip when sliding. `0` is ice. Leave it at default for now.
>
> [image: Physical Material details panel with Restitution set to 0.9]

> [!info]- B. Apply It
> Select a simulated `Sphere` in the level. In Details, find the **Collision** section → `Phys Material Override` [?] → choose `PM_Bouncy`.
>
> Place a second simulated sphere next to it with no override. Lift both high, press Play, and watch them land — one bounces away in long arcs, one thuds.
>
> [image: two spheres mid-drop, one bouncing, one resting]
>
> Make a `PM_Ice` (Friction `0`) and apply it to a ramp or floor section to feel what friction does to sliding.
>
> > [!info] For the future
> > A Physical Material can also be attached inside a regular Material asset, so that every surface using that Material is automatically icy or rubbery. The per-object override above is the simplest path and wins when both are present [?].


## 5. Gravity: Three Dials
---
*The same falling crate on Earth, on the moon, and in a dream.*

> [!info]- A. Per Object — Enable Gravity
> In Details → Physics, next to `Simulate Physics`, is `Enable Gravity` [?]. Uncheck it and the object ignores gravity entirely — it hangs where it is, but it still *simulates*: push it or hit it with an impulse and it drifts off in that direction and keeps going, like a prop in zero-g. On/off, no in-between.

> [!info]- B. Per World — Global Gravity
> Gravity's strength is a world property. Open the **World Settings** panel (Window → World Settings [?]), find the **Physics** section, check `Override World Gravity` [?], and set `Global Gravity Z` [?].
>
> The default is `-980` — Earth gravity, in centimeters per second squared (Unreal's units are centimeters). Some values worth feeling:
>
> - `-980` — Earth. The default.
> - `-162` — the moon. Crates fall like astronauts.
> - `-100` or so — dream-slow. Everything that falls, floats down.
>
> This affects **every physics body in the level** — and, importantly, it also affects the player.
>
> > [!question] Ask your LLM why
> > In the Unreal tutorial I'm following, gravity is set to -980 by default. Why is it negative, and why 980?

> [!info]- C. Per Character — Gravity Scale
> Your player character doesn't use `Simulate Physics` — characters are driven by the `Character Movement` component, which has its own dial: `Gravity Scale` [?]. It's a *multiplier* on world gravity: at `1.0`, the character falls and jumps normally; at `0.5`, half-gravity jumps.
>
> This is how you split the difference. Want objects to fall dream-slow while the player still jumps normally? Lower `Global Gravity Z` for the world, then *raise* the character's `Gravity Scale` to compensate [?]. Each kind of thing in your world can live under its own gravity.


## 6. A Push: Add Impulse
---
*Tutorial 1's pressure plate, repurposed: step on the plate, and a stack of crates is blasted aside.*

> [!info]- Use What You Have Learned
> This chapter is light on instructions on purpose — you've built every piece of it before.
>
> 1. Bring your pressure plate from Tutorial 1 into a level with a simulated crate stack (or rebuild the plate fresh — overlap volume, [[OnComponentBeginOverlap]]).
> 2. Where Tutorial 1 opened a door, instead drag in a reference to a crate and call **`Add Impulse`** on its Static Mesh component [?].
> 3. The `Impulse` input is a Vector — direction times strength. Try `X=0, Y=0, Z=50000` [?] for a launch straight up. If the crate doesn't move, the impulse is too small for its mass: a 500 kg crate needs a much bigger shove than a 5 kg one.
>
> [image: Blueprint graph: overlap event into Add Impulse node with a vector literal]
>
> > [!tip] Tip
> > `Add Impulse` has a `Vel Change` checkbox [?]. Checked, it ignores mass — every object gets the same change in velocity, heavy or light. Handy when you want a uniform launch regardless of weight.
>
> Stack ten crates, put the plate at their base, and step on it.
>
> [image: crates mid-explosion upward from the stack]


## What you can now build

- A stack of crates, books, or debris the player can topple and shove through
- Objects that drop, tumble, and settle when something releases them — a shelf giving way, things spilling from a container
- Per-object weight: cardboard-light props next to immovable-heavy ones, each responding honestly to the player
- A bouncing ball — and surfaces that are bouncy or icy by material
- Moon levels, dream-slow falls, zero-g props — gravity tuned per object, per world, and per character independently
- A trigger that launches, scatters, or knocks over physics objects with a single node

## Example deviations you are ready for

- Swap the crates for any Fab prop — add simple collision in the Static Mesh Editor first, then `Simulate Physics` works the same
- A sphere with `Add Impulse` aimed horizontally is bowling — roll something into a group of objects and let physics scatter them
- A trapdoor floor: a platform whose `Simulate Physics` turns on from a trigger (`Set Simulate Physics` node [?]), dropping whatever stood on it
- Falling debris timed in sequence — combine with Tutorial 4's staggered events so objects drop one after another, not all at once
- A bouncy-castle room: `PM_Bouncy` applied to the floor instead of the objects
