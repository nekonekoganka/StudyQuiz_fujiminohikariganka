# クイズHTML仕様書

このドキュメントは、新しいクイズHTMLファイルを追加する際の標準フォーマットを定義します。
Claude Codeは新しいクイズファイルが追加された際、この仕様書に従って修正・統合を行います。

---

## 1. 必須ファイル構成

```
quizzes/
├── quiz-config.js          # クイズ設定（共通）
├── 新しいクイズ.html        # 新規追加するクイズ
└── ...
```

---

## 2. quiz-config.js への登録

新しいクイズは `QUIZ_LIST` 配列に追加する必要があります。

```javascript
{
    id: 'unique-quiz-id',           // 一意のID（英数字とハイフン）
    name: 'クイズ名',                // 表示名
    file: 'ファイル名.html',         // HTMLファイル名
    totalQuestions: 28,             // 総問題数
    icon: '👓',                     // アイコン絵文字
    category: 'staff',              // 'staff' または 'patient'
    description: 'クイズの説明文',   // 簡潔な説明
    color: 'amber'                  // カラーテーマ（下記参照）
}
```

### 利用可能なカラーテーマ
- `blue` - 青系（院内ルール、近視など）
- `cyan` - シアン系（コンタクトレンズ、白内障）
- `teal` - ティール系（花粉症）
- `green` - 緑系（緑内障理解度）
- `amber` - 琥珀色系（老眼鏡合わせ、遠用メガネ）
- `purple` - 紫系（斜視、弱視）
- `indigo` - インディゴ系（緑内障検診）

### index.htmlに新しい色を追加する場合

新しいカラーテーマを使用する場合は、`index.html`のCSS内に以下のスタイルを追加してください：

```css
.quiz-card.新色名::before {
    background: linear-gradient(180deg, #開始色, #終了色);
}
```

例（purple）:
```css
.quiz-card.purple::before {
    background: linear-gradient(180deg, #ab47bc, #8e24aa);
}
```

---

## 3. HTMLファイル構造

### 3.1 必須 `<head>` 要素

```html
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>クイズ名 - スタッフ向け</title>
    <style>
        /* CSSスタイル（セクション4参照） */
    </style>
</head>
```

### 3.2 必須 `<body>` 構造

```html
<body>
    <div class="quiz-container">
        <h1>絵文字 クイズ名 絵文字</h1>
        <div class="subtitle">スタッフ向け - サブタイトル</div>

        <!-- トップリンク（必須） -->
        <div class="top-link"><a href="../index.html">← トップページへ</a></div>

        <!-- モード選択画面 -->
        <div id="modeSelection" class="mode-selection">
            <!-- モード選択ボタン -->
        </div>

        <!-- クイズエリア -->
        <div id="quizArea" class="hidden">
            <div class="quiz-status">
                <!-- スコア表示、プログレスバー -->
            </div>

            <!-- 問題カード群 -->
            <div class="question-card" id="question1">...</div>
            <!-- ... -->

            <!-- ナビゲーションボタン -->
            <div class="buttons">
                <button class="next-button hidden" onclick="nextQuestion()">次の問題へ</button>
                <button class="result-button hidden" onclick="showFinalScore()">結果発表へ</button>
            </div>
        </div>
    </div>

    <!-- quiz-config.js読み込み（必須） -->
    <script src="quiz-config.js"></script>

    <script>
        // QUIZ_ID定義（必須）
        const QUIZ_ID = 'unique-quiz-id';

        // JavaScriptコード（セクション5参照）
    </script>

    <!-- 結果表示カード（quiz-container の外に配置） -->
    <div id="finalResult" class="final-score-card hidden">
        <div id="resultDetail" class="result-detail"></div>
        <div class="buttons">
            <!-- 重要: モード選択ボタンは必ず goHome() を使用する（resetQuiz()ではない） -->
            <button class="home-button hidden" onclick="goHome()">🔄 モード選択</button>
            <a href="../mypage.html" class="mypage-button hidden">📊 学習記録</a>
            <a href="../index.html" class="top-button hidden">🏠 ホーム</a>
        </div>
    </div>
</body>
</html>
```

---

## 4. 必須CSSスタイル

### 4.1 トップリンク（必須）

```css
.top-link {
    display: block;
    text-align: center;
    margin-bottom: 20px;
}

.top-link a {
    background: linear-gradient(135deg, #667eea, #764ba2);
    color: white;
    text-decoration: none;
    font-size: 16px;
    font-weight: bold;
    padding: 12px 24px;
    border-radius: 25px;
    display: inline-block;
    transition: all 0.3s ease;
}

.top-link a:active {
    transform: scale(0.97);
}

@media (min-width: 768px) {
    .top-link a:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 25px rgba(102, 126, 234, 0.4);
    }
}
```

### 4.2 結果画面ボタン（必須）

