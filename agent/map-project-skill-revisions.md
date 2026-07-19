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

### 2026-05-15 — Tradeoff section opener; tell-student-about-wiki-gaps reversal

**Source:** Two pieces of instructor feedback after the Sally / Gemini test session and Sylvia worked-example review.

**Rules added/changed:**

1. **Tradeoff section always opens with a framing line.** Step 7's tradeoff sub-section now requires the response to open with the verbatim line *"Often designing tradeoffs is a compelling way to engage the player."* — for both formats. The line frames the section pedagogically (this is *why* we're naming it) before either naming a designed-in tradeoff or proposing directions for adding one. The earlier rule "don't pad with explanations of why tradeoffs matter" was changed to "don't pad beyond the opening framing line" — the line itself is now the explanation. Compressed-format template updated; full-strength rule updated; `_response-template.md` updated; all three existing response files retrofitted (Sylvia, workshop-walk, library-after-hours).

2. **Wiki gaps: tell the student briefly. (Recant of "don't narrate" rule.)** Sally's Gemini session correctly logged a wiki gap when she asked about freezing player controls — but didn't tell Sally what was happening. Instructor flagged: the student *needs* the meta-information to weigh confidence (wiki-backed answer comes from curated course content; training-backed answer comes from LLM general knowledge and may drift from course conventions). The earlier `project-mapping.md` rule "do not narrate the logging to the student or frame it as a vault deficiency" is recanted. New rule: when falling back on training knowledge, the Companion **logs the gap AND tells the student in one short line** ("this isn't in the course wiki yet — answering from general knowledge"). Brief and matter-of-fact: no apology, no narration of the logging mechanism, no framing of the wiki as deficient. The charter (which already had a "tell the student" line) was tightened to emphasize the user-facing line is non-negotiable. Memory: [[tell-student-about-wiki-gaps]].

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

### 2026-05-18 — Companion may never run git or any remote operation

**What was wrong:** First in-class test of the Companion with 20 students in 128 surfaced a runtime over-reach. One student's session correctly logged a wiki gap to `TheCompanion-gaps.md`, then tried to push to the instructor's GitHub. The push failed (no credentials), but a successful push would have leaked the student's session into the instructor's repo. The runtime inferred "log the gap" meant "commit + push the change."

**Rules added:**

1. **Blanket "never run git" rule** in `charter.md`'s "What not to do" section. Covers every file the Companion writes — `TheCompanion-gaps.md`, saved project plans, anything in `student-only/`. No `git add`, `commit`, `push`, `pull`, or any remote operation. Hard rule, no exceptions.

2. **Gap-log flow tightened** in `charter.md`'s "Where to look first" — new paragraph after the "do not skip the gap log" line: logging means editing the file and stopping. The student's bundle is a local copy; the instructor syncs gaps on their side.

3. **Tone-section wiki-gap bullet** in `project-mapping.md` gained a pointer to the charter's blanket rule.

**Source:** 2026-05-18 in-class test of the Companion with 20 students in 128.

**Memory:** [[companion-no-git-or-remote]].

### 2026-05-18 — Student-only files: `student-only/` for student-side memory

**What was missing:** Students using the Companion had no designated home for personal memory — session continuity, notes, references they collect, project plans, questions for the instructor. Project plans were saved to "the student's project folder" (location undefined for a folder-delivered Companion); nothing else had a home.

**Rules added:**

1. **New `## Student-only files` section in `charter.md`** defining the `student-only/` folder structure:
   - `where-we-left-off.md` — single-file session handoff, overwritten each time
   - `notes/<topic>.md` — topic-specific free-form notes
   - `references/` — student-curated Game/Film examples parallel to root `References/`
   - `projects/project-plan-<name>.md` — saved project plans
   - `instructor-questions.md` — running list for office hours, append-only

2. **"Remember this" routing rule.** When the student says "remember this" without specifying what kind, the Companion asks one short question — *"For where you left off, as a note, as a reference, or as a question for the instructor?"* — and writes to the matching file. If context makes routing obvious, route silently.

