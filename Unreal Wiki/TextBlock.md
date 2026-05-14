---
publish: true
---


A UI widget that displays text on screen. Found in the **Palette** panel under Common (listed as "Text"). The most basic way to show dynamic information in a [[Widget Blueprint]] — scores, timers, labels, messages.

## Use When

- You need to display text in a HUD or menu
- You need text that updates at runtime (score counter, timer, status message)

## How It Works

Drag **Text** from the Palette into the Hierarchy or Visual Designer of a [[Widget Blueprint]]. It appears in the Hierarchy as `TextBlock`.

### Is Variable

To access a TextBlock from Blueprint code, you must check **Is Variable** (top of the Details panel) to `true`. This creates a named reference in the Widget Blueprint's Event Graph. Without it, the TextBlock exists visually but is invisible to Blueprint logic — you can't read or change its text at runtime.

### Set Text

To update the TextBlock's displayed text, drag its variable reference into the Event Graph and search for **Set Text** (under Content). The Set Text node takes a Text input. For numeric values (like a score), Unreal auto-inserts a **To Text (Integer)** conversion node when you connect an integer pin.

## Common Patterns

**Score display ([[UE Tutorial 3 - Scoring and UI|Tutorial 3]] pattern):**
In the Widget Blueprint's Event Graph, create a [[Custom Events|Custom Event]] (e.g., `OnScoreUpdated`) with an integer parameter (`NewScore`). Drag the TextBlock variable in as a Get, then call Set Text on it. Connect `NewScore` → To Text (Integer) → Set Text. The game Blueprint calls this event whenever the score changes.

## Related

- [[Widget Blueprint]] — the container where TextBlock lives
- [[Create Widget]] — instantiates the Widget Blueprint that contains the TextBlock
- [[Custom Events]] — used to define an update event (e.g., OnScoreUpdated) that triggers Set Text

## Source

- [[UE Tutorial 3 - Scoring and UI|Tutorial 3: Counting Collectables]] — Section 2A-2B (Widget design, Is Variable, Set Text pattern)

