---
title: "Get Player State | Unreal Engine 5.7 Documentation"
source: "https://dev.epicgames.com/documentation/unreal-engine/BlueprintAPI/Game/GetPlayerState?application_version=5.7"
author:
published:
created: 2026-04-08
description: "Get Player State"
tags:
  - "clippings"
---
Returns the player state at the given index in the game state's PlayerArray. This will work on both the client and server and the index will be consistent. After initial replication, all clients and the server will have access to PlayerStates for all connected players.

Target is Gameplay Statics

## Inputs

| Type | Name | Description |
| --- | --- | --- |
| integer | Player State Index | Index into the game state's PlayerArray |

## Outputs

| Type | Name | Description |
| --- | --- | --- |
| object | Return Value |  |

