---
publish: true
---


Sets a timer that executes a delegate ([[Custom Events|Custom Event]]) after a specified duration. The timer runs in the background — execution continues past this node immediately, and the connected event fires later when the time elapses. Setting an existing timer will reset that timer with updated parameters.

Two variants exist:

| Node | How You Specify the Delegate |
|---|---|
| **Set Timer by Event** | Drag off the **Event** pin → Add Custom Event. The event is wired visually. |
| **Set Timer by Function Name** | Type the name of a Custom Event or function as a string in **Function Name**. Can also specify a different **Object** to call it on (defaults to self). |

Both share the same timer pins (Time, Looping, etc.) and return a Timer Handle. Use **by Event** when the timer and the event live in the same graph — it's visual and less error-prone. Use **by Function Name** when calling an event by string is more convenient, such as when the event name is determined at runtime or lives on a different object.

## Use When

- You need a countdown timer (game clock, respawn delay, cooldown)
- You want to delay an action without pausing the game
- You need a repeating event on an interval (e.g., spawn an enemy every 5 seconds)

## How It Works

### Input Pins

| Type | Name | Description |
|---|---|---|
| delegate | **Event** | The [[Custom Events\|Custom Event]] to call when the timer fires. Drag off this pin and select Add Custom Event to create one. |
| real | **Time** | Seconds before the delegate fires. Setting to <= 0 clears the timer if it exists. |
| boolean | **Looping** | True: repeat every Time seconds. False: fire once. |
| boolean | **Max Once Per Frame** | For looping timers — if the timer would expire multiple times in one frame, execute only once. |
| real | **Initial Start Delay** | Extra delay in seconds before the timer starts its first countdown. |
| real | **Initial Start Delay Variance** | Random variance added to Initial Start Delay, in seconds. Use instead of a separate random range node. |

### Output Pins

| Type | Name | Description |
|---|---|---|
| struct | **Return Value** | Timer Handle — pass to Clear and Invalidate Timer by Handle, Pause Timer by Handle, or Unpause Timer by Handle. |

## Common Patterns

**Game countdown ([[UE Tutorial 2 - Collectables and Restart|Tutorial 2]] pattern):**
In the [[GameMode]]'s Event BeginPlay → Set Timer by Event with Time = 60 and Looping = false. The delegate [[Custom Events|Custom Event]] calls [[Open Level]] to restart when time runs out.

**Repeating spawner:**
Set Timer by Event with Looping = true and Time = 3.0. The delegate spawns an enemy actor. Clear the timer when enough enemies exist.

**Delayed action:**
A door starts closing 2 seconds after the player leaves. [[OnComponentEndOverlap]] → Set Timer by Event (Time = 2, Looping = false) → delegate plays the close [[Timeline]].

**Looping trace ([[UE Tutorial 821 - Base Interactive System (WIP)|Tutorial 821]] pattern):**
Set Timer by Function Name with Function Name = `Detect Sight`, Time = 0.1, Looping = true. This calls the Detect Sight event every 0.1 seconds to run a [[Traces|Sphere Trace]] checking what the player is looking at. Promote the Return Value to a variable (`Trace Timer`) so you can call **Clear and Invalidate Timer by Handle** to stop the loop when the player leaves the interaction radius.

## Related

- [[Custom Events]] — the event type wired into the delegate pin
- [[Timeline]] — alternative for time-based behavior when you need per-frame updates (lerping, animation)
- [[GameMode]] — common owner of game-level timers
- [[Open Level]] — frequently called by a timer's delegate to restart the game

## Source

- [Set Timer by Event | UE 5.7](https://dev.epicgames.com/documentation/unreal-engine/BlueprintAPI/Utilities/Time/SetTimerbyEvent?application_version=5.7) — clipped 2026-04-08
- [Set Timer by Function Name | UE 5.7](https://dev.epicgames.com/documentation/unreal-engine/BlueprintAPI/Utilities/Time/SetTimerbyFunctionName?application_version=5.7) — clipped 2026-04-11
- [[UE Tutorial 821 - Base Interactive System (WIP)|Tutorial 821]] — looping trace timer pattern

