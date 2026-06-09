---
cssclasses:
  - unreal-tutorial
---
**Continuing From:** [[UE Tutorial 1 - A Floor Plate Opens A Door|Tutorial 1: A Floor Plate Opens A Door]]

*By Aaron Cheney & Peter Brinson*

## 0. Introduction
---

> [!info]- A. Outcome
> Continuing from [[UE Tutorial 1 - A Floor Plate Opens A Door|Tutorial 1]], the player gathers collectables. The platforming character collect's and the debug UI prints a corresponding incrementing integer. 
> And the game restarts after 5 seconds.

> [!info]- B. Learning Objectives
> Develop working knowledge framework classes that make up Unreal's gameplay framework:
>
> - [[GameModeBase]]
> - [[GameStateBase]]
> - [[PlayerState]]
>
> Also learn about:
> - [[Timer]]
> - set [[Variables|variables]]
> - [[Destroy Actor|DestroyActor]]
>
> Review various from [[UE Tutorial 1 - A Floor Plate Opens A Door|Tutorial 1: A Floor Plate Opens A Door]]

---

## 1. Three Framework Blueprints
---
> [!info]- A. Create the Blueprints
> In the content browser, right click to choose Blueprint Class. This opens the Blueprint Class Picker, where [[GameModeBase]] can be chosen with a button, as it is considered a common choice.  Name the resulting file, `BP_InClassPlatforming_GameMode`.
>
> Do the same to make a [[GameStateBase]] blueprint named `BP_InClass_Platforming_GameStateBase`.  You must search for this in the Blueprint Class Picker. 
>
> Finally, create a [[PlayerState]]: `BP_InClassPlatforming_PlayerState`.
>
> > [!question] Ask your LLM why
> > In the Unreal tutorial I'm following, I just created three framework blueprints — one called `GameModeBase`, one called `GameStateBase`, and one called `PlayerState` — and I don't know what any of them do. Before I go further, can you explain what each one is responsible for in a game?

> [!info]- B. Clarifying GameMode and GameModeBase
> > [!hint] Hold On
> > Unreal's UI and common usage refer to this system generically as "GameMode" — the dropdown in World Settings, blueprint naming conventions, etc.
> >
> > GameMode is also a class, specifically a subclass of GameModeBase.
> >
> > Therefore, the answer to "What class is the GameMode?" might be "GameMode" or "GameModeBase".

---

## 2. The Gamemode
---
> [!info]- A. Update the Gamemode
> In the `GameMode` (named `BP_InClassPlatforming_GameMode`, created in Step 1), select its root in order to update 4 values: `Game State`, `Player Controller`, `Player State`, and `Default Pawn`.
> ![[unrealTutorial_02_101.png]]
>
> > [!hint] Hold On
> > When opening a blueprint for the first time, not seeing the [[Event Graph]] or Viewport? Look for this:
> > ![[unrealTutorial_02_109.png]]
>
> Here are the 4 values you are setting:
> ![[unrealTutorial_02_104.png]]
>
> > [!tip] Tip
> > When editing a blueprint, above the details panel, the Parent class is listed. Pay attention to parent classes in general, moving forward. 
>
> > [!question] Ask your LLM why
> > Following up from my previous question, in the Unreal tutorial I'm following, the `GameMode` blueprint has settings for `Player State Class`, `Default Pawn Class`, and `Player Controller Class`.  Why does it have this control? 

> [!info]- B. Enable the Gamemode
> Follow the below image's dropdown to change the active GameMode.  That is, change it to what was created in Step 1; specifically, change the GameMode from `BP_ThirdPersonGameMode` to `BP_InClassPlatforming_GameMode`.
>
> For reference, Tutorial 1, Step 1D used this interface to change what pawn was used within the active `GameMode`.  
> This *current* step is changing something bigger and broader - the `GameMode` itself. 
> (By the way, the below image shows the moment *before* the change is made).
>
> <span class="hint">To enlarge any image: Right-click to choose "Open image in new tab".</span>
> ![[unrealTutorial_02_107.png]]

