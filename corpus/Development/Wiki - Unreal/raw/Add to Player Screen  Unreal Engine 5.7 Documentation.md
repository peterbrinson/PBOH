---
title: "Add to Player Screen | Unreal Engine 5.7 Documentation"
source: "https://dev.epicgames.com/documentation/unreal-engine/BlueprintAPI/UserInterface/Viewport/AddtoPlayerScreen?application_version=5.7"
author:
published:
created: 2026-04-11
description: "Add to Player Screen"
tags:
  - "clippings"
---
Adds the widget to the game's viewport in a section dedicated to the player. This is valuable in a split screen game where you need to only show a widget over a player's portion of the viewport.

Target is User Widget

## Inputs

| Type | Name | Description |
| --- | --- | --- |
| exec | In |  |
| object | Target |  |
| integer | ZOrder | The higher the number, the more on top this widget will be. |

## Outputs

| Type | Name | Description |
| --- | --- | --- |
| exec | Out |  |
| boolean | Return Value |  |

