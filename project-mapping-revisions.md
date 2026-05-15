---
publish: false
---

# project-mapping skill — Revision Log

*Append-only history of changes to `project-mapping.md`. Each entry: date, what was wrong (or learned), the rule that was added/changed.*

*Moved out of the skill file 2026-05-13 to reduce runtime token cost — the log is for maintainers (instructor + Claude during instructor sessions); the runtime companion only needs the current rules in the body. Before the move, all load-bearing "why" reasoning was harvested into the skill body and all open questions were moved to `companion-todo.md`.*

---

### 2026-05-11 — First draft

Skill created after instructor approved the capability map. Workflow built around: listen for experience → identify role → decompose features → map → order → summarize. Tone rules promoted to a non-negotiable section at the top per `feedback_companion_never_discourage`. Entrant/Dreamer mechanical identity called out in Step 2.

Untested — first real use will surface what's missing.

### 2026-05-11 — SPR naming: role names yes, abbreviation no

**What was wrong:** First draft conflated two things by forbidding both "SPR" and role names from student-facing language. Over-corrected.

**Rule clarified:** Role *names* (Investigator, Traveler, Entrant, Dreamer) are vocabulary students learn in class — cite directly to students, link to SPR pages freely. The *abbreviation* "SPR" / "SPR 1-4" is internal shorthand only. Don't lead with role-naming during initial listening (preempts the student's own articulation), but use names freely from Step 2 onward.

**Changed:** Step 1's parenthetical ("do not say 'SPR' or name the roles") replaced with the abbreviation-vs-name distinction. Step 2's "Naming back to the student" rewritten to encourage role names and SPR-page linking.

### 2026-05-11 — Assignment context drives the conversation

**What was missing:** First draft treated every project planning conversation as open-ended role-discovery. But assignments are named after the player roles and run in sequence (Investigator → Traveler → Entrant/Dreamer → open). When a student is on a named-role assignment, the role is *given*, not discovered, and cross-role features should be deferred to "save for [future assignment]" rather than included in the plan.

**Rules added:**
- New **Step 1 — Context check** inserted before listening. Asks whether this is an assignment or open project. Establishes which "branch" (named-role vs. open) the rest of the conversation runs in.
- All subsequent steps renumbered (Listen → Step 2, Identify → Step 3, etc.).
- **Step 3 split into two branches** — Branch A (named role: confirm + connect) and Branch B (open project: identify). Cross-role features under Branch A get reframed as "coming later in the semester."
- **Step 5 (feature mapping)** gained an "Off-role for a named-role assignment" handling category, distinct from "Off-map."
- **Step 6 (build order)** distinguishes open-project span-two-roles ordering from named-role-with-cross-role-features ordering.
- **New edge case:** "Student on a named-role assignment with an idea mostly in a different role" — redirect to an in-role angle on the same world; park the off-role vision for a future assignment.
- **Time-aware role vocabulary** introduced in Step 1 and Step 3 Branch A: during Assignment 1, only the Investigator role is established class vocabulary; other role names function as "coming up" orientation, not assumed knowledge.

**Source:** instructor clarification on 2026-05-11 about assignment structure.

*Later superseded:* the "save for [future assignment]" / "deferred to a future assignment" / "coming later in the semester" framing was reversed on 2026-05-13 (see entry below). Cross-role features now get *referenced*, not deferred — scope is the student's call.

### 2026-05-11 — Two-response pattern + player-character-first build rule

**What was missing:** First test of the skill (ghost-gallery Traveler idea) produced a single response that jumped straight to a reframe. The reframe was warranted, but offering only the reframe risked feeling like the student's idea had been rejected. Also: the build order didn't begin with getting a player character working, which is a precondition for testing any of the rest.

**Rules added:**
- **Two-response pattern** (Step 3 trigger, Step 7 format). When the idea calls for a *reframe* (a real shift, not a small "save this for later" note), produce two responses: (1) embrace the idea as described within the assigned role, acknowledging tensions honestly; (2) the reframe. Open by naming both so the student knows what they're reading. Both responses must be *complete* (full build order, full feature mapping, full closer) — Response 1 doesn't get shortchanged. The student picks. Memory: `feedback_two_response_pattern_for_reframes`.
- **Player character first in every build order.** Added as the top principle in Step 6 and as item 1 in every Step 7 summary template. Default templates work; Tutorial 202 for MetaHuman. Easy to skip, foundational not to skip.

