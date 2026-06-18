---
cssclasses:
  - unreal-tutorial
---

*By Aaron Cheney & Peter Brinson*


## 0. Introduction

> [!info]- A. Outcome
> <span style="color:#cb5d21">**This tutorial's outcome:**</span>
> When the player character steps on a floor plate, a particular door slides open.
> The door closes when the player steps off the plate.
>
> The essential lesson is to learn how the door is "listening" for the pressure plate to call it.
> ![[unrealTutorial_01_101.png]]

> [!info]- B. Video Version of Tutorial
> This tutorial page and this video provide the same lesson in slightly different ways, encouraging you to repeat steps (a little differently) until you understand the principles.
> The outcome is demonstrated at (00:24 - 01:31). 
>
> <iframe src="https://player.vimeo.com/video/1119249385" width="640" height="360" frameborder="0" allowfullscreen></iframe>

> [!info]- C. Learning Objectives
> Develop working knowledge of blueprint fundamentals:
>
> - events
> - components
> - reference variables
> - parameters
> - control flow
> - data flow
> - casting
> - timeline (animate location with lerp)
> - collision events
> - dispatchers


## 1. A New Third Person Project
---

> [!info]- A. Choose a Template
> Choose New Project
>
> ![[unrealTutorial_01_103.png]]
>
> Choose the third person template.
>
> ![[unrealTutorial_01_104.png]]

> [!info]- B. Add Platforming Variant
> <span style="color:#cb5d21">**Don't miss this step:**</span>
> Add the Platforming "Variant".  This is not critical to the project, but this and the next 2 tutorials use it.  You will be instructed to choose particular blueprints by name.  Without this step, that process will be foiled.
>
> ![[unrealTutorial_01_107.png]]

> [!info]- C. Name and Verify
> Name your project and click Create.
>
> Once your project is open, click play to ensure you have your third person project working.

> [!info]- D. Change the Player Character
> > [!hint] Hold On
> > If you are new to Unreal, become familiar with basic viewport navigation [[UE Editor Navigation]]
>
> Follow this dropdown to change the [[Pawn|pawn]] from `BP_ThirdPersonPlayer` to `BP_PlatformingCharacter`. The pawn is the player character that will be spawned on play.
>
> <span class="hint">To enlarge any image on this page: Right-click to choose "Open image in new tab".</span>
>
> ![[unrealTutorial_01_110.png]]
>
> Notice:
> If you do not find `BP_PlatformingCharacter`, that is likely because you did not select the Platforming Variant in Step 1B.
>
> > [!question] Ask your LLM why
> > In Unreal, why might the tutorial I'm following change the pawn blueprint from a third person character to the platforming character?

