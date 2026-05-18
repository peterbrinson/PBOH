# Start Here — Unreal Tutorial Companion

This folder is your AI tutor for Unreal Engine. It works with either **Claude** or **Gemini** — you pick. Setup is the same either way.

---

## 1. Pick your AI assistant

Install one of these on your machine:

- **Claude Code** — see [claude.com/code](https://claude.com/code)
- **Gemini CLI** — see [[UE Tutorial 1001 - Set Up the Gemini Companion|Tutorial 1001 — Set Up the Gemini Companion]]

Both are command-line tools. Open a terminal in *this folder*, launch the tool, and you're ready.

## 2. Type this to begin

Whichever assistant you chose, type this as your first message:

> **Start a Companion session.**

The AI will greet you and ask what you're working on. From there, three common paths:

| If you say… | The AI will… |
|---|---|
| "I have a game / project / assignment idea — help me plan it" | walk you through the project-mapping workflow (identify role → decompose features → suggest build order) |
| "I'm stuck on Tutorial X" or "How do I do Y in Unreal?" | check the wiki, then your tutorial pages, then diagnose with you |
| "What is [some Unreal concept]?" | answer from the wiki; if it's missing, tell you and log it for your instructor |

You don't have to use those exact phrasings. Just say what you're trying to do.

## 3. What's in this folder

| Folder / file | What it is |
|---|---|
| `charter.md` | The AI's operating manual. The AI reads this — you usually don't need to. |
| `project-mapping.md` | The step-by-step workflow the AI uses when you describe a project. |
| `ue-capability-map.md` | Feature → tutorial → player-role lookup. |
| `Unreal Tutorials/` | Numbered step-by-step tutorials (1, 2, 3, 4, 201, 202, 301, 302, 401, 701, 702, 801, 821, 901). |
| `Unreal Wiki/` | Quick-reference pages on Blueprint concepts. Start at `+ UE Wiki Index`. |
| `Situated Player Roles/` | Four player roles — **Investigator, Traveler, Entrant, Dreamer** — that frame design decisions. |
| `References/` | Game and film examples (Gone Home, Outer Wilds, Twin Peaks, etc.) the AI may cite. |
| `student-only/` | **Your personal working folder.** The Companion saves your project plans, notes, references you collect, and a "where we left off" summary here. See the README inside. |

You can ignore the rest until you need it. The AI will route you to specific files when relevant.

## 4. Three things to know

- **Blueprint-only.** This course uses Unreal's visual scripting — no C++. The Companion won't suggest C++ even if asked.
- **The AI checks the wiki first.** If it doesn't find what you need there, it'll say so and answer from its training. That's fine — those gaps get logged for your instructor to fill in over time.
- **Push back on the AI.** If it's off-track, vague, or wrong, say so. It'll adjust. The Companion is meant to be a collaborator, not an oracle.

## 5. Questions worth saving for your professor

Some questions the AI shouldn't decide alone — design intent, meaning, scope ambitions, sensitive subject matter, technical paths where your professor has hands-on experience. When the AI says **"worth bringing this up with your instructor,"** it means it literally. Save the question, bring it.

---

Good luck, and have fun. The course is meant to be played in.
