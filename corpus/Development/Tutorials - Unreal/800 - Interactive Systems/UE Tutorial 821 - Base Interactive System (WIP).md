---
type: Tutorial
title: "UE Tutorial 821 - Base Interactive System"
cssclasses: unreal-tutorial
---


<span style="color:#d9a8b3; font-size:1.4rem">*By Yibei He & Peter Brinson*</span>

> *Disclaimer: since being converted from a different platform, this document has not yet been proofread. And many of the images need updating. You are welcome to ask Peter any questions.*

## 0. Introduction

**Learning Objectives:**
- Build a reusable `BP_Interactable_Base` Actor Blueprint with a mesh and trigger radius
- Create an `InteractionComponent` (Actor Component) to separate interaction logic from the player
- Use a looping Sphere Trace to detect what the player is looking at
- Build hover effects including a Widget UI that appears when the player looks at an object
- Bind an interaction event to the E key

---

## Chapter A: Create the Interactable Item System

### A0. Create a Blueprint with Mesh & Trigger Area

Right-click in the Content Browser, create a Blueprint, choose **Actor**, and rename it `BP_Interactable_Base`.

![[unrealTutorial_10_101.webp]]
![[unrealTutorial_10_104.webp]]

Double-click to open it. In **Components**, add a **Static Mesh** component and rename it `Mesh_Interactable`.

<span class="hint">In Unreal, searching is almost always faster than scrolling — use the search field in Components, Details, and most other panels.</span>

![[unrealTutorial_10_107.webp]]
![[unrealTutorial_10_110.webp]]

In Details, change the mesh to a cube.

![[unrealTutorial_10_113.webp]]

Add a **Sphere Collision** component. Name it and parent it as shown. In Details, adjust the **Sphere Radius** to define the area where players can interact with this object.

![[unrealTutorial_10_116.webp]]

Click on **BP_Interactable_Base** in the [[Components]] panel and add the tag `Interactable`.

![[unrealTutorial_10_119.webp]]
![[unrealTutorial_10_122.webp]]

<span class="hint">When you drag the actor into the level, position it so the player starts outside the interaction radius.</span>

### A1. Setup Interact Overlap

Right-click on the collision component (`InteractRadius`) and add:
- Add [[OnComponentBeginOverlap]]
- Add [[OnComponentEndOverlap]]

![[unrealTutorial_10_125.webp]]

Drag from each event node and search for **[[Cast To|Cast to]] BP_FirstPersonCharacter**. Note the parameters flowing left to right.

![[unrealTutorial_10_128.webp]]

### A2. Create Interaction Component

Create a new Blueprint and choose **Actor Component**.

<span class="hint">Actor Component is not in the "Common" list at the top — enable "All Classes" to find it.</span>

![[unrealTutorial_10_131.webp]]
![[unrealTutorial_10_134.webp]]

Add it to `BP_FirstPersonCharacter` (found in your `FirstPerson` folder). Keeping interaction logic in a dedicated component makes it easy to disable — just remove the component from the character.

![[unrealTutorial_10_137.webp]]
![[unrealTutorial_10_140.webp]]

### A3. Call Overlap Event

Open **InteractionComponent**. Right-click to **Add Custom Event**, rename it `On Interactable Overlap`. In Details, add an input: `bIsOverlapped` (Boolean).

![[unrealTutorial_10_143.webp]]

Back in **BP_Interactable_Base**: from **Other Actor**, drag out a **Get Component by Class** node and select `InteractionComponent`.

![[unrealTutorial_10_146.webp]]

Call the event we just created: `On Interactable Overlap`.

![[unrealTutorial_10_149.webp]]

For **On Component End Overlap**, do the same but uncheck **Is Overlapped**.

![[unrealTutorial_10_152.webp]]

Back in the Interactable Blueprint, add **[[Branch]]** and **[[Print String]]** nodes to test.

![[unrealTutorial_10_155.webp]]

Toggle between `BP_Interactable_Base` and `InteractionComponent`'s [[Event Graph|EventGraph]] to see how `OnInteractableOverlap` is called as a custom function.

