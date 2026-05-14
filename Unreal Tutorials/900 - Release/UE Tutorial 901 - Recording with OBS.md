---
cssclasses: unreal-tutorial
---



*By Yibei He & Peter Brinson*

> *Disclaimer: since being converted from a different platform, this document has not yet been proofread. And many of the images need updating. You are welcome to ask Peter any questions.*

## 0. Introduction

**Learning Objectives:**
- Set up OBS Studio to capture your Unreal Engine viewport
- Configure video, output, and encoder settings for high-quality recording
- Disable Unreal's screen messages for a clean recording
- Export finished video with recommended compression settings

---

## Chapter A: OBS Settings

### A1. Download & Setup OBS

Download from the official website: [obsproject.com/download](https://obsproject.com/download)

Or add it to your Steam library: [OBS Studio on Steam](https://store.steampowered.com/app/1905180/OBS_Studio/)

Both are the same version.

### A2. Choose Your Capture Source

OBS won't automatically detect what you want to record — you need to manually add a source.

Choose **Display Capture** and select your screen.

![[unrealTutorial_11_101.png]]
![[unrealTutorial_11_104.png]]
![[unrealTutorial_11_107.png]]

Right-click the Display Capture source and choose **Transform → Fit to Screen**.

![[unrealTutorial_11_110.png]]

To record your voice, add an **Audio Input Capture** source — same logic.

![[unrealTutorial_11_113.png]]

### A3. Video Settings

Go to **Settings → Video**.

Set **Base Resolution** and **Output Resolution** to match your screen. If your device supports 4K, use `3840×2160` for both.

Set **Common FPS Values** to `30`.

<span class="hint">Films and videos don't need more than 30fps. High frame rates (60/120) matter when playing fast-action games, not when recording for an audience.</span>

![[unrealTutorial_11_116.png]]
![[unrealTutorial_11_119.png]]

### A4. Output Settings

Go to **Settings → Output**.

| Setting | Value |
|---|---|
| Output Mode | Advanced |
| Recording Format | Hybrid MP4 |
| Video Encoder | H.264 |
| Audio Encoder | FFmpeg AAC (default) |

**H.264 encoder by GPU:**
- `NVIDIA NVENC` — NVIDIA discrete graphics
- `AMD HW` — AMD integrated or discrete graphics
- `QuickSync` — Intel integrated or discrete graphics
- `Apple VT` — Apple chips

<span class="hint">Hybrid MP4 has the best compatibility with video editors, and if OBS crashes it will likely save your recording anyway. Most people can just use H.264.</span>

![[unrealTutorial_11_122.png]]

### A5. Encoder Settings

| Setting | Value |
|---|---|
| Rate Control | Constant QP |
| Constant QP | 23 |
| Keyframe Interval | 2s |
| B-Frames | 2 |

Keep all other settings at their defaults.

<span class="hint">Lower QP = higher quality, larger file. 0 or 1 is lossless but very large. 23 is a solid balance. You can increase B-Frames or change the preset based on your GPU/CPU, but these defaults are sufficient for high-quality output.</span>

![[unrealTutorial_11_125.png]]

---

## Chapter B: Recording Recommendations

### B1. Disable Screen Messages in Unreal Engine 5

Press the **`~`** key to open the console, then type:

```
DisableAllScreenMessages
```

This clears warnings, Print Strings, and errors from the screen for a clean recording.

![[unrealTutorial_11_128.png]]

To restore them:

```
EnableAllScreenMessages
```

![[unrealTutorial_11_131.png]]

### B2. Start Recording

![[unrealTutorial_11_134.png]]

When finished, click **Stop Recording**. OBS will show you where the file was saved.

![[unrealTutorial_11_137.png]]

### B3. Beginning and End of the Video

Add a one-second black screen at the start — then your title and any instructions for the audience.

![[unrealTutorial_11_140.gif]]

End with two seconds of black. Consider adding "The End" or "By [Your Name]".

---

## Chapter C: Export from Video Editor

### C1. Video Compression

When exporting from Adobe Premiere, Final Cut Pro, or DaVinci Resolve, use:
- **Codec:** H.264

### C2. Audio Export Values

![[unrealTutorial_11_143.png]]

## What you can now build

- A high-quality screen recording of your Unreal game with no debug messages visible
- A video file ready to import into Premiere, Final Cut, or DaVinci Resolve
- Voice narration recorded alongside gameplay in the same pass
- A deliverable with proper beginning and end — title card, black frames, credit
