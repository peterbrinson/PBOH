---
publish: false
role: hybrid — Traveler + Dreamer, with an Investigator thread
coverage: heavy off-map — above-beginner Blueprints
---

# The Windshield Splats — Hybrid (example session)

*An example of how PBOH maps a student's project. The student brought a hybrid idea — one that deliberately spans roles — and PBOH mapped it without resolving it to a single role. It also exercises the heavy off-map register: the idea asks for above-beginner Blueprint work, and the response says so plainly without shrinking the idea. Use it as a model for tone, structure, and how much to say — not as a script to copy.*

**Dear student: this is not here to demonstrate a quality idea, or to influence the kind of idea you devise. It is here so that the LLM has a structural reference — a key component of how context engineering works.**

---

Here is a Prototype Plan for your project. Think of this Prototype Plan as the start of your thinking — a conversation with your teammates and your professor.

## Your idea:

> Driving a car in slow motion. A semi truck is in front of me, which is open in the back. The loading ramp is dragging on the ground, making small sparks. Objects fall out of the trailer. When they hit my windshield a 2D image splats on the glass for a moment before fading. The images are timed with an instrument playing on loop. The images are not instruments; they are photographs of someone's past. People, places. Each music track fades as the splat does. Image/loops can stack, providing a collage and mix. There are two big categories of objects. One makes you and your car a bit smaller, the other larger. They alternate so you stay roughly within a normal range size. When the player steers the car strongly left and right, they can see ahead of the semi a huge four-legged creature running. That creature kicks backwards like a horse, striking the truck. That's why stuff is falling out of it. Then the semi truck swiftly turns to obscure the creature each time. At some point, the audio track is a voice. Objects fall out more frequently, ensuring a sound mix. They come in clusters — so 10 shrink-you at once and then 10 expand. This means you can now get significantly small and large. This becomes a challenge somewhat, but I don't know.

*Assignment context confirmed via Step 1: a hybrid — the project spans roles on purpose.*

---

This is a hybrid, and it works best left that way — no single role needs to win. (If you've been assigned a specific role for this class project, reach out to the Professor — he's more likely to encourage you than not).  Three Situated Player Roles are in play here. The player's posture is the **Traveler**'s (World as Presence): held in a slow-motion drive, moving and witnessing, where the sparks off the dragging ramp and the stacking music make presence itself the experience. The mechanics are the **Dreamer**'s (World as Enigma): nothing here is only what it is — memories strike the glass and play, the cause of it all runs just out of sight, and the truck turns to keep it that way. And there's a quiet **Investigator** thread present (World as Evidence): the splats are photographs.  The **Investigator** works with these kinds of artifacts, and crucially, deals with the past.    Over the course of the drive the player assembles a person from whichever fragments happen to hit their glass.

**Your project:** a slow-motion drive behind a semi that sheds someone's memories onto your windshield — each one an image and an instrument loop that fade together, stacking into a collage and a mix — while the creature causing it all runs ahead, glimpsed only when you steer hard, hidden again every time.

**What kind of experience:** A drive where the soundtrack is built out of what hits you. Each memory arrives as image-plus-instrument and leaves the same way; when they stack, the player isn't collecting anything — they're mixing. The size rule gives the drive an equalizing rhythm: shrink a little, grow a little, stay roughly yourself. Then the late clusters break that truce — ten shrinks at once, ten grows, a body that can drift far from normal — and your own note says it best: whether that stretch becomes a challenge is genuinely open. More on that below.

### A Tradeoff To Consider

A tradeoff — where the player gains one thing only by giving up another — is practical to build into an early iteration. Yours is already built into the lane: the memories fall where the truck is, and the creature is visible only when you steer out from behind it. To see the cause is to leave the fall line — every hard steer is paid in missed images and a thinner mix. The player constantly chooses between receiving someone's past and glimpsing what's shaking it loose. And the late clusters raise the price: be out of the lane during ten shrinks and the alternation that kept you normal-sized stops working — you come back larger than you meant to be. The choice compounds.

### A reference to look at

