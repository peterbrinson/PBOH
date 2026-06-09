---
title: "UE Tutorial 701 - Post-Processing"
cssclasses:
  - unreal-tutorial
---



*By Yibei He & Peter Brinson*


## 0. Introduction
---

> [!info]- A. Outcome
> In this tutorial, you will master the use of Post Process Volumes. You'll learn how to apply global color grading, create localized atmospheric zones, and use blueprint logic to animate visual effects at runtime.

> [!info]- B. Learning Objectives
> Develop working knowledge of the post-processing pipeline:
>
> - Create and configure a Post Process Volume
> - Understand global vs. area-limited post-processing
> - Use post-processing for color grading and special effects
> - Control post-processing from a [[Blueprint]] at runtime
> - Use a Timeline and Lerp to animate post-processing parameters

---

## 1. Setup a Post-Processing Volume
---

> [!info]- A. Create a Post-Processing Volume
> Drag a `Post Process Volume` into your level.
>
> ![[unrealTutorial_07_101.png]]
>
> <span class="hint">When you add a Post Process Volume, it won't show its effect immediately — you'll see a box collision in the viewport instead.</span>
>
> ![[unrealTutorial_07_104.png]]

> [!info]- B. Make It Global
> In the Post Process Volume's Details panel, find `Infinite Extent (Unbound)`.
>
> - **Enabled:** post-processing effects apply to the entire scene, regardless of the volume's bounds.
> - **Disabled:** effects only apply when the camera is inside the volume's area.
>
> ![[unrealTutorial_07_107.png]]
>
> Try changing some parameters to see the difference.
>
> ![[unrealTutorial_07_110.png]]
> ![[unrealTutorial_07_113.gif]]
>
> > [!question] Ask your LLM why
> > In the Unreal tutorial I'm following, I'm using a "Post Process Volume" and setting it to "Infinite Extent (Unbound)." If the effect is global, why do I need a "Volume" actor at all? Why isn't this just a global project setting?
>
> <span class="hint">Leaving `Infinite Extent (Unbound)` disabled is also useful — you can set post-processing to apply only in a specific area, producing localized atmospheric effects.</span>
>
> ![[unrealTutorial_07_116.gif]]

---

## 2. Different Uses of Post-Processing
---

> [!info]- A. Parameter Details
> Post-processing has many parameter categories. Explore them freely, or refer to the [official Unreal documentation on Post Process Effects](https://dev.epicgames.com/documentation/en-us/unreal-engine/post-process-effects-in-unreal-engine).
>
> ![[unrealTutorial_07_119.png]]

> [!info]- B. Regular Color Adjustments
> Post-processing is commonly used for color grading — adjusting tone, saturation, contrast, and exposure.
>
> ![[unrealTutorial_07_122.png]]
> ![[unrealTutorial_07_125.png]]
>
> *Without post-processing vs. with post-processing.*

> [!info]- C. Use It as a Special Effect
> Post-processing can also create dramatic special effects.
>
> ![[unrealTutorial_07_128.png]]
> ![[unrealTutorial_07_131.png]]
>
> You can stack multiple `Post Process Volumes` in the same level.
>
> ![[unrealTutorial_07_134.png]]

---

## 3. Control Post-Processing in Blueprint
---

> [!info]- A. Get the Post-Processing Volume in Your Blueprint
> Expose your `Post Process Volume` as a variable so you can reference it in blueprint logic.
>
> ![[unrealTutorial_07_137.png]]
>


> [!info]- B. Enable or Disable
> You can enable or disable the volume at any point during gameplay.
>
> ![[unrealTutorial_07_140.png]]
> ![[unrealTutorial_07_143.gif]]

> [!info]- C. Use Timeline to Animate Parameters
> Use a `Timeline` node with `Lerp` to smoothly animate specific post-processing parameters over time.
>
> ![[unrealTutorial_07_146.png]]
> ![[unrealTutorial_07_149.gif]]
>
> 

---

## 4. Post-Processing Materials
---

> [!info]- A. Set Materials for Your Post-Processing Volume
> Post-processing's capabilities extend far beyond built-in parameters. If you know how to write materials, `Post Process Materials` can create many advanced effects.
>
> ![[unrealTutorial_07_152.png]]
> ![[unrealTutorial_07_155.png]]
> ![[unrealTutorial_07_158.png]]
>
> This topic is not covered in depth here. For further reading, see the [official documentation on Post Process Materials](https://dev.epicgames.com/documentation/en-us/unreal-engine/post-process-materials-in-unreal-engine).

## What you can now build

- A global color grade that gives the entire scene a consistent mood — desaturated, warm, cold, bleached
- Multiple stacked Post Process Volumes with different effects in different areas of the level

## Example deviations you are ready for

- A localized atmospheric zone that changes visual tone when the player steps inside it — disable Infinite Extent and position the volume
- Post-processing effects that animate in response to gameplay events — fade to black, vignette on entry, color shift on damage
- A dream or memory sequence — a bounded volume with a heavily stylized grade that activates when the player crosses a threshold
- A color shift that signals a game state change (danger, altered consciousness, time running out)
