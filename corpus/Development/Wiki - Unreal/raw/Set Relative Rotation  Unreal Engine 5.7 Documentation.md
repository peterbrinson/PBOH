---
title: "Set Relative Rotation | Unreal Engine 5.7 Documentation"
source: "https://dev.epicgames.com/documentation/unreal-engine/BlueprintAPI/Transformation/SetRelativeRotation?application_version=5.7"
author:
published:
created: 2026-04-11
description: "Set Relative Rotation"
tags:
  - "clippings"
---
Set the rotation of the component relative to its parent

Target is Scene Component

## Inputs

| Type | Name | Description |
| --- | --- | --- |
| exec | In |  |
| object | Target |  |
| rotator | New Rotation | New rotation of the component relative to its parent |
| boolean | Sweep | Whether we sweep to the destination (currently not supported for rotation). |
| boolean | Teleport | Whether we teleport the physics state (if physics collision is enabled for this object). If true, physics velocity for this object is unchanged (so ragdoll parts are not affected by change in location). If false, physics velocity is updated based on the change in position (affecting ragdoll parts). |

## Outputs

| Type | Name | Description |
| --- | --- | --- |
| exec | Out |  |
| struct | Sweep Hit Result | Hit result from any impact if sweep is true. |

