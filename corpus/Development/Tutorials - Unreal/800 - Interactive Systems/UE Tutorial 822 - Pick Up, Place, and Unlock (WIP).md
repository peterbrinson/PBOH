---
type: Tutorial
title: "UE Tutorial 822 - Pick Up, Place, and Unlock"
cssclasses: unreal-tutorial
---


<span style="color:#d9a8b3; font-size:1.4rem">*By George Zou*</span>

> *Disclaimer: this is a draft. Screenshots and GIFs are marked as placeholders and have not been recorded yet. You are welcome to ask Peter or George any questions.*

## 0. Introduction

Now that we have learned how to build a basic interactable, let's see if we can build a more complex puzzle using it. Hopefully, it can be helpful to making an Entrant game. 

Here's the idea of the puzzle we'll build in this tutorial: 
A door is locked. Two colored boxes sit in the room, and two colored pads sit on the floor. Player needs to put the corresponding colored box onto the colored pad to unlock the door. If the player removes a box from a pad, the door closes again. 

[🎬 GIF: Outcome. The player looks at the red box (outline and "E" appear), picks it up, carries it to the red pad, snaps it on. Repeats with blue. The door slides open.]

**Learning Objectives:**
- Highlight whatever the player is looking at with an outline (Custom Depth and a post-process material)
- Create child Blueprints that inherit hover, UI, and interaction from `BP_Interactable_Base`
- Carry a physics object in front of the camera with a **Physics Handle**, the way Portal does
- Snap a carried object onto a pad, and take it back, with **Attach Component To Component**
- Match objects to pads with an **Enumeration** and color them in the **Construction Script**
- Open a door when every pad is solved, using an **Event Dispatcher** and a **Timeline**

---

## Chapter A: Prepare the 821 System

### A0. Check the Component Hierarchy

Open `BP_Interactable_Base`. In **Components**, make sure `InteractRadius` and the tip widget are both children of `Mesh_Interactable`. If either is attached to `DefaultSceneRoot`, drag it onto the mesh.

[📷 SCREENSHOT: Components panel of BP_Interactable_Base: DefaultSceneRoot > Mesh_Interactable > InteractRadius, Widget.]

<span class="hint">The box you build later simulates physics. A physics object moves away from the actor's root, and only the components parented under it come along. If the radius stays behind, the box stops being interactable once you carry it somewhere.</span>

### A1. Count Overlaps Instead of Toggling

In 821, entering any interact radius turns the trace on, and leaving any radius turns it off. That works with one interactable. In this tutorial the boxes and pads sit close together, so the player is often inside two radii at once. Step out of one and the trace stops, even though you are still standing next to the other.

The fix is to count how many radii the player is inside.

In **InteractionComponent**, add an **Integer** variable named `OverlapCount`.

In the **On Interactable Overlap** event, replace the existing logic with:
- **Branch** on `bIsOverlapped`
- **True:** set `OverlapCount` to `OverlapCount + 1`
- **False:** set `OverlapCount` to **Max** of (`OverlapCount - 1`, `0`)
- Both paths continue into one **Draw Trace** call. Plug `OverlapCount > 0` into `bIsDrawTrace`.

[📷 SCREENSHOT: On Interactable Overlap with the counter: Branch, two Sets, Max, Greater (>), Draw Trace.]

<span class="hint">The **Max** with `0` is a safety net. If an End Overlap ever fires without a matching Begin Overlap, the count can't go negative.</span>

### A2. Show "E" in the Hover Tip

Open `WB_InteractionTip`. Inside the Canvas Panel, add a **Text** widget. Set its text to `E`, size around `36`, and center it on the image from 821. You can delete the image if you prefer just the letter.

To keep the letter readable against any background, open **Details → Font → Outline Settings** and set **Outline Size** to `2`.

[📷 SCREENSHOT: WB_InteractionTip Designer view with the "E" text selected and its Details showing.]

<span class="save">Save All</span>

### A3. Create the Outline Material

The outline is a post-process effect. Any mesh that has **Render Custom Depth** turned on gets drawn into a hidden buffer. A post-process material finds the edges of that buffer and paints a line around them.

First, check **Project Settings → Rendering → Postprocessing → Custom Depth-Stencil Pass**. It should be `Enabled`.

[📷 SCREENSHOT: Project Settings with Custom Depth-Stencil Pass highlighted.]

