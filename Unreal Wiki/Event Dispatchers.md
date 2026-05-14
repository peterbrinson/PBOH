---
publish: true
---


A broadcast system built into Blueprints. An Event Dispatcher lets one Blueprint announce that something happened, and any number of other Blueprints can listen for that announcement and respond. The broadcaster doesn't need to know who's listening — it just calls the dispatcher, and everyone who bound to it gets notified.

This is the standard way to communicate between Blueprints when the sender shouldn't need a direct reference to every receiver.

## Use When

- One Blueprint needs to notify others that something happened (a pressure plate was stepped on, a door should open, an item was collected)
- Multiple Blueprints need to react to the same event
- You want to decouple Blueprints — the sender doesn't know or care who responds
- You need a cleaner alternative to storing references to every possible listener

## How It Works

### Creating a Dispatcher

In the Blueprint that will **broadcast** the event: find **Event Dispatchers** in the My Blueprint panel → click **+** → name it (e.g., `OnPressurePlatePressed`).

### Three Key Nodes

| Node | What It Does | Used In |
|---|---|---|
| **Call** | Broadcasts the event — fires every bound listener | The Blueprint that owns the dispatcher (the sender) |
| **Bind Event** | Registers a listener — "when this dispatcher fires, run my event" | The Blueprint that wants to respond (the receiver) |
| **Unbind Event** | Stops listening — disconnects a previously bound event | The receiver, when it no longer needs to respond |

**Call:** Drag the dispatcher into the Event Graph and choose **Call**. Place this after whatever triggers the broadcast (e.g., after [[OnComponentBeginOverlap]] fires on a pressure plate).

**Bind Event:** In the listening Blueprint, search for **Bind Event to [DispatcherName]**. This node has a **Target** pin (the object that owns the dispatcher) and an **Event** pin (a [[Custom Events|Custom Event]] that runs when the dispatcher fires). Typically called on **Event BeginPlay** so the listener is ready from the start.

**Unbind:** Search for **Unbind Event from [DispatcherName]** or **Unbind All Events from [DispatcherName]**. Use when a listener should stop responding (e.g., a one-time reaction, or when an actor is about to be destroyed).

### Parameters

Dispatchers can carry data. Click the dispatcher in the My Blueprint panel, then in Details add **Inputs** — these become output pins on the bound Custom Event. For example, a dispatcher `OnScoreChanged` could pass the new score as an Integer parameter.

### The Binding Pattern

The receiver needs a reference to the sender to bind. The typical setup:

1. On the receiver, create an **Object variable** typed to the sender's class (e.g., variable `MyPressurePlate` of type `BP_PressurePlate`)
2. Mark it **Instance Editable** so you can assign it per-instance in the level
3. On **Event BeginPlay**, drag the variable in as a Get → wire it to the **Target** pin of the Bind node
4. Create a [[Custom Events|Custom Event]] → wire it to the **Event** pin of the Bind node
5. In the level, select the receiver instance → set the variable to the specific sender instance in the Details panel

## Event Dispatchers vs Other Communication

| Method | Direction | Coupling | Best For |
|---|---|---|---|
| **Event Dispatchers** | One-to-many broadcast | Loose — sender doesn't know receivers | Pressure plate → doors, score change → UI updates |
| **[[Blueprint Interface]]** | One-to-one call | Loose — caller doesn't know the class | Interacting with any object that implements the interface |
| **Direct reference + [[Custom Events]]** | One-to-one call | Tight — caller holds a typed reference | Simple two-Blueprint communication where you know both classes |

Use **Event Dispatchers** when multiple Blueprints need to react to the same event. Use a **[[Blueprint Interface]]** when you want to call a function on an actor without knowing its class. Use a **direct reference** when the relationship is simple and fixed.

## Common Patterns

**Pressure plate opens a door ([[UE Tutorial 1 - A Floor Plate Opens A Door|Tutorial 1]]):**
`BP_PressurePlate` has two dispatchers: `OnBeginPressurePlate` and `OnEndPressurePlate`. When the player overlaps, it calls the begin dispatcher. `BP_Door` has an Instance Editable variable referencing the pressure plate. On BeginPlay, the door binds its open/close Custom Events to the pressure plate's dispatchers. The pressure plate doesn't know the door exists — it just broadcasts, and the door listens.

**Multiple listeners:**
One pressure plate, three doors. Each door instance binds to the same pressure plate's dispatcher. When the plate calls the dispatcher, all three doors open simultaneously. No changes needed to the pressure plate Blueprint — just add more listeners.

## Related

- [[Custom Events]] — the event type that runs when a dispatcher fires
- [[Blueprint Interface]] — alternative communication for one-to-one calls without casting
- [[Getting References]] — the receiver needs a reference to the sender to bind
- [[Blueprint Instances]] — Instance Editable variables connect specific instances in the level
- [[Variables]] — the reference variable that connects sender and receiver

## Source

- Written from training knowledge — core Blueprint communication feature stable across UE4/UE5
- [[UE Tutorial 1 - A Floor Plate Opens A Door|Tutorial 1]] — pressure plate → door dispatcher pattern (Steps 4B–4C)

