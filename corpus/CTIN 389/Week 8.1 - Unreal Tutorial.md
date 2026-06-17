---
cssclasses: [site-389]
---

# Week 8.1 — Unreal Tutorial

*A tour of the Unreal Editor and Blueprints — orienting Unity-trained designers in a second engine.*

This session is a hands-on orientation to Unreal Engine for the upcoming Unreal Tutorial project: navigating the editor (with constant reference to its Unity equivalents), an introduction to Blueprints visual scripting, and how to package a build to playtest in class.

<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>

## Navigating the Unreal Editor

Unreal organizes a game much like Unity does, with different names:

| Unreal | Unity equivalent |
| --- | --- |
| Project | Project |
| Levels | Scenes |
| Regions | Async Scenes |
| Actors | GameObjects |
| Components | Components |

To create a new project, select the **Games** category and choose the template that best fits your project. Make sure Project Defaults are set to **Blueprint** and target the **Desktop** platform. Pick a quality preset (maximum or scalable, based on your hardware) and a template — First Person, Third Person, and so on.

![[week8.1-new-unreal-project.png]]
*The Unreal Project Browser — choose Games, then a template; set defaults to Blueprint and Desktop.*


**Viewport.** A familiar window that renders a free perspective of the level. In Unreal, the viewport is both the editor view *and* the game view — this is where the game happens when you play in editor.

![[week8.1-unreal-editor.png]]
*The Unreal Editor — viewport in the center, Outliner and Details on the right.*


Navigating the viewport: **right-click** to look around, **WASD** or arrow keys to fly, **scroll wheel** to truck in and out, **F** to focus on a selected object.

**Outliner.** Analogous to Unity's Hierarchy (though Unreal is much less robust in its hierarchical relationships). Here you'll find all the actors in the level, visible and invisible — listed alphabetically, organizable into folders.


**Search.** Unreal is very focused on search as an organizing principle, with robust search tools you'll use extensively.

**Details.** Equivalent to Unity's Inspector — see the components of the selected actor and modify their public variables.


**Toolbar.** Prominently displays the most useful editor functions: saving, source control, and playing the level in editor.

**Content Drawer.** Equivalent to Unity's Project window — all your game assets as organized in the file structure. (Search is useful here too.)

![[week8.1-content-drawer.png]]
*The Content Drawer — Unreal's Project window.*


In the top-right of the viewport are the familiar **transform tools** (translate, rotate, scale), **snapping** controls (toggle positional/rotational grid snapping and adjust grid size), and a **view speed** control (effective speed is the increment × the scalar).

**Place Actors** (Window → Place Actors) is a toolbox of common actors you can drag straight into the viewport.


One important difference from Unity: Unreal treats the player character specially. The player character is a special type of actor that **doesn't get placed in the editor**. Instead, every level should have a **PlayerStart** actor as the spawn point. Don't place a player character into the level, or Unreal will get confused.

<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>

## Blueprints

Blueprints are node-based programming laid out visually like a flowchart. Nodes are connected by wires (or "noodles"). You can do a lot through Blueprint scripts on characters and objects: pick up and interact with items; trigger events, animations, and state changes; control platforms, elevators, and enemies; spawn and destroy objects. They're very good for scripting actors for level and quest design, and they're tightly integrated with the engine.

Create a new Blueprint Class from the Blueprints menu (or convert a selected static mesh into one). It opens in a new window: the **Viewport** tab is where you see the actor and add components; the **Event Graph** tab is where you author logic to give it behavior.

![[week8.1-blueprint-editor.png]]
*The Blueprint editor — Viewport tab for components, Event Graph for logic.*


**Variable types** you'll use as a beginner:

| Type | What it holds |
| --- | --- |
| Bool | true / false |
| Integer | signed 32-bit whole number |
| Float | decimal |
| String | text that can be modified |
| Text | immutable, localized (international) text |
| Vector | 3 floats — normally XYZ or RGB |
| Rotator | 3 floats — roll (X), pitch (Y), yaw (Z) |
| Transform | 3D position, rotation, and scale |
| Object | any object (actor, light, mesh, sound, etc.) |

![[week8.1-blueprint-variable-types.png]]
*The beginner Blueprint variable types.*


**The execution wire** — the white noodle — dictates the sequence of execution through the Blueprint. Command nodes (which perform an action) and flow-control nodes must be connected to it to run. Some query nodes (which return values) *don't* connect to it; their values are pulled in when a connected node executes.

**Event nodes** trigger execution:

- **BeginPlay** happens once, when the actor is instantiated.
- **Tick** happens every frame the actor exists.
- **ActorBeginOverlap** happens whenever the actor overlaps a collision volume.

![[week8.1-blueprint-events.png]]
*The core event nodes — BeginPlay, Tick, and ActorBeginOverlap.*


**Flow control** nodes can split the execution wire, but these are never parallel threads — execution always follows one wire at a time, in strict sequence.

**Debugging.** The **Print String** node prints a string to the top-left of the play screen — useful for debugging. You can also set **breakpoints** to pause execution at a node and inspect program state, or simply watch the execution flow on the Blueprint while the game runs (a second screen helps).

![[week8.1-print-string.png]]
*Print String, fired by an overlap trigger — a quick debug readout.*


**Variables** can be open (public) or closed (private). Closed variables are good for internal state; open variables communicate info between Blueprints.

**Triggering on proximity.** Give the Blueprint actor a Collision component and use **casting** to detect the player. (In the Third Person template, the player actor is of type `ThirdPersonCharacter`.)

**Animating an actor.** Use a **Timeline** to drive a transformation (like a change in position). A Timeline defines an animation/tween curve for some value; its Update wire executes rapidly for the length of the Timeline, smoothly translating the object over time.

![[week8.1-timeline.png]]
*A Timeline drives smooth, curve-based animation from Blueprints.*


<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>

## Build & Export

You can build an executable with default settings by clicking the **Platforms** button on the toolbar, selecting your platform, and packaging the project.

![[week8.1-build-platforms.png]]
*Package a build from the Platforms menu on the toolbar.*


Always make a build to playtest in class — playtesting on SCA's virtual workstations doesn't work very well. Give yourself time: if you use any advanced features, a build can take a while to complete.

## Assignment — Unreal Tutorial

**Due:** Next Tuesday
**Team:** Solo
**Perspective:** 3D
**Engine:** Unreal Engine

Follow along with the first 5 videos in Katie Chironis's Unreal Engine tutorial series. Then take the suggestion to pair switches with doors to create a maze — or do something creative with what you've learned.

Submit a zipped Windows build to the Google Drive and be prepared to playtest it in class on Tuesday.

## See You Next Time

Finish *Papo y Yo* by Thursday — we'll talk about it in class.

## Related

- [[Mazes — Navigation and Traversal]]
- [[Keys and Doors]]
- [[Game - Papo y Yo]]
- [[Week 8.2 - Subtext and Theme]]
- [[Week 9.1 - Unreal Interaction Project]]