Right-click in the Content Browser, create a **Material**, and name it `M_PP_Outline`. Open it. In **Details**, set **Material Domain** to `Post Process`.

[📷 SCREENSHOT: M_PP_Outline Details panel, Material Domain set to Post Process.]

Now build the edge detection. For each pixel, the material asks two questions. Is this pixel outside the object? Is a neighboring pixel inside it? If both answers are yes, the pixel is on the outline.

1. Add a **ScreenPosition** node. Its `ViewportUV` output is the current pixel.
2. Add a **ViewSize** node and **Divide** `1` by it. This gives the size of one pixel. **Multiply** that by a **Scalar Parameter** named `Thickness` (default `2`).
3. Create four **Constant2Vector** nodes: `(1, 0)`, `(-1, 0)`, `(0, 1)`, `(0, -1)`. **Multiply** each by the result of step 2, then **Add** each to `ViewportUV`. These are the four neighboring pixels.
4. Add five **SceneTexture** nodes and set each one's **Scene Texture Id** to `CustomDepth`. Wire `ViewportUV` into the first one's `UVs`. Wire the four neighbors from step 3 into the other four.
5. Take the **R** output of the four neighbor nodes and combine them with three **Min** nodes into one value. This is the nearest depth around the pixel.
6. Add two **If** nodes, each with `B = 5000`:
   - The first gets `A` = the nearest neighbor depth from step 5, with `A < B` set to `1` and the other two outputs set to `0`. It answers "is a neighbor inside an object?"
   - The second gets `A` = the center pixel's depth (the first SceneTexture's **R**), with `A > B` and `A == B` set to `1` and `A < B` set to `0`. It answers "is this pixel outside an object?"
7. **Multiply** the two **If** results. The product is `1` on the outline and `0` everywhere else.
8. Add one more **SceneTexture** node set to `PostProcessInput0`. This is the normal rendered image.
9. **Lerp** with `A` = `PostProcessInput0` **Color**, `B` = a **Vector Parameter** named `OutlineColor` (white, or any color you like), and **Alpha** = the result of step 7. Wire the Lerp into **Emissive Color**.

[📷 SCREENSHOT: Full M_PP_Outline graph, left to right: neighbors, depth samples, Min chain, If nodes, Lerp.]

<span class="hint">Pixels with nothing drawn into Custom Depth report a huge depth value, which is why `5000` (50 meters) works as the "inside or outside" threshold. If Unreal complains about mixing float3 and float4, add a **Component Mask** (R, G, B) after each color before the Lerp.</span>

<span class="save">Save All</span>

### A4. Turn on the Outline

Drag a **Post Process Volume** into the level. In Details:
- Check **Infinite Extent (Unbound)** so it affects the whole level.
- Under **Rendering Features → Post Process Materials**, click **+**, choose **Asset Reference**, and pick `M_PP_Outline`.

[📷 SCREENSHOT: Post Process Volume Details with M_PP_Outline in the Post Process Materials array.]

Back in `BP_Interactable_Base`, find the `On Hovered` and `On UnHovered` events from 821 B1. After the widget show/hide logic, drag in `Mesh_Interactable` and add **Set Render Custom Depth**. Check the box in `On Hovered` and leave it unchecked in `On UnHovered`.

[📷 SCREENSHOT: On Hovered / On UnHovered with Set Render Custom Depth added.]

Test it. Look at your 821 cube: the outline and the "E" should appear together and disappear together.

[🎬 GIF: Looking at the 821 cube and away from it. Outline and "E" toggle together.]

<span class="hint">Because this lives in the base class, every child Blueprint you make from now on gets the outline and the "E" for free. That's the point of the next two chapters.</span>

---

## Chapter B: Make a Box

### B0. Create a Key Enumeration

A box and a pad match when they share a **key**. Color is just how the key looks to the player.

Right-click in the Content Browser → **Blueprint → Enumeration**. Name it `E_PuzzleKey`. Open it and add three entries: `Red`, `Blue`, `Green`.

[📷 SCREENSHOT: E_PuzzleKey with three entries.]

<span class="hint">Because the logic compares keys instead of colors, you can later swap colors for shapes, symbols, or sounds without touching any of the matching logic.</span>

### B1. Create a Color Material

Create a **Material** named `M_PuzzleColor`. Add a **Vector Parameter** named `Color` and wire it into **Base Color**.

[📷 SCREENSHOT: M_PuzzleColor graph: one Vector Parameter into Base Color.]

