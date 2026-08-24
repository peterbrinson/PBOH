---
type: Tutorial
cssclasses: unreal-tutorial
publish: true
---

# LLM Concepts: Claude and ChatGPT

This is a map, not a setup tutorial. The names overlap, the products change quickly, and the same AI can appear in a browser, a desktop app, or a terminal. The first useful move is to separate the layers.

> [!important] The five layers
> 1. **Company** — OpenAI or Anthropic.
> 2. **Model** — the language model doing the inference: GPT-5.6 Sol, Claude Sonnet 5, and so on.
> 3. **Product** — the service wrapped around a model: ChatGPT, Codex, Claude, Claude Code, Cowork.
> 4. **Surface** — where you meet the product: browser, desktop app, mobile app, terminal, or IDE.
> 5. **Workspace and context** — the chats, instructions, files, tools, and memory the model can use right now.

Changing the surface does not necessarily change the model. Opening a local folder does not necessarily mean the model runs locally. Paying for ChatGPT does not necessarily buy OpenAI API tokens. These are different layers.

This page was checked against official product documentation on **August 23, 2026**. Product names and plan limits will change; the distinctions above should last longer.

## Claude and ChatGPT: surfaces and workspaces

| Product | Browser website | Desktop | Mobile | Terminal / IDE | Cloud or local? | Collaboration options |
|---|---|---|---|---|---|---|
| **Claude Chat** | Claude.ai | Claude Desktop | iOS and Android | No terminal interface for ordinary Claude Chat | The model runs in the cloud. Chats and uploaded project knowledge live with the account. | Share projects inside Team or Enterprise organizations; publish or share artifacts; share conversation links. |
| **Claude Cowork** | Start and monitor cloud tasks | Fullest surface; can reach approved local folders, browser, and desktop apps | Start, steer, and review cloud tasks | Not primarily a terminal product | Cowork sessions can run in Anthropic's cloud. Desktop acts as a bridge when a task needs local files or apps. | Shared organizational sources and connectors; share some artifacts. A locally attached folder is still an ordinary folder, so teams need their own sync or version-control practice. |
| **Claude Code** | Cloud tasks can work on GitHub repositories | May also be launched from Claude Desktop | Mobile can monitor or dispatch some work | Its native surface is the terminal; it also works in supported IDEs | In terminal/IDE use, tools act on the local workspace while the Claude model runs in the cloud. Web tasks run in a remote environment. | Git branches, commits, pull requests, shared repository files, and `CLAUDE.md`; organization-only Claude Code artifacts on eligible plans. |
| **ChatGPT Chat / Work** | Chat and longer Work tasks | ChatGPT desktop app | iOS and Android | Not primarily a terminal product | Cloud by default. The desktop app can also run local chats that reach approved files and apps. | Shared projects, shared project sources and instructions, shared links, organizational workspaces, and connected services. |
| **Codex** | Cloud coding tasks and review | Codex view in the ChatGPT desktop app | Remote access can start or steer supported desktop/cloud work | Codex CLI and IDE extensions | A local chat can read and edit a local folder. A cloud chat works in an OpenAI-managed environment. The model inference is still normally cloud-based. | The shared files are the collaboration layer: Git/GitHub, branches, pull requests, repository documentation, `AGENTS.md`, and team workspaces. |
| **Claude API / OpenAI API** | Browser consoles exist, but the API is used through software | Any program can call it | Any app can call it | Commonly called from code, scripts, or a CLI | The model runs on company or partner cloud infrastructure. Your program decides where its own data and tools run. | A team builds its own product and permissions around the model. API workspaces can manage credentials, prompts, budgets, and usage controls. |

### The local/cloud distinction that trips people up

There are three separate questions:

1. **Where is the interface?** A browser, desktop app, phone, terminal, or IDE.
2. **Where are the files and tools?** On your computer, in a synced service, in GitHub, or in a temporary cloud environment.
3. **Where does the model run?** For the proprietary Claude and OpenAI models above, generally on remote servers.

So Claude Code or Codex can be **inside a local workspace** without being a **locally running model**. The agent may read and edit files on your laptop, while the model doing the reasoning is reached over the internet.

An actually local model has model weights and inference software installed on a machine you control. That is a different arrangement, with different privacy, hardware, setup, cost, and capability tradeoffs.

## Ways people collaborate with an AI

"Collaboration" can mean several different things. They are not interchangeable.

