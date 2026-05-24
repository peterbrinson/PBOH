---
publish: true
---


A Blueprint class is a template. An instance is a copy of that template placed in the level. One Blueprint class can have many instances, each configured differently — different lights assigned, different sounds, different target objects. This is the core pattern for reusable game logic: write the Blueprint once, configure each instance in the level editor.

## Use When

- You want one trigger Blueprint to work with different lights, doors, sounds, or NPCs
- You need variables that designers can change per-instance without editing the Blueprint itself
- You're placing the same Blueprint multiple times with different configurations

## How It Works

### Instance Editable

A variable marked **Instance Editable** appears in the Details panel when you select an instance in the level. Each instance can have a different value. Without Instance Editable, the variable is internal — invisible when editing instances.

**How to set:** Select the variable in the Blueprint → Details panel → check **Instance Editable**. The eye icon next to the variable name in the Variables panel also toggles this.

### Expose on Spawn

A variable marked **Expose on Spawn** appears as an input pin when the Blueprint is spawned at runtime (e.g., via Spawn Actor from Class). This is Instance Editable's runtime equivalent — it lets code set the value at the moment of creation.

**How to set:** Select the variable → Details panel → check **Expose on Spawn**.

### When to Use Which

| Scenario | Setting |
|---|---|
| Designer places instances in the editor, configures each one | **Instance Editable** |
| Blueprint is spawned from code at runtime, needs initial values | **Expose on Spawn** |
| Both (placed in editor AND spawned at runtime) | Both checked |
| Internal variable, no outside access needed | Neither |

## Common Patterns

**One trigger class, many configurations ([[UE Tutorial 4 - Haunted House Triggers and Events|Tutorial 4]]):**
BP_LightOnTrigger has Instance Editable array variables for Spot Lights and Point Lights, plus a Target Intensity float. Place one instance for the hallway (2 spot lights, intensity 5000). Place another for the basement (1 point light, intensity 3000). Same Blueprint, different behavior — configured entirely in the Details panel.

**Per-instance sound (Tutorial 4, Chapter B):**
BP_DoorTrigger has a Sound variable (Instance Editable). The front door plays a wooden creak. The cellar door plays a metal groan. The Blueprint logic is identical — only the sound asset differs per instance.

**Per-instance NPC (Tutorial 4, Chapter C):**
The animation trigger has a `Zombie` variable of type BP_Zombie (Instance Editable). Each trigger instance in the level points at a different BP_Zombie actor. One trigger activates the zombie in the hallway, another activates the one in the attic.

### The Class vs. Instance Mental Model

Think of the Blueprint class as a cookie cutter and instances as cookies. The cutter defines the shape (logic, components, events). Each cookie can be decorated differently (Instance Editable values). Changing the cutter changes all future cookies — and updates existing ones for anything defined in the class. Changing one cookie's frosting (instance values) doesn't affect the others.

## Related

- [[Getting References]] — Instance Editable variables are one way to give a Blueprint a reference to external objects
- [[For Each Loop]] — Instance Editable arrays let one instance control any number of targets
- [[Editor Workflows]] — Promote to Variable is often the first step before making something Instance Editable

## Source

- [[UE Tutorial 4 - Haunted House Triggers and Events|Tutorial 4]] — Chapters A–D (Instance Editable used for lights, doors, sounds, NPCs throughout)