```css
.home-button, .mypage-button, .top-button {
    display: inline-block;
    padding: 12px 24px;
    border-radius: 25px;
    font-size: 16px;
    font-weight: bold;
    text-decoration: none;
    cursor: pointer;
    transition: all 0.3s ease;
    border: none;
    margin: 5px;
}

.home-button {
    background: linear-gradient(135deg, #667eea, #764ba2);
    color: white;
}

.mypage-button {
    background: linear-gradient(135deg, #f093fb, #f5576c);
    color: white;
}

.top-button {
    background: linear-gradient(135deg, #4facfe, #00f2fe);
    color: white;
}
```

---

## 5. 必須JavaScript関数

### 5.1 QUIZ_ID定義（必須）

```javascript
const QUIZ_ID = 'unique-quiz-id';  // quiz-config.js のIDと一致させる
```

### 5.2 startQuiz関数

クイズ開始時の要素表示/非表示を制御します。

```javascript
function startQuiz(mode) {
    document.querySelector('h1').classList.add('hidden');
    document.querySelector('.subtitle').classList.add('hidden');
    // 注意: top-link は非表示にしない（クイズ中も表示する）
    document.getElementById('modeSelection').classList.add('hidden');
    document.getElementById('quizArea').classList.remove('hidden');

    // モード別処理...
}
```

**重要**: `top-link`はstartQuizで非表示にしません。クイズ中もトップページへ戻れるようにします。

### 5.3 showFinalScore関数

結果表示時の処理です。

```javascript
function showFinalScore() {
    // 問題を非表示
    questionList.forEach(questionId => {
        const qElem = document.getElementById(`question${questionId}`);
        if(qElem) qElem.classList.add('hidden');
    });

    document.querySelector('.next-button').classList.add('hidden');
    document.querySelector('.result-button').classList.add('hidden');
    document.querySelector('.quiz-status').classList.add('hidden');

    // 重要: quizAreaとquiz-containerを非表示にする
    document.getElementById('quizArea').classList.add('hidden');
    document.querySelector('.quiz-container').classList.add('hidden');

    const percentage = Math.round((score / totalQuestions) * 100);

    // 結果を記録（必須）
    if (typeof recordQuizResult === 'function') {
        recordQuizResult(QUIZ_ID, score, totalQuestions);
    }

    // 評価メッセージ生成
    let title, message;
    if (score === totalQuestions) {
        title = '完璧です！';
        message = '全問正解！';
    } else if (score >= totalQuestions * 0.8) {
        title = '素晴らしい！';
        message = '高得点です！';
    } else if (score >= totalQuestions * 0.5) {
        title = 'あと一歩！';
        message = '基本知識は身についています。';
    } else {
        title = '要復習！';
        message = '良い学習の機会になりましたね。';
    }

    // 結果HTMLを生成（resultTitleを含める）
    const resultTitleHTML = `<div class="result-title">結果発表</div>`;
    const scoreHTML = `<span class="final-score-highlight">最終スコア : ${score}/${totalQuestions}（${percentage}%）</span>`;
    const evaluationHTML = `<div class="result-evaluation">${title}</div>`;
    const messageHTML = `<div>${message}</div>`;

    document.getElementById('resultDetail').innerHTML = resultTitleHTML + evaluationHTML + scoreHTML + messageHTML;

    // 結果画面を表示
    document.getElementById('finalResult').classList.remove('hidden');
    document.querySelector('.home-button').classList.remove('hidden');
    document.querySelector('.mypage-button').classList.remove('hidden');
    document.querySelector('.top-button').classList.remove('hidden');
    document.querySelector('.top-link').classList.add('hidden');

    // トップへスクロール
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
```

### 5.4 resetQuiz関数

モード選択に戻る処理です。

```javascript
function resetQuiz() {
    document.getElementById('finalResult').classList.add('hidden');
    document.querySelector('.quiz-container').classList.remove('hidden');  // 必須
    document.querySelector('.top-link').classList.remove('hidden');        // 必須

    score = 0;
    updateScore();

    // 全問題をリセット
    for (let i = 1; i <= TOTAL_QUESTIONS; i++) {
        const questionElement = document.getElementById(`question${i}`);
        if(questionElement){
            questionElement.style.display = '';
            questionElement.classList.add('hidden');

            const options = questionElement.querySelectorAll('.option');
            options.forEach(option => {
                option.classList.remove('correct', 'incorrect', 'disabled');
            });

            questionElement.querySelector('.feedback').style.display = 'none';
            questionElement.querySelector('.explanation').classList.add('hidden');
        }
    }

    document.querySelector('.next-button').classList.add('hidden');
    document.querySelector('.result-button').classList.add('hidden');
    document.querySelector('.home-button').classList.add('hidden');
    document.querySelector('.mypage-button').classList.add('hidden');
    document.querySelector('.top-button').classList.add('hidden');
    document.querySelector('.quiz-status').classList.remove('hidden');

    // 適切なモードで再開
    startQuiz(previousMode);
}
```

