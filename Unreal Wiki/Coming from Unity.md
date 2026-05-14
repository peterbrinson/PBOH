---
publish: true
---

# Coming from Unity

If you've used Unity, much of Unreal will feel familiar — and some of it will quietly mislead you. This page maps Unity vocabulary onto Unreal so you can orient quickly, with explicit notes where the analogy breaks.

This is comparison, not equivalence. Treat it as a cheat sheet for re-using your mental model, not a translation guarantee.

## Translates Cleanly

| Unity | Unreal |
| --- | --- |
| GameObject | Actor |
| MonoBehaviour (as a script holder) | [[Components\|Actor Component]] |
| Inspector | Details panel |
| Hierarchy | Outliner |
| Project window | Content Browser |
| Scene | Level |
| Transform | Transform |
| Camera | Camera component |
| Directional / Point / Spot Light | Same names |
| Material | Material (both shader-graph-based) |
| `Start()` | Event BeginPlay |
| `OnTriggerEnter` | [[OnComponentBeginOverlap]] |
| Tag (string) | Actor Tag (string) — see [[Actor Has Tag]] |
| Mathf | Kismet Math nodes / FMath |

These are safe direct swaps.

## Looks the Same, Isn't Quite

**Prefab → Blueprint.** A Unity prefab is a serialized template. An Unreal Blueprint is *also* a class — it carries variables, an event graph, full logic, and an inheritance chain. The closest Unity analog is a prefab plus its attached MonoBehaviour, edited together. See [[Blueprint Instances]].

**MonoBehaviour → Actor Component.** Unity favors composition: many small MonoBehaviours bolted onto a GameObject. Unreal also supports this, but most behavior tends to live *in the Actor Blueprint itself*. Mental shift: Actor-first, not script-stack-first.

**`Update()` → Event Tick.** Tick exists, but it's *discouraged*. Replace with [[Custom Events]], [[Set Timer by Event|timers]], [[Timeline|timelines]], and overlap/hit events. If your first instinct is "I'll do it on Update," pause — there's usually a more event-driven pattern.

**C# script → Blueprint.** This course is Blueprint-first. The shift from "write a script" to "wire a graph" takes a few sessions to internalize. C++ exists in Unreal but is not used here.

**GameObject parenting → Actor attachment.** Unity nests GameObjects in the scene hierarchy. Unreal nests *Components* inside an Actor. Cross-Actor parenting is via attachment at runtime, not the editor hierarchy.

**Animator → [[Animation Blueprint]].** Both are state machines for animation, but Unreal's Animation Blueprint splits into an Anim Graph (per-frame pose evaluation) and an Event Graph (logic that drives state). Don't expect a 1:1 port of an Animator Controller.

**UnityEvent → [[Event Dispatchers|Event Dispatcher]].** Same idea (broadcast, listeners react), different setup. Binding is explicit in Blueprint.

**Physics layers → collision channels / profiles.** Same concept, very different UX. Collision is configured per-component using channel responses, not a numeric layer matrix. See [[Collision Components]].

**Singleton managers → Gameplay Framework.** Unity leaves architecture to you. Unreal *enforces* a framework: [[GameMode]], [[GameState]], [[PlayerController]], [[PlayerState]], plus GameInstance for cross-level persistence. Before reaching for `MyGameManager.Instance`, learn where each piece of state belongs in the framework.

## No Clean Unity Equivalent

- **[[Cast To]]** — Unity's `GetComponent<T>()` returns a typed reference directly. Unreal requires an explicit cast node that verifies the type and only continues if it matches.
- **[[Construction Script]]** — Logic that runs in the editor when an actor is placed or modified, so the actor can configure itself before play.
- **[[Pawn]] / [[Possess]]** — Unreal splits "the body" (Pawn) from "the brain" (Controller). A [[PlayerController]] possesses a Pawn. There is no Unity analog for this split.
- **[[Blueprint Interface]]** — Visual interface contracts between Blueprints. Loosely maps to a C# interface.
- **Gameplay Tags** — A separate, hierarchical tagging system in addition to plain Actor Tags. More powerful, more setup.
- **[[Enhanced Input]]** — Input Action + Input Mapping Context model. Different mental model than Unity's Input Manager or its new Input System.
- **Animation Notifies** — Beat events fired from animation timelines (footstep sounds, attack-frame triggers, etc.).

## Mental Model Shifts

1. **Blueprint-first, not script-first.** You'll wire graphs more than you write code in this course.
2. **Actor + framework, not GameObject + manager.** State has designated homes (PlayerState, GameState, GameInstance, PlayerController) — use them.
3. **Avoid Tick.** Reach for events, timers, and timelines first.
4. **Composition is real but not dominant.** Behavior often lives in the Actor Blueprint, not stacked across components.

## Related

- [[Components]] — what an Actor is built from
- [[Pawn]] — the controllable Actor
- [[GameMode]] — which Pawn spawns, what rules apply
- [[+ UE Wiki Index]] — full wiki index

