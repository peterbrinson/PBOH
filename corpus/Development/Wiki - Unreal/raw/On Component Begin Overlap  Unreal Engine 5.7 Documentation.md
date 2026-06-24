---
title: "On Component Begin Overlap | Unreal Engine 5.7 Documentation"
source: "https://dev.epicgames.com/documentation/unreal-engine/BlueprintAPI/Collision/OnComponentBeginOverlap"
author:
published:
created: 2026-04-07
description: "On Component Begin Overlap"
tags:
  - "clippings"
---
Event called when something starts to overlaps this component, for example a player walking into a trigger. For events when objects have a blocking collision, for example a player hitting a wall, see 'Hit' events.

Both this component and the other one must have GetGenerateOverlapEvents() set to true to generate overlap events. When receiving an overlap from another object's movement, the directions of 'Hit.Normal' and 'Hit.ImpactNormal'

will be adjusted to indicate force from the other object against this object.