> [!info]- C. The Gamemode's Event Graph
> Refer to the below image in order to create blueprint script in `BP_InClassPlatforming_GameMode`.  
>
> *This rest of this step is not walking you through the remaining details.  Combine what you have learned so far with the following instructions and image to complete the rest of this step.*  
>
> The instructions:
> - Drag from `BeginPlay`'s pin and create `[[Set Timer by Event|SetTimerByEvent]]`.  This will count down in seconds.  
> - To create the variable, `ModeTimer`, look to the left side, under My Blueprint.  Click the plus button by [[Variables|VARIABLES]].  Name it ModeTimer of type Float.  <span class="action">Compile</span>.  Next, set Details > Default Value > Mode Timer to 5.0.
> - Drag `ModeTimer` into the Event Graph and choose Get.
> - Create a [[Custom Event|custom event]] - `OnTimerExpired`.
> - Drag off `OnTimerExpired` and create `Open Level`.  `Open Level` will restart the game - make sure you choose the option that includes "by Object Reference".  And set the level parameter to your current level name.  (By the way, a multiplayer game will do this differently).
>
> ![[unrealTutorial_02_110.png]]
>
> <span class="save">Save All</span>

---

## 3. The Player State's Event Graph
---
> [!info]- Scripting the Player State
> Using what you have learned, use these instructions and screenshot to create the below blueprint script in `BP_InClassPlatforming_PlayerState`'s [[Event Graph]].  
>
> The instructions:
> - `OnCollectedCollectable` is a [[Custom Event|custom event]].
> - The node with the `++` is `Increment Int`.
> - Creating the variable `NumberOfCollectables` is similar to how you did so in Step 2C.  But this one is an `Int`.
> - The short node with the green and purple (and no words or symbols) is casting the `Int` to `String`.  It gets created when you connect the `Increment Int` to `Print String`. 
>
> ![[unrealTutorial_02_113.png]]
>
> <span class="save">Save All</span>

---

## 4. Collectable Blueprint
---

> [!info]- A. Create and Configure Collectable's Geometry
> Create a new blueprint of type `Actor`. Name it `BP_Collectable`.
>
> In the Viewport, give it both a sphere component and a sphere collider component.  
>
> In the Details panel, ensure the sphere collider's [[Collision Components|Collision Presets]] is `OverlapAllDynamic`, and the sphere mesh's Collision Presets is `NoCollision`.
>
> ![[unrealTutorial_02_116.png]]

> [!info]- B. Collectable's Event Graph
> Using what you have learned, use these instructions and screenshot to complete the [[Event Graph]]. 
> You do not need the 3 nodes provided when the blueprint is new
>
> The instructions:
> - Node 1 is not a custom event.  Instead, in the Components panel, right click the sphere collider > Add Event > `[[OnComponentBeginOverlap]]`.  When the player touches a collectable, the parameter `Other Actor` gives a reference to that collectable.
> - Node 2 filters the choices of what types of actors (that might have entered the collider) down to that particular player type.
> - Create Node 3 by dragging off of `Cast to BP_PlatformingCharacter` and choosing `GetPlayerState`.
> - What Node 4 does: if `Other Actor` turns out to be `BP_PlatformingCharacter`, time to cast again.  And with a reference to the player gives, we have access that player's `[[PlayerState]]`.
> - Node 5 calls a [[Custom Event|custom event]] that belongs to the `PlayerState` (made in Step 3, above). 
> - Node 6 removes this collectible from the scene.
>
> <span class="hint">To enlarge any image: Right-click to choose "Open image in new tab".</span>
> ![[unrealTutorial_02_121.png]]
>
> > [!question] Ask your LLM why
> > In the Unreal tutorial I'm following, the collectable's Event Graph casts twice — first to `BP_PlatformingCharacter`, then to `BP_InClassPlatforming_PlayerState`. Why does it need to cast twice instead of going directly to the `PlayerState`?
>
> <span class="save">Save All</span>
>
> Place a collectable in the scene and test it.   Place more collectables and test again.  

---

## What you can now build

- Collectible objects that disappear when the player touches them
- A counter that tracks any incrementing value — items collected, doors opened, events triggered
- A level that automatically restarts after a fixed time
- A shared game state (PlayerState) that multiple blueprints can read and write
- Any "use it up" object: evidence items, keys, pickups, consumables


## Example deviations you are ready for

- 





