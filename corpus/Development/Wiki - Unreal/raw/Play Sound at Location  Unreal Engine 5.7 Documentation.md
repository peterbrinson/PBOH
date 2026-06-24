---
title: "Play Sound at Location | Unreal Engine 5.7 Documentation"
source: "https://dev.epicgames.com/documentation/unreal-engine/BlueprintAPI/Audio/PlaySoundatLocation?application_version=5.7"
author:
published:
created: 2026-04-11
description: "Play Sound at Location"
tags:
  - "clippings"
---
Plays a sound at the given location. This is a fire and forget sound and does not travel with any actor. Replication is also not handled at this point.

Target is Gameplay Statics

## Inputs

| Type | Name | Description |
| --- | --- | --- |
| exec | In |  |
| object | Sound | sound to play |
| vector | Location | World position to play sound at |
| rotator | Rotation | World rotation to play sound at |
| real | Volume Multiplier | A linear scalar multiplied with the volume, in order to make the sound louder or softer. |
| real | Pitch Multiplier | A linear scalar multiplied with the pitch. |
| real | Start Time | How far in to the sound to begin playback at |
| object | Attenuation Settings | Override attenuation settings package to play sound with |
| object | Concurrency Settings | Override concurrency settings package to play sound with |
| object | Owning Actor | The actor to use as the "owner" for concurrency settings purposes. Allows PlaySound calls to do a concurrency limit per owner. |
| object | Initial Params |  |

## Outputs

| Type | Name | Description |
| --- | --- | --- |
| exec | Out |  |