### 5.5 goHome関数

トップページ（モード選択画面）に戻る処理です。

```javascript
function goHome() {
    document.getElementById('finalResult').classList.add('hidden');
    document.getElementById('quizArea').classList.add('hidden');
    document.querySelector('.quiz-container').classList.remove('hidden');  // 必須
    document.querySelector('.top-link').classList.remove('hidden');        // 必須

    document.querySelector('h1').classList.remove('hidden');
    document.querySelector('.subtitle').classList.remove('hidden');

    // 全問題をリセット
    for (let i = 1; i <= TOTAL_QUESTIONS; i++) {
        const questionElement = document.getElementById(`question${i}`);
        if(questionElement) {
            questionElement.style.display = '';
            questionElement.classList.add('hidden');

            const options = questionElement.querySelectorAll('.option');
            options.forEach(option => {
                option.classList.remove('correct', 'incorrect', 'disabled');
            });

            questionElement.querySelector('.feedback').style.display = 'none';
            questionElement.querySelector('.explanation').classList.add('hidden');
        }
    }

    document.querySelector('.next-button').classList.add('hidden');
    document.querySelector('.result-button').classList.add('hidden');
    document.querySelector('.home-button').classList.add('hidden');
    document.querySelector('.mypage-button').classList.add('hidden');
    document.querySelector('.top-button').classList.add('hidden');
    document.querySelector('.quiz-status').classList.remove('hidden');

    currentQuestion = 1;
    score = 0;
    totalQuestions = TOTAL_QUESTIONS;
    questionList = [];
    isDaily = false;

    updateScore();

    document.getElementById('modeSelection').classList.remove('hidden');
}
```

### 5.6 スクロール動作（回答後）

回答選択後、フィードバックが画面上部に表示されるようにスクロールします。

```javascript
function selectAnswer(selectedOption) {
    // ... 回答処理 ...

    // フィードバック表示後のスクロール
    feedbackElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
```

**重要**: `block: 'center'`ではなく`block: 'start'`を使用します。

---

## 6. 要素の表示/非表示ルール

| 状態 | h1 | subtitle | top-link | modeSelection | quizArea | quiz-container | finalResult |
|------|-----|----------|----------|---------------|----------|----------------|-------------|
| 初期状態 | 表示 | 表示 | 表示 | 表示 | hidden | 表示 | hidden |
| クイズ中 | hidden | hidden | **表示** | hidden | 表示 | 表示 | hidden |
| 結果画面 | hidden | hidden | hidden | hidden | hidden | **hidden** | 表示 |
| リセット後 | hidden | hidden | 表示 | hidden | 表示 | 表示 | hidden |
| ホーム後 | 表示 | 表示 | 表示 | 表示 | hidden | 表示 | hidden |

---

## 7. index.html への追加

トップページにクイズカードを追加します。

```html
<a href="quizzes/クイズファイル名.html" class="quiz-card カラー">
    <div class="quiz-icon">絵文字</div>
    <div class="quiz-content">
        <div class="quiz-title">クイズ名</div>
        <div class="quiz-description">クイズの説明</div>
        <div class="quiz-meta">
            <span class="quiz-tag tag-staff">スタッフ向け</span>
            <!-- または -->
            <span class="quiz-tag tag-patient">患者様向け</span>
        </div>
    </div>
    <span class="arrow">→</span>
</a>
```

### 配置場所
- **スタッフ向け**: `section-title`「スタッフ向けクイズ」の直下の`quiz-list`内
- **患者様向け**: `section-title`「患者様・ご家族向けクイズ」の直下の`quiz-list`内

---

## 8. チェックリスト

新しいクイズを追加する際は、以下を確認してください：

### quiz-config.js
- [ ] `QUIZ_LIST`に新しいエントリを追加
- [ ] `id`が一意であること
- [ ] `totalQuestions`が正しいこと
- [ ] `file`がファイル名と一致

### HTMLファイル
- [ ] `<title>`が適切に設定されている
- [ ] `<h1>`にクイズ名が設定されている
- [ ] `.top-link`のHTMLとCSSが存在する
- [ ] `quiz-config.js`の`<script>`読み込みがある
- [ ] `QUIZ_ID`が定義されている
- [ ] `recordQuizResult()`の呼び出しがある
- [ ] `finalResult`が`quiz-container`の**外**に配置されている
- [ ] 結果ボタン（モード選択、学習記録、ホーム）が存在する
- [ ] **モード選択ボタンが `onclick="goHome()"` になっている**（`resetQuiz()`ではない）

