---
publish: false
role: investigator — single-role
coverage: mostly covered — short off-map (underwater look, gaze-triggered cut + end-card)
---

# Abandoned Aquarium — Investigator (example session)

*An example of how PBOH maps a student's project. The student brought a single-role Investigator idea; this is the response. Use it as a model for tone, structure, and how much to say — not as a script to copy.*

**Dear student: this is not here to demonstrate a quality idea, or to influence the kind of idea you devise. It is here so that the LLM has a structural reference — a key component of how context engineering works.**

---

Here is a Prototype Plan for your project. Think of this Prototype Plan as the start of your thinking — a conversation with your teammates and your professor.

## Your idea:

> The player finds themselves in a public aquarium — the kind people visit like a zoo. Everyone's gone. On scattered benches and across the floor, the player finds pieces of equipment, some broken, plus a piece of paper with a code and references to a key. By one door there's a spot of water, with wet footprints leading out of it.
>
> The player can engage the simple interactive kiosks scattered around, which play audio about the importance of Earth's ecosystems and the magnificence of its sea life — clips that keep circling back to the disastrous impact of human civilization: pollution, energy use, and so on.
>
> Early on, the tanks hold fish and other small sea life. But eventually the player reaches a huge tank with a whale in it. A surprise — also floating in that tank is a large globe of the Earth, with writing sloppily painted on it: "Don't forget to visit the gift shop. It pays for her cage."
>
> We hear talking in the distance — someone speaking to a police officer — and a static squeak from the cop's walkie-talkie.  After seeing the whale and globe, when the player turns a particular coner, I want it to end with a reveal of who the player is, when they first encounter the cop and the aquarium boss. It cuts to black abruptly when we barely see those two people.  Maybe there is white text over the black.  But I don't know who the player should be.

---

This sits cleanly in the Situated Player Role, **The Investigator** — World as Evidence. An emptied public space, equipment left mid-use, a coded note, wet footprints still leading away from a door: you're handing the player exactly the Investigator's verbs — find evidence, reconstruct what happened. And the aquarium is a sharp choice of space. It's a place built to narrate itself — kiosks, signage, a guided route — so the evidence isn't only scattered objects, it's an institution's own voice. The whale and the painted globe are the moment that voice cracks.

**Your project:** a quiet, first-person walk through an abandoned public aquarium, where broken equipment, a coded note, and the building's own ecosystem kiosks let the player reconstruct what happened here — building toward a captive whale, a painted message, and a reveal of who the player has been all along.

**What kind of experience:** Investigator. The player asks "What happened here? Who left in such a hurry?" and answers it by looking closely — the broken equipment, the coded paper, the kiosks, the message on the globe.  The kiosks earnestly sell a hopeful, shared mission — we're in this together, saving the world — and the player has no reason to doubt them. Then the whale tank's painted globe — "it pays for her cage" — shatters that sincerity in a single read. That gap between what the aquarium promises and what it's actually doing is the engine of the piece, and the globe is the shock that opens it.

### A Tradeoff To Consider

A tradeoff — where the player gains one thing only by giving up another — is practical to build into an early iteration. Yours doesn't have one designed in yet, but it's sitting right there in your fiction. A few directions it could take:

- **The approach as a clock.** The distant talking and the walkie static mean someone is coming. Lean into it: the closer they get, the less time the player has — so every object becomes a choice between lingering on the whale's globe and pressing on before the encounter lands.  The goal is to make the player feel like time is a pressure even though you don't implement any such system.  
- **Look, or leave the scene intact.** The player reads things in place (constrained angles, the stillness preserved) or moves equipment to see better (clearer, but the just-abandoned hush breaks).

We can discuss this further if you want.

### A reference to look at