### B2. Create the Box as a Child Blueprint

Right-click `BP_Interactable_Base` in the Content Browser and choose **Create Child Blueprint Class**. Name it `BP_PuzzleBox`.

[📷 SCREENSHOT: Right-click menu on BP_Interactable_Base with Create Child Blueprint Class highlighted.]

Open it. The components from 821 are already there. Inherited components can't be renamed or reparented, but their Details can be changed.

Select `Mesh_Interactable`:
- Set **Scale** to `0.5, 0.5, 0.5`. A full-size cube is a meter wide, too big to carry.
- Under **Physics**, check **Simulate Physics**.

Select `InteractRadius` and double its **Sphere Radius**, since it shrank with the mesh.

[📷 SCREENSHOT: BP_PuzzleBox Viewport and Details with Simulate Physics checked.]

### B3. Add Variables

In `BP_PuzzleBox`, add:
- `Key`: type **E_PuzzleKey**. Click the eye icon to make it **Instance Editable**, so each box in the level can have its own key.

The box also needs to remember which pad it sits on, but the pad doesn't exist yet. You'll add that in D3.

### B4. Color the Box in the Construction Script

Open the **Construction Script** tab. It runs in the editor every time you change the box, so the color updates as soon as you change `Key`.

- Drag in `Mesh_Interactable` and add **Create Dynamic Material Instance**. Set **Source Material** to `M_PuzzleColor`.
- From its Return Value, add **Set Vector Parameter Value**. Set **Parameter Name** to `Color`.
- Add a **Select** node. Wire `Key` into its **Index**. The options fill in automatically, one per enum entry. Set Red, Blue, and Green colors.
- Wire the Select output into **Value**.

[📷 SCREENSHOT: Construction Script: Create Dynamic Material Instance, Select on Key, Set Vector Parameter Value.]

Drag two boxes into the level. Set one's `Key` to `Red` and the other's to `Blue`. They should change color in the editor right away.

### B5. Three States for the Box

A box is always in one of three states:
- **Loose:** lying in the world. Physics on, and the trace can see it.
- **Held:** carried by the player. Physics on, but the trace can't see it and it can't bump the player.
- **Snapped:** sitting on a pad. Physics off, attached to the pad.

Make one custom event per state in `BP_PuzzleBox`.

**To Held:**
- **Detach From Component** on `Mesh_Interactable` (Location, Rotation, Scale rules all `Keep World`)
- **Set Simulate Physics** → true
- **Set Collision Response to Channel**: Channel `Visibility`, Response `Ignore`
- **Set Collision Response to Channel**: Channel `Pawn`, Response `Ignore`

**To Loose:**
- **Set Collision Response to Channel**: `Visibility` → `Block`
- **Set Collision Response to Channel**: `Pawn` → `Block`

**To Snapped:** add an input `SnapPoint` of type **Scene Component**.
- **Set Simulate Physics** → false
- **Set Collision Response to Channel**: `Visibility` → `Block`
- **Set Collision Response to Channel**: `Pawn` → `Block`
- **Attach Component To Component**: Target `Mesh_Interactable`, Parent `SnapPoint`. Set Location and Rotation rules to `Snap to Target` and the Scale rule to `Keep World`.

[📷 SCREENSHOT: The three state events side by side.]

<span class="hint">Why ignore `Visibility` while held? The 821 trace runs on the Visibility channel, and a carried box floats right in front of the camera. If the trace can see it, it hits the box you're holding every time, and you can never look past it at a pad.</span>

<span class="save">Save All</span>

---

## Chapter C: Carry the Box

### C0. Add a Physics Handle

Open `BP_FirstPersonCharacter`. In **Components**, add a **Physics Handle**.

[📷 SCREENSHOT: BP_FirstPersonCharacter Components with PhysicsHandle added.]

A Physics Handle holds a physics object toward a target point you set every frame. The box stays a real physics object while you carry it: it bumps into walls instead of passing through them, and it lags a little behind your view.

### C1. Cache the Handle and Camera

Open **InteractionComponent**. Add three variables:
- `PhysicsHandle`: **Physics Handle Component** (Object Reference)
- `Camera`: **Camera Component** (Object Reference)
- `HeldBox`: **BP_PuzzleBox** (Object Reference)

From **Event BeginPlay**: **Get Owner** → **Get Component by Class** (`PhysicsHandleComponent`) → **Set** `PhysicsHandle`. Do the same with `CameraComponent` → **Set** `Camera`.