3. **`## Session start` section amended** to look for `student-only/where-we-left-off.md` before greeting; if present, open by acknowledging it and asking whether to pick up from there. Writing-the-file guidance: overwrite (don't append) at natural pauses or when the student stops.

4. **Step 7 save offer rewritten** to target `student-only/projects/project-plan-<name>.md` instead of an undefined "project folder." Distinctive-filename rule unchanged.

**Source:** instructor design conversation 2026-05-18, paired with the same-day "never run git" rule (both surfaced from the in-class test of the Companion with 20 students in 128).

**Status:** untested in a real session. Worth exercising in the next worked example or — better — observing the next student session that uses it.

### 2026-05-19 — No-git rule softened: "don't offer," not "never run"

**What changed:** The 2026-05-18 rule was an absolute prohibition ("never run git, never any remote operation"). On 2026-05-19 the rule was softened: the Companion *doesn't offer* to run git for the student and doesn't execute git commands, but it can explain the setup conceptually when git comes up in conversation.

**Why:** The capability isn't intrinsically bad. The Companion will eventually be ready to push `TheCompanion-gaps.md` and `student-only/references/` to the student's class repo so the instructor can read and consider them — that's a desirable future feature. The 2026-05-18 absolute phrasing closed off the future direction; the softened phrasing keeps the safety property (no unsolicited execution that could leak student content) while leaving the door open.

**Skill mirror updated:** The Step 5 wiki-gap tone bullet's parenthetical changed from *"Write the file only — never run git or any remote operation"* to *"Write the file only — don't offer to push or sync."* Points back to `charter.md`'s "What not to do" for the full rule.

**Memory:** [[companion-no-git-or-remote]] updated to reflect the softening and its rationale.

### 2026-05-19 — Vocabulary: "track this" → "save this" / "write this down"

**What was missing:** The skill's Vocabulary section listed rules for "marginalia," "worldbuilding" framing, and numbered assignments, but didn't address the verb the Companion uses when offering to capture something for the student. Default phrasing was drifting toward "track this as a reference" (in the charter table cell and the `student-only/` README), which reads as bookkeeping.

**Rule added:** Don't say *"track this."* Use *"save this as a [note/reference]"* or *"write this down."* "Save" and "write down" match what a student would actually say about their own notes.

**Scope:** Applies to any moment the Companion offers to capture something — proactive offers under the new `## Student-only files` "Offer these proactively" rules in `charter.md`, the closing offers in Step 7, and any in-conversation capture moment. Charter table and README were also corrected.

**Memory:** [[no-track-use-save-or-write-down]].

### 2026-05-19 — Sniff-test both ways; beginner variable types only

**What was wrong:** In a worked-example test of the skill (maze of coats and colored lights, Traveler), I described the equality branch between two color variables as "a standard Blueprint check" and recommended an **enum** of color names as the cleanest variable type. Both wrong. The branch isn't taught in any tutorial — it's a small Blueprint pattern the student would learn separately — and enums are not in the beginner palette the course uses.

**Rules added** (both in `project-mapping.md` Step 5, immediately after the existing sniff-test paragraph):

1. **Symmetric sniff-test.** The existing rule guards against *false positives* (features that look custom but are actually Materials inside an existing tutorial). The new paragraph guards against *false negatives* — when the parts are covered but the specific *pattern* joining them isn't, name the join itself as off-map. Don't gloss integration steps that the student will have to figure out.

2. **Beginner variable types only.** When suggesting how to store data in a Blueprint, stay in the beginner palette: **String, Int, Float, Bool, Actor reference** — plus anything the existing tutorials already use. Don't reach for enums, structs, or other types even when they'd be marginally cleaner. For the maze case: store the color name as a String ("red", "blue") on both the coat and the light; compare strings.

**Source:** instructor feedback 2026-05-19 mid-test (maze of coats and colored lights, Traveler).

**Memories:** [[integration-step-offmap]], [[beginner-variable-types]].

### 2026-05-19 — Sniff-test paragraph restructured; beginner-types example broadened

**What was wrong:** Same-day continuation. Instructor asked whether the existing Material-sniff-test paragraph actually generalized in practice, or whether the three Material sub-examples narrowed pattern recognition to Material-shaped features only. Honest answer: yes, the examples pulled heavy weight; the generalizable dynamic was compressed into the closing sentence. Instructor also flagged that the new beginner-variable-types paragraph closed with a parenthetical referencing the maze-coats project specifically — too narrow.

**Changes:**

1. **Sniff-test paragraph restructured to lead with the dynamic.** Body now states the general move ("many features that *look* custom are actually an existing tutorial pattern with a small variation") and gives four diverse examples — Material applied inside a tutorial, two tutorials combined, a tutorial inverted, a tutorial repurposed. The Material domain is one of four illustrations, not the anchor.

2. **Beginner-variable-types closing broadened.** Parenthetical referencing the maze project removed. Replaced with a short grammar of what each type handles (Strings for "this == that," ints count, bools track yes/no, floats hold magnitudes, actor references point to a thing in the level).

**Source:** instructor feedback 2026-05-19 (same session, immediately after the prior entry).

### 2026-05-20 — Classroom worked-example test: first-pass principle + tradeoff framing line reconciled

**Source:** Worked-example test — a Traveler project: a finite world of repeating classrooms, a sudoku-like puzzle read across rooms, theme of fear-of-failure. Two changes came out of instructor review.

**Rules added/changed:**

1. **New Step 6 build-order principle — "First pass first."** When a feature has a simple version and a harder, better one, the build order puts the *simple* version now and stages the richer version as a later iteration. A student who chases the hard version first can burn the timeline and reach the deadline with half a project; a working draft can always be iterated up. Applies even to hard/off-map features — offer a stripped-down in-vault first pass where one exists. Step 5's off-map bullet gained a pointer to it. Surfaced because the test student took the cue from the Companion's "easy option" framing and chose the simpler (no-gaze-detection) version of a mechanic. Memory: [[first-pass-then-iterate]].

2. **Tradeoff framing line reconciled to one canonical version.** The rule to "open the tradeoff section with the framing line, verbatim" had drifted into multiple non-matching texts: `project-mapping.md`'s Step 7 rule prose ("For this class's assignments, designing tradeoffs is a particularly compelling way to engage the player"), its compressed-format template block ("Designing tradeoffs can be a compelling way to engage the player"), `_response-template.md` ("Often designing tradeoffs is a compelling way to engage the player", in both the instruction and the compressed block), and the 2026-05-15 revision entry that created the rule (also "Often designing…"). New single canonical line, used verbatim in both formats:

   > A tradeoff — where the player gains one thing only by giving up another — is a worthwhile dynamic to design for, and often worth building in from an early iteration.

   The line also folds in the "first pass first" principle above — it nudges the student to consider a tradeoff from an early iteration rather than as late polish. Updated in `project-mapping.md` (rule prose + compressed template block) and `_response-template.md` (instruction + compressed block). The earlier worked-example response files (library-after-hours, sylvia-house, windshield-splats, workshop-walk, maze-of-coats) still carry the old "Often designing…" line — left as dated records pending an instructor call on whether to retrofit.

### 2026-05-21 — Build order and "what to look up" moved to the end of the response

**What changed:** The one-response section order put **Build order** and **What to look up on your own** immediately after "What kind of experience" — i.e., before the tradeoff, reference, instructor-consult, and "excited about" sections. They now move to **after "The part I'm most excited about,"** just before the two A/B follow-ups.

New section flow: Your idea → Your project / What kind of experience → Tradeoff → A reference to look at → Worth bringing up with the instructor → The part I'm most excited about → **Build order → What to look up on your own** → Two follow-ups → save offer.

**Why:** Leads with the design and meaning of the project (what it's about, the tradeoff, the reference, the instructor conversation, what's exciting); the practical build sequence and look-it-up pointers land last, so the response ends on concrete next steps rather than opening with logistics.

**Changed:** `_response-template.md` (sections moved) and `project-mapping.md` Step 7 one-response template block (sections moved). The closing prose after the template block was rewritten — the "excited about" line is no longer the response's close; it's now the pivot from the design discussion into the practical build, with the A/B follow-ups still last.

**Two-response format:** no explicit ordered block to change — the two-response commentary lists each response's components as a checklist, not a sequence, and defers to the one-response template for ordering.

**Source:** instructor request 2026-05-21.

**Existing worked-example files** keep the old order — left as dated records per the don't-retrofit-archives convention.

### 2026-05-21 — Three coverage tiers + calibration line

**What was missing:** The skill mapped each feature individually (direct match / deviation / integration / off-map) but never stepped back to weigh the *proportion* of a project across coverage levels, or told the student how their project sits overall. A student couldn't tell from the response whether their idea was mostly on taught ground or mostly look-it-up territory.

**Rules added:**

1. **Step 5 — "Weigh the proportion across the three coverage tiers."** After mapping every feature, the Companion sorts the project into three tiers: (1) **Straightforward** — taught directly by a tutorial; (2) **Combine or adapt** — supported via combining tutorials or adapting a known pattern (deviations, integration steps); (3) **Off-map** — look up on your own. This is the *coverage* axis, explicitly separate from the role-fit axis — a cross-role or beyond-scope feature can still be tier 1. The healthy shape: most features tier 1, some tier 2, a few tier 3.

2. **Step 7 — "Calibrate the coverage."** The Companion voices the tier judgment as a one-line lead-in to the "What to look up on your own" section. Two forms: a brief positive confidence note when the shape is healthy; an honest heads-up paired with a constructive path forward (in-vault first-pass versions, leading with a subset) when tier 3 is medium or long. Framed as calibration, never gatekeeping — scope stays the student's call. Ties into Step 6's "first pass first" principle.

**Templates updated:** one-response template's "What to look up on your own" line expanded to show the calibration line above the feature list; `_response-template.md` section updated to match.

**Source:** instructor request 2026-05-21.

### 2026-05-21 — Response section renamed: "What to look up on your own" → "Off-Map"

**What changed:** The student-facing response section that lists off-map features was renamed from **"What to look up on your own"** to **"Off-Map."** The old characterization isn't lost — it moves into the section's opening sentence(s): the calibration line now also names the section as *"what you'll need to research on your own, outside the bundle."* So the heading is short and the orientation lives in the prose.

This aligns the section heading with the Step 5 tier name (tier 3 = **Off-map**) and with `charter.md`/Step 5's existing "off-map" vocabulary — one term for the concept throughout.

**Changed in `project-mapping.md`:** Step 7 "Calibrate the coverage" sub-section (section name + both example calibration lines now integrate "research on your own"; "Heavy tier 3" → "Heavy off-map"); one-response template block (`Off-Map:` heading); the prose after the template; the Step 7 instructor-section "Engineering paths" bullet; the two-response commentary's component checklist.

**Changed elsewhere:** `_response-template.md` section heading + guidance; the same-day `response-pinewood-inquiry.md` worked example (live test artifact from this session — updated to the new heading, not treated as a settled archive).

**Source:** instructor request 2026-05-21.

**Source:** instructor feedback 2026-05-20.

### 2026-05-26 — Token-cost slim pass (9 cuts, ~8% shrink)

**Why:** `project-mapping.md` had grown to 363 lines — the largest single file in the iterate-companion load and re-billed every turn it stays in context. Also runs at student runtime (Claude Code / Gemini CLI), so the savings compound across both maintenance and live sessions. Goal: cut redundant/meta/duplicated content without touching load-bearing rules or templates.

**Cuts:**

1. **"What this skill produces" section** — removed entirely. Meta-documentation about outcomes the workflow already produces. (~9 lines)
2. **Tone bullet "Companion is missing what the student needs…"** — compressed the long restatement of the charter's gap-log + tell-student flow to one cross-reference line: *"**Training-knowledge fallback:** follow `agent/charter.md`'s gap-log + tell-student flow. No git."* (~4 lines)
3. **Tone bullet "When a feature's Best for matches…"** — removed. The capability-map header already gives the same lean-in guidance. (~1 line)
4. **Sniff-test examples** — trimmed from four (Material / Two tutorials combined / Inverted / Repurposed) to two (Material + Inverted), which together cover the main moves. (~3 lines)
5. **Lead-with-verbatim-quote prose + standalone template block at Step 7 top** — removed. The rule was already encoded in both the one-response and two-response template skeletons where the LLM uses it. Made the template references self-contained (replaced `[verbatim quote, per above]` with `[paste student's idea verbatim — quote, don't summarize; stitch across messages if needed]`). (~7 lines)
6. **Tradeoff clarifications** — folded "A tradeoff is not a warning" + "Not a designer-side cost" into one short line: *"**The player's tradeoff** — what they give up to gain something. Not the designer's choice, not a warning."* (~3 lines)
7. **"Worth bringing up with instructor" definitions** — compressed the three full-sentence definitions of theme/opportunity/affective communication to one short line each. "What does NOT qualify" guardrails untouched. (~4 lines)
8. **"Two follow-up questions to close" lead-in** — removed the A/B labeling restatement (already in the Tone section). Kept the menu of question shapes intact. (~4 lines)
9. **Edge case "single-role assignment with off-role idea"** — removed; Step 3 Branch A already covers the principle. Also removed the now-dangling "see the edge cases below" pointer in Step 3. (~3 lines)

**Result:** 363 → 335 lines (~8% shrink). Load-bearing content unchanged — workflow steps, role descriptions, capability-tier judgment, templates, "What does NOT qualify" guardrails, Step 6 build-order principles, beginner-variable-types constraint, never-discourage rule (kept the Tone-section statement, kept the in-step reinforcements). No worked-example responses needed updating.

**Source:** instructor request 2026-05-26 (token-cost observation during iterate-companion session). Process: candidate cuts proposed with one-line justifications each, instructor approved all 9.

### 2026-05-26 — Templates split into sibling file

**Why:** continued token-cost work. `iterate-companion` sessions (and other maintainer reads) almost never need the response-shape *skeletons* loaded — those matter at student runtime, when the LLM is composing a project-mapping response. The three template code-blocks (compressed tradeoff, one-response, two-response) totaled ~50 lines of file footprint that maintainer sessions paid for without using.

**What changed:**

1. **New file:** `agent/project-mapping-templates.md` — holds the three template skeletons. Brief intro explains the split rationale and points back at `project-mapping.md` for the surrounding prose.
2. **`project-mapping.md` Step 7:** new directive at top — *"Before composing a response, load `agent/project-mapping-templates.md`."* Each of the three template code-blocks replaced with a one-line pointer: *"Skeleton: see `agent/project-mapping-templates.md` § <name>."* Surrounding prose (when to use each format, what to put in each slot, the section's pedagogical anchors like "Always open with the framing line") stayed in `project-mapping.md` — it's load-bearing rule context, not template shape.
3. **`(Instructor)/agent/iterate-companion.md`:** noted that the templates file is *intentionally not loaded* during maintainer iteration, with a carve-out for "if iterating on template shape specifically, load on demand."
4. **`Obsidian/CLAUDE.md`:** added `project-mapping-templates.md` to the `agent/` file list.

**Result:**

- `project-mapping.md`: 335 → 284 lines (~15% additional shrink on top of the morning's slim pass — so 363 → 284 total, ~22%).
- `project-mapping-templates.md`: 80 lines (frontmatter + intro + three template sections).
- **Maintainer load** (`iterate-companion`): ~15% lower per session, compounding across turns.
- **Student-runtime load:** marginally larger overall (~29 lines from frontmatter/intro/headers) but spread across two files; the templates file is read once when Step 7 begins, not when the skill is first loaded. Honest trade — the maintainer savings cost student runtime a small amount.

**Architectural note:** templates file is a sibling to `project-mapping-revisions.md` in concept — both extracted to keep `project-mapping.md` focused on the runtime rules. Pattern available for future splits (e.g., the edge-cases section could go the same way if it grows).

**Source:** instructor request 2026-05-26, immediately after the 9-cut slim pass. Sequence: discussed two next-step levers (split templates / move tradeoff-shapes menu); instructor picked templates split.

### 2026-06-06 — Fab model import is a standard build step, not off-map

**What was wrong:** Surfaced by the 2026-06-06 cross-runtime test (Aquarium / Investigator through Gemini CLI, scored against the `investigator-aquarium.md` baseline). Gemini both listed "import models from Fab" as build-order step #2 *and* listed "sourcing Fab models" under Off-Map — a self-contradiction. Root cause: the Step 6 Fab bullet said "This isn't covered by any tutorial," which a runtime can read as "not tutorial-covered → therefore off-map," so it double-counts the step. (Same test also showed Gemini *under*-identifying genuine off-map items like the gaze-triggered cut — the off-map calibration drifted in both directions.)

**Rule added:** Importing models from Fab is a *standard build step* — not taught by a tutorial, but no more "off-map" than placing the player character. It belongs in the build order only, **never** in the Off-Map section, and the GET should recommend the specific assets *this* idea needs. Off-map means a *feature* the bundle doesn't teach (custom shader, physics buoyancy, gaze check), not a routine step of making any Unreal project.

**Changed:**
1. **Step 6 Fab bullet** — replaced "This isn't covered by any tutorial, but it's a near-universal step" with an explicit "standard build step, not an off-map feature" framing; added "recommend the specific assets this idea needs"; added "Never list Fab model-sourcing in the Off-Map section"; clarified in-engine placeholder **primitives** (boxes/planes) are distinct from Fab downloads.
2. **Step 7 "Calibrate the coverage"** — added a "What the Off-Map section is *not* for: standard build steps" note carving out Fab import / player-character / blocking-out, with the feature-vs-routine-step distinction.

**Why structural:** the test's interpretive misses (e.g. missing BioShock as a reference) are hard to fix in the skill and tracked as runtime drift; this one is a clean structural clarification, the kind that ports across runtimes. Candidate-tweak record in `The-GET-dev/people/peter/the-get-todo.md`; test scored as Worked example #2 in `The-GET-dev/agent/eval-rubric.md`.

**Source:** instructor request 2026-06-06, after reviewing the Gemini test transcript (Peter caught the build-order/off-map Fab contradiction directly).

### 2026-06-06 — References Index: reference citation becomes a lookup, not a recall

**What was wrong:** Both Aquarium/Gemini runs (low *and* high reasoning) cited only **Gone Home** and missed **BioShock** — the best match for an idea built on ideological signage + a reveal-of-who-you-are. Proven to be **retrieval, not corpus** (BioShock and Tacoma are both in `References/`) and **retrieval, not reasoning** (identical miss at both reasoning levels). The model grabbed the famous recalled title instead of surveying the ~60-page References folder — the exact failure mode Phase B fixed for tutorials.

**Fix (mirrors Phase B's Tutorial Index):** built `corpus/References/+ References Index.md` — a reverse lookup with two paths (Path 1: theme/shape → works; Path 2: per-work role affinity + one-line "cite it for" hook) plus a "How to use this index (lookup discipline)" block. Generated from each page's `## What It Is` text; plain markdown, no embeddings (legibility wins ties). `publish: false` for now (decision pending).

**Changed:** Step 7's "Cite an example to look at" gained a directive — *"Consult `corpus/References/+ References Index.md` first — don't cite from memory… the famous title that comes to mind (Gone Home for any empty space) is often not the best match."* The existing "open the page before you cite" and "one example is enough" rules feed off it unchanged.

**Acceptance test — ✅ PASSED (2026-06-06).** Re-ran the aquarium at **Pro low** (the runtime that had missed BioShock twice): it cited **BioShock** with the index's hook ("cheerful ideological signage you're meant to swallow … a reveal that re-colors everything"). Also confirmed on **Flash high** — the index ports *down a model tier*, not just across runtimes. The only change isolating the result was the index. Phase B repeated for references; structural lookups beat reasoning bumps for retrieval, and they survive weaker models.

**Design rationale:** now self-documented in the live index's header + context-engineering lessons #15/#21/#22 (the original build spec `references-index-spec.md` was retired 2026-06-09 as superseded — built, validated, and self-documenting). **Source:** instructor greenlight 2026-06-06.

### 2026-06-08 — Strengthen "quote the idea verbatim, in full, no ellipses"

**What was wrong:** A persistent structural-adherence failure — the runtime abridges the student's idea with "…" ellipses in the `Your idea:` block instead of quoting it whole. Observed across *every* Gemini run (low, high, and post-index), and now **also on Claude** (the Coat Check held-out test, 2026-06-08) — so it isn't Gemini-specific. Hypothesis (Peter's): the skill stated "verbatim" too lightly to hold. The instruction lived only in the template skeleton placeholders (`[paste student's idea verbatim…]`); the Step 7 prose never restated it, so there was a single, easily-overridden mention.

**Changed:**
1. **Step 7 prose** — added a standalone bolded rule right after the "load templates" line: *"Quote the student's idea in full — no ellipses."* States the `Your idea:` block opens every response (one or two); quote verbatim and complete — no ellipses, no abridgement, no paraphrase into a tidy sentence; trimming reads as overwriting the student's authorship.
2. **Both template skeletons** (one-response + two-response idea blocks in `map-project-skill-templates.md`) — strengthened the placeholder from *"paste student's idea verbatim — quote, don't summarize; stitch across messages if needed"* to *"paste the student's idea verbatim and in full — quote, don't summarize, no ellipses or abridgement; if it was assembled across several turns, stitch them into one faithful statement in the student's words."*
3. **New sub-case handled** — when the idea was **assembled across multiple turns** (no single message to quote), both the prose and the skeletons now say what to do: stitch the turns into one faithful statement in the student's own words, still complete and ellipsis-free, rather than leaving it ambiguous (the prior "stitch across messages if needed" was thin on the no-ellipsis point).

**Why structural:** a clean repetition/strengthening of an existing instruction at the exact spot it's applied — the kind of adherence nudge that ports across runtimes. Failure was identical across model tiers and providers, which is the signature of a structural (not reasoning) gap.

**Re-test after:** run a fresh idea — ideally one assembled over a couple of turns — and confirm the idea block comes back whole with no "…". Candidate-tweak record in `The-GET-dev/people/peter/the-get-todo.md`. **Source:** instructor backlog item (SOON), applied 2026-06-08.

### 2026-06-09 — Greenhouse held-out test: voice + formatting batch

**Source:** the "overgrown greenhouse" Investigator held-out test (eval-rubric Worked example #5, run on Claude in a fresh clone). The test's *purpose* — validating the two pending structural fixes — **passed**: the **Feature Catalog noticing pass caught foliage** (the central-but-silent feature, the foliage analog of the dropped aquarium-water), labeled it Off-map · low-hanging with encouraging framing, and the **verbatim-quote fix held** (idea block complete, no ellipses — though only the single-message case; the multi-turn sub-case is still untested). Instructor review of the transcript then surfaced a batch of voice/formatting fixes:

1. **Name tutorials by what they teach until the build order** (Tone + Step 3). The run opened with "the 801/821 tutorials are built for this" before the student knew the GET even *had* tutorials — bare numbers read as abstract. New rule: in the design discussion refer to tutorials by what they *demonstrate*; numbered citations live in the build order. Reworded the Step 3 Branch A modeled line and the two cross-role "good phrasing" examples (dropped bare "701/702" → "its atmosphere tutorials").
2. **`Tut` → `Tutorial` everywhere the GET reads** (capability map, feature catalog, skill). The GET echoed "Tut 801" from the source files; removing the abbreviation at the source removes the temptation (no separate vocab rule needed — the cleaner fix).
3. **"equality check/branch" → plain Blueprint** (Step 5). "the equality branch between two variables" became "a **Branch** node that tests whether the two values are equal" — Blueprint-native, not programmer jargon.
4. **Linking — plain names in conversation; wikilinks only in saved files** (Tone). In a chat runtime `[[Game - Gone Home]]` renders as literal bracket text, so references/pages are named in plain words in the conversation; `[[wikilinks]]` are reserved for files the GET writes (saved plans/notes), where Obsidian renders them. Overrides the prior "always wikilink" rule; rubric Layer-1 item synced.
5. **Section headers** (templates). One-response skeleton's inline bold labels → real `###` headers (they rendered flat in the Claude desktop app); the tradeoff section retitled **"A Tradeoff To Consider"** (the old "Tradeoff the player faces" didn't read as a title).
6. **Off-map phrasing — "no GET tutorial," not "not a tutorial"** (feature catalog). Off-map means not in the GET, not that no tutorial exists anywhere.
7. **Fog row → Partial** (feature catalog). 301's fog is *outdoor* atmospheric sky; interior haze (the greenhouse) is off-map · low-hanging — so the catalog's "Covered → 301" was a false signal for interiors. The GET correctly routed around it (701/702) but never flagged the gap.
8. **Cine Camera dropped** (feature catalog). Replaced with a plain "Depth of field (camera focus blur)" row — DoF isn't cine-only and the course won't deal with cine cameras.
9. **Offer thematic directions as questions, not assumptions** (Step 7). The run's final turn supplied an Annihilation-flavored body-horror ending (merging / "plant wearing her") the student hadn't offered. New note: present where a theme *could* go as a fork, never as what the project *is* — theme is the student's and instructor's to author.

**Also reconciled:** the tradeoff framing line was inconsistent across skill / template / rubric. Standardized to one canonical line — *"A tradeoff — where the player gains one thing only by giving up another — is practical to build into an early iteration."* — and dropped the now-redundant "Consider implementing a tradeoff." opener (the new section title carries it).

**What the test validated (kept, not changed):** clean tutorial routing (no misfires), the Fab-is-a-build-step fix held, time-aware cross-role framing, the References Index generalizing (surfaced **Annihilation** — hook "biology, identity, and physics stop working" — over the obvious Gone Home). Strong manner throughout.

**Why mostly structural:** these are voice/format adherence fixes — they should port across runtimes. **Source:** instructor review of the greenhouse test, applied 2026-06-09.

**Flash port follow-on (2026-06-09).** Re-ran the same greenhouse idea on **Gemini Flash** (the free-tier student runtime) from a fresh clone carrying this batch. **The whole batch ported** — foliage caught, plain reference names, `###` headers + "A Tradeoff To Consider", canonical framing line, tutorials-by-description, "Branch node" language, no "Tut", Fab as a build step — and the **multi-turn-assembly verbatim sub-case** (untested above) **passed** (Flash stitched turn-1 + the turn-2 answers into one complete, ellipsis-free block). Flash also applied the **fog → Partial** refinement textbook-correctly (interior Exponential Height Fog → Off-Map, mist via 702), and tutorial routing was clean (no Flash misfire). Three residual interpretive drifts drove three more changes:

10. **Off-Map carve-out for integration/join steps** (Step 7). Flash double-listed the equality-check join in *both* the build order and Off-Map. New rule: wiring covered parts together is a build-order step, not an off-map feature — same shape as the Fab carve-out.
11. **Compressed tradeoffs stay within the student's player verbs** (Step 7). Flash invented "whatever's lurking in the dark" on a non-combat investigation idea (the aquarium had this too). New note: build tradeoff directions from mechanics already in the idea; don't import threat/enemy/stealth/combat the student never mentioned.
12. **801 over 821 — prefer 801, don't recommend both, never sequence 821 ahead of 801** (capability map). Both runtimes paired 801 + 821; Flash ordered 821 (the WIP base system) before 801 (the self-contained note). 801 is the stronger default and covers most readable/inspect cases; 821 is for genuine multi-object interaction systems only. Added an "801 vs 821" note after the Interaction Systems table + a pointer on the 821 Tutorial Index row.

**Port lesson:** the entire batch is structural, and structural fixes survive the cheapest tier — lesson #10/#17 confirmed again, on the runtime that matters most for student access. Scored as eval-rubric Worked example #5 (Gemini Flash port).

**Also closed (long-standing backlog item, 2026-06-09).** Added an explicit **full-screen black-out / end-card / fade-to-black → 801** row to the capability map's UI/HUD table + a disambiguation note (it's 801's full-screen-widget machinery, *not* Tutorial 3's HUD/counter), and extended the 801 Tutorial Index line so the verify-step confirms it. Closes the Flash misfire first seen in the 2026-06-06 aquarium run (eval-rubric Worked example #3, where Flash guessed Tutorial 3 for a full-screen black-out) — the routing is now a lookup, not a guess. Same recall→lookup pattern as the three indexes.

### 2026-06-10 — Statue-spiral test (Fable): first-pass forward-pointer

**Source:** the "statue spiral" Dreamer held-out test, run on **Fable 5** in a fresh clone (first Fable data point). The run was the cleanest yet — multi-turn verbatim stitch held, compressed tradeoff stayed within the student's verbs, References Index surfaced *Balance (1989)* with the real page link, Fab assets named per-idea, the Branch-equality join kept out of Off-Map, save offer correctly deferred until the idea settled. Instructor review produced one small structural change:

1. **First-pass steps point forward to their upgrade** (Step 6, "first pass first"). When the simple version and the richer version appear as separate build-order steps, the first-pass step's last sentence names the coming upgrade ("an upgraded version of this comes in step N") — so the student reads the simple version as deliberate sequencing, not the destination.

**Reviewed and kept as-is:** 821 cited solo for E-key pick-up (correct — 801's full-screen-note machinery doesn't cover pick-up-and-roll; the "prefer 801 *when it covers the need*" wording already permits this). "Recognizable silhouettes" → use "shapes" in the worked example, but no vocabulary rule (silhouette is legitimate game-art jargon; just not student vocabulary yet).

**Queued, not changed:** whether a Timeline move is actually the easier first pass for a *rolling* object — the instructor suspects `Simulate Physics` + `Add Impulse` is simpler and that Timeline-moved objects slide without rotating. Sent to George's verification queue (2026-06-10 entry); the Dreamer worked example's build order waits on the answer.

### 2026-06-10 — Entrant reframed: a learning waystation, not an assignment

**What changed (instructor decision):** The course's assignments are **Investigator, Traveler, Dreamer** — the Entrant is dropped from the assignment menu. The Entrant exists *for learning*: the Dreamer asks students to carry two new loads at once (puzzle/systems mechanics they've never built, and a symbolic register they've never designed in), so the Entrant isolates the mechanical half to be learned on its own. It's the role-level twin of Step 6's "first pass first" — the curriculum scaffolds the way the build orders scaffold. The Entrant remains a real role in the SPR framework (Branch C identification, capability-map fit columns, tutorial clusters all keep it); it just isn't something a student is *assigned*.

**Edits:**
1. **Step 1 table** — A3 row is now "The Dreamer" (was "The Entrant or The Dreamer").
2. **Step 1 question** — *"Is this for the Investigator project, the Traveler project, the Dreamer, a hybrid — or something you're exploring on your own?"* (Entrant dropped; hybrid named explicitly.)
3. **Tone vocabulary bullet** — assignment names are now "the Investigator project, the Traveler project, the Dreamer project."
4. **Step 3 mechanics note** — new paragraph: the Entrant is a waystation, and the GET can use it as a **scaffolding move** — when a Dreamer idea's puzzle layer is still finding its meaning, plan the Entrant version plainly and say so; it becomes the Dreamer the moment the meaning arrives.
5. **Eval rubric synced** (`The-GET-dev/agent/eval-rubric.md`) — the Layer-1 verbatim Step 1 question updated to match.

**Why it's sound (the design logic, for the record):** the Entrant is the only role defined by mechanics alone — the other three are defined by their question, the Entrant by its verbs. That's why Entrant ≡ Dreamer mechanically: the Dreamer isn't the Entrant's sibling, it's the Entrant *plus an answer to "what does this mean?"*. The statue-spiral test showed the threshold live — the idea is an Entrant skeleton, and the one open question ("what are the statues?") is exactly what turns it into a Dreamer. **Source:** instructor decision, 2026-06-10.

### 2026-06-10 — Hybrid worked example (windshield splats): hybrids lean off-map

**Source:** authoring the hybrid Phase C example (`agent/examples/hybrid-windshield-splats.md`) from the instructor's *updated* windshield-splats idea (instrument loops + stacking mix, shrink/grow object categories, the creature kicking the truck as cause, a late voice track). Mapped as a deliberate hybrid by instruction — no role picked, no two-response fork. Three rounds of instructor review reshaped the build thinking: **physics-first for falling objects** (Simulate Physics + small impulse from step one of the pipeline — no Timeline first pass; falling is what physics does for free), **per-actor slow motion** (Gravity Scale well below 1 + damping per body, pace tuned where each actor is built — not Global Time Dilation, which slows steering response and forbids differential speeds), and **the semi chasing the player's X at a capped speed** (the lag *is* the reveal mechanic — no triggers, no authored swerve).

1. **Hybrids lean off-map — weigh coverage accordingly** (Step 5, weigh-the-proportion block). Multiple roles means complexity: spanning roles usually means spanning tutorial clusters *and* joining them with custom Blueprint work, so role-spread and coverage are not independent axes. The windshield idea demonstrated it — the systems that make the piece itself (drive rig, chasing truck, physics feel, runtime mix) are all above-beginner Blueprint scripting.

**Example tagging convention (new):** worked examples now carry `role:` and `coverage:` frontmatter keys, so an example's double duty is legible at a glance (which role(s) it demonstrates + which calibration register it models). Applied to `hybrid-windshield-splats.md` (`coverage: heavy off-map — above-beginner Blueprint`); the other three examples get tagged during the pending canon-sync pass. The hybrid example is also the first to model the **heavy off-map register with the above-beginner framing**: "this asks for Blueprint skills past the beginner patterns" said plainly, as growth, never as a reason to shrink the idea.

**Queued:** a **simple physics tutorial** (object weight/mass, bounciness, gravity / Gravity Scale, Simulate Physics + impulse) — instructor call. Both the statue-spiral and windshield examples land their mechanical heart in checkbox-physics territory that no tutorial covers; a small physics tutorial converts it to taught ground and shrinks both Off-Map sections. Logged in the-get-todo; George's physics-vs-Timeline verification (2026-06-10 queue entry) feeds its content.

### 2026-06-14 — Required reading: overview always, full role page(s) on demand (CE Review rec #1)

**Source:** CE Review instruction-density work, following the 2026-06-14 context-audit refresh (`The-GET-dev/agent/context-audit.md` v8) and a Codex review flagging instruction density as an adherence risk. The refreshed audit measured the static project-mapping core at ~22,400 tokens, of which the "Required reading" all-four-SPR-pages load was ~5,235. This is the legibility-safe lever (changes only what the model loads, never a student-readable file).

**Verify-first finding (what the full SPR pages add over the Step-3 role table + overview):** the full pages are conceptually rich — role essence, the discovery/control axis, role-specific frameworks (Traveler maze/labyrinth taxonomy, Entrant L.O.P. loop, Dreamer mechanics-as-metaphor), and worked game/film examples with analysis. But the **project-mapping mechanics barely consult most of it**: reference citation now routes through the References Index (not the SPR pages), feature mapping uses the capability map, and role *identification* + cross-role *naming* are covered by the tiny overview (`index.md`, ~530 tokens) plus the compact central-question/verbs table already in Step 3. The full role page earns its tokens only for the role(s) actually **in play**, where its deeper logic sharpens the work.

**Edit (Required reading before starting):** split the old "overview and the four SPR pages" bullet into two — (1) **always load the overview** (small; carries all four role essences + the discovery/control axis, enough to identify the role and to name a cross-role feature in passing); (2) **load the full SPR page only for the role(s) the project uses**, once Step 3 identifies them (Step 1 for a named-role assignment) — single-role pulls one, hybrid pulls two, never pre-load all four; pull another role's page on demand if a framework is referenced (e.g. a Dreamer leaning on the Entrant's L.O.P.).

**Token effect:** single-role session saves ~3,500–4,300 tokens of barely-consulted role pages; hybrid saves ~2,500–3,300. No feature rows, tone rules, or response shapes changed.

**Status — pending validation.** Density reduction is an *unproven* adherence lever for us (our proven one is lookup-conversion). Per the audit's method caveat, A/B this against the eval rubric's worked examples (confirm role identification and cross-role naming don't degrade when the non-relevant pages aren't pre-loaded) before treating it as settled. **Source:** instructor-directed CE Review, 2026-06-14.

### 2026-06-15 — Worldbuilding branch: Small Worlds wired into the skill (Branch D)

**Source:** instructor-directed — the `Design/Worldbuilding/` corpus was reworked into a descriptive **Small Worlds** hub (`index.md`), conformed partway to the SPR shape but with two structural differences: one frame (not four roles), and a different axis (the hub's own line: "where the player roles turn on what the player *does*, Small Worlds turns on how the world *defines its edges*"). The tutor consulted it not at all. Goal: make a worldbuilding branch real so a worldbuilding student gets engaged the way SPR students do — the eventual opening question being "Investigator / Traveler / Dreamer / Hybrid — or a worldbuilding project?"

**Design decisions (instructor):**
- **Axis model — WB leads, role still named.** The opening question offers worldbuilding as a path, but the branch still identifies the player role underneath (the build routes through role→tutorial clusters; every world has a player verb). Reconciles the either/or opening question with the hub's two-axis "companion" framing.
- **Scope — structure + short shaping pass.** Name the world's structure, then a focused conversation from three hub pages (Meeting the World, World Responsiveness, Teaching the Rules of the World). Wolf's full theory vocabulary deferred.
- **Name the structure — yes, but deduce it; don't offer a menu.** Mirror Step 2's "don't name the role too early": listen to the world, deduce Finite / Bounded / Threshold, name it back as design clarity. The three structures are design insight, *not* a tutorial-routing key (unlike roles, they don't map to tutorial clusters).
- **SPR-familiarity gate (instructor follow-up, same day).** Branch D opens by asking whether the student has studied the Situated Player Roles. If **yes**, run the role-aware route (name the role, anchor the build on its tutorial cluster). If **no**, run the whole branch without the SPR frame — no role naming, no SPR pages, no verbs table; plan from the world and its features, build anchored on the world's experience/responsiveness. Serves contexts where Small Worlds is taught without the roles (e.g. a short external workshop). Structure-naming and the shaping pass are shared by both routes (neither needs the SPRs).

**Changes:**
1. **Required reading** — conditional line: load the Small Worlds overview only on the worldbuilding path (mirrors the on-demand full-role-page load).
2. **Step 1** — opening question + "paths from here" extended with the worldbuilding path; not a row in the A1/A2/A3 role-sequence table.
3. **Step 2** — parallel restraint sentence: don't lead with the Finite/Bounded/Threshold taxonomy.
4. **Step 3 — new Branch D:** opens with a gate question — *has the student studied the Situated Player Roles?* — that forks the branch. Shared on both routes: (1) deduce + name the structure (3-row reference table), (2) short shaping pass over the three hub pages (World Responsiveness flagged as the bridge to the build, triggers/events → Tutorial 4). Then (3) the fork: **studied SPRs** → identify the role as in Branch C and anchor the build on its tutorial cluster; **hasn't** → no SPR frame at all (no role naming, no SPR pages, no verbs table), plan from the world and its features, build anchored on the world's experience/responsiveness. Steps 4–7 reused either way (the capability map works as a plain feature→tutorial lookup without its role columns).
5. **Step 7** — brief "the world you're building" beat (structure + entry + how it teaches its rules), woven into the design sections.
6. **Pointers** — Small Worlds entry added.

Also: new `corpus/Design/Worldbuilding/CLAUDE.md` folder pointer (mirrors `Narrative/CLAUDE.md`); `how-the-tutor-works.md` Session-start notes worldbuilding projects route to the same skill.

**Status — pending validation.** Not yet dry-run. Validate per the plan: a fresh GET session (Claude reference runtime), present a worldbuilding idea (the Geidai "normal gallery, then make it strange" Small World is the natural test), confirm the branch fires and reaches a build order with SPR-parity engagement; that transcript seeds the deferred WB worked example. Deferred: WB worked example in `agent/examples/`; full Wolf vocabulary in the shaping pass; student-facing name ("worldbuilding project" vs. "Small Worlds project"). Plan file: `C:\Users\brins\.claude\plans\recently-done-a-lot-synchronous-orbit.md`.

### 2026-06-16 — Opener overhaul: closed greeting, emergent hybrid, invitation-first listening, gate-first; "Small Worlds" naming

**Source:** instructor-directed, during the snow-globe dry-run. Reworks the session opening and Branch D's question sequence after the no-SPR route validated. All in `how-the-tutor-works.md` Session start + `map-project-skill.md` (Steps 1–3).

**Changes:**
1. **Closed greeting.** The door names the projects — "The Investigator, The Traveler, The Dreamer? Or instead, Small Worlds?" — with no "what are you working on" escape hatch; students arrive already assigned. Self-description reframed to a tutor for *playable story and worlds*, with the engine as the secondary, if-it-helps offer (story/worlds primary, build order secondary).
2. **Hybrid is emergent, not at the door.** Dropped from the opening menu. Branch B now fires "declared *or* detected," with a guardrail: a side cross-role feature stays Branch A (referenced); a co-equal second lens gets named and engaged; a reframe of a single-role idea uses the two-response pattern.
3. **Invitation-first listening (Step 2).** Open with a bare "tell me about your idea/world," then stop — clarifying questions come *after* the student talks (was firing a numbered battery up front). Applies to all branches.
4. **Gate-first (Branch D).** The SPR-familiarity question is asked on its own and answered *before* the world-description invitation, so the student doesn't answer the world prompt and skip the gate.
5. **"Small Worlds" is the student-facing assignment name.** Resolves the long-pending naming question (folder paths stay `corpus/Design/Worldbuilding/`). A student who picks Small Worlds is assumed to have read the hub + had the lectures, so the framework vocabulary (Finite/Bounded/Threshold, Meeting the World, Responsiveness, Teaching the Rules) is invoked **by name as shared course language, never taught fresh.** This assumption is independent of the SPR gate — the gate governs only *role* vocabulary; Small Worlds vocab is in play on both routes.

**Also:** the snow-globe dry-run was promoted to the first worldbuilding worked example (`agent/examples/worldbuilding-snowglobe.md`, no-SPR route), wired into Step 7's loader.

**Status — no-SPR route validated** (snow-globe transcript, `The-GET-dev/responses/response-snowglobe.md`); the role-aware gate route is still untested.

### 2026-06-17 — Greeting wording; dedicated structure section; build-order line reworded

**Source:** instructor-directed.

**Changes:**
1. **Greeting wording (final).** The self-description line now reads, verbatim: *"I'm The GET, your tutor for designing playable stories and worlds. We can discuss an idea of yours, and if it helps, I'll recommend a build order using the Unreal Game Engine."* (`how-the-tutor-works.md` Session start — supersedes the 2026-06-16 "playable story and worlds" phrasing.)
2. **Dedicated structure section (worldbuilding).** A Branch D response now opens with a **standalone heading** naming which of the three Small Worlds structures the idea is (Finite / Bounded / Threshold) and what it means for the design — e.g. *The kind of small world this is* — separate from and above the *the world you're building* shaping section (Meeting the World / Teaching the Rules). Both sit early, before the tradeoff. Supersedes Step 7's prior "a paragraph woven in, not a new heading stack" instruction. The `worldbuilding-snowglobe` example was split to match.
3. **Build-order line reworded (global).** Replaced the "Order is triage — the top is the spine… cut from the bottom, not the top" note that opened every build order with: *"Following this sequence, you'll have something playable from the start. And the last items, if you run out of time, can be dropped."* Applied across all five worked examples, the templates skeleton (`map-project-skill-templates.md`), and Step 6's prescription. The internal triage/spine reasoning stays as authoring guidance; only the student-facing line changed.

**Status — in GET-test for a fresh snow-globe comparison run** (instructor running a concurrent session to compare against the prior transcript).

### 2026-06-17 — Structure & role first-mentions name the framework; Small World capitalized; no "teacher"; Branch D role-aware route validated + scale-doors example

**Source:** instructor-directed, reviewing two live Small World dry-runs (the snow-globe re-run and a role-aware scale-doors session).

**Changes:**
1. **Name the structure explicitly as one of the three** (Branch D sub-step 1). The first mention gives it as *the first / second / third structure* + name + a one-line definition, with a ready summary for each — Finite, Bounded ("…where the player can encounter the edge of the world but cannot pass it"), Threshold. Replaces the looser "what you're describing is a bounded world" example sentence; works for all three, not just Bounded.
2. **First role mention names the framework** (Step 3, all branches). Frame the first naming as *"Your idea fits the Situated Player Role, The Entrant"* (subtitle optional: Investigator/World as Evidence, Traveler/World as Passage, Entrant/World as Threshold, Dreamer/World as Enigma); plain role name thereafter. Parallels the structure-naming move.
3. **"Small World(s)" is always capitalized** (Vocabulary) — the framework's term, never lowercase even in generic prose. Fixed in the skill prose and the snowglobe example heading.
4. **No "teacher" in teaching-through-play** (Branch D shaping bullet) — the *world* teaches and the *player* learns; there's no "teacher" character in the loop (don't write "the teacher's reset").

**Worked example + loader:**
- New `agent/examples/worldbuilding-scale-doors.md` — the **role-aware** Small World exemplar (Entrant/Dreamer), companion to the no-SPR `worldbuilding-snowglobe`. Models the two-axis summary (dedicated structure section + role section) and a role-anchored build; carries all four rules above.
- Step 7 loader now picks the WB exemplar by route — `worldbuilding-snowglobe` (no-SPR) vs `worldbuilding-scale-doors` (role-aware) — plus the matched role example on the role-aware route. Pointers updated.

**Status — Branch D fully validated.** Both gate routes confirmed in fresh Claude sessions: no-SPR (snow-globe) and role-aware (scale-doors). Instructor proofread of `worldbuilding-scale-doors` still pending (standard for a new few-shot).

### 2026-06-18 — Tutorials 1–4 renumbered to 101–104 (naming consistency)

**Source:** instructor-directed.

**Change:** The four foundational 100-block tutorials were renamed `Tutorial 1/2/3/4 → 101/102/103/104` to match the folder-keyed hundreds-block scheme every later tutorial already uses (201/202, 301/302, 401, 501, 701/702, 801/821, 901). Files `git mv`'d in `corpus/Development/Tutorials - Unreal/100 - Discovery and Encounter/` (folder/section names unchanged); titles after the number are identical.

**Reference sweep.** All references updated via a guarded `Tutorial ([1-4])(?![0-9])` → +100 pass (the digit-lookahead excludes 101/201/401/1000/1031, etc.), plus hand-fixes for `coverage:` frontmatter bare digits and `Tut N` abbreviations. Touched: all Wiki - Unreal pages, the capability-map Tutorial Index + feature table + guidance line, all six `agent/examples/`, both tutorial index pages, the four tutorials' own cross-refs, and the Worldbuilding hub refs. Living docs in `The-GET-dev/` also updated (conversion-pipeline tracker, context-audit, foldable-sections — mocks left intact). **Left as dated history** (per the don't-update-archives convention): `session-log.md`, this revision log's prior entries, `The-GET-dev/responses/*.md`, `_meta/log.md`, and a `z_instructor/` learning-note.

**Published-URL note:** Quartz slugs change (`ue-tutorial-1-…` → `ue-tutorial-101-…`); old bookmarks 404. Accepted (site not widely externally linked pre-rollout); no aliases added. Quartz build verified clean — no broken-link / unresolved-wikilink warnings.

### 2026-06-22 — Worldbuilding framework: "Small Worlds" → "Bounded Worlds"; middle structure "Bounded" → "Closed"; category word "structure" → "Boundary"

**Source:** instructor-directed. Records two terminology changes to Branch D — one previously made but unlogged (the framework/structure rename, owed since 2026-06-20), one new (the category word).

**1. Framework + middle-structure rename (made 2026-06-20, logged here).** The worldbuilding framework was renamed **Small Worlds → Bounded Worlds**, and its three structures became **Finite / Closed / Threshold** — the middle one was renamed *Bounded → Closed* to free the word "Bounded" for the framework name. Swept across the 23 Worldbuilding pages, the Upton lecture (git-mv'd to `Lecture - Situational Game Design for Bounded Worlds.md`), and the agent files (`map-project-skill.md` Branch D table + scripted lines + framework name, `how-the-tutor-works.md`, examples `worldbuilding-snowglobe` / `worldbuilding-scale-doors` / `hybrid-windshield-splats`). The `*Part of the [[Small Worlds]] framework.*` breadcrumb was deleted from every page.

**2. Category word "structure" → "Boundary" (new, 2026-06-22).** The word naming the three categories was changed from **structure** to **Boundary** (capitalized as a framework term). Rationale: *structure* implies internal architecture, but the three categories vary only the world's **edge** — whether an outside exists and whether it can be crossed — which is exactly what the framework's own framing sentence already says ("how the world defines its edges"). The published hub already used "boundary types," so the term now reads consistently from hub to spoken naming move.

**Reference sweep (category word).** Touched (live docs only): `corpus/Design/Worldbuilding/index.md` (§2 callout), `agent/map-project-skill.md` (all of Branch D — the spoken "first/second/third **Boundary**" lines, table header, deduce-and-name heading, lens/not-routing-key sentences, "Boundary and role are companion axes," both Pointers entries), `agent/how-the-tutor-works.md` (project-planning pointer), `corpus/Design/Worldbuilding/CLAUDE.md` (heading + table + supporting lines), and the two WB few-shots `agent/examples/worldbuilding-scale-doors.md` + `worldbuilding-snowglobe.md` (spoken naming + shaping lines). **Bonus fix:** the snowglobe example still read "the second structure, a *Bounded* world" — a stale miss from change #1 — corrected to "second Boundary, a *Closed* world." **Left untouched** (different meaning, not the category): Wolf's "World Structure / Narrative Structure / foundational structures" pages and lectures, the examples' meta-preamble ("model for tone, structure, and how much to say"), "decision structure" in the skill, the *Platform* example line. **Dated archives** (`session-log.md`, `where-we-left-off.md`, prior revision entries, `responses/*.md`) left as history per the don't-update-archives convention.

### 2026-07-08 — Traveler subtitle: "World as Passage" → "World as Presence"

**Source:** instructor-directed.

**Change:** The Traveler (SPR 2) subtitle was renamed **World as Passage → World as Presence**. The role, its central question ("What is this experience?"), and its cluster are unchanged — only the "World as …" lens phrase. Rationale: the page was already built on *presence* as its through-line ("Narrative is constituted by presence"; the tree-falls-in-the-woods riddle; the continuous-take witness; "the simple act of being there"), so "Presence" names what the role was already about — the Traveler's meaning comes from *being there and witnessing*, not from movement/transit, which "Passage" over-implied.

**Reference sweep (live docs only).** File renamed via `git mv`: `Situated Player Role 2 - The Traveler, World as Passage.md` → `… World as Presence.md`, and its frontmatter alias updated to match. Wikilinks + labels swept: the three sibling SPR pages' Previous/Next nav (SPR 1 ×2, SPR 3 ×1), the Storytelling `index.md` role list, `agent/map-project-skill.md` Step 3's subtitle parenthetical, the two Traveler-touching few-shots (`agent/examples/traveler-coatcheck.md`, `hybrid-windshield-splats.md`), `corpus/Design/Storytelling/CLAUDE.md` (filename + lens column), and `The-GET-dev/team/the-get-overview.md` (SPR table). `agent/corpus-index.md` regenerated (drift-check clean). **Left as dated history** per the don't-update-archives convention: this revision log's prior entries (the 2026-06-22 first-role-naming note still lists "Traveler/World as Passage"), `The-GET-dev/responses/*.md` (four worked examples), and the `tutorial-conversion-pipeline.md` source-name row (records the original GitBook filename).

**Published-URL note:** the Quartz slug changes (`…world-as-passage` → `…world-as-presence`); old bookmarks 404. Accepted (site not widely externally linked pre-rollout); no alias added.

### 2026-07-19 — The summary response is named: "Prototype Map"

**Source:** instructor-directed. Classroom-driven — from the Geidai/SFK runs: the GET goes back and forth with the student, then delivers the long response (build order, workflow, instructor questions). That crossing was unmarked, and Peter wants to be able to say in class *"keep going until it gives you a big answer — you'll know it when you see it"* — with the response feeling like the student has **arrived**. Requirements for the name: implies a beginning (a recipe/rubric to continue thinking, not orders to follow), works as a doc for talking to their team and the professor — a conversation starter, not ender. "Threshold" was unavailable (taken by the Bounded Worlds Boundary); "blueprint" is UE's term. Decided name: **Prototype Map**.

**Changes:**

1. **New rule in Step 7 ("Name the response").** The full summary response is a "Prototype Map" and opens, above the `Your idea` block, with a verbatim naming line: *"Here is a Prototype Map for your project — a starting point to think with, and to bring to your team and your professor."* Only the full response gets the name — the restrained draw-out responses (thin ideas, weak-idea manner) are explicitly *not* Prototype Maps, so the name keeps marking the arrival.
2. **Save target renamed:** `student-notes-private/projects/project-plan-<name>.md` → `prototype-map-<name>.md`; the offer says "Prototype Map," not "plan." Distinctive-filename rule unchanged.
3. **Templates:** both skeletons (one-response, two-response intro) open with the naming line; in the two-response format it appears once at the top, not inside each response.

**Reference sweep (live docs only).** `how-the-tutor-works.md` (Personal-student-files table row, confirm-save example path, two "project plans" prose mentions), all seven examples in `agent/examples/` (naming line added to the six full responses; save offers renamed; `weak-idea-alien-ship` gets *no* naming line — its meta-preamble now says so — but its save filename is renamed for folder consistency), `student-notes-private/README.md`, `GET Started/For Contributors/about-the-get.md` + `contributing-to-the-get.md`, `.gitignore` comment, and the LLM tutorials that name the artifact (0, 1005 EN/JA, 1035 EN/ZH, 1003, 1013, 1101 — the quick starts' "you'll know it when you see it" line now points at the self-announcing name; JA/ZH renderings: プロトタイプ・マップ / 原型地图, flagged for instructor review). `corpus-index.md` regenerated. **Left as dated history** per the don't-update-archives convention: `The-GET-dev/responses/*.md`, prior revision entries, session logs, and the Geidai/SFK student output archives.
