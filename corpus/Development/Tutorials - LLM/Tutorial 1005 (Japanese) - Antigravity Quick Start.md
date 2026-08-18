---
type: Tutorial
cssclasses: unreal-tutorial
language: ja
translation_of: "Tutorial 1005 - Antigravity Quick Start"
publish: true
---

*[[Tutorials - LLM/Tutorial 1005 - Antigravity Quick Start|English version →]]*

## 0. はじめに

**ゴール。** このチュートリアルを終えると、Antigravity で PBOH を開き、プロジェクトのアイデアについて最初の会話を行い、Prototype Plan を自分専用の学生フォルダに保存できます。

**必要なもの:** 個人の Google アカウント、インターネット接続、約15分。ターミナル、GitHub アカウント、有料プランは必要ありません。

---

## 1. PBOH をダウンロードする

1. [github.com/peterbrinson/PBOH](https://github.com/peterbrinson/PBOH) を開きます。
2. 緑色の **Code** ボタンを押し、**Download ZIP** を選びます。
3. ZIP を解凍します。
   - **Windows:** 右クリック → **Extract All…**
   - **macOS:** ダブルクリック
4. `PBOH-main` を `PBOH` に名前変更し、Documents など見つけやすい場所へ移動します。
5. フォルダを開き、`agent/` と `corpus/` が直下にあることを確認します。

---

## 2. Antigravity をインストールする

1. [antigravity.google/download](https://antigravity.google/download) から、自分のコンピューター用の **Antigravity 2.0** をダウンロードします。
2. インストールして開きます。
3. 個人の Google アカウントでサインインします。

---

## 3. PBOH を開く

1. Antigravity で新しいプロジェクトを作成します。
2. フォルダを求められたら、`PBOH` フォルダそのものを選びます。Documents など親フォルダは選びません。
3. モデルを選ぶ画面が出たら、現在おすすめされている Pro モデルを使います。

---

## 4. PBOH セッションを始める

チャット欄に入力します。

```
PBOHセッションを始めます。
```

日本語で会話できます。PBOH は、The Investigator、The Traveler、The Dreamer、または Bounded Worlds のどれに取り組んでいるかを尋ねます。

---

## 5. アイデアを伝える

ゲームやプレイ可能な世界のアイデアを4〜8文で説明してください。仕組みだけでなく、プレイヤーにどんな体験をしてほしいかを伝えます。完成したアイデアでなくても構いません。

PBOH が「Here is a Prototype Plan for your project」と言うまで会話を続けます。

---

## 6. Prototype Plan を保存する

PBOH が保存を提案したら、承認してください。Antigravity がファイル変更の許可を求めた場合も承認します。保存先は次の場所です。

```
student-notes-private/projects/prototype-plan-<project-name>.md
```

授業の提出物にする場合は、ファイルの冒頭に `Tool: Gemini (Antigravity)` と書きます。先生から求められた場合は、会話全体もコピーまたは書き出してください。

次は [[Tutorials - LLM/Tutorial 1101 - Keep Using PBOH|Keep Using PBOH]] に進んでください。

---

## トラブルシューティング

### 普通のチャットボットのように振る舞う

Antigravity が間違ったフォルダを見ている可能性があります。`agent/`、`corpus/`、`AGENTS.md` を含むフォルダを開き直し、新しいセッションを始めてください。

### 解凍したフォルダが見つからない

Downloads フォルダを確認してください。Documents に移動し、`PBOH` に名前変更してから続けます。

### サインインできない

学校や職場の管理者によって Gemini が制限されている場合があります。個人の Google アカウントを試してください。