**Source:** instructor feedback on the ghost-gallery test, 2026-05-11.

### 2026-05-12 — Skill renamed; Assignment 3 redefined as hybrid

**Rename:** `project-planning.md` → `project-mapping.md`. The skill is delivered as part of The Companion bundle (folder-based delivery, not a single-file drop). Internal references updated.

**What changed:** Assignment 3 was originally "Entrant or Dreamer (instructor picks)." It's now the **Playable Narrative** — a hybrid Investigator + Traveler assignment, and the final assignment of the course. Entrant and Dreamer are introduced as concepts in class but features leaning into those roles are **beyond the assignment's scope** (no later assignment to defer to).

**Rules added:**
- **Step 1 table** updated for the new Assignment 3 shape. "Final / open project" row removed — A3 IS the final.
- **Step 1 "Two paths"** became **three paths**: single-role assignment (A1/A2), hybrid assignment (A3), open project (non-course exploration).
- **Step 3 split into three branches**: Branch A (single-role, was the only "named-role" branch), Branch B (hybrid — new), Branch C (open, was Branch B). Hybrid branch names both Investigator and Traveler as primary lenses; off-role features (Entrant/Dreamer) get "beyond the assignment's scope" framing, not deferral.
- **Step 5 feature mapping** gained a new category: "Beyond the assignment's scope (A3 hybrid, Entrant/Dreamer features)" — same enthusiastic-pointing-out tone as off-map, no "save for later" phrasing.
- **Step 6 build order** distinguishes single-role cross-role handling (defer to future assignment) from hybrid Entrant/Dreamer handling (beyond scope, not in build order). Added hybrid two-role-span sequencing principle (parallel to open-project two-role-span).
- **New edge case:** "Student on Assignment 3 with idea mostly in Entrant or Dreamer" — redirect to the I+T angle on the same world; frame the off-role vision as something they could build on their own after class.

**Source:** instructor specification on 2026-05-12 as part of the Companion bundle preparation for week-8 delivery.

**Status:** still untested in the new hybrid form. Next session: run a worked example on an I+T hybrid idea before student delivery.

*Later superseded:* "redirect to the I+T angle" and "save for own time after class" reversed on 2026-05-13 — see entry below. Both angles are now surfaced; student picks which (or both).

### 2026-05-12 — Lead every response with the student's verbatim idea

**What was missing:** The ghost-gallery worked example (the only test of the skill so far) didn't preserve the student's original idea — only the companion's summary of it. When re-reading the file later, the input that prompted the response was gone. A worked example or a project-folder save is only useful as a record if it includes both sides.

**Rule added:** Step 7 now requires every response (one-response or two-response) to **lead with the student's idea, verbatim**, in a quoted block. Don't paraphrase. If the idea was spread across multiple messages, stitch the relevant parts together. In the two-response format, the idea block appears once at the top, not inside each response.

**Source:** instructor feedback on 2026-05-12 — `ghost-gallery-response.md` doesn't have the original idea, ensure it's at the top for future responses.

### 2026-05-12 — Look for a tradeoff worth naming (player-facing, designed-in)

**What was missing:** The skill could identify roles, map features, and sequence builds, but it didn't ask the companion to surface the **decisions the world forces on the player**. Worked examples (e.g., ghost gallery) implicitly contained tradeoffs — during lightning the player can read the paintings but loses track of the ghost; in darkness the reverse — but the skill never named the concept or asked for it.

**Rule added:** New sub-section in Step 7 — "Look for a tradeoff worth naming." A tradeoff is a **player-facing decision designed into the world**: to gain one thing, the player must give up another. Tradeoffs create tension; tension creates meaningful play. Includes a taxonomy of common shapes (visibility, spatial, resource, risk/reward, identity) and a probe question for ideas without one yet: *"What does the player give up to do X?"*

**What it is NOT:** A development-cost or designer-side tradeoff ("the dark world costs legibility") is a *secondary* concern. The skill is interested in tradeoffs *designed into the play experience*, not the designer's accounting of what the design forfeits.

**Templates updated:**
- One-response template gained an optional `Tradeoff the player faces:` line before "The part I'm most excited about."
- Two-response template notes that the two responses likely surface *different* player tradeoffs; name both so the student can pick by weighing what each version asks the player to weigh.

