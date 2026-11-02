---
type: Tutorial
cssclasses:
  - unreal-tutorial
---
<span style="color:#d9a8b3; font-size:1.4rem">*By Aaron Cheney and George Zou*</span>

## 0. Introduction
---

> [!info]- Learning Objectives
> - Have 2 additional characters in your level that you can possess
> - Have input bindings to swap between characters at runtime
> - Understand what `Level Blueprint`s are and why to use them

> [!info]- Project Setup
> This tutorial starts from a project made with the **First Person** template (**Games → First Person**, **Blueprint**). The screenshots are from Unreal Engine 5.8. If your project came from another template, your character and `Input Mapping Context` names will differ from the ones shown here.

## 1. What Is a Level Blueprint?
---

> [!info]- What Is a Level Blueprint?
> A [[Level Blueprint]] is another tool for defining behavior specific to a particular level. It gives you something that other framework Blueprints can't: **map-specific behavior**.
>
> Imagine a game mode you want to reuse across multiple maps, but with specific things happening on one map independently of the game mode. Think interactables, destructible objects, or other per-map behavior. That's what `Level Blueprint`s are for.

## 2. Input Review
---

> [!info]- Input Review
> Unreal has a robust input system, [[Enhanced Input]]. We'll create new `Input Actions` for swapping between characters, then add them to our `Input Mapping Context`.
>
> This approach gives flexibility across platforms — you can add gamepad and mobile support with minimal extra work.
>
> In the Content Browser, open **Input → Actions**. Right-click, choose **Input → Input Action**, and name it `IA_PossessOriginal`. Make two more the same way: `IA_PossessCharacter1` and `IA_PossessCharacter2`. Open each one and check that `Value Type` is `Digital (bool)`, which is the default.
>
> ![[unrealTutorial_06_101.webp]]
>
> Now open `IMC_Default` in the **Input** folder. The First Person template has two mapping contexts, and `IMC_Default` is the one with movement and jumping. Next to **Mappings**, click **+** once for each new action and pick the action in the new row. Expand each row and bind a key: `0` for `IA_PossessOriginal`, `1` for `IA_PossessCharacter1`, and `2` for `IA_PossessCharacter2`. The gamepad bindings shown here (D-pad Down, Left, Right) are optional; add them with the **+** next to each action.
>
> ![[unrealTutorial_06_104.jpg]]
>
> <span class="save">Save All</span>

## 3. Level Setup
---

> [!info]- Level Setup
> Drag two additional characters of the type you want into the level directly. In the First Person template, drag `BP_FirstPersonCharacter` in twice from **FirstPerson → Blueprints** in the Content Browser. The Outliner names them `BP_FirstPersonCharacter` and `BP_FirstPersonCharacter2`. Place them where the player can see them from the start.
>
> ![[unrealTutorial_06_107.webp]]
>
> <span class="hint">The first character is spawned automatically by the `GameMode`. These two extra characters exist as part of the level itself.</span>

## 4. Level Blueprint Setup
---

> [!info]- Level Blueprint Setup
> In the toolbar, click the **Blueprints** button and choose **Open Level Blueprint**.
>
>
> Set up a [[Variables|variable]] to cache the original character so you can return to it. Do this in `BeginPlay`: add a `Get Player Pawn` node, drag off its **Return Value**, and choose **Promote to Variable**. Rename the variable `OriginalCharacter`. Its type is [[Pawn]] (Object Reference), because that is what `Get Player Pawn` returns. Connect `Event BeginPlay` to the new **SET** node.
>
> ![[unrealTutorial_06_113.webp]]
>
> Next, the `Level Blueprint` needs references to the two characters you placed (see [[Getting References]]). In the Outliner, Ctrl-click to select both characters. Back in the `Level Blueprint`, right-click an empty spot in the graph and choose **Create References to 2 selected Actors**. You get one reference node per character.
>
> ![[unrealTutorial_06_116.webp]]
>
> Inside the `Level Blueprint`, set up the following logic to handle possession:
>
> - Right-click and search for each action by name (`IA_PossessOriginal`, `IA_PossessCharacter1`, `IA_PossessCharacter2`) to add its event node.
> - Use each event's **Started** pin, which fires once per key press. **Triggered** fires every frame the key is held, which would call `Possess` over and over.
> - Add one [[Get Player Controller]] node. Its **Return Value** connects to the **Target** pin of all three [[Possess]] nodes.
> - Wire each **Started** pin into its own `Possess` node.
> - Connect each **In Pawn** pin: `IA_PossessOriginal` gets the `OriginalCharacter` variable, `IA_PossessCharacter1` gets the `BP_FirstPersonCharacter` reference, and `IA_PossessCharacter2` gets `BP_FirstPersonCharacter2`.
>
> ![[unrealTutorial_06_119.webp]]
>
> <span class="action">Compile</span> <span class="save">Save All</span>
>
> Test it. Press **Play**, then press `1` and `2` to jump into the other characters and `0` to return to the one you started in.
>


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
