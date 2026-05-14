---
publish: true
---


Transfers control of a [[Pawn]] to a [[Controller]]. The [[PlayerController]] that calls Possess detaches from its current Pawn (automatically calling **UnPossess**) and attaches to the new one. After possession, all input flows through the new Pawn. This is the core mechanic behind character swapping, vehicle entry, drone control, and any situation where the player needs to control a different body.

## Use When

- You want the player to switch between multiple characters at runtime
- A player enters a vehicle, mounts a turret, or takes control of a camera
- You need a "spectator to player" transition (possess a Pawn to start playing)
- You want to release control entirely (UnPossess → spectator-like state)

## How It Works

### Key Pins

| Pin | Type | Description |
|---|---|---|
| **Target** | Controller | The controller that will possess the pawn. Usually the result of [[Get Player Controller]]. |
| **In Pawn** | Pawn (Object) | The [[Pawn]] or [[Character]] to take control of. |

Target is a [[Controller]] reference. Drag off [[Get Player Controller]]'s Return Value and search for "Possess" — it appears under the Pawn category:

![[pawns7b.png]]

Note that **Un Possess** also appears here. UnPossess takes no In Pawn — it simply releases whatever the controller currently owns.

### Automatic UnPossess

When Possess is called, the controller automatically UnPossesses its current Pawn first. You do not need to call UnPossess manually before possessing a new Pawn.

### Network Authority

Possess only runs where `HasAuthority()` returns true — on the server in multiplayer, or anywhere in standalone. Derived classes can override `OnPossess` to filter or reject possession attempts. When possession changes, the Blueprint receives a `ReceivePossess` event and the `OnNewPawn` delegate broadcasts.

## Common Patterns

**Character swapping in a [[Level Blueprint]] ([[UE Tutorial 201 - Pawn Possession (WIP)|Tutorial 6]] pattern):**
Place additional characters in the level. In the Level Blueprint, select all the characters in the World Outliner and right-click in the graph → **Create References to selected Actors** to batch-create reference nodes:

![[pawns4b.png]]

Add input events (keyboard keys or [[Enhanced Input|Input Actions]]) for each character. Wire each input event's Pressed pin to its own Possess node. All Possess nodes share a single [[Get Player Controller]] for the Target pin. Connect each character reference to the corresponding Possess node's In Pawn pin:

![[pawns9.png]]

The player can now press a key to jump into any placed character. The controller automatically releases the previous one.

**Cache the original character:**
At Begin Play, store a reference to the player's starting Pawn (via **Get Player Pawn** → **Promote to Variable**). This lets you return to the original character later — without it, you lose track of which Pawn the player started with.

**Vehicle / turret entry:**
The Pawn being possessed doesn't have to be a humanoid [[Character]]. It can be a car, a mounted gun, a surveillance camera — anything that extends Pawn. Possess it to give the player control; UnPossess when they exit.

## Related

- [[Controller]] — the base class that owns the Possess/UnPossess functions
- [[PlayerController]] — the human-input controller; provides the Target for Possess
- [[Pawn]] — what gets possessed; the physical representation in the world
- [[Character]] — common Pawn subclass used with Possess for humanoid swapping
- [[Level Blueprint]] — where possession logic typically lives (references placed actors)
- [[Enhanced Input]] — Input Actions trigger the possession swap (e.g., press 1/2/3 to switch characters)
- [[Getting References]] — possession requires references to the target Pawns
- [[Get Player Controller]] — provides the controller reference for the Target pin

## Source

- [Possess | UE 5.7](https://dev.epicgames.com/documentation/unreal-engine/BlueprintAPI/Pawn/Possess?application_version=5.7) — node reference, clipped 2026-04-11
- [Possessing Pawns in Unreal Engine | UE 5.5](https://dev.epicgames.com/documentation/unreal-engine/possessing-pawns-in-unreal-engine?application_version=5.5) — implementation guide, clipped 2026-04-11
- [[UE Tutorial 201 - Pawn Possession (WIP)|Tutorial 6]] — character swapping with Level Blueprint