| Kind | What is actually shared | Good for | Limitation |
|---|---|---|---|
| **Shared transcript** | A conversation or link | Showing what happened | The recipient gets a record, not necessarily a continuing shared workspace. |
| **Shared project** | Instructions, uploaded sources, and chats | A group returning to the same body of context | Availability and permissions depend on plan and product. Chat histories may still belong to individual contributors. |
| **Shared artifact** | A document, app, visualization, or other result | Reviewing or using an output | It may not include the reasoning, source files, or context that produced it. |
| **Shared folder or vault** | Human-readable project files | Durable knowledge work in Obsidian or another file-based system | Simultaneous edits and version conflicts need to be managed. |
| **Git repository** | Files plus version history, branches, and review | Teams using Claude Code or Codex in a durable workspace | Git is a collaboration system to learn; it is not the AI itself. |
| **Organization workspace** | Accounts, permissions, shared services, governance, and billing | A class, studio, or company | The organization controls features, retention, and access. |

For our purposes, the strongest collaboration is usually **shared, reviewable files with history**. A transcript can support that work, but it is not the work itself.

## Models and effort

### Two different controls

- **Model** chooses the engine: its general capability, speed, price, and sometimes specialty.
- **Effort** tells that engine roughly how much computation, reasoning, tool use, and self-checking to spend on this request.

Higher effort can improve difficult work, but it generally takes longer and consumes more of a usage allowance or more billable tokens. Effort is not the same as response length. Ask separately for a short or long answer.

### Current model families: a beginner's chart

| Company | Model tier | Beginner interpretation | Current effort controls |
|---|---|---|---|
| **OpenAI** | **GPT-5.6 Sol** | Strongest general choice for difficult reasoning and coding | API: `none`, `low`, `medium`, `high`, `xhigh`, `max`. Codex surfaces may label these Low, Medium, High, Extra High, and Max; Ultra adds automatic delegation to subagents. |
| **OpenAI** | **GPT-5.6 Terra** | Balance of intelligence, speed, and cost | Same basic GPT-5.6 effort scale; exact options depend on the product surface. |
| **OpenAI** | **GPT-5.6 Luna** | Lower-cost, high-volume, faster work | Same family scale, though a plan or surface may expose only some choices. |
| **Anthropic** | **Claude Fable 5** | Highest-capability Claude for demanding, long-running agent work | `low`, `medium`, `high`, `xhigh`, `max`. |
| **Anthropic** | **Claude Opus 5** | Deep reasoning, coding, and complex professional work | `low`, `medium`, `high`, `xhigh`, `max`. |
| **Anthropic** | **Claude Sonnet 5** | Strong balance of intelligence and speed | `low`, `medium`, `high`, `xhigh`, `max`. |
| **Anthropic** | **Claude Haiku 4.5** | Fast, inexpensive work at scale | It does not expose every newer effort option; model support varies. |

Model access depends on the product, account, plan, and administrator settings. A model named in API documentation may not appear in a classroom account's model picker.

### A practical effort ladder

| Effort | Use it for | Watch for |
|---|---|---|
| **Low / none** | Classification, reformatting, quick lookups, simple edits | Less checking and shallower reasoning. |
| **Medium** | Everyday planning, explanation, drafting, and bounded file work | A good default when the task is real but not unusually hard. |
| **High** | Ambiguous analysis, difficult bugs, cross-file reasoning, consequential plans | Slower and more expensive in tokens or usage. |
| **Extra high / xhigh** | Long-horizon coding or research where missed connections matter | Diminishing returns on ordinary questions. |
| **Max** | The hardest work where quality matters much more than time or cost | Maximum does not guarantee correctness. |
| **Ultra in Codex** | A large task that can be divided among multiple agents | This is orchestration as well as effort; it is not simply one model thinking longer. |

For [[Tutorial 1020 - Codex Access and Obsidian Setup]], **GPT-5.6 Sol at Medium** is pedagogically useful: the model is capable enough to reconstruct the messy project, while the workshop remains responsive. Students should learn later that changing effort is a tradeoff, not an automatic upgrade.

## Vocabulary

### The system

**Artificial intelligence (AI)**  
The broad field. In casual conversation, people also use "AI" for a particular product or model, which is why the term can become slippery.

**Large language model (LLM)**  
A model trained to predict and generate sequences of tokens. Claude and GPT are families of LLMs.

**Model**  
The trained engine that transforms input into output. A product can switch among models without changing its interface.

**Inference**  
Running a trained model to produce a response. Training makes the model; inference is what happens when you use it.

