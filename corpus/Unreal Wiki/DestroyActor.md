---
publish: true
---


Permanently removes an actor from the scene during gameplay. The actor is gone — its components, collision, and visuals are all removed. Cannot be undone at runtime.

## Use When

- A collectable has been picked up and should disappear
- A projectile hits something and should be removed
- An enemy dies and should be cleaned up
- Any actor has served its purpose and should no longer exist in the level

## How It Works

### Pins

| Pin | Type | Description |
|---|---|---|
| **Target** | Actor | The actor to destroy (usually Self for "destroy this actor") |

Call it and the actor is removed at the end of the current frame. Any code after DestroyActor in the same execution chain still runs, but the actor is marked for destruction and will be gone next frame.

## Common Patterns

**Collectable pickup ([[UE Tutorial 2 - Collectables and Restart|Tutorial 2]] pattern):**
[[OnComponentBeginOverlap]] fires on the collectable's [[Collision Components|Sphere Collision]] → [[Cast To]] verifies it's the player → the [[PlayerState]] updates the collectable count → DestroyActor removes the collectable from the scene.

**Projectile hit:**
A projectile actor's collision triggers → applies damage or effect → DestroyActor removes the projectile.

## Related

- [[OnComponentBeginOverlap]] — commonly fires before DestroyActor in a pickup chain
- [[OnComponentEndOverlap]] — does NOT fire when an actor is destroyed (gotcha)
- [[Collision Components|Sphere Collision]] — the typical collision shape for collectables
- [[PlayerState]] — where the collectable count is tracked before destruction

## Source

- [Destroy Actor | UE 5.7 Documentation](https://dev.epicgames.com/documentation/unreal-engine/BlueprintAPI/Actor/DestroyActor?application_version=5.7) — retrieved 2026-04-07

