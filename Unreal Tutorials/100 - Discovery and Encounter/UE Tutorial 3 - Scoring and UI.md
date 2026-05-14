---
cssclasses:
  - unreal-tutorial
---
**Continuing from:** [[UE Tutorial 2 - Collectables and Restart|Tutorial 2: Collectables and Restart]]

*By Aaron Cheney & Peter Brinson*

## 0. Introduction
---

> [!info]- A. Outcome
> <span style="color:#cb5d21">**This tutorial's outcome:**</span>
> Continuing from [[UE Tutorial 1 - A Floor Plate Opens A Door|Tutorial 1]] and [[UE Tutorial 2 - Collectables and Restart|Tutorial 2]], the player collectable count is properly presented in the UI.

> [!info]- B. Learning Objectives
> Review from [[UE Tutorial 2 - Collectables and Restart|Tutorial 2: Collectables and Restart]]
>
> - custom events
> - casting
> - [[PlayerState]]
>
> New:
> - custom event parameters
> - Widget Blueprint basics (Hierarchy, `TextBlock`, `Is Variable`)
> - [[Create Widget]] node
> - [[Add to Player Screen]]

## 1. Update BP_Collectable
---

> [!info]- Disconnect Destroy Actor
> Return to `BP_Collectable` from [[UE Tutorial 2 - Collectables and Restart]]. Break the connection between `OnCollectedCollectable` and `Destroy Actor`.  In fact, you can delete the `Destroy Actor` node as it will be incorporated in the `PlayerState` blueprint instead;  destroying the collectable will be the last thing happening in the overall sequence among the blueprints.
>
> ![[unrealTutorial_03_101.png]]

## 2. Make the Score Widget Blueprint
---

> [!info]- A. Design the Widget
> In the Content Browser, right-click and choose **User Interface > Widget Blueprint**. When prompted for a class, select **User Widget**. Name it `WBP_Score`. Double-click to open it.
>
> In the Palette panel, find `Canvas Panel` (by searching).
> ![[unrealTutorial_04_102.png]]
>
> Drag `Canvas Panel` into the Hierarchy panel.  Do the same with `Text` (under Common).  From now on, we will refer to this `Text` as `TextBlock`, per its name. Build the following Hierarchy:
>
> ![[unrealTutorial_03_107.png]]
>
> Arrange `TextBlock` on the canvas.
> ![[unrealTutorial_03_108.png]]
>
> Then, with `TextBlock` selected, find `Is Variable` in the Details panel (at the very top) and check it `true`.
>
> ![[unrealTutorial_03_109.png]]
>
> > [!hint] Hold On
> > Why `Is Variable`? Making the `TextBlock` a variable provides a named reference to it in the [[Event Graph]]. Without this, `TextBlock` is inaccessible to blueprint script.
>
> > [!question] Ask your LLM why
> > In Unreal's Widget Blueprint, why do I need to check `Is Variable` on a `TextBlock` before I can use it in the Event Graph? What happens if I don't?

> [!info]- B. Widget Event Graph
> Click Graph in the top-right corner of the Widget Blueprint editor.
> ![[unrealTutorial_03_109b.png]]
>
> Now that you're in the graph, complete the blueprint script using these instructions and screenshot.  This screenshot of the blueprint script is below the instructions.
>
> Instructions:
> - Create `OnScoreUpdated`, a custom event. With it selected, add in the Inputs panel, a new parameter (of type `Integer`): `NewScore`.
> - Under the VARIABLES panel, the `TextBlock` will be available as `TextBlock_xx`  Drag it into the graph and choose Get.
> - Drag off the `TextBlock_xx` node and search for `Set Text`.  There are numerous `Set Text`.  Find the one under the category, Content.
> ![[unrealTutorial_03_109c.png]]
> - Drag off the `OnScoreUpdated` node - `NewScore` and search for `To Text (Integer)`
> - At this moment, Unreal will insert a `To Text (Integer)` conversion between `NewScore` and `Set`.
>
> ![[unrealTutorial_03_110.png]]
>
> <span class="action">Compile</span>
>
> <span class="save">Save All</span>

## 3. BeginPlay Creates (Instantiates) the Score Widget
---

