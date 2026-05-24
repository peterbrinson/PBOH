---
publish: true
---


Prints a string to the log, and optionally to the screen. The primary debugging tool in Blueprints — the equivalent of `print()` in Python or `console.log()` in JavaScript.

If Print To Log is true, the message appears in the Output Log window. If false, it is logged only as 'Verbose' and generally won't show up.

Target is Kismet System Library.

## Use When

- You need to verify a Blueprint is executing (is this event firing?)
- You want to inspect a variable's value at runtime
- You're debugging overlap events, timers, or game logic flow
- Anything is broken and you want to figure out where

## How It Works

### Input Pins

| Type | Name | Description |
|---|---|---|
| string | **In String** | The text to display. Non-string types auto-convert when connected. |
| boolean | **Print to Screen** | Whether to display text in the viewport. |
| boolean | **Print to Log** | Whether to print to the Output Log window. |
| linearcolor | **Text Color** | Color of the on-screen text. Useful to distinguish multiple Print Strings. |
| real | **Duration** | Seconds the text stays on screen (if Print to Screen is true). Negative value loads duration from config. |
| name | **Key** | If a non-empty key is provided, the message **replaces** any existing on-screen message with the same key. Useful for values that update every frame (score, position) — prevents text stacking. |

### Connecting Non-String Values

You can plug integers, floats, booleans, vectors, and most other types directly into In String. The engine auto-converts to a readable string.

## Common Patterns

**Event verification:**
Drag off any event's execution pin → Print String with "Event fired!" to confirm the event is actually triggering.

**Variable inspection ([[UE Tutorial 2 - Collectables and Restart|Tutorial 2]] pattern):**
After [[Increment Int]] updates a collectable count, Print String shows the current value. Helps verify the count is increasing as expected.

**Updating display with Key:**
Print String with Key = "Score" after every collectable pickup. Each new print replaces the previous one instead of stacking — clean single-line readout.

## Related

- [[Custom Events]] — Print String is often the first node wired to a new Custom Event to verify it fires
- [[OnComponentBeginOverlap]] — commonly debugged with Print String to confirm overlap detection

## Source

- [Print String | UE 5.7](https://dev.epicgames.com/documentation/unreal-engine/BlueprintAPI/Development/PrintString?application_version=5.7) — clipped 2026-04-08

