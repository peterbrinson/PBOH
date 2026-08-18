---
type: Tutorial
cssclasses: unreal-tutorial
publish: true
aliases:
  - "./Tutorial 1090 - Fork and Update GDOH"
---

## 0. Introduction

**Outcome.** By the end of this optional tutorial, you have a GitHub fork of PBOH that can receive course updates and carry contributions back to the instructor.

Do this after you have successfully used one of the quickstarts. Forking is useful for the semester-long workflow, but it should not delay your first PBOH conversation.

**You need:** a GitHub account and [Git](https://git-scm.com/downloads) installed.

---

## 1. Fork PBOH

1. Sign in to [github.com](https://github.com/).
2. Open [github.com/peterbrinson/PBOH](https://github.com/peterbrinson/PBOH).
3. Click **Fork**, leave the defaults, and create the fork.

Your copy now lives at `github.com/<your-username>/PBOH`.

---

## 2. Clone Your Fork

Open **PowerShell** on Windows or **Terminal** on macOS and move to Documents:

```
cd ~/Documents
```

If you already have a ZIP copy named `PBOH`, keep it in place for now and clone the Git copy under a different name:

```
git clone https://github.com/<your-username>/PBOH.git PBOH-git
cd PBOH-git
```

If you do not already have a `PBOH` folder, you can omit `PBOH-git` from the first command.

---

## 3. Connect the Class Original

From inside the cloned folder:

```
git remote add upstream https://github.com/peterbrinson/PBOH.git
git remote -v
```

You should see:

- `origin` — your fork
- `upstream` — the class original

---

## 4. Carry Over Your Private Work

If you began with a ZIP copy, copy its `student-notes-private/` folder into the new Git copy. That folder contains your Prototype Plans, notes, and session handoff. It stays private and is not pushed to GitHub.

Once you have confirmed the files are present, open the new Git copy in your AI tool and continue there. Keep the ZIP copy until you are confident the new folder works.

---

## 5. Receive Updates

From inside your Git copy:

```
git pull upstream main
```

For contribution and gap-log instructions, read `corpus/Get Started/For Contributors/contributing-to-pboh.md` inside PBOH.

---

## Troubleshooting

### `git` is not recognized

Install Git from [git-scm.com/downloads](https://git-scm.com/downloads), accept the defaults, and open a new terminal.

### I cloned the class original instead of my fork

Keep the folder as a backup. Clone your own fork again using the command in Chapter 2; confirm that your username appears in the URL.

