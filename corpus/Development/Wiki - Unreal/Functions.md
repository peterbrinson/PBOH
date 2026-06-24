---
publish: true
---


Reusable blocks of Blueprint logic with a single entry point, optional inputs, and an optional return value. Functions live inside a Blueprint and can be called from the Event Graph, from other functions in the same Blueprint, or from other Blueprints that have a reference to the owning actor.

## Use When

- You have the same sequence of nodes appearing more than twice in a graph — extract it into a function
- You need to return a computed value (functions can have return pins; [[Custom Events]] cannot)
- Another Blueprint needs to call logic that lives on your actor (e.g., a door asks the player "do you have this key?")
- You want to organize complex logic into named, collapsible sections

## How It Works

### Creating a Function

In the **My Blueprint** panel → **Functions** section → click **+**. A new graph tab opens with a function entry node (single exec output pin — this is your one entry point). Press **F2** with the function selected in My Blueprint to rename it. Add logic in the new graph, then call the function from the Event Graph or another function.

### Inputs and Outputs

Click the function entry node and add input/output parameters in the **Details** panel. Inputs become pins on the function call node. Outputs (including a Return Value) let the function send data back to the caller.

### Calling the Function

In the Event Graph (or any other graph), right-click and search for the function's name, or drag off an exec pin and search. The function call node appears with all its input/output pins.

**Gotcha:** If your newly-created function doesn't appear in the search, click **Compile** in the toolbar and search again.

### Calling from Another Blueprint

When you call a function that lives in another Blueprint, the function runs on the Blueprint where it was created. The call gives you access to that logic from outside — you need a reference to the owning actor first (via [[Getting References|any reference pattern]]).

### Functions vs Custom Events

| | Functions | [[Custom Events]] |
|---|---|---|
| **Return value** | Yes — can output data | No — exec output only |
| **Latent nodes** | No — cannot contain Delay, [[Timeline]], etc. | Yes — events can wire to latent nodes |
| **Call from other Blueprints** | Yes — directly callable with a reference | Yes — but through event dispatchers or interface messages |
| **Entry points** | One per function | One per event, but can be called from many places |
| **Best for** | Calculations, checks, reusable logic | Triggers, delegates, wire convergence |

If you find yourself using the same set of nodes more than twice, consider making it a function.

## Common Patterns

**Inventory check across Blueprints:** A player character Blueprint has a `HasKey` function that takes a key name, compares it to the player's inventory array, and returns true or false. A door Blueprint, a chest Blueprint, and an NPC Blueprint all call `HasKey` on the player reference to check before performing their behavior. The logic lives in one place.

**Extracted calculation:** A damage system computes damage from base value, multiplier, and armor. Instead of rebuilding those nodes in every weapon Blueprint, extract them into a `CalculateDamage` function with inputs for each variable and a float return value.

## Related

- [[Custom Events]] — event-based alternative; can use latent nodes but can't return values
- [[Blueprint Interface]] — defines function signatures shared across unrelated Blueprints without needing a direct reference
- [[Getting References]] — required to call functions on other Blueprints

## Source

- [Blueprint Visual Scripting | UE 5.7](https://dev.epicgames.com/documentation/unreal-engine/blueprints-visual-scripting-in-unreal-engine?application_version=5.7) — Functions section, clipped 2026-04-12
- [Creating Functions in Unreal Engine | UE 5.7](https://dev.epicgames.com/documentation/unreal-engine/creating-functions-in-unreal-engine) — step-by-step Print Text example, clipped 2026-04-21

