---
type: Lecture
cssclasses: [site-389]
publish: false
---

# Week 8.2 — Subtext and Theme

*How games carry meaning through metaphor — from Alice in Wonderland to surrealism to the controlling metaphor of Papo y Yo.*

This session traces the arc of experience called subtext and theme: how games ask players to make sense of the seemingly nonsensical, how metaphor scales from a single phrase to an entire work, and how surrealism turns the unconscious into a puzzle to be solved. It also covers CSG brushes for grayboxing in Unreal, and closes with a close-reading discussion of *Papo y Yo*.

<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>

## Alice in Wonderland — the precursor

*Alice in Wonderland* is an essential precursor to video games. We know this because when designers insert a reference to it in their game, they do so to signal the player to take on a mindset: moving the incomprehensible to the understood so the player can proceed — just like Alice did.

![[week8.2-alice-in-wonderland.jpg]]
*Alice in Wonderland — the high table, the bottle labeled "Drink me," the key, the door too small to fit through.*

Take a look at the scene: at first it appears to be nonsense. But on closer inspection, sense-making is possible — through trial and error, these elements connect and logic emerges. Many video game situations work this way: the player enters a room and, in order to proceed, must make sense of the space as a puzzle before they can solve it.

References to Alice are common (see *Why Videogames Love Alice in Wonderland* by Matt Margini). As Margini notes, Carroll asks the reader to puzzle through linguistic inversions, looking not necessarily for meaning but for logical — or at least ludic — consistency. In what we'll loosely call **surrealist games**, the player essentially takes on Alice's role: transforming the situation from the illogic of the unconscious mind to a conscious logic.

![[week8.2-breath-of-the-wild.png]]
*Breath of the Wild (2016) — spaces that ask to be read, independent of surrealism.*

<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>

## Metaphor

Subtext is a device used in every form of art — there's a theme to be found or unlocked when we do the work. And we can read subtext after we decipher **metaphor**.

From "What is Metaphor?" by Tim Jensen (Oregon State University): a metaphor is a comparison between two otherwise-unrelated things, where the qualities of one are figuratively carried over to another. When I say "Dude, I'm drowning in work," I'm using the urgency and helplessness of drowning to convey something about my workload. Metaphors let us see things from different *angles* and in a new *light* — both of which are, themselves, metaphors.

**Three scales of metaphor:**

