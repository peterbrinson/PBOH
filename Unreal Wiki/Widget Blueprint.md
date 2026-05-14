---
publish: true
---


A specialized Blueprint for building UI elements using **Unreal Motion Graphics (UMG)**. Widget Blueprints define what the player sees on screen — health bars, score displays, menus, text overlays. They have their own editor with two modes: a **Designer** for visual layout and a **Graph** for Blueprint logic that drives the UI.

Create one via **Content Browser > Add > User Interface > Widget Blueprint** (or right-click in the Content Browser).

![[ue5_1-01-create-widget-blueprint.png]]

Rename or keep the default name in the Content Browser.

![[ue5_1-02-rename-widget-blueprint.png]]

**Double-click** the Widget Blueprint to open it in the **Widget Blueprint Editor**.

![[ue5_1-03-widget-editor.png]]

## Use When

- You need to display information on screen (score, timer, health, collectables count)
- You want to build a menu, HUD overlay, or any 2D interface element
- You need UI elements that respond to game state (text that updates, bars that fill)

## How It Works

The Widget Blueprint Editor has two tabs:

### Designer Tab

The visual layout workspace. Eight panels (numbered in the image below):

![[ue5_1-04-widget-editor-scheme.png]]

| Panel | Purpose |
|---|---|
| **Menu Bar** | Standard file/edit/window menus |
| **Tool Bar** | Common functions: Compile, Save, Browse, Play |
| **Editor Mode** | Switches between Designer and Graph tabs |
| **Palette** | List of available widgets (any class inheriting from UWidget) — drag into the Visual Designer or Hierarchy |
| **Hierarchy** | Tree view of the widget structure — shows parent/child relationships |
| **Visual Designer** | WYSIWYG preview of the UI layout. Ctrl + Mouse-Wheel to change scale (default is 1:1) |
| **Details** | Properties of the currently selected widget |
| **Animations** | Keyframe animation tracks for widgets |

### Graph Tab

Standard Blueprint graph — same as any other Blueprint's Event Graph. This is where you wire up logic: updating text values, responding to button clicks, binding data to UI elements. Functions identically to the graph editor in other Blueprints.

![[ue5_1-05-widget-editor-graph.png]]

### Getting a Widget on Screen

A Widget Blueprint defines the UI layout but doesn't display anything on its own. To make it visible at runtime:

1. [[Create Widget]] — instantiate the Widget Blueprint (requires a class reference and owning player)
2. Display it using one of two nodes:

| Node | Scope | Use For |
|---|---|---|
| **[[Add to Player Screen]]** | Specific player's viewport | HUDs, score displays — respects split-screen |
| **Add to Viewport** | Entire game viewport | Full-screen overlays, menus, reading UIs — covers everything |

**Remove from Parent** removes a widget from whichever display method was used.

## Common Patterns

**HUD score display ([[UE Tutorial 3 - Scoring and UI|Tutorial 3]] pattern):**
Create a Widget Blueprint with a [[TextBlock]]. In the game Blueprint, use [[Create Widget]] to instantiate it, then [[Add to Player Screen]] to display it. When the player collects something, update the TextBlock's text via Set Text (Text) to reflect the new count.

**Full-screen reading overlay ([[UE Tutorial 801 - Inspect an Object|Tutorial 801]] pattern):**
Create a `Note_Widget` with a Canvas Panel, an Image widget (the note texture), and optionally a Background Blur. On interaction, [[Create Widget]] → **Add to Viewport** to display the note full-screen. Use a Flip Flop to toggle: A opens the widget and disables player input, B calls **Remove from Parent** and restores input.

## Related

- [[Create Widget]] — node that instantiates a Widget Blueprint at runtime
- [[Add to Player Screen]] — node that makes an instantiated widget visible
- [[TextBlock]] — the basic text display widget used inside Widget Blueprints
- [[PlayerController]] — owns the widget; required by Create Widget as Owning Player

## Source

- [Widget Blueprints in UMG for Unreal Engine | UE 5.7](https://dev.epicgames.com/documentation/unreal-engine/widget-blueprints-in-umg-for-unreal-engine?application_version=5.7) — clipped 2026-04-10