**Proteus** (2013, Ed Key & David Kanaga — https://store.steampowered.com/app/219680/Proteus/) — a pastel island where every plant and animal emits its own musical signature, so the soundtrack is your position in the world. That's your splat-mix approached from the other direction: a world that composes its own score out of what the player is near.

**La Maison en Petits Cubes** (2008, Kunio Katō, 12-minute animated short — https://www.youtube.com/watch?v=50-fWCXvhAY) — an old man dives down through the submerged stories of his own house, each level holding the memories of the life he lived there. A life read as strata, one layer at a time — the same shape as a past arriving one photograph at a time. Different facet: this one is for the theme.  And an excellent demonstration of a [Bounded World](https://peterbrinson.github.io/PBOH/Design/Worldbuilding/).

### Worth bringing up with the instructor

Two things here deserve a real conversation. First: **whose past is this?** People, places, eventually a voice — whether the photographs are invented, found, or yours changes how every frame reads, and how direct the voice should be is exactly the kind of affective call the instructor is the right person to weigh. Second: **your own open question** — whether the ending should become a challenge. That isn't a mechanics question; it's about what the drive is about. If the final stretch demands dexterity, the piece resolves in the player's hands; if it stays a witnessing, the ending is something that happens to them. Both are real endings to two different works. Want me to add these to your instructor-questions list?

### The part I'm most excited about

The first time two splats overlap and their loops layer — the moment the player realizes the music isn't random, it's in sync, ready to become a mix, and the thing composing it is whatever falls out of the truck. 

### Build order for Unreal Game Engine

*Following this sequence, you'll have something playable from the start. And the last items, if you run out of time, can be dropped. All the referenced tutorials you'll find in corpus/Development/Tutorials - Unreal.*

1. **Player character** — first-person default template, locked to the driver's seat. Forward motion belongs to the world (the road moves past; the car, truck, and creature can stand still) — far simpler than vehicle physics, and the right simpler for a slow-motion dream-drive. The drive rig itself and the lateral steering are both yours to build (see Off-Map). Block out with primitives first: a road plane, a truck-sized box, a glass plane in front of the camera.
2. **Import from Fab** — the semi with an open trailer and ramp, a car interior/dashboard, road and roadside set, the falling objects (recognizable household things, toys), and the creature — pick one that ships with run and kick animations (see Off-Map for why). Dress the primitives as you go.
3. **The fall pipeline** — this is **Tutorial 501** (Simple Physics) end to end. Four parts:
   - a. **Make each object fall.** Each object is a physics actor (`Simulate Physics` checked) tipped out of the trailer with a small `Add Impulse` toward the glass; gravity and tumbling come with the checkbox. Fab props need simple collision added first — 501 walks through it.
   - b. **Slow the fall, per actor.** Raise each falling body's `Linear Damping` — 501's dial for a dreamlike, floaty fall — so it drifts down as if through water while everything else keeps its own pace, so the memories float while the creature gallops.
   - c. **Sequence the drops.** Tutorial 104, Chapter 2F is a reference for a chain of timed, sequential events — you're not doing lights, of course, but instantiating objects.
   - d. **Fire the splat on impact.** `OnComponentHit` is the event for a physics object striking something — the falling memory hits the glass and triggers its image. Fine-tuning the feel comes in step 11.
4. **The splats** — Tutorial 401: each photograph is a texture on a translucent plane on the glass, one material instance per image, with an opacity parameter driven by a Timeline — fast in, linger, fade out.
5. **The music join** — each splat plays its instrument loop.  Actually, all loops are always playing (in sync).  The splat shoots the particular loop's volume high, and the same Timeline that drives the splat's opacity drives down the loop's volume, so image and sound are one fade. The wiring is a small Blueprint pattern that's yours; the deeper audio work — stacked loops staying musical, the handoff to the voice — is real research (see Off-Map).
6. **The size rule** — every falling object carries a String category, "shrink" or "grow" (Tutorial 102's shared-variable pattern). On a windshield hit, a Branch reads it and steps the car-and-camera scale down or up. The node is simple; the consequences aren't trivial (see Off-Map). Alternating the spawn order inside step 3's sequence enforces "roughly normal range" with no extra system at all.
7. **The creature** — Tutorial 104's NPC-with-animation pattern: a looping run ahead of the semi, with the kick animation fired by the same sequence that launches each object batch.
8. **Reveal and obscure** — the semi chases the player's X. Every tick, it moves its lateral position toward the car's, capped at a speed slower than a hard steer — and that lag is the mechanic: steer hard and you outrun the truck for a beat, glimpse the creature, then the view closes as it catches up.  It's a few nodes on Tick (look up "FInterp To") that no tutorial in PBOH teaches.
9. **Atmosphere** — Tutorial 702: the ramp's spark trail (a looping emitter at the contact point — sparks are squarely in its territory) and dust off the creature's footfalls. Tutorial 701: the color grade that makes slow motion read as mood.
10. **Escalation and the voice** — re-author step 3's sequence data: faster cadence, clusters of ten shrinks then ten grows, and one late splat whose "loop" is the voice track. No new tech — this is sequence design on systems you already built.
11. **Second pass on physics** — dial in the rest of Tutorial 501's properties: `Mass` so heavier memories fall with more weight, `Restitution` on a Physical Material for how they bounce or land dead against the glass, and impulse variation so they tumble believably and land reliably in slow motion. 

### Off-Map

These are the features you'll research on your own, outside the bundle — and an honest heads-up: this project still sits further off-map than recommended for students without decent Unreal experience. The tutorials cover real pieces — the triggers, the materials, the particles, the falling-and-bouncing physics, the creature's animations — but the systems that make this piece itself — the drive rig, the chasing truck, the mix — are Blueprint scripting beyond what the tutorials provide. Taking this idea on means deliberately growing your Blueprint skills past the beginner patterns. Each item below has a first pass described:

- **The drive rig** — a world that streams past a stationary car: a looping road, roadside parallax, and a semi that lazily chases the player's X (step 8 — the reveal mechanic rides on it). No tutorial teaches any of it; it's the foundation everything else sits on, and it's yours.
- **Lateral steering input** — a custom left/right input binding that shifts the car within a clamped range, extending the default first-person pawn. Small, but yours.
- **Runtime audio mixing** — the bundle's sound coverage is ambient and spatial.  Loops that fade with their splat, stack into a listenable mix, and hand off to a voice track is real audio scripting you'd research — and it's the heart of the piece.
- **Scaling the player mid-drive** — Set Actor Scale 3D is one node, but the ripples aren't: camera height, how falls land on a smaller windshield. Expect tuning.
- **Quadruped run and kick animations** — the vault's animation path (Mixamo) is for humans. A Fab creature that ships with a run cycle is findable; a backward horse-kick is not a common stock animation — finding it, or faking it with what the asset ships with.

### Two follow-ups

A. **Tell me more about what sorts the objects.** What kind of memory shrinks you, and what kind makes you larger? Whatever rule you choose, the player will hunt for it — it's the most interpretable decision in the piece.

B. **Tell me more about the creature.**  Every memory on your glass is there because it kicked. What is it, and does the player ever get a clean look, or is almost seeing it the point?

---

Want me to save this Prototype Plan to your notes? I'd put it at `student-notes-private/projects/prototype-plan-windshield-splats.md`.