> [!info]- Create the Widget on BeginPlay
> Return to the blueprint, `BP_InClassPlatforming_PlayerState`.
> The following steps add blueprint script in the Event Graph you worked in during Step 3 of [[UE Tutorial 2 - Collectables and Restart]].  Add new blueprint script above or below the existing one.
>
> If it is not there, create `Event BeginPlay`.
> Drag off of `Event BeginPlay` and type `Create Widget`. Set its Class to `WBP Score`.
>
> Add `Get Player Controller` (Player Index 0) and connect its `Return Value` to the `Owning Player` pin of `Create WBP Score Widget`.
> ![[unrealTutorial_03_113.png]]
>
> To create the `SET` node below, drag off the `Return Value` of `Create WBP Score Widget` and search for `Promote to Variable`.
> ![[unrealTutorial_03_114.png]]
>
> ...which also gives you - on the left - under VARIABLES, a new variable.
> ![[unrealTutorial_03_115.png]]
> Name that new variable `ScoreWidget` of type `WBP Score`.
>
> After the `SET` node, add `Add to Player Screen`.
>
> > [!question] Ask your LLM why
> > In the Unreal tutorial I'm following, after creating a widget with `Create Widget`, the tutorial says to `Promote to Variable` before adding it to the player screen. Why do I need to store the widget in a variable?
>
> Double-check all pin connects - this is the same screenshot you saw a bit above.
> ![[unrealTutorial_03_113.png]]
>
> <span class="action">Compile</span>
>
> <span class="save">Save All</span>

## 4. Handle the Score
---

> [!info]- A. Add a Parameter to OnCollectedCollectable
> You are still in the blueprint `BP_InClassPlatforming_PlayerState`.
>
> Select on the `OnCollectedCollectable` custom event node in the Event Graph. In the Details panel, add an Input:
>
> ![[unrealTutorial_03_116.png]]
>
> That Input: `Collectable` of type `BP_Collectable`.
>
> Notice that now the node has a `Collectable` parameter pin:
>
> ![[unrealTutorial_03_119.png]]
>
> (Providing a value for this Parameter comes in Step 5).
>
> The parameter `Collectable` can pass a reference to the collectable.  This is setting up the ability for this blueprint to call the collectable's functions (potentially) as well as destroy the collectable in the level.

> [!info]- B. Count by Incrementing an Integer
> Using what you have learned, complete the blueprint script using these instructions and screenshot.  The screenshot is below the instructions.
>
> Instructions:
> - Drag from `OnCollectedCollectable` and search for Add, under the category Operators.
> ![[unrealTutorial_03_123.png]]
> - From the VARIABLES panel, drag in `NumberOfCollectables` and connect to the Add node.  (We're doing a x=x+1, essentially).
> - Drag from Add and search for `OnScoreUpdated` (the custom event created in Step 2B) -- turn off `Context Sensitive`, momentarily, to find it. Connect the integer output of Add to the `NewScore` parameter pin on `OnScoreUpdated`.
> - Turn `Context Sensitive` back on.
> - Under VARIABLES drag in `ScoreWidget` (set up in Step 3) and connect to `OnScoreUpdated`.
> - Drag from `OnScoreUpdated` to create `Destroy Actor`.
> - Notice the long blue wire.  `OnCollectedCollectable`'s parameter - `Collectable` - connects to `Destroy Actor`.  This is why `Destroy Actor` was removed from `BP_Collectable` in Step 1: it belongs here, at the end of the chain among all relevant blueprints - after the number of collectables is updated and presented in the widget.
>
> ![[unrealTutorial_03_125.png]]
>
> Almost there.  Step 5 will remedy the runtime error you might notice.
>
> <span class="save">Save All</span>

## 5. Complete BP_Collectable
---

> [!info]- Pass Self to OnCollectedCollectable
> Return to `BP_Collectable`. The `OnCollectedCollectable` call now requires a `Collectable` value — a reference to the collectable being picked up. That reference is `self`.
>
> Right-click in the Event Graph and choose `Get a Reference to Self`. Connect it to the `Collectable` input pin of `OnCollectedCollectable`.
>
> ![[unrealTutorial_03_131.png]]
>
> > [!question] Ask your LLM why
> > In the Unreal tutorial I'm following, the collectable blueprint passes `Self` as a parameter to a custom event on the `PlayerState`. Why does the collectable need to pass a reference to itself?
>
> <span class="action">Compile</span>
>
> <span class="save">Save All</span>

## What you can now build

- A score counter displayed on screen that updates in real time as the player collects items
- Any on-screen HUD element driven by gameplay events — item counts, progress indicators, status messages
- Blueprint events that carry data: not just "something happened" but "this specific thing happened, here it is"
- A multi-blueprint chain where a world event updates game state and the UI reflects it simultaneously
- The full collect-score-destroy sequence: item picked up, counter incremented, display updated, object removed

## Example deviations you are ready for

- Collectables are assigned a score value through a member variable.  That value is added to the on-screen score, rather than always being a +1.  