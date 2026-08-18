---
publish: false
route: worldbuilding — Branch D, "hasn't studied the Situated Player Roles" (no-SPR route)
coverage: all features taught (301 landscape/sky, 702 Niagara snow, 101 trigger, 401 materials, 701 post-process, 801 fade, 104 sound); off-map = warped-sky distortion shader + Unreal Camera Shake
---

# The Snow Globe — Worldbuilding 

*An example of how PBOH maps a Bounded Worlds project on the route for a student who hasn't studied the Situated Player Roles. The student developed the idea across a few turns of questions; this is the settled response. Use it as a model for tone, structure, and how much to say — not as a script to copy. Note the manner specific to this route: the summary leads with the world, not a player role; no role is named anywhere; the capability map is used as a plain feature-to-tutorial lookup, its role columns set aside; and the Bounded Worlds framework (the structures, Meeting the World, Responsiveness) is invoked by name as vocabulary the student already knows — never taught fresh.*

**Dear student: this is not here to demonstrate a quality idea, or to influence the kind of idea you devise. It is here so that the LLM has a structural reference — a key component of how context engineering works.**

---

Here is a Prototype Plan for your project. Think of this Prototype Plan as the start of your thinking — a conversation with your teammates and your professor.

## Your idea:

> You're in a forest with statues scattered about. It's snowing a little. The sky is warped and glistens in places. Suddenly the whole world shakes for a couple of seconds. When that's over, the snow on the ground lifts upward and now it's snowing a lot. Then it slows down. High above, through the warped sky, you see a distorted face. You realize that you're in a snow globe. The player is incentivized to hide under the statues — but then the shake might happen. Maybe they're not statues but something that makes sense; you'll figure out what the incentive is soon. If you hide below a statue, the shake tends to happen.

---

### The kind of Bounded World this is

A forest that turns out to be an ornament. At first it reads as the whole world — trees, snow, statues, nothing beyond. Then the shake, the snow falling wrong, the warped sky, the face — and the world suddenly has an outside it never seemed to have. You can see out, but you'll never get out. What you've described falls into the second Boundary, a Closed world, where the player can encounter the edge of the world but cannot pass it — and yours earns it the best possible way: the player isn't told the edge exists, they discover it. The reveal is the design.

### The world you're building

Two shaping notes fall out of that Boundary:

- **How the player meets the world.** Your entry is inverted — the player thinks they've already met an ordinary forest, and then the world re-introduces itself as an object. The first real "meeting" is the reveal, not the opening. Worth protecting: the early minutes should feel genuinely like a small quiet forest, so the betrayal lands.
- **How the world teaches its rule.** You've got this right intuitively — the player learns "hiding stirs the giant" by noticing the pattern, not by being told. Hide, shake. Hide, shake. The world teaches through play. That's the strong version.

### A Tradeoff To Consider

A tradeoff — where the player gains one thing only by giving up another — is practical to build into an early iteration. Yours is already designed in: the player wants to get under a statue (for whatever the incentive becomes), but getting under a statue is exactly what tends to summon the shake. To gain the thing, you expose yourself to the disruption. Every approach becomes a weighed decision — is it worth it this time? — and that's what keeps the world from settling into a safe routine. Hold this even before you've named the incentive; the tension lives in the structure, not the specifics.

### A reference to look at

**Little Nightmares** (2017, Tarsier Studios — https://store.steampowered.com/app/424840/Little_Nightmares/) — a tiny child sneaking and hiding through a vast vessel built at dollhouse scale, where being small is the whole mechanic. It's the closest thing to your snow globe in feel: a strictly bounded world, a giant presence above you, and hiding as survival. Worth studying how it makes smallness frightening.

### Worth bringing up with the instructor

What the objects are, what the incentive is, and what the face means are all one knot — and it's theme territory, the kind of thing worth a real conversation. The giant who shakes the globe could be cruel, curious, a child, indifferent; the answer changes what the whole piece is about. Want me to add it to your instructor-questions list?

### The part I'm most excited about

The snow falling upward. Before the player even sees the face, gravity betrays them — and that single image tells them they're not in a world, they're in a thing someone is holding. You don't need a line of text for the reveal; you've already got it in one physical gesture.

### Build order for Unreal Game Engine

*Following this sequence, you'll have something playable from the start. And the last items, if you run out of time, can be dropped. All the referenced tutorials you'll find in corpus/Development/Tutorials - Unreal.*

1. **Player character** — first-person default template, walking (first-person so looking up at the face lands). Block the forest out with primitive boxes first to feel the spacing of the statues before any art goes in.
2. **Tutorial 301 — landscape, snow automaterial, atmospheric sky:** the snowy ground and the sky overhead. This is the world's body.
3. **Import trees and the statue-objects from Fab** — pines, and whatever the "statues" become. Placeholders first, dressed assets once the layout feels right. A few now; the full set later.
4. **Tutorial 702 — Niagara:** the gentle ambient snowfall ("snowing a little"). Snow is a named variation of this tutorial — you're on taught ground.
5. **Tutorial 101 — trigger zone:** a collider under each statue that fires when the player tucks beneath it. The "tends to" part — a Random Float checked by a Branch so the shake only sometimes fires — is a small wiring job you'll do yourself; the pieces are taught, the join is yours.
6. **The shake and the snow reaction (the world responding to the giant):** the upward snow-burst, then heavy snowfall, then slow-down is a one-shot Niagara burst triggered from Blueprint plus a spawn-rate change on your step-4 snow — both are 702 variations. The literal world-shake is the one off-map bit (see below).
7. **The face reveal** — a plane or mesh placed high beyond the sky carrying a face texture (Tutorial 401 — materials), hidden until the shake, then revealed on the same trigger event. If you want to punctuate the realization with a held beat, Tutorial 801 has the full-screen fade machinery.
8. **Tone** — Tutorial 701 post-process color grade for the uncanny, slightly-wrong feeling. This is also your first-pass answer to the warped sky (see Off-Map).
9. **(optional tail)** low rumble during the shake — Tutorial 104's spatial ambient sound zones.

### Off-Map

A couple of things you'll research on your own rather than pull from a tutorial. Most of this project sits squarely on taught ground, so the list is short:

- **The warped, glistening sky** — a true distortion/refraction shader is the harder off-map piece. First pass without leaving the tutorials: the 701 color grade plus 301's atmospheric sky get you most of the uncanny tone, and a faintly glassy sphere material (401) overhead can hint the globe's curve. The literal warp is the upgrade to chase later.
- **The world shake** — Unreal's built-in Camera Shake is a standard, low-hanging step (not in our tutorials, but an afternoon's work).

### Two follow-ups

A. **Tell me more about what the shake costs the player.** Your "but then the shake might happen" tells me it's a risk — is it danger, disorientation, something that undoes progress? That answer decides how the whole loop feels.

B. **Tell me more about the face.** The instant the player understands they're being looked at — what do you want that to feel like: dread, wonder, accusation, sorrow?

---

Want me to save this Prototype Plan? I'd put it at `student-notes-private/projects/prototype-plan-snowglobe.md`.
