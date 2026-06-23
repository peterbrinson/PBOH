---
cssclasses: [site-389]
publish: false
---

# Week 4.1 — Animation and Assets

*Importing and controlling animations in Unity, and a field guide to finding game assets you can actually use.*

This session opens with a discussion of the Unwin architecture reading, detours through a vehicle-physics war story, then settles into two practical blocks: importing and driving character animations with the Animator Controller, and a survey of where to find models, icons, audio, and music for your prototypes.

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

## Discussion — Architecture

Thoughts on designing spaces, working from the Unwin reading:

- What did you think of this chapter?
- Do the elements described here resonate with any particular places, either real or virtual?
- Which of these elements have you used in your last projects? Which are you interested in using in the future?

A few games worth looking at through this lens: *Manifold Garden* (and its GDC talk, "Level Design in Impossible Geometry"), *Superliminal*, *The Stanley Parable*, *Antichamber*, and *Portal*.

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

## Vehicle Physics — a war story

![[week4.1-life-underground.png]]
*Life Underground (USC Game Innovation Lab, 2016).*

*Life Underground* was developed in the USC Game Innovation Lab in 2016, in collaboration with scientists studying extremophile microorganisms. It's basically a dark ride through a mine with science minigames. At first the vehicle used a physics-based controller — but that couldn't run reliably on the low-cost hardware in grade schools.

**How would you solve this?**

What if you wrote a script that output the vehicle's location and rotation after a short timestep, and wrote all those values to a file? You could drive the vehicle through the cave on a "perfect run," ensuring there were no physics problems — generating a list of transforms describing a path through the cave. Then you could rewrite the controller to *ignore physics and just follow the path*, interpolating from transform to transform. You could even get fancy and detect whether the vehicle had come to a stop on a slope, in which case you'd slide it down to the next area of level ground.

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

## Importing Animations

Animations are imported into Unity as **FBX** files, just like models. In fact, you can bundle a model, rig, and a set of animations together in a single FBX — though it's often easier to keep them separate when you have the option. Keep in mind that animations need to be designed for the character's rig: you generally can't grab characters and animations from different places and expect them to work together, unless they both use Unity's **Humanoid Avatar**. (To follow along, open Unity and download the Animated Hero demo project.)

**Mixamo.** A great place to find placeholder or prototype animations is Mixamo, Adobe's library of interoperable character models and animations. For something relatively simple (a character that can walk, run, and jump) you'll likely find something useful. When you export, you can choose just the mesh, just the animation, or both — export them *separately*: the character in a T-pose, and the animations "without skin." Choose the **FBX for Unity** option. (If a Mixamo character imports without materials or textures, select the model in the Inspector, choose the Materials tab, and extract the textures and/or materials into a new folder.)

**Avatars.** When you have multiple animation FBX files for one character, make sure they all use the same avatar — set it on the Rig tab of each FBX. If your assets don't include an avatar, choose "Create From This Model" and assign the created avatar to the animations. (There's a little black magic here; mismatched rigs can occasionally cause problems.)

**Root motion.** Animations move the joints of the character, which can move the character itself through space — but the animation *doesn't* move the character's transform along with it. That's root motion, and usually it's not what you want: you want your character controller in charge of forward movement, not the animation. Root motion can also pull the mesh away from its collider and make physics wonky. Prefer animations that walk *in place*, and apply motion through your controller.

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

## Using the Animator Controller

The Animator Controller is a flowchart — actually a state machine — that describes how animations transition from one to another. You apply conditions to those transitions and control them from code. (You don't address the controller directly in code; it's part of the Animator component, and your scripts address the animator.)

![[week4.1-animator-controller.png]]
*The Animator Controller — a state machine of animation states and transitions.*

**Parameters** let you transition between states. You define them on the controller, then base transition conditions on them:

- A **Bool** parameter can be set true or false depending on the state of the game.
- A **Trigger** is like a bool that Unity resets to false immediately after it fires a transition.

**Transitions.** Most of the time you don't need to touch the defaults — Unity blends transitioning animations together automatically. The one setting to know is **Has Exit Time**, checked by default: uncheck it if you want a transition to happen *instantly* (the moment a button is pressed, say) rather than waiting for the current animation to finish.

**Scripting transitions:**

```csharp
public Animator animator;

void Update() {
    if (Input.GetKeyDown(KeyCode.Space)) {
        animator.SetTrigger("attackTrigger");
    }

    if (Input.GetKey(KeyCode.UpArrow)) {
        animator.SetBool("isWalking", true);
    } else {
        animator.SetBool("isWalking", false);
    }
}
```

