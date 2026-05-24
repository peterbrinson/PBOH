---
title: "UE Tutorial 202 - MetaHuman Animations"
cssclasses:
  - unreal-tutorial
---


*By Yibei He & Peter Brinson*

## 0. Introduction
---

> [!info]- A. Outcome
> In this tutorial, you will swap the default Unreal mannequin for a custom MetaHuman character. You will master the specific workflow of installing required plugins, retargeting animations to the MetaHuman skeleton, and fixing common issues like foot-sliding using virtual bones and [[Control Rig]].

> [!info]- B. Learning Objectives
> Develop working knowledge of the MetaHuman pipeline:
>
> - Install the MetaHuman plugin and create a custom character
> - Incorporate a MetaHuman into a third-person player [[Blueprint]]
> - Retarget animations to your MetaHuman's skeleton
> - Fix foot IK using virtual bones and [[Control Rig]]
> - Import and play a custom animation from Mixamo

---

## 1. Create a MetaHuman Blueprint
---

> [!info]- A. Install MetaHuman Data
> Go to your **Epic Games Launcher**. Make sure you have **MetaHuman Creator Core Data** in your Unreal Engine Installation Options.
>
> <span class="hint">This might take some time to download. Close Unreal while it installs.</span>
> Don't worry about the version numbers here. 
>
> ![[unrealTutorial_05_101.png]]
> ![[unrealTutorial_05_104.png]]

> [!info]- B. Install Plugins
> In your project, go to Edit → Plugins, search for `MetaHuman`, and check all results. Then restart the project.
>
> ![[unrealTutorial_05_107.png]]

> [!info]- C. Create a MetaHuman Character
> Right-click in your Content Browser, create a `MetaHuman Character`, and name it `MH_MetaHuman1`.  
>
> ![[unrealTutorial_05_110.png]]
>
> If this pop-up appears, click `Enable Missing`.
>
> ![[unrealTutorial_05_113.png]]

> [!info]- D. Edit Your MetaHuman Character
> Customize your MetaHuman Character or choose a preset. This tutorial uses the `Jelena` preset as an example.
> This is the source asset that you will make a Metahuman blueprint from.  Not yet.  In Step 1G. 
>
> ![[unrealTutorial_05_116.png]]
>
> After customizing, move on.

> [!info]- E. Create Rig
> - For a **Player Character**, click `Create Full Rig`.
> - For an **NPC Character**, click `Create Joints Only Rig`.
>
> ![[unrealTutorial_05_119.png]]
>
> <span class="hint">This might take some time.</span>

> [!info]- F. Download Texture
> ![[unrealTutorial_05_122.png]]

> [!info]- G. Assemble MetaHuman (Blueprint)
> ![[unrealTutorial_05_125.png]]
>
> - **Assembly:** `UE Optimized`
> - **Quality:** `Low`
> - **Root Directory:** Keep default
> - **Name:** Type the character name only — no "MH", no "BP". Just `Jelena`. 
>
> The Assembly process will use your MetaHuman Character definition to generate your final **MetaHuman Assembly**—the functional blueprint `BP_Jelena`.
>
> ![[unrealTutorial_05_128.png]]
>
> Hit **Assemble**.  You provided the name `Jelena` and the resulting blueprint will be automatically named `BP_Jelena`.
>


> [!info]- H. Find Your MetaHuman Assembly
> Go to your Content Browser. There should be a new folder called `MetaHumans` containing your MetaHuman Assembly, `BP_Jelena`.
>
> ![[unrealTutorial_05_134.png]]
>
> <span class="save">Save All</span>

---

## 2. Incorporating a MetaHuman to a 3rd-Person Character
---

> [!info]- A. Set Player Blueprint
> Go to the `MetaHumans` folder, duplicate your Blueprint, and keep a backup copy.
>
> ![[unrealTutorial_05_137.png]]
>
> Open the Blueprint and click Class Settings.
>
> ![[unrealTutorial_05_140.png]]
>
> In Details, change the Parent Class to `BP_ThirdPersonCharacter`.
>
> ![[unrealTutorial_05_143.png]]
>
> In Viewport, you should now see all the player components inside your MetaHuman Blueprint.
>
> ![[unrealTutorial_05_146.png]]

