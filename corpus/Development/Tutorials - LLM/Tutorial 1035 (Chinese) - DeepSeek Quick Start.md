---
type: Tutorial
cssclasses: unreal-tutorial
publish: true
---

*[English version →](https://vlabusc.github.io/The-GET/Development/Tutorials---LLM/Tutorial-1035---DeepSeek-Quick-Start)*

## 0. 简介

**目标。** 完成本教程后,你的电脑上就能通过 **Deep Code**(一个运行 DeepSeek 模型的终端代理)使用 The Game Engine Tutor(The GET)了,并且你已经完成了第一次 GET 对话——提出一个游戏的想法,和它讨论,并保存了它给出的方案。

这是一站式教程。**不需要 GitHub 账号,不需要 git。** 但你确实需要以下三样东西:

- 一个终端(这条路线无法避开终端——DeepSeek 没有桌面应用)
- 一个**有少量余额的 DeepSeek 账号**——按使用量付费,不是免费的(见下方说明)
- 网络连接

> [!NOTE]
> **DeepSeek 和 Gemini / Claude / Codex 不太一样。** 那些工具都自带各自的代理程序。DeepSeek 不是这样——它只提供 AI 模型,你需要通过一个叫 **Deep Code** 的第三方社区工具来使用它。这意味着只能通过终端使用(没有桌面应用),而且是按使用量付费(通过 API key),不是订阅制,也不是免费的。如果你想完全避开付费步骤,可以用 [[Tutorial 1005 - Antigravity Quick Start|Gemini 版教程]]——只需要一个免费的 Google 账号。

**开始之前,先想一想。** 接下来你会分享一个粗略的游戏想法——可以是你现在课堂上正在做的项目,也可以是你今天刚想到的。The GET 可以通过 Situated Player Roles(**The Investigator** 和 **The Traveler**),或者 **Bounded Worlds** 框架,来帮你梳理这个想法。这些你在课上都学过。构思想法时,建议至少运用其中一个。如果想复习一下,课程网站上有这些页面(英文): [Situated Player Roles](https://vlabusc.github.io/The-GET/Design/Storytelling/) 和 [Bounded Worlds](https://vlabusc.github.io/The-GET/Design/Worldbuilding/)。

---

## 1. 打开终端

- **Windows:** 按 Windows 键 → 输入 `PowerShell` → 回车
- **macOS:** 按 Cmd + Space → 输入 `Terminal` → 回车

下面的所有操作都在这里进行。

---

## 2. 安装 Node.js(如果还没有的话)

*Deep Code 运行在 Node.js 之上,这是一个让命令行程序能够运行的环境。*

> [!NOTE]
> 这一步只是检查一下——不会对你的电脑做任何改动。如果出现报错,那也完全正常,说明你还没有安装 Node,下一行会告诉你该怎么做。

输入:

```
node -v
```

- 如果显示了版本号(类似 `v20.12.0`),直接跳到第 3 步。
- 如果显示 `command not found` 或 `不是内部或外部命令`:前往 [nodejs.org](https://nodejs.org/),下载适合你系统的 **LTS** 安装包,按默认选项安装,然后**关闭并重新打开终端**。再次运行 `node -v` 确认。

---

## 3. 安装 Deep Code

```
npm install -g @vegamo/deepcode-cli
```

验证安装:

```
deepcode --version
```

应该会显示版本号。如果没有:关闭终端,重新打开一个,再试一次。

---

## 4. 获取 DeepSeek API Key 并充值

1. 前往 [platform.deepseek.com/api_keys](https://platform.deepseek.com/api_keys)。
2. 注册账号,并充值少量金额——大约 2 美元就足够开始使用了。
3. 创建一个新的 API key 并**复制它**——格式类似 `sk-...`。之后就无法再次查看,所以先粘贴到一个临时文本文件里保存,直到完成第 5 步。

<span style="color:#cb5d21">**请妥善保管这个 key。**</span> 它会从你的账户扣费——不要把它粘贴到聊天记录、代码提交、截图,或任何公开的地方。

---

## 5. 用你的 key 配置 Deep Code

Deep Code 从你主目录下 `.deepcode` 文件夹里的 `settings.json` 文件读取设置。我们会直接在终端里创建这两样东西——这样可以避免常见的隐藏文件夹 / 记事本乱码等问题。

在第 1 步打开的终端里,粘贴适合你系统的代码块,然后按回车:

**Windows (PowerShell):**
```
New-Item -ItemType Directory -Force "$env:USERPROFILE\.deepcode" | Out-Null
@'
{
  "env": {
    "MODEL": "deepseek-v4-pro",
    "BASE_URL": "https://api.deepseek.com",
    "API_KEY": "sk-REPLACE_WITH_YOUR_KEY"
  },
  "thinkingEnabled": true,
  "reasoningEffort": "max"
}
'@ | Set-Content -Path "$env:USERPROFILE\.deepcode\settings.json" -Encoding ascii
```

**macOS:**
```
mkdir -p ~/.deepcode
cat > ~/.deepcode/settings.json <<'EOF'
{
  "env": {
    "MODEL": "deepseek-v4-pro",
    "BASE_URL": "https://api.deepseek.com",
    "API_KEY": "sk-REPLACE_WITH_YOUR_KEY"
  },
  "thinkingEnabled": true,
  "reasoningEffort": "max"
}
EOF
```

现在打开这个文件,把占位符换成你的真实 key:

**Windows:** `notepad "$env:USERPROFILE\.deepcode\settings.json"`
**macOS:** `open -e ~/.deepcode/settings.json`

找到 `"API_KEY": "sk-REPLACE_WITH_YOUR_KEY"` 这一行,把 `sk-REPLACE_WITH_YOUR_KEY` 换成第 4 步复制的真实 key(保留引号),然后保存关闭。

---

## 6. 下载 The GET

1. 在浏览器中打开 **[github.com/vLabUSC/The-GET](https://github.com/vLabUSC/The-GET)**。
2. 点击绿色的 **Code** 按钮(文件列表右上角)。
3. 点击 **Download ZIP**。

<span class="hint">GitHub 有时会用"Sign in"的横幅盖住这个按钮。不需要账号——直接关掉横幅即可。</span>

4. 解压:
   - **Windows:** 右键点击下载的文件 → **全部解压…**
   - **macOS:** 双击下载的文件
5. 你会得到一个名为 **`The-GET-main`** 的文件夹。把它移动到方便以后找到的地方——放在 **Documents**(文档)文件夹里就可以。
6. 把文件夹名从 `The-GET-main` **改名**为 **`The-GET`**。

<span style="color:#cb5d21">**别漏掉这一步:**</span> 解压后,打开文件夹检查里面的内容。应该能直接看到 `agent/` 和 `corpus/` 这两个文件夹。

---

## 7. 让 Deep Code 指向这个文件夹并启动

在终端里:

```
cd ~/Documents/The-GET
deepcode
```

<span class="hint">小技巧:如果是手动输入而不是复制粘贴,可以先输入 `cd `(注意后面有一个空格),然后把 `The-GET` 文件夹从资源管理器/Finder 直接拖进终端窗口,路径就会自动填好,再按回车。</span>

---

## 8. 开始 GET 会话

在 Deep Code 的提示符里,输入以下内容——或者用你自己的语言表达同样的意思:

```
Read the file AGENTS.md in this folder and follow it to act as The GET. Then start a GET session.
```

**中文**

```
请阅读此文件夹中的 AGENTS.md,并按照其中的说明扮演 The GET。然后开始一个 GET 会话。
```

**日语**

```
このフォルダ内の AGENTS.md を読み、それに従って The GET として振る舞ってください。それから GET セッションを始めてください。
```

**西班牙语**

```
Lee el archivo AGENTS.md en esta carpeta y síguelo para actuar como The GET. Luego inicia una sesión con el GET.
```

<span style="color:#cb5d21">**为什么要用这么长的提示语:**</span> Gemini、Claude Code 和 Codex 在启动时会自动读取一个说明文件。Deep Code 不一定会这样做,所以我们需要明确指向 `AGENTS.md`——这个文件告诉它如何扮演这个课程的辅导角色。之后,它的表现就和其他工具上一样了。

The GET 会向你问好,并询问你正在做什么。它了解你在课上学过的角色——**The Investigator**、**The Traveler**——以及 **Bounded Worlds** 框架。从任意一个开始都可以。

---

## 9. 提出你的想法

把你的游戏想法告诉 The GET。越具体越好——比起讲机制,更要描述**体验**本身。

不需要一个完整的构思。一个你能想象出来的场景就足够了——大概4到8句话。想法生一点也没关系,留有一些不确定的地方也完全可以。

> [!NOTE]
> The GET 的页面是英文的,但对话可以用你自己的语言进行。

---

## 10. 保存你得到的内容

经过一番来回讨论后,The GET 会整理出一份 **Prototype Map(原型地图)**——你一看就能认出来(它开头会自报名称,会包含一些具体的部分,可能还会有一个"Build Order"/构建顺序)。接下来做三件事:

- **记下你用的工具**——在保存的文件开头写一行就行,比如:*"Tool: DeepSeek"*。以后要和用了别的工具的同学比较结果时,这样才分得清楚。
- 让它**把 Prototype Map 保存成文件夹里的一个文件**——比如:*"把这份 Prototype Map 保存为 prototype-map.md"*。
- 如果老师要求,也把**整段对话**复制到一个文本文件里保存。对话本身才是最值得看的内容。

---

## 疑难排查

### `deepcode` 提示找不到该命令

关闭所有已打开的终端窗口,重新打开一个新的——新安装的命令只有重启终端后才会生效。如果还是不行,回到第 3 步重新安装。

### 能运行,但表现得不像这门课的辅导系统

检查两点:你打开的是不是 **The-GET 这个文件夹本身**,以及你的提示语里是否让 Deep Code **读取了 `AGENTS.md`**(第 8 步)。少了这一步,它就不会加载辅导系统的说明。

### 出现身份验证或 API key 错误

再打开一次 `settings.json`(第 5 步),检查:key 是否完整粘贴(以 `sk-` 开头)、文件名是否正好是 `settings.json`(而不是 `settings.json.txt`)、文件是否放在主目录下的 `.deepcode` 文件夹里。同时确认你的 DeepSeek 账号里还有余额。

### Windows 提示:"无法加载,因为在此系统上禁止运行脚本"

1. 以**管理员身份**打开 PowerShell(右键点击 PowerShell → **以管理员身份运行**)。
2. 运行:
   ```
   Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
   ```
3. 输入 `Y`,回车,关闭管理员窗口,然后在普通的 PowerShell 窗口里重试。

### 找不到解压后的文件夹

检查你的 **Downloads**(下载)文件夹——解压后的文件夹通常就在 ZIP 文件旁边。把文件夹移动到 Documents,然后从第 6 步的第 5 项继续。
