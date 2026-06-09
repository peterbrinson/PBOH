---
publish: true
---


A Blueprint node that instantiates a [[Widget Blueprint]] at runtime. This is the first step in displaying any UI — it creates the widget object in memory, but does not make it visible. You must follow it with [[Add to Player Screen]] to actually show it.

## Use When

- You need to display a HUD element, menu, or any UI built in a Widget Blueprint
- You want to create a widget once (e.g., at BeginPlay) and keep a reference to update it later

## How It Works

### Input Pins

| Pin | Type | Description |
|---|---|---|
| **Class** | User Widget Class Reference | The Widget Blueprint class to instantiate (select from dropdown) |
| **Owning Player** | Player Controller Object Reference | The player who owns this widget — typically the return value of [[Get Player Controller]] |

### Output Pins

| Pin | Type | Description |
|---|---|---|
| **Return Value** | User Widget Object Reference | The newly created widget instance. Store this in a variable if you need to update the widget later (e.g., changing a [[TextBlock]]'s text) |

## Common Patterns

**Create and display a HUD ([[UE Tutorial 3 - Scoring and UI|Tutorial 3]] pattern):**
At BeginPlay, call Create Widget with your HUD Widget Blueprint class. Pipe [[Get Player Controller]] (index 0) into Owning Player. Promote to Variable on the Return Value to save a reference. Then call [[Add to Player Screen]] on the return value to make it visible.

## Related

- [[Widget Blueprint]] — the class you pass into the Class pin
- [[Add to Player Screen]] — the next step after Create Widget; makes it visible
- [[Get Player Controller]] — provides the Owning Player input
- [[Getting References]] — Promote to Variable saves the return value so you can reference the widget later

## Source

- [Create Widget | UE 5.7](https://dev.epicgames.com/documentation/unreal-engine/BlueprintAPI/UserInterface/CreateWidget?application_version=5.7) — clipped 2026-04-11

