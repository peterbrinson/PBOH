---
publish: false
route: worldbuilding — Branch D, "has studied the Situated Player Roles" (role-aware route)
role: entrant — also serves Dreamer (shared mechanics); the role-aware companion to worldbuilding-snowglobe
coverage: most taught (101 door triggers, 102 restart + shared state, 104 audio zones, 801 readable text + end-card, 701 atmosphere); scale-change = one-node Set Actor Scale join on Tut 101; off-map = path-based story branching
---

# Scale Doors — Bounded World, role-aware route (example session)

*An example of how PBOH maps a Bounded World project on the route for a student who **has** studied the Situated Player Roles. The student developed the idea across a few turns of questions; this is the settled response. Use it as a model for tone, structure, and how much to say — not as a script to copy. Note the manner specific to this route: the summary names **both axes** — the world's structure (in its own section) and the player's role (named as the Situated Player Role on first mention) — and the build **anchors on the role's tutorial cluster**. The Bounded Worlds vocabulary (the three structures, Meeting the World, Teaching the Rules) is invoked by name as shared course language the student already knows.*

**Dear student: this is not here to demonstrate a quality idea, or to influence the kind of idea you devise. It is here so that the LLM has a structural reference — a key component of how context engineering works.**

---

Here is a Prototype Plan for your project. Think of this Prototype Plan as the start of your thinking — a conversation with your teammates and your professor.

## Your idea:

> The player starts in a room such as an offce. There are two doors. One leads to another room – a domestic room or a library perhaps – in which the player is smaller than the previous. and the other door leads to a room in which they are bigger. The player figures out which door changes scale in what direction. Rooms might be unpassable if the player finds themselves as too small or too big. they start the game over. Text is layed about most rooms in sequence telling some sort of story. I don't know how that story branches based on the player's path but when they have to start over or they win, they see the story as a whole as white text over black background.

---

### The kind of Bounded World this is

This falls squarely into the third Boundary, a Threshold world — whose edge becomes a passage the player crosses, moving from one state or space into another. Your doors are exactly that: not just openings between rooms, but crossings that change what the player is (their scale) on the way through. And there's a beautiful alignment here — the Situated Player Role this idea plays (more on that below) is the Entrant, "World as Threshold." So the world's Boundary and the player's job are the same gesture: a boundary you pass by understanding it.

Worth noting the closed-loop flavor too — the rooms form a complete system with no outside, and a wrong turn loops you back to the start.  This dynamic could lead us to categorize this idea under the Closed Boundary — a world whose edge is felt but not crossed. But the defining move is the crossing, so Threshold is the lens to design from.

### The world you're building

Two shaping beats fall out of that Boundary:

- **How the player meets the world.** Your opening is perfect for this Boundary — an ordinary office, two plain doors, no idea what either does. The first minutes are pure question. Protect that: the room should feel mundane and legible, so the first scale-shift lands as a genuine jolt.
- **How the world teaches its rule.** You've got this right intuitively — the player learns "this door shrinks me, that one grows me" by going through and watching, not by being told. The restart is the world's reset: try, misjudge, start over a little wiser. That's teaching-through-play, the strong version.

### What kind of experience

Your idea fits the Situated Player Role, The Entrant — World as Threshold: the player asking "how does this world work?" and answering it by testing the system and satisfying its conditions. Your loop is the Entrant's exactly: see the two doors (legibility), guess which changes scale in which direction (opportunity), pass through and find out (performance). The wrong-size dead-end and restart is the loop tightening.

One thing to name now: your text-telling-a-story layer, plus the fact that scale itself is so loaded an image (to be small, to be made large), is reaching toward the Dreamer — the same mechanics, but where they also mean something. You said you don't yet know what the story is or how it branches. That's fine, and it's the tell: build the Entrant version cleanly now, and the moment the meaning of the scale-shifts and the text arrives, this becomes a Dreamer project without changing a single mechanic.

### A Tradeoff To Consider