### JavaScript関数
- [ ] `startQuiz`: top-linkを非表示にしていない
- [ ] `showFinalScore`: quizAreaとquiz-containerを非表示にする
- [ ] `showFinalScore`: top-linkを非表示にする
- [ ] `resetQuiz`: quiz-containerとtop-linkを表示に戻す
- [ ] `goHome`: quiz-containerとtop-linkを表示に戻す
- [ ] スクロール: `block: 'start'`を使用

### index.html
- [ ] 適切なセクションにクイズカードを追加
- [ ] カラーテーマが設定されている
- [ ] カテゴリタグが正しい

### ループ処理
- [ ] 全てのforループが総問題数と一致（問題追加時は要注意）

### 復習・未挑戦モード（2026-01追加）
- [ ] JS: `TOTAL_QUESTIONS` 定数を追加
- [ ] CSS: `.mode-divider`, `.review-mode`, `.unanswered-mode`, `.mode-count`, `.disabled` を追加
- [ ] HTML: モード選択を4モードに変更（今日の3問、全問モード、復習モード、未挑戦モード）
- [ ] JS: `updateModeButtons()` 関数を追加
- [ ] JS: `shuffleArray()` 関数を追加
- [ ] JS: `startQuiz()` に `review`, `unanswered` モード分岐を追加
- [ ] JS: `selectAnswer()` に `recordQuestionResult()` 呼び出しを追加
- [ ] JS: `goHome()` に `updateModeButtons()` 呼び出しを追加
- [ ] JS: `DOMContentLoaded` で `updateModeButtons()` を呼び出す

---

## 9. よくある問題と解決方法

### 問題: クイズ中にトップリンクが表示されない
**原因**: `startQuiz`で`top-link`を`hidden`にしている
**解決**: `startQuiz`から`top-link`を非表示にするコードを削除

### 問題: 結果画面に余分なカードが表示される
**原因**: `showFinalScore`で`quiz-container`を非表示にしていない
**解決**: `showFinalScore`に以下を追加：
```javascript
document.getElementById('quizArea').classList.add('hidden');
document.querySelector('.quiz-container').classList.add('hidden');
```

### 問題: モード選択に戻ると画面が崩れる
**原因**: `resetQuiz`/`goHome`で`quiz-container`を表示に戻していない
**解決**: 両関数に以下を追加：
```javascript
document.querySelector('.quiz-container').classList.remove('hidden');
```

### 問題: 新しく追加した問題が常に表示される
**原因**: forループの上限が古い問題数のまま
**解決**: 全てのforループを新しい総問題数に更新

### 問題: 「モード選択」ボタンを押しても同じモードでやり直しになる
**原因**: 結果画面のモード選択ボタンで `resetQuiz()` を呼び出している
**解決**: `onclick="resetQuiz()"` を `onclick="goHome()"` に変更

> **重要**: `resetQuiz()` と `goHome()` の違い
> - `resetQuiz()`: 同じモードでクイズをやり直す（モード選択画面には戻らない）
> - `goHome()`: モード選択画面（今日の5問、全問モードなど）に戻る
>
> 結果画面の「モード選択」ボタンは必ず `goHome()` を使用してください。

---

## 更新履歴

| 日付 | 内容 |
|------|------|
| 2024-01 | 初版作成（老眼鏡合わせクイズを基に標準化） |
| 2025-01 | 近視クイズ・斜視クイズを追加、purpleカラーテーマを追加 |
| 2025-01 | index.htmlへの新色追加方法を追記 |
| 2025-01 | 遠用メガネ・弱視・白内障・緑内障検診クイズを追加、indigoカラーテーマを追加 |
| 2025-01 | **重要**: モード選択ボタンのバグ修正。`resetQuiz()`→`goHome()`に修正、仕様書にも反映 |
| 2026-01 | **新機能**: 復習モード・未挑戦モードを追加。モードを4つに整理（今日の3問、全問、復習、未挑戦） |

---

## 現在のクイズ一覧

| ID | クイズ名 | 問題数 | カテゴリ | 色 |
|----|---------|--------|----------|-----|
| innai-rule | 院内ルール確認クイズ | 15問 | staff | blue |
| contact-basic | コンタクトレンズ処方クイズ | 29問 | staff | cyan |
| kafunsho | 花粉症クイズ | 16問 | staff | teal |
| ryokunaisho | 緑内障理解度クイズ | 17問 | patient | green |
| megane-awase | 老眼鏡合わせクイズ | 28問 | staff | amber |
| kinshi | 近視クイズ | 10問 | staff | blue |
| shashi | 斜視クイズ | 10問 | staff | purple |
| enyo-megane | 遠用メガネ度数決定クイズ | 28問 | staff | amber |
| jakushi | 弱視クイズ | 15問 | staff | purple |
| hakunaisho | 白内障クイズ | 10問 | staff | cyan |
| ryokunaisho-kenshin | 緑内障検診クイズ | 14問 | staff | indigo |
