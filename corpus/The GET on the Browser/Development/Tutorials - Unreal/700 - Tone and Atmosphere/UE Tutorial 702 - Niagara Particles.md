---
title: "UE Tutorial 702 - Niagara Particles"
cssclasses:
  - unreal-tutorial
---



*By Yibei He & Peter Brinson*

## 0. Introduction
---

> [!info]- A. Outcome
> In this tutorial, you will learn the Niagara VFX system in order to create dynamic environmental effects. You'll learn to navigate the Emitter stack, leverage GPU simulation for high particle counts, and use force modules like Curl Noise to create complex, turbulent motion.

> [!info]- B. Learning Objectives
> Develop working knowledge of the Niagara pipeline:
>
> - Create a Niagara System from a preset template
> - Understand the sections of the Emitter panel
> - Configure GPU simulation for high particle counts
> - Build a particle effect using Emitter Update, Particle Spawn, and Particle Update modules
> - Add forces and color to a particle system and place it in a level

---

## 1. Create and Understand a Niagara System
---

> [!info]- A. Create a Niagara System
> Right-click in the Content Browser to create a Niagara System.
>
> ![[unrealTutorial_09_101.png]]
>
> <span class="hint">The list of templates that appears can look overwhelming — don't panic. These are just pre-set samples designed to save time; they aren't separate categories.</span>
>
> ![[unrealTutorial_09_104.png]]
>
> Select SimpleSpriteBurst and click Create.
>
> ![[unrealTutorial_09_107.png]]
>
> Rename it with NS_ at the beginning (e.g., NS_MagicSmoke).
>
> ![[unrealTutorial_09_110.png]]
>
> Double-click to open it.

> [!info]- B. Understand the Panels in Niagara System
> Once opened, you'll work in three primary areas:
>
> - Preview Window — shows a live preview of your VFX
> - System panel — the top-level console for the entire Niagara System; you won't need to operate this much.
> - Emitter panel — where the VFX is actually controlled; this is the primary area to learn.
>
> A single Niagara System can contain many Emitters.
>
> ![[unrealTutorial_09_113.png]]
>
> > [!question] Ask your LLM why
> > In the Unreal tutorial I'm following, I'm working with a "Niagara System" and an "Emitter." What is the relationship between these two? Why would a single System ever need multiple Emitters?

> [!info]- C. Understand the Emitter Panel
> The Emitter panel is divided into 6 sections. Each section holds Modules that function similarly to nodes in Blueprints.
>
> Properties
> Basic emitter settings: looping behavior, auto-activation.
>
> Emitter Spawn
> Runs once when the emitter is first created. 
>
> Emitter Update
> Runs every frame for the emitter. Most commonly used to control how many particles spawn per frame (e.g., a Spawn Rate module).
>
> Particle Spawn
> Defines the initial state of each particle when created: size, location, color, lifetime.
>
> Particle Update
> Controls each particle's behavior every frame during its lifetime: movement, scaling, fading, and other dynamic effects over time.
>
> Render
> Defines how particles appear on screen. The Sprite Renderer is powerful enough for almost all beginner effects. A Sprite is a 2D plane that always faces the camera — ideal for fire, smoke, and sparkles.
>
> ![[unrealTutorial_09_116.png]]
>
> > [!question] Ask your LLM why
> > In the Unreal tutorial I'm following, I see both "Emitter Update" and "Particle Update" sections. What is the difference between these two? If I want to change how fast a particle moves as it gets older, which one should I use?

> [!info]- D. Set GPU Sim
> In Properties, change:
> - Sim Target → GPUCompute Sim
> - Calculate Bounds Mode → Fixed
>
> This improves performance and allows you to create thousands of particles without slowing down your computer.
>
> ![[unrealTutorial_09_122.png]]
> ![[unrealTutorial_09_125.png]]
>
> > [!question] Ask your LLM why
> > In the Unreal tutorial I'm following, I just switched my Niagara simulation to "GPUCompute Sim." Why is the GPU better at handling particles than the CPU? Are there any times when I should keep it on the CPU?

---

## 2. Make a Particle Effect
---

> [!info]- A. Set Emitter Update
> In Emitter Update, find the Emitter State module. This controls whether the emitter is active, looping, or resettable. Change Loop Behavior to Infinite.
>
> ![[unrealTutorial_09_128.png]]
> ![[unrealTutorial_09_131.png]]
>
> Click the + (add) button and add a Spawn Rate module.
>
> ![[unrealTutorial_09_134.png]]
> ![[unrealTutorial_09_137.png]]
>
> Increase the Spawn Rate and the Spawn Count in Spawn Burst Instantaneous. The effect will become much brighter as particles stack on top of each other at the center.
>
> ![[unrealTutorial_09_140.png]]
> ![[unrealTutorial_09_143.png]]

> [!info]- B. Set Particle Spawn
> In Initialize Particle, change Uniform Sprite Size to a smaller value — the particles will visibly shrink.
>
> ![[unrealTutorial_09_152.png]]
> ![[unrealTutorial_09_155.png]]
>
> Click the + button in Particle Spawn and add a Shape Location module. Your particles will now spread out into a sphere shape.
>
> ![[unrealTutorial_09_161.png]]
> ![[unrealTutorial_09_164.png]]
>
> Experiment with Shape Primitive and Sphere Radius to see different distributions.
>
> ![[unrealTutorial_09_170.png]]
> ![[unrealTutorial_09_173.png]]
>
> <span class="hint">For this example, set Shape Primitive to Sphere and Sphere Radius to 15.0.</span>

> [!info]- C. Set Particle Update
> Click the + button in Particle Update and add a Curl Noise Force module. Increase the Noise Strength — the particles will begin to swirl in a turbulent pattern.
>
> ![[unrealTutorial_09_182.png]]
> ![[unrealTutorial_09_185.png]]
> ![[unrealTutorial_09_191.gif]]
>
> Add a Point Attraction Force module and increase its strength — particles will pull toward a central point.
>
> ![[unrealTutorial_09_194.png]]
> ![[unrealTutorial_09_197.png]]
>
> Add a Color module to control the particle color over its lifetime.
>
> ![[unrealTutorial_09_200.png]]
> ![[unrealTutorial_09_203.png]]
>
> Continue adding modules to build more complex effects. When you're happy with the result, drag the Niagara System from the Content Browser into your level.
>
> ![[unrealTutorial_09_209.png]]
> ![[unrealTutorial_09_212.gif]]
>
> <span class="hint">The preset templates in the "Create Niagara System" dialog are just time-savers — they all start from the same building blocks. Any effect can be built from scratch using these modules.</span>

## What you can now build

- A particle effect — smoke, fire, dust, magic sparkles — placed anywhere in the level
- Turbulent, swirling particle motion using Curl Noise Force
- Particles that converge toward a central point (attraction force)
- Color that shifts over a particle's lifetime
- High-count GPU-simulated effects that stay performant (thousands of particles)

## Example deviations you are ready for

- A different effect type — rain, snow, embers, dust motes — same module structure, different spawn rate, shape, and force values
- Attach the Niagara system to a Blueprint actor so it moves with it (sparks trailing a moving door, smoke rising from a carried torch)
- A one-shot burst triggered from Blueprint rather than a looping ambient effect — activate on an event, let it exhaust itself
- Multiple emitters in one Niagara System — combine smoke and sparks in a single asset so they stay in sync
