---
publish: true
---


A non-physical Actor that possesses a [[Pawn]] to control its actions. Controllers are the "brain" — they decide what the Pawn does, while the Pawn is the "body" that exists in the world. Controllers have no physical presence, no mesh, no collision.

There are two main types:

- **[[PlayerController]]** — controlled by a human player's input
- **AIController** — controlled by artificial intelligence (behavior trees, state trees, navigation)

## Use When

- You need to understand the Pawn/Controller split (why input and the physical body are separate)
- You're deciding whether logic belongs on the Controller or the [[Pawn]]
- You need to switch which Pawn a player controls at runtime

## How It Works

Controllers take control of a Pawn with the **Possess** function and give it up with **Unpossess**. By default, there is a one-to-one relationship — each Controller controls only one Pawn at a time.

Controllers receive notifications for many events occurring on the Pawn they control. This lets the Controller intercept events and implement behavior that supersedes the Pawn's default response.

A Controller can tick before the Pawn it possesses, minimizing latency between input processing and Pawn movement.

### Why Separate?

The Controller persists even when the Pawn is destroyed. In a deathmatch, when you die and respawn, you get a new [[Pawn]] but keep the same [[PlayerController]]. Data on the Controller (or [[PlayerState]]) survives; data on the Pawn is lost.

## Common Patterns

**Standard single-player setup:**
The [[GameMode]] spawns a [[Pawn]] (or [[Character]]). A [[PlayerController]] is created for the human player and automatically possesses the Pawn. The player's input flows through the PlayerController to the Pawn.

**Runtime Pawn swap:**
Unpossess the current Pawn, then Possess a different one. The PlayerController stays the same — only the physical body changes. Useful for vehicle entry/exit or character switching.

## Related

- [[PlayerController]] — human player's Controller
- [[Pawn]] — the physical body that Controllers possess
- [[Character]] — Pawn subclass for humanoid movement
- [[GameMode]] — determines which Controller and Pawn classes are used
- [[PlayerState]] — per-player data that also persists across Pawn changes

## Source

- [Controllers in Unreal Engine | UE 5.7](https://dev.epicgames.com/documentation/unreal-engine/controllers-in-unreal-engine) — clipped 2026-04-08
- [Gameplay Framework Quick Reference | UE 5.7](https://dev.epicgames.com/documentation/unreal-engine/gameplay-framework-quick-reference-in-unreal-engine?application_version=5.7) — clipped 2026-04-08

