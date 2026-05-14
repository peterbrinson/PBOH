---
title: "Possess | Unreal Engine 5.7 Documentation"
source: "https://dev.epicgames.com/documentation/unreal-engine/BlueprintAPI/Pawn/Possess?application_version=5.7"
author:
published:
created: 2026-04-11
description: "Possess"
tags:
  - "clippings"
---
Handles attaching this controller to the specified pawn. Only runs on the network authority (where HasAuthority() returns true). Derived native classes can override OnPossess to filter the specified pawn. When possessed pawn changed, blueprint class gets notified by ReceivePossess and OnNewPawn delegate is broadcasted.

Target is Controller

## Inputs

| Type | Name | Description |
| --- | --- | --- |
| exec | In |  |
| object | Target |  |
| object | In Pawn | The Pawn to be possessed. |

## Outputs

| Type | Name | Description |
| --- | --- | --- |
| exec | Out |  |