A tradeoff — where the player gains one thing only by giving up another — is practical to build into an early iteration. Right now the door choice has a right answer (the player's job is to find which door does what), which is a puzzle but not yet a tradeoff. A few directions to add one, all inside the verbs you've already got:

- **Make each size useful and limiting.** Small slips under a gap but can't reach a high handle; big reaches the handle but can't fit the gap. Now every room forces a choice of which to be, and you can't have both.
- **One-way doors.** Passing a door commits you and forecloses the other branch — and its text. The player weighs which path (and which fragments of the story) to spend this run on.
- **Put the best text behind the worst risk.** The most revealing fragments live in rooms that demand a precarious scale — to gain the story, you accept a size that might strand you ahead.

We can discuss this further if you want.

### A reference to look at

**Superliminal** (2019, Pillow Castle — https://store.steampowered.com/app/1049410/Superliminal/) — a first-person puzzle game played inside a dream whose whole mechanic is scale: objects resize by how you look at them, and getting through a space is about being the right size for it. It's the closest thing to your idea in feel, and it's dream-framed in a way worth studying as you figure out what your scale-shifts mean.

### Worth bringing up with the instructor

What the story is, what scale means here (smallness and largeness carry so much — powerlessness, childhood, grandiosity, perspective), and how the text branches by path — these are one knot, and they're theme territory: the kind of thing worth a real conversation. It's also the exact hinge that turns this from Entrant into Dreamer. Want me to add it to your instructor-questions list?

### The part I'm most excited about

The first crossing — the player steps through a door and the office furniture suddenly looms three stories tall around them. That single moment teaches the entire rule of the world with no words at all, and it's the kind of image that only works because you committed to first-person scale.

### Build order for Unreal Game Engine

*Following this sequence, you'll have something playable from the start. And the last items, if you run out of time, can be dropped. All the referenced tutorials you'll find in corpus/Development/Tutorials - Unreal.*

1. **Player character** — first-person default template, walking (first-person so the looming/shrinking is felt in the body). Block out the office and its two doors with primitive boxes first.
2. **Build the adjacent rooms at different scales** — still primitives: one room oversized, one undersized, so you can feel "big" and "small" before any art exists.
3. **Import props from Fab** — a desk, bookshelves, domestic furniture. This idea needs recognizable real objects so the scale gag reads. A few now; the full set later.
4. **Tutorial 101 — trigger zones at each door:** the threshold that fires when the player passes through.
5. **The scale change** — on that door trigger, a Set Actor Scale on the player. This is the heart of the game, and it's a wiring job on top of Tutorial 101 — additional functionality, you'll research. First pass: scale the player (a little tuning, since it nudges camera height and walk feel).
6. **Tutorial 801 — readable text fragments** placed in sequence through the rooms (full-screen note, player input locked while reading).
7. **Tutorial 102 — restart + shared game state:** the start-over when the player is stuck, and the state that remembers which fragments they've seen.  Detecting "The player is the wrong size for this room" is likely too difficult to implement for its payoff.  Look to Blue Prince for a reference; there the player chooses to restart when they recognize they cannot proceed. 
8. **Tutorial 801 — the end-card:** the full story as white text on black, shown on win or restart. This is 801's full-screen black-out machinery exactly — not a HUD element.
9. **Assemble the story** — concatenate the collected fragments into that end-card. Linear first (see Off-Map); the path-dependent branching is the upgrade to chase later.
10. **(optional tail)** Tutorial 701 post-process — a distinct color grade per room so each scale-shift also shifts the mood.

### Off-Map

Much of this sits on taught ground — the triggers, the readable text, the end-card, the restart are pieces found in the tutorials, and the scale-the-player on top of Tutorial 101 (#5 above). The one genuinely off-map area is short:

- **The path-based story branching** — varying which fragments appear and in what order based on the player's route is a custom narrative-state system no single tutorial assembles. Tutorial 102 stores the state and 801 shows the card; the logic between them is yours. First pass: a fixed story (all collected fragments shown in a set order) before you build true branching — exactly the "I don't know how it branches yet" you flagged, deferred to when you do.

### Two follow-ups

A. **Tell me more about the contrast** — mundane office, library, domestic rooms against this surreal scale-shifting. Is the tone eerie, playful, dreamlike, unsettling?

B. **Tell me more about the restart moment** — when the player realizes they're the wrong size and the run ends. What do you want that to feel like: frustration, a fresh attempt armed with new knowledge, the loss of the story they'd half-assembled?

---

Want me to save this Prototype Plan? I'd put it at `student-notes-private/projects/prototype-plan-scale-doors.md`.
