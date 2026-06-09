---
publish: true
---


A Blueprint node that makes an instantiated widget visible by adding it to the player's viewport. This is the second step after [[Create Widget]] — Create Widget builds the object in memory, Add to Player Screen puts it on screen.

In split-screen games, the widget only appears over its owning player's portion of the viewport.

## Use When

- You've called [[Create Widget]] and need to actually display the result
- You want to control layering order of multiple widgets (ZOrder)

## How It Works

Called on a User Widget instance (the return value from [[Create Widget]]).

### Input Pins

| Pin | Type | Description |
|---|---|---|
| **Target** | User Widget Object Reference | The widget instance to display — typically the return value of [[Create Widget]] |
| **ZOrder** | Integer | Layering priority. Higher numbers render on top of lower numbers. Default 0 is fine for a single HUD widget |

### Output Pins

| Pin | Type | Description |
|---|---|---|
| **Return Value** | Boolean | Whether the widget was successfully added |

## Common Patterns

**Display a HUD at game start ([[UE Tutorial 3 - Scoring and UI|Tutorial 3]] pattern):**
At BeginPlay: [[Create Widget]] → Promote to Variable (save the reference) → Add to Player Screen. The widget stays visible for the rest of the game. Update its contents later through the saved variable reference.

## Related

- [[Create Widget]] — the preceding step; produces the Target input for this node
- [[Widget Blueprint]] — the UI layout being displayed
- [[PlayerController]] — the owning player determines which viewport section the widget appears in

## Source

- [Add to Player Screen | UE 5.7](https://dev.epicgames.com/documentation/unreal-engine/BlueprintAPI/UserInterface/Viewport/AddtoPlayerScreen?application_version=5.7) — clipped 2026-04-11

