---
publish: false
role: traveler — single-role
coverage: mostly covered — short off-map (real-time audio muffling, comic speech bubble)
---

# The Coat Check — Traveler (example session)

*An example of how PBOH maps a student's project. The student brought a single-role Traveler idea and developed it across a few turns of questions; this is the settled response. Use it as a model for tone, structure, and how much to say — not as a script to copy.*

**Dear student: this is not here to demonstrate a quality idea, or to influence the kind of idea you devise. It is here so that the LLM has a structural reference — a key component of how context engineering works.**

---

Here is a Prototype Plan for your project. Think of this Prototype Plan as the start of your thinking — a conversation with your teammates and your professor.

## Your idea:

> The screen opens on a concert ticket to a symphony. It falls away and the player is in a room with a long hallway, thunder far off. At a coat check, an idle attendant with a comic word bubble says "Can I take your raincoat?" — and takes it. Walking down the hall, it's raining indoors, a muffled voiceover playing. The hall turns 90°; another coat check, the same man: "Perhaps your best friend's rain jacket?" The next hall, it's snowing, and the voice is a little clearer — talking about music and instruments. At the end, a coat check on either side: "Your brother's coat?" / "Your sister's coat?" The player picks one and now hears the voice clearly: your musical performance isn't good enough, your siblings play beautifully. The player reaches a room of instruments lying on the floor; touching one picks it up and plays its sound over a voice — kind or cruel about trying, about doing well or not. The player can switch between the voiceover passages — a little agency. The coats are like taking on that character, but at the same time, not really. From the halls into the instrument room it gets more intense — different voiceovers piling up — until all the instruments are collected; then it goes quiet, and the player has nothing to do but keep walking. I want it to end with the player feeling that music is worth playing for its own sake, outside judgment.

---

This sits cleanly in the Situated Player Role, **The Traveler** — World as Presence. What you're describing is the player moving through a labyrinth in the present tense — witnessing a story unfold around them rather than reconstructing one that already happened. The hall that turns 90°, the weather changing room to room, a voiceover that starts muffled and slowly resolves into something you can finally bear to hear: that progression is the Traveler's central question, "What is this experience?" And the symphony ticket that falls away at the start is a clean way to say you have arrived somewhere — the threshold the whole piece walks away from.

**Your project:** a walk down a hallway where you surrender your family's coats to a quiet attendant while a judging voice slowly sharpens — ending in a room where you reclaim music as something you play for yourself.

**What kind of experience:** This is the Traveler in its purest form — movement is the narrative. You're not solving the hallway, you're passing through it and witnessing it change around you: rain to snow, muffled to intelligible, protection to exposure. The voice arrives in the present tense, the way the Traveler's story is constituted by presence. The labyrinth here is unicursal — a single winding path with one small fork at the end — exactly right for an experience about being carried forward toward a reckoning you can't sidestep.

### A Tradeoff To Consider

A tradeoff — where the player gains one thing only by giving up another — is practical to build into an early iteration. Yours doesn't have one designed in yet — a few directions you could go:

- **The instrument room as a listening tradeoff.** Picking up one instrument plays its passage but silences the others — to hear one voice clearly you give up the rest, and you can never hold them all at once. The agency you described becomes a real cost: choosing is also forgoing.
- **Coats as exposure.** Keep the coats light mechanically, as you want — but let surrendering each one shift how the next hall reads: give up the raincoat and the rain feels colder, louder, closer. Comfort traded for forward progress.
- **The brother/sister fork that actually diverges.** Make the two final coat checks lead to genuinely different voiceover content — pick one sibling's coat and you only ever hear that version of the judgment. Picking is also missing.

We can discuss this further if you want.

### A reference to look at

