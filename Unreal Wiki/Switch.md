---
publish: true
---


Routes execution to one of several outputs based on a data value — the multi-way alternative to chaining [[Branch]] nodes. Available in four types: **Switch on Int**, **Switch on String**, **Switch on Name**, and **Switch on Enum**.

## Use When

- A single value determines which of several paths to take (e.g., which dialogue line, which level to load, which item type was picked up)
- You have more than two outcomes — Branch handles two, Switch handles many
- You want cleaner graphs than nested Branch chains

## How It Works

All Switch types share the same structure: one exec input, one data input (matching the switch type), and multiple exec outputs — one per case. A **Default** output fires when the input doesn't match any case.

### Switch on Int

![[newswitchonint.png]]

The most common variant. Outputs are numbered starting from **Start Index** (configurable in the Details panel).

![[switchonint_startindex.png]]

Click **Add Pin** on the node to add cases. Each new pin increments the value by 1. Removing a pin shifts higher-valued pins down to fill the gap.

![[switchonint_addpin.png]]

### Switch on String / Switch on Name

Cases are user-defined text values, set in the Details panel under **Pin Names**.

![[switchonstring_namepin.png]]
![[switchonstring_withpin.png]]

String and Name switches behave identically in practice. Use String for general text, Name for FName values (tag comparisons, asset references).

### Switch on Enum

Automatically generates one output pin per enum value — no manual pin setup. Useful when switching on a custom enum variable (e.g., weapon type, game state, player class).

### Default Pin

All switch types include a **Default** output that fires when no case matches. Remove it by unchecking **Has Default Pin** in the Details panel, or right-click the pin and select **Remove Execution Pin**.

## Common Patterns

**State machine routing:** A game state integer (0 = menu, 1 = playing, 2 = paused, 3 = game over) feeds a Switch on Int. Each output wires to the appropriate state logic. Cleaner than four nested Branches.

**Item type handling:** A pickup item stores its type as a String tag. On overlap, the tag feeds a Switch on String with cases like "Health", "Ammo", "Key" — each wiring to different logic.

## Related

- [[Branch]] — two-way conditional (Switch handles three or more)
- [[Flow Control]] — overview of all flow control nodes
- [[Actor Has Tag]] — often provides the String value that feeds a Switch

## Source

- [Flow Control | UE 4.27](https://dev.epicgames.com/documentation/en-us/unreal-engine/flow-control-in-unreal-engine?application_version=4.27) — Switch Nodes section, clipped 2026-04-12

