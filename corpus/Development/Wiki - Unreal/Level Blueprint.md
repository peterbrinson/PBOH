---
publish: true
---


A specialized Blueprint that acts as a level-wide event graph. Every level gets one by default — you cannot create additional Level Blueprints, and you cannot create them from scratch. It scripts behavior that belongs to a specific map rather than to a reusable class.

![[level_blueprint_editor.png]]

## Use When

- You need logic tied to a specific level that shouldn't travel with a [[GameMode]] or actor class
- You want to reference specific actor instances placed in the level (e.g., "this door," "that light")
- You're scripting level streaming, [[Sequence|Sequencer]] cutscenes, or one-off map events
- You need per-map behavior that runs independently of the game mode — interactables, destructibles, map-specific triggers

## How It Works

### Opening

**Blueprints** button in the Level Editor toolbar → **Open Level Blueprint**.

![[toolbar_level_editor.png]]

The editor looks like a standard Blueprint Editor — same My Blueprint panel (Graphs, Functions, Macros, Variables, Event Dispatchers), same Details panel — but no Components tab or Viewport. A "LEVEL BLUEPRINT" watermark marks the graph. The Blueprints dropdown also shows the current **GameMode** and whether a **World Override** is set.

### Referencing Actors

The Level Blueprint's key advantage: it can hold direct references to actors placed in the level. Two ways to create one:

**Right-click method:**
1. Select the actor in the Level Viewport or World Outliner (select multiple to batch-create references)
2. Open the Level Blueprint
3. Right-click in the graph → **Create a Reference to [ActorName]** (or **Create References to N selected Actors** if multiple are selected)

![[add_reference_to.png]]

**Drag-and-drop method:**
Drag an actor from the **World Outliner** directly into the Level Blueprint graph.

![[add_reference_drag_drop.png]]

Either way produces a reference node showing the actor's name and "from Persistent Level":

![[actor_reference.png]]

When the output type already matches a Target pin, you can skip the reference node entirely — wire the output directly. For example, **Get Player Pawn** returns a Pawn reference that connects straight to **Set Actor Rotation**'s Target pin:

![[target_pin_noref.png]]

### Adding Events for Actors

You can bind events to specific placed actors — not the class, but that particular instance. Two ways:

**From the viewport:** Right-click the actor in the level → **Level Blueprint** submenu → choose the event.

![[add_event_details_tab.png]]

**From the graph:** With the actor selected, right-click in the Level Blueprint graph → **Add Event for [ActorName]**. Available event categories include Character, Collision, Game (Damage, Destroyed, End Play), and Input.

![[add_event_for_actor.png]]

### Default Level Blueprint Class

Each project can specify a default Level Blueprint class in `DefaultGame.ini`. All new maps will use that class, allowing project-wide functionality in every Level Blueprint.

## Common Patterns

**Pawn possession ([[UE Tutorial 201 - Pawn Possession (WIP)|Tutorial 6]] pattern):**
Place additional [[Character]] actors in the level. In the Level Blueprint, cache the original character at **Begin Play**, then use input events to call **Possess** on different pawns. The Level Blueprint is the right place for this because the specific characters to possess are level-placed instances — they don't exist in every map.

**Level Blueprint vs [[GameMode]]:**
GameMode defines rules that apply across maps (spawn classes, player limits, match flow). Level Blueprint defines behavior for one specific map. If you want a rule on every map, put it in GameMode. If you want something unique to this map, put it in the Level Blueprint.

## Related

- [[GameMode]] — reusable cross-map rules; Level Blueprint handles the map-specific complement
- [[Pawn]] — Level Blueprint can reference placed pawns for possession logic
- [[Getting References]] — Level Blueprint provides direct references to placed actors, a pattern not available in class Blueprints
- [[Enhanced Input]] — Input Actions and Mapping Contexts drive the input events used in Level Blueprint logic
- [[Custom Events]] — often used inside Level Blueprints to organize map-specific logic

## Source

- [Level Blueprint in Unreal Engine | UE 5.7](https://dev.epicgames.com/documentation/unreal-engine/level-blueprint-in-unreal-engine?application_version=5.7) — clipped 2026-04-11
- [[UE Tutorial 201 - Pawn Possession (WIP)|Tutorial 6]] — Level Blueprint used for character-swapping logic