[📷 SCREENSHOT: Event BeginPlay caching PhysicsHandle and Camera.]

<span class="hint">Like 821's overlap logic, this keeps the carrying code inside InteractionComponent instead of the character. Remove the component and the whole system goes with it.</span>

### C2. Hold Box

In InteractionComponent, create a **Function** named `Hold Box` with an input `Box` (**BP_PuzzleBox**).

- Call **To Held** on `Box`
- From `PhysicsHandle`, call **Grab Component at Location with Rotation**:
  - **Component:** `Box` → `Mesh_Interactable`
  - **Location:** `Mesh_Interactable` → **Get World Location**
  - **Rotation:** `Mesh_Interactable` → **Get World Rotation**
- **Set** `HeldBox` to `Box`

[📷 SCREENSHOT: Hold Box function.]

### C3. Release Box

Create a second **Function** named `Release Box`. In its Details, add an **Output** named `Box` (**BP_PuzzleBox**).

- From `PhysicsHandle`, call **Release Component**
- Set the output `Box` to `HeldBox`
- **Set** `HeldBox` to nothing (leave the pin empty)

[📷 SCREENSHOT: Release Box function with Return Node.]

<span class="hint">Release Box hands back the box it was holding, so whoever called it decides what happens next. Dropping it on the floor and snapping it onto a pad both start the same way.</span>

### C4. Move the Box Every Frame

Add a **Float** variable `HoldDistance` with a default of `150`.

From **Event Tick**:
- **Is Valid** `HeldBox` (the `?` node from 821)
- **Is Valid** → `PhysicsHandle` → **Set Target Location and Rotation**:
  - **Location:** `Camera` **Get World Location** + (`Camera` **Get Forward Vector** × `HoldDistance`)
  - **Rotation:** `Camera` **Get World Rotation**

[📷 SCREENSHOT: Event Tick with the target location math.]

<span class="hint">If the box wobbles or trails too far behind, select the PhysicsHandle in `BP_FirstPersonCharacter` and raise **Linear Stiffness** and **Interpolation Speed**.</span>

### C5. Pick Up on Interact

Open `BP_PuzzleBox`. In the Event Graph, right-click and search for **Event Interact**. This overrides the `Interact` event from the parent.

- `Character` → **Get Component by Class** (`InteractionComponent`) → **Is Valid** its `HeldBox`
  - **Is Not Valid** (hands are empty): call **Hold Box** on the InteractionComponent with `Box` = **Self**
  - **Is Valid** (already carrying something): do nothing

[📷 SCREENSHOT: BP_PuzzleBox Event Interact.]

<span class="hint">If you added a Print String to the base `Interact` event in 821 C2, it no longer fires for boxes. Right-click Event Interact → **Add Call to Parent Function** if you want to keep it.</span>

### C6. Drop with E

Back in **InteractionComponent**, find the E key logic from 821 C2. Its Branch on `bCanInteract` has nothing on the **False** pin. Add:
- **Is Valid** `HeldBox` → **Is Valid** → **Release Box** → call **To Loose** on the returned `Box`

[📷 SCREENSHOT: E key graph with the drop path on the False pin.]

Pressing E while looking at nothing now drops the box.

<span class="save">Save All</span>

Test it: look at a box, press E, walk around, look at empty floor, press E.

[🎬 GIF: Picking up the red box, carrying it into a wall (it bumps instead of clipping), dropping it on empty floor.]

---

## Chapter D: Make a Placement Pad

### D0. Create the Pad as a Child Blueprint

Create another child of `BP_Interactable_Base` and name it `BP_PlacementPad`.

Select `Mesh_Interactable` and set **Scale** to `1.2, 1.2, 0.05`. This makes a flat square on the floor. Set its material to `M_PuzzleColor`.

Squashing the mesh squashes its children too. Fix both inherited children:
- `InteractRadius`: set **Scale** to `1, 1, 20`. A sphere uses its smallest scale axis, so without this the radius shrinks to almost nothing.
- The tip widget: raise its **Location Z** until the "E" floats about a meter above the pad. Its location is now multiplied by `0.05`, so the number will look large (around `2000`).

[📷 SCREENSHOT: BP_PlacementPad Viewport: flat pad, InteractRadius sphere, widget floating above.]