> [!info]- B. Adjust Transform and Components
> In Components, move `Body` to be a child of `Mesh`.
>
> ![[unrealTutorial_05_149.png]]
>
> Select the `Body` component and zero-out its Transform.
>
> ![[unrealTutorial_05_152.png]]
>
> Delete the `Root` component.
>
> ![[unrealTutorial_05_155.png]]
>
> Select `Mesh` and uncheck `Visible` under Details.
>
> ![[unrealTutorial_05_158.png]]
>
> Your [[Components]] panel should now look like this:
>
> ![[unrealTutorial_05_161.png]]

> [!info]- C. Small Bug Fix
> <span class="action">Compile</span> — you will get an error. Deleting `Root` causes this.
>
> ![[unrealTutorial_05_164.png]]
>
> **Solution:** In Compiler Results, click the **Target** link to locate the error. Drag the `Body` component out and connect it to the `Target` input of `Get Children Components`.
>
> ![[unrealTutorial_05_167.png]]
>
> <span class="action">Compile</span> — the error is now fixed.

> [!info]- D. Retarget Animation
> Click the `Mesh` component.
>
> ![[unrealTutorial_05_170.png]]
>
> In Details, find the `Anim Class`: `ABP_Unarmed_C`. Click the folder icon to locate the file in the Content Browser.
>
> ![[unrealTutorial_05_173.png]]
>
> Right-click `ABP_Unarmed_C` and choose `Retarget Animations`.
>
> ![[unrealTutorial_05_176.png]]
>
> <span class="hint">This is where the name you gave your MetaHuman earlier matters.</span>
>
> ![[unrealTutorial_05_179.png]]
> ![[unrealTutorial_05_182.png]]
>
> Choose the correct body mesh and `ABP_Unarmed`, then click `Export Animations`. Save to a good folder like `/MetaHumans/Animations/`.
>
> In the Suffix field, enter your character name with an underscore: `_Jelena`.
>
> ![[unrealTutorial_05_185.png]]
> ![[unrealTutorial_05_188.png]]

> [!info]- E. Set Animation
> Back in the `BP_Jelena` Blueprint, select the `Body` component. In Details, set the `Animation Class` to `ABP_Unarmed_Jelena`.
>
> <span class="hint">The suffix you set in the previous step is what makes this name findable.</span>
>
> ![[unrealTutorial_05_191.png]]
>
> <span class="action">Compile</span>
>
> Go to your `GameMode` file and change Default Pawn Class to your new MetaHuman Blueprint.
>
> ![[unrealTutorial_05_194.png]]
>
> <span class="save">Save All</span>
>
> Play your game — your MetaHuman should appear, but her feet will drag on the ground.
>
> ![[unrealTutorial_05_197.gif]]

> [!info]- F. Fix Foot IK — Add Virtual Bone
> <span class="hint">No matter how many MetaHumans you create in the same project, you only need to do this step once — all MetaHumans share the same `Metahuman_base_skel`.</span>
>
> Find the MetaHuman's `Skeletal Mesh` by selecting the `Body` component and locating it in Details.
>
> ![[unrealTutorial_05_200.png]]
> ![[unrealTutorial_05_203.png]]
>
> Open it, then open `Metahuman_base_skel`.
>
> ![[unrealTutorial_05_206.png]]
>
> Right-click on the `root` and add a virtual bone. Name it `ik_foot`.
>
> ![[unrealTutorial_05_209.png]]
>
> Right-click on `VB ik_foot`, add a virtual bone, and search for "foot". Create:
> - `ik_foot_l` (child of `ik_foot`)
> - `ik_foot_r` (child of `ik_foot`)
>
> ![[unrealTutorial_05_212.png]]
>
> Your virtual bone hierarchy should look like this:
>
> ![[unrealTutorial_05_215.png]]

