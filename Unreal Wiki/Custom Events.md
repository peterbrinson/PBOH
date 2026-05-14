---
publish: true
---


User-created events that define entry points for execution in a Blueprint's Event Graph. Unlike built-in events ([[OnComponentBeginOverlap]], Event BeginPlay), Custom Events have no preset trigger conditions — they fire only when explicitly called from elsewhere in the graph, from another graph in the same Blueprint, or via the `CE` or `KE` console commands.

## Use When

- You need to call the same chunk of logic from multiple places in a graph
- Multiple execution wires need to converge on one node — a Custom Event simplifies the wiring
- [[Set Timer by Event]] needs a delegate to fire
- You want to organize a complex graph into readable, labeled sections
- You need a replication point (replicate to clients when called on server)

## How It Works

**Create:** Right-click the Event Graph → **Add Custom Event**. Name it. It produces an event node with an execution output pin.

**Add input parameters:** In the **Details** pane, click **New** under **Inputs**. Name the input and set its type from the dropdown. You can set a **default value** by expanding the parameter entry. Reorder pins with the up/down arrows in the expanded entry.

**Call:** Right-click → **Call Function → [Custom Event Name]**. The call node has input data pins matching the event's parameters. Unlike regular Events (which can only appear once per graph per type), you can place multiple call nodes for the same Custom Event throughout a graph.

**Cross-graph:** Custom Events can be set up in one graph of a Blueprint and called from another graph in the same Blueprint.

**Wire simplification:** When multiple execution paths need to reach the same logic, route them through calls to one Custom Event instead of wiring them all directly. The event and the call nodes don't need to be located near each other in the graph.

### Replication (Multiplayer)

In the Details pane, set whether the event should be **replicated on all clients when called on the server**.

### Troubleshooting

- **"Unable to find function with name [CustomEvent]"** warning bar on the node → **Compile** your Blueprint.
- **Changing the number of input parameters** causes errors on all existing call nodes at next compile. Fix: right-click the call node(s) → **Refresh Nodes**, or use **File → Refresh All Nodes** to refresh the entire graph.

## Common Patterns

**Timer delegate ([[UE Tutorial 2 - Collectables and Restart|Tutorial 2]] pattern):**
Drag off [[Set Timer by Event]]'s Event pin → Add Custom Event → name it "OnTimerExpired." Wire the event's execution to [[Open Level]] or any end-of-timer logic.

**Branch convergence (source example):**
A Branch node checks a boolean. Both the True and False paths call the same Custom Event (with different string parameters) to [[Print String]]. Keeps the print logic in one place instead of duplicating nodes.

## Related

- [[Event Dispatchers]] — Custom Events are the listener side of a dispatcher broadcast
- [[Functions]] — reusable logic alternative; can return values but can't use latent nodes
- [[Set Timer by Event]] — requires a Custom Event as its delegate
- [[Print String]] — commonly the first node wired to a new Custom Event to verify it fires
- [[GameMode]] — often contains Custom Events for game-rule triggers

## Source

- [Custom Events in Unreal Engine | UE 5.7](https://dev.epicgames.com/documentation/unreal-engine/custom-events-in-unreal-engine?application_version=5.7) — clipped 2026-04-08