<span class="hint">When the pad is hovered, the outline from Chapter A traces the edge of this flat square.</span>

### D1. Add a Snap Point

Add a **Scene** component named `SnapPoint` and drag it onto `DefaultSceneRoot`, not onto the mesh. This keeps the squashed scale off the box. Set its **Location Z** to about `28`, so a snapped box rests on top of the pad instead of sinking into it.

[📷 SCREENSHOT: SnapPoint under DefaultSceneRoot, with a 50 cm reference cube sitting on the pad.]

### D2. Variables and Color

Add to `BP_PlacementPad`:
- `Key`: **E_PuzzleKey**, Instance Editable
- `SnappedBox`: **BP_PuzzleBox** (Object Reference)
- `bSolved`: **Boolean**

Copy the Construction Script from B4 so the pad shows its key's color.

Add an **Event Dispatcher** named `OnPadChanged`. The door listens to it in Chapter E.

[📷 SCREENSHOT: My Blueprint panel with the variables and the OnPadChanged dispatcher.]

### D3. Let the Box Point to Its Pad

Now that `BP_PlacementPad` exists, open `BP_PuzzleBox` and add a variable `SnappedTo` (**BP_PlacementPad** Object Reference).

At the very start of the box's **Event Interact** (C5), insert **Is Valid** `SnappedTo`:
- **Is Valid** (the box is sitting on a pad): call `SnappedTo` → **Interact**, passing `Character` through. The pad handles it.
- **Is Not Valid**: continue into the pickup logic from C5.

[📷 SCREENSHOT: BP_PuzzleBox Event Interact with the SnappedTo check in front.]

### D4. Place and Take on Interact

In `BP_PlacementPad`, add **Event Interact** (override, as in C5).

`Character` → **Get Component by Class** (`InteractionComponent`). Then **Is Valid** `SnappedBox`:

**Pad is empty (Is Not Valid)** → **Is Valid** on the InteractionComponent's `HeldBox`:
- **Is Valid** (player is carrying a box). Place it:
  - **Release Box** on the InteractionComponent. Keep its returned `Box`.
  - Call **To Snapped** on `Box`, with `SnapPoint` as the input
  - Set the box's `SnappedTo` to **Self**
  - **Set** `SnappedBox` to `Box`
  - **Set** `bSolved` to (`Box` → `Key` **==** `Key`)
  - **Call OnPadChanged**

**Pad has a box (Is Valid)** → **Is Valid** on the InteractionComponent's `HeldBox`:
- **Is Not Valid** (hands empty). Give it back:
  - Set `SnappedBox`'s `SnappedTo` to nothing
  - Call **Hold Box** on the InteractionComponent with `SnappedBox`
  - **Set** `SnappedBox` to nothing
  - **Set** `bSolved` to false
  - **Call OnPadChanged**
- **Is Valid** (hands full and pad full): do nothing

[📷 SCREENSHOT: BP_PlacementPad Event Interact, place branch.]
[📷 SCREENSHOT: BP_PlacementPad Event Interact, take-back branch.]

<span class="hint">A wrong box still snaps on. The pad accepts it and quietly records `bSolved = false`. The player has to work out the right arrangement; the pad doesn't tell them.</span>

<span class="hint">Why does the box forward Interact to its pad (D3)? When a box sits on a pad, the player naturally looks at the box, not at the strip of pad around it. Forwarding means pressing E on either one gives the box back.</span>

<span class="save">Save All</span>

Drag a red pad and a blue pad into the level and test it: carry a box over, look at the pad (outline and "E" appear even while holding), press E. Press E again to take it back.

[🎬 GIF: Carrying the red box, hovering the red pad (outline + "E"), snapping it on, then pressing E on the snapped box to take it back.]

---

## Chapter E: Open the Door

### E0. Create the Door

Create a Blueprint → **Actor** named `BP_PuzzleDoor`. Add a **Static Mesh** named `DoorMesh`, set it to a cube, and scale it to `2, 0.2, 3` (two meters wide, three meters tall).

Add variables:
- `Pads`: **BP_PlacementPad**, set to **Array** (click the icon next to the type), Instance Editable
- `OpenOffset`: **Vector**, Instance Editable, default `0, 0, 300`
- `bAllSolved`: **Boolean**

[📷 SCREENSHOT: BP_PuzzleDoor Components and Variables.]

### E1. Listen to the Pads

