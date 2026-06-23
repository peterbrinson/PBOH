---
title: "Play Animation | Unreal Engine 5.7 Documentation"
source: "https://dev.epicgames.com/documentation/unreal-engine/BlueprintAPI/Components/Animation/PlayAnimation?application_version=5.7"
author:
published:
created: 2026-04-11
description: "Play Animation"
tags:
  - "clippings"
---
Animation play functions \*

- These changes status of animation instance, which is transient data, which means it won't serialize with this component
- Because of that reason, it is not safe to be used during construction script
- Please use OverrideAnimationData for construction script. That will override AnimationData to be serialized

Target is Skeletal Mesh Component

## Inputs

| Type | Name | Description |
| --- | --- | --- |
| exec | In |  |
| object | Target |  |
| object | New Anim to Play |  |
| boolean | Looping |  |

## Outputs

| Type | Name | Description |
| --- | --- | --- |
| exec | Out |  |

