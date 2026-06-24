---
title: "Timelines in Unreal Engine | Unreal Engine 5.7 Documentation"
source: "https://dev.epicgames.com/documentation/unreal-engine/timelines-in-unreal-engine?application_version=5.7"
author:
published:
created: 2026-04-08
description: "An Overview of Timelines in Unreal"
tags:
  - "clippings"
---
Select an option from the dropdown to see content relevant to it.

**Timeline nodes** are special nodes within Blueprints that provide time-based animation to be quickly designed and played back based on **events**, **floats**,**vectors**, or **colors** that can be triggered at keyframes along the timeline.

Timelines can be edited directly inside the Blueprint editor by **Double-clicking** on the Timeline in the Graph tab or in the My Blueprint tab. They are specifically built for handling simple, non-cinematic tasks such as opening doors, altering lights, or performing other time-centric manipulations to Actors within a scene.They are similar to [level sequences](https://dev.epicgames.com/documentation/unreal-engine/unreal-engine-sequencer-movie-tool-overview) as they both provide values such as floats, vectors, and colors to be interpolated between keyframes along the timeline.

## Inputs and Outputs

![image alt text](https://dev.epicgames.com/community/api/documentation/image/4265bc4d-151d-4597-a271-12fb895bdd74?resizing_type=fit)

image alt text

Timelines come with the following input and output pins:

**Input Pins**

| Item | Description |  |
| --- | --- | --- |
| **Play** | Causes the Timeline to play forward from its current time. |  |
| **Play from Start** | Causes the Timeline to play forward from the beginning. |  |
| **Stop** | Freezes the playback of the Timeline at the current time. |  |
| **Reverse** | Plays the Timeline backwards from its current time. |  |
| **Reverse from End** | Plays the Timeline backwards starting from the end. |  |
| **Set New Time** | Sets the current time to the value set (or input) in the New Time input. |  |
| **New Time** | This data pin takes a float value representing time in seconds, to which the Timeline can jump when the Set New Time input is called. |  |

**Output Pins**

| Item | Description |  |
| --- | --- | --- |
| **Update** | Outputs an execution signal as soon as the Timeline is called. |  |
| **Finished** | Outputs an execution signal when playback ends. This is not triggered by the Stop function. |  |
| **Direction** | Outputs enum data indicating the direction the Timeline is playing. |  |

Timelines may have any number of additional output data pins reflecting the types of tracks created within them. These include Float, Vector, and Event tracks.

