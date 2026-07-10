---
type: Tutorial
cssclasses: unreal-tutorial
publish: true
---

*[English version →](https://vlabusc.github.io/The-GET/Development/Tutorials---LLM/Tutorial-1005---Antigravity-Quick-Start)*

## 0. はじめに

**ゴール。** このチュートリアルを終えると、The Game Engine Tutor(The GET)があなたのパソコンに入り、Gemini のデスクトップアプリ(Antigravity)で開かれ、最初の GET との会話を体験しています — ゲームのアイデアを伝え、話し合い、もらったプランを保存するところまで。

必要なのは **Google アカウント**(無料)だけです。

**始める前に。** この後すぐ、ゲームの大まかなアイデアを共有します。今授業で取り組んでいるものの説明でも、今日思いついたものでも構いません。The GET はあなたのアイデアを、Situated Player Roles(**The Investigator** と **The Traveler**)、あるいは **Bounded Worlds** のフレームワークを通して捉えることができます。どちらも授業で学んだものです。アイデアを練るとき、これらのうち一つ以上を取り入れてみてください。復習したいときは、クラスサイトのページへ(英語): [Situated Player Roles](https://vlabusc.github.io/The-GET/Design/Storytelling/) と [Bounded Worlds](https://vlabusc.github.io/The-GET/Design/Worldbuilding/)。

---

## 1. The GET をダウンロードする

*The GET はファイルの入ったフォルダです。プロジェクトページから ZIP として直接ダウンロードします — アカウントは不要です。*

1. ブラウザで **[github.com/vLabUSC/The-GET](https://github.com/vLabUSC/The-GET)** を開きます。
2. 緑色の **Code** ボタン(ファイル一覧の右上)をクリックします。
3. **Download ZIP** をクリックします。
4. 解凍します:
   - **Windows:** ダウンロードしたファイルを右クリック → **すべて展開…**
   - **macOS:** ダウンロードしたファイルをダブルクリック
5. **`The-GET-main`** という名前のフォルダができます。あとで見つけられる場所に移動してください — **Documents**(書類)フォルダがおすすめです。
6. フォルダの名前を `The-GET-main` から **`The-GET`** に**変更**します。

<span style="color:#cb5d21">**ここを見落とさないで:**</span> 解凍したら、フォルダを開いて中身を確認してください。`agent/` と `corpus/` というフォルダが直下に見えるはずです。

---

## 2. Antigravity をインストールする

*Antigravity は Gemini のデスクトップアプリ — The GET と話すためのプログラムです。*

1. お使いの環境向けの **Antigravity** 2.0 を [antigravity.google/download](https://antigravity.google/download) からダウンロードしてインストールします。
2. 起動して、**Google アカウントでサインイン**します。

> [!NOTE]
> **Antigravity API ではありません。** 使うのは通常の Antigravity デスクトップアプリです。より高度な Antigravity API ではありません。API には開発者キーの設定やカスタムツールなど、この授業に必要な範囲を超えた複雑さがあります。

---

## 3. GET フォルダを開く

このセットアップで一番大切なのは、Antigravity があなたの GET フォルダを見られるようにすることです。

1. Antigravity の左側で、新しいプロジェクトを作成します。
2. コンピューター上のフォルダを選ぶよう案内されます。
3. Step 1 で作った **`The-GET`** フォルダを直接指定します。

---

## 4. モデルを選ぶ

アプリが起動したら、モデルを選びます。**Gemini 3.1 Pro (High)** をおすすめします。

---

## 5. GET セッションを始める

チャット欄に、次のように入力します:

```
GETセッションを始めます。
```

日本語のままで大丈夫です — 会話も日本語で進められます。もちろん英語でも:

```
Start a GET session.
```

The GET が挨拶をして、何に取り組んでいるかを尋ねてきます。授業で学んだロール — **The Investigator**、**The Traveler** — と **Bounded Worlds** のフレームワークを知っています。どれから始めても大丈夫です。

---

## 6. アイデアを伝える

Step 0 で紹介したことの出番です: 持っているゲームのアイデアを The GET に伝えてください。具体的なものがベストです — メカニクスと同じくらい、**体験**を描写してください。

完成したコンセプトである必要はありません。思い浮かべられる状況があれば十分です — だいたい4〜8文くらい。生煮えでも構いません。わからないことが残っていてもいいのです。

> [!NOTE]
> The GET のページは英語ですが、会話は日本語でできます。

---

## 7. 受け取ったものを保存する

5〜10分ほどやり取りすると、The GET がプランをまとめます — 見ればわかります(具体的なセクションが並び、「Build Order」が含まれることもあります)。やることは二つ:

- **プランをフォルダ内のファイルに保存**してもらいましょう — 例: *「このプランを project-plan.md に保存して」*。
- 先生に求められたら、**会話全体**をテキストファイルにコピーしてください。会話そのものが、一番見る価値のあるものです。

---

## トラブルシューティング

### 普通のチャットボットみたいで、The GET らしくない

Antigravity が正しいフォルダを見ていない可能性が高いです。Step 3 で開いたフォルダが `agent/` と `corpus/` を含むものか確認して、もう一度「GETセッションを始めます。」と入力してください。

### 解凍したフォルダが見つからない

**Downloads**(ダウンロード)フォルダを確認してください — 解凍されたフォルダは ZIP ファイルの隣にできます。フォルダを Documents に移動して、Step 1 の項目 5 から続けてください。

### サインインできない

Antigravity には Google アカウントが必要です。複数のアカウントにサインインしている場合は、個人のものを選んでください。