![[unrealTutorial_10_158.webp]]
![[unrealTutorial_10_161.webp]]

Test it — position the actor and player so the player starts outside the radius.

### A4. Setup the Line Trace Logic

In **InteractionComponent**:

Add a Custom Event, rename it `Draw Trace`, add a Boolean input `bIsDrawTrace`.

![[unrealTutorial_10_164.webp]]

Add another Custom Event, rename it `Detect Sight`.

![[unrealTutorial_10_167.webp]]

Branch the **Draw Trace** event and connect to **Set Timer by Function Name**, passing `Detect Sight` as the function name. Set **Time** to `0.1`, check **Looping**. This calls `Detect Sight` every 0.1 seconds until stopped.

![[unrealTutorial_10_170.webp]]

Promote the Return Value to a variable. In the [[Variables]] panel, rename it `Trace Timer`.

![[unrealTutorial_10_173.webp]]
![[unrealTutorial_10_176.webp]]

Use **Clear and Invalidate Timer by Handle** to stop the timer. Drag `Trace Timer` from the `Variables` panel (**Get Trace Timer**) and connect it to **Handle**.

![[unrealTutorial_10_179.webp]]

### A5. Create the Line Trace Logic

Use **Sphere Trace By Channel** rather than Line Trace. The sphere width means the player doesn't have to aim precisely at interactable objects.