## 2. The Pressure Plate Blueprint 
---
Jump to (01:48): [https://vimeo.com/1119249385?fl=pl&fe=cm#t=1m45s](https://vimeo.com/1119249385?fl=pl&fe=cm#t=1m45s)

> [!info]- A. Make the Blueprint File
> Right-click in the content browser (or content drawer if you prefer) to make a new folder in Content, `PlateAndDoor`:
>
> ![[unrealTutorial_01_113.png]]
>
> In the folder `PlateAndDoor`, right-click in the content browser and choose Blueprint Class. Next, you will choose `Actor`.
>
> ![[unrealTutorial_01_116.png]]
>
> Name the blueprint `BP_PressurePlate`.  Including `BP_` at the start of blueprints is strongly encouraged.  In other situations, for example, you'll include `M_` at the start of materials, and so on.
>
> > [!tip] Tip
> > When you want to rename a file in the Content Browser, after selecting it, click F2.
>
> > [!question] Ask your LLM what
> > In Unreal, what is an actor and what is a blueprint?

> [!info]- B. Add and Edit the Geometry
> Double click `BP_PressurePlate` to get a new window, where you can edit the blueprint. You will use this interface a great deal moving forward.
>
> In the [[Components]] window, click Add and search for `Cube`. Select it under Basic Shapes.
>
> ![[unrealTutorial_01_119.png]]
>
> Name the resulting component `BottomPlatform`. Use the Transform Gizmo to scale the Z to make it short. Alternatively, you can type in a value in Details > Transform > Scale > Z, as you see on the right.
>
> ![[unrealTutorial_01_122.png]]
>
> > [!tip] Tip
> > If the transform gizmo is too sensitive, you can adjust.
>
> ![[unrealTutorial_01_125.png]]
>
> Next, create another `Cube` component, name it `PressurePlate` and configure it as such. Adjust the parent/child hierarchy by dragging in the Components window.
>
> ![[unrealTutorial_01_128.png]]
>
> To make the two components visibly distinct, with `PressurePlate` selected, find `Materials` in the Details window. Search for "grey" to find a working material already in this project.
>
> ![[unrealTutorial_01_131.png]]
>
> Next, a third component is needed. Its role is to detect when the player steps on the plate. That area (the yellow wireframe) needs to be a little larger than the pressure plate.
>
> To do this, click Add in the component window, choose: `Box Collision` (see [[Collision Components|wiki]]). Rename it `BoxCollider`; adjust it to the same child/parent hierarchy as the two pressure plates in Components. Configure it so it is larger than `PressurePlate`.
>
> ![[unrealTutorial_01_134.png]]
>
> One last adjustment: set `PressurePlate` to be at location 0,0,0. (Being inside the blueprint, such locations are relative.) When you set that location, `BottomPlatform` will need to be moved downward, and perhaps `BoxCollider`. This is because Step 2E will animate the pressure plate between, in effect, "Position 0% to Position 100%".  So it is wise to make the default location equal to zero.
>
> Return to the main Unreal window, and File > Save Current Level as...
>
> Save the level file in the same folder as our working blueprint, `PlateAndDoor`.
>
> > [!tip] Tip
> > The terms 'scene', 'level', and 'map' are interchangeable in Unreal.
>
> Finally, <span class="save">Save All</span> is under File...

> [!info]- C. Add Event: OnComponentBeginOverlap Prints A String
> Back to editing `BP_PressurePlate`.
>
> The previous step - Step 2B, constructing the pressure plate - was taking place in the Viewport. Move to the [[Event Graph]] by navigating the tabs you'll find up high.
>
> ![[unrealTutorial_01_137.png]]
>
> Delete the 3 nodes already in there.
>
> ![[unrealTutorial_01_140.png]]
>
> In Components, right-click `BoxCollider` > Add Event > [[OnComponentBeginOverlap]].  This makes a new node in the Event Graph.
>
> ![[unrealTutorial_01_143.png]]
>
> > [!question] Ask your LLM why
> > In the Unreal tutorial I'm following, I'm working on a blueprint.  The tutorial says to add `OnComponentBeginOverlap` by right clicking a collider component, then choosing `Add Event`.  I thought the way to add nodes to the event graph was by right-clicking there and searching.  Why do it this way this time?
>
> On the resulting `OnComponentBeginOverlap` node, find its execution pin — the white arrow shape on the top right. Drag out and search for [[Print String]].
>
> ![[unrealTutorial_01_146.png]]
>
> > [!tip] Tip
> > Remember the terms "node" and "execution pin" (or just "pin"). These are essential moving forward.
>
> In the `Print String` node, type in the field (In String) `Begin Overlap`.
>
> <span class="action">Compile</span>
>
> <span class="save">Save All</span>
>
> Return to the level editor. Drag in `BP_PressurePlate` from the Content Browser. Size and position on the floor.
>
> Press play and test. On the top-left of your game window, `Begin Overlap` should appear.
>
> ![[unrealTutorial_01_149.png]]

> [!info]- D. Behavior Is Only For Our Player
> Back to the Event Graph.  Drag off the `OnComponentBeginOverlap` execution pin and search/add `Cast to BP_PlatformingCharacter` (see [[Cast To|wiki]]). This new node is between the other two.
>
> ![[unrealTutorial_01_152.png]]
>
> > [!tip] Tip
> > If you could not find `BP_PlatformingCharacter`, it is because you skipped Step 1D, above.
>
> Also, connect the parameter `Other Actor to Object` of the middle node, as in the above image. See the blue wire?
>
> Play the game again and ensure `Begin Overlap` still appears.
>
> > [!question] What is "cast"?
> > The pressure plate should only be sensitive to the player character. In order to determine if the actor that just touched (the overlap) is indeed `BP_PlatformingCharacter`, the cast works like a question. This cast only lets the blueprint script proceed - from one node to the next - if the `Object` (parameter) matches.
>
> Because this project is currently so simple, this additional functionality is not needed. But it is good practice moving forward.
>
> <span class="save">Save All</span>

> [!info]- E1. Animate the Pressure Plate Downward
> Drag off the `Print String` pin and add `Add Timeline` (see [[Timeline|wiki]]). Name that new node `PressurePlateTimeline`.
>
> ![[unrealTutorial_01_155.png]]
>
> Double click the new node to get a new interface.
>
> `Add Float Track`.  Name that new `Float` track `PressurePlateHeight`. The plan is to animate the pressure plate's Z position.
>
> ![[unrealTutorial_01_158.png]]
>
> Make `Length` 0.75, which establishes that it will take 0.75 seconds to animate.
>
> Right-click on the graph to add a keyframe at 0 and another at 0.75. Fields will appear allowing you to enter exact values. The keyframe at 0 has a value of 0. At 0.75, enter the value 1.  Think of the 0 and 1 functioning as "Position 0% and Position 100%".
>
> Click the button with arrows pointing up and down to adjust the graph's view so you see everything.
>
> ![[unrealTutorial_01_161.png]]
>
> Back to the Event Graph.  Drag from the `PressurePlateTimeline`'s pin to add `Print String` to the right of it.
> See how one of the parameters is being passed in with the green wire that gets cast to a pink one?
>
> ![[unrealTutorial_01_164.png]]
>
> > [!question] Ask your LLM why
> > In the Unreal tutorial I'm following, the `PressurePlateTimeline` node's parameter, `Pressure Plate Height` passes to the node `Print String`'s `In String` parameter.  It created a small node between those two wires when I did so.  Why does it change the data type?
>
> <span class="action">Compile</span>
>
> Play again to see integer values printed.
>
> Add: `Set Relative Location` (see [[Transformation|wiki]]).  There is more than one to choose from.  Choose the one that includes `(Pressure Plate)`.
>
> ![[unrealTutorial_01_167.png]]
>
> See the node with only `Pressure Plate`?  When you added `Set Relative Location` (see [[Transformation|wiki]]), choosing the one with `Pressure Plate` added a reference variable node.
> (Typically, such reference variables need to be set up manually.)
>
> Right-click the `Set Relative Location` node's `New Location` to "split".  This will split that Vector3 into discrete parameters. Then hook `Pressure Plate Height` to the `New Location Z`.  It will be a green wire.
>
> <span class="action">Compile</span>
> Test the game. The pressure plate now changes location, but there is more work to do.
>
> Time to insert a [[Lerp]] and configure the values and wires as such.
>
> ![[unrealTutorial_01_170.png]]
>
> Be ready to tweak the B value in the `Lerp` node.
>
> > [!question] Ask your LLM why
> > In the Unreal tutorial I'm following, it says to insert a `Lerp` node between a `Timeline` node and a `Set Relative Location` node's `New Location Z` input value.  Why?

> [!info]- E2. Animate the Pressure Plate Upward
> And to make the pressure plate return to its initial location, add two nodes - [[OnComponentEndOverlap]] and `Cast to BP_PlatformingCharacter`.  This closely models what you did in Step E1.
>
> ![[unrealTutorial_01_173.png]]
>
> Here is the completed Event Graph for `BP_PressurePlate`.
>
> <span class="hint">To enlarge any image: Right-click to choose "Open image in new tab".</span>
> ![[unrealTutorial_01_176.png]]
>
> <span class="save">Save All</span>

## 3. The Door Listens and Opens 
---
Jump to (17:07): [https://vimeo.com/1119249385?fl=pl&fe=cm#t=17m7s](https://vimeo.com/1119249385?fl=pl&fe=cm#t=17m7s)

> [!info]- A. Create the Door Blueprint and Configure Geometry
> *Time to make a new blueprint*.  Name it `BP_Door`.
> Refer back to Steps 2A and 2B for general guidance on making a new blueprint and editing it.
>
> Make two cube components.  Scale, position, and name them like the image below.
>
> The wall component will not move, and the door component will move.  Therefore, make sure the door component is at location 0,0,0 before dragging the blueprint asset (from Content Browser) into the scene.
>
> ![[unrealTutorial_01_179.png]]

> [!info]- B. Dispatcher for the Pressure Plate
> *Back to editing the pressure plate blueprint.* In the event graph, find EVENT DISPATCHERS on the left, and click its little plus button. Name the dispatcher `OnBeginPressurePlate`.
>
> Drag it into the Event Graph, choose "call" after letting go. And insert before `PressurePlateTimeline`.
>
> > [!question] Ask your LLM why
> > In the Unreal tutorial I'm following, it says to add a dispatcher, and choose `call` upon adding it to the event graph.  Why?

> [!info]- C. Bind Event in the Door
> *Back in the door blueprint.*
> The Event Graph. Delete the nodes except keep `Event BeginPlay`.
>
> Drag off of `Event BeginPlay` and search for `Bind Event to On Begin Pressure Plate`.  *Need to uncheck Context Sensitive right there?*
> This makes the connection to the work in Step 3B, the event dispatcher.
>
> > [!question] Ask your LLM
> > In the Unreal tutorial I'm following, it says to add the node `Bind Event to On Begin Pressure Plate`.  I needed to check untrue `Context Sensative` in that interface.  Why?
>
> What we are doing here: when the game starts, set the door to be "listening" for the pressure plate to `Call On Begin Pressure Plate`.
>
> ![[unrealTutorial_01_182.png]]
>
> <span class="save">Save All</span>
>
> On the left, click the plus to the right of VARIABLES, name it `MyPressurePlate` and give it a type, `BP_PressurePlate`.
> You will have to search for that type as it is quite specific compared to say, `Int` or `String`.
>
> Keep the variable `MyPressurePlate` selected.   Under Details, click on `Instance Editable` (see [[Blueprint Instances|wiki]]) and `Expose on Spawn`. This opens up the scope of this variable beyond its blueprint, so that it can be a reference to our other blueprint - pressure plate.
>
> ![[unrealTutorial_01_185.png]]
> Notice the open eye icon next to the variable, where you created it on the left.  When you clicked `Instance Editable`, you make it a public variable accessible in the level.  We will take advantage of that setting soon, the fact that the variable is "exposed".
>
> Now you can drag the variable `MyPressurePlate` into the event graph, choose "Get", and drag its wire to the parameter `Target` - found on `Bind Event to On Begin Pressure Plate`.
>
> If you compile, you will get an error. Hold tight.
>
> Right-click in the Event Graph and click `Context Sensitive` back to `true`.
> Search and choose `Add Custom Event` (see [[Custom Events|wiki]]).
>
> Name it `OnPressurePlatePressed`. Connect it to `Event` of `Bind Event to On Begin Pressure Plate`.
>
> Notice it is not the execution pin that draws the red wire.
>
> ![[unrealTutorial_01_186.png]]
>
> Because you exposed the variable `MyPressurePlate` above, we can give the variable a value in the level.
>
> Click on the door in the level. In Details, find the variable, `My Pressure Plate` — hey, here is where you can initialize the variable that you just created. Change its value to `BP_PressurePlate`.
> Success: the door has a reference to the pressure plate.
>
> To make sure things are set, in the door Event Graph, drag off `OnPressurePlatePressed`'s pin, add a print statement with "Door (me) got called". Compile and test to see that string appears when the player character steps on the pressure plate.
>
> <span class="save">Save All</span>
>
> > [!question] Ask your LLM why
> > In an Unreal tutorial I'm following, why might it ask me to make a blueprint variable Instance Editable?

> [!info]- D. Animate the Door with the Timeline Node
> Refer to Steps 2A and 2B to animate the door.  And Step 3C for how to call the pressure plate (so it will close).
> That is, this section - 3D - does not tell you how to animate and call the door, but you can extrapolate based on 2A, 2B, and 3C - with these additional instructions incorporated:
>
> - When you edit the timeline for your door, name the float track `DoorXPosition`.
> - When you are setting the location, the specific node is: `Set Relative Location (Door)`.
> - The pressure plate needs the node `Call On End Pressure Plate` inserted similarly to how you did for `Call On Begin Pressure Plate` in 4C. Look at the complete graph a bit below for details.
>
> ![[unrealTutorial_01_188.png]]
>
> > [!tip] Tip
> > If you double-click a wire, it will add a dot - a reroute node - which is a way to shape your wires for orderliness.
>
> *Below are the two completed event graphs.*
>
> <span class="hint">To enlarge any image on this page: Right-click to choose "Open image in new tab".</span>
>
> **BP_Door**
> ![[unrealTutorial_01_191.png]]
>
> **BP_PressurePlate**
> ![[unrealTutorial_01_176.png]]

## What you can now build

- A trigger zone that detects when the player enters or exits — and ignores other physics objects
- A door (or any object) that slides open and closed smoothly when the player approaches.  
- A pressure plate that broadcasts an event without knowing who's listening — the door binds to that event at startup, so the plate never needs a reference to the door 
- Animated movement along one axis driven by a timeline curve
- The foundational "when the player steps here, something happens over there" pattern that underlies nearly all proximity-based gameplay

## Example deviations you are ready for

- The trigger is fired by BP_FirstPersonCharacter or BP_ThirdPersonCharacter
- The object (such as a door) rotates or scales rather than slides
	- For example, design a floor trap door
- Ready two (or more) "doors" to react to pressure plate trigger 