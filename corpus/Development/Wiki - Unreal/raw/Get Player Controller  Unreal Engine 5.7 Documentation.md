---
title: "Get Player Controller | Unreal Engine 5.7 Documentation"
source: "https://dev.epicgames.com/documentation/unreal-engine/BlueprintAPI/Game/GetPlayerController?application_version=5.7"
author:
published:
created: 2026-04-11
description: "Get Player Controller"
tags:
  - "clippings"
---
Returns the player controller found while iterating through the local and available remote player controllers. On a network client, this will only include local players as remote player controllers are not available. The index will be consistent as long as no new players join or leave, but it will not be the same across different clients and servers.

Target is Gameplay Statics

## Inputs

| Type | Name | Description |
| --- | --- | --- |
| integer | Player Index | Index in the player controller list, starting first with local players and then available remote ones |

## Outputs

| Type | Name | Description |
| --- | --- | --- |
| object | Return Value |  |

