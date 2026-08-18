---
publish: false
role: dreamer — also serves Entrant (shared mechanics)
coverage: motion all taught (501 physics, no Timeline); off-map = the pile-controller dispatch logic (the puzzle's heart) + readability tuning + runtime spawning
---

# The Statue Spiral — Dreamer (example session)

*An example of how PBOH maps a student's project. The student brought a Dreamer idea and developed it across a few turns of questions; this is the settled response. Use it as a model for tone, structure, and how much to say — not as a script to copy. (Entrant and Dreamer share mechanics — this example serves both roles.)*

**Dear student: this is not here to demonstrate a quality idea, or to influence the kind of idea you devise. It is here so that the LLM has a structural reference — a key component of how context engineering works.**

---

Here is a Prototype Plan for your project. Think of this Prototype Plan as the start of your thinking — a conversation with your teammates and your professor.

## Your idea:

> Walking in a ditch about 10 feet deep. Can't climb out, only walk forward. To the left side is a mountain. The ditch is at the base of the mountain. Far away, at the top of the mountain are a few large statues. You come upon a medium-sized statue, blocking your way. Short and wide. It sits with a handful of small rocks, probably resulting from a landslide. You are told you have an ability with the E key. You can pick up the statue and roll it away, opening up your path. After walking again, you come upon another blockage, this time multiple rocks mixed in with an assortment of statues. They stack high, blocking your way. You can pick up one statue and roll it. When it hits the pile, the collective statues and rocks lift a little (with physics) and particular statues roll forward, out of the pile, before the pile drops back down with gravity. Then a handful of rocks and statues roll from the top of the mountain to replenish the pile. The player observes the statues and estimates that rolling particular statues affects other statues. There is some matching pattern to be found that pushes enough statues at once to open up passage. As the player continues walking and facing new piles, it becomes clear that the path is spiraling up the mountain. Gradually you are getting closer to the top — the large statues. And when piles are replenished, they do so faster as their source is closer as you proceed upward. The mood is a little more intense than meditative. The climb will take a while, but there's anticipation; pressure mounts gradually. The statues need to be very recognizable — an animal, a type of person, a household object — so the player can put them into mental categories. A miss means the statue flies upward and joins the replenish objects; success means it rolls to the right, downhill. As the player gets closer to the top, they can make out the large statues, which helps with the matching puzzles — so that gets easier. But with the replenish timing getting faster, the game shifts from puzzle matching to dexterity.

---

This is squarely the Situated Player Role, **The Dreamer** — World as Enigma. The mechanics are also metaphors: the player isn't just solving piles, they're reading them — sorting animals, people, and household objects into mental categories and testing what belongs with what. Whatever the matching rule turns out to be, it will say something, because the player spends the whole climb interpreting it. And the geometry itself carries meaning — a path that can't be left, that spirals toward figures you've seen since the first step. Solve + interpret, both at once.

**Your project:** a forward-only climb up a spiraling ditch, clearing statue-piles by discovering which recognizable figures move which others — with the source of the piles, the great statues at the summit, drawing slowly closer.

**What kind of experience:** A climb where comprehension and pressure rise together. Your miss rule is elegant economy — a wrong roll doesn't just fail, it feeds the mountain: the statue flies up and comes back down at you later. And success rolling right, downhill, gives the player a readable grammar with no UI at all: down-and-away means solved, up-and-back means wrong. The player learns to read outcomes by direction alone.

### A Tradeoff To Consider

A tradeoff — where the player gains one thing only by giving up another — is practical to build into an early iteration. Yours is already designed in, and it falls straight out of the geometry:

The large statues at the summit are the key to the matching puzzle, and they get more legible as you climb. But reading them means looking up, away from the pile — while replenishment gets faster. The information is most available exactly when you have the least time to use it. The player constantly chooses: study the answer, or work the pile. That's a visibility/information tradeoff built into the camera and the level itself — no extra systems needed.

### A reference to look at

**Balance** (1989, Lauenstein brothers, 7-minute animated short — https://www.youtube.com/watch?v=SFH6yRYOI54) — five men on a floating platform that tilts when any one of them moves. It's the purest example of physics-as-meaning: one body shifting an interdependent collective, which is exactly what your pile does when a rolled statue lifts it.

### Worth bringing up with the instructor

What the statues are is the open heart of this. Whether the categories are animals/people/objects, and what the large summit statues mean when the player finally reaches them, is pure theme territory. So is the late-game shift from puzzle matching to dexterity — that's a real arc (cognition early, reflexes late), and whether the summit should demand quickness or comprehension changes what the climb is about. Both are worth a real conversation with the instructor. Want me to add them to your instructor-questions list?

### The part I'm most excited about

The moment the player looks up mid-pile and realizes the path has been spiraling — that the big statues haven't just been scenery, they've been getting closer, and the piles are coming from them. That's the anticipation you named, built right into the level geometry.

### Build order for Unreal Game Engine

*Following this sequence, you'll have something playable from the start. And the last items, if you run out of time, can be dropped. All the referenced tutorials you'll find in corpus/Development/Tutorials - Unreal.*

1. **Player character** — third-person default template, walking. Block out one straight ditch segment with primitive boxes to feel the 10-foot walls and forward-only confinement before any mountain exists.
2. **Tutorial 301 — landscape from a Gaea heightmap:** the mountain, with the spiral ditch sculpted into its base and flank. Atmospheric sky comes with it.
3. **Import statues from Fab** — this project lives or dies on recognizable shapes: a handful of animals (dog, bird, fish), human figures (a soldier, a child), household objects (a chair, a jug, a clock). Plus generic rocks. Get a few in now; full set later.
4. **Tutorial 821 — E-key interaction** with what you're looking at: your pick-up-a-statue verb. Then roll it with physics — **Tutorial 501**: turn on `Simulate Physics` and give it an `Add Impulse` toward the pile, and it rolls and tumbles for real under gravity. 
5. **The matching rule** — give every statue a String variable for its category (Tutorial 102's shared-state pattern). One heads-up: comparing two statues' categories with a **Branch** node ("does this equal that?") is a small Blueprint pattern no tutorial walks through directly — the pieces are taught, the join is yours.
6. **Pile response** — the pile is a stack of **Tutorial 501** physics bodies. When the rolled statue strikes it, the whole pile jostles and lifts on its own — physics, no animation. The matching rule (step 5) then decides the payoff: the matched statues get a targeted `Add Impulse` that rolls them right and downhill (solved), while a miss gets an upward impulse toward the replenish source (your "a mistake feeds the mountain" rule). Tutorial 104's staggered-events pattern fires those impulses one after another, so the direction grammar — down-and-away solved, up-and-back wrong — reads from the very first pile. All physics; no Timeline. One honest flag: what Tutorial 104 doesn't hand you is the live dispatch — on each hit, querying the pile for which statues the rule says should move and commanding each one. That controller is a custom join — see Off-Map.
7. **Replenishment** — **Tutorial 501 (Simple Physics)**. Pre-placed statues and rocks uphill of each pile that, when triggered, switch on `Simulate Physics` and roll down the slope under gravity — a small `Add Impulse` to start them and the mountain does the rest, landing them on the pile. Things rolling downhill are exactly what physics does for free, so this is physics-first. Quickening the release cadence at higher tiers is your mounting pressure — no spawning system needed: the statues are placed, not spawned (true runtime spawning is the one off-map upgrade — see below).
8. **Atmosphere** — Tutorial 701, multiple Post Process Volumes: a distinct color grade per spiral tier, intensifying upward. This is the Dreamer's strongest tool and your "more intense than meditative" dial. Tutorial 702 dust particles when piles settle; Tutorial 104's spatial sound zones for low rumble that grows near the top.
9. **The summit** — a trigger zone (Tutorial 101) at the top for whatever the arrival moment is.

### Off-Map

Good news: every statue and rock moves on taught ground — all **Tutorial 501 (Simple Physics)** (`Simulate Physics` + `Add Impulse`), no Timelines anywhere; 501's own example deviations even include rolling something into a group and letting physics scatter it, which is your pile exactly. What you assemble yourself is the logic that drives them:

- **The pile controller — finding the matches and commanding them.** Physics moves the statues, Tutorial 102 stores each one's category, and Tutorial 104 can fire a set of events in sequence — but the runtime logic that, on each hit, loops the pile, tests every statue against the matching rule, and triggers the ones that should move is a custom Blueprint pattern no tutorial assembles (a ForEach over the pile, a Branch per statue, an impulse on each match). 
- **Tuning physics to stay readable.** Physics scatters honestly, so guaranteeing a matched statue rolls clearly right-and-downhill every time — and a miss clearly up-and-back — takes tuning: targeted impulses on the selected bodies, maybe a physics constraint to channel the direction. The grammar is the craft; 501 gives you the tools, you dial in the legibility.
- **Runtime spawning of replenishment statues** — pre-placed statues that switch on physics (step 7) cover it; true runtime spawning is a look-it-up-later upgrade.

### Two follow-ups

A. **Tell me more about the arrival.** After a whole climb of anticipation, the player finally stands among the large statues. What do they do, or witness, in that moment — and does it answer the matching rule, deepen it, or turn it into something else?

B. **Tell me more about what a miss should feel like.** Your wrong statue flies up to rejoin the replenish pile — your mistake literally coming back down at you. Is that moment meant to land as dread, as dark comedy, or both at once?

---

Want me to save this Prototype Plan to your notes? I'd put it at `student-notes-private/projects/prototype-plan-statue-spiral.md`.