- **Short** — so brief it might be simpler than a metaphor. "The house is a house" prepares us to read one thing as another. (Are the gears in *Papo y Yo* a metaphor? The lemons are simpler than the frogs — you can describe the lemons' role in one sentence; the frogs take two.)
- **Extended** — goes on for several sentences. We take multiple steps to get there. Does that make the metaphor richer?
- **Controlling** — extended across an entire piece. We'll discuss *Papo y Yo*'s controlling metaphor.

![[week8.2-papo-y-yo.jpg]]
*Papo y Yo (2012).*

Metaphors are fundamental to creative expression — they convey complex emotions and ideas in novel, engaging ways, and they make information more memorable by creating mental associations between concepts. When you're given a puzzle made of object-metaphors, it's not for the sake of simplification: the goal is to arrive at meaning and make that comprehension your own. Coupled with problems to solve, metaphors invite you to draw parallels between a known situation and an unknown one, gaining insight and finding solutions to unfamiliar challenges.

![[week8.2-opus-magnum.png]]
*Opus Magnum (2017) — a puzzle as metaphor.*

<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>

## Surreal — and Surrealism

When you're given a puzzle as metaphor, we can understand it as *surreal* — but we should be careful using the term freely. "Surreal" is overused in everyday speech. **Surrealism** was a European art movement from about 100 years ago. It featured illogic to draw attention to the unconscious mind; interpreting and configuring the work into a logical meaning is the role of the viewer.

![[week8.2-les-mysteres-du-chateau-de-de.png]]
*Les Mystères du Château de Dé (1929).*

Perhaps more than any other genre, surrealism features **surprise** (which sounds useful for game designers). Surprises come small and extended; non-sequiturs can be made meaningful if you make the effort. The reader is not passive.

Concurrent with surrealism in the early 20th century — or perhaps an essential influence — **psychoanalysis** articulated that the mind was a puzzle waiting to be interpreted and solved. Whether or not you believe its concepts, the premise is that events in childhood shaped how we relate to life today, and moving memories, thoughts, and feelings from the unconscious to the conscious mind brings insight. When that relationship is manifested as a metaphorical puzzle, it's thrilling to play.

There are more than a few surreal video games: *Superliminal* (2019), *Maquette* (2021), *Baba Is You* (2019), *That Dragon, Cancer* (2016), *Everything* (2017), *Back to Bed* (2014), *Antichamber* (2013), and *Inside* (2016) among them.

![[week8.2-superliminal.png]]
*Superliminal (2019).*

![[week8.2-inside.jpg]]
*Inside (2016) — how do we reconcile the unconscious and conscious mind through play?*

Sometimes the character is only a vehicle — very different from the narrative arc we studied recently. In *Papo y Yo*, the author's daydream is on display: he's literally working out his childhood traumas and inviting us to shape the experience from an unconscious representation into our conscious understanding.

<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>

## CSG Brushes

Unreal has a system for quickly implementing **Constructive Solid Geometry** that lets you easily build temporary layouts, furniture, or even simple structures for prototyping.

![[week8.2-csg-brushes.png]]
*CSG brushes in the Place Actors panel, under Geometry.*

CSG (also known as Binary Space Partition) is a technique for roughing out — *blocking*, or *grayboxing* — the static contents of a level before art is added. Typically it's not used for final models (those get replaced by model meshes), though it might be used for collision geometry in production. Find the CSG brushes in the **Place Actors** tab under the Geometry section, and drag them into your viewport or World Outliner.

CSG brushes can be set as **additive** or **subtractive** — subtractive elements carve holes or pockets out of normal elements. Set this in the Details pane for the brush.

![[week8.2-csg-additive-subtractive.png]]
*Additive vs. subtractive brushes — subtractive carves holes.*

You can also edit CSG brushes directly: manipulating faces, edges, or vertices; extruding faces; and drawing new vertex geometry. Access **Brush Editing** mode through the Modes drop-down in the toolbar.

<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>

## Discussion — Papo y Yo

![[week8.2-papo-y-yo-alejandra.jpg]]
*Papo y Yo (2012) — a close reading.*

Work through these questions as a close reading of the game's subtext:

- What is *Papo y Yo*'s controlling metaphor?
- What does Alejandra represent? What does Lula represent?
- What is the subtext behind the environment design?
- Many puzzles involve Quico manipulating the walls and buildings of the favela. What's the subtext there?
- What is the function of the slow-motion scenes?
- After Lula is broken, Alejandra tells Quico there's a way to cure Monster — his motivation for the second part of the game. What's the meaning of this?
- Did losing power (Lula) and backtracking have value?
- What is represented by Quico taking on the same body paint Alejandra has?
- We return to the starting location twice over the course of the game. What's the significance?
- What is the subtext of the game's ending?

## Reading — The Level Design Book

*The Level Design Book* by Robert Yang, Chapter 5: *Blockout* — <https://book.leveldesignbook.com/process/blockout>. Read by next Thursday; we'll discuss in class.

We return to Yang's book, this time for a chapter on blocking out levels. Blockout is an important part of pre-production and is ubiquitous in games with navigable 3D spaces. This chapter also activates concepts that will matter when we discuss divergent prototyping later in the semester.

## See You Next Time

Upload the final build of your Unreal Tutorial to the Drive — we'll playtest on Tuesday.

## Related

- [[Subtext and Theme via Metaphor]]
- [[Surrealism in Games]]
- [[Alice in Wonderland as Game Precursor]]
- [[Surprise vs Suspense]]
- [[Reading - The Level Design Book, Chapter 5 - Blockout (Yang)]]
- [[Game - Papo y Yo]]
- [[Game - Breath of the Wild]]
- [[Game - Opus Magnum]]
- [[Game - Superliminal]]
- [[Game - Inside]]
- [[Game - Antichamber]]
- [[Game - Baba Is You]]
- [[Week 8.1 - Unreal Tutorial]]
- [[Week 9.1 - Unreal Interaction Project]]