<span class="hint">See the [Traces in Unreal Engine overview](https://dev.epicgames.com/documentation/en-us/unreal-engine/traces-in-unreal-engine-overview) in the Epic documentation for more detail.</span>

![[unrealTutorial_10_182.webp]]

Build the math for the trace start location. Take time with this — hover over nodes for documentation pop-ups. Note the **Divide** nodes and type-conversion nodes. Did you need to uncheck **Context Sensitive** to find `Convert Screen Location To World Space`?

![[unrealTutorial_10_185.webp]]

When you first create the **Add** and **Multiply** nodes, they accept Vector3 values. Right-click around those fields to **Promote to Variable** — this creates a `New Var` node. Rename it `Trace Distance`, change the type to **Float**, and set its Default Value to `250.0`.

![[unrealTutorial_10_188.webp]]
![[unrealTutorial_10_191.webp]]

Set the following on the Sphere Trace node:
- **Radius:** `5.0`
- **Draw Debug Type:** `For Duration`
- **Draw Time:** `0.1`

![[unrealTutorial_10_194.webp]]

From **Return Value**, add a **Branch** to detect whether the trace hit something. Drag from **On Hit** to **Break Hit Result** so you can check whether the hit actor has the `Interactable` tag. Continue building as shown — don't forget the tag value for **[[Actor Has Tag]]**.

![[unrealTutorial_10_197.webp]]

Promote **Hit Actor** to a variable — rename it `Interactable Item`. Add a new Boolean variable named `bCanInteract`.

![[unrealTutorial_10_200.webp]]
![[unrealTutorial_10_203.webp]]

For the false branch, clear all look-related state. Add a **Print String** to test the result.

![[unrealTutorial_10_206.webp]]

Back in **On Interactable Overlap**, add two **Draw Trace** calls as shown. Test the system now.

<span class="hint">This `EventGraph` has a lot of detail — don't be discouraged if something doesn't connect first try. Check every pin and parameter methodically.</span>

![[unrealTutorial_10_209.webp]]

You should see output in the print log:

![[unrealTutorial_10_212.gif]]

Currently the trace fires every 0.1s continuously. Optimize it: only **Set Interactable Item** when the actor has actually changed — not on every tick.

Add the two new **Branch** nodes shown at the far right. Insert them between the existing Branches and Sets. Note the **Equal (==)** and **Not (Boolean)** nodes integrated here.

![[unrealTutorial_10_215.webp]]

<span class="save">Save All</span>

The behavior is the same as the GIF above, but `Print "Looking"` and `Print "Not Looking"` now only fire on state change, not repeatedly.

### A6. Final Blueprint Structure

**BP_Interactable_Base:**

![[unrealTutorial_10_218.webp]]

**InteractionComponent — On Interactable Overlap & Draw Trace:**

![[unrealTutorial_10_221.webp]]

**InteractionComponent — Detect Sight:**

![[unrealTutorial_10_224.webp]]
![[unrealTutorial_10_227.webp]]

---

## Chapter B: Create Hover Effects

### B1. Create Hover Logic

In **BP_Interactable_Base**, create two [[Custom Events|custom events]]: `On Hovered` and `On UnHovered`.

![[unrealTutorial_10_230.webp]]

Back in **InteractionComponent**, insert the nodes highlighted in red below. Note: **Is Valid** is found under "struct" — look for the `?` icon on the node.

![[unrealTutorial_10_233.webp]]

Insert the red-rectangle nodes again in the second location. This prevents errors — we set the item to `UnHovered` first, then to `Hovered`, ensuring clean state transitions.

![[unrealTutorial_10_236.webp]]

Back in **Draw Trace**, add the new nodes shown below the red line.

![[unrealTutorial_10_239.webp]]

Back in **BP_Interactable_Base**, the `On Hovered` and `On UnHovered` events are now ready for any logic you want to attach: a sound, a highlight, a post-processing effect. Use a Print String to test first.

![[unrealTutorial_10_242.webp]]

### B2. Add a Hover UI

Right-click in the Content Browser and navigate to **UI → [[Widget Blueprint]] → User Widget**. Name it `WB_InteractionTip`.

![[unrealTutorial_10_245.webp]]

From the **Palette**, drag a `Canvas Panel` into the UI area, then add an **Image** inside it. Set your texture: **Details → Brush → Image**.

![[unrealTutorial_10_248.webp]]

### B3. Set Hover UI to the Item Blueprint

In **BP_Interactable_Base**, add a **Widget** component. Rename it and parent it under the mesh.

![[unrealTutorial_10_251.webp]]
![[unrealTutorial_10_254.webp]]

In the **Viewport**, move the Widget to the top of the mesh.

![[unrealTutorial_10_257.webp]]

In Details, set:
- **User Interface Space:** `Screen`
- **Widget Class:** `WB_InteractionTip`

![[unrealTutorial_10_260.webp]]

Uncheck `Visible` (the widget starts hidden).

![[unrealTutorial_10_263.webp]]

Add show/hide logic to your `On Hovered` / `On UnHovered` events.

![[unrealTutorial_10_266.webp]]

The hover UI should now appear when the player looks at the object:

![[unrealTutorial_10_269.gif]]

---

## Chapter C: Create Base Interact Event

### C1. Create an Event

In **BP_Interactable_Base**, add a custom event named `Interact`. Add an input of type **Actor**, named `Character`.

![[unrealTutorial_10_272.webp]]

### C2. Bind the Event to E

In **InteractionComponent**, add an **E Key** node.

![[unrealTutorial_10_275.webp]]

When `bCanInteract` is true, `Cast to BP_Interactable_Base` and call `Interact`.

![[unrealTutorial_10_278.webp]]
![[unrealTutorial_10_281.webp]]

Right-click to **Get Owner** and connect it to the `Character` input on the `Interact` node.

![[unrealTutorial_10_284.webp]]
![[unrealTutorial_10_287.webp]]

Any logic you add inside `BP_Interactable_Base`'s `Interact` event will now run when the player presses E.

![[unrealTutorial_10_290.webp]]
![[unrealTutorial_10_293.webp]]

---

## What you can now build

- A reusable interactable base class that any specific item type can extend
- A sphere trace that detects what the player is looking at, firing only on objects tagged `Interactable`
- A hover UI tip that appears when the player aims at an object and disappears when they look away
- An E key interaction that calls a custom event on whatever the player is targeting
- A dedicated Actor Component for interaction logic — separating it from the player character so it can be disabled or swapped independently

## Example deviations you are ready for

- A readable note (see Tutorial 802)
- An inspectable object the player can rotate and examine
- A movable item the player can pick up and carry
- A door or drawer that opens on interaction
- A chest or container that reveals its contents
- A switch or lever that triggers a distant event
