# ひかり眼科 学習クイズ

**[クイズに挑戦する](https://nekonekoganka.github.io/StudyQuiz_fujiminohikariganka/)**

ふじみ野ひかり眼科のスタッフ向け・患者様向け学習クイズアプリです。

> **スマートフォン最適化**
> このアプリは主にスマートフォンでの利用を想定して設計されています。
> 休憩時間や移動中など、いつでもどこでも手軽に学習できます。

## クイズ一覧

### スタッフ向け

| クイズ名 | 内容 |
|---------|------|
| [院内ルール確認クイズ](https://nekonekoganka.github.io/StudyQuiz_fujiminohikariganka/quizzes/院内ルール確認クイズ.html) | 休診日、予約ルール、受付時間など院内の基本ルール |
| [コンタクトレンズ処方クイズ](https://nekonekoganka.github.io/StudyQuiz_fujiminohikariganka/quizzes/コンタクト処方の基本クイズ.html) | コンタクトレンズの処方に関する基本知識 |
| [花粉症クイズ](https://nekonekoganka.github.io/StudyQuiz_fujiminohikariganka/quizzes/花粉症についてのクイズ.html) | 花粉症の症状や対処法についての知識 |
| [老眼鏡合わせクイズ](https://nekonekoganka.github.io/StudyQuiz_fujiminohikariganka/quizzes/老眼鏡合わせ_クイズ.html) | 老眼鏡合わせに関する基本知識 |
| [近視クイズ](https://nekonekoganka.github.io/StudyQuiz_fujiminohikariganka/quizzes/近視についてのクイズ.html) | 近視の基礎知識と患者様への説明ポイント |
| [斜視クイズ](https://nekonekoganka.github.io/StudyQuiz_fujiminohikariganka/quizzes/斜視クイズ.html) | 斜視の基礎知識と保護者への説明ポイント |
| [遠用メガネ度数決定クイズ](https://nekonekoganka.github.io/StudyQuiz_fujiminohikariganka/quizzes/大人の遠く用メガネ合わせクイズ.html) | 大人の遠用メガネ処方の知識 |
| [弱視クイズ](https://nekonekoganka.github.io/StudyQuiz_fujiminohikariganka/quizzes/弱視クイズ.html) | 弱視の基礎知識と保護者への説明ポイント |
| [白内障クイズ](https://nekonekoganka.github.io/StudyQuiz_fujiminohikariganka/quizzes/白内障についてクイズ.html) | 白内障の基礎知識と患者様への説明ポイント |
| [緑内障検診クイズ](https://nekonekoganka.github.io/StudyQuiz_fujiminohikariganka/quizzes/自治体の緑内障検診の制度のクイズ.html) | 自治体の緑内障検診制度についての知識 |

### 患者様・ご家族向け

| クイズ名 | 内容 |
|---------|------|
| [緑内障理解度クイズ](https://nekonekoganka.github.io/StudyQuiz_fujiminohikariganka/quizzes/緑内障についてクイズ.html) | 緑内障について正しく理解するためのクイズ |

## 機能

- 複数の出題モード（3問/5問/7問/フルコース）
- 選択肢のランダムシャッフル
- 正誤フィードバックと解説表示
- スコア表示と結果評価
- **マイページ**: 学習進捗の確認、実績バッジ
- スマートフォン最適化（タップ操作に最適化されたUI）
- iPhoneセーフエリア対応（ノッチ・ホームバー）

## 使い方

1. 上記リンクからクイズページにアクセス
2. 出題モードを選択
3. 選択肢をタップして回答
4. 解説を確認して次の問題へ
5. **マイページ**で学習進捗を確認

## 推奨環境

- **スマートフォン**（iPhone / Android）
- Safari / Chrome などのモダンブラウザ
- PC・タブレットでも利用可能

---

## マイページ機能

トップページ下部の「マイページ」から、学習進捗を確認できます。

### 進捗表示

| マーク | 意味 |
|--------|------|
| ー | 未挑戦 |
| ⭐ | 挑戦済み |
| 🌸 | 満点達成 |
| 🏆 | 全クイズコンプリート |

### 実績バッジ

| バッジ | 名前 | 条件 |
|--------|------|------|
| 🔰 | はじめの一歩 | どれかのクイズに1回挑戦 |
| 🌱 | コツコツ学習 | 合計で50問以上回答 |
| 🔥 | 熱心な挑戦者 | 合計で10回以上クイズに挑戦 |
| 💯 | 100問突破 | 合計で100問以上回答 |
| 📚 | 全制覇 | すべてのクイズに1回以上挑戦 |
| 🌸 | 満点達成 | どれかのクイズの「全問」モードで満点を取る |
| ⭐ | トリプル満点 | 3つ以上のクイズの「全問」モードで満点を取る |
| 📖 | 勉強家 | 合計で200問以上回答 |
| 💎 | ハーフ満点 | 6つ以上のクイズの「全問」モードで満点を取る |
| 👑 | クイズマスター | すべてのクイズの「全問」モードで満点を取る |

### データについて

- データはブラウザの LocalStorage に保存されます
- サーバーには送信されません
- ブラウザのデータを消去すると進捗もリセットされます

---

## 開発者向け情報

### ファイル構成

```
├── index.html                      # トップページ
├── mypage.html                     # マイページ（進捗確認）
├── quizzes/
│   ├── quiz-config.js              # クイズ設定ファイル（重要）
│   ├── 院内ルール確認クイズ.html
│   ├── コンタクト処方の基本クイズ.html
│   ├── 花粉症についてのクイズ.html
│   ├── 緑内障についてクイズ.html
│   ├── 老眼鏡合わせ_クイズ.html
│   ├── 近視についてのクイズ.html
│   ├── 斜視クイズ.html
│   ├── 大人の遠く用メガネ合わせクイズ.html
│   ├── 弱視クイズ.html
│   ├── 白内障についてクイズ.html
│   └── 自治体の緑内障検診の制度のクイズ.html
├── docs/
│   └── QUIZ_SPECIFICATION.md       # クイズHTML仕様書（詳細版）
├── QUIZ_SPEC.md                    # クイズHTML仕様書（簡易版）
└── README.md                       # このファイル
```

---

## 新しいクイズを追加する方法

### 手順1: quiz-config.js にエントリを追加

`quizzes/quiz-config.js` の `QUIZ_LIST` 配列に新しいクイズを追加します。

```javascript
const QUIZ_LIST = [
    // 既存のクイズ...

    // 新しいクイズを追加
    {
        id: 'new-quiz',                    // 一意のID（英数字・ハイフン）
        name: '新しいクイズ',               // 表示名
        file: '新しいクイズ.html',          // ファイル名
        totalQuestions: 10,                // 総問題数
        icon: '📝',                        // アイコン絵文字
        category: 'staff',                 // 'staff' または 'patient'
        description: 'クイズの説明文',      // 説明
        color: 'blue'                      // カードの色（blue/cyan/teal/green/amber/purple/indigo）
    }
];
```

#### 利用可能なカラーテーマ
- `blue` - 青系（院内ルール、近視など）
- `cyan` - シアン系（コンタクトレンズ、白内障）
- `teal` - ティール系（花粉症）
- `green` - 緑系（緑内障理解度）
- `amber` - 琥珀色系（老眼鏡合わせ、遠用メガネ）
- `purple` - 紫系（斜視、弱視）
- `indigo` - インディゴ系（緑内障検診）

### 手順2: 新しいクイズHTMLを作成

既存のクイズHTMLをコピーして、以下を変更します。

#### 必須の変更箇所

**1. タイトル・見出し**: クイズ名に変更

**2. QUIZ_ID の設定**: quiz-config.js で設定した `id` と一致させる

```html
<script src="quiz-config.js"></script>
<script>
    const QUIZ_ID = 'new-quiz';  // ← quiz-config.js の id と一致させる
```

**3. 問題数の設定**:

```javascript
let totalQuestions = 10;  // 問題数
const allQuestions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];  // 問題番号の配列
```

**4. 問題と選択肢の内容**:

```html
<div id="question1" class="question-card hidden">
    <div class="question-number">Q1</div>
    <div class="question-text">問題文をここに書く</div>
    <div class="options">
        <button class="option" data-answer="true">正解の選択肢</button>
        <button class="option" data-answer="false">不正解の選択肢</button>
        <!-- 選択肢を追加 -->
    </div>
    <div class="feedback"></div>
    <div class="explanation hidden">
        <strong>解説:</strong> 解説文をここに書く
    </div>
</div>
```

**5. resetQuiz / goHome 内のループ数**: 問題数に合わせる

```javascript
for (let i = 1; i <= 10; i++) {  // ← 問題数に変更
```

### 手順3: 動作確認

1. トップページにクイズが表示されることを確認
2. クイズを最後まで実行して結果が表示されることを確認
3. マイページに進捗が記録されることを確認

---

## 既存クイズに問題を追加する場合

既存のクイズHTMLに新しい問題を追加する際は、以下の**すべて**を更新してください：

| 更新箇所 | 説明 |
|----------|------|
| `totalQuestions` 変数 | ファイル上部の問題数 |
| `allQuestions` 配列 | 問題番号の配列に新しい番号を追加 |
| `startQuiz` 関数内のループ | `for (let i = 1; i <= N; i++)` のNを更新 |
| `resetQuiz` 関数内のループ | 同上 |
| `goHome` 関数内のループ | 同上 |
| `goHome` 関数内の `totalQuestions` | リセット時の問題数 |
| モードボタンの表示 | 「全N問」の表示を更新 |
| モード説明文 | 「全N問から〜」の説明を更新 |
| `quiz-config.js` | `totalQuestions` の値を更新 |

> **注意**: ループの上限値を更新し忘れると、新しい問題が常に表示されたままになるバグが発生します。

---

## UI/UX仕様（統一ルール）

新しいクイズを追加する際は、以下の仕様を守ってください。

### スクロール動作

回答後のスクロールは、フィードバック（正解/不正解）が**画面上部**に来るように設定します。

```javascript
// スマホ用：回答後にフィードバックが画面上部に来るようスクロール
setTimeout(() => {
    feedback.scrollIntoView({ behavior: 'smooth', block: 'start' });
}, 100);
```

- `block: 'start'` を使用（`center` ではない）
- これにより選択肢は画面外になり、フィードバックと解説が見やすくなります

### 結果画面のボタン配置

結果画面には3つのボタンを表示します：

| ボタン | 色 | 用途 |
|--------|------|------|
| 🔄 モード選択 | オレンジ | 同じクイズを別モードで再挑戦 |
| 📊 学習記録 | ティール | マイページへ移動 |
| 🏠 ホーム | 紫 | トップページへ移動 |

---

## クイズHTMLの詳細仕様

詳細な仕様は以下を参照してください：
- [docs/QUIZ_SPECIFICATION.md](./docs/QUIZ_SPECIFICATION.md) - 詳細版（Claude Code用）
- [QUIZ_SPEC.md](./QUIZ_SPEC.md) - 簡易版

---

## デプロイ

GitHub Pages で静的サイトとしてホスティングできます。

1. リポジトリの Settings → Pages を開く
2. Source で `main` ブランチを選択
3. 保存すると自動的にデプロイされます

---

## ライセンス

プライベートリポジトリ - ふじみ野ひかり眼科
