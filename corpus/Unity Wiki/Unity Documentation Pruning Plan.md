# Goal Description

The objective is to drastically reduce the sheer volume of Unity documentation files in `The Companion\corpus\Unity Wiki\raw\` (`ScriptReference` and `Manual`) so that only the files relevant to the `389\4_lectures` syllabus are kept. We will use the `Unreal Wiki` / `Unreal Tutorials` paradigm as our structural reference, ensuring we end up with atomic, focused concepts rather than a sprawling web of unused engine documentation.

## Proposed Changes

We will execute this cleanup and synthesis process in a series of targeted phases. No files will be deleted until we are 100% certain we have successfully mapped and retained the necessary dependencies.

### 1. Topic Extraction & Definition
First, we will scan the course materials in `389\4_lectures` to extract the exact Unity topics taught in the course. Based on an initial review of Weeks 1-3, this includes concepts such as:
- **Rendering:** Render Pipelines, URP, HDRP, Materials, Lighting (Directional, Point, Spot, Area).
- **Systems:** Particle Systems, Prefabs, Splines, Physics Joints, Character Controllers, AudioSource, AudioListener.
- **Math/Transform:** Vectors, Bézier curves, parametric models.

We will formalize these into a list of "Target Wiki Topics," similar to the structure seen in `+ UE Wiki Index.md`.

### 1b.  Manual Review
Peter and Margaret devise a list


### 2. File Mapping and Dependency Tracing
Next, we will write a local Python script (or utilize shell tools) to map our "Target Wiki Topics" to the specific HTML files in the `Manual` and `ScriptReference` folders. 
- The script will search titles and metadata to find the canonical pages for each topic (e.g., `class-ParticleSystem.html`, `class-HingeJoint.html`).
- Once the core HTML files are identified, the script will parse them to extract all internal links to images, CSS, and JS (such as those in `StaticFiles`, `StaticFilesManual`, and `uploads`), ensuring we don't break the styling or diagrams of the kept pages.

### 3. Pruning the Raw Documentation
Once we have our definitive list of "Kept Files" (HTML + Assets), we will execute the pruning:
- Move all "Kept Files" to a temporary staging folder.
- Delete the thousands of irrelevant files remaining in `Unity Wiki\raw\ScriptReference` and `Unity Wiki\raw\Manual`.
- Restore the "Kept Files" to their original locations.

### 4. Markdown Wiki Generation (Long-term)
With a manageable, slimmed-down raw corpus, we will systematically convert these HTML files into atomic Markdown notes placed in the `Unity Wiki` directory. We will generate a `+ Unity Wiki Index.md` file that mirrors the categorizations used in the Unreal Wiki (e.g., Components, Physics, Rendering, Blueprints/Scripts).

## Open Questions
> [!WARNING]
> Since the `389\4_lectures` folder is currently incomplete, do you want me to infer other common foundational Unity concepts that are typically taught alongside these, or strictly stick **only** to the keywords explicitly found in the existing lecture files?

> [!IMPORTANT]
> The HTML documentation often relies on heavily interlinked cross-references (e.g., clicking on a `GameObject` property from the `ParticleSystem` page). Do you want to keep one level of "clicked" links for context, or strictly isolate the files to *only* the main topic pages?

## Verification Plan

### Automated Scripts
- The Python extraction script will log exactly which files it mapped to which topics.
- The script will do a "dry-run" printout of the file paths targeted for deletion before actually removing anything.

### Manual Verification
- We can manually inspect the staging directory to confirm that pages like "Particle Systems" render correctly locally with their images and CSS intact.
- You can review the `+ Unity Wiki Index.md` generated draft to ensure it aligns with the course's pedagogical goals before we finalize the conversion.