- **Tacoma** (2017, The Fullbright Company — https://store.steampowered.com/app/343860/Tacoma/) — for the shape. An emptied institutional space you reconstruct from what people left behind, audio logs and all. It's the Investigator loop at building scale, and it shows how much story a route through empty rooms can carry. (Its audio logs are doing what your kiosks do.)
- **BioShock** (2007, Irrational Games — https://store.steampowered.com/app/409710/BioShock_Remastered/) — for the theme and the reveal. A whole world whose cheerful signage and slogans are the ideology you're meant to swallow — "It pays for her cage" is BioShock — and one of the most famous reveal-of-who-the-player-is in games. Worth studying specifically for your ending question: not to copy, but to feel how a reveal can reach back and re-color everything the player already saw.

### Worth bringing up with the instructor

**Who the player turns out to be — and what the ending says.** This could be the meaning of the whole piece, and it's not the kind of a call PBOH will  make for you. You named the gap yourself, and taking it to the instructor is exactly right. The one structural thing worth holding onto while you decide: a reveal only lands if it **recontextualizes what's already been seen.** A few directions, each of which rewrites the game:

- **An escaped exhibit** — the player has been one of the captives the kiosks describe.
- **The person who painted the globe** — the player is the one who left the message, returning.
- **Someone complicit** — a worker, the boss's own kid — who has to face what the place is.

Each makes the player re-read the equipment, the kiosks, and that slogan in a new light. Worth a real conversation with the instructor about which one is yours — theme, and how you want the player to feel at the cut to black, are the heart of that talk.

### The part I'm most excited about

The globe in the whale tank. A whale — the largest thing in the building, the thing the whole institution is supposedly for — sharing its water with a hand-painted Earth that reads "It pays for her cage." That one image makes the entire argument in a single look, compared to the multiple kiosks that communicated prior. It's also a clean Tutorial **801 + 401** build: a model, a painted Material, an inspect. You can build the aquarium's emotional climax first, and you'll understand how every other examinable is working toward.

### Build order for Unreal Game Engine

*Following this sequence, you'll have something playable from the start. And the last items, if you run out of time, can be dropped. All the referenced tutorials you'll find in corpus/Development/Tutorials - Unreal.*

1. **Get a first-person player character placed and walking.** The Unreal first-person template gives you the POV this idea wants.  You could incorporate Tutorial **202** to make the player avatar a MetaHuman, but that's almost certainly ambitious for The Investigator project, for its mild payoff.  The first-person default is the cleanest fit for a looking-around experience.
2. **Import aquarium models — mostly from Fab.** Water tanks, benches, the kiosks, broken equipment, the whale, the floating globe, signage. Fab (Epic's marketplace) has most of these as free assets. Perhaps stage with placeholder boxes first to feel the route — how far from the entrance to the whale tank, where the eye lands first — then dress it in.
3. **Tutorial 801 — Inspect an Object.** This is the **heart of your project** — the Investigator's primary tutorial. The coded paper is a readable note (full-screen widget, player input locked while it's open). The broken equipment, scraps of paper — every examinable in the building is a deviation of this one pattern: same inspect logic, different content.
4. **Tutorial 401 — Materials, starting with the globe.** The globe's hand-painted slogan is the payload of the whole piece — a texture-mapped Material, and the one thing here you truly can't cut. 401 paints the other surfaces too — the wet-footprint decals, the kiosk screens — but those are lower-priority dressing you can thin out or add later.
5. **Tutorial 104 — the kiosks.** Tutorial 104's spatial ambient sound plays a clip when the player comes near a placed actor — exactly your kiosks. Each one gets its ecosystem audio on proximity, no button press: walk close, the hopeful narration starts.  
6. **Tutorial 104 again — the approach to your ending.** As the player nears the last corner, the two voices and the walkie static fade in as spatial ambient sound — you feel them before you see them. The player turns the corner, the two figures are there for a moment (Mixamo characters standing in place is enough), and a trigger cuts to black. Tutorial 104 stages all of it — the ambient voices and the sequential triggers. The two refinements you want — firing a cut, and firing the cut only when the player is looking right at the figures, and the line of text over the black — reach past the tutorials; for these refinements, see Off-Map just below.
7. **Basic lighting to keep everything readable.** Placing and tuning lights is a standard build step — no tutorial walks through it, but it's part of dressing any scene, like placing the player character. The colder, moodier aquarium atmosphere — the blue underwater glow, heavier mood-lighting — is more a **Traveler** strength, the role you work in next. Get it clean and readable now; the mood pass comes later.
8. **Tutorial 302 — Water** — the tanks, and the first thing to cut if the clock beats you. A basic water surface is enough to stage the globe floating and the whale submerged; Tutorial 302's real tools — true surface, depth, movement — are the upgrade. Worth it if you have the time, droppable to a plain plane if you don't.
9. **A Timeline to make the globe bob.** To sell the globe floating rather than fixed in place, drive its up-and-down motion with a **Timeline** — the same Timeline that opens the door in Tutorial 101, just set to loop. A deliberate compromise worth taking: true physics buoyancy would be more convincing, but physics simulation is off-map, and a gentle looping bob gets you floating for a fraction of the trouble.
10. **Tutorial 102's key + Tutorial 101's door** — You didn’t say that the player would use the key or keypad, but if you wanted to create such mechanics, Tutorial 102 gives you a key the player picks up and uses; Tutorial 101 makes a door slide open when triggered.  You could script logic – with a boolean – for the door’s trigger to work upon the boolean being true.  But in a project of this scope, you likely will get away with the door opening regardless, as this is not core to the experience. Also, I think you meant the code on the paper to be just a clue to read — good, creating a functional keypad is too ambitious for The Investigator project.  

### Off-Map

- **Making the big aquarium tanks read as genuinely underwater.** Tutorial 302 gives you gorgeous water seen from above — focused on the surface. But the player meets these tanks from below, looking up, with the surface overhead, and from that angle 302's richness mostly falls away. Selling a convincing underwater look from beneath usually takes floating bubbles and a refraction/distortion pass. The bubbles you can approach with Niagara (the ambient-particle pattern in Tutorial **702**); the refraction look itself is something you'd research outside the vault (a search like "Unreal underwater effect" is the start). Worth a quick experiment on one tank before you commit the whole space to it.  
- **The gaze-triggered cut and the end text.** Your ending has two pieces the tutorials don't walk through. First, it only works if the player sees the two people.  It needs to fire the cut only when the player is looking at the figures — that needs a look-at check, the kind of "what is the player aimed at" trace that Tutorial **821** sketches. Second, the line of text over the black — Tutorial **801** builds full-screen widgets, so it's the closest thing, but it doesn't cover an end-card specifically. Both are small, doable additions; just know they sit a step past the tutorial path, so leave yourself time to work them out.

### Two follow-ups

A. **The kiosks against the globe.** The kiosks sell a sincere, hopeful "we're in this together"; the globe shatters it. How wide do you want that gap — do the kiosks stay warm and earnest right up to the whale tank, so the painted line is a genuine shock? The distance between the two is one of your sharpest tools.
B. **The wet footprints.** Whose are they — the person talking to the cop, the player's own past self, someone still in the building? They're the first promise the space makes the player; what they turn out to mean can set up your reveal.

---

Want me to save this Prototype Plan as `prototype-plan-aquarium.md` in your project folder?