**Source:** instructor request on 2026-05-12, with same-day clarification: "We are interested in ones designed into [the game] (or are latent in the idea and you're pointing it out). Such tradeoffs are great. They create tension for the player, they face a challenge of decision." The ghost gallery's lightning ↔ darkness ↔ paintings ↔ ghost was given as the canonical example.

### 2026-05-12 — Workshop-walk test surfaces four rules

**Source:** First test of the I+T hybrid form (workshop-walk-response.md, grandfather's woodworking workshop idea). Instructor feedback on the draft surfaced four rule additions.

**Rules added:**

1. **Import models — usually from Fab — is a build-order step in nearly every project.** Added to Step 6 as a principle right after "player character first." Almost no project lives only on default Unreal primitives; Fab is the most common source. The principle: stage with placeholder geometry first to feel the space, then dress in. Previously implicit; now explicit so the skill names it in every build order.

2. **Sniff-test "off-map" before flagging it.** Many features that look custom (handwritten text, glowing runes, bloodstains) are just a Material (Tutorial 401) applied inside an existing tutorial. The workshop-walk draft flagged "handwritten-looking text" as outside-the-vault when it's actually 401 + 801. Added to Step 5 as a rule: reach for the in-vault interpretation first; only flag off-map if the feature genuinely requires a system the vault doesn't teach.

3. **SPR citations to students link to the published webpage URL, not a wikilink.** Students read responses via the published site or chat — wikilinks won't resolve for them. Added to the Tone section as a non-negotiable rule, with the four SPR webpage URLs listed inline for direct reference.

4. **Saved summaries use distinctive filenames.** Not `project-plan.md` (generic) but `project-plan-workshop.md`, `project-plan-ghost.md`, etc. Students explore multiple ideas; distinctive filenames mean nothing gets overwritten. Updated Step 7's save offer accordingly.

**Open question for future iteration:** when is *one* tradeoff right vs. *two* in a response? Workshop-walk had two (pocket choice; witnessing vs. gathering); both were genuine but the response may have been heavier than needed. No rule yet — tracked in `companion-todo.md` for criteria development.

### 2026-05-13 — Two new optional summary sections: example reference and instructor consult

**What was missing:** Responses ended with tradeoff + closer, but didn't (1) point students at a curated reference they could go look at, or (2) name a genuine design question that warrants real conversation with the instructor. Both are commonly latent in the idea-mapping conversation; both deserve a designated line so the companion will reliably surface them.

**Rules added:**

1. **Cite an example to look at (optional).** Step 7 gained a new sub-section between the tradeoff rule and the one-response template. When a game or film in `References/` genuinely resonates with the student's idea, name it with one sentence on the connection. **In-bundle list first**; off-list citations get instructor-side logged per `charter.md`'s gap-log flow so the folder grows. One example typical; up to two when each illuminates a distinct facet (mechanic vs. tone). Skip if nothing fits — don't force a citation.

2. **Worth bringing up with the instructor (optional).** Step 7 gained a new sub-section after the example-reference rule. When the conversation surfaces a real question the companion shouldn't decide — role ambiguity, scope ambition, meaning/intent, technical direction outside the vault — name it as a *specific* conversation worth having. Not generic "ask your professor for feedback"; specific or skip.

**Templates updated:**
- One-response template gained `A reference to look at:` and `Worth bringing up with the instructor:` lines, placed between the tradeoff line and the "excited about" closer.
- Two-response template commentary notes that each response likely points to a different reference and may raise a different (or no) instructor question — name both where present. The "which response should I pick?" question is explicitly **not** an instructor question; that's the student's call.

**Source:** instructor request 2026-05-13.

**Status:** exercised by `library-after-hours-response.md` later 2026-05-13 (Investigator A1 test). Both new sections worked well.

### 2026-05-13 — Library-after-hours test surfaces four refinements

**Source:** First A1 (Investigator, single-role) worked-example test — `library-after-hours-response.md`. Instructor feedback on the draft surfaced four rule changes.

**Rules added/changed:**

1. **"Outside the vault" → "What to look up on your own."** The previous template heading used internal Obsidian jargon ("vault") in a student-facing context. New heading is concrete, action-oriented, no jargon. Updated in one-response template (Step 7) and the two-response commentary. Companion-internal language (the term "vault" when referring to the bundle) is unchanged in instructor-facing rule text — the rule is about *student-facing* phrasing.

2. **Don't discourage cross-role features — never use "save for later" framing.** Previously, Step 3 Branch A, Step 5 (off-role on single-role assignment), and Step 6 (build order) all used "save for [future assignment role]" / "deferred to a future assignment" framing for cross-role features on A1/A2. Instructor flagged this as discouragement, even when softly worded. New rule:
   - **Reference** where the feature primarily lives (role + assignment + tutorials) ✅
   - **Never** tell the student to save it, defer it, or "anchor on" the in-role work instead ❌
   - Scope is the student's call. The companion's job is to map, not to gatekeep.
   - Build orders can include cross-role features if integral to the student's idea — flag where they primarily live, then include.
   - Good/bad phrasing examples now inline in Step 3 Branch A and Step 5. Memory: `feedback_no_discourage_cross_role`.

3. **Tradeoff section gets a compressed format when no tradeoff is designed in.** The library-after-hours draft used the full-strength tradeoff treatment for an idea that had no tradeoff designed in yet — the result was heavier than warranted. New format split:
   - **Full-strength** (tradeoff designed in): existing behavior.
   - **Compressed** (no tradeoff designed in yet): list 2-3 directions, end with **"We can discuss this further if you want."** No long intro or outro. Template included inline. Memory: `feedback_tradeoff_succinct_when_undesigned`.

4. **Vocabulary rules added to Tone section:**
   - **Avoid "marginalia"** — use "notes in the margins," "scribbles," "handwritten notes." Memory: `feedback_avoid_marginalia`.
   - **Don't characterize the class as "worldbuilding"** in student-facing language, even though it is. The frame is implicit, not invoked. Memory: `feedback_no_worldbuilding_framing`.

   *(These were initially added as memory-only on the assumption they were general writing rules; on the same day they were moved into the skill's Tone section after realizing the runtime companion doesn't read memory.)*

**Source notes:** Instructor also confirmed the new "Worth bringing up with the instructor" section worked well (no change). The library-after-hours test was a clean exercise of Branch A and both new optional sections.

**Status:** updated rules untested. Tracked in `companion-todo.md`. Next worked-example test should re-exercise — especially the no-discourage-cross-role rule, which has the most surface area in the skill.

### 2026-05-13 — Revision log moved to a separate file; load-bearing reasoning harvested

**What changed:** The Revision Log was previously appended in-line to `project-mapping.md`. It had grown to ~140 lines and was loaded on every runtime invocation of the skill, consuming tokens for content that's only useful to maintainers (instructor + Claude during instructor sessions), not to the runtime companion serving students.

**Moved:** Log content moved to this file (`project-mapping-revisions.md`, `publish: false`). Skill's Revision Log section replaced with a one-line pointer.

**Harvested into the skill body before moving** (so runtime quality isn't degraded by the loss of in-log "why" reasoning):

1. **Tradeoff section gained "Not a designer-side cost" clarification.** Previously only in the 2026-05-12 tradeoff entry. The body now explicitly distinguishes player-facing tradeoffs from designer-accounting costs ("the dark world costs legibility") — load-bearing for edge-case judgment.

2. **Step 3 two-response trigger gained "why two" reasoning.** Previously only in the 2026-05-11 two-response-pattern entry. The body now states: offering only the reframe risks feeling like rejection; two responses preserve authorship and let the student pick. Helps the companion judge whether mild cross-role tension warrants two responses.

3. **Tone section vocabulary block expanded** with the marginalia and worldbuilding rules (corrected from the prior memory-only status — see the 2026-05-13 entry above).

**Harvested into `companion-todo.md`:**
- The "test post-2026-05-13 skill updates" status (especially no-discourage-cross-role) — was a "Status: untested" line in the log; now lives as a live todo.

The 1-vs-2 tradeoffs question was already tracked in `companion-todo.md`; no additional move needed.

### 2026-05-15 — Numbered questions scoped to the first response only

**What was wrong:** The earlier numbering rule (numbers continue across turns) produced an awkward `4.` label on a single conversational question in turn 3 of the Sylvia conversation, mid-flow. Instructor flagged: numbering subsequent turns reads as bureaucracy when the conversation is just flowing back-and-forth.

**Rule refined:**

- **Numbers** appear in the **very first companion response only** (typically the Step 1 context check + any Step 2 listening probes in that opening turn). Numbering helps the student answer the opening batch piece by piece.
- **After the first response, conversational questions go unnumbered.** Just plain questions in conversational flow.
- **Letters (A, B)** still apply to the two closing follow-ups in Step 7's planning template. Unchanged.

**Changes:** Tone section's labeling rule rewritten with the tighter scope. Step 7 follow-ups subsection's cross-reference updated. Template `_response-template.md` updated. `response-sylvia-house.md` preamble consolidated to reflect the final form (the intermediate "numbered #4/#5" form is noted as superseded).

**Source:** instructor feedback 2026-05-15 mid-conversation, after the `4.` label appeared in turn 3 of the live Sylvia walkthrough.

### 2026-05-15 — Four format rules from continued Sylvia review

**Source:** Continued instructor review of `response-sylvia-house.md` (same session as the instructor-doesnt-gate entry below). Four format additions.

**Rules added/changed:**

1. **Number questions across the whole conversation.** Added to the Tone section. When the companion asks the student a question — Step 1 context check, Step 2 listening probes, Step 7 follow-ups — number it. Numbering continues across turns: if turn 1 asked 3 questions, the next is #4. Reason: numbered questions are easy for the student to refer back to ("for #2…") without ambiguity.

2. **Two follow-up questions required at the end of every response.** New sub-section in Step 7, after "The part I'm most excited about." Format: **"Tell me more about ___"** with the blank filled by a *specific aspect* of the student's idea (a moment, a mechanic, a juxtaposition). Menu of question shapes: juxtapositions/contrasts, what the player feels at a moment/mechanic, what the player learns at a moment/interaction, what the player wonders or ponders, what will surprise them, what's clear vs. ambiguous. Pick two distinct aspects so they don't overlap. The two questions extend the closing momentum into the next turn. One-response template updated to include the new lines (lettered A and B); two-response commentary updated — the two follow-ups appear *once* at the very end (after both responses), about the *idea* (which both responses share), not about which response to pick.

   *Refined later 2026-05-15:* the closing pair is always **labeled A and B**, not numbered. Numbers are reserved for back-and-forth conversation questions (Step 1 context checks, Step 2 listening probes, clarifying mid-planning), which continue numbering across turns. The lettered closing pair is always A and B regardless of how many numbered questions preceded — keeps them visually distinct. Tone section's labeling rule split into two schemes (numbers vs. letters); Step 7 follow-ups subsection updated; one-response template format block updated; all three existing response files retrofitted (Sylvia A/B, workshop-walk A/B, library-after-hours A/B). Reason: in the Sylvia file the follow-ups were numbered #4 and #5 because turn 1 had 3 numbered clarifying questions, which made the labeling depend on conversation history rather than carrying a stable visual signature. A/B is stable and instantly recognizable as "the closing pair."

3. **Linking — wikilink in-vault, URL out-of-vault.** Recants the prior SPR-URL-only rule (which was based on the assumption that students only read via chat). Wikilinks resolve in Obsidian *and* are processed correctly by Obsidian Publish into clickable site links. Use **wikilinks** for in-vault targets — SPR pages, Reference pages, wiki pages, tutorials. Use **URLs** only for out-of-vault targets — UE official docs, Steam pages, YouTube, external sites. The Tone section's old SPR-URL bullet (with the four full URLs listed) was replaced with the new wikilink rule plus a one-line link to the memory. Memory: [[prefer-wikilinks-in-vault]].

4. **Worked-example response template.** Created `_response-template.md` in `The Companion (Instructor)/`. Skeleton structure with placeholders for all sections (preamble, idea quote, project restate, what-kind-of-experience with role bullets, build order, what-to-look-up-on-your-own, tradeoff in compressed-or-full form, reference, instructor-consult, excited-about, two-follow-ups, save-offer). Used in iterate-companion sessions instead of reading prior response files to derive format — saves both token cost and drift risk. Pointer added to `companion-todo.md` under a new "Maintainer files" section.

**Source:** instructor feedback 2026-05-15.

**Status:** `response-sylvia-house.md` updated to use wikilinks throughout and to include the two numbered follow-ups (#4 and #5, continuing from 3 prior clarifying questions in turn 1). Preamble updated to flag the four new rules.

### 2026-05-15 — Instructor doesn't gate; "Worth bringing up" scope narrowed to theme / opportunity / affect

**What was wrong:** The Sylvia-house worked example (second I+T hybrid test) noticed that the player's Investigator mechanics were absent (VO doing the I-work, no player-discoverable evidence) and turned that into an instructor question: *"Worth checking with the instructor whether (a) the design as-is satisfies the Investigator side of the assignment, or (b) you'd want to add evidence pieces…"* Instructor flagged this as wrong on multiple counts: **the instructor doesn't gate or grade students for deviating from a role's mechanical pattern**, and "does this satisfy the assignment" is exactly the kind of question that implies a gate the instructor doesn't operate. Role observations belong inline as analysis. The instructor-consult section is for a narrower scope: **theme, opportunity, and how to communicate ideas/moods to the player affectively**.

**Rules added/changed:**

1. **Step 7 "Worth bringing up with the instructor" section rewritten.** The four prior triggers (role ambiguity, scope ambition, meaning/intent, technical direction) collapsed and replaced with three legitimate ones — **Theme, Opportunity, Affective communication** — plus an explicit "what does NOT qualify" block calling out role-mechanical fit and engineering choices. The role-ambiguity, scope-ambition, and technical triggers are removed: those are gating-flavored or engineering, neither of which is the instructor's territory. Sensitive content (autobiography, violence, identity) folds into Theme.

2. **Companion handles role-mechanical gaps as inline observation, not as instructor questions.** When a project shows a role-mechanical gap (e.g., the Investigator content is present but the player isn't mechanically finding evidence), name it as a *fact about the design* with directions left open for the student to take or not. Do not escalate. Memory: [[instructor-doesnt-gate]].

3. **Sylvia-house response file updated** in line with the new rule. The Investigator bullet in "What kind of experience" absorbed the role-mechanics observation (with directions named as opportunities the student can take or not). The "Worth bringing up with the instructor" section was replaced with a theme question (where Sylvia's arc lands → what the work is about) and an affective question (how the player should feel the child-body / adult-VO gap → pacing, silence, music, ending).

**Source:** instructor feedback 2026-05-15.

**Possibly affects existing files:** `response-library-after-hours.md` ends its instructor-consult section with "which lands strongest in the course's worldbuilding frame" — a "lands strongest" closer that softly implies instructor adjudication of fit, plus the already-forbidden "worldbuilding frame" vocabulary. Not retro-edited; flagged here for awareness.

### 2026-05-14 — No numbered assignments in student-facing prose

**What was wrong:** First real Gemini session opened by asking the student "Assignment 1, 2, or 3?" with role and hybrid labels. Administrative framing — students think in terms of what they're making, not numbered slots. The skill's Step 1 question ("Is this for one of the named-role assignments… if they say an assignment, confirm which") combined with the table that led with `Assignment N` as its first column led the companion to enumerate by number.

**Rule added** (to Tone section vocabulary): Never refer to assignments by number to students. Use role/project names — the **Investigator** project, the **Traveler** project, the **Playable Narrative** final. Numbered framing is internal shorthand only.

**Changes to the skill:**

1. **Step 1 table restructured.** Role/project name is now the lead column; the numbered label demoted to a third "Internal label" column with explicit "never surface to the student" guidance.
2. **Step 1 question recast.** Now asks the student by role/project name directly: *"Is this for the Investigator project, the Traveler project, the Playable Narrative final, or something you're exploring on your own?"* Followed by an explicit prohibition on enumerating by number.
3. **Tone section vocabulary block** gained a third bullet (alongside marginalia and worldbuilding) for the no-numbered-assignments rule.
4. **Three good-phrasing examples** updated to swap "Assignment 2's territory" / "that's what Assignment 2 is built for" → "the **Traveler** project's territory" / "that's what the **Traveler** project is built for." Locations: Step 3 Branch A cross-role guidance, Step 5 off-role mapping rule, edge case for single-role student with cross-role idea.

Agent-facing labels (branch headers like "Single-role assignment (Assignment 1 or 2)", time-aware vocab notes) deliberately retained — they're shorthand for the agent's internal reference, not student-facing prose.

Memory saved: [[feedback_no_numbered_assignments_to_students]].

**Source:** instructor question 2026-05-13 about the log's runtime cost vs. value. Three-step pass agreed: harvest "why" + harvest open questions → move log.
