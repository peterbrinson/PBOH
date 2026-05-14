---
publish: false
---

# UE Wiki — Log

Append-only chronological record. Each entry uses a parseable prefix: `## [DATE] operation | Subject`

Operations: `ingest` (new source processed), `update` (existing page revised), `lint` (health check), `query` (question answered from wiki), `meta` (structural change).

---

## [2026-04-12] ingest | Animation Blueprint from editor clip + Tutorial 5

- **Source:** [Animation Blueprint Editor in UE | UE 5.7](https://dev.epicgames.com/documentation/unreal-engine/animation-blueprint-editor-in-unreal-engine?application_version=5.7) — clipped 2026-04-12
- **Created:** [[Animation Blueprint]] — Animation category. Three graph types (Event Graph, Anim Graph, State Machine), the evaluation flow, Slots for montages, assigning to a mesh, when you don't need one. Template locomotion and MetaHuman retarget patterns. 4 images embedded.
- **Updated cross-references:** Animation Montage (added Animation Blueprint), MetaHuman (added Animation Blueprint).
- **Running total:** 58 wiki pages.

## [2026-04-12] ingest | Spawn Actor from Class from clip + training knowledge

- **Source:** [Spawn Actor from Class | UE 5.7](https://dev.epicgames.com/documentation/unreal-engine/BlueprintAPI/Actor/SpawnActorfromClass?application_version=5.7) — clipped 2026-04-12 (1 line). Supplemented with training knowledge for pins and patterns.
- **Created:** [[Spawn Actor from Class]] — Blueprint Nodes category. Input/output pin tables, Collision Handling Override, Expose on Spawn integration, Owner pin. Projectile spawning, enemy wave, configured spawning, and get-back-to-spawner patterns.
- **Running total:** 57 wiki pages.

## [2026-04-12] ingest | Event Dispatchers from training knowledge + Tutorial 1

- **Source:** Training knowledge + [[UE Tutorial 1 - A Floor Plate Opens A Door|Tutorial 1]] Steps 4B–4C (pressure plate → door dispatcher pattern).
- **Created:** [[Event Dispatchers]] — Events category. Call/Bind/Unbind nodes, parameters, binding pattern, comparison table (Dispatchers vs Interface vs direct reference). Tutorial 1 pressure plate pattern, multiple-listener pattern.
- **Updated cross-references:** Custom Events (added Event Dispatchers), Blueprint Interface (added Event Dispatchers).
- **Running total:** 56 wiki pages.

## [2026-04-12] ingest | Variables from training knowledge

- **Source:** Training knowledge — fundamental Blueprint concept stable across UE4/UE5. Tutorial references for patterns.
- **Created:** [[Variables]] — Blueprint Concepts category. Types table (Boolean through Object), Get/Set, arrays (Add/Remove/Get/Length), variable settings (Instance Editable, Expose on Spawn, Private, Default Value). Four patterns from Tutorials 2–4: trigger-once gate, instance-configurable property, storing references, counter.
- **Running total:** 55 wiki pages.

## [2026-04-12] update | Collision overview enrichment from 5.7 docs clip

- **Source:** [Collision in Unreal Engine - Overview | UE 5.7](https://dev.epicgames.com/documentation/unreal-engine/collision-in-unreal-engine-overview?application_version=5.7) — clipped 2026-04-12
- **Updated:** [[Collision Components]] — added Collision Responses section: Block/Overlap/Ignore response table, interaction rules (both must Block, Overlap without Generate Overlap Events = Ignore, etc.), Object Type, Simulation Generates Hit Events. 3 images embedded (detail panel screenshots showing hit, overlap, and mixed settings).
- **Updated:** [[OnComponentHit]] — added Simulation Generates Hit Events requirement, link to Collision Components for full response system, added collision overview source.
- **Running total:** 54 wiki pages (no new pages, enrichment only).

## [2026-04-12] ingest | OnComponentHit from community tutorial clip

- **Source:** [Hits and Overlaps (BP + C++)](https://dev.epicgames.com/community/learning/tutorials/zw7m/unreal-engine-hits-and-overlaps-bp-c-multiplayer) — community tutorial, Blueprint Example #01 only (C++ and multiplayer examples skipped)
- **Created:** [[OnComponentHit]] — Events category. Blocking collision event with impact data (Normal Impulse, Hit Result). Hit vs Overlap comparison table. Projectile target pattern. Clears 3-link stub.
- **Updated:** [[OnComponentBeginOverlap]] (linked OnComponentHit in Related), [[Collision Components]] (replaced "page pending" with link).
- **Running total:** 54 wiki pages.

## [2026-04-12] ingest | MetaHuman from Tutorial 5

- **Source:** [[UE Tutorial 202 - MetaHuman Animations (WIP)|Tutorial 5]] Chapters A–C + [MetaHuman Documentation](https://dev.epicgames.com/documentation/metahuman/metahuman-documentation) (reference link, not clipped)
- **Created:** [[MetaHuman]] — new Characters category. Plugin setup, Full Rig vs Joints Only, reparenting to player character, retargeting animations, foot IK overview, Mixamo custom animation workflow. Points to Epic's MetaHuman docs hub for deeper reference.
- **Updated cross-references:** Character (added MetaHuman).
- **Running total:** 53 wiki pages.

## [2026-04-12] ingest | Animation Montage from Tutorial 5 + 3 clips

- **Sources:** [Animation Montage in UE | UE 5.7](https://dev.epicgames.com/documentation/unreal-engine/animation-montage-in-unreal-engine?application_version=5.7), [Play Montage | UE 5.7](https://dev.epicgames.com/documentation/unreal-engine/BlueprintAPI/Animation/Montage/PlayMontage?application_version=5.7), [Montage Play | UE 5.7](https://dev.epicgames.com/documentation/unreal-engine/BlueprintAPI/Animation/Montage/MontagePlay?application_version=5.7) — all clipped 2026-04-12
- **Created:** [[Animation Montage]] — Animation category. Wraps Animation Sequences with Blueprint control. Play Montage pin table, Montage Sections, Slots, Child Montages, Play Animation vs Animation Montage comparison table. MetaHuman Mixamo pattern from Tutorial 5 Chapter C.
- **Images:** 6 embedded (montagedemo.gif, createfromscratch.png, createfromsequ.png, montagesections.png, montage2.png, createchild.png).
- **Moved to Animation category:** Play Animation (was in Blueprint Nodes).
- **Updated cross-references:** Play Animation (added Animation Montage), Character (added Animation Montage).
- **Running total:** 52 wiki pages.

## [2026-04-12] ingest | Blueprint overview — Construction Script, Functions, Comments

- **Source:** [Blueprint Visual Scripting | UE 5.7](https://dev.epicgames.com/documentation/unreal-engine/blueprints-visual-scripting-in-unreal-engine?application_version=5.7) — clipped 2026-04-12
- **Created (2 pages):**
  - [[Construction Script]] — Blueprint Concepts category. Setup graph that runs at spawn and on editor changes. Construction Script vs BeginPlay comparison, context-dependent material pattern.
  - [[Functions]] — Blueprint Concepts category. Reusable logic with return values. Functions vs Custom Events comparison table, cross-Blueprint calling, inventory check pattern.
- **Updated:** [[Editor Workflows]] — added Comment Boxes section (press C to group nodes, color-coding).
- **Updated cross-references:** Custom Events (added Functions), Components (added Construction Script).
- **Also this session:** Components page verified against 5.7 docs clip — training-knowledge flag removed, source added.
- **Running total:** 50 wiki pages.

## [2026-04-12] ingest | Flow Control nodes from 4.27 clip

- **Source:** [Flow Control | UE 4.27](https://dev.epicgames.com/documentation/en-us/unreal-engine/flow-control-in-unreal-engine?application_version=4.27) — clipped 2026-04-12. Source is 4.27 but these fundamental nodes are unchanged in UE5.
- **Created (3 standalone pages):**
  - [[Switch]] — Blueprint Nodes category. Switch on Int/String/Name/Enum. Editing workflow, Default pin, multi-way routing patterns.
  - [[Gate]] — Blueprint Nodes category. Open/Close/Toggle execution valve. Ability cooldown and toggled interaction zone patterns.
  - [[MultiGate]] — Blueprint Nodes category. Sequential/random/looping pulse distributor. Cycling dialogue, randomized ambient events, one-time sequence patterns.
- **Expanded:** [[Flow Control]] — promoted from bullet-list accumulator to full reference page. Added detailed sections with pin tables, images, and patterns for: Flip Flop (expanded from bullet), DoOnce, DoN, ForLoop (+ ForLoopWithBreak variant), WhileLoop.
- **Updated cross-references:** Branch (added Flow Control, Switch), Sequence (added Flow Control, MultiGate), For Each Loop (added Flow Control with ForLoop contrast).
- **Images:** 17 embedded across all pages (node screenshots + wiring examples from clip).
- **Running total:** 48 wiki pages.

## [2026-04-11] ingest | Blueprint Interface from 5.5 clip + Tutorial 12

- **Source:** [Blueprint Interface in Unreal Engine | UE 5.5](https://dev.epicgames.com/documentation/unreal-engine/blueprint-interface-in-unreal-engine?application_version=5.5) — clipped 2026-04-11
- **Created:** [[Blueprint Interface]] — Blueprint Concepts category. Covers creating, editing signatures, implementing in Blueprints, calling without casting, limitations. Interface vs Cast To vs Actor Has Tag comparison table. Tutorial 12 readable item pattern.
- **Images:** 3 embedded (Content Browser creation, interface editor with READ-ONLY/INTERFACE watermarks, Details panel inputs/outputs).
- **Updated:** [[Flow Control]] — added Flip Flop (Tutorial 12 toggle pattern).
- **Running total:** 45 wiki pages.

## [2026-04-11] update | Tutorial 12 enrichments across 3 existing pages

- **Traces** — added Interface-based interaction pattern (Tutorial 12: E key → Line Trace → call Blueprint Interface function on Hit Actor). Added Blueprint Interface to Related.
- **Widget Blueprint** — added Add to Viewport vs Add to Player Screen comparison table and Remove from Parent. Added Tutorial 12 full-screen reading overlay pattern.
- **PlayerController** — added Set Ignore Look Input / Set Ignore Move Input pattern for disabling controls while reading (Tutorial 12).

## [2026-04-11] lint | Second lint pass (44 pages)

- **Broken links fixed (3):** Add to Player Screen, Create Widget, Widget Blueprint — all had wrong Tutorial 3 filename (`Counting Collectables and Printing to UI` → `Counting Collectables. Printing in the UI`)
- **Orphans fixed (2 of 6):**
  - Enhanced Input — added inbound links from Level Blueprint and Possess
  - Actor Has Tag — added inbound link from Traces
  - Flow Control, Transformation — left as-is (nascent accumulators, expected to be orphans)
  - Play Animation, Sound — low priority, will gain links as tutorials introduce related concepts
- **Stub links (10):** Blueprint (4 links, broad — defer), OnComponentHit (3), Level Sequence (3), Promote to Variable (3, covered in Getting References), Set Actor Rotation (2), Input Action (1, covered in Enhanced Input), others at 1 link. No urgent stubs.
- **False positive:** `Custom Events\` backslash was actually a valid pipe-delimited display-text link `[[Custom Events|Custom Event]]`.
- **No contradictions or stale claims found.**
- **Components** page training-knowledge flag still open — needs docs clip for Actor Component vs Scene Component hierarchy.
- **Running total:** 44 wiki pages.

## [2026-04-11] update | Set Timer by Event expanded with Function Name variant + Tutorial 10

- **Source:** [Set Timer by Function Name | UE 5.7](https://dev.epicgames.com/documentation/unreal-engine/BlueprintAPI/Utilities/Time/SetTimerbyFunctionName?application_version=5.7) — clipped 2026-04-11
- **Updated:** [[Set Timer by Event]] — renamed heading to "Set Timer," added comparison table (by Event vs by Function Name), added Tutorial 10 looping trace timer pattern (Detect Sight every 0.1s, Clear and Invalidate Timer by Handle).
- **No new page** — merged into existing page per wiki architecture (variants of the same concept belong together).

## [2026-04-11] ingest | Actor Has Tag from 5.7 clip + Tutorial 10

- **Source:** [Actor Has Tag | UE 5.7](https://dev.epicgames.com/documentation/unreal-engine/BlueprintAPI/Actor/ActorHasTag?application_version=5.7) — clipped 2026-04-11
- **Created:** [[Actor Has Tag]] — Blueprint Nodes category. Thin clip supplemented with Tutorial 10 context: Interactable tag filtering pattern, tag vs Cast To comparison, Actor Tags vs Component Tags distinction.
- **Running total:** 44 wiki pages.

## [2026-04-11] ingest | Components from Tutorial 10 + existing wiki pages

- **Created:** [[Components]] — Components category. Covers Actor Component vs Scene Component hierarchy, common built-in components table, creating custom Actor Component Blueprints, why separate logic into components, Get Component by Class / Get Owner patterns.
- **Note:** Actor Component vs Scene Component hierarchy from training knowledge — flagged for verification against docs clip.
- **Updated:** [[Getting References]] — added "By Component (Get Component by Class)" section with Get Owner.
- **Running total:** 43 wiki pages.

## [2026-04-11] ingest | Traces from 5.5 overview + single line trace guide + Tutorial 10

- **Sources:** [Traces Overview | UE 5.5](https://dev.epicgames.com/documentation/unreal-engine/traces-in-unreal-engine---overview?application_version=5.5) + [Single Line Trace By Channel | UE 5.5](https://dev.epicgames.com/documentation/unreal-engine/using-a-single-line-trace-raycast-by-channel-in-unreal-engine?application_version=5.5) — both 5.5 (best available)
- **Created:** [[Traces]] — new Physics & Traces category. Covers line/shape trace types, By Channel vs By Object, single vs multi, common pins, calculating start/end, Break Hit Result fields, draw debug. Three patterns: Tutorial 10 interaction system (Sphere Trace), camera-forward line trace, multi trace with For Each Loop.
- **Images:** 3 embedded (shape trace nodes side by side, Break Hit Result node, multi trace complete wiring).
- **Updated:** [[Getting References]] — added "By Trace (Hit Result)" section and Traces to Related.
- **Running total:** 42 wiki pages.

## [2026-04-11] ingest | Enhanced Input from 5.7 clip + Tutorial 6

- **Source:** [Enhanced Input in Unreal Engine | UE 5.7](https://dev.epicgames.com/documentation/unreal-engine/enhanced-input-in-unreal-engine?application_version=5.7) — clipped 2026-04-11
- **Created:** [[Enhanced Input]] — new Input & Interaction category. Covers Input Actions (value types, trigger states, Blueprint listeners), Input Mapping Contexts (hierarchy, runtime add/remove, priority), Input Modifiers (Negate, Swizzle, Dead Zone + WASD table), Input Triggers (Pressed, Hold, Tap, Chorded, explicit/implicit/blocker types), debug command. All C++ code skipped; Blueprint-only approach throughout.
- **Images:** 8 embedded (Content Browser input menu, IA editor with value types, Blueprint event graph search, Enhanced Input Action event node, IMC hierarchy, Add Mapping Context Blueprint wiring, modifier dropdown, WASD modifier setup).
- **Running total:** 41 wiki pages.

## [2026-04-11] ingest | Possess from 5.7 node ref + 5.5 guide + Tutorial 6

- **Sources:** [Possess | UE 5.7](https://dev.epicgames.com/documentation/unreal-engine/BlueprintAPI/Pawn/Possess?application_version=5.7) (node pins) + [Possessing Pawns | UE 5.5](https://dev.epicgames.com/documentation/unreal-engine/possessing-pawns-in-unreal-engine?application_version=5.5) (implementation guide — 5.5 is best available)
- **Created:** [[Possess]] — Gameplay Framework category. Covers Target/In Pawn pins, automatic UnPossess, network authority, character swapping pattern, cache-original-character tip, vehicle/turret use case. Generalized from Side Scroller template to any project.
- **Images:** 3 embedded (pawns7b: finding Possess from Get Player Controller, pawns4b: batch-create references, pawns9: completed wiring pattern).
- **Running total:** 40 wiki pages.

## [2026-04-11] ingest | Level Blueprint from 5.7 clip + Tutorial 6

- **Source:** [Level Blueprint in Unreal Engine | UE 5.7](https://dev.epicgames.com/documentation/unreal-engine/level-blueprint-in-unreal-engine?application_version=5.7) — clipped 2026-04-11
- **Created:** [[Level Blueprint]] — new Level Architecture category. Covers opening, referencing placed actors (right-click and drag-drop methods), adding per-actor events, default class config. Enriched with Tutorial 6 pawn possession pattern and GameMode contrast.
- **Images:** 9 images embedded from local `raw/images/` (editor layout, toolbar, actor referencing workflow, event binding).
- **Index updated:** Added Level Architecture section.
- **Running total:** 39 wiki pages.

## [2026-04-11] meta | Nascent accumulator pages + Getting References flagged

- **Created:** [[Flow Control]] (nascent — links to Branch, Sequence, For Each Loop), [[Transformation]] (nascent — links to Get/Set Actor Location, Set Relative Rotation)
- **Flagged as accumulators:** Getting References, Flow Control, Transformation (joining Editor Workflows, Sound, Collision Components, Blueprint Instances)
- **Running total:** 37 wiki pages.

## [2026-04-11] ingest | Editor Workflows, Blueprint Instances, Sound — 3 concept pages

- **Created:** [[Editor Workflows]] (Split Struct Pin + Promote to Variable), [[Blueprint Instances]] (Instance Editable, Expose on Spawn, class vs. instance), [[Sound]] (Play Sound at Location + Ambient Sound unified)
- **Deleted:** Play Sound at Location (merged into Sound)
- **Sources:** Tutorial 3 (Promote to Variable), Tutorial 4 Chapters A–D (Instance Editable throughout, Split Struct Pin in Chapter B, Ambient Sound in Chapter D), Play Sound at Location 5.7 clip
- **Running total:** 35 wiki pages.

## [2026-04-11] ingest | Tutorial 4 batch — 5 new pages

- **Created:** [[For Each Loop]], [[Branch]], [[Set Relative Rotation]], [[Play Sound at Location]], [[Play Animation]]
- **Sources:** 5.7 docs clips + Tutorial 4 context for all pages
- **Key enrichments:**
  - For Each Loop: array + Sequence pattern from Chapter A (multiple light types)
  - Branch: trigger-once bool gate pattern from Chapter A
  - Set Relative Rotation: Split Struct Pin workflow + parent-as-pivot trick from Chapter B
  - Play Sound at Location: Instance Editable sound variable from Chapter B
  - Play Animation: Mixamo NPC attack + timer-to-idle workaround from Chapter C
- **Running total:** 33 wiki pages.

## [2026-04-11] meta | Merged Box Collision + Sphere Collision + Generate Overlap Events → Collision Components

- **Deleted:** Box Collision, Sphere Collision, Generate Overlap Events (3 pages)
- **Created:** [[Collision Components]] — unified page covering all three collision shapes, shared settings (Generate Overlap Events, Collision Presets), events, debugging checklist, and patterns from Tutorials 1, 2, and 4.
- **Updated links in:** OnComponentBeginOverlap, OnComponentEndOverlap, Timeline, DestroyActor (all now use `[[Collision Components|display text]]` syntax)
- **Running total:** 28 wiki pages (was 31; deleted 3, no net new).

## [2026-04-11] update | OnComponentEndOverlap fully fleshed out

- **Rewrote:** No longer defers to BeginOverlap. Has its own pin table, setup instructions, destruction gotcha.
- **Added:** Tutorial 1 door-close pattern (paired with BeginOverlap), Tutorial 4 trigger-once pattern (intentionally no EndOverlap — explains when to skip it).

## [2026-04-11] update | Increment Int enriched with Tutorials 2+3

- **Fixed:** Removed "written from training knowledge" as sole source. Now sourced from Tutorial 2 (Step 3) and Tutorial 3 (Step 4B).
- **Added:** Add node as alternative counting pattern from Tutorial 3 — explains when to use each (Increment Int for simple bump, Add when you need the new value on the wire).

## [2026-04-11] update | Character enriched with Tutorial 4

- **Added:** Template character pattern (First Person + Third Person), NPC Mixamo pattern from Tutorial 4 Chapter C (BP_Zombie creation, animation mode, Play Animation + timer-to-idle workflow).
- **Reason:** Page was too abstract — no concrete tutorial patterns. Now has two.

## [2026-04-11] ingest | Sequence from 5.7 clip + Tutorial 4

- **Sources:** [Sequence | UE 5.7](https://dev.epicgames.com/documentation/unreal-engine/BlueprintAPI/Utilities/FlowControl/Sequence?application_version=5.7) — clipped 2026-04-11 + Tutorial 4 Chapter A
- **Created:** [[Sequence]] — Blueprint Nodes category. Thin clip supplemented with Tutorial 4 context: why Sequence over multiple wires, Timeline + dual For Each Loop pattern.
- **Running total:** 31 wiki pages.

## [2026-04-11] ingest | Getting References (synthesis page)

- **Sources:** Tutorial 3 (Self, Promote to Variable) + existing wiki pages (Get Player Controller, Get Player State, Cast To, Create Widget, OnComponentBeginOverlap)
- **Created:** [[Getting References]] — new Blueprint Concepts category. Covers: by-index lookup, overlap-provided refs, Self, return values, Promote to Variable. Folds in Self Reference and Promote to Variable from the Tutorial 3 queue.
- **Note:** First synthesis page — sourced from verified wiki pages and tutorials, not training knowledge.
- **Running total:** 30 wiki pages.

## [2026-04-11] ingest | Get Player Controller from two 5.7 clips

- **Sources:** [Get Player Controller (Gameplay Statics) | UE 5.7](https://dev.epicgames.com/documentation/unreal-engine/BlueprintAPI/Game/GetPlayerController?application_version=5.7) + [Get Player Controller (PlayerState) | UE 5.7](https://dev.epicgames.com/documentation/unreal-engine/BlueprintAPI/PlayerState/GetPlayerController?application_version=5.7) — clipped 2026-04-11
- **Created:** [[Get Player Controller]] — Blueprint Nodes category. Two versions on one page: standalone (by index) and PlayerState target. Tutorial 3 pattern.
- **Running total:** 29 wiki pages.

## [2026-04-11] ingest | TextBlock from Tutorial 3

- **Source:** [[UE Tutorial 3 - Scoring and UI|Tutorial 3]] — Sections 2A-2B
- **Created:** [[TextBlock]] — UI / HUD category. Covers Is Variable requirement, Set Text node, To Text conversion, score display pattern.
- **Note:** No standalone Epic docs page found for TextBlock. Tutorial 3 provided sufficient detail on usage, Is Variable, and Set Text workflow.
- **Running total:** 28 wiki pages.

## [2026-04-11] ingest | Add to Player Screen from 5.7 clip

- **Source:** [Add to Player Screen | UE 5.7](https://dev.epicgames.com/documentation/unreal-engine/BlueprintAPI/UserInterface/Viewport/AddtoPlayerScreen?application_version=5.7) — clipped 2026-04-11
- **Created:** [[Add to Player Screen]] — UI / HUD category. Covers Target and ZOrder inputs, split-screen behavior, Tutorial 3 pattern.
- **Running total:** 27 wiki pages.

## [2026-04-11] ingest | Create Widget from 5.7 clip

- **Source:** [Create Widget | UE 5.7](https://dev.epicgames.com/documentation/unreal-engine/BlueprintAPI/UserInterface/CreateWidget?application_version=5.7) — clipped 2026-04-11
- **Created:** [[Create Widget]] — UI / HUD category. Covers Class and Owning Player inputs, Return Value output, Tutorial 3 pattern.
- **Stub wikilinks placed:** [[Promote to Variable]]
- **Running total:** 26 wiki pages.

## [2026-04-11] ingest | Widget Blueprint from 5.7 clip

- **Source:** [Widget Blueprints in UMG for Unreal Engine | UE 5.7](https://dev.epicgames.com/documentation/unreal-engine/widget-blueprints-in-umg-for-unreal-engine?application_version=5.7) — clipped 2026-04-10
- **Created:** [[Widget Blueprint]] — first page in UI / HUD category. Covers creation steps, Designer tab (8 panels), Graph tab, and the Create Widget → Add to Player Screen runtime pattern.
- **Stub wikilinks placed:** [[Create Widget]], [[Add to Player Screen]], [[TextBlock]], [[Set Text]], [[UE Tutorial 3 - Counting Collectables and Printing to UI|Tutorial 3]]
- **Running total:** 25 wiki pages.

## [2026-04-08] update | Timeline rewrite from 5.7 clip

- **Source:** [Timelines in Unreal Engine | UE 5.7](https://dev.epicgames.com/documentation/unreal-engine/timelines-in-unreal-engine?application_version=5.7) — reclipped at 5.7 (was 5.5), Blueprint tab selected
- **Rewrote:** [[Timeline]] — aligned pin descriptions to source wording (Update pin, Finished pin). Removed Color Track from track types list (source only lists float, vector, event in the tracks section, though colors are mentioned in the overview). Removed [[Blueprint]] stub link from Related. Updated Source footer to 5.7.

## [2026-04-08] lint | First lint pass (24 pages)

- **Contradictions:** None found.
- **Stale claims:** Timeline source is 5.5, not 5.7. Reclipped by user; update pending.
- **Orphans:** None.
- **Missing cross-references fixed:**
  - [[OnComponentEndOverlap]] — added [[Sphere Collision]] to Related
  - [[Cast To]] — added [[PlayerState]], [[GameMode]], [[PlayerController]] to Related
- **Data gaps addressed:**
  - Created [[Generate Overlap Events]] — 4 inbound links, #1 student debugging issue
  - Remaining stubs: [[Blueprint]] (6 links, broad), [[Capsule Collision]] (3 links), [[OnComponentHit]] (2 links), [[Set Actor Rotation]] (2 links), others at 1 link
- **Running total:** 24 wiki pages.

## [2026-04-08] ingest | Remaining Tutorial 2 nodes (from clips)

- **Sources:** Set Timer by Event, Open Level (by Name), Print String, Get Player State — all UE 5.7 via Obsidian Web Clipper
- **Rewrote (4 pages):**
  - [[Set Timer by Event]] — added Max Once Per Frame, Initial Start Delay, Initial Start Delay Variance pins. Added <=0 clears timer, resetting existing timer behavior.
  - [[Open Level]] — fixed Absolute pin description (options reset vs carried over, not "absolute URL"). Added Options pin description from source.
  - [[Print String]] — added Key pin (replaces same-key messages on screen), negative Duration loads from config, Verbose logging detail.
  - [[Get Player State]] — added replication/consistency detail from source (works on client and server, consistent index after initial replication).
- **Updated:** [[Sphere Collision]] — now references [[Box Collision]] for shared details, covers only what differs. [[Box Collision]] updated with cross-reference to Sphere Collision.
- **Kept as-is:** [[Increment Int]] — no dedicated docs page exists; training-knowledge version accepted.

## [2026-04-08] ingest | Gameplay Framework concepts (from clips)

- **Sources:** Pawn in UE 5.7, Gameplay Framework in UE 5.7, Gameplay Framework Quick Reference in UE 5.7, Controllers in UE 5.7, Player Controllers in UE 5.7 — all via Obsidian Web Clipper
- **Created (4 pages):**
  - [[Pawn]] — physical representation, possessed by Controllers, DefaultPawn, SpectatorPawn, SetActorLocation movement
  - [[Character]] — Pawn subclass, CharacterMovementComponent, SkeletalMesh, CapsuleComponent
  - [[Controller]] — non-physical brain, Possess/Unpossess, one-to-one with Pawns, persistence across respawns
  - [[PlayerController]] — human input interface, input handling vs Pawn, persistence, owns HUD and camera
- **Rewrote:** [[PlayerState]] — replaced training-knowledge version. Added PlayerState vs GameState vs PlayerController comparison table, "what belongs where" guide, replication detail, better beginner framing from framework overview sources.
- **Note:** Two overlapping "Gameplay Framework" raw clips exist (Quick Reference + full overview). Neither gets its own wiki page — both serve as source material for individual concept pages. index.md serves the table-of-contents role.
- **Running total:** 23 wiki pages.

## [2026-04-08] ingest | GameMode + GameState (from clip)

- **Source:** [Game Mode and Game State in Unreal Engine | UE 5.7](https://dev.epicgames.com/documentation/unreal-engine/game-mode-and-game-state-in-unreal-engine?application_version=5.7) via Obsidian Web Clipper
- **Rewrote:** [[GameMode]] — replaced training-knowledge version. Added server-only detail, full function table (InitGame through Logout), match state machine, priority levels for setting GameMode, AGameMode vs AGameModeBase distinction. Removed invented "Restart Game" function.
- **Created:** [[GameState]] — new page from same source. Covers PlayerArray, GetServerWorldTimeSeconds, GameState vs PlayerState distinction.

## [2026-04-08] ingest | Custom Events (from clip)

- **Source:** [Custom Events in Unreal Engine | UE 5.7](https://dev.epicgames.com/documentation/unreal-engine/custom-events-in-unreal-engine?application_version=5.7) via Obsidian Web Clipper
- **Rewrote:** [[Custom Events]] — replaced training-knowledge version. Added CE/KE console commands, troubleshooting (compile warning, Refresh Nodes), default values on parameters, cross-graph calling, wire simplification emphasis. Removed unsupported "vs. Functions" claims.

## [2026-04-08] ingest | Tutorial 2 concepts (batch)

- **Source:** Training knowledge (UE docs blocked by Cloudflare — no clips). URLs recorded in each page's Source section.
- **Created (9 pages):**
  - [[GameMode]] — game rule system, class assignments, restart logic
  - [[PlayerState]] — per-player data container, collectable count pattern
  - [[Set Timer by Event]] — timer node with Custom Event delegate
  - [[Custom Events]] — user-defined events, delegate usage, vs. functions
  - [[Sphere Collision]] — spherical trigger volume, collectable pickup pattern
  - [[Open Level]] — level loading/restart node
  - [[Print String]] — debugging node, viewport and Output Log display
  - [[Get Player State]] — retrieves PlayerState by index, cast-to pattern
  - [[Increment Int]] — integer counter convenience node
- **Index updated:** Added Gameplay Framework category. Reorganized Blueprint Nodes alphabetically. Added Sphere Collision to Components, Custom Events to Events.
- **Running total:** 18 wiki pages.

## [2026-04-07] ingest | DestroyActor

- **Source:** [Destroy Actor | UE 5.7](https://dev.epicgames.com/documentation/unreal-engine/BlueprintAPI/Actor/DestroyActor?application_version=5.7) via Obsidian Web Clipper
- **Created:** [[DestroyActor]] — source was 3 words. Enriched with EndOverlap gotcha, self-destruction pattern, Tutorial 2 collectable chain.

## [2026-04-07] ingest | Get Actor Location

- **Source:** [Get Actor Location | UE 5.7](https://dev.epicgames.com/documentation/unreal-engine/BlueprintAPI/Transformation/GetActorLocation?application_version=5.7) via Obsidian Web Clipper
- **Created:** [[Get Actor Location]] — paired-page pattern (option 3), references [[Set Actor Location]]. Added store-start-position and distance-check patterns.

## [2026-04-07] update | Tutorial wikilinks

- **Updated:** All 7 wiki pages — converted plain-text "Tutorial 1 pattern" references to real wikilinks (e.g., `[[UE Tutorial 1 - A Floor Plate Opens A Door|Tutorial 1]]`).
- **Rule added to CLAUDE.md:** all future pages must link tutorials this way.

## [2026-04-07] ingest | Set Actor Location

- **Source:** [Set Actor Location | UE 5.7](https://dev.epicgames.com/documentation/unreal-engine/BlueprintAPI/Transformation/SetActorLocation?application_version=5.7) via Obsidian Web Clipper
- **Created:** [[Set Actor Location]] — decent source with Sweep/Teleport details. Covers Timeline-driven door and instant teleport patterns.
- **New stubs:** [[Set Actor Rotation]], [[Set Actor Location and Rotation]], [[Get Actor Location]]

## [2026-04-07] ingest | Cast To

- **Source:** [Cast To Character | UE 5.7](https://dev.epicgames.com/documentation/unreal-engine/BlueprintAPI/Utilities/Casting/CastToCharacter?application_version=5.7) via Obsidian Web Clipper
- **Created:** [[Cast To]] — general casting page, not just Cast To Character. Covers why students cast to template Blueprints (BP_ThirdPersonCharacter) rather than the base Character class.
- **New stubs:** [[Character]], [[Get Player Character]]

## [2026-04-07] ingest | Box Collision

- **Source:** No clean UE docs page exists. Clipped page (Add Collision Component) was about Groom hair collision — wrong target. Page written from training knowledge.
- **Created:** [[Box Collision]] — covers adding the component, key settings (Box Extent, Generate Overlap Events, Collision Presets), events, floor plate pattern.

## [2026-04-07] ingest | OnComponentEndOverlap

- **Source:** [On Component End Overlap | UE 5.7](https://dev.epicgames.com/documentation/unreal-engine/BlueprintAPI/Collision/OnComponentEndOverlap?application_version=5.7) via Obsidian Web Clipper
- **Created:** [[OnComponentEndOverlap]] — used paired-page pattern: references [[OnComponentBeginOverlap]] for shared details, focuses on differences.

## [2026-04-07] meta | Paired page pattern

- **Decision:** Paired concepts get separate pages; the secondary page references the primary for shared mechanics. Precedent for future pairs.

## [2026-04-07] ingest | OnComponentBeginOverlap

- **Source:** [On Component Begin Overlap | UE 5.7](https://dev.epicgames.com/documentation/unreal-engine/BlueprintAPI/Collision/OnComponentBeginOverlap) via Obsidian Web Clipper
- **Created:** [[OnComponentBeginOverlap]] — source was 3 lines. Enriched with output pins, setup requirements, Tutorial 1 & 2 patterns.
- **New stubs:** [[OnComponentEndOverlap]], [[OnComponentHit]], [[Sphere Collision]], [[Capsule Collision]], [[Cast To]], [[Generate Overlap Events]]

## [2026-04-07] ingest | Lerp

- **Source:** [Lerp | UE 5.7](https://dev.epicgames.com/documentation/unreal-engine/node-reference/Dataflow/Lerp) via Obsidian Web Clipper
- **Created:** [[Lerp]] — source was API reference only. Enriched with typed variants, Alpha clamping, Tutorial 1 pattern.
- **New stubs:** [[Set Actor Rotation]]

## [2026-04-07] ingest | Timeline

- **Source:** [Timelines in Unreal Engine | UE 5.5](https://dev.epicgames.com/documentation/unreal-engine/timelines-in-unreal-engine?application_version=5.5) via Obsidian Web Clipper
- **Created:** [[Timeline]] — covers input/output pins, track types, common patterns.
- **New stubs:** [[Blueprint]], [[Lerp]], [[Level Sequence]], [[OnComponentBeginOverlap]], [[Box Collision]], [[Set Actor Location]]

## [2026-04-07] meta | Structure initialized

- Created folder structure: `raw/`, `wiki/`, `index.md`, `log.md`, `CLAUDE.md`
- First target: Blueprint concepts from Tutorial 1

