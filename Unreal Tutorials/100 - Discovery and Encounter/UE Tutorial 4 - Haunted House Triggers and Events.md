---
title: UE Tutorial 4 - Haunted House Triggers and Events
publish: true
cssclasses:
  - unreal-tutorial
---
**Previous:** [[UE Tutorial 3 - Scoring and UI|Tutorial 3: Scoring and UI]]

*By Yibei He & Peter Brinson*

## 0. Introduction
---
> [!info]- A. Outcome
> In this tutorial, you will build a haunted house in first-person. Each chapter constructs a different type of trigger blueprint—actors that fire logic when a player enters a space. By repeating the "overlap-and-cast" pattern across lights, doors, animations, and sound, you will master the fundamentals of level interactivity.
> 
> Sample outcome: [Video](https://vimeo.com/1186730731/90c148438a?share=copy&fl=sv&fe=ci)

> [!info]- B. Chapters
> - [[#1. Create a First Person Project]]
> - [[#2. Light Trigger Blueprint]]
> - [[#3. Door Trigger Blueprint (Rotate)]]
> - [[#4. Animation Trigger Blueprint (NPC)]]
> - [[#5. Sound Trigger Blueprint]]

> [!info]- C. Learning Objectives
> Review from earlier tutorials:
>
> - `OnComponentBeginOverlap`
> - [[Cast To|Cast to]] character BP
> - [[Variables]] (`Instance Editable`, `Expose on Spawn`)
> - [[Timeline]] + `Lerp`
>
> New:
>
> - First Person template
> - `Array` variables + `For Each Loop`
> - `Functions`
> - Bool "trigger once" pattern
> - `Set Relative Rotation`
> - `Sound` variable (Ambient Sound, spatial audio)
> - Mixamo character import and setup
> - `Character` Blueprint (parent class)
> - `Play Animation` / `SetTimerByEvent`
> - Parent static mesh as rotation axis
> - `Custom Event` + recursion (staggered timing)
> - Functions (atomic operations) vs Event Graph (time-based orchestration)

---

## 1. Create a First Person Project
---
> [!info]- Project Haunted House
> Create a new project using the **First Person** template. Choose Blueprint (not C++). Setting Variant to `None` is fine. Name it `HauntedHouse`. 

---

## 2. Light Trigger Blueprint
---
*When the player enters a room, lights turn on gradually.*

> [!info]- A. Create a Light Trigger Box
> Before we begin, let us focus on the essential parameter of this chapter - `Intensity` - a light's brightness.
> ![[unrealTutorial_04_103.png]]
>
> The first step: create an `Actor` blueprint. Name it `BP_LightOnTrigger`.
> Add a `Box Collision` (see [[Collision Components|wiki]]) component.
>
> > [!hint] Hold On
> > If you don't know how to do this, refer back to [[UE Tutorial 1 - A Floor Plate Opens A Door#A. Make the Blueprint File|Tutorial 1]] on the basics of creating new blueprints and adding components.
>
> ![[unrealTutorial_04_104.png]]
>
> > [!hint] Hold On
> > Assuming you are *not* new to Unreal, you ought to be practicing a file/folder organizational logic that makes sense to you. Be consistent so you can find your files quickly.
> > Make a new folder named `HauntedHouse`? Or add new files to the existing `First Person` folder? 
>
> ![[unrealTutorial_04_107.png]]

> [!info]- B. Create an Overlap Event
> In the Event Graph, add `OnComponentBeginOverlap` from the `Box Collision` component. 
>
> > [!hint] Hold On
> > This project uses the First Person template, so the character class is `BP_FirstPersonCharacter` — not the *platforming* character from earlier tutorials. You must understand what character class you chose in order to choose the correct `Cast To` node.
>
> ![[unrealTutorial_04_110.png]]
>
> Drag from the resulting node to add `Cast to BP_FirstPersonCharacter` (see [[Cast To]]).
> ![[unrealTutorial_04_113.png]]

> [!info]- C. Create a Light Variable
> Create a variable of type `Light`. Name it `LightsThe`.
>
> Why is there a grid icon by the type `Light`? Read on.
> ![[unrealTutorial_04_116.png]]
>
> In the Details panel, change the container type to `Array`.  
> This lets one `BP_LightOnTrigger` control multiple lights.
> ![[unrealTutorial_04_119.png]]
>
> Enable `Instance Editable` and `Expose on Spawn` so lights can be added to the array by assigning them in the level.
> ![[unrealTutorial_04_122.png]]
>
> > [!question] Ask your LLM why:
> > In the Unreal tutorial I'm following, I just changed a variable from a single item to an "Array". Why would I use an Array instead of just creating five separate light variables?

> [!info]- D. Create Timeline & Lerp
>
> #### D1 — Build the Timeline and For Each Loop chain
>
> To make lights turn on gradually, we will use a `Timeline` node (`Add Timeline...`). Remember timelines from [[UE Tutorial 1 - A Floor Plate Opens A Door|Tutorial 1]]?
>
> With the `Timeline` node selected, press F2 to rename it `LightOnTM`.
>
> > [!hint] Hold On
> > See [[Timeline]] and [[Lerp]] in the wiki for details on these nodes.
>
> ![[unrealTutorial_04_125.png]]
>
> Drag from the `Cast To BP_FirstPersonCharacter` success pin.
> *Fix the exec wire: ensure it is connected to* `Play from Start`.
> ![[unrealTutorial_04_127.png]]
>
> Double-click the `Timeline` node to open the editor.
> Create a float track named `LightOnTM`. Set **Length** to `2.0`. Add a keyframe at time `0.0` with value `0.0`, and at time `2.0` with value `1.0`.
>
> ![[unrealTutorial_04_128.png]]
> ![[unrealTutorial_04_131.png]]
>
> Next, back in the Event Graph, create a `Target Intensity` variable (type `Float`, but not an array). Make it `Instance Editable` and `Expose on Spawn`.
>
> What is this for?  `Target Intensity` is the value we want the lights to reach when the player enters the trigger.
>
> ![[unrealTutorial_04_134.png]]
> ![[unrealTutorial_04_137.png]]
>
> Dragging from the `Timeline` pin, add a `For Each Loop`.
> From the Variables panel, drag in `LightsThe` and pass it into `For Each Loop`.
> Drag from the loop's `Array Element` and choose the `Is Valid` node (the one with the `?`).
>
> ![[unrealTutorial_04_139.png]]
>
> Drag an additional blue wire from the loop's `Array Element` and search for `Get Light Component`.
>
> Drag from `Light Component` and search for `Set Intensity`.
>
> ![[unrealTutorial_04_141.png]]
>
> See to the left of `Set Intensity`?  We left space for our next steps.   
>
> Compile. Save All.
>
> #### D2 — Insert the Lerp and run it in the level
>
> Drag from `Light Component` and search for `Get Intensity`. This node lets us access the current `Intensity` parameter of each light.
>
> Insert a `Lerp (float)` node between `Get Intensity` and `Set Intensity`.
> From our VARIABLES panel to the left of the Event Graph, drag the variable `Target Intensity` in and choose Get.
>
> > [!tip] Tip
> > If you double-click a wire, you can add a reroute node (a dot) to clean up the graph.
>
> Connect the float output of the `Timeline` to the `Alpha` pin of the `Lerp`.
>
> <span class="hint">To enlarge any image: Right-click to choose "Open image in new tab".</span>
> ![[unrealTutorial_04_143.png]]
>
> Back in the level, place an instance of `BP_LightOnTrigger` close to where the player will spawn. 
> In its Details panel, assign multiple lights to `LightsThe`, and set a `Target Intensity` (e.g., 10).
>
> ![[unrealTutorial_04_146.png]]
>
> > [!tip] Tip
> > Make the lights' color distinct or place a large cube above the area to block the `Directional Light` so the effect is easier to see.
>
> Set the `Intensity` parameter of each to zero so that they start out dark before the blueprint is triggered.  
> ![[unrealTutorial_04_145.png]]
>
> Test it. The lights should turn on gradually.
>
> #### D3 — Refine to an S-curve
>
> Let's make the "lights on" behavior more nuanced.
>
> Return to the `Timeline` node (`LightOnTM`). Double-click to edit the curve. Right-click the keys, choose **User**, and move the handles to create an "S-curve" for a smoother ramp-up.
> ![[unrealTutorial_04_147.png]]
> ![[unrealTutorial_04_149.png]]

> [!info]- E. Organize Nodes in a Function to Make This Modular
>
> #### E1 — Collapse the nodes into a function
>
> What a level designer wants: when working, to set the lights to their desired "target" (`Target Intensity`).  But then on game start (`BeginPlay`), the lights go dark - they are set to zero by the blueprint script. 
>
> > [!hint] Hold on
> > Imagine you duplicated this script and called those duplicate nodes on `BeginPlay` - you'd have a great deal of redundant code. 
> >
> > In every language, this is where functions are useful and wonderful.
>
> Select every node after the `Timeline` node, including the array connected to the loop.  (See in this screengrab which nodes have an orange selection border).
> Right-click and choose **Collapse to Function**.
>
> ![[unrealTutorial_04_155.png]]
>
> Those nodes will be replaced by a single node. Rename it `SetAllLights`.
>
> ![[unrealTutorial_04_158.png]]
>
> Double-click the node to open the function graph. 
> ![[unrealTutorial_04_161.png]]
>
> > [!hint] Hold on. Take a moment to look at the tabs above, the ones that organize the parts of your blueprint, such as the Event Graph and your new function.  
>
> ![[unrealTutorial_04_163.png]]
>
> #### E2 — Parameterize the function
>
> > [!question] Why are we doing this?
> > What good is taking this script out of the Event Graph and placing it in a function?
> > Answer: We can now call `SetAllLights` whenever we want. Entering a trigger, leaving it, or starting the game—all can use this same code. 
>
> In the `SetAllLights` function, select the purple node. In the Details panel, add an input of type `Float`: `InTargetIntensity`. Also rename `Alpha` to `InAlpha`.
>
> (The `In` prefix communicates these are **Inputs** - often called **Parameters**).
>
> ![[unrealTutorial_04_166.png]]
>
> The inputs (parameters) are now passed in.
> ![[unrealTutorial_04_168.png]]
>
> Delete the `Target Intensity` variable node from inside the function and connect the `InTargetIntensity` input pin instead.
> ![[unrealTutorial_04_170.png]]
> ![[unrealTutorial_04_173.png]]
>
> Return to the Event Graph. Drag the `Target Intensity` variable into the new function node.
> ![[unrealTutorial_04_176.png]]
>
> #### E3 — Wire to BeginPlay
>
> Now, add an `Event BeginPlay` node to your Event Graph. Call `SetAllLights` and set `InTargetIntensity` to `0.0` and `InAlpha` to `1.0`.
> ![[unrealTutorial_04_180.png]]
>
> Play the project. The lights should be dark at start, then brighten when you enter the trigger.
>
> > [!info] For the future
> > Consider incorporating a boolean variable (e.g., `bHasTriggered`) to ensure certain events only fire once.

> [!info]- F. Stagger the Lights
>
> *Final extension for lights and triggers. Right now every light fades in at the same time when the player enters the trigger. Let's make them turn on one after another — i.e. light 1 immediately, light 2 a second later, light 3 a second after that.
> Be warned.  We will sacrifice functionality: the lights will indeed stagger, but will not fade up from zero.*
>
> #### First instinct might be to add a Delay node — and why it fails
>
> Open `SetAllLights`. Try to drag off the For Each Loop and add a `Delay` node. **It won't appear**, even with context-sensitive turned off.
>
> > [!hint] Hold On — why?
> > `Delay` is a **latent** node — its execution spans multiple frames. **Functions in Blueprints do not allow latent nodes.**  
> >
> > Even if we worked around that by leaving everything in the Event Graph and just dropping a `Delay` inside a For Each Loop there, it still would have issues. A `For Each Loop` is **synchronous** — it expects to run all iterations in the same frame. 
> >
> > So we need two things:
> > 1. **Get out of the loop.** Replace it with a Custom Event that calls *itself* with an incremented Index. This pattern is called **recursion**.
> > 2. Extract a small function — `SetOneLight` — that handles "turn one light on." The Event Graph will orchestrate the timing and we will remove both the Timeline node and `SetAllLights` from the `OnComponentBeginOverlap` logic.  
> >
> > This is the foundational division of labor in Blueprint: **Functions for discrete operations, Event Graph for time-based orchestration.**
>
> #### F1 — Make a SetOneLight function
>
> In the **My Blueprint** panel, click the `+` next to **Functions**. Name it `SetOneLight`.
>
> ![[unrealTutorial_04_401.png]]
>
> Inside the function, select the purple entry node. In the **Details** panel, add two inputs:
>
> - **Name:** `InLight`, **Type:** `Light` (single — not an array)
> - **Name:** `InIntensity`, **Type:** `Float`
>
> ![[unrealTutorial_04_404.png]]
>
> Let's build the function.
>
> First, drag from the entry node's exec pin and search for `?Is Valid` (specifially, the question-mark node).  Connect the entry node's `InLight` to `?Is Valid`'s `Input Object`. 
> ![[unrealTutorial_04_407.png]]
> - From the entry node,  drag from `InLight` (again) and type `Light Component` in order to find `Get Light Component`.
> - Drag from `Light Component` to add `Set Intensity`.  Connect the input `InIntensity` to the **New Intensity** pin of the `Set Intensity` node.
> - Don't forget to connect the exec pins. 
>
> ![[unrealTutorial_04_410.png]]
>
> <span class="action">Compile</span>. <span class="save">Save All</span>.
>
> #### F2 — Create the LightOnSequence Custom Event
>
> Back in the Event Graph, right-click in empty space and choose **Add Custom Event...**. Name it `LightOnSequence`.
>
> Select the new event node. In the **Details** panel, click `+` next to **Inputs**:
>
> - **Name:** `InIndex`, **Type:** `Integer`
>
> ![[unrealTutorial_04_413.png]]
>
> #### F3 — Bounds check
>
> Stop the recursion when we run out of lights:
>
> - Drag in the variable, `LightsThe` (Get).  Drag off it and search and add `Length`.
> - Drag from `LightOnSequence`'s `InIndex` output in order to add `<` (Less). Connect `Length` to the second input of the Less node.
> - Drag from `LightOnSequence`'s exec pin and add `Branch`. Wire (red) the Less node's boolean output to the Branch's **Condition** pin.  
>
> ![[unrealTutorial_04_416.png]]
>
> #### F4 — On True, fetch the current light and call SetOneLight
>
> - Once again, drag in the variable `LightsThe` (Get).  Drag from it to add `Get (a copy)`. Connect `InIndex` to the Get node's index pin. 
> - From the Branch's True exec drag to add our function, `SetOneLight`.
> - Back to the first (red) node, `LightOnSequence` - wire `InIndex` to `Get (a copy)`.
> - Drag from `Get (a copy)` to `SetOneLight`'s `InLight`.
> - Drag in the variable `Target Intensity` (Get) and connect it to `InIntensity`.
>
> ![[unrealTutorial_04_420.png]]
>
> #### F5 — Delay, then call yourself with `Index + 1`
>
> - From `SetOneLight`'s exec out → drag → `Delay`. Set **Duration** to `1.0` (your one-second gap between lights).
> - From the Delay's `Completed` pin → drag → search `LightOnSequence`. (Yes, your own event appears — that's the recursion.)
> - Drag from `LightOnSequence` (the blue node we just created) drag from `InIndex` → search `+` (under Operators to find `Add`). Type `1` in the second pin.  
> - And for the first pin of this `Add` node - look all the way from the red `LightOnSequence` node at the beginning of this script...and drag its `InIndex` to the first pin of the `Add` node.  
>
> ![[unrealTutorial_04_423.png]]
>
> The Branch's False pin and the recursion-end happen automatically: when `InIndex` reaches `Length`, the Branch condition is false, the False pin fires (connected to nothing), and the chain stops.
>
> #### F6 — Wire it up at the overlap
>
> Find your `OnComponentBeginOverlap` → `Cast To BP_FirstPersonCharacter` script, the script created in Steps 2D and 2E.  
>
> - Remove what currently runs after the cast success pin - the timeline and the `SetAllLights` call.
> - (Yes - we're removing the timeline, therefore the lights will come on instantly, when it is their turn).
> - From the `Cast To BP_FirstPersonCharacter` → call `LightOnSequence`, connecting this to the script we've worked on above.
> - Ensure `0` is the value in the new `LightOnSequence`'s `InIndex` input.
>
> **Keep `SetAllLights(0.0, 1.0)` on `BeginPlay`** — that's still the right call to start the level dark. The stagger logic is a separate path.
>
> ![[unrealTutorial_04_426.png]]
>
> #### F7 — Test
>
> <span class="action">Compile</span>. <span class="save">Save All</span>. Press play and walk into the trigger. The lights should pop on one at a time, one second apart.
>
> > [!info] For the future
> > Notice the division of labor we ended up with: **`SetOneLight`** is a Function — discrete, fast, reusable, no time involved. 
> > **`LightOnSequence`** is a Custom Event in the Event Graph — it orchestrates *when* things happen using `Delay` and recursion. 
>
> > [!tip] Tip
> > Do you miss the behavior where each light to faded in (not snap on)?  To be coupled with the staggered behavior? You'd need to call your Timeline-driven fade per light instead of `SetOneLight`. That requires either one Timeline per light (impractical) or driving the fade with `SetTimerByEvent` or a `Tick`-based interpolation. 
> > We will not do this here. 

---

## 3. Door Trigger Blueprint (Rotate)
---
*When the player enters a doorway, the door swings open.*

> [!info]- A. Create a Door Trigger Box
> Create an `Actor` blueprint. Name it `BP_DoorTrigger`. Add a `Box Collision` component.
>
> ![[unrealTutorial_04_178b.png]]
> ![[unrealTutorial_04_178a.png]]

> [!info]- B. Create an Overlap Event
> In the Event Graph, add `OnComponentBeginOverlap`. `Cast to BP_FirstPersonCharacter`.
>
> ![[unrealTutorial_04_179.png]]
> ![[unrealTutorial_04_182.png]]

> [!info]- C. Create a Door Mesh
> Add a `Static Mesh` component and rename it `Pivot`. Add a `Cube` component and scale it like a door panel. Rename it `Panel` and move it so one edge is centered with `Pivot`.
>
> **Hierarchy:** `Pivot` should be the parent of `Panel`.
> ![[unrealTutorial_04_184.png]]

> [!info]- D. Create Timeline & Lerp
> Create a `Timeline` node named `DoorOpenTM`. Connect the `Cast` pin to `Play from Start`.
>
> ![[unrealTutorial_04_193.png]]
>
> Set the `Timeline` **Length** to `3.0`. Add a float track named `Relative Rotation` (from 0.0 to 1.0).
>
> ![[unrealTutorial_04_194.png]]
>
> In the Event Graph, right-click the `New Rotation` pin on a `Set Relative Rotation` node and choose **Split Struct Pin**.
>
> ![[unrealTutorial_04_197.png]]
>
> > [!question] Ask your LLM why
> > In the Unreal tutorial I'm following, I'm using "Split Struct Pin" on a Rotation value. Why is it often better to split a pin into X, Y, and Z instead of just plugging in a single Rotation wire?
>
> Use a `Lerp` node to transition between 0 and 90 degrees, and connect the result to the **Z (Yaw)** pin of the `Set Relative Rotation` node.
>
> ![[unrealTutorial_04_203.png]]
> ![[unrealTutorial_04_224.png]]
>
> <span class="save">Save All</span>

---

## 4. Animation Trigger Blueprint (NPC)
---
*When the player enters a space, a Mixamo character plays an attack animation.*

> [!info]- A. Import NPC Character Assets
> Go to **Mixamo**. Find a character and an **Idle** animation. **Download with skin** (.fbx).
>
> ![[unrealTutorial_04_227.png]]
> ![[unrealTutorial_04_230.png]]
> ![[unrealTutorial_04_233.png]]
>
> Find a second animation (e.g., Attack) and download it **Without Skin**.
>
> ![[unrealTutorial_04_236.png]]
>
> Import these into a `Mixamo` folder in Unreal.
> ![[unrealTutorial_04_239.png]]

> [!info]- B. Create an NPC Blueprint
> Create a Blueprint Class. Choose `Character` as the parent class. Name it `BP_Zombie`.
>
> ![[unrealTutorial_04_245.png]]
>
> In the Viewport, assign your Mixamo skeletal mesh to the `Mesh` component.
>
> ![[unrealTutorial_04_248.png]]
> ![[unrealTutorial_04_252.png]]
>
> Change the **Animation Mode** to `Use Animation Asset` and select your **Idle** animation.
>
> ![[unrealTutorial_04_254.png]]
>
> Place `BP_Zombie` in the level and test that it plays the idle animation.
> ![[unrealTutorial_04_257.png]]

> [!info]- C. Create a Play Animation Event
> In the `BP_Zombie` Event Graph, add a `Custom Event` named `Attack`.
> Drag the `Mesh` component in. Drag off it and search for `Play Animation`.
>
> ![[unrealTutorial_04_260.png]]
> ![[unrealTutorial_04_263.png]]
>
> Right-click the `New Anim to Play` pin and choose **Promote to Variable**. Name it `AttackAnim`.
>
> ![[unrealTutorial_04_266.png]]
> ![[unrealTutorial_04_269.png]]
> ![[unrealTutorial_04_272.png]]
> ![[unrealTutorial_04_275.png]]
>
> Use a `Delay` node (set to the length of the animation) and then call `Play Animation` again with the **Idle** animation set to `Looping`.
>
> ![[unrealTutorial_04_278.png]]

> [!info]- D. Create an Animation Trigger Box
> Create a new `Actor` blueprint named `BP_ZombieTrigger`. Add `Box Collision` and `OnComponentBeginOverlap`. `Cast to BP_FirstPersonCharacter`.
>
> ![[unrealTutorial_04_281.png]]
> ![[unrealTutorial_04_284.png]]
>
> Create a variable of type `BP_Zombie` named `Zombie`. Make it `Instance Editable`.
>
> ![[unrealTutorial_04_287.png]]
> ![[unrealTutorial_04_290.png]]
>
>
> Drag the `Zombie` variable in, then call the custom event `Attack`.
>
> ![[unrealTutorial_04_293.png]]
> ![[unrealTutorial_04_296.png]]
> ![[unrealTutorial_04_299.png]]

> [!info]- E. Setup in the Level
> Place the trigger box in the level. In its Details panel, assign the `Zombie` variable to your `BP_Zombie` actor instance.
>
> ![[unrealTutorial_04_302.png]]
> ![[unrealTutorial_04_305.png]]
>
> <span class="save">Save All</span>

---

## 5. Sound Trigger Blueprint
---
*When the player enters a trigger, ambient sound fades in.*

> [!info]- A. Create a Sound Trigger Box
> Standard pattern: `Box Collision`, `OnComponentBeginOverlap`, `Cast to BP_FirstPersonCharacter`.
>
> ![[unrealTutorial_04_308.png]]
> ![[unrealTutorial_04_311.png]]

> [!info]- B. Create a Sound Variable
> Create a variable named `Ambient Sound` of type `Ambient Sound`. Make it `Instance Editable`.
>
> ![[unrealTutorial_04_314.png]]
> ![[unrealTutorial_04_317.png]]
>
> Drag `Ambient Sound` in. Drag off it and search for `Get Audio Component`, then call `Play`.
>
> ![[unrealTutorial_04_320.png]]
> ![[unrealTutorial_04_323.png]]

> [!info]- C. Insert an Ambient Sound in the Level
> Add an `Ambient Sound` actor to the level.
>
> ![[unrealTutorial_04_326.png]]
>
> Enable **Spatialization**. Adjust `Inner Radius` and `Falloff Distance`. Set **Auto Activate** to `false`.
>
> ![[unrealTutorial_04_329.png]]
> ![[unrealTutorial_04_330.png]]
>
> Import a `.wav` file and assign it to the actor.
> ![[unrealTutorial_04_335.png]]

> [!info]- D. Setup the Trigger Box
> In the level, select your `BP_SoundTrigger` and assign the `Ambient Sound` actor to the variable.
>
> ![[unrealTutorial_04_338.png]]
>
> <span class="save">Save All</span>

## What you can now build

- Lights that turn on when the player enters a room — all at once, or in a staggered sequence (one by one)
- A door that swings open on its hinge (rotation-based animation, not just sliding)
- An NPC character imported from Mixamo that reacts to the player's proximity with a triggered animation
- Spatial ambient sound that activates when the player enters a zone, with falloff distance and spatialization
- A single trigger that controls multiple objects at once (an array of lights, sounds, or actors)
- Reusable blueprint functions — the same logic callable from BeginPlay, overlap events, or anywhere else
- A layered atmospheric space: lights, rotating doors, animated characters, and sound all responding to player movement

## Example deviations you are ready for

- One trigger fires multiple events - sound, lights on, actor transformations
- Events on exiting a trigger - lights turn off, for example