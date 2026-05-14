---
publish: true
---


Useful actions in the Blueprint editor that aren't nodes — they're things you do to pins, variables, or the graph itself. Knowing these speeds up Blueprint construction and keeps graphs clean.

## Split Struct Pin

Some pins carry packed data — a Rotator holds Pitch/Yaw/Roll, a Vector holds X/Y/Z, a Hit Result holds impact point/normal/actor. By default these appear as a single pin. **Right-click the pin → Split Struct Pin** to break it into individual float pins.

**Why:** When you only need to change one axis (e.g., rotate a door on Yaw only), splitting avoids constructing a full Rotator just to set one value. Connect the one pin you need, leave the others at 0.

**Reverse:** Right-click a split pin → **Recombine Struct Pin** to collapse back to one pin.

**Used in:** [[Set Relative Rotation]] — Tutorial 4's door swing only drives the Z (Yaw) pin after splitting the New Rotation input. [[Set Actor Location]] can also be split when you only need to change one axis.

## Promote to Variable

Drag off any output pin → **Promote to Variable**. Creates a named variable in the Variables panel and a SET node in the graph, storing that pin's value for later use.

**Why:** A reference that flows through a wire is gone after execution. Promoting saves it persistently. See [[Getting References]] for the full context on when and why to promote.

**Used in:** [[UE Tutorial 3 - Scoring and UI|Tutorial 3]] — promotes the [[Create Widget]] return value to `ScoreWidget` so the scoring logic can update the widget later. [[UE Tutorial 4 - Haunted House Triggers and Events|Tutorial 4]] — promotes sound and animation variables to make them Instance Editable.

## Comment Boxes

Select one or more nodes → press **C** to wrap them in a comment box. Or press **C** with nothing selected to create an empty comment box, then drag nodes into it.

**Why:** Comments group related nodes visually and add a label explaining what that section does. They move with the nodes inside them. Change the comment color in the Details panel to color-code different areas of the graph.

**Resize:** Select the comment (yellow outline) → drag an edge or corner.

## Source

- [[UE Tutorial 4 - Haunted House Triggers and Events|Tutorial 4]] — Chapter B (Split Struct Pin on door rotation)
- [[UE Tutorial 3 - Scoring and UI|Tutorial 3]] — Step 3 (Promote to Variable on Create Widget return)
- [Blueprint Visual Scripting | UE 5.7](https://dev.epicgames.com/documentation/unreal-engine/blueprints-visual-scripting-in-unreal-engine?application_version=5.7) — Comments section, clipped 2026-04-12

