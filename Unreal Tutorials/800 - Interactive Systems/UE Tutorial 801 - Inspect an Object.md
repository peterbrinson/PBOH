---
cssclasses:
  - unreal-tutorial
---
*By Yibei He & Peter Brinson*

## 0. Introduction
---

> [!info]- A. Outcome
> Build a readable item system — the foundational mechanic of the [[SPR 1 - The Investigator, World as Evidence|Investigator]] role. A line trace detects nearby notes; pressing E opens a close-up widget and freezes player input until the note is dismissed.

> [!info]- B. Chapters
> - [[#1. Create Inspection Logic]]
> - [[#2. Make a Note]]
> - [[#3. Place the Object in the UI]]
> - [[#4. Put It All Together]]

> [!info]- C. Learning Objectives
> - Create a `Blueprint Interface` (`BPI_Evidence`) with an `Examine` function
> - Add a line trace to `BP_FirstPersonCharacter` that detects readable objects by distance
> - Build a `BP_Note_1` actor with a mesh and custom texture material
> - Create a `Note_Widget` UI for close-up reading
> - Disable and restore player look and movement input while the note is open
>
> > [!hint] Hold On
> > This tutorial builds its own interaction system from scratch. It is an alternative to the one in [[UE Tutorial 821 - Base Interactive System (WIP)|Tutorial 821]], not a continuation. Both bind the **E** key, so do not combine them in the same project.

## 1. Create Inspection Logic
---

> [!info]- A. Create a Blueprint Interface
> Right-click in the Content Browser and create a `Blueprint Interface`. Rename it `BPI_Evidence`.
>
> Double-click to open it. In the My Blueprint panel, add a function and rename it `Examine`.
>
> ![[unrealTutorial_12_101.png]]
> ![[unrealTutorial_12_104.png]]
>
> > [!question] Ask your LLM why
> > In the Unreal tutorial I'm following, I just made something called a Blueprint Interface with a function on it. What is an interface, exactly, and what is it doing for me here?

> [!info]- B. Add a Line Trace
> Open `BP_FirstPersonCharacter`.  You'll find existing blueprint script in the Event Graph.  Above those nodes, add an `E Key` node by searching `key` and scrolling until you find `E`.
> Drag to connect it to a `Line Trace By Channel` node.
>
> ![[unrealTutorial_12_107.png]]
> ![[unrealTutorial_12_110.png]]

> [!info]- C. Get Camera Location and Rotation
> Drag `FirstPersonCamera` into the graph. Get its `World Locations`.  Then `World Location` wires to `Forward Vector`.
> ![[unrealTutorial_12_113.png]]

> [!info]- D. Add a Distance Parameter
> Drag from `Get Forward Vector` and search `Multiply` under Operators. 
>
> On the second input pin of the `Multiply` node, right-click and choose `To Float (single-precision)`, then right-click again to `Promote to Variable`. Name the variable - on the left under VARIABLES - `DistanceToRead`.
>
> ![[unrealTutorial_12_116.png]]
>
> ![[unrealTutorial_12_119.png]]
>
> `DistanceToRead` will determine how far away the player can interact with a readable object. Set the default value to `200.0`.
>
> ![[unrealTutorial_12_122.png]]
>
> ![[unrealTutorial_12_128.png]] 
> ![[unrealTutorial_12_129.png]]

> [!info]- E. Finish the Line Trace
> Drag from `Multiply` and choose `Add` (also under Operator) to connect it to one of `Add`'s pins.
> Wire `Get World Location` to the other `Add` pin.
>
> For the output of `Add`,  wire it to `End` of `Line Trace By Channel`.
>
> Connect `Get World Location` again - to `Start` of `Line Trace By Channel`.
>
> ![[unrealTutorial_12_131.png]]
>
> > [!question] Ask your LLM why
> > In the Unreal tutorial I'm following, I'm using a line trace from the camera to detect what the player is looking at. Why use a line trace instead of putting an overlap volume on each inspectable object?

> [!info]- F. Add Interaction to the Line Trace
> On the right side of `Line Trace By Channel`, wire `Return Value` to a `Branch` node. 
> Drag from `Out Hit` and search for `Break Hit Result` node.
>
> ![[unrealTutorial_12_134.png]]
>
> Expand `Break Hit Result`.
> ![[unrealTutorial_12_137.png]]
> Drag from `Hit Actor` of `Break Hit Result`, and add the `Examine` node function created in Step 1A.  
> ![[unrealTutorial_12_140.png]]
>
> Notice that `Examine` is wired to `Branch`'s `True` pin.
> ![[unrealTutorial_12_143.png]]

> [!info]- G. Final Blueprint Structure
> ![[unrealTutorial_12_146.png]]
>
> <span class="action">Compile</span>

## 2. Make a Note
---

> [!info]- A. Create Note Blueprint
> In the Content Browser, create a `Blueprint Class`, choose `Actor`, and rename it `BP_Note_1`.
>
> ![[unrealTutorial_12_149.png]]
> ![[unrealTutorial_12_152.png]]

> [!info]- B. Add the Note Mesh
> Open the Blueprint. Add a `Cube` component.  Name it `Note`. 
>
> ![[unrealTutorial_12_155.png]]
> ![[unrealTutorial_12_158.png]]
>
> In the Viewport, adjust the scale — make it thin on the Z axis so it looks like a flat piece of paper.

> [!info]- C. Add Note Material
> Right-click this image to download.  Drag to your Content Browser to make a Texture. 
> ![[unrealTutorial_12_160.png|200]]
> Right-click it and choose `Create Material`. 
> ![[unrealTutorial_12_161.png]]
> ![[unrealTutorial_12_164.png]]
> ![[unrealTutorial_12_167.png]]
>
> Set the `Cube` mesh's material to this new material.
> ![[unrealTutorial_12_170.png]]
>
> You can now place the note blueprint - `BP_Note_1` - in your scene.  Leave it where you want the player to find it.  
> ![[unrealTutorial_12_173.png]]

> [!info]- D. Add Evidence Interface to the Note
> In `BP_Note_1`, go to Class Settings. Under Implemented Interfaces, add the `BPI_Evidence` interface.
>
> ![[unrealTutorial_12_176.png]]
> ![[unrealTutorial_12_179.png]]
>
> <span class="action">Compile and Save</span>

## 3. Place the Object in the UI
---

> [!info]- A. Create a Widget Blueprint
> In the Content Browser, create a `Widget Blueprint` → `User Widget`. 
>
> ![[unrealTutorial_12_182.png]]
> ![[unrealTutorial_12_185.png]]
> Name it `Note_Widget`.
>
> Double-click to open it. Drag a `Canvas Panel` into the UI area.
>
> ![[unrealTutorial_12_188.png]]

> [!info]- B. Set the Note Image
> Drag an `Image` widget inside the Canvas Panel. 
> Assuming you used the texture provided above, size it to 728x895.  Position it. 
>
> ![[unrealTutorial_12_191.png]]
> ![[unrealTutorial_12_194.png]]
>
> At the top of the Details panel, set the `Anchors` to center.
>
> Assign your texture under Brush → Image.  (The file provided above is named `unrealTutorial_12_160` although you might have renamed it previously).
>
> ![[unrealTutorial_12_197.png]]
> ![[unrealTutorial_12_200.png]]
>
> Optionally, add a `Background Blur` widget size to fill the screen. Set `Blur Strength` to `10` or so.
>
> ![[unrealTutorial_12_203.png]]
>
> <span class="save">Save All</span>

## 4. Put It All Together
---

> [!info]- A. Add Widget to the Note
> Go back to `BP_Note_1`. 
> In the Event Graph, right-click and search for `Examine` in order to add an `Event Examine` node. 
>
> ![[unrealTutorial_12_206.png]]
> ![[unrealTutorial_12_209.png]]
>
> Wire it to a `Flip Flop` node.
>
> From the `A` output of Flip Flop, drag out a `Create Widget` node (it will be labeled "Construct None") — set `Widget Class` to `Note_Widget` and the node will rename to `Create Note Widget Widget`.  (Double "Widget" is correct).
>
> From there, add an `Add to Viewport`.
> Check all your wires.
> ![[unrealTutorial_12_212.png]]
>
> > [!question] Ask your LLM why
> > In the Unreal tutorial I'm following, I just used a node called Flip Flop to alternate between two paths each time an Event fires. What is Flip Flop, and how does it work?

> [!info]- B. Disable Player Control While Reading
> Right-click and find `Get Player Controller`. 
> Drag from `Get Player Controller` in order to add `Set Ignore Look Input` and `Set Ignore Move Input`. 
> Check `true` the boolean parameters found in `New Look Input` and `New Move Input`.
> Connect all wires:
> ![[unrealTutorial_12_215.png]]
>
> From the `B` output of Flip Flop, drag out and search for `Remove from Parent`.  You might need to uncheck `Context Sensitive`.
>
> Add `Set Ignore Look Input` and `Set Ignore Move Input` again but their boolean parameters should be `false`.
> Notice multiple blue wires coming from two `Return Value` outs.
> ![[unrealTutorial_12_218.png]]
>
> > [!question] Ask your LLM why
> > In the Unreal tutorial I'm following, I just built a Blueprint script: pressing E does a line trace from the camera, calls a function through a Blueprint Interface on the hit actor, and that actor uses a Flip Flop to show/hide a widget and lock/unlock player input. Can you walk me through how this all connects, step by step?
> >
> > *Tip: right-click the above screenshot, save on your computer, and paste into the chat so your LLM can see your actual Blueprint.*
>
> Test:  approach the note, look at it, and press E.  
>
> ![[unrealTutorial_12_221.png]]

## What you can now build

- A readable note in the world — E key opens it full-screen, E closes it; player cannot move or look while reading
- A Blueprint Interface for interaction, letting any actor define its own response to the E key
- The foundational Investigator mechanic: line trace → E key → actor decides what happens — evidence items, clues, environmental storytelling

## Example deviations you are ready for

- Audio log — replace `Create Widget` with `Play Sound 2D`. `Flip Flop` gives stop/start for free.
- Photograph or map — identical functionality to this tutorial; swap the texture in `Note_Widget`.
- Multi-page diary — add Next/Previous buttons that cycle through a texture array.
- Inscription — use a `TextBlock` widget instead of an Image widget.
- Light switch — actor toggles a `Point Light`'s visibility; no widget or input lock needed.
- Door or drawer — `Examine` fires a [[Timeline]] that rotates the mesh.
- Locked container — branch on a bool stored on the character (`HasFoundKey`); locked path shows a widget, unlocked path opens.
