---
publish: true
---
	
# UE Wiki — Index

A structured reference for Unreal Engine 5 concepts. Generated from official documentation using the LLM Wiki pattern. 


---

## Blueprint Nodes

- [[Actor Has Tag]] — checks if an actor's Tags array contains a specific name; lightweight filtering alternative to Cast To
- [[Branch]] — if/else flow control; routes execution based on a boolean condition
- [[Cast To]] — type-checks an object and gives access to its class-specific variables and functions
- [[Delay]] — pauses execution on the wire for N seconds, then continues; latent node
- [[DestroyActor]] — permanently removes an actor from the scene during gameplay
- [[For Each Loop]] — iterates over each element in an array, executing logic per element
- [[Gate]] — open/close/toggle valve for execution pulses; blocks or allows a stream of execution
- [[Get Actor Location]] — reads an actor's current position as a Vector
- [[Get Player Controller]] — returns a PlayerController by index (standalone) or from a PlayerState (target version)
- [[Get Player State]] — retrieves a player's PlayerState object by index
- [[Increment Int]] — adds 1 to an integer variable; counter convenience node
- [[Lerp]] — linear interpolation; blends between two values based on Alpha (0→1)
- [[MultiGate]] — routes each pulse to the next output sequentially or randomly; can loop or exhaust
- [[Open Level]] — loads a level by name, replacing the current one; used for restarts and transitions
- [[Print String]] — displays text on viewport and/or Output Log; primary debugging tool
- [[Sequence]] — flow control; fires multiple exec outputs in order from a single input
- [[Set Actor Location]]
- [[Spawn Actor from Class]] — creates a new actor instance at runtime; projectiles, enemies, pickups — moves an actor to a specified position; primary target for Timeline + Lerp output
- [[Set Relative Rotation]] — rotates a component relative to its parent; used for doors, hinged objects
- [[Set Timer by Event]] — starts a timer that fires a Custom Event delegate after a delay; by Event (visual) or by Function Name (string)
- [[Switch]] — multi-way routing based on a data value (Int, String, Name, or Enum); alternative to nested Branches
- [[Timeline]] — time-based animation node; outputs float/vector/color/event values along curves

## Events

- [[Custom Events]] — user-defined events in the Event Graph; required as delegates for Set Timer by Event
- [[Event Dispatchers]] — one-to-many broadcast system; sender calls, any number of listeners respond
- [[OnComponentBeginOverlap]] — fires when another actor enters a collision volume; primary trigger for proximity-based gameplay
- [[OnComponentEndOverlap]] — companion to BeginOverlap; fires when an actor leaves a collision volume
- [[OnComponentHit]] — fires on blocking physical collisions; provides impact point, force, and Hit Result data

## Components

- [[Components]] — reusable building blocks for Actors; Actor Component (logic) vs Scene Component (transform); creating custom components
- [[Collision Components]] — Box, Sphere, and Capsule collision volumes; shared settings, events, and debugging

## Characters

- [[MetaHuman]] — photorealistic digital human; plugin setup, reparenting to player character, retargeting animations, Mixamo workflow

## Gameplay Framework

- [[Character]] — Pawn subclass for humanoid movement; includes CharacterMovementComponent, SkeletalMesh, CapsuleComponent
- [[Controller]] — non-physical Actor that possesses a Pawn to control it; parent of PlayerController and AIController
- [[GameMode]] — the game's rule system; controls which Pawn, PlayerState, and Controller classes are used
- [[GameState]] — replicated companion to GameMode; holds game-wide data visible to all clients
- [[Pawn]] — physical representation of a player or AI entity; possessed by a Controller
- [[PlayerController]] — human player's Controller; handles input, owns HUD and camera
- [[Possess]] — transfers control of a Pawn to a Controller; core of character/vehicle swapping
- [[PlayerState]] — per-player data container; holds score, collectable count, and custom variables

## UI / HUD

- [[Add to Player Screen]] — makes an instantiated widget visible in the player's viewport
- [[Create Widget]] — instantiates a Widget Blueprint at runtime; first step before Add to Player Screen
- [[TextBlock]] — UMG text widget; requires Is Variable to be accessible from Blueprint code
- [[Widget Blueprint]] — specialized Blueprint for building UI with UMG; has Designer (visual) and Graph (logic) tabs

## Rendering & Materials

*(empty — first ingest pending)*

## Landscapes & Environment

*(empty — first ingest pending)*

## Particles & Effects

*(empty — first ingest pending)*

## Animation

- [[Animation Blueprint]] — specialized Blueprint with Event Graph, Anim Graph, and State Machines; controls how a Skeletal Mesh animates
- [[Animation Montage]] — wraps Animation Sequences into a playable unit with Blueprint control; completion callbacks, sections, slots, child montages
- [[Play Animation]] — plays an animation sequence on a Skeletal Mesh; direct control without Animation Blueprint

## Audio

- [[Sound]] — Play Sound at Location (one-shot) vs. Ambient Sound (persistent spatial); choosing between them

## Blueprint Concepts

- [[Blueprint Instances]] — class vs. instance; Instance Editable, Expose on Spawn, per-instance configuration
- [[Variables]] — creating, types (Boolean, Integer, Float, String, Vector, Object), Get/Set, arrays, variable settings
- [[Construction Script]] — setup graph that runs at spawn and when editing; configures components before gameplay begins
- [[Editor Workflows]] — Split Struct Pin, Promote to Variable, Comment Boxes, and other editor actions
- [[Blueprint Interface]] — defines function signatures shared across unrelated Blueprints; call without casting
- [[Flow Control]] — collecting all flow control nodes: Branch, Sequence, For Each Loop, Switch, Gate, MultiGate (standalone pages) + Flip Flop, DoOnce, DoN, ForLoop, WhileLoop (detailed on this page)
- [[Functions]] — reusable logic blocks with inputs, return values, callable from other Blueprints; vs Custom Events comparison
- [[Getting References]] — how to get, pass, and store references to objects across Blueprints
- [[Transformation]] — Get/Set Actor Location, Set Relative Rotation; collecting transform nodes as tutorials introduce them

## Physics & Traces

- [[Traces]] — line/shape raycasts for detecting what the player is looking at, line of sight, hitscan; Break Hit Result fields

## Collision Settings

*(merged into [[Collision Components]])*

## Level Architecture

- [[Level Blueprint]] — per-map scripting; references placed actors, handles map-specific behavior

## Input & Interaction

- [[Enhanced Input]] — UE5 input system: Input Actions (what the player can do), Input Mapping Contexts (which keys trigger what), modifiers, triggers
- [[Input Control]] — turn player input on/off (all-at-once or selective): Disable Input / Enable Input vs. Set Ignore Look/Move Input

## Recording & Output

*(empty — first ingest pending)*