**Layers.** Animator controllers can grow complex. Layers let you have multiple animation states active at once, blending between them — so a character can do something with their upper body (wave, throw, attack) while standing still or running, applied additively instead of interrupting one another.

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

## Game Assets

Finding stuff to put in your prototypes is a skill in itself. This might feel like a high-pressure environment because I'm making you build games every week — but it's actually low-stakes, because the point isn't to *perform*, it's to *learn*. Understanding what goes into making assets, and being able to adapt them (or adapt to them), is genuinely valuable.

**Licensing and credit.** Pay attention to whether you have license to use an asset. In this class you may use assets you don't have license to — but that means you can't publish or share your prototypes widely, and you'll need to distinguish the parts that can be reused later from those that can't. **Always credit your sources** — as professional courtesy, because many licenses require it, and so you can find things again when you harvest pieces for future work. Credit code in comments and in a credits file; credit other assets in the game or that file. Consider going further: tell creators when you publish, contribute a dollar or two to Kickstarters and Patreons, leave honest reviews. It builds the community and your connections in it.

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

## Finding 3D Models

3D models are probably your biggest challenge for this class. Big sites like TurboSquid and CGTrader come up at the top of searches and have lots of models, but they're hard to navigate for cheap or free assets, and much of what's there isn't designed for game development and may not work in Unity.

When you can, use a **collection** of assets, or get as many as you can from a **single source** — they're far more likely to share a unified look. The downside of asset packs is that your game will look like other games using that pack (Minecraft games all look like Minecraft, UEFN games all look like Fortnite), so use them creatively: scale, rotate, recombine, palette-swap, apply different materials or shaders. **Low-poly models** have a lot of advantages — smaller, faster to load, fewer compatibility issues — so unless your prototype specifically needs detail or realism, lean simple.

**3D model creators:** [Kenney](https://kenney.nl) · [Quaternius](https://quaternius.com) · [Brackeys](https://devassets.com) · [Kay Lousberg](https://kaylousberg.com)

**3D model aggregators:** [Poly Pizza](https://poly.pizza) · [Itch.io](https://itch.io) · [Unity Asset Store](https://assetstore.unity.com) · [The Models Resource](https://www.models-resource.com) (also has parallel sites for 2D sprites, textures, and sounds from classic games — useful for prototyping, but not copyright-cleared).

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

## 2D Icons, Audio, and Music

**2D icons** — you're more likely to need these for UI or particles than full sprite sheets: [Noun Project](https://thenounproject.com) · [Game Icons](https://game-icons.net) · [Icon Finder](https://www.iconfinder.com) (filter for free icons licensed for commercial use).

**Sound effects** can be tricky. Employ the 80/20 rule: you could spend enormous effort getting a sound exactly right, or 20% of that effort finding one that's 80% good enough. [Freesound](https://freesound.org) · [Zapsplat](https://www.zapsplat.com) · [Jsfxr](https://sfxr.me) (a generator).

**Music and ambiance** — be careful here. YouTube tends to flag and demonetize videos containing recognizable music, *even when it's licensed or royalty-free*, which can hurt anyone who streams your game. Not a big deal for class, but if you'd ever upload to itch.io, include a way to toggle off any potentially unsafe music. [ccMixter](https://dig.ccmixter.org) · [Free Music Archive](https://freemusicarchive.org) · [Musopen](https://musopen.org) · [YouTube Audio Library](https://www.youtube.com/audiolibrary) · [Kevin MacLeod / Incompetech](https://incompetech.com) (Royalty-Free Music tab) · [Tabletop Audio](https://tabletopaudio.com) · [Jason Shaw / Audionautix](https://audionautix.com)

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

## Playtesting Equipment

As a game designer who runs playtests regularly, you need a pair of cheap over-ear headphones. Get them now and start bringing them to playtests — you'll be required to have them next year in Intermediate anyway.

Other things worth investing in: an **audio splitter** (so you can hear the audio the player is hearing) and a **USB wired or wireless mouse** (easier than a trackpad for controlling your game).

## See You Next Time

Watch the video assigned for Thursday: *Cursed Problems in Game Design* by Alex Jaffe (GDC 2018).

## Related

- [[Affordances of Movement]]
- [[Reading - Analyzing Architecture, Chapter 2 (Unwin)]]
- [[Game - Manifold Garden]]
- [[Game - Superliminal]]
- [[Game - Antichamber]]
- [[Game - Portal]]
- [[Week 3.2 - Workspaces and Splines]]
- [[Week 5.1 - Quandaries]]