**Product**  
The service around a model: account, interface, file handling, tools, memory, permissions, and billing. ChatGPT and Claude are products; GPT-5.6 Sol and Claude Sonnet 5 are models.

**Surface / interface**  
Where a person meets the product: website, desktop app, mobile app, terminal, or IDE. The same model may be available through several surfaces.

### Tokens and context

**Token**  
A chunk of text the model reads or writes. A token is not exactly a word: a word may be one token or several, and punctuation also counts. API companies meter much of their model usage in tokens.

**Input token / output token**  
Input tokens are sent to the model: instructions, chat history, files, and tool results. Output tokens are generated by the model: answers, reasoning, and tool calls. Output tokens usually cost more because generating them requires repeated computation.

**Context**  
Everything available to the model for the current turn: instructions, selected conversation history, loaded files, retrieved passages, tool descriptions, and tool results.

**Context window**  
The maximum amount of context a model can hold for one request. A large vault is not automatically in the context window. The agent must select, search, retrieve, summarize, or load relevant parts.

**Working memory**  
An informal name for what the model is actively using in its present context. This is not the same as a human memory and is not automatically permanent.

**Compaction**  
Summarizing or compressing older context so a long task can continue within a limited context window. Compaction preserves the gist but can lose detail.

**Context engineering**  
Designing what reaches the model, in what form, at what time, and within what token budget. File structure, indexes, instructions, examples, retrieval, and summaries are all context engineering.

**Prompt**  
The immediate instruction or message sent to a model. Prompting is one part of context engineering, not the whole practice.

**System instructions**  
Higher-priority instructions that shape the agent's role and behavior. In a file-based workspace, files such as `AGENTS.md` or `CLAUDE.md` can supply durable project guidance.

### Learning from supplied material

**In-context learning (ICL)**  
The model changes its behavior by using instructions and examples supplied in the current context. Its underlying trained weights do not change. PBOH uses ICL when an agent reads our instructions, course knowledge, and examples and then behaves like this particular guide.

**Retrieval-augmented generation (RAG)**  
A system searches a larger collection and inserts likely-relevant passages into the model's context. RAG is one technique for choosing context; it is not the same as the model already knowing the material.

**Knowledge bundle**  
Our term for a portable, human-readable collection of content plus the structure and instructions that help an LLM use it. PBOH is a knowledge bundle. It is more than a pile of files and less than training a new model.

**Vault**  
Obsidian's name for a folder of Markdown notes. The folder exists without Obsidian; Obsidian supplies a useful interface, links, search, and graph.

**Workspace / project**  
A persistent place where related files, instructions, chats, and tools can be brought together. Different products use these words differently, so ask what is actually persistent and shared.

**Memory**  
Information a product carries across turns or chats. Memory may live in service-controlled account features, a project database, or explicit files. Team-controlled files are visible and editable; hidden product memory is less inspectable.

### Acting and producing

**Chat**  
A sequence of messages. A chat can hold temporary context and may be saved, but a saved chat is not automatically a structured workspace.

**Agent**  
A model wrapped in a loop that can inspect context, choose actions, use tools, observe results, and continue toward a goal. The model generates decisions; the surrounding product executes and constrains them.

**Tool**  
A capability outside text generation: searching the web, reading a file, running a command, editing a document, or calling another service.

**Artifact**  
In general, a durable result a human can inspect: a prototype plan, document, spreadsheet, diagram, or piece of code. Claude also uses **Artifact** as a specific product name for substantial content shown in a separate pane. In this course, the broader meaning usually matters: the artifact remains after the conversation.

**CLI (command-line interface)**  
A text interface used in a terminal. Claude Code and Codex CLI let an agent work from the current directory, use command-line tools, and read or edit files with permission.

**Terminal / shell**  
The program where commands run. A CLI is one tool used inside the terminal. The terms are related but not identical.

**IDE**  
An integrated development environment such as VS Code. An IDE combines file editing, code navigation, terminals, debugging, and extensions.

**API (application programming interface)**  
A structured way for software to call a model. People use ChatGPT or Claude directly; programmers use APIs to put models inside other products and workflows.

**API key**  
A secret credential that allows software to use an API and charge its account. It should not be pasted into public files or committed to Git.

**Git / GitHub**  
Git records versions of files and supports branching and merging. GitHub hosts Git repositories and adds sharing and review. Neither is an AI, but both are major collaboration layers for agents working in shared files.