- **Inside** (2016, Playdead — https://store.steampowered.com/app/304430/INSIDE/) — wordless forward motion through a bleak world where the meaning lives entirely in the environment and in what you're made to do. Your coat-surrendering has that same uneasy compulsion; it's worth seeing how Inside makes the player feel something is wrong without ever stating it.

### Worth bringing up with the instructor

**How to pace the voice's shift from inaudible to clear** so the emotional turn — judgment into release — lands without a single on-the-nose line. That's affective-communication territory: exactly the "how do I make them feel this" question the instructor is the right person for.

There's also an opportunity in the ticket's bookend: the name of the symphony, read as a small impression at the start, can mean something quite different once the player walks back out to it at the end. What that name is — and what you want it to unlock in hindsight — is theme worth working out with the instructor.

### The part I'm most excited about

The snow hall, where the voice becomes a little more intelligible — that threshold where you can almost make out that someone is talking about music and instruments, and you lean in before you know it's going to wound you. Designing the audio so the player strains toward the very thing that hurts them is the whole piece in miniature.

### Build order for Unreal Game Engine

*Following this sequence, you'll have something playable from the start. And the last items, if you run out of time, can be dropped. All the referenced tutorials you'll find in corpus/Development/Tutorials - Unreal.*

1. **Get a first-person player character placed and walking.** The Unreal first-person template gives you the POV this idea wants, out of the box. Foundational — easy to skip, don't.
2. **Block out the labyrinth with primitives** (boxes and planes): the opening room, the long hall, the 90° turn, the branching end, the instrument room. Walk it until the length and the turn feel right — pacing is everything here. Then bring in **Fab** assets: coat-check counters, a figure for the attendant, instruments for the floor, the entry-room dressing.
3. **Tutorial 104 — the coat-check attendant.** A Mixamo NPC with an idle animation that reacts to the player's proximity with a triggered "takes the coat" gesture. Build one, then duplicate it for each station.
4. **Tutorial 702 — per-hall weather.** Looping Niagara particles placed in each hall — rain in the first, snow in the next. These can just run continuously; they don't need a trigger, since each hall only ever shows its own weather, so the effect can already be going before the player arrives. The far-off thunder works the same way — an ambient sound simply playing in the space, no trigger needed.
5. **Tutorial 701 — a Post Process Volume per hall** for the mood shift (cold blue in the snow, muddy gray in the rain). This is what makes each room feel like a different emotional register.
6. **The voiceover progression.** First pass: separate audio files — a muffled clip, then a clearer one, then the fully intelligible one — each triggered as the player crosses into the next zone (Tutorial 104). Simple, in reach, and you control the exact moment of clarity.
7. **The brother/sister fork.** Two coat-check stations; walking to one or the other is the choice. Each triggers its now-audible voiceover (two trigger zones, Tutorial 104).
8. **The instrument room.** Adapt Tutorial 102's touch-to-collect pattern: instead of the object disappearing and incrementing a counter, touching an instrument plays its sound plus a voiceover passage. Touching a different one switches the passage — that's your agency moment.
9. **Crescendo into silence.** Use Tutorial 102/3's counter: each instrument touched ticks the count up; when it hits the total, that's the trigger to silence the voiceovers and drop the room into stillness. The crescendo and the silence are two states of one counter — the emotional turn you described, built from the collectible-counter pattern already in your build order.
10. **The ending walk** (polish). Quiet, nothing to do but keep walking — the chosen instrument ringing out alone. Mechanically it's just stopping one sound and letting another play, but it's the emotional landing, so build it once the rest works.
11. **The ticket can be a bookend.** The opening symphony ticket is text on a **Tutorial 401** Material — cheap to make, and it can do a lot of work. You have an opportunity to also place it again at the very end, past the instrument room: recognizably the same ticket, read once on the way in and once on the way out. 

### Off-Map

Most of this sits squarely in tutorial territory, so the list is short — just a couple of things you'd research on your own rather than pull from a tutorial:

- **True real-time audio "muffling"** — a low-pass filter that smoothly clears as the player walks. The tutorials don't cover sound DSP. Your first-pass above (distinct muffled and clear audio files per zone) gets the same effect without it; reach for real-time filtering only as a second-pass refinement.
- **The comic-style 2D speech bubble.** Getting text to appear over the attendant is doable with a world-space widget; styling it as a polished comic bubble is a small design task you'd look up, not a taught feature. First pass: plain floating text, prettify later.

### Two follow-ups

A. **The coats as a series** — raincoat, then your best friend's jacket, then a sibling's coat. You said wearing them is "taking on that character, but not really." Tell me more about that borrowed-identity feeling: does the order — friend before family — mean something about how close the judgment is getting?

B. **The instrument room versus the halls.** The halls sound heavy and judging; tell me more about what the player should feel the moment they enter the room. Is it a release right away, or does the judgment pile in and only lift in the final silence?

---

Want me to save this Prototype Plan as `prototype-plan-coatcheck.md` in your project folder?
