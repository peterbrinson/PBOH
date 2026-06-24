---
cssclasses:
  - unreal-tutorial
---
*By Aaron Cheney*

## 0. Introduction
---

> [!info]- Learning Objectives
> - Have 2 additional characters in your level that you can possess
> - Have input bindings to swap between characters at runtime
> - Understand what `Level Blueprint`s are and why to use them

## 1. What Is a Level Blueprint?
---

> [!info]- What Is a Level Blueprint?
> A [[Level Blueprint]] is another tool for defining behavior specific to a particular level. It gives you something that other framework Blueprints can't: **map-specific behavior**.
>
> Imagine a game mode you want to reuse across multiple maps, but with specific things happening on one map independently of the game mode. Think interactables, destructible objects, or other per-map behavior. That's what `Level Blueprint`s are for.

## 2. Input Review
---

> [!info]- Input Review
> Unreal has a robust input system. We'll create new `Input Actions` for swapping between characters, then add them to our `Input Mapping Context`.
>
> This approach gives flexibility across platforms — you can add gamepad and mobile support with minimal extra work.
>
> ![[unrealTutorial_06_101.png]]

## 3. Level Setup
---

> [!info]- Level Setup
> Drag two additional characters of the type you want into the level directly.
>
> <span class="hint">The first character is spawned automatically by the `GameMode`. These two extra characters exist as part of the level itself.</span>

## 4. Level Blueprint Setup
---

> [!info]- Level Blueprint Setup
> Inside the `Level Blueprint`, set up the following logic to handle possession:
>
> ![[unrealTutorial_06_104.png]]
>
> Set up a variable to cache the original character so you can return to it. Do this in `BeginPlay`:
>
> ![[unrealTutorial_06_107.png]]

## 5. Summary
---

> [!info]- Summary
> - `Level Blueprint`s define map-specific behavior that game modes can't provide
> - New `Input Actions` drive the character-swapping behavior
> - The `Possess` node is the core mechanic — use it to jump between any pawns
>
> **Where this goes:** You're just controlling a pawn. That pawn can be anything — a car, a mountable machine gun, a surveillance camera. This is how VALORANT implements abilities like Sova's drone or Skye's dog.

## What you can now build

- A game where the player can switch between multiple characters at the press of a key
- Level-specific behavior that doesn't belong in the GameMode — map events, per-scene interactions
- Input bindings that trigger character or pawn swaps at runtime

## Example deviations you are ready for

- Possess a vehicle or object instead of a character — the Possess node works on any pawn
- Inhabit a stationary surveillance camera (a pawn with no movement component)
- A timed possession that returns control to the original character after N seconds
- Ability-style possession: press a key to enter a drone or creature, press again to return 