**Hallucination**  
A confident-looking claim not grounded in reliable evidence. More effort can reduce some mistakes but cannot remove this risk. Sources, tests, and human review still matter.

## Business models: what the companies are selling

The simple version is that Anthropic and OpenAI sell **access to computation and capability**. Tokens are the most visible meter, especially in APIs, but they are not the only business model.

| Revenue model | What the customer pays for | Why the company likes it |
|---|---|---|
| **Consumer subscription** | A monthly plan with access to products and a usage allowance | Predictable recurring revenue; an easy way for individuals to begin. |
| **Higher-capacity subscription or credits** | More usage, premium models, longer tasks, or overage capacity | Heavy users pay more in proportion to the costly compute they consume. |
| **Business / education / enterprise seats** | Per-user access plus administration, security, privacy, compliance, and support | Larger, stickier contracts and organization-wide adoption. |
| **API token billing** | Input, cached input, and output tokens, usually priced per million tokens | Usage scales directly with customer demand and compute consumption. |
| **Tool and speed charges** | Web search, code execution, computer use, storage, or faster inference in some products | Agent work consumes resources beyond raw text generation. |
| **Cloud-platform distribution** | Models delivered directly or through partners such as AWS, Google Cloud, Microsoft, or Azure | Reaches companies where their infrastructure and purchasing already live. |

### Why tokens matter to the company

A model does computation over tokens. Longer input means more material to process. Longer output means more generation steps. Re-reading a large chat or many files on every turn can be expensive. This is why both companies:

- charge API input and output differently;
- discount cached input when the same context can be reused;
- offer smaller and larger model tiers;
- expose effort controls that trade cost and latency for more reasoning;
- impose usage limits even on a flat monthly subscription;
- invest in retrieval and compaction so the model does not reread everything forever.

"Selling tokens" is therefore a useful first approximation for the API business. It is incomplete for ChatGPT and Claude subscriptions, where the company sells a bundle of model access, interfaces, storage, tools, support, and an allowance whose exact token accounting may be hidden from the user.

### Incentives worth noticing

The provider benefits when we:

- use its product frequently;
- store ongoing projects and memory in its service;
- connect more of our tools and data;
- move from an individual plan to a team plan;
- build software on its API;
- spend more compute on harder models and higher effort.

Those incentives do not make the products bad. They explain design choices. A product may encourage frictionless conversation because frequent use is valuable to the company. Our educational question is different: **does this arrangement help the student think, make decisions, and leave behind work they can inspect?**

That is one reason for keeping a knowledge bundle in Markdown. The model can change. The subscription can change. The interface can change. The course knowledge, instructions, decisions, and version history remain readable by the people who made them.

## What to remember

1. **Claude is not Claude Code; ChatGPT is not Codex; a model is not a product.**
2. **Desktop versus browser describes the surface, not necessarily where the model runs.**
3. **A local workspace can use a cloud model.**
4. **A context window is temporary; files are persistent.**
5. **ICL changes behavior through supplied context, not by retraining the model.**
6. **Effort trades speed and usage for depth; maximum effort is not maximum truth.**
7. **A shared transcript is weaker than shared, reviewable files with history.**
8. **Tokens are both a technical unit and a business meter.**

## Current official references

- [ChatGPT and Codex surfaces, models, and reasoning effort](https://learn.chatgpt.com/docs/models)
- [ChatGPT projects and local projects](https://learn.chatgpt.com/docs/projects)
- [ChatGPT Work and Codex pricing structures](https://learn.chatgpt.com/docs/pricing)
- [OpenAI API model families and token prices](https://developers.openai.com/api/docs/models)
- [Claude access on web, desktop, and mobile](https://support.claude.com/en/articles/8114491-get-started-with-claude)
- [Claude Cowork across web, desktop, and mobile](https://support.claude.com/en/articles/15520349-use-claude-cowork-on-web-desktop-and-mobile)
- [Claude Code on subscriptions and in the terminal](https://support.claude.com/en/articles/11145838-use-claude-code-with-your-pro-or-max-plan)
- [Claude Code on the web](https://support.claude.com/en/articles/12618689-claude-code-on-the-web)
- [Claude projects and collaboration](https://support.claude.com/en/articles/9517075-what-are-projects)
- [Claude model families](https://platform.claude.com/docs/en/home)
- [Claude effort controls](https://platform.claude.com/docs/en/build-with-claude/effort)
- [Claude API pricing](https://platform.claude.com/docs/en/about-claude/pricing)
