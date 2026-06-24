---
cssclasses: unreal-tutorial
---

**Previous:** [[UE Tutorial 301 - Landscapes, Gaea and Automaterial]]


## 0. Introduction

If you did not complete [[UE Tutorial 301 - Landscapes, Gaea and Automaterial]] in order to make a landscape, alternatively, you can make a basic landscape with Unreal's built in features.  
https://dev.epicgames.com/documentation/en-us/unreal-engine/creating-landscapes-in-unreal-engine

### Learning Objectives
---
Develop working knowledge of water actors and supporting assets. 


---

## 1. Plugins - Water

Edit > Plugins
Search "water".

Turn on 4 of the choices - you don't need "Procedural Content Generation".

Restart Unreal.  `Restart Now` is handy at the bottom of the current window 

*Important*:
Upon restart, you will get a `Message Log` popup.  
**_Collision Profile settings do not include an entry for the Water Body Collision profile, which is required for water collision to function. Add entry to DefaultEngine.ini?_**
Scroll to the end of the message (scroll right?) and click *Add entry to DefaultEngine.ini?*
This adds a Collision Preset you might need eventually. 
Close `Message Log`


## 2. Place a Lake

Window > Place Actors
Search for water.
Drag `Water Body Lake` onto your landscape.  It might ask a question about layers that you accept.

In the Outliner select `WaterBodyLake`.  Change its location, particularly its Z.


## 3. Learn the Details

In Details, search for `Affects Landscape` and turn off.
(Make sure the actor's Z position is high enough above the landscape to see it at all).  
How does `Affects Landscape` change things?

Also in Details find `Water Waves Asset`.  Click the icon with a folder and magnifying glass; this highlights the asset -  `GerstnerWaves_Lake` - itself in the Content Browser.

![[unrealTutorial_08b_103.png]]

Now `Duplicate` `GerstnerWaves_Lake` and put your name in it, such as `GerstnerWaves_Lake_Peter`.

Return to the `Water Body Lake` Details panel.  Change `Water Waves Asset` to your new file.

Once again, find  `GerstnerWaves_Lake` in the Content Browser so that you can open it.  
In the new window, play with the settings, and see the updates in your scene.  

*Warning*: you might have noticed that Step 3 puts you in the root folder `Engine`.  That is ok if you take notice.  See that it is at the same level as the `Content` folder, where we typically work.

*Warning*: if your landscape uses an `AutoMaterial` (because you followed [[UE Tutorial 301 - Landscapes, Gaea and Automaterial]]), it might be worth returning to that file to disable its water settings. (`MW_UseWater`).
These two water features do not conflict, but having them both can make it difficult to judge which is affecting the shore, for instance.  

![[unrealTutorial_08b_193.png]]
## 4. Place an Ocean

Back to `Place Actors`.  Drag in `Water Body Ocean`.
In a way, this ocean asset behaves in the opposite manner to the lake.  Your landscape becomes an island.


![[unrealTutorial_08b_195.png]]

## 4. Place an River

Now drag in a river.
The prior steps teach you the basics about this body of water as well.

With it selected, in Details, choose the SplineComp.
Spline and its points - this feature is most powerful for rivers.   Control them in Details or in the world.

![[unrealTutorial_08b_197.png]]


Now you can click on the spline : 
- Right-click on the spline to add points.
- With one point selected, try values for - `Depth`, `River Width`, and `Velocity`. 

![[unrealTutorial_08b_198.png]]
![[unrealTutorial_08b_199.png]]

## What you can now build

- A lake with customizable wave behavior (size, choppiness, frequency)
- An ocean that surrounds and defines the landscape as an island
- A river with a spline-controlled path, adjustable depth, width, and current
- Water integrated into an existing landscape, with shoreline interaction from the automaterial

## Example deviations you are ready for

- Multiple lakes in the same level with different wave settings — calm vs. storm, shallow vs. deep
- An archipelago — place the Ocean actor and raise multiple landscape areas to create separate islands
- A river routed deliberately through story locations — use spline points to wind it past specific landmarks
- A river that feeds into a lake — combine both water body types in the same level