> [!info]- G. Fix Foot IK — Fix ABP with Control Rig
> Open your retargeted `ABP_Unarmed_Jelena` (in the folder where you exported the retargeted animations).
>
> ![[unrealTutorial_05_218.png]]
>
> Open Event Graph (double-click AnimGraph in the left panel).
>
> ![[unrealTutorial_05_221.png]]
>
> Click the `Control Rig` node. In Details, the `Control Rig Class` should already be `CR_Mannequin_FootIK`. Click **Browse** to find it in the Content Browser. Duplicate it and name the copy `CR_Jelena_FootIK`.
>
> ![[unrealTutorial_05_224.png]]
> ![[unrealTutorial_05_227.png]]
>
> Open the new file. In the Rig Hierarchy window, right-click on any bone, choose **Refresh**, and select the Jelena Body Mesh.
>
> ![[unrealTutorial_05_230.png]]
>
> <span class="hint">This will automatically close your Control Rig file — that's normal.</span>
>
> <span class="save">Save All</span>
>
> Re-open the [[Control Rig]] file. Find all the Foot Name references in the nodes and replace them with your virtual bones: `VB ik_foot_foot_l` and `VB ik_foot_foot_r`.
>
> ![[unrealTutorial_05_233.png]]
> ![[unrealTutorial_05_236.png]]
> ![[unrealTutorial_05_239.png]]
>
> Go back to the ABP, click the `Control Rig` node, and replace the `Control Rig Class` with your new `CR_Jelena_FootIK`.
>
> ![[unrealTutorial_05_242.png]]
>
> Hit Play — your MetaHuman is now working!
>
> ![[unrealTutorial_05_245.gif]]

---

## 3. Add Animation to the MetaHuman
---

> [!info]- A. Download an Animation
> Go to **Mixamo** and log in.
>
> ![[unrealTutorial_05_248.png]]
>
> Search for an animation and download it.
>
> ![[unrealTutorial_05_251.png]]
> ![[unrealTutorial_05_254.png]]
>
> **Download settings:**
> - **Format:** `FBX Binary` (.fbx) — Unreal's recommended format
> - **Skin:** "Without Skin" works, but "With Skin" (then delete the mesh after import) is easier
> - **Frames per Second:** `30` — standard for games
> - **Keyframe Reduction:** `None` — preserves all animation keyframes for maximum accuracy

> [!info]- B. Import Animation and Retarget
> Drag the `.fbx` file into the engine.
>
> ![[unrealTutorial_05_257.png]]
>
> Click **Import**.
>
> ![[unrealTutorial_05_260.png]]
>
> Right-click the animation sequence and choose `Retarget Animations`.
>
> ![[unrealTutorial_05_263.png]]
>
> Set the `Target Skeletal Mesh` to your MetaHuman's `Body`.
>
> ![[unrealTutorial_05_266.png]]
>
> Click **Export**.
>
> ![[unrealTutorial_05_269.png]]
>
> <span class="hint">Don't forget to set the Suffix to `_Jelena`.</span>
>
> ![[unrealTutorial_05_272.png]]

> [!info]- C. Play the Animation
> Right-click the imported animation and choose `Create Animation Montage`.
>
> ![[unrealTutorial_05_275.png]]
>
> Back in the Jelena Blueprint's Event Graph, add nodes to trigger the animation montage. Make sure you select the anim instance of the MetaHuman's `Body` component.
>
> ![[unrealTutorial_05_278.png]]
> ![[unrealTutorial_05_281.png]]
>
> Hit Play!
>
> ![[unrealTutorial_05_284.gif]]

## What you can now build

- A photorealistic MetaHuman as your playable character, moving with proper animations
- Custom animations from Mixamo retargeted to your MetaHuman's skeleton
- A player character that plays a specific animation on demand (via Animation Montage)
- A character whose feet plant correctly on uneven ground (foot IK via Control Rig)

## Example deviations you are ready for

- A different MetaHuman appearance — same pipeline, different customization choices in the assembler
- Multiple Mixamo animations retargeted to the same MetaHuman, triggered by different events (a wave, a stumble, a cheer)
- A MetaHuman placed as an NPC rather than the player character — same assembly workflow, skip the GameMode step
- A second MetaHuman in the same project — the virtual bone / foot IK step only needs to happen once for the whole project
