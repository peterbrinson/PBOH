---
type: Tutorial
cssclasses: unreal-tutorial
language: zh
translation_of: "Tutorial 1035 - DeepSeek Quick Start"
publish: true
---

*[[Tutorials - LLM/Tutorial 1035 - DeepSeek Quick Start|English version →]]*

## 0. 简介

**目标。** 完成本教程后，你会把 Deep Code 连接到 DeepSeek，在 PBOH 文件夹中启动它，并完成第一次 GET 对话，保存一份 Prototype Plan。

这是目前最短的 DeepSeek 路线。不需要 GitHub 账号或 git，但需要终端、DeepSeek API key，以及少量按使用量付费的余额。

> [!NOTE]
> DeepSeek 提供模型，但不提供代理工具。本教程使用第三方社区工具 **Deep Code**。如果你想使用免费、图形化的路线，请阅读 [[Tutorials - LLM/Tutorial 1005 - Antigravity Quick Start|Antigravity Quick Start]]。

---

## 1. 打开终端

- **Windows:** 按 Windows 键 → 输入 `PowerShell` → Enter
- **macOS:** 按 Cmd + Space → 输入 `Terminal` → Enter

---

## 2. 安装 Node.js 和 Deep Code

先检查 Node.js：

```
node -v
```

如果找不到这个命令，请从 [nodejs.org](https://nodejs.org/) 安装当前的 **LTS** 版本，然后重新打开终端。

安装并检查 Deep Code：

```
npm install -g @vegamo/deepcode-cli
deepcode --version
```

---

## 3. 创建 DeepSeek API Key

1. 打开 [platform.deepseek.com/api_keys](https://platform.deepseek.com/api_keys)。
2. 创建账号，并充值少量余额。
3. 创建并复制一个以 `sk-` 开头的 API key。

<span style="color:#cb5d21">**请妥善保管 key。**</span> 它会从你的账户扣费。不要把它粘贴到聊天、作业、截图或公开文件中。

---

## 4. 配置 Deep Code

Deep Code 会读取主目录下 `.deepcode` 文件夹里的 `settings.json`。

请粘贴与你的电脑对应的代码块。

**Windows PowerShell:**

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
notepad "$env:USERPROFILE\.deepcode\settings.json"
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
open -e ~/.deepcode/settings.json
```

把 `sk-REPLACE_WITH_YOUR_KEY` 替换成第 3 章创建的 key。保留引号，然后保存并关闭文件。

---

## 5. 下载 PBOH

1. 打开 [github.com/peterbrinson/PBOH](https://github.com/peterbrinson/PBOH)。
2. 点击绿色的 **Code** 按钮，然后选择 **Download ZIP**。
3. 解压，把 `PBOH-main` 改名为 `PBOH`，并移动到 Documents 等容易找到的位置。
4. 检查 `AGENTS.md`、`agent/` 和 `corpus/` 是否直接位于文件夹内。

---

## 6. 在 PBOH 文件夹中启动 Deep Code

输入 `cd `，把 `PBOH` 文件夹拖进终端，再按 Enter。然后运行：

```
deepcode
```

---

## 7. 开始对话并保存

Deep Code 不一定会自动读取辅导系统的说明，所以请先输入：

```
请阅读此文件夹中的 AGENTS.md，并按照其中的说明扮演 PBOH。然后开始一个 PBOH 会话。
```

用4到8句话描述一个项目想法，继续对话，直到 PBOH 生成 Prototype Plan。让它把文件保存到 `student-notes-private/projects/`。

如果这是课堂提交，请在文件开头加上 `Tool: DeepSeek (Deep Code)`。如果老师要求，也请保存完整对话。

接下来请阅读 [[Tutorials - LLM/Tutorial 1101 - Keep Using PBOH|Keep Using PBOH]]。

---

## 疑难排查

### 找不到 `deepcode` 命令

关闭所有终端，重新打开一个，再运行 `deepcode --version`。

### 它不像 PBOH

确认终端位于包含 `AGENTS.md` 的文件夹中，然后使用第 7 章的完整开场提示语。

### 身份验证失败

检查 key 是否完整、`settings.json` 是否位于主目录下的 `.deepcode` 文件夹中，以及 DeepSeek 账户是否还有余额。

### PowerShell 提示禁止运行脚本

以管理员身份打开 PowerShell，运行：

```
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

关闭管理员窗口，然后回到普通 PowerShell 窗口继续。

