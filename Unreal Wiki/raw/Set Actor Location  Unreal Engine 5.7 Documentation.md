---
title: "Set Actor Location | Unreal Engine 5.7 Documentation"
source: "https://dev.epicgames.com/documentation/unreal-engine/BlueprintAPI/Transformation/SetActorLocation?application_version=5.7"
author:
published:
created: 2026-04-07
description: "Set Actor Location"
tags:
  - "clippings"
---
Move the Actor to the specified location.

Target is Actor

## Inputs

| Type | Name | Description |
| --- | --- | --- |
| exec | In |  |
| object | Target |  |
| vector | New Location | The new location to move the Actor to. |
| boolean | Sweep | Whether we sweep to the destination location, triggering overlaps along the way and stopping short of the target if blocked by something. Only the root component is swept and checked for blocking collision, child components move without sweeping. If collision is off, this has no effect. |
| boolean | Teleport | Whether we teleport the physics state (if physics collision is enabled for this object). If true, physics velocity for this object is unchanged (so ragdoll parts are not affected by change in location). If false, physics velocity is updated based on the change in position (affecting ragdoll parts). If CCD is on and not teleporting, this will affect objects along the entire swept volume. Note that when teleporting, any child/attached components will be teleported too, maintaining their current offset even if they are being simulated. Setting the location without teleporting will not update the location of simulated child/attached components. |

## Outputs

| Type | Name | Description |
| --- | --- | --- |
| exec | Out |  |
| struct | Sweep Hit Result | The hit result from the move if swept. |
| boolean | Return Value | Whether the location was successfully set (if not swept), or whether movement occurred at all (if swept). |