The door owns the list of pads, and the pads know nothing about the door. Each pad only announces that it changed, through `OnPadChanged`.

From **Event BeginPlay**: **For Each Loop** over `Pads` → from **Array Element**, add **Bind Event to On Pad Changed**. Drag from its red **Event** pin and choose **Add Custom Event**. Name it `Check Pads`.

[📷 SCREENSHOT: BeginPlay binding loop with the Check Pads custom event.]

### E2. Judge the Configuration

From **Check Pads**:
- **Set** `bAllSolved` → true
- **For Each Loop** over `Pads`. In **Loop Body**: **Set** `bAllSolved` → `bAllSolved` **AND** Array Element's `bSolved`
- **Completed** → **Branch** on `bAllSolved`

[📷 SCREENSHOT: Check Pads loop and Branch.]

### E3. Slide the Door

Right-click → **Add Timeline**. Name it `DoorTimeline`. Double-click it, add a **Float Track** named `Alpha`, and add two keys: `(0, 0)` and `(1, 1)`. Set the length to `1`.

[📷 SCREENSHOT: Timeline editor with the Alpha track.]

Wire the Branch's **True** pin to the Timeline's **Play** and **False** to **Reverse**.

From **Update**: `DoorMesh` → **Set Relative Location**, with **New Location** = **Lerp (Vector)** of `A = 0, 0, 0`, `B = OpenOffset`, **Alpha** = the `Alpha` track.

[📷 SCREENSHOT: Timeline wired to Set Relative Location through Lerp.]

<span class="hint">**Play** and **Reverse** both start from wherever the timeline currently is. Pull a box off mid-opening and the door turns around smoothly instead of snapping shut.</span>

<span class="save">Save All</span>

### E4. Wire It Up in the Level

Drag `BP_PuzzleDoor` into a doorway. In its Details, click **+** on `Pads` twice. Use the eyedropper to pick your red pad and your blue pad from the level.

[📷 SCREENSHOT: Door Details with both pads assigned in the Pads array.]

<span class="hint">If the door opens the moment you press Play, its `Pads` array is empty. A loop over nothing never sets `bAllSolved` to false.</span>

Test the whole puzzle. Try a wrong arrangement first, then the right one, then pull a box off.

[🎬 GIF: Red box onto the blue pad (door stays shut). Swap to the correct arrangement (door slides open). Take one box back (door slides closed).]

### E5. Final Blueprint Structure

**BP_Interactable_Base: On Hovered / On UnHovered:**

[📷 SCREENSHOT]

**InteractionComponent: On Interactable Overlap, BeginPlay, Tick, E key:**

[📷 SCREENSHOT]
[📷 SCREENSHOT]

**InteractionComponent: Hold Box, Release Box:**

[📷 SCREENSHOT]

**BP_PuzzleBox: Construction Script, state events, Event Interact:**

[📷 SCREENSHOT]
[📷 SCREENSHOT]

**BP_PlacementPad: Event Interact:**

[📷 SCREENSHOT]

**BP_PuzzleDoor: BeginPlay, Check Pads, Timeline:**

[📷 SCREENSHOT]

---

## What you can now build

- An outline and "E" prompt on anything the player can interact with, inherited by every child of `BP_Interactable_Base`
- A physics object the player can pick up, carry, and drop, which collides with the world while held
- Pads that accept a carried object, snap it into place, and hand it back
- A key system that matches objects to slots without caring what the key looks like
- A door, or any other actor, that reacts to the state of several other actors through an Event Dispatcher
- A Timeline that plays forward and backward from wherever it currently is

## Example deviations you are ready for

- **Wrong-answer feedback:** when a box snaps with `bSolved` false, flash the pad or play a buzz.
- **Swap:** if the player is holding a box and the pad is full, trade the two instead of doing nothing.
- **Stacking:** give `BP_PuzzleBox` its own `SnapPoint` on top, so a box can act as a pad for another box.
- **Pressure plates:** replace Interact on the pad with an overlap, so any physics object dropped on it counts.
- **Weight puzzles:** compare the box's mass against a pad threshold instead of comparing keys.
- **Order matters:** have the door record which pad was solved in what order, and only open for one sequence.
- **Other rewards:** the door is just one listener. A light, a bridge, a sound, or a cutscene can bind to `OnPadChanged` the same way.
- **Win and lose screens:** see the upcoming UI tutorial.
- **Glowing pad VFX:** coming in a later revision of this tutorial.
