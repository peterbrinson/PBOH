---
title: "Set Timer by Function Name | Unreal Engine 5.7 Documentation"
source: "https://dev.epicgames.com/documentation/unreal-engine/BlueprintAPI/Utilities/Time/SetTimerbyFunctionName?application_version=5.7"
author:
published:
created: 2026-04-11
description: "Set Timer by Function Name"
tags:
  - "clippings"
---
Set a timer to execute delegate. Setting an existing timer will reset that timer with updated parameters.

Target is Kismet System Library

## Inputs

| Type | Name | Description |
| --- | --- | --- |
| exec | In |  |
| object | Object | Object that implements the delegate function. Defaults to self (this blueprint) |
| string | Function Name | Delegate function name. Can be a K2 function or a Custom Event. |
| real | Time | How long to wait before executing the delegate, in seconds. Setting a timer to <= 0 seconds will clear it if it is set. |
| boolean | Looping | True to keep executing the delegate every Time seconds, false to execute delegate only once. |
| boolean | Max Once Per Frame | For looping timers, whether to execute only once when the timer would otherwise expires multiple times in the current frame. |
| real | Initial Start Delay | Initial delay passed to the timer manager to allow some variance in when the timer starts, in seconds. |
| real | Initial Start Delay Variance | Use this to add some variance to when the timer starts in lieu of doing a random range on the InitialStartDelay input, in seconds. |

## Outputs

| Type | Name | Description |
| --- | --- | --- |
| exec | Out |  |
| struct | Return Value | The timer handle to pass to other timer functions to manipulate this timer. |

